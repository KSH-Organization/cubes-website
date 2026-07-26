"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const events = [
  {
    date: "March 2022",
    location: "KSHC Headquarters",
    organizer: "KSHC Project Management Office - CUBE",
    title: "Structural Design Workshop",
    overview:
      "This technical workshop was organized to address a major structural design issue identified in one of KSHC-Cube's development projects. After the contractor completed the design review, several critical errors were detected, requiring immediate collaborative intervention before issuing the final Issued for Construction (IFC) drawings.",
    activities:
      "Brought together contractor, consultant, and third-party structural engineering expert for detailed discussions, reviewed problematic sections, and explored engineering alternatives.",
    outcome:
      "Identified root cause, agreed on optimal engineering solutions, aligned all parties on updated design details, ensured IFC drawings were prepared accurately.",
    images: [
      "/images/event-1.jpg",
      "/images/event-2.jpg",
      "/images/event-3.jpg",
      "/images/event-4.jpg",
    ],
  },
  {
    date: "November 2023",
    location: "KSHC Headquarters",
    organizer: "KSHC Project Management Office - CUBE",
    title: "Project Management Training Program",
    overview:
      "An intensive capacity-building program designed to strengthen project management skills across KSHC-Cube teams. The program covered international frameworks and modern planning tools used in large-scale construction delivery.",
    activities:
      "Delivered hands-on training in Primavera P6 scheduling, earned value management, and risk workshops, with case studies drawn from ongoing KSHC-Cube projects.",
    outcome:
      "Raised team proficiency in scheduling and cost control, standardized reporting templates, and established a shared project governance language across departments.",
    images: [
      "/images/event-3.jpg",
      "/images/event-4.jpg",
      "/images/event-1.jpg",
      "/images/event-2.jpg",
    ],
  },
  {
    date: "June 2024",
    location: "Khartoum",
    organizer: "KSHC Project Management Office - CUBE",
    title: "Engineering Coordination Forum",
    overview:
      "A cross-disciplinary forum bringing together consultants, contractors, and suppliers to align on engineering standards, quality expectations, and delivery timelines for KSHC-Cube's active developments.",
    activities:
      "Facilitated coordination sessions between design and site teams, reviewed interface issues across structural and MEP packages, and agreed on escalation workflows.",
    outcome:
      "Improved cross-party coordination, reduced design clashes, and set a recurring cadence for technical alignment meetings across all major projects.",
    images: [
      "/images/event-2.jpg",
      "/images/event-1.jpg",
      "/images/event-4.jpg",
      "/images/event-3.jpg",
    ],
  },
];

export default function EventsCarousel() {
  const [index, setIndex] = useState(0);
  const event = events[index];
  const prev = () => setIndex((index + events.length - 1) % events.length);
  const next = () => setIndex((index + 1) % events.length);

  return (
    <div className="relative mt-14">
      <button
        type="button"
        onClick={prev}
        aria-label="Previous event"
        className="absolute top-1/2 -left-4 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-lg transition-colors hover:text-orange lg:-left-16"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next event"
        className="absolute top-1/2 -right-4 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-lg transition-colors hover:text-orange lg:-right-16"
      >
        <ChevronRight size={22} />
      </button>

      <div className="rounded-xl border border-gray-200 bg-white p-7 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-14">
          <div>
            <p className="text-xs font-bold tracking-wider text-orange-mid uppercase">
              Event Date
            </p>
            <p className="font-manrope mt-1 text-[22px] font-semibold text-navy">
              {event.date}
            </p>
            <p className="mt-6 text-xs font-bold tracking-wider text-orange-mid uppercase">
              Location
            </p>
            <p className="font-manrope mt-1 text-navy">{event.location}</p>
            <p className="mt-6 text-xs font-bold tracking-wider text-orange-mid uppercase">
              Organized By
            </p>
            <p className="font-manrope mt-1 text-navy">{event.organizer}</p>
            <div className="mt-7 grid grid-cols-2 gap-3">
              {event.images.map((src, i) => (
                <Image
                  key={`${event.title}-${i}`}
                  src={src}
                  alt={`${event.title} photo ${i + 1}`}
                  width={268}
                  height={178}
                  className="h-[89px] w-full rounded-md object-cover"
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-extrabold text-navy sm:text-[32px] sm:leading-tight">
              {event.title}
            </h3>
            <p className="mt-6 text-xs font-bold tracking-wider text-gray-500 uppercase">
              Overview
            </p>
            <p className="font-manrope mt-3 leading-relaxed text-gray-700">
              {event.overview}
            </p>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-xs font-bold tracking-wider text-gray-500 uppercase">
                  Key Activities
                </p>
                <p className="font-manrope mt-3 leading-relaxed text-gray-600">
                  {event.activities}
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-6">
                <p className="text-xs font-bold tracking-wider text-orange-mid uppercase">
                  Outcome
                </p>
                <p className="font-manrope mt-3 leading-relaxed text-gray-700">
                  {event.outcome}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        {events.map((e, i) => (
          <button
            key={e.title}
            type="button"
            aria-label={`Go to event ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-2 bg-orange" : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
