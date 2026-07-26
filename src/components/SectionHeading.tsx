import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  underline?: boolean;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  underline = false,
  align = "center",
  dark = false,
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "text-center" : "text-left"} ${className}`}>
      {eyebrow && (
        <p className="text-sm font-bold tracking-wide text-orange uppercase">
          {eyebrow}
        </p>
      )}
      <h2
        className={`${eyebrow ? "mt-3" : ""} text-3xl font-extrabold sm:text-4xl lg:text-[40px] lg:leading-tight ${
          dark ? "text-white" : "text-royal"
        }`}
      >
        {title}
      </h2>
      {underline && (
        <span
          className={`mt-5 block h-1 w-14 rounded-full bg-orange ${
            centered ? "mx-auto" : ""
          }`}
          aria-hidden
        />
      )}
      {subtitle && (
        <p
          className={`mt-5 max-w-[820px] text-base leading-relaxed sm:text-lg ${
            dark ? "text-slate-200" : "text-gray-500"
          } ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
