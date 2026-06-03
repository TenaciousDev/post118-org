"use client";

import { useState } from "react";

/* ── Config ─────────────────────────────────────────────────────── */

// Keys are "YYYY-M" where M is JS month (0-indexed: June = 5)
const FIFTH_FRIDAYS: Record<string, { title: string; time: string; description: string }> = {};

const BIKE_NIGHTS: Record<string, { band: string; time: string }> = {
  "2026-5": { band: "TBD", time: "6:00 PM" },
  "2026-6": { band: "TBD", time: "6:00 PM" },
  "2026-7": { band: "TBD", time: "6:00 PM" },
  "2026-8": { band: "TBD", time: "6:00 PM" },
};

// month is 1-indexed in this array to match human-readable dates
const ONE_OFF: {
  year: number; month: number; day: number;
  title: string; type: string; label: string; sub: string; time: string;
  featured?: boolean;
}[] = [
  {
    year: 2026, month: 7, day: 4,
    title: "Revolutionary War Reenactors",
    type: "featured",
    label: "July 4th Event",
    sub: "Outdoor · Open to the public",
    time: "All day",
    featured: true,
  },
  {
    year: 2026, month: 8, day: 22,
    title: "Lainie's Ride",
    type: "featured",
    label: "Charity Motorcycle Ride",
    sub: "Open to the public · All riders welcome · Benefits local autism needs",
    time: "Registration 9:00 AM · Kickstands up 11:00 AM",
    featured: true,
  },
  {
    year: 2026, month: 10, day: 31,
    title: "Trunk-or-Treat",
    type: "community",
    label: "Fall Family Event",
    sub: "Open to the public · Kids welcome",
    time: "5:00 PM – 8:00 PM",
  },
];

/* ── Helpers ─────────────────────────────────────────────────────── */

const MONTH_NAMES = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

const DAY_ABBR = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const DINNER_ROTATION = [
  { title: "Fish Fry",                time: "5:00 PM" },
  { title: "Chicken Fried Steak Dinner", time: "6:00 PM" },
  { title: "Steak Dinner",            time: "6:00 PM" },
  { title: "Lasagna Dinner",          time: "6:00 PM" },
];

// June–September (0-indexed months 5–8)
function isBikeMonth(m: number) { return m >= 5 && m <= 8; }

function fridaysInMonth(year: number, month: number): Date[] {
  const d = new Date(year, month, 1);
  while (d.getDay() !== 5) d.setDate(d.getDate() + 1);
  const out: Date[] = [];
  while (d.getMonth() === month) { out.push(new Date(d)); d.setDate(d.getDate() + 7); }
  return out;
}

function sameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();
}

/* ── Types ───────────────────────────────────────────────────────── */

type Card = {
  id: string; label: string; title: string; sub: string; time: string;
  note?: string; border: string; tbd?: boolean; featured?: boolean;
};

type Row = { date: Date; cards: Card[]; isPast: boolean; isNextUp: boolean; };

/* ── Schedule builder ────────────────────────────────────────────── */

function buildSchedule(year: number, month: number, today: Date): Row[] {
  const key = `${year}-${month}`;
  const rows: Row[] = [];

  fridaysInMonth(year, month).forEach((date, i) => {
    const week = i + 1;
    const cards: Card[] = [];

    if (week === 5) {
      const cfg = FIFTH_FRIDAYS[key];
      cards.push({
        id: `${key}-5`,
        label: "5th Friday",
        title: cfg ? cfg.title : "TBD",
        sub: cfg ? cfg.description : "Check back for details",
        time: cfg ? cfg.time : "TBD",
        border: "border-l-amber-400",
        tbd: !cfg,
      });
    } else {
      const dinner = DINNER_ROTATION[i];
      cards.push({
        id: `${key}-${week}-dinner`,
        label: "Weekly Dinner",
        title: dinner.title,
        sub: "Open to the public",
        time: dinner.time,
        border: "border-l-legion-blue",
      });

      if (week === 1) {
        cards.push({
          id: `${key}-1-openmic`,
          label: "Live Music",
          title: "Open Mic Night",
          sub: "Open to the public",
          time: "8:00 PM",
          border: "border-l-purple-500",
        });
      } else if (week === 2) {
        cards.push({
          id: `${key}-2-karaoke`,
          label: "Entertainment",
          title: "Karaoke Night",
          sub: "Open to the public",
          time: "8:00 PM",
          border: "border-l-purple-500",
        });
      } else if (week === 4) {
        if (isBikeMonth(month)) {
          const bike = BIKE_NIGHTS[key];
          cards.push({
            id: `${key}-4-bike`,
            label: "Bike Night",
            title: "Bike Night",
            sub: "Open to the public",
            time: bike ? bike.time : "TBD",
            note: bike ? `Featuring: ${bike.band}` : undefined,
            border: "border-l-amber-500",
            tbd: !bike,
          });
        } else {
          cards.push({
            id: `${key}-4-karaoke`,
            label: "Entertainment",
            title: "Karaoke Night",
            sub: "Open to the public",
            time: "8:00 PM",
            border: "border-l-purple-500",
          });
        }
      }
      // 3rd Friday: dinner only
    }

    rows.push({ date, cards, isPast: false, isNextUp: false });
  });

  // One-off events
  ONE_OFF.forEach((ev) => {
    if (ev.year !== year || ev.month !== month + 1) return;
    const evDate = new Date(ev.year, ev.month - 1, ev.day);
    const card: Card = {
      id: `oneoff-${ev.year}-${ev.month}-${ev.day}-${ev.type}`,
      label: ev.label, title: ev.title, sub: ev.sub, time: ev.time,
      featured: ev.featured,
      border: ev.featured ? "border-l-legion-red" : ev.type === "bingo" ? "border-l-green-500" : ev.type === "community" ? "border-l-orange-400" : "border-l-legion-red",
    };
    const existing = rows.find((r) => sameDay(r.date, evDate));
    if (existing) { existing.cards.push(card); }
    else { rows.push({ date: evDate, cards: [card], isPast: false, isNextUp: false }); }
  });

  rows.sort((a, b) => a.date.getTime() - b.date.getTime());

  // Mark past / next-up
  const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  let hasPast = false;
  let nextUpSet = false;
  rows.forEach((row) => {
    const d = new Date(row.date.getFullYear(), row.date.getMonth(), row.date.getDate());
    row.isPast = d < todayMidnight;
    if (row.isPast) hasPast = true;
    if (!row.isPast && hasPast && !nextUpSet) { row.isNextUp = true; nextUpSet = true; }
  });

  return rows;
}

