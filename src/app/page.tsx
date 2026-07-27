import {
  BadgeCheck,
  CheckCircle2,
  FolderCog,
  Globe,
  Handshake,
  Leaf,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";
import Hero from "@/components/Hero";
import RowIcon from "@/components/RowIcon";
import SectionHeading from "@/components/SectionHeading";
import SmartImage from "@/components/SmartImage";
import { getContent, list, text } from "@/lib/cms";

// Built-in icons, matched to each row by its `key`. An icon uploaded in the
// CMS for that row wins; these are what renders until then.
const OBJECTIVE_ICONS: Record<string, LucideIcon> = {
  excellence: BadgeCheck,
  documents: FolderCog,
  satisfaction: Handshake,
  technology: Lightbulb,
  network: Globe,
  sustainability: Leaf,
};

type ObjectiveRow = { key: string; title: string; body: string; icon?: string };
type PointRow = { key: string; text: string; icon?: string };
type ServiceCardRow = { key: string; title: string; image?: string };
type NumberedRow = { key: string; title: string; body: string; image?: string };

function NumberedCard({
  number,
  title,
  body,
  image,
}: {
  number: string;
  title: string;
  body: string;
  image: string;
}) {
  return (
    <div className="relative pt-7">
      <span
        aria-hidden
        className="absolute top-0 right-4 z-10 text-[40px] leading-none font-extrabold text-orange-mid drop-shadow-[2px_3px_0_rgba(7,54,77,0.15)]"
      >
        {number}
      </span>
      <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <SmartImage
          src={image}
          alt={title}
          width={466}
          height={274}
          className="h-[137px] w-full rounded-md object-cover"
        />
        <h3 className="mt-5 text-sm font-extrabold tracking-wide text-navy uppercase">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-400">{body}</p>
      </div>
    </div>
  );
}

export default async function HomePage() {
  const c = await getContent();

  const points = list<PointRow>(c, "home.whoWeAre.points");
  const objectives = list<ObjectiveRow>(c, "home.objectives.items");
  const serviceCards = list<ServiceCardRow>(c, "home.servicesOverview.items");
  const pmServices = list<NumberedRow>(c, "home.pmServices.items");
  const reServices = list<NumberedRow>(c, "home.reServices.items");

  return (
    <>
      <Hero
        image={text(c, "home.hero.image")}
        badge={text(c, "home.hero.badge")}
        size="lg"
        title={text(c, "home.hero.title")}
        subtitle={text(c, "home.hero.subtitle")}
      />

      {/* Who We Are */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading
            title={text(c, "home.whoWeAre.title")}
            subtitle={text(c, "home.whoWeAre.subtitle")}
          />
          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <SmartImage
              src={text(c, "home.whoWeAre.image")}
              alt={text(c, "home.whoWeAre.title")}
              width={1136}
              height={960}
              className="w-full rounded-2xl object-cover shadow-xl"
            />
            <div>
              <h3 className="text-2xl font-extrabold text-royal sm:text-[28px] sm:leading-snug">
                {text(c, "home.whoWeAre.heading")}
              </h3>
              <p className="mt-5 leading-relaxed text-gray-500">
                {text(c, "home.whoWeAre.body")}
              </p>
              <ul className="mt-7 space-y-4">
                {points.map((item) => (
                  <li key={item.key} className="flex items-center gap-3">
                    <RowIcon
                      src={item.icon}
                      fallback={CheckCircle2}
                      size={22}
                      className="shrink-0 text-orange"
                      alt={item.text}
                    />
                    <span className="font-bold text-navy">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Objectives */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading
            dark
            title={text(c, "home.objectives.title")}
            subtitle={text(c, "home.objectives.subtitle")}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {objectives.map(({ key, title, body, icon }) => (
              <div key={key} className="rounded-xl bg-white p-8 text-center shadow-lg">
                <span className="mx-auto block w-fit">
                  <RowIcon
                    src={icon}
                    fallback={OBJECTIVE_ICONS[key] ?? BadgeCheck}
                    size={44}
                    strokeWidth={1.6}
                    className="text-orange-mid"
                    alt={title}
                  />
                </span>
                <h3 className="mt-5 text-lg font-bold text-orange-mid">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading
            title={text(c, "home.servicesOverview.title")}
            subtitle={text(c, "home.servicesOverview.subtitle")}
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {serviceCards.map((card) => (
              <div
                key={card.key}
                className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
              >
                <SmartImage
                  src={card.image ?? ""}
                  alt={card.title}
                  width={1168}
                  height={684}
                  className="h-[240px] w-full object-cover sm:h-[330px]"
                />
                <p className="py-6 text-center text-xl font-bold text-navy">
                  {card.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Management Services */}
      <section className="bg-gray-100 py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading
            title={text(c, "home.pmServices.title")}
            subtitle={text(c, "home.pmServices.subtitle")}
          />
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {pmServices.map((s, i) => (
              <NumberedCard
                key={s.key}
                number={String(i + 1).padStart(2, "0")}
                title={s.title}
                body={s.body}
                image={s.image ?? ""}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Real Estate Services */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <SectionHeading
            title={text(c, "home.reServices.title")}
            subtitle={text(c, "home.reServices.subtitle")}
          />
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {reServices.map((s, i) => (
              <NumberedCard
                key={s.key}
                number={String(i + 1).padStart(2, "0")}
                title={s.title}
                body={s.body}
                image={s.image ?? ""}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
