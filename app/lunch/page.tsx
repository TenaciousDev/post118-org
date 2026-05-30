import Link from "next/link";

const stripe =
  "repeating-linear-gradient(90deg, #E31937 0px, #E31937 12px, #ffffff 12px, #ffffff 24px)";

const KITCHEN_CLOSED = false;
const KITCHEN_CLOSED_MESSAGE = "The kitchen is temporarily closed. Check back soon!";

/* ── Data ────────────────────────────────────────────────────────── */

const DAILY_SPECIALS = [
  { day: "Monday",    item: "Hot Ham & Cheese or Bacon Grilled Cheese",             price: "$9.00" },
  { day: "Tuesday",   item: "Meatloaf",                                              price: "$9.00" },
  { day: "Wednesday", item: "Famous Hoosier Tenderloin",   sub: "Breaded or grilled · while supplies last", price: "$9.00" },
  { day: "Thursday",  item: "Manhattans",                                            price: "$9.00" },
  { day: "Friday",    item: "Jumbo Coney Dog",                                       price: "$9.00" },
];

const DAILY_LEFT = [
  { item: "Cheeseburger",      price: "$9" },
  { item: "Wings",             price: "$9" },
  { item: "Chicken Salad",     price: "$9" },
  { item: "Chicken Sandwich",  price: "$9" },
  { item: "Chicken Tenders",   price: "$9" },
];

const DAILY_RIGHT = [
  { item: "Fish Sandwich",  price: "$9" },
  { item: "BLT",            price: "$9" },
  { item: "Sloppy Joe",     price: "$9" },
  { item: "Chef Salad",     price: "$6" },
];

const SIDES = [
  "French Fries", "Onion Rings", "Tater Tots",
  "Potato Salad", "Cole Slaw", "Cottage Cheese",
  "Corn", "Green Beans",
];

const EXTRAS = [
  { item: "Bacon",          price: "$2.00" },
  { item: "Cheese",         price: "$1.00" },
  { item: "Bun",            price: "$0.50" },
  { item: "Dipping Sauce",  price: "$0.50" },
];

const DRESSINGS = [
  "Ranch", "French", "Italian", "Thousand Island",
  "BBQ", "Hot Honey", "Buffalo (mild or garlic)",
  "Tartar Sauce", "Garlic Parmesan",
];

const KIDS_CHOICES = ["Grilled Cheese", "Hot Dog", "Chicken Tenders"];

/* ── Sub-components ──────────────────────────────────────────────── */

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-legion-navy px-5 py-3 rounded-t">
      <span className="text-white font-semibold text-sm">{children}</span>
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded overflow-hidden border border-gray-200 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────────── */

