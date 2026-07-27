"use client";

import { useState } from "react";
import SmartImage from "./SmartImage";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type EventRow = {
  key: string;
  title: string;
  date: string;
  location: string;
  organizer: string;
  overview: string;
  activities: string;
  outcome: string;
  /** Up to four photos, each edited on this event's own row in the CMS. */
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
};

export default function EventsCarousel({ events }: { events: EventRow[] }) {
  const [index, setIndex] = useState(0);
  const event = events[index];
  const prev = () => setIndex((index + events.length - 1) % events.length);
  const next = () => setIndex((index + 1) % events.length);
  if (!event) return null;
  const photos = [event.image1, event.image2, event.image3, event.image4].filter(
    (src): src is string => typeof src === "string" && src.trim() !== "",
  );

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
              {photos.map((src, i) => (
                <SmartImage
                  key={`${event.key}-${i}`}
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
            key={e.key}
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
