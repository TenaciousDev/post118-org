import Link from "next/link";

const stripe =
  "repeating-linear-gradient(90deg, #E31937 0px, #E31937 12px, #ffffff 12px, #ffffff 24px)";

export default function Visit() {
  return (
    <main>
      {/* ── Page header ──────────────────────────────────── */}
      <section className="bg-legion-navy px-6 pt-10 pb-12 relative">
        <div className="max-w-4xl mx-auto">
          <nav className="text-white/40 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white/70">Visit</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Visit Post 118</h1>
          <p className="text-white/60 max-w-2xl leading-relaxed">
            We&apos;re on 22 acres just south of Danville. Open to the public every Friday —
            no membership required, ever. Dogs welcome outdoors, kids playground on the grounds.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: stripe }} />
      </section>

      {/* ── Content ──────────────────────────────────────── */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

          {/* ── Left column ─────────────────────────────── */}
          <div className="flex flex-col gap-6">

            {/* Hours */}
            <div className="bg-white rounded border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-legion-navy px-5 py-3">
                <span className="text-white font-semibold text-sm">Hours</span>
              </div>
              <div className="px-5 py-5 space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm font-medium text-gray-700">Mon – Sat</span>
                  <span className="text-sm font-semibold text-legion-navy">11:00 AM – 10:00 PM (or later)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm font-medium text-gray-700">Sunday</span>
                  <span className="text-sm font-semibold text-legion-navy">Noon – 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <div>
                    <span className="text-sm font-medium text-gray-700">Kitchen / Lunch</span>
                    <p className="text-xs text-gray-400">Mon – Fri · Open to the public</p>
                  </div>
                  <span className="text-sm font-semibold text-legion-navy">11:00 AM – 2:00 PM</span>
                </div>
              </div>
            </div>

            {/* Friday callout */}
            <div className="bg-legion-navy rounded border-l-4 border-legion-gold px-5 py-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-legion-gold text-xs font-bold uppercase tracking-widest">Every Friday</span>
              </div>
              <p className="text-white font-semibold text-lg leading-snug mb-1">100% Open to the Public</p>
              <p className="text-white/60 text-sm leading-relaxed">
                No membership required, no card needed. Come for lunch starting at 11 AM,
                stay for dinner and a good time. Bring the family.
              </p>
              <Link
                href="/events"
                className="inline-block mt-4 text-legion-gold text-sm font-semibold hover:text-white transition-colors"
              >
                See Friday events →
              </Link>
            </div>

            {/* Address + contact */}
            <div className="bg-white rounded border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-legion-navy px-5 py-3">
                <span className="text-white font-semibold text-sm">Find Us</span>
              </div>
              <div className="px-5 py-5 space-y-4">
                <div className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-legion-navy shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-legion-navy">Address</p>
                    <p className="text-sm text-gray-600">846 S SR-39</p>
                    <p className="text-sm text-gray-600">Danville, IN 46122</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-legion-navy shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <a href="tel:+13177454736" className="text-sm text-legion-blue hover:text-legion-navy transition-colors">
                    (317) 745-4736
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* ── Right column ────────────────────────────── */}
          <div className="flex flex-col gap-6">

            {/* Map */}
            <div className="rounded border border-gray-200 shadow-sm overflow-hidden">
              <iframe
                title="Post 118 location map"
                src="https://maps.google.com/maps?q=846+IN-39+Danville+IN+46122&output=embed&z=15"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>

            {/* Grounds info */}
            <div className="bg-white rounded border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-legion-navy px-5 py-3">
                <span className="text-white font-semibold text-sm">The Grounds</span>
              </div>
              <div className="px-5 py-5">
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Post 118 sits on 22 acres just south of Danville — plenty of room to spread out,
                  relax, and enjoy the outdoors. We&apos;re not just a bar or a hall; we&apos;re a community
                  space with room to breathe.
                </p>
                <ul className="space-y-3">
                  {[
                    { icon: "🐕", text: "Dogs welcome outdoors — leashed and friendly. Service animals welcome inside per ADA." },
                    { icon: "🛝", text: "Kids' playground on the grounds." },
                    { icon: "🌳", text: "22 acres of outdoor space — great for events, bike nights, and just hanging out." },
                  ].map(({ icon, text }) => (
                    <li key={icon} className="flex items-start gap-3">
                      <span className="text-lg shrink-0 leading-none mt-0.5">{icon}</span>
                      <span className="text-sm text-gray-600 leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Membership note */}
            <div className="bg-gray-100 rounded px-5 py-4 border border-gray-200">
              <p className="text-sm text-gray-600 leading-relaxed">
                <span className="font-semibold text-legion-navy">No membership required to visit.</span>{" "}
                The Post is open to the public every Friday, and the kitchen is open to everyone
                Mon–Fri 11 AM–2 PM. Members enjoy additional access and benefits —{" "}
                <Link href="/membership" className="text-legion-blue hover:text-legion-navy transition-colors font-medium">
                  learn about membership
                </Link>.
              </p>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
