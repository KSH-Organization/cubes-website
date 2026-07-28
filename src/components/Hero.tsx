import type { ReactNode } from "react";
import { Fragment } from "react";
import { assetUrl } from "@/lib/asset-url";

type HeroProps = {
  image: string;
  badge?: string;
  dot?: boolean;
  title: ReactNode;
  subtitle?: ReactNode;
  size?: "xl" | "lg" | "md" | "sm";
  children?: ReactNode;
};

const heights: Record<NonNullable<HeroProps["size"]>, string> = {
  xl: "min-h-[640px] lg:min-h-[772px]",
  lg: "min-h-[560px] lg:min-h-[648px]",
  md: "min-h-[480px] lg:min-h-[552px]",
  sm: "min-h-[400px] lg:min-h-[432px]",
};

const titleSizes: Record<NonNullable<HeroProps["size"]>, string> = {
  xl: "text-4xl sm:text-5xl lg:text-[64px] lg:leading-[1.1]",
  lg: "text-4xl sm:text-5xl lg:text-[64px] lg:leading-[1.1]",
  md: "text-4xl sm:text-5xl lg:text-[56px] lg:leading-[1.1]",
  sm: "text-3xl sm:text-4xl lg:text-[48px] lg:leading-[1.2]",
};

/**
 * Renders a CMS string with line breaks: a literal "\n" (or a real newline)
 * becomes a <br> that only shows on wider screens, matching how these
 * headings were hand-wrapped before the copy moved into the CMS.
 */
function withBreaks(value: ReactNode): ReactNode {
  if (typeof value !== "string") return value;
  const lines = value.split(/\r?\n|\\n/);
  if (lines.length === 1) return value;
  return lines.map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br className="hidden sm:block" />}
      {line}
    </Fragment>
  ));
}

export default function Hero({
  image,
  badge,
  dot = true,
  title,
  subtitle,
  size = "lg",
  children,
}: HeroProps) {
  return (
    <section
      className={`relative flex ${heights[size]} items-center bg-cover bg-center`}
      style={{ backgroundImage: `url(${assetUrl(image)})` }}
    >
      <div className="absolute inset-0 bg-overlay/70" aria-hidden />
      <div className="relative mx-auto w-full max-w-[1200px] px-5 py-20 lg:px-0">
        {badge && (
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[13px] font-bold text-white backdrop-blur-sm">
            {dot && <span className="h-2 w-2 rounded-full bg-orange" aria-hidden />}
            {badge}
          </span>
        )}
        <h1
          className={`mt-6 max-w-[820px] font-extrabold text-white ${titleSizes[size]}`}
        >
          {withBreaks(title)}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-[760px] text-base leading-relaxed text-slate-100 sm:text-lg">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
