import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

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
      "We award college scholarships each year to local students in Hendricks County — investing in the next generation in honor of those who served.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-1.5-.75V14.25m16.5 0v.75c0 2.122-2.688 3.843-6 4.288m-6-9.038c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v1.892M18 12.75v1.892c0 1.135-.845 2.098-1.976 2.192A49.048 49.048 0 0 1 12 17.25a49.073 49.073 0 0 1-4.024-.416" />
      </svg>
    ),
    title: "Friday Dinners",
    description:
      "Join us every Friday night for a home-cooked meal. Open to members, families, and the public — everyone is welcome at the table.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    title: "Veterans Benefits",
    description:
      "Not sure if you qualify for VA benefits? We'll connect you with the right free local resources — no runaround, no fees. Start here.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
      </svg>
    ),
    title: "Entertainment",
    description:
      "From karaoke nights to live music, there's always something going on at the post. Check the calendar and come out for a good time.",
  },
];

const entityTop = { href: "/tal", name: "The American Legion",        logo: "/images/logo-tal.png" };
const entityRow = [
  { href: "/ala", name: "American Legion Auxiliary",   logo: "/images/logo-ala.png" },
  { href: "/sal", name: "Sons of The American Legion", logo: "/images/logo-sal.png" },
  { href: "/alr", name: "American Legion Riders",      logo: "/images/logo-alr.png" },
];

export default function Home() {
  return (
    <>
      {/* ── Logo band ────────────────────────────────────── */}
      <section className="bg-legion-navy flex justify-center pt-10 pb-3">
        <img
          src={assetPath("/images/logo.png")}
          alt="American Legion Post 118"
          className="w-1/2 min-w-[240px] max-w-[560px] object-contain"
        />
      </section>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative bg-legion-navy overflow-hidden">
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

        <div className="relative max-w-5xl mx-auto px-6 pt-4 pb-6 text-center">
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
              href="/join"
              className="bg-legion-red text-white font-semibold px-6 py-3 rounded hover:opacity-90 transition-opacity"
            >
              Become a Member
            </Link>
            <Link
              href="/join"
              className="border border-white/40 text-white font-semibold px-6 py-3 rounded hover:bg-white/10 transition-colors"
            >
              Explore Programs
            </Link>
          </div>

        </div>

        {/* Bottom stripe */}
        <div className="h-[3px] w-full" style={{ background: stripe }} />
      </section>

      {/* ── Mission strip ────────────────────────────────── */}
      <section className="bg-legion-red-dark py-8 px-6 text-center relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none opacity-10">
          {["✦", "✦", "✦", "✦", "✦"].map((s, i) => (
            <span key={i} className="absolute text-white text-xl" style={{ left: `${i * 22 + 5}%`, top: "50%", transform: "translateY(-50%)" }}>{s}</span>
          ))}
        </div>
        <p className="relative text-legion-white text-xl sm:text-2xl italic font-bold max-w-3xl mx-auto">
          &ldquo;For God and Country, we associate ourselves together&hellip;&rdquo;
        </p>
        <p className="relative text-legion-mist text-sm mt-3 tracking-wide uppercase">— The American Legion Preamble</p>
      </section>

      {/* ── Who We Are ───────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-legion-navy text-center mb-12">
            Who We Are.
          </h2>

          {/* TAL — always full-width solo row */}
          <div className="mb-4">
            <Link
              href={entityTop.href}
              className="group relative block w-full overflow-hidden rounded border border-gray-100 bg-gray-50"
            >
              {/* 5:2 aspect ratio suits the wide TAL wordmark */}
              <div className="relative w-full" style={{ paddingBottom: "40%" }}>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <img
                    src={assetPath(entityTop.logo)}
                    alt={entityTop.name}
                    className="object-contain max-h-full max-w-full"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <p className="text-white font-semibold text-sm leading-tight">{entityTop.name}</p>
                  <p className="text-white/80 text-xs mt-1">Learn More →</p>
                </div>
              </div>
            </Link>
          </div>

          {/* ALA · SAL · ALR — three square cards, responsive grid */}
          {/* Desktop: 3 columns | Tablet (~500–768px): 3 columns | Mobile: 1 column */}
          <div className="grid grid-cols-1 min-[480px]:grid-cols-3 gap-4">
            {entityRow.map(({ href, name, logo }) => (
              <Link
                key={href}
                href={href}
                className="group relative block overflow-hidden rounded border border-gray-100 bg-gray-50"
              >
                {/* 1:1 square */}
                <div className="relative w-full" style={{ paddingBottom: "100%" }}>
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <img
                      src={assetPath(logo)}
                      alt={name}
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <p className="text-white font-semibold text-sm leading-tight">{name}</p>
                    <p className="text-white/80 text-xs mt-1">Learn More →</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ── Programs ─────────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-legion-navy text-center mb-12">
            What We Do.
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
              href="/join"
              className="text-legion-blue font-semibold hover:text-legion-navy transition-colors text-sm"
            >
              View all programs →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Friday at the Post ───────────────────────────── */}
      <section className="bg-legion-navy py-16 px-6 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <div className="border-l-4 border-legion-red pl-6 sm:pl-8">
            <span className="text-legion-red text-xs font-bold uppercase tracking-widest block mb-2">Every Friday</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Friday At The Post
            </h2>
            <p className="text-white/70 leading-relaxed max-w-2xl mb-1">
              No membership card. No uniform. No agenda.
            </p>
            <p className="text-white/50 leading-relaxed max-w-2xl italic mb-6">
              Just cold drinks, good people, and somewhere to land.
            </p>
            <Link
              href="/events"
              className="inline-block bg-legion-red text-white font-semibold px-6 py-3 rounded hover:opacity-90 transition-opacity"
            >
              See What&apos;s On →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Outdoors & Grounds ───────────────────────────── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-legion-navy text-center mb-8">
            More Than a Bar.
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                icon: "🐕",
                title: "Dogs Welcome Outdoors",
                desc: "Bring your leashed pup to any outdoor event. Service animals always welcome inside.",
              },
              {
                icon: "🛝",
                title: "Kids' Playground",
                desc: "There's a playground on the grounds. Bring the kids, let them run.",
              },
              {
                icon: "🌳",
                title: "22 Acres",
                desc: "We're not just a bar. We've got 22 acres — bike nights, outdoor events, and room to breathe.",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4 items-start p-5 rounded border border-gray-100 bg-gray-50">
                <span className="text-2xl shrink-0">{icon}</span>
                <div>
                  <h3 className="font-semibold text-legion-navy text-sm mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/about"
              className="text-legion-blue font-semibold hover:text-legion-navy transition-colors text-sm"
            >
              Plan your visit →
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
              href="/join"
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
