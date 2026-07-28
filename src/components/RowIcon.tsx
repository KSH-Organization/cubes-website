import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { assetUrl } from "@/lib/asset-url";

/**
 * An item's icon: whatever the admin uploaded for that row in the CMS, or the
 * component's built-in Lucide icon when they haven't uploaded one.
 *
 * next/image refuses `data:` URIs, and the CMS editor can produce those, so we
 * drop to a plain <img> for that case.
 */
export default function RowIcon({
  src,
  fallback: Fallback,
  size = 26,
  className = "",
  strokeWidth,
  alt = "",
}: {
  src?: unknown;
  fallback: LucideIcon;
  size?: number;
  className?: string;
  strokeWidth?: number;
  alt?: string;
}) {
  const uploaded = typeof src === "string" ? src.trim() : "";
  if (!uploaded) {
    return (
      <Fallback size={size} strokeWidth={strokeWidth} className={className} aria-hidden />
    );
  }
  // Uploaded icons keep their own colours, so drop any text-* tint.
  const imgClass = `${className.replace(/text-\S+/g, "")} object-contain`.trim();
  if (uploaded.startsWith("data:")) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img src={uploaded} alt={alt} width={size} height={size} className={imgClass} />
    );
  }
  return (
    <Image src={assetUrl(uploaded)} alt={alt} width={size} height={size} className={imgClass} />
  );
}
