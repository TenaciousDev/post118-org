import Link from "next/link";

const stripe =
  "repeating-linear-gradient(90deg, #E31937 0px, #E31937 12px, #ffffff 12px, #ffffff 24px)";

export const metadata = {
  title: "Veterans Benefits Resources | American Legion Post 118",
  description:
    "PACT Act eligibility, free local VSO help, and benefits resources for veterans in Hendricks County, Indiana.",
};

const faqs = [
  {
    q: "Was I exposed to burn pits?",
    a: "If you served in Iraq, Afghanistan, Djibouti, or other SW Asia locations after Aug 2, 1990, you're presumed exposed under the PACT Act. You don't need to prove it.",
  },
  {
    q: "I was denied before. Can I refile?",
    a: "Yes. The PACT Act created new presumptive conditions, so many previously-denied claims now qualify. A VSO can review your case at no charge.",
  },
  {
    q: "What's the difference between a VSO and a lawyer?",
    a: "VSOs (Veterans Service Officers) are accredited advocates who represent veterans before the VA at no cost. Lawyers typically charge fees or take a percentage of back pay. Start with a VSO.",
  },
  {
    q: "How long does a claim take?",
    a: "It varies widely — from a few months to over a year depending on complexity. A VSO can help you file accurately the first time, which reduces delays.",
  },
  {
    q: "Do I have to be a Legion member to get help?",
    a: "No. The Hendricks County VSO serves all veterans in the county, regardless of membership in any organization.",
  },
];

