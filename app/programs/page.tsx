import Link from "next/link";
import DinnerSchedule from "@/components/DinnerSchedule";

const stripe =
  "repeating-linear-gradient(90deg, #E31937 0px, #E31937 12px, #ffffff 12px, #ffffff 24px)";

/* ── Inline SVG icons ─────────────────────────────────────────── */
const IconScholarship = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
  </svg>
);

const IconRiders = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>
);

const IconUtensils = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-1.5-.75V14.25m16.5 0v.75c0 2.122-2.688 3.843-6 4.288M6 18.75v-.75" />
  </svg>
);

const IconHandshake = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);

export default function Programs() {
  return (
    <main>
      {/* ── Page header ──────────────────────────────────── */}
      <section className="bg-legion-navy px-6 pt-10 pb-12 relative">
        <div className="max-w-4xl mx-auto">
          <nav className="text-white/40 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white/70">Programs</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Programs &amp; Initiatives
          </h1>
          <p className="text-white/60 max-w-2xl leading-relaxed">
            Post 118 is active in our community year-round — from scholarships and veterans
            services to Friday dinners open to everyone in Hendricks County.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: stripe }} />
      </section>

      {/* ── Program cards ────────────────────────────────── */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">

          {/* O'Malley Scholarship */}
          <article className="rounded overflow-hidden shadow-sm border border-gray-200">
            <div className="bg-legion-navy px-5 py-4 flex items-center gap-3">
              <span className="text-white"><IconScholarship /></span>
              <div>
                <div className="text-white font-semibold">O&apos;Malley Scholarship</div>
                <div className="text-white/50 text-xs">Supporting local students pursuing higher education</div>
              </div>
            </div>
            <div className="bg-white border-l-4 border-legion-blue p-6">
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                The O&apos;Malley Scholarship awards college scholarships to deserving Hendricks County
                students, honoring the legacy of service that defines Post 118. Recipients are selected
                based on academic achievement, community involvement, and financial need.
              </p>
              <Link
                href="/programs/scholarships"
                className="inline-block bg-legion-blue text-white text-sm font-semibold px-4 py-2 rounded hover:opacity-90 transition-opacity"
              >
                View Scholarship Details
              </Link>
            </div>
          </article>

          {/* American Legion Riders */}
          <article className="rounded overflow-hidden shadow-sm border border-gray-200">
            <div className="bg-legion-navy px-5 py-4 flex items-center gap-3">
              <span className="text-white"><IconRiders /></span>
              <div>
                <div className="text-white font-semibold">American Legion Riders</div>
                <div className="text-white/50 text-xs">Chapter 118 · Open to Legion, SAL &amp; Auxiliary members</div>
              </div>
            </div>
            <div className="bg-white border-l-4 border-legion-red p-6">
              <p className="text-gray-600 text-sm leading-relaxed">
                The American Legion Riders Chapter 118 participates in veteran honor escort missions,
                charity rides, and community events throughout Indiana. Membership is open to
                American Legion, SAL Squadron, and Legion Auxiliary members who own or regularly
                operate a motorcycle. The Riders embody the Legion&apos;s spirit of service — on two wheels.
              </p>
            </div>
          </article>

          {/* Sons of the American Legion */}
          <article className="rounded overflow-hidden shadow-sm border border-gray-200">
            <div className="bg-legion-navy px-5 py-4 flex items-center gap-3">
              <span className="text-white"><IconShield /></span>
              <div>
                <div className="text-white font-semibold">Sons of the American Legion</div>
                <div className="text-white/50 text-xs">Squadron 118 · Open to male descendants of veterans</div>
              </div>
            </div>
            <div className="bg-white border-l-4 border-legion-blue p-6">
              <p className="text-gray-600 text-sm leading-relaxed">
                The Sons of The American Legion Squadron 118 carries on the mission of the Legion
                for the next generation. Membership is open to male descendants — sons, grandsons,
                great-grandsons, and step-sons — of honorably discharged veterans. The SAL supports
                Post 118&apos;s programs and serves as the future of the American Legion family.
              </p>
            </div>
          </article>

          {/* Friday Dinners */}
          <article className="rounded overflow-hidden shadow-sm border border-gray-200">
            <div className="bg-legion-navy px-5 py-4 flex items-center gap-3">
              <span className="text-white"><IconUtensils /></span>
              <div>
                <div className="text-white font-semibold">Friday Dinners</div>
                <div className="text-white/50 text-xs">Open to the public · Every Friday evening</div>
              </div>
            </div>
            <div className="bg-white border-l-4 border-legion-red p-6">
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Join us every Friday night for a home-cooked dinner at Post 118. Open to members,
                families, and the entire community. The menu rotates weekly — Fish Fry starts at
                5&nbsp;PM; all other dinners start at 6&nbsp;PM. A great way to connect with
                your neighbors and support your local Post.
              </p>
              <DinnerSchedule />
            </div>
          </article>

          {/* Veterans Services */}
          <article className="rounded overflow-hidden shadow-sm border border-gray-200">
            <div className="bg-legion-navy px-5 py-4 flex items-center gap-3">
              <span className="text-white"><IconHandshake /></span>
              <div>
                <div className="text-white font-semibold">Veterans Services</div>
                <div className="text-white/50 text-xs">Helping veterans access the benefits they&apos;ve earned</div>
              </div>
            </div>
            <div className="bg-white border-l-4 border-legion-blue p-6">
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Post 118 connects veterans with the benefits, claims assistance, and support
                services they&apos;ve earned through their service. Whether you need help navigating
                the VA, filing a claim, or simply finding the right resource — our service officers
                are here to help at no charge.
              </p>
              <Link
                href="/contact"
                className="inline-block border border-legion-blue text-legion-blue text-sm font-semibold px-4 py-2 rounded hover:bg-legion-blue hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </article>

        </div>
      </section>
    </main>
  );
}
