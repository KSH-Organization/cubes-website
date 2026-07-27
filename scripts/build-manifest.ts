/**
 * Generates `cubes.manifest.json` — the declarative content manifest this site
 * sends to MOHTAWA's `POST /api/seed`, which does the actual creating.
 *
 * The site declares WHAT its content is; the CMS knows HOW to store it. Shapes
 * come from `src/lib/cms-schema.ts`, shared with the read layer, so seeded
 * content always matches what the site reads back.
 *
 * Usage:
 *   npx tsx scripts/build-manifest.ts     # writes cubes.manifest.json
 *   npm run seed:cms                      # build + send in one step
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { content } from "../src/content/site";
import {
    departments,
    events,
    projects,
    vacancies,
} from "../src/content/collections";
import {
    COLLECTIONS,
    COLLECTION_PATHS,
    IMAGE_BLOCK_IDS,
    PAGE_BASES,
    ROW_MEDIA,
} from "../src/lib/cms-schema";

type Json = Record<string, unknown>;

const isPlainObject = (v: unknown): v is Json =>
    typeof v === "object" && v !== null && !Array.isArray(v);

const isLong = (v: string) => v.length > 80 || v.includes("\n");

function titleCase(key: string): string {
    return key
        .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
        .replace(/[-_.]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase())
        .trim();
}

type Block = {
    id: string;
    type: string;
    label: string;
    value?: string;
    fields?: { id: string; type: string; label: string }[];
    items?: Json[];
};
type Section = { title: string; blocks: Block[] };

/** Column type: media columns get a Media Library picker in the CMS. */
function fieldType(blockId: string, columnId: string): string {
    const media = ROW_MEDIA[blockId] ?? [];
    if (media.includes(columnId)) return "image";
    if (columnId === "body" || columnId === "text") return "longtext";
    return "text";
}

const textBlock = (id: string, key: string, value: string): Block => ({
    id,
    // Single images are stored as an `image` block so the editor gets a picker
    // right where that image is used.
    type: IMAGE_BLOCK_IDS.has(id) ? "image" : isLong(value) ? "longtext" : "text",
    label: titleCase(key),
    value,
});

function listBlock(id: string, key: string, rows: Json[]): Block {
    const media = ROW_MEDIA[id] ?? [];
    const columns = Object.keys(rows[0] ?? {});
    for (const m of media) if (!columns.includes(m)) columns.push(m);
    return {
        id,
        type: "list",
        label: titleCase(key),
        fields: columns.map((c) => ({
            id: c,
            type: fieldType(id, c),
            label: titleCase(c),
        })),
        // Icon columns seed empty so the built-in Lucide icon keeps showing
        // until an admin uploads one; image columns keep their bundled asset.
        items: rows.map((row) => {
            const out: Json = { ...row };
            for (const m of media) if (out[m] === undefined) out[m] = "";
            return out;
        }),
    };
}

/** Flatten one namespace into blocks; nested objects recurse, arrays → lists. */
function buildBlocks(prefix: string, obj: Json): Block[] {
    const blocks: Block[] = [];
    for (const [k, v] of Object.entries(obj)) {
        const path = prefix ? `${prefix}.${k}` : k;
        if (COLLECTION_PATHS.includes(path)) continue; // owned by a Collection
        if (Array.isArray(v)) {
            if (v.length && isPlainObject(v[0])) blocks.push(listBlock(path, k, v as Json[]));
        } else if (isPlainObject(v)) {
            blocks.push(...buildBlocks(path, v));
        } else if (v != null) {
            blocks.push(textBlock(path, k, String(v)));
        }
    }
    return blocks;
}

/** Sections for one page: each nested object becomes its own section. */
function buildPageSections(base: string, ns: Json): Section[] {
    const sections: Section[] = [];
    const general: Block[] = [];

    for (const [key, val] of Object.entries(ns)) {
        const path = `${base}.${key}`;
        if (COLLECTION_PATHS.includes(path)) continue;
        if (Array.isArray(val)) {
            if (val.length && isPlainObject(val[0]))
                general.push(listBlock(path, key, val as Json[]));
        } else if (isPlainObject(val)) {
            sections.push({ title: titleCase(key), blocks: buildBlocks(path, val) });
        } else if (val != null) {
            general.push(textBlock(path, key, String(val)));
        }
    }
    if (general.length) sections.unshift({ title: "General", blocks: general });
    return sections.filter((s) => s.blocks.length > 0);
}