export default function Lunch() {
  return (
    <main>
      {/* ── Page header ──────────────────────────────────── */}
      <section className="bg-legion-navy px-6 pt-10 pb-12 relative">
        <div className="max-w-4xl mx-auto">
          <nav className="text-white/40 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white/70">Lunch</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                Kitchen &amp; Lunch Menu
              </h1>
              <p className="text-white/60 max-w-2xl leading-relaxed">
                Lunch served fresh every weekday. Dine in or carry out — everyone is
                welcome at Post 118&apos;s kitchen.
              </p>
            </div>
            <a
              href="/menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 border border-white/50 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-white/10 transition-colors self-start"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Menu
            </a>
          </div>

          {/* Info pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {["Mon–Fri, 11:00 AM – 2:00 PM", "Open to the public", "Dine in or carry out"].map((pill) => (
              <span key={pill} className="border border-white/20 rounded-full px-3 py-1 text-white/60 text-xs">
                {pill}
              </span>
            ))}
          </div>

          {/* Kitchen closed banner */}
          {KITCHEN_CLOSED && (
            <div className="mt-4 bg-legion-red/20 border border-legion-red/40 rounded px-4 py-3 text-white text-sm flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 text-legion-red shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
              </svg>
              {KITCHEN_CLOSED_MESSAGE}
            </div>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: stripe }} />
      </section>

      {/* ── Menu sections ────────────────────────────────── */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">

          {/* Daily Specials */}
          <Card>
            <SectionHeader>Daily Specials · Served with 2 sides</SectionHeader>
            <div className="bg-white divide-y divide-gray-100">
              {DAILY_SPECIALS.map(({ day, item, sub, price }) => (
                <div key={day} className="flex items-start justify-between px-5 py-3 gap-4">
                  <div>
                    <span className="text-xs font-semibold text-legion-red uppercase tracking-wide mr-3">{day}</span>
                    <span className="text-sm font-medium text-gray-800">{item}</span>
                    {sub && <p className="text-xs text-gray-400 mt-0.5 ml-0">{sub}</p>}
                  </div>
                  <span className="text-sm font-semibold text-legion-navy shrink-0">{price}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Available Every Day */}
          <Card>
            <SectionHeader>Available Every Day · Includes 1 side</SectionHeader>
            <div className="bg-white px-5 py-4">
              <div className="grid grid-cols-2 gap-x-10 divide-x divide-gray-100">
                <ul className="space-y-2 pr-10">
                  {DAILY_LEFT.map(({ item, price }) => (
                    <li key={item} className="flex justify-between text-sm">
                      <span className="text-gray-800">{item}</span>
                      <span className="font-semibold text-legion-navy">{price}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2 pl-10">
                  {DAILY_RIGHT.map(({ item, price }) => (
                    <li key={item} className="flex justify-between text-sm">
                      <span className="text-gray-800">{item}</span>
                      <span className="font-semibold text-legion-navy">{price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          {/* Sides / Extras / Dressings */}
          <div className="grid sm:grid-cols-2 gap-6">

            {/* Sides */}
            <Card>
              <SectionHeader>Sides</SectionHeader>
              <ul className="bg-white px-5 py-4 grid grid-cols-2 gap-x-4 gap-y-1.5">
                {SIDES.map((s) => (
                  <li key={s} className="text-sm text-gray-700">{s}</li>
                ))}
              </ul>
            </Card>

            {/* Extras + Dressings */}
            <div className="flex flex-col gap-6">
              <Card>
                <SectionHeader>Extras</SectionHeader>
                <ul className="bg-white px-5 py-4 space-y-1.5">
                  {EXTRAS.map(({ item, price }) => (
                    <li key={item} className="flex justify-between text-sm">
                      <span className="text-gray-700">{item}</span>
                      <span className="font-semibold text-legion-navy">{price}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card>
                <SectionHeader>Dressings &amp; Dips</SectionHeader>
                <ul className="bg-white px-5 py-4 grid grid-cols-2 gap-x-4 gap-y-1.5">
                  {DRESSINGS.map((d) => (
                    <li key={d} className="text-sm text-gray-700">{d}</li>
                  ))}
                </ul>
              </Card>
            </div>

          </div>

          {/* Kids Menu */}
          <Card>
            <div className="bg-legion-navy px-5 py-3 rounded-t flex items-center justify-between">
              <span className="text-white font-semibold text-sm">Kids Menu</span>
              <div className="flex items-center gap-3">
                <span className="text-xs text-white/50 border border-white/20 rounded-full px-2 py-0.5">May – Aug</span>
                <span className="text-white font-bold">$5.00</span>
              </div>
            </div>
            <div className="bg-blue-50 border-t-0 px-5 py-4">
              <p className="text-sm text-gray-600 mb-3">Choose one entrée, comes with 1 side and a small drink.</p>
              <div className="flex flex-wrap gap-2">
                {KIDS_CHOICES.map((c) => (
                  <span key={c} className="bg-white border border-legion-blue/30 text-legion-navy text-sm font-medium px-3 py-1 rounded-full">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Card>

        </div>
      </section>
    </main>
  );
}
