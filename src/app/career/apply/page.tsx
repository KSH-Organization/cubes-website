import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ApplicationForm from "@/components/ApplicationForm";
import { getContent, text } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const c = await getContent();
  return { title: text(c, "career.apply.meta.title") };
}

export default async function ApplyPage() {
  const c = await getContent();

  return (
    <>
      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-0">
          <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
            <Link href="/career" className="text-gray-500 hover:text-orange-mid">
              {text(c, "career.apply.breadcrumbParent")}
            </Link>
            <ChevronRight size={15} className="text-gray-400" />
            <span className="font-semibold text-orange-mid">
              {text(c, "career.apply.breadcrumbCurrent")}
            </span>
          </nav>
          <h1 className="mt-6 text-4xl font-extrabold text-navy lg:text-[44px]">
            {text(c, "career.apply.title")}
          </h1>
          <p className="mt-4 max-w-[640px] leading-relaxed text-gray-500">
            {text(c, "career.apply.body")}
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-[1040px] px-5 lg:px-0">
          <ApplicationForm />
        </div>
      </section>
    </>
  );
}
