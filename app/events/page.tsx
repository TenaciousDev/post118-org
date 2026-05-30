import Link from "next/link";
import EventList from "@/components/EventList";

const stripe =
  "repeating-linear-gradient(90deg, #E31937 0px, #E31937 12px, #ffffff 12px, #ffffff 24px)";

export default function Events() {
  return (
    <main>
      {/* ── Page header ──────────────────────────────────── */}
      <section className="bg-legion-navy px-6 pt-10 pb-12 relative">
        <div className="max-w-4xl mx-auto">
          <nav className="text-white/40 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white/70">Events</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Events</h1>
          <p className="text-white/60 max-w-2xl leading-relaxed">
            From Friday dinners to live music and bike nights, there&apos;s always something
            happening at Post 118. All events are open to the public unless noted.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: stripe }} />
      </section>

      {/* ── Event list ───────────────────────────────────── */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <EventList />
        </div>
      </section>
    </main>
  );
}