const tree = content as unknown as Json;

const pages = PAGE_BASES.map((base) => ({
    slug: base,
    title: titleCase(base),
    sections: buildPageSections(base, (tree[base] ?? {}) as Json),
}));

const rowsFor: Record<string, Json[]> = {
    projects: projects as unknown as Json[],
    departments: departments as unknown as Json[],
    vacancies: vacancies as unknown as Json[],
    events: events as unknown as Json[],
};

const collections = COLLECTIONS.map((def) => ({
    name: def.name,
    slug: def.slug,
    schema: {
        fields: def.fields.map((id) => ({
            id,
            type: def.imageFields?.includes(id)
                ? "image"
                : id === "body" ||
                    id === "overview" ||
                    id === "activities" ||
                    id === "outcome" ||
                    id === "qualifications"
                    ? "longtext"
                    : "text",
            label: titleCase(id),
            localized: false,
        })),
    },
    rows: rowsFor[def.slug] ?? [],
}));

// Public inboxes — ids mirror what the site's forms actually POST.
const forms = [
    {
        name: "Contact Messages",
        slug: "contact-messages",
        description: "Messages sent from the website's contact form",
        fields: [
            { id: "name", type: "text", label: "Full name", required: true },
            { id: "email", type: "email", label: "Email", required: true },
            { id: "phone", type: "phone", label: "Phone" },
            { id: "message", type: "textarea", label: "Message", required: true },
        ],
    },
    {
        name: "Job Applications",
        slug: "job-applications",
        description: "Applications submitted from the careers page",
        // ids mirror the name attributes in src/components/ApplicationForm.tsx
        fields: [
            { id: "fullName", type: "text", label: "Full name", required: true },
            { id: "email", type: "email", label: "Email", required: true },
            { id: "phone", type: "phone", label: "Phone", required: true },
            { id: "dateOfBirth", type: "text", label: "Date of birth" },
            { id: "nationality", type: "text", label: "Nationality" },
            { id: "location", type: "text", label: "Current location / city", required: true },
            { id: "linkedin", type: "text", label: "LinkedIn profile URL" },
            { id: "position", type: "text", label: "Position applying for", required: true },
            { id: "experience", type: "text", label: "Years of experience", required: true },
            { id: "employer", type: "text", label: "Current employer" },
            { id: "jobTitle", type: "text", label: "Current job title" },
            { id: "expectedSalary", type: "text", label: "Expected salary range" },
            { id: "startDate", type: "text", label: "Available start date" },
            { id: "degree", type: "text", label: "Highest degree", required: true },
            { id: "university", type: "text", label: "University / institution", required: true },
            { id: "fieldOfStudy", type: "text", label: "Field of study", required: true },
            { id: "graduationYear", type: "text", label: "Graduation year" },
            // Uploads are files; submissions are JSON, so we record the chosen
            // filenames and ask for links in the notes.
            { id: "cv", type: "text", label: "CV filename" },
            { id: "coverLetter", type: "text", label: "Cover letter filename" },
            { id: "certificates", type: "text", label: "Certificate filenames" },
            { id: "motivation", type: "textarea", label: "Why join KSHC-Cube?" },
            { id: "notes", type: "textarea", label: "Additional notes" },
        ],
    },
];

const manifest = {
    // Single-language site: one default locale keeps the CMS consistent.
    locales: [{ code: "en", name: "English", isDefault: true }],
    pages,
    collections,
    forms,
};

const out = join(process.cwd(), "cubes.manifest.json");
writeFileSync(out, JSON.stringify(manifest, null, 2) + "\n", "utf8");

const blockCount = pages.reduce(
    (n, p) => n + p.sections.reduce((m, s) => m + s.blocks.length, 0),
    0,
);
const rowCount = collections.reduce((n, c) => n + c.rows.length, 0);
console.log(
    `Wrote ${out}\n  ${pages.length} pages (${blockCount} blocks), ` +
    `${collections.length} collections (${rowCount} rows), ${forms.length} forms`,
);
