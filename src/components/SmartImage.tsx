import Image, { type ImageProps } from "next/image";
import { assetUrl } from "@/lib/asset-url";

type SmartImageProps = Omit<ImageProps, "src"> & { src: string };

/**
 * Every image on this site goes through here, which makes it the one place to
 * handle the two things a plain next/image can't:
 *
 *  - `data:` URIs — next/image throws on them, and the CMS editor produces one
 *    when an image is pasted straight into content, so drop to a plain <img>.
 *  - stale bundled assets — `assetUrl` appends a content hash, so replacing a
 *    file in public/images changes its URL and the new image appears
 *    immediately instead of waiting out the optimiser's cache TTL.
 *
 * CMS Media Library URLs pass through untouched: they are already immutable,
 * since re-uploading an image mints a new id.
 */
export default function SmartImage({ src, alt, ...rest }: SmartImageProps) {
  if (src.startsWith("data:")) {
    const { width, height, className, style } = rest;
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={src}
        alt={alt}
        width={typeof width === "number" ? width : undefined}
        height={typeof height === "number" ? height : undefined}
        className={className}
        style={style}
      />
    );
  }
  return <Image src={assetUrl(src)} alt={alt} {...rest} />;
}
