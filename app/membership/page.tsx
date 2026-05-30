import Link from "next/link";
import MembershipCards from "@/components/MembershipCards";

const stripe =
  "repeating-linear-gradient(90deg, #E31937 0px, #E31937 12px, #ffffff 12px, #ffffff 24px)";

export default function Membership() {
  return (
    <main>
      {/* ── Page header ──────────────────────────────────── */}
      <section className="bg-legion-navy px-6 pt-10 pb-12 relative">
        <div className="max-w-4xl mx-auto">
          <nav className="text-white/40 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white/70">Membership</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Join the American Legion Family
          </h1>
          <p className="text-white/60 max-w-2xl leading-relaxed">
            Post 118 is proud to be home to four branches of the American Legion Family.
            Select an organization below to learn more about membership and eligibility.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: stripe }} />
      </section>

      {/* ── Organization cards ───────────────────────────── */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <MembershipCards />
        </div>
      </section>
    </main>
  );
}
