"use client";

import { useState } from "react";
import { assetPath } from "@/lib/assetPath";

/* ── Types ───────────────────────────────────────────────────────── */

type Org = {
  id: string;
  logo: string;
  darkBg: boolean;
  name: string;
  unit: string;
  tagline: string;
  description: string;
  about: string;
  eligibility: string[];
  whatTheyDo: string[];
  externalUrl: string;
  externalLabel: string;
};

/* ── Data ────────────────────────────────────────────────────────── */

const ORGS: Org[] = [
  {
    id: "tal",
    logo: "/images/logo-tal.png",
    darkBg: true,
    name: "The American Legion",
    unit: "Hendricks County Post 118",
    tagline: "For God and Country",
    description:
      "The backbone of the American Legion Family — a community of U.S. veterans united in service.",
    about:
      "The American Legion is the nation's largest veterans service organization, representing nearly 2 million members across thousands of posts worldwide. Post 118 has proudly served the veterans and community of Hendricks County for generations.",
    eligibility: [
      "Served in the U.S. Armed Forces during an eligible war era",
      "Honorably discharged, or currently serving on active duty",
      "U.S. citizen or non-citizen who served in the U.S. military",
    ],
    whatTheyDo: [
      "Advocate for veterans' benefits and legislation at all levels",
      "Provide claims assistance and veterans services",
      "Fund the O'Malley Scholarship and youth programs",
      "Host community events, dinners, and programs at Post 118",
    ],
    externalUrl: "https://www.legion.org/membership",
    externalLabel: "Learn more at legion.org",
  },
  {
    id: "ala",
    logo: "/images/logo-ala.png",
    darkBg: false,
    name: "American Legion Auxiliary",
    unit: "Hendricks County Post 118",
    tagline: "Service, not self",
    description:
      "Supporting veterans, military, and their families alongside The American Legion.",
    about:
      "The American Legion Auxiliary is one of the world's largest patriotic service organizations, dedicated to supporting veterans, military, and their families. Auxiliary Unit 118 works hand-in-hand with Post 118 to serve Hendricks County.",
    eligibility: [
      "Spouse, parent, grandparent, sibling, or child of a veteran",
      "Related to someone who served honorably during an eligible war era",
      "Relation of a current American Legion member or eligible veteran",
    ],
    whatTheyDo: [
      "Support veterans and their families through hands-on service",
      "Volunteer at hospitals, VA facilities, and community events",
      "Fund scholarships and youth programs",
      "Partner with The American Legion on community initiatives",
    ],
    externalUrl: "https://www.legion-aux.org/joining",
    externalLabel: "Learn more at legion-aux.org",
  },
  {
    id: "sal",
    logo: "/images/logo-sal.png",
    darkBg: false,
    name: "Sons of The American Legion",
    unit: "Hendricks County Squadron 118",
    tagline: "Legacy of service",
    description:
      "Carrying on the legacy of service through brotherhood and community.",
    about:
      "The Sons of The American Legion (SAL) carries the Legion's mission forward into the next generation. Squadron 118 is open to male descendants of veterans — with no age limit — and plays an active role in Post 118's programs and activities.",
    eligibility: [
      "Male descendants of veterans (sons, grandsons, great-grandsons, stepsons, or adopted sons)",
      "Ancestor served honorably during an eligible war era",
      "No minimum or maximum age requirement",
    ],
    whatTheyDo: [
      "Support The American Legion's programs and mission",
      "Volunteer at Post 118 events and fundraisers",
      "Foster a new generation of service-minded members",
      "Participate in youth programs and community service",
    ],
    externalUrl: "https://www.legion.org/sons",
    externalLabel: "Learn more at legion.org/sons",
  },
  {
    id: "alr",
    logo: "/images/logo-alr.png",
    darkBg: false,
    name: "American Legion Riders",
    unit: "Hendricks County Chapter 118",
    tagline: "On the road, in service",
    description:
      "Where a love of motorcycling meets a commitment to veterans.",
    about:
      "The American Legion Riders Chapter 118 combines the camaraderie of motorcycle riding with the Legion's tradition of service. The Riders participate in honor escort missions, charity rides, Bike Nights, and community events throughout Indiana.",
    eligibility: [
      "Must be a member in good standing of The American Legion, ALA, or SAL",
      "Own or regularly operate a motorcycle of 50cc or greater",
      "Membership in a sponsoring organization is required before joining the Riders",
    ],
    whatTheyDo: [
      "Participate in honor escort missions for fallen veterans",
      "Organize and ride in charity events for veterans causes",
      "Host Post 118 Bike Nights each summer",
      "Ride in parades, ceremonies, and community events",
    ],
    externalUrl: "https://www.legion.org/riders",
    externalLabel: "Learn more at legion.org/riders",
  },
];

