"use client";

import { useState } from "react";
import { ClipboardList, Megaphone, Trophy, type LucideIcon } from "lucide-react";
import RowIcon from "./RowIcon";

// Built-in icons per tab `key`; an icon uploaded in the CMS for that row wins.
const TAB_ICONS: Record<string, LucideIcon> = {
  milestones: ClipboardList,
  announcements: Megaphone,
  achievements: Trophy,
};

export type TabRow = {
  key: string;
  label: string;
  title: string;
  intro: string;
  /** One bullet per line (a CMS textarea holds them as a single string). */
  bullets: string;
  icon?: string;
};

export default function NewsTabs({ tabs }: { tabs: TabRow[] }) {
  const [active, setActive] = useState(0);
  const tab = tabs[active];
  if (!tab) return null;
  const bullets = tab.bullets.split(/\r?\n/).filter((b) => b.trim() !== "");

  return (
    <div className="mt-12">
      <div className="grid gap-4 sm:grid-cols-3">
        {tabs.map((t, i) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setActive(i)}
            className={`h-12 rounded-lg text-[15px] font-bold transition-colors ${
              i === active
                ? "bg-gradient-to-b from-orange to-orange-mid text-white shadow-[0_6px_16px_rgba(232,135,30,0.4)]"
                : "border border-gray-200 bg-white text-navy hover:border-orange"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-gray-200 bg-white p-7 sm:p-10">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-b from-orange to-orange-mid text-white">
            <RowIcon
              src={tab.icon}
              fallback={TAB_ICONS[tab.key] ?? ClipboardList}
              size={26}
              alt={tab.title}
            />
          </span>
          <h3 className="text-xl font-extrabold text-navy sm:text-2xl">
            {tab.title}
          </h3>
        </div>
        <p className="font-manrope mt-6 leading-relaxed text-gray-600">
          {tab.intro}
        </p>
        <ul className="mt-5 space-y-3">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                aria-hidden
              />
              <span className="font-manrope text-[15px] text-gray-600">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
