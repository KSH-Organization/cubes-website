/**
 * PWA manifest — what Android/Chrome use when the site is added to a home
 * screen, and where the install prompt takes its name and icon from.
 */
import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: `${SITE_NAME} — Construction & Real Estate`,
        short_name: SITE_NAME,
        description:
            "Construction, project management and real estate development across Sudan.",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        // --color-navy from globals.css, so the Android status bar matches the
        // site header instead of showing an unrelated tint.
        theme_color: "#07364d",
        icons: [
            { src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "any" },
            {
                src: "/icon-maskable.png",
                sizes: "512x512",
                type: "image/png",
                // Lets Android crop to its own shape without clipping the art.
                purpose: "maskable",
            },
            { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
        ],
    };
}
