import Link from "next/link";

const stripe =
  "repeating-linear-gradient(90deg, #E31937 0px, #E31937 12px, #ffffff 12px, #ffffff 24px)";

export default function SAL() {
  return (
    <main>
      <section className="bg-legion-navy px-6 pt-10 pb-12 relative">
        <div className="max-w-4xl mx-auto">
          <nav className="text-white/40 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white/70">Sons of The American Legion</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Sons of The American Legion
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: stripe }} />
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-md mx-auto text-center">
          <div className="w-14 h-14 rounded-full bg-legion-navy/10 flex items-center justify-center mx-auto mb-6">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 text-legion-navy">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-legion-navy mb-3">We&apos;re working on this page</h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Check back soon to learn more about the Sons of The American Legion
            squadron at Post 118.
          </p>
          <Link
            href="/"
            className="inline-block bg-legion-navy text-white font-semibold px-6 py-3 rounded hover:opacity-90 transition-opacity"
          >
            Return Home
          </Link>
        </div>
      </section>
    </main>
  );
}
