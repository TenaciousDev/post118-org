import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/visit", label: "Visit" },
  { href: "/programs", label: "Programs" },
  { href: "/events", label: "Events" },
  { href: "/lunch", label: "Lunch" },
  { href: "/membership", label: "Membership" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-legion-navy-deep px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <div className="text-legion-white font-semibold">
          American Legion Post 118
        </div>
        <div className="text-legion-mist text-sm mt-1">
          846 S SR-39 · Danville, IN 46122 · (317) 745-4736
        </div>
      </div>
      <nav className="flex flex-wrap gap-x-5 gap-y-2">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-legion-mist hover:text-legion-white text-sm transition-colors"
          >
            {label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
