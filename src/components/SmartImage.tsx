import Image, { type ImageProps } from "next/image";

type SmartImageProps = Omit<ImageProps, "src"> & { src: string };

/**
 * next/image throws on `data:` URIs, which the CMS editor can produce when an
 * image is pasted straight into content. Every image on this site is CMS-first
 * with a bundled fallback, so any of them could be one — this wrapper drops to
 * a plain <img> in that case and keeps next/image everywhere else.
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
  return <Image src={src} alt={alt} {...rest} />;
}
