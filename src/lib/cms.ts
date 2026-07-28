/**
 * Reads this site's content from the MOHTAWA CMS and overlays it on the local
 * copy in `src/content`.
 *
 * The site ALWAYS renders: local content is the fallback, and the CMS only
 * overrides the leaves it actually defines. If the CMS is unreachable, slow,
 * or empty, pages render from the bundle exactly as before.
 *
 * Fetched server-side only (these are React Server Components), so the CMS URL
 * and its shape are never exposed to the browser.
 */
import { content } from "@/content/site";
import {
    departments,
    events,
    projects,
    vacancies,
} from "@/content/collections";
import { COLLECTIONS, PAGE_BASES } from "./cms-schema";
import { DEFAULT_LOCALE } from "./site-config";

const CMS_API_URL = (
    process.env.CMS_API_URL ?? "http://localhost:3000/api"
).replace(/\/+$/, "");

const FETCH_TIMEOUT_MS = 3000;

// Server-side cache window (Next.js Data Cache). Short so an editor sees their
// change within seconds; raise it for a high-traffic deploy.
const REVALIDATE_SECONDS = Number(process.env.CMS_REVALIDATE_SECONDS ?? "5");

export type Json = Record<string, unknown>;

const isPlainObject = (v: unknown): v is Json =>
    typeof v === "object" && v !== null && !Array.isArray(v);

/** The local content tree, with collections injected at their paths. */
function localTree(): Json {
    const tree = structuredClone(content) as unknown as Json;
    setPath(tree, "about.projects", structuredClone(projects));
    setPath(tree, "people.departments", structuredClone(departments));
    setPath(tree, "career.vacancies", structuredClone(vacancies));
    setPath(tree, "news.events", structuredClone(events));
    return tree;
}

function setPath(target: Json, path: string, value: unknown): void {
    const parts = path.split(".");
    let node = target;
    for (let i = 0; i < parts.length - 1; i++) {
        const key = parts[i];
        if (!isPlainObject(node[key])) node[key] = {};
        node = node[key] as Json;
    }
    node[parts[parts.length - 1]] = value;
}

async function fetchJson(path: string, locale?: string): Promise<Json | null> {
    // The CMS keys translations by locale; asking for the default locale is the
    // same as asking for no locale at all, so the query is omitted there.
    const url =
        locale && locale !== DEFAULT_LOCALE
            ? `${CMS_API_URL}${path}?locale=${encodeURIComponent(locale)}`
            : `${CMS_API_URL}${path}`;
    try {
        const res = await fetch(url, {
            signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
            next: { revalidate: REVALIDATE_SECONDS },
        });
        if (!res.ok) return null;
        return (await res.json()) as Json;
    } catch {
        // CMS down / slow / misconfigured → the site runs on local content.
        return null;
    }
}

type CmsBlock = { id?: unknown; type?: unknown; value?: unknown; items?: unknown };

async function fetchPageBlocks(
    slug: string,
    locale?: string,
): Promise<CmsBlock[] | null> {
    const page = await fetchJson(`/pages/slug/${slug}`, locale);
    if (!page) return null;
    const sections = Array.isArray(page.sections) ? page.sections : [];
    const blocks: CmsBlock[] = [];
    for (const section of sections) {
        const content = (section as Json)?.content;
        const list = isPlainObject(content) ? content.blocks : null;
        if (Array.isArray(list)) blocks.push(...(list as CmsBlock[]));
    }
    return blocks;
}

async function fetchCollectionRows(
    slug: string,
    locale?: string,
): Promise<Json[] | null> {
    const collection = await fetchJson(`/collections/slug/${slug}`, locale);
    if (!collection) return null;
    return Array.isArray(collection.items) ? (collection.items as Json[]) : null;
}

const nonEmptyString = (v: unknown): string | null =>
    typeof v === "string" && v.trim() !== "" ? v : null;