/* ── Card component ──────────────────────────────────────────────── */

function EventCard({ card }: { card: Card }) {
  if (card.featured) {
    return (
      <div className={`flex-1 min-w-0 bg-legion-navy rounded border border-legion-red/40 border-l-4 ${card.border} px-4 py-3`}>
        <div className="flex items-center gap-2 mb-1">
          <p className="text-xs font-bold uppercase tracking-widest text-legion-red">{card.label}</p>
          <span className="text-legion-red text-xs">★ Featured</span>
        </div>
        <p className="font-semibold text-sm text-white">{card.title}</p>
        <p className="text-white/50 text-xs mt-0.5">{card.sub}</p>
        <div className="flex items-center gap-1.5 mt-2">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5 shrink-0 text-white/40">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span className="text-xs text-white/60">{card.time}</span>
        </div>
        {card.note && <p className="text-xs italic mt-1.5 text-white/50">{card.note}</p>}
      </div>
    );
  }

  return (
    <div className={`flex-1 min-w-0 bg-white rounded border border-gray-200 border-l-4 ${card.border} px-4 py-3`}>
      <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${card.tbd ? "text-gray-300" : "text-gray-400"}`}>
        {card.label}
      </p>
      <p className={`font-semibold text-sm ${card.tbd ? "text-gray-300 italic" : "text-legion-navy"}`}>
        {card.title}
      </p>
      <p className="text-gray-400 text-xs mt-0.5">{card.sub}</p>
      <div className="flex items-center gap-1.5 mt-2">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5 shrink-0 text-gray-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <span className={`text-xs ${card.tbd ? "text-gray-300 italic" : "text-gray-500"}`}>{card.time}</span>
      </div>
      {card.note && (
        <p className={`text-xs italic mt-1.5 ${card.tbd ? "text-gray-300" : "text-gray-500"}`}>{card.note}</p>
      )}
    </div>
  );
}

/* ── Main component ──────────────────────────────────────────────── */

export default function EventList() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const isCurrentMonth = year === today.getFullYear() && month === today.getMonth();
  const rows = buildSchedule(year, month, today);

  function prevMonth() {
    if (isCurrentMonth) return;
    if (month === 0) { setYear((y) => y - 1); setMonth(11); }
    else setMonth((m) => m - 1);
  }

  function nextMonth() {
    if (month === 11) { setYear((y) => y + 1); setMonth(0); }
    else setMonth((m) => m + 1);
  }

  return (
    <div>
      {/* Month navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevMonth}
          disabled={isCurrentMonth}
          aria-label="Previous month"
          className="p-2 rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-legion-navy">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <h2 className="text-lg font-bold text-legion-navy">
          {MONTH_NAMES[month]} {year}
        </h2>
        <button
          onClick={nextMonth}
          aria-label="Next month"
          className="p-2 rounded hover:bg-gray-100 transition-opacity"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-legion-navy">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Event rows */}
      <div className="flex flex-col gap-3">
        {rows.length === 0 && (
          <p className="text-center text-gray-400 text-sm py-10">No events scheduled this month.</p>
        )}
        {rows.map((row, i) => (
          <div key={i}>
            {row.isNextUp && (
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-xs font-semibold text-legion-red uppercase tracking-widest">Next up</span>
                <div className="h-px flex-1 bg-legion-red" />
              </div>
            )}
            <div className={`flex gap-3 ${row.isPast ? "opacity-[45%]" : ""}`}>
              {/* Date column */}
              <div className="shrink-0 w-14 bg-legion-navy rounded flex flex-col items-center justify-center py-3 text-center">
                <span className="text-white/60 text-xs uppercase tracking-wide leading-none">
                  {row.date.toLocaleDateString("en-US", { month: "short" })}
                </span>
                <span className="text-white font-bold text-2xl leading-tight">
                  {row.date.getDate()}
                </span>
                <span className="text-white/50 text-xs leading-none">
                  {DAY_ABBR[row.date.getDay()]}
                </span>
              </div>

              {/* Event cards */}
              <div className="flex flex-col sm:flex-row gap-3 flex-1 min-w-0">
                {row.cards.map((card) => (
                  <EventCard key={card.id} card={card} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