export default function Benefits() {
  return (
    <main>
      {/* ── Page header ──────────────────────────────────── */}
      <section className="bg-legion-blue px-6 pt-10 pb-12 relative">
        <div className="max-w-4xl mx-auto">
          <nav className="text-white/40 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white/70">Benefits Resources</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Veterans Benefits Resources
          </h1>
          <p className="text-white/60 max-w-2xl leading-relaxed">
            You earned these benefits. Here&apos;s how to claim them. Post 118 will connect you
            with the right free local resources — no runaround, no fees.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: stripe }} />
      </section>

      {/* ── Featured resource: Hendricks County VSO ──────── */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-legion-red mb-3">
            Start Here
          </p>
          <div className="rounded border-2 border-legion-blue bg-blue-50/40 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-legion-blue flex items-center justify-center mt-0.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
                  className="w-5 h-5 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h2 className="text-lg font-bold text-legion-navy">
                    Hendricks County Veterans Service Office
                  </h2>
                  <span className="text-xs font-semibold bg-legion-blue text-white px-2 py-0.5 rounded-full">
                    Free · Local · Accredited
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Your county has a trained, accredited Veterans Service Officer on staff — at no
                  cost to you. They can file VA claims, navigate appeals, and represent you before
                  the VA. This is your first call. Post 118 can connect you with them directly.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:+13177459239"
                    className="inline-flex items-center gap-2 bg-legion-blue text-white text-sm font-semibold px-4 py-2 rounded hover:opacity-90 transition-opacity"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
                      className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    (317) 745-9239
                  </a>
                  <a
                    href="https://www.in.gov/dva/locate-your-cvso/hendricks-county/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-legion-blue text-legion-blue text-sm font-semibold px-4 py-2 rounded hover:bg-legion-blue hover:text-white transition-colors"
                  >
                    More Info →
                  </a>
                </div>
                <p className="text-xs text-gray-400 mt-3">
                  Mon–Fri 8 AM–4 PM · in.gov/dva/locate-your-cvso/hendricks-county
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Am I Eligible? ───────────────────────────────── */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-legion-navy mb-3">Am I Eligible?</h2>
          <p className="text-gray-500 text-sm mb-8 max-w-2xl">
            The 2022 PACT Act dramatically expanded VA eligibility. Many veterans who were
            previously denied may now qualify. Here are the most common situations.
          </p>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                tag:   "PACT Act · Burn Pit",
                badge: ["New Law", "Presumptive"],
                title: "Deployed Post-9/11?",
                icon:  "🔥",
                body:  "The PACT Act (2022) presumptively covers 20+ conditions linked to burn pit and toxic exposure. Iraq, Afghanistan, SW Asia — if you were there, you likely qualify.",
              },
              {
                tag:   "TBI · Traumatic Brain Injury",
                badge: ["Underreported"],
                title: "IED Blasts or Head Trauma?",
                icon:  "🧠",
                body:  "TBI is the signature wound of the GWOT. Many veterans are unrated. A VSO can connect you with a C&P exam and file a claim on your behalf.",
              },
              {
                tag:   "Mental Health · PTSD",
                badge: ["High Priority"],
                title: "PTSD, MST, or Anxiety?",
                icon:  "🧩",
                body:  "Service-connected mental health conditions are fully claimable. A VSO can help you file and connect you with VA mental health resources.",
              },
            ].map(({ tag, badge, title, icon, body }) => (
              <div key={title}
                className="bg-white rounded border border-gray-200 shadow-sm overflow-hidden flex flex-col">
                <div className="bg-legion-blue px-4 py-3">
                  <p className="text-white/60 text-xs font-medium">{tag}</p>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="text-2xl mb-3">{icon}</div>
                  <h3 className="font-bold text-legion-navy mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{body}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {badge.map((b) => (
                      <span key={b}
                        className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {[
              { n: "20+",  l: "Conditions presumptively covered under PACT Act" },
              { n: "$0",   l: "Cost to file through your County VSO" },
              { n: "1 in 3",  l: "Veterans living with a service-connected condition" },
              { n: "3.5M+", l: "Veterans newly eligible under the PACT Act" },
            ].map(({ n, l }) => (
              <div key={n}
                className="bg-white rounded border border-gray-200 p-4 text-center">
                <div className="text-2xl font-black text-legion-red mb-1">{n}</div>
                <div className="text-xs text-gray-500 leading-tight">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-legion-navy mb-8">Common Questions</h2>
          <div className="flex flex-col divide-y divide-gray-100">
            {faqs.map(({ q, a }) => (
              <div key={q} className="py-5">
                <p className="font-semibold text-legion-navy mb-2">{q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── External resources ───────────────────────────── */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-legion-navy mb-6">Where to Go</h2>
          <div className="flex flex-col gap-3 max-w-xl">
            {[
              {
                label: "Hendricks County Veterans Service Office",
                href:  "https://www.in.gov/dva/locate-your-cvso/hendricks-county/",
                sub:   "Free, local, accredited — start here",
                primary: true,
              },
              {
                label: "Indiana Department of Veterans Affairs",
                href:  "https://www.in.gov/dva/",
                sub:   "State-level veterans services and resources",
              },
              {
                label: "VA.gov — PACT Act Eligibility Tool",
                href:  "https://www.va.gov/resources/the-pact-act-and-your-va-benefits/",
                sub:   "Check your eligibility in minutes",
              },
              {
                label: "VA.gov — Check Your Benefits",
                href:  "https://www.va.gov/",
                sub:   "VA healthcare, disability, and more",
              },
              {
                label: "eBenefits — My VA Account",
                href:  "https://www.ebenefits.va.gov/",
                sub:   "Manage your existing VA benefits",
              },
            ].map(({ label, href, sub, primary }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between gap-4 px-5 py-4 rounded border transition-colors ${
                  primary
                    ? "border-legion-blue bg-blue-50/40 hover:bg-blue-50"
                    : "border-gray-200 bg-white hover:border-legion-blue"
                }`}
              >
                <div>
                  <p className={`font-semibold text-sm ${primary ? "text-legion-navy" : "text-gray-800"}`}>
                    {label}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
                  className="w-4 h-4 shrink-0 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ──────────────────────────────────── */}
      <section className="bg-legion-blue py-14 px-6 relative overflow-hidden">
        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Not Sure Where to Start?</h2>
          <p className="text-white/60 leading-relaxed mb-8">
            Stop by on a Friday, give us a call, or send us a message. We&apos;ll help you figure
            out the right next step and connect you with whoever can help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+13177454736"
              className="bg-legion-red text-white font-semibold px-6 py-3 rounded hover:opacity-90 transition-opacity">
              Call (317) 745-4736
            </a>
            <Link href="/about"
              className="border border-white/40 text-white font-semibold px-6 py-3 rounded hover:bg-white/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: stripe }} />
      </section>
    </main>
  );
}
