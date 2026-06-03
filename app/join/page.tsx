import Link from "next/link";
import MembershipCards from "@/components/MembershipCards";

const stripe =
  "repeating-linear-gradient(90deg, #E31937 0px, #E31937 12px, #ffffff 12px, #ffffff 24px)";

export const metadata = {
  title: "Get Involved | American Legion Post 118",
  description:
    "Join the American Legion family at Post 118 in Danville, Indiana — membership, volunteering, and how to get involved.",
};

export default function Join() {
  return (
    <main>
      {/* ── Advocacy-first header ────────────────────────── */}
      <section className="bg-legion-blue px-6 pt-10 pb-12 relative">
        <div className="max-w-4xl mx-auto">
          <nav className="text-white/40 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white/70">Get Involved</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Your membership is a vote.<br className="hidden sm:block" />
            For veterans. For Hendricks County.
          </h1>
          <p className="text-white/60 max-w-2xl leading-relaxed">
            Every dues dollar funds peer support, legislative advocacy, and programs that serve
            this community. When The American Legion speaks in Washington, your name is on it.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: stripe }} />
      </section>

      {/* ── Online join CTAs ─────────────────────────────── */}
      <section className="bg-white py-10 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div>
              <h2 className="font-bold text-legion-navy text-lg mb-1">Ready to Join?</h2>
              <p className="text-gray-500 text-sm">
                American Legion and SAL members can join online. ALA members use the paper application.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href="https://www.mylegion.org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-legion-red text-white font-semibold text-sm px-5 py-2.5 rounded hover:opacity-90 transition-opacity"
              >
                Join Online — MyLegion.org
              </a>
              <a
                href="https://www.legion.org/documents/legion/pdf/join_form.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 text-gray-700 font-semibold text-sm px-5 py-2.5 rounded hover:border-legion-blue hover:text-legion-blue transition-colors"
              >
                Paper Application
              </a>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4 max-w-xl">
            Online joining is available for <strong>American Legion</strong> and{" "}
            <strong>Sons of The American Legion</strong> members at MyLegion.org.{" "}
            <strong>American Legion Auxiliary</strong> members please use the paper application — online
            ALA joining is not yet available.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Already a national member?{" "}
            <a href="tel:+13177454736"
              className="font-semibold text-legion-blue hover:text-legion-navy transition-colors">
              Call us to transfer to Post 118 →
            </a>
          </p>
        </div>
      </section>

      {/* ── Organization cards ───────────────────────────── */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-legion-navy mb-3">The American Legion Family</h2>
          <p className="text-gray-500 text-sm mb-8">
            Post 118 is home to four branches of the Legion family. Select an organization to
            learn about eligibility and what they do.
          </p>
          <MembershipCards />
        </div>
      </section>

      {/* ── Where dues go ────────────────────────────────── */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-legion-navy mb-8">Where Dues Go</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                icon: "🏛",
                title: "Legislative Advocacy",
                desc: "State and national lobbying for veterans' priorities — your name behind every vote.",
              },
              {
                icon: "🤝",
                title: "Peer Support Programs",
                desc: "Programs that support veterans and families in Hendricks County.",
              },
              {
                icon: "⚾",
                title: "Youth Programs",
                desc: "Pee Wee Baseball, Scouts sponsorship, and scholarships for local kids.",
              },
              {
                icon: "🎉",
                title: "Community Events",
                desc: "Lainie's Ride, Independence Day, Bike Nights, Trunk-or-Treat, and more.",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title}
                className="flex gap-4 items-start p-5 rounded border border-gray-100 bg-gray-50">
                <span className="text-2xl shrink-0">{icon}</span>
                <div>
                  <h3 className="font-semibold text-legion-navy text-sm mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Volunteer path ───────────────────────────────── */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded border border-green-200 bg-green-50/50 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-green-900 mb-2">
              Not Ready to Join? Volunteer.
            </h2>
            <p className="text-green-800/70 text-sm leading-relaxed mb-6 max-w-2xl">
              You don&apos;t need a membership card to make a difference. Events, food drives,
              community programs — civilians and non-veteran family members are welcome.
              Help when you&apos;re able, as you&apos;re able.
            </p>
            <Link
              href="/about"
              className="inline-block bg-green-700 text-white font-semibold text-sm px-5 py-2.5 rounded hover:opacity-90 transition-opacity"
            >
              Get in Touch →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
