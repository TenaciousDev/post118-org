import Link from "next/link";

const stripe =
  "repeating-linear-gradient(90deg, #E31937 0px, #E31937 12px, #ffffff 12px, #ffffff 24px)";

export default function Contact() {
  return (
    <main>
      {/* ── Page header ──────────────────────────────────── */}
      <section className="bg-legion-navy px-6 pt-10 pb-12 relative">
        <div className="max-w-4xl mx-auto">
          <nav className="text-white/40 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white/70">Contact</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Contact Us</h1>
          <p className="text-white/60 max-w-2xl leading-relaxed">
            We&apos;d love to hear from you. Stop by the post, give us a call, or send us a message.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: stripe }} />
      </section>

      {/* ── Content ──────────────────────────────────────── */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

          {/* ── Left: contact details + map ───────────────── */}
          <div className="flex flex-col gap-5">
            <div className="bg-white rounded border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-legion-navy px-5 py-3">
                <span className="text-white font-semibold text-sm">Post 118 Contact Info</span>
              </div>
              <div className="px-5 py-5 space-y-4">

                {/* Address */}
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

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-legion-navy shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-legion-navy">Phone</p>
                    <a href="tel:+13177454736" className="text-sm text-legion-blue hover:text-legion-navy transition-colors">
                      (317) 745-4736
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-legion-navy shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-legion-navy">Email</p>
                    <a href="mailto:contact@post118.org" className="text-sm text-legion-blue hover:text-legion-navy transition-colors">
                      contact@post118.org
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded border border-gray-200 shadow-sm overflow-hidden">
              <iframe
                title="Post 118 location map"
                src="https://maps.google.com/maps?q=846+S+SR-39+Danville+IN+46122&output=embed&z=15"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </div>

          {/* ── Right: contact form ───────────────────────── */}
          <div className="bg-white rounded border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-legion-navy px-5 py-3">
              <span className="text-white font-semibold text-sm">Send Us a Message</span>
            </div>
            {/* Replace YOUR_FORM_ID with your Formspree form ID — https://formspree.io */}
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="px-5 py-5 flex flex-col gap-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-legion-red">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-legion-blue focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-legion-red">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-legion-blue focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(317) 555-0100"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-legion-blue focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-legion-red">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="How can we help?"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-legion-blue focus:border-transparent resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-legion-red text-white font-semibold py-2.5 rounded hover:opacity-90 transition-opacity text-sm"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}
