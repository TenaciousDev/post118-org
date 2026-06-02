import Link from "next/link";

const stripe =
  "repeating-linear-gradient(90deg, #E31937 0px, #E31937 12px, #ffffff 12px, #ffffff 24px)";

export default function About() {
  return (
    <main>
      {/* ── Page header ──────────────────────────────────── */}
      <section className="bg-legion-navy px-6 pt-10 pb-12 relative">
        <div className="max-w-4xl mx-auto">
          <nav className="text-white/40 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white/70">About</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            About Post 118
          </h1>
          <p className="text-white/60 max-w-2xl leading-relaxed">
            American Legion Post 118 has served Danville and Hendricks County for
            generations — honoring those who served and giving back to the community
            they came home to.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: stripe }} />
      </section>

      {/* ── Mission ──────────────────────────────────────── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-legion-navy mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Post 118 is a chartered post of The American Legion, the nation&apos;s largest
              veterans service organization. We exist to serve veterans, support active
              duty military families, and strengthen the community that so many of our
              members came home to defend.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From scholarship programs to veterans services, Friday dinners to community
              events — everything we do comes back to that mission. We&apos;re not just a
              meeting hall. We&apos;re a gathering place for Hendricks County.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { label: "Founded", value: "Post 118, Danville, Indiana" },
              { label: "County", value: "Hendricks County, Indiana" },
              { label: "Organization", value: "The American Legion" },
              { label: "Open to", value: "Veterans, families & the public" },
            ].map(({ label, value }) => (
              <div key={label} className="border-l-4 border-legion-gold pl-4 py-1">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{label}</p>
                <p className="text-sm font-medium text-legion-navy">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Grounds ──────────────────────────────────── */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-legion-navy mb-3">The Grounds</h2>
          <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl">
            Post 118 isn&apos;t just a building — it&apos;s 22 acres. We&apos;ve got outdoor space for
            events, bike nights, family gatherings, and just sitting outside on a summer
            evening. Come as you are.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12 11.204 3.045c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                ),
                title: "22 Acres",
                desc: "Plenty of outdoor space for events, live music, bike nights, and hanging out.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                  </svg>
                ),
                title: "Kids Welcome",
                desc: "Playground on the grounds. Bring the kids — there&apos;s room to run.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                ),
                title: "Dogs Welcome Outdoors",
                desc: "Bring your leashed dog to any outdoor event. Service animals welcome inside per ADA.",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded border border-gray-200 p-6 flex flex-col gap-3">
                <div className="text-legion-navy">{icon}</div>
                <h3 className="font-semibold text-legion-navy">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Get involved ─────────────────────────────────── */}
      <section className="bg-legion-navy py-16 px-6 relative overflow-hidden">
        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Come See Us</h2>
          <p className="text-white/60 leading-relaxed mb-8">
            The post is open to the public every Friday, no membership required.
            Stop by for lunch Mon–Fri, or come out Friday evening for dinner and entertainment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/visit"
              className="bg-legion-red text-white font-semibold px-6 py-3 rounded hover:opacity-90 transition-opacity"
            >
              Plan Your Visit
            </Link>
            <Link
              href="/membership"
              className="border border-white/40 text-white font-semibold px-6 py-3 rounded hover:bg-white/10 transition-colors"
            >
              Join the Post
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: stripe }} />
      </section>
    </main>
  );
}
