"use client";

import { useState } from "react";
import { ClipboardList, Megaphone, Trophy } from "lucide-react";

const tabs = [
  {
    label: "Project Milestones",
    icon: ClipboardList,
    title: "Project Milestones & Updates",
    intro:
      "We regularly share progress reports and achievements across our ongoing construction and development projects. This includes updates on timelines, engineering milestones, contractor achievements, and quality assurance results.",
    bullets: [
      "Progress reports for large-scale construction sites",
      "Announcements of structural, architectural, or MEP milestones",
      "Completion of key phases such as excavation, concrete works, or façade installation",
      "Updates related to new partnerships or contractor appointments",
    ],
  },
  {
    label: "Announcements",
    icon: Megaphone,
    title: "Corporate Announcements",
    intro:
      "Official announcements from KSHC-Cube covering organizational updates, new project launches, strategic partnerships, and important notices for our clients, partners, and community.",
    bullets: [
      "New project launches and development plans",
      "Strategic partnerships and signed agreements",
      "Organizational and leadership updates",
      "Official notices for clients and stakeholders",
    ],
  },
  {
    label: "Achievements",
    icon: Trophy,
    title: "Achievements & Recognition",
    intro:
      "Milestones we are proud of - awards, certifications, and recognition earned through our commitment to engineering excellence, quality, and sustainable development across Sudan.",
    bullets: [
      "Awards and industry recognition",
      "Quality and safety certifications",
      "Successfully delivered projects and handovers",
      "Team accomplishments and professional certifications",
    ],
  },
];

export default function NewsTabs() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];
  const Icon = tab.icon;

  return (
    <div className="mt-12">
      <div className="grid gap-4 sm:grid-cols-3">
        {tabs.map((t, i) => (
          <button
            key={t.label}
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
            <Icon size={26} />
          </span>
          <h3 className="text-xl font-extrabold text-navy sm:text-2xl">
            {tab.title}
          </h3>
        </div>
        <p className="font-manrope mt-6 leading-relaxed text-gray-600">
          {tab.intro}
        </p>
        <ul className="mt-5 space-y-3">
          {tab.bullets.map((b) => (
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
