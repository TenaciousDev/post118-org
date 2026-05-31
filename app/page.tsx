import Link from "next/link";

const stripe =
  "repeating-linear-gradient(90deg, #E31937 0px, #E31937 12px, #ffffff 12px, #ffffff 24px)";

const programs = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    title: "O'Malley Scholarship",
    description:
      "Awarding college scholarships to deserving Hendricks County students in honor of Post 118's legacy of service.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: "American Legion Riders",
    description:
      "Our motorcycle chapter participates in honor escorts, charity rides, and veteran outreach across Indiana.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Sons of the American Legion",
    description:
      "Carrying on the mission of the Legion, the SAL squadron at Post 118 serves veterans and community alike.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-1.5-.75V14.25m16.5 0v.75c0 2.122-2.688 3.843-6 4.288m-6-9.038c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v1.892M18 12.75v1.892c0 1.135-.845 2.098-1.976 2.192A49.048 49.048 0 0 1 12 17.25a49.073 49.073 0 0 1-4.024-.416" />
      </svg>
    ),
    title: "Friday Dinners",
    description:
      "Weekly Friday night dinners open to members, families, and the public. Great food, great company.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    title: "Veterans Services",
    description:
      "Connecting veterans with benefits, claims assistance, and support services they've earned through their service.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
      </svg>
    ),
    title: "Open Mic & Karaoke",
    description:
      "Regular open mic nights and karaoke events keeping our post hall lively and welcoming for everyone.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative bg-legion-navy overflow-hidden">
        {/* Top stripe */}
        <div className="h-[3px] w-full" style={{ background: stripe }} />

        {/* Star field */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          {[
            [10, 15], [25, 40], [40, 10], [55, 60], [70, 25],
            [82, 55], [90, 10], [15, 75], [60, 80], [78, 70],
            [35, 50], [48, 30], [65, 45], [5, 90], [92, 85],
          ].map(([x, y], i) => (
            <span
              key={i}
              className="absolute w-[2px] h-[2px] rounded-full bg-white/20"
              style={{ left: `${x}%`, top: `${y}%` }}
            />
          ))}
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          <p className="text-legion-red text-sm font-semibold tracking-widest uppercase mb-4">
            Hendricks County · Danville, Indiana
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-legion-white leading-tight mb-6">
            Serving Veterans,<br />Strengthening Community
          </h1>
          <p className="text-legion-mist text-lg max-w-2xl mx-auto mb-10">
            American Legion Post 118 has proudly served Danville and Hendricks County
            since our founding — supporting veterans, families, and neighbors through
            programs, camaraderie, and community action.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <Link
              href="/membership"
              className="bg-legion-red text-white font-semibold px-6 py-3 rounded hover:opacity-90 transition-opacity"
            >
              Become a Member
            </Link>
            <Link
              href="/programs"
              className="border border-white/40 text-white font-semibold px-6 py-3 rounded hover:bg-white/10 transition-colors"
            >
              Explore Programs
            </Link>
          </div>

          {/* Stat badges */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { value: "100+", label: "Active Members" },
              { value: "Post 118", label: "Est. · Danville IN" },
              { value: "$10K+", label: "Scholarships Awarded" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="border border-white/20 rounded-full px-5 py-2 text-sm"
              >
                <span className="text-legion-white">{value}</span>{" "}
                <span className="text-legion-mist">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom stripe */}
        <div className="h-[3px] w-full" style={{ background: stripe }} />
      </section>

      {/* ── Mission strip ────────────────────────────────── */}
      <section className="bg-legion-red py-8 px-6 text-center relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none opacity-10">
          {["✦", "✦", "✦", "✦", "✦"].map((s, i) => (
            <span key={i} className="absolute text-white text-xl" style={{ left: `${i * 22 + 5}%`, top: "50%", transform: "translateY(-50%)" }}>{s}</span>
          ))}
        </div>
        <p className="relative text-legion-white text-lg sm:text-xl italic font-medium max-w-3xl mx-auto">
          &ldquo;For God and Country, we associate ourselves together for the following purposes: To uphold and defend the Constitution of the United States; to maintain law and order; to foster and perpetuate a one hundred percent Americanism.&rdquo;
        </p>
        <p className="relative text-legion-mist text-sm mt-3 tracking-wide uppercase">— The American Legion Preamble</p>
      </section>

      {/* ── Programs ─────────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-legion-red text-sm font-semibold tracking-widest uppercase mb-2 text-center">
            What We Do
          </p>
          <h2 className="text-3xl font-bold text-legion-navy text-center mb-12">
            Programs &amp; Initiatives
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map(({ icon, title, description }) => (
              <div
                key={title}
                className="border-t-4 border-legion-navy bg-gray-50 rounded-b p-6 flex flex-col gap-3"
              >
                <div className="text-legion-navy">{icon}</div>
                <h3 className="font-semibold text-legion-navy text-lg">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/programs"
              className="text-legion-blue font-semibold hover:text-legion-navy transition-colors text-sm"
            >
              View all programs →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Membership CTA ───────────────────────────────── */}
      <section className="bg-legion-navy py-20 px-6 relative overflow-hidden">
        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-legion-white mb-4">
            Ready to Join Post 118?
          </h2>
          <p className="text-legion-mist text-lg mb-10">
            Membership is open to veterans, active duty service members, and their
            families. Join a community that honors service and gives back.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/membership"
              className="bg-legion-red text-white font-semibold px-6 py-3 rounded hover:opacity-90 transition-opacity"
            >
              Apply for Membership
            </Link>
            <Link
              href="/contact"
              className="border border-white/40 text-white font-semibold px-6 py-3 rounded hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: stripe }} />
      </section>
    </>
  );
}
