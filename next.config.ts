import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Bundled image URLs carry a `?v=<content-hash>` (see src/lib/asset-url.ts).
    // Next refuses local sources with a query unless they are allow-listed, so
    // permit exactly the fingerprinted assets under /images.
    localPatterns: [{ pathname: "/images/**", search: "" }, { pathname: "/images/**" }],
    // Safe to cache optimised output hard: changing a file changes its hash and
    // therefore its URL, so nothing serves a stale copy. CMS Media Library URLs
    // are immutable for the same reason — a re-upload mints a new id.
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
