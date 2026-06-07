import Link from "next/link";

// TODO: Replace with Claude-generated content for O'Malley Scholarship details

const stripe =
  "repeating-linear-gradient(90deg, #E31937 0px, #E31937 12px, #ffffff 12px, #ffffff 24px)";

const IconDocument = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>
);

const IconClipboard = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
  </svg>
);

const IconEnvelope = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);

const steps = [
  {
    n: 1,
    title: "Download the packet",
    body: "Read the guidelines carefully to confirm your eligibility before filling out the application.",
  },
  {
    n: 2,
    title: "Complete the application",
    body: "Fill out all sections of the application form and gather any required supporting documents.",
  },
  {
    n: 3,
    title: "Email your submission",
    body: "Send your completed application and documents to scholarships@post118.org before the deadline listed in the guidelines.",
  },
];

export default function Scholarships() {
  return (
    <main>
      {/* ── Page header ──────────────────────────────────── */}
      <section className="bg-legion-navy px-6 pt-10 pb-12 relative">
        <div className="max-w-4xl mx-auto">
          <nav className="text-white/40 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/programs" className="hover:text-white transition-colors">Programs</Link>
            <span className="mx-2">›</span>
            <span className="text-white/70">O&apos;Malley Scholarship</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            O&apos;Malley Scholarship Program
          </h1>
          <p className="text-white/60 max-w-2xl leading-relaxed">
            Each year, American Legion Post 118 is proud to support students in our community
            pursuing higher education through the O&apos;Malley Scholarship.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: stripe }} />
      </section>

      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">

          {/* ── Application Packet ───────────────────────── */}
          <div>
            <h2 className="text-lg font-bold text-legion-navy mb-4">Application Packet</h2>
            <div className="grid sm:grid-cols-2 gap-5">

              {/* Guidelines */}
              <article className="rounded overflow-hidden shadow-sm border border-gray-200">
                <div className="bg-legion-navy px-5 py-4 flex items-center gap-3">
                  <span className="text-white"><IconDocument /></span>
                  <span className="text-white font-semibold text-sm">Scholarship Guidelines</span>
                </div>
                <div className="bg-white p-5 flex flex-col gap-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Eligibility requirements, award details, and submission instructions.
                  </p>
                  <a
                    href="https://www.post118.org/programs/scholarships/Post-118-Scholarship-Guidelines.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-legion-navy text-white text-sm font-semibold px-4 py-2 rounded hover:opacity-90 transition-opacity self-start"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download
                  </a>
                </div>
              </article>

              {/* Application Form */}
              <article className="rounded overflow-hidden shadow-sm border border-gray-200">
                <div className="bg-legion-navy px-5 py-4 flex items-center gap-3">
                  <span className="text-white"><IconClipboard /></span>
                  <span className="text-white font-semibold text-sm">Application Form</span>
                </div>
                <div className="bg-white p-5 flex flex-col gap-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Complete and submit this form along with your supporting documents.
                  </p>
                  <a
                    href="https://www.post118.org/programs/scholarships/Post-118-Scholarship-Application.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-legion-navy text-white text-sm font-semibold px-4 py-2 rounded hover:opacity-90 transition-opacity self-start"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download
                  </a>
                </div>
              </article>

            </div>
          </div>

          {/* ── Submit Your Application ──────────────────── */}
          <div>
            <h2 className="text-lg font-bold text-legion-navy mb-4">Submit Your Application</h2>
            <div className="bg-white rounded border border-gray-200 shadow-sm p-6">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-legion-navy mt-0.5"><IconEnvelope /></span>
                <div>
                  <p className="font-semibold text-legion-navy">Send your completed application by email</p>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1">
                    Once you&apos;ve filled out the application and gathered your supporting documents,
                    email everything to our scholarship committee at the address below.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gray-50 rounded border border-gray-200 px-5 py-3 mt-2">
                <span className="text-legion-navy font-mono text-sm font-semibold select-all">
                  scholarships@post118.org
                </span>
                <a
                  href="mailto:scholarships@post118.org"
                  className="ml-auto text-sm font-semibold text-legion-blue hover:text-legion-navy transition-colors"
                >
                  Email us →
                </a>
              </div>
            </div>
          </div>

          {/* ── Eligibility ──────────────────────────────── */}
          <div>
            <h2 className="text-lg font-bold text-legion-navy mb-4">Who Can Apply?</h2>
            <div className="bg-white rounded border border-gray-200 shadow-sm p-6">
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <span className="text-legion-red font-bold text-lg shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-legion-navy text-sm mb-0.5">You&apos;re a US citizen</p>
                    <p className="text-gray-600 text-sm">Citizenship is required for all applicants.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-legion-red font-bold text-lg shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-legion-navy text-sm mb-0.5">You have military family ties</p>
                    <p className="text-gray-600 text-sm">Your parent, guardian, or grandparent honorably served in the military.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-legion-red font-bold text-lg shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-legion-navy text-sm mb-0.5">Your family member is a Post 118 member in good standing</p>
                    <p className="text-gray-600 text-sm">They must have an active American Legion Post 118 membership.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-legion-red font-bold text-lg shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-legion-navy text-sm mb-0.5">You&apos;re pursuing full-time higher education</p>
                    <p className="text-gray-600 text-sm">Enroll at an accredited college, university, or trade/vocational school. Part-time students are not eligible.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-6 p-4 bg-blue-50 border border-legion-blue rounded">
              <p className="text-sm text-legion-navy font-semibold mb-2">What we&apos;re looking for:</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                We review applications based on Americanism, leadership, community service, volunteerism, and scholastic achievement. If your parent, guardian, or grandparent served in the military, that will give your application extra consideration.
              </p>
            </div>
          </div>

          {/* ── What to Submit ──────────────────────────────── */}
          <div>
            <h2 className="text-lg font-bold text-legion-navy mb-4">What to Submit</h2>
            <div className="bg-white rounded border border-gray-200 shadow-sm p-6">
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <span className="text-legion-navy font-bold text-lg shrink-0">1</span>
                  <div>
                    <p className="font-semibold text-legion-navy text-sm mb-0.5">Completed application form</p>
                    <p className="text-gray-600 text-sm">Fill out all sections. Include details about your intended institution and field of study.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-legion-navy font-bold text-lg shrink-0">2</span>
                  <div>
                    <p className="font-semibold text-legion-navy text-sm mb-0.5">High school transcript & GPA</p>
                    <p className="text-gray-600 text-sm">Include class ranking if available. If reapplying: submit your college transcript instead.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-legion-navy font-bold text-lg shrink-0">3</span>
                  <div>
                    <p className="font-semibold text-legion-navy text-sm mb-0.5">Essay</p>
                    <p className="text-gray-600 text-sm">Showcase your achievements in Americanism, leadership, community service, and volunteerism.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-6 p-4 bg-amber-50 border border-amber-300 rounded">
              <p className="text-sm text-amber-900 font-semibold mb-2">Important: Deadline</p>
              <p className="text-sm text-amber-800 leading-relaxed">
                Applications must be submitted by <strong>5:00 PM on the second Sunday in April</strong>. Mail to <strong>TAL Post 118, 846 SR-39, Danville, IN 46122</strong>, or email <strong>scholarships@post118.org</strong>.
              </p>
            </div>
          </div>

          {/* ── How to Apply ─────────────────────────────── */}
          <div>
            <h2 className="text-lg font-bold text-legion-navy mb-4">How to Apply</h2>
            <div className="bg-white rounded border border-gray-200 shadow-sm p-6">
              <ol className="relative">
                {steps.map(({ n, title, body }, i) => (
                  <li key={n} className="flex gap-5 relative">
                    {/* Vertical connector line */}
                    {i < steps.length - 1 && (
                      <div className="absolute left-[18px] top-9 bottom-0 w-px bg-gray-200" />
                    )}
                    {/* Step number bubble */}
                    <div className="shrink-0 w-9 h-9 rounded-full bg-legion-navy text-white flex items-center justify-center text-sm font-bold z-10">
                      {n}
                    </div>
                    <div className={`pb-8 ${i === steps.length - 1 ? "pb-0" : ""}`}>
                      <p className="font-semibold text-legion-navy mb-1">{title}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
