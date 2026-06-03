import Link from "next/link";

const stripe =
  "repeating-linear-gradient(90deg, #E31937 0px, #E31937 12px, #ffffff 12px, #ffffff 24px)";

export const metadata = {
  title: "About Post 118 | American Legion Danville, IN",
  description: "About American Legion Post 118 — history, location, hours, grounds, and contact.",
};

export default function About() {
  return (
    <main>
      <section className="bg-legion-blue px-6 pt-10 pb-12 relative">
        <div className="max-w-4xl mx-auto">
          <nav className="text-white/40 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white/70">About</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">About Post 118</h1>
          <p className="text-white/60 max-w-2xl leading-relaxed">
            American Legion Post 118 has served Danville and Hendricks County since 1919.
            Veterans, families, and neighbors — always welcome.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: stripe }} />
      </section>

      {/* Crisis line — quiet and tasteful */}
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-3 text-center text-sm text-gray-500">
        Need to talk?{" "}
        <a href="https://www.veteranscrisisline.net" target="_blank" rel="noopener noreferrer"
          className="font-semibold text-legion-blue hover:text-legion-navy transition-colors">
          Veterans Crisis Line
        </a>
        {" "}— call or text <span className="font-semibold">988</span>, press 1.
      </div>

      {/* Contact & Hours — front and center */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-legion-navy mb-8">Find Us</h2>
          <div className="grid md:grid-cols-2 gap-8">

            <div className="flex flex-col gap-5">
              {/* Contact card */}
              <div className="bg-white rounded border border-gray-200 shadow-sm overflow-hidden">
                <div className="bg-legion-blue px-5 py-3">
                  <span className="text-white font-semibold text-sm">Contact</span>
                </div>
                <div className="px-5 py-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
                      className="w-5 h-5 text-legion-blue shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-legion-navy">Address</p>
                      <p className="text-sm text-gray-600">846 S SR-39</p>
                      <p className="text-sm text-gray-600">Danville, IN 46122</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
                      className="w-5 h-5 text-legion-blue shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-legion-navy">Phone</p>
                      <a href="tel:+13177454736"
                        className="text-sm text-legion-blue hover:text-legion-navy transition-colors">
                        (317) 745-4736
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
                      className="w-5 h-5 text-legion-blue shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-legion-navy">Email</p>
                      <a href="mailto:contact@post118.org"
                        className="text-sm text-legion-blue hover:text-legion-navy transition-colors">
                        contact@post118.org
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
                      className="w-5 h-5 text-legion-blue shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-legion-navy">Facebook</p>
                      <a href="https://www.facebook.com/HCALPost118" target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-legion-blue hover:text-legion-navy transition-colors">
                        facebook.com/HCALPost118
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours card */}
              <div className="bg-white rounded border border-gray-200 shadow-sm overflow-hidden">
                <div className="bg-legion-blue px-5 py-3">
                  <span className="text-white font-semibold text-sm">Hours</span>
                </div>
                <div className="px-5 py-5 divide-y divide-gray-100">
                  {[
                    { days: "Mon – Sat", hours: "11:00 AM – 10:00 PM" },
                    { days: "Sunday",    hours: "Noon – 7:00 PM" },
                  ].map(({ days, hours }) => (
                    <div key={days} className="flex justify-between items-center py-2.5">
                      <span className="text-sm font-medium text-gray-700">{days}</span>
                      <span className="text-sm font-semibold text-legion-navy">{hours}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-start py-2.5">
                    <div>
                      <span className="text-sm font-medium text-gray-700">Kitchen / Lunch</span>
                      <p className="text-xs text-gray-400">Mon – Fri · Open to the public</p>
                    </div>
                    <span className="text-sm font-semibold text-legion-red">11:00 AM – 2:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="flex flex-col gap-5">
              <div className="rounded border border-gray-200 shadow-sm overflow-hidden">
                <iframe
                  title="Post 118 location"
                  src="https://maps.google.com/maps?q=846+IN-39+Danville+IN+46122&output=embed&z=15"
                  width="100%" height="320" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block"
                />
              </div>
              <a href="https://maps.apple.com/?address=846+IN-39,Danville,IN+46122"
                className="inline-flex items-center justify-center gap-2 border border-legion-blue text-legion-blue font-semibold text-sm px-4 py-2.5 rounded hover:bg-legion-blue hover:text-white transition-colors">
                Open in Maps →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-gray-50 py-14 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-legion-navy mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Post 118 is a chartered post of The American Legion, the nation&apos;s largest veterans
              service organization. We exist to serve veterans, support active duty military
              families, and strengthen the community that so many of our members came home to defend.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From scholarship programs to veterans benefits navigation, Friday dinners to community
              events — everything we do comes back to that mission. We&apos;re not just a bar.
              We&apos;re a gathering place for Hendricks County.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { label: "Founded",      value: "Post 118, Danville, Indiana"     },
              { label: "County",       value: "Hendricks County, Indiana"        },
              { label: "Organization", value: "The American Legion"              },
              { label: "Open to",      value: "Veterans, families & the public"  },
            ].map(({ label, value }) => (
              <div key={label} className="border-l-4 border-legion-blue pl-4 py-1">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{label}</p>
                <p className="text-sm font-medium text-legion-navy">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grounds */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-legion-navy mb-3">Our Grounds</h2>
          <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl">
            Post 118 sits on 22 acres — outdoor space for events, bike nights, family
            gatherings, and just sitting outside on a summer evening. Come as you are.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: "🌿", title: "22 Acres",              desc: "Plenty of outdoor space for events, live music, bike nights, and hanging out." },
              { icon: "🛝", title: "Kids' Playground",      desc: "Playground on the grounds. Bring the kids." },
              { icon: "🐕", title: "Dogs Welcome Outside",  desc: "Bring your leashed pup to any outdoor event. Service animals always welcome inside." },
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
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-gray-50 py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-legion-navy mb-8">Send Us a Message</h2>
          {/* Replace YOUR_FORM_ID with your Formspree form ID — https://formspree.io */}
          <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST"
            className="bg-white rounded border border-gray-200 shadow-sm px-6 py-6 flex flex-col gap-4 max-w-xl">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-legion-red">*</span>
                </label>
                <input id="name" name="name" type="text" required placeholder="Your full name"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-legion-blue focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input id="phone" name="phone" type="tel" placeholder="(317) 555-0100"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-legion-blue focus:border-transparent" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-legion-red">*</span>
              </label>
              <input id="email" name="email" type="email" required placeholder="you@example.com"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-legion-blue focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message <span className="text-legion-red">*</span>
              </label>
              <textarea id="message" name="message" required rows={4} placeholder="How can we help?"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-legion-blue focus:border-transparent resize-y" />
            </div>
            <button type="submit"
              className="bg-legion-red text-white font-semibold py-2.5 rounded hover:opacity-90 transition-opacity text-sm">
              Send Message
            </button>
            <p className="text-xs text-gray-400">We typically respond within 48 hours.</p>
          </form>
        </div>
      </section>

      {/* Join CTA */}
      <section className="bg-legion-blue py-14 px-6 relative overflow-hidden">
        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Involved?</h2>
          <p className="text-white/60 leading-relaxed mb-8">
            The post is open to the public every Friday — no membership required.
            When you&apos;re ready to join, we&apos;d love to have you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/join"
              className="bg-legion-red text-white font-semibold px-6 py-3 rounded hover:opacity-90 transition-opacity">
              Join the Post
            </Link>
            <Link href="/events"
              className="border border-white/40 text-white font-semibold px-6 py-3 rounded hover:bg-white/10 transition-colors">
              See Events
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: stripe }} />
      </section>
    </main>
  );
}
