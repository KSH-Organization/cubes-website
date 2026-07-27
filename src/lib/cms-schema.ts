/**
 * How this site's content is laid out in the MOHTAWA CMS. Imported by BOTH the
 * read layer (`src/lib/cms.ts`) and the manifest builder
 * (`scripts/build-manifest.ts`), so the two can never drift.
 *
 * Model:
 *  - Each top-level key of `src/content/site.ts` becomes one CMS **Page**
 *    (slug = the key). Its nested objects become sections; every leaf string
 *    becomes a block whose `id` is the full dot-path (`home.hero.title`), and
 *    every array of objects becomes one `list` block.
 *  - Lists that editors add to/remove from over time (projects, departments,
 *    vacancies, events) are **Collections** instead — one row per item.
 *  - Images and icons live ON the block or row they belong to: a card's image
 *    is a column of that card's row, never a separate "media" bucket, so an
 *    editor always knows which item they're changing.
 */

// Top-level content keys that become CMS Pages.
export const PAGE_BASES = [
    "globals",
    "home",
    "about",
    "people",
    "services",
    "news",
    "career",
    "contact",
    "newsTabs",
] as const;

export type PageBase = (typeof PAGE_BASES)[number];

export type CollectionDef = {
    /** CMS collection slug. */
    slug: string;
    /** Where the rows are injected into the content tree. */
    path: string;
    /** Human label for the CMS. */
    name: string;
    /** Column ids, in order. `key` is always first and is the upsert identity. */
    fields: string[];
    /** Which of those columns are images (get a Media Library picker). */
    imageFields?: string[];
};

export const COLLECTIONS: CollectionDef[] = [
    {
        slug: "projects",
        name: "Projects",
        path: "about.projects",
        fields: ["key", "title", "body", "image"],
        imageFields: ["image"],
    },
    {
        slug: "departments",
        name: "Departments",
        path: "people.departments",
        fields: ["key", "title", "body", "image"],
        imageFields: ["image"],
    },
    {
        slug: "vacancies",
        name: "Vacancies",
        path: "career.vacancies",
        fields: ["key", "title", "location", "deadline", "qualifications"],
    },
    {
        slug: "events",
        name: "Events",
        path: "news.events",
        fields: [
            "key",
            "title",
            "date",
            "location",
            "organizer",
            "overview",
            "activities",
            "outcome",
            "image1",
            "image2",
            "image3",
            "image4",
        ],
        imageFields: ["image1", "image2", "image3", "image4"],
    },
];

/** Content paths owned by a Collection — skipped when building page blocks. */
export const COLLECTION_PATHS = COLLECTIONS.map((c) => c.path);

/**
 * Row columns that are media rather than text, keyed by the list block's
 * dot-path id. The builder types these as `image` so the CMS shows a Media
 * Library picker inline on that row.
 *
 * `icon` columns start empty and fall back to the component's built-in Lucide
 * icon for that row's `key`, so the site never loses its icons.
 */
export const ROW_MEDIA: Record<string, string[]> = {
    "globals.footer.social": ["icon"],
    "home.whoWeAre.points": ["icon"],
    "home.objectives.items": ["icon"],
    "home.servicesOverview.items": ["image"],
    "home.pmServices.items": ["image"],
    "home.reServices.items": ["image"],
    "services.offers.items": ["icon"],
    "services.re.items": ["icon"],
    "newsTabs.items": ["icon"],
};

/** Leaf block ids that hold a single image (hero backgrounds, logo, etc.). */
export const IMAGE_BLOCK_IDS = new Set([
    "globals.brand.logo",
    "home.hero.image",
    "home.whoWeAre.image",
    "about.hero.image",
    "about.overview.image",
    "people.hero.image",
    "services.hero.image",
    "news.hero.image",
    "career.hero.image",
    "contact.hero.image",
]);
