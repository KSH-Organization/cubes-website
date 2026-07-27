import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import SmartImage from "@/components/SmartImage";
import { getContent, list, text } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const c = await getContent();
  return { title: text(c, "about.meta.title") };
}

type StatRow = { key: string; value: string; label: string };
type PillarRow = { key: string; title: string; body: string };
type ProjectRow = { key: string; title: string; body: string; image?: string };

export default async function AboutPage() {
  const c = await getContent();
  const stats = list<StatRow>(c, "about.overview.stats");
  const pillars = list<PillarRow>(c, "about.why.items");
  const projects = list<ProjectRow>(c, "about.projects");

  return (
    <>
      <Hero
        image={text(c, "about.hero.image")}
        badge={text(c, "about.hero.badge")}
        size="xl"
        title={text(c, "about.hero.title")}
        subtitle={text(c, "about.hero.subtitle")}
      />

      {/* Company Overview */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading
            eyebrow={text(c, "about.overview.eyebrow")}
            title={text(c, "about.overview.title")}
            subtitle={text(c, "about.overview.subtitle")}
          />
          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="max-w-[520px] leading-relaxed text-gray-600">
                {text(c, "about.overview.body")}
              </p>
              <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {stats.map((s) => (
                  <div
                    key={s.key}
                    className="rounded-xl border border-gray-200 bg-slate-50 p-6 text-center shadow-sm"
                  >
                    <p className="text-3xl font-extrabold text-orange-mid sm:text-4xl">
                      {s.value}
                    </p>
                    <p className="mt-3 text-[13px] font-bold text-navy">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <SmartImage
                src={text(c, "about.overview.image")}
                alt={text(c, "about.overview.badgeText")}
                width={1200}
                height={840}
                className="w-full rounded-2xl object-cover shadow-xl"
              />
              <div className="absolute bottom-6 left-6 max-w-[320px] rounded-lg bg-white/95 p-4 shadow-lg backdrop-blur-sm">
                <p className="text-xs font-bold tracking-wide text-orange-mid uppercase">
                  {text(c, "about.overview.badgeEyebrow")}
                </p>
                <p className="mt-1 text-sm font-semibold text-navy">
                  {text(c, "about.overview.badgeText")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose KSHC */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading
            eyebrow={text(c, "about.why.eyebrow")}
            title={text(c, "about.why.title")}
            subtitle={text(c, "about.why.subtitle")}
          />
          <div className="mt-14 space-y-6">
            {pillars.map((p, i) => (
              <div
                key={p.key}
                className="flex flex-col gap-5 rounded-2xl bg-white p-8 shadow-md sm:flex-row sm:items-start sm:gap-8"
              >
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-orange-mid text-xl font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-extrabold text-navy">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-500">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading
            eyebrow={text(c, "about.projectsSection.eyebrow")}
            title={text(c, "about.projectsSection.title")}
            subtitle={text(c, "about.projectsSection.subtitle")}
          />
          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:gap-14">
            {projects.map((p) => (
              <div
                key={p.key}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md"
              >
                <SmartImage
                  src={p.image ?? ""}
                  alt={p.title}
                  width={1040}
                  height={756}
                  className="h-[280px] w-full object-cover sm:h-[378px]"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-extrabold text-navy">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-gray-500">{p.body}</p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-2 font-bold text-orange-mid transition-colors hover:text-orange-dark"
                  >
                    {text(c, "about.projectsSection.viewDetails")} <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