/* ── Icons ───────────────────────────────────────────────────────── */

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4 shrink-0 mt-0.5 text-green-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const IconChevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 shrink-0 mt-0.5 text-legion-blue">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

const IconExternal = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

/* ── Expanded card ───────────────────────────────────────────────── */

function ExpandedCard({ org, onBack }: { org: Org; onBack: () => void }) {
  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-sm text-legion-blue hover:text-legion-navy transition-colors mb-6"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        Back to all organizations
      </button>

      <div className="bg-white rounded overflow-hidden border border-gray-200 shadow-sm">
        {/* Navy header */}
        <div className="bg-legion-navy px-6 py-5 flex items-center gap-5">
          <div className={`w-28 h-16 shrink-0 rounded overflow-hidden flex items-center justify-center ${org.darkBg ? "" : "bg-white p-1"}`}>
            <img src={assetPath(org.logo)} alt={org.name} className="object-contain max-h-full max-w-full" />
          </div>
          <div>
            <p className="text-legion-red text-xs font-semibold uppercase tracking-widest mb-0.5">
              {org.tagline}
            </p>
            <h2 className="text-white font-bold text-xl leading-tight">{org.name}</h2>
            <p className="text-white/50 text-sm">{org.unit}</p>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-6 flex flex-col gap-6">
          {/* About */}
          <section>
            <h3 className="font-bold text-legion-navy mb-2">About</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{org.about}</p>
          </section>

          {/* Eligibility */}
          <section>
            <h3 className="font-bold text-legion-navy mb-3">Eligibility</h3>
            <ul className="space-y-2.5">
              {org.eligibility.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <IconCheck />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* What they do */}
          <section>
            <h3 className="font-bold text-legion-navy mb-3">What they do</h3>
            <ul className="space-y-2.5">
              {org.whatTheyDo.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <IconChevron />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Footer row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-gray-100">
            <a
              href={org.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-legion-navy text-white text-sm font-semibold px-4 py-2 rounded hover:opacity-90 transition-opacity self-start"
            >
              {org.externalLabel}
              <IconExternal />
            </a>
            <p className="text-sm text-gray-500">
              To join, stop by Post 118 or call{" "}
              <a href="tel:+13177454736" className="font-semibold text-legion-navy hover:text-legion-blue transition-colors">
                (317) 745-4736
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main component ──────────────────────────────────────────────── */

export default function MembershipCards() {
  const [selected, setSelected] = useState<string | null>(null);

  const org = selected ? ORGS.find((o) => o.id === selected) ?? null : null;

  if (org) {
    return <ExpandedCard org={org} onBack={() => setSelected(null)} />;
  }

  return (
    <div className="grid sm:grid-cols-2 gap-5">
      {ORGS.map((o) => (
        <button
          key={o.id}
          onClick={() => setSelected(o.id)}
          className="text-left border-t-4 border-t-legion-navy hover:border-t-legion-red bg-white rounded-b shadow-sm hover:shadow-md transition-all group focus-visible:outline-2 focus-visible:outline-legion-blue"
        >
          {/* Logo area */}
          <div className={`h-24 flex items-center justify-center ${o.darkBg ? "bg-legion-navy" : "bg-gray-50"}`}>
            <img src={assetPath(o.logo)} alt={o.name} className="object-contain max-h-full max-w-full p-4" />
          </div>

          {/* Body */}
          <div className="p-5">
            <p className="font-bold text-legion-navy text-base leading-tight">{o.name}</p>
            <p className="text-xs text-gray-400 mt-0.5 mb-2">{o.unit}</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">{o.description}</p>
            <span className="text-sm font-medium text-legion-blue group-hover:text-legion-red transition-colors">
              Learn more &amp; eligibility →
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}
