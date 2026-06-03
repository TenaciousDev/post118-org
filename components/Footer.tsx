import Link from "next/link";

const links = [
  { href: "/",         label: "Home"     },
  { href: "/events",   label: "Events"   },
  { href: "/benefits", label: "Benefits" },
  { href: "/join",     label: "Join"     },
  { href: "/about",    label: "About"    },
];

export default function Footer() {
  return (
    <footer className="bg-legion-navy-deep px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="text-legion-white font-semibold">American Legion Post 118</div>
          <div className="text-legion-mist text-sm mt-1">846 S SR-39 · Danville, IN 46122 · (317) 745-4736</div>
          <div className="text-legion-mist/60 text-xs mt-1">contact@post118.org</div>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map(({ href, label }) => (
            <Link key={href} href={href}
              className="text-legion-mist hover:text-legion-white text-sm transition-colors">
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="max-w-7xl mx-auto mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-legion-mist/50 text-xs">
          © {new Date().getFullYear()} American Legion Post 118 · Danville, Indiana
        </p>
        <a href="https://www.facebook.com/HCALPost118" target="_blank" rel="noopener noreferrer"
          className="text-legion-mist/50 hover:text-legion-mist text-xs transition-colors">
          Facebook →
        </a>
      </div>
    </footer>
  );
}