/**
 * Builds the CMS override tree. Only non-empty leaves are included, so
 * `deepMerge` falls back to local content for anything the CMS leaves blank —
 * which is exactly how an un-uploaded image keeps its bundled asset.
 */
async function fetchCmsOverrides(locale?: string): Promise<Json | null> {
    const [pageBlockLists, ...collectionRowLists] = await Promise.all([
        Promise.all(PAGE_BASES.map((base) => fetchPageBlocks(base, locale))),
        ...COLLECTIONS.map((c) => fetchCollectionRows(c.slug, locale)),
    ]);

    const tree: Json = {};
    let gotAnything = false;

    for (const blocks of pageBlockLists) {
        if (!blocks) continue;
        for (const block of blocks) {
            const id = nonEmptyString(block.id);
            if (!id) continue;
            if (block.type === "list") {
                if (Array.isArray(block.items)) {
                    setPath(tree, id, block.items);
                    gotAnything = true;
                }
            } else {
                const value = nonEmptyString(block.value);
                if (value) {
                    setPath(tree, id, value);
                    gotAnything = true;
                }
            }
        }
    }

    COLLECTIONS.forEach((def, i) => {
        const rows = collectionRowLists[i];
        if (!rows || rows.length === 0) return;
        setPath(tree, def.path, rows);
        gotAnything = true;
    });

    return gotAnything ? tree : null;
}

/**
 * Deep-merges `override` onto `base`; the override wins on every leaf it
 * defines. Arrays replace wholesale (a CMS list replaces the local fallback).
 */
export function deepMerge<T extends Json>(base: T, override: Json | null | undefined): T {
    if (!override) return base;
    const result: Json = { ...base };
    for (const [key, overrideValue] of Object.entries(override)) {
        if (overrideValue === undefined || overrideValue === null) continue;
        const baseValue = result[key];
        result[key] =
            isPlainObject(baseValue) && isPlainObject(overrideValue)
                ? deepMerge(baseValue, overrideValue)
                : overrideValue;
    }
    return result as T;
}

/**
 * The site's content for this request: local copy with CMS values overlaid.
 * Every page/component calls this instead of importing `content` directly.
 *
 * For a non-default locale the merge is three-deep:
 *
 *   local English  →  CMS English  →  CMS <locale>
 *
 * so an Arabic page shows Arabic wherever a translation exists and English
 * everywhere it doesn't, key by key. That is deliberate: a half-translated site
 * still renders complete pages, and each string switches to Arabic the moment
 * an editor fills it in — no code change, no empty page in between.
 *
 * Note this means Arabic pages are partly English until the CMS is populated.
 * They are still indexable and correct; `hreflang` continues to advertise them
 * as the Arabic alternates.
 */
export async function getContent(locale: string = DEFAULT_LOCALE): Promise<Json> {
    const base = localTree();
    if (locale === DEFAULT_LOCALE) {
        return deepMerge(base, await fetchCmsOverrides());
    }
    const [defaultOverrides, localeOverrides] = await Promise.all([
        fetchCmsOverrides(),
        fetchCmsOverrides(locale),
    ]);
    return deepMerge(deepMerge(base, defaultOverrides), localeOverrides);
}

/** Reads a dot-path out of the merged tree, e.g. `home.hero.title`. */
export function pick(tree: Json, path: string): unknown {
    return path
        .split(".")
        .reduce<unknown>((acc, k) => (isPlainObject(acc) ? acc[k] : undefined), tree);
}

/** String leaf with a typed fallback, so a component never renders `undefined`. */
export function text(tree: Json, path: string, fallback = ""): string {
    const v = pick(tree, path);
    return typeof v === "string" && v.trim() !== "" ? v : fallback;
}

/** Array leaf (list block or collection rows). */
export function list<T = Json>(tree: Json, path: string, fallback: T[] = []): T[] {
    const v = pick(tree, path);
    return Array.isArray(v) && v.length > 0 ? (v as T[]) : fallback;
}
