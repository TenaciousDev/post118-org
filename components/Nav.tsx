"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { assetPath } from "@/lib/assetPath";

const NAV_LINKS = [
  { href: "/",         label: "Home"     },
  { href: "/events",   label: "Events"   },
  { href: "/benefits", label: "Benefits" },
  { href: "/join",     label: "Join"     },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/" || pathname === "//";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function AboutDropdown() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const active = isActive(pathname, "/about");

  return (
    <div ref={ref} className="relative"
      onMouseEnter={() => { clearTimeout(timer.current); setOpen(true); }}
      onMouseLeave={() => { timer.current = setTimeout(() => setOpen(false), 120); }}>
      <button onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1 px-3 py-1 text-sm transition-colors ${
          active ? "text-white border-b-2 border-legion-red" : "text-legion-mist hover:text-white"
        }`}>
        About
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}
          className={`w-3 h-3 transition-transform duration-150 ${open ? "rotate-180" : ""}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded shadow-lg border border-gray-100 py-3 z-50"
          onMouseEnter={() => { clearTimeout(timer.current); setOpen(true); }}
          onMouseLeave={() => { timer.current = setTimeout(() => setOpen(false), 120); }}>
          <div className="px-4 space-y-3">
            <div className="flex items-start gap-2.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
                className="w-4 h-4 text-legion-blue shrink-0 mt-0.5">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <p className="text-xs text-gray-500 leading-snug">846 S SR-39<br />Danville, IN 46122</p>
            </div>
            <div className="flex items-center gap-2.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
                className="w-4 h-4 text-legion-blue shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <a href="tel:+13177454736"
                className="text-xs text-gray-600 hover:text-legion-blue transition-colors">
                (317) 745-4736
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
                className="w-4 h-4 text-legion-blue shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <a href="mailto:contact@post118.org"
                className="text-xs text-gray-600 hover:text-legion-blue transition-colors">
                contact@post118.org
              </a>
            </div>
            <div className="text-xs text-gray-500 leading-snug">
              <span className="font-semibold text-gray-700">Hours:</span>{" "}
              Mon-Sat 11am-10pm · Sun Noon-7pm
            </div>
          </div>
          <div className="border-t border-gray-100 mt-3 pt-2.5 px-4">
            <Link href="/about" onClick={() => setOpen(false)}
              className="text-sm font-semibold text-legion-blue hover:text-legion-navy transition-colors">
              About &amp; Contact &#8594;
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  if (!open) return null;
  return (
    <div className="absolute top-full left-0 right-0 bg-legion-blue border-t border-white/10 z-50 shadow-xl md:hidden">
      <nav className="flex flex-col px-4 py-3 gap-0.5 max-w-7xl mx-auto">
        {[...NAV_LINKS, { href: "/about", label: "About" }].map(({ href, label }) => (
          <Link key={href} href={href} onClick={onClose}
            className={`px-3 py-2.5 rounded text-sm font-medium transition-colors ${
              isActive(pathname, href)
                ? "bg-white/10 text-white"
                : "text-legion-mist hover:text-white hover:bg-white/5"
            }`}>
            {label}
          </Link>
        ))}
        <div className="border-t border-white/10 my-2" />
        <div className="px-3 py-1.5 text-xs text-legion-mist/70 space-y-0.5">
          <p>846 S SR-39, Danville IN &middot; (317) 745-4736</p>
          <p>Mon-Sat 11am-10pm &middot; Sun Noon-7pm</p>
        </div>
        <Link href="/join" onClick={onClose}
          className="mx-3 mt-2 mb-1 bg-legion-red text-white text-sm font-semibold px-4 py-2.5 rounded text-center hover:opacity-90 transition-opacity">
          Join Post 118
        </Link>
      </nav>
    </div>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <header className="bg-legion-blue sticky top-0 z-40 w-full">
      <div className="max-w-7xl mx-auto h-16 flex items-center px-4 sm:px-6 gap-2 relative">
        <Link href="/" className="flex items-center shrink-0">
          <img
            src={assetPath("/images/logo.png")}
            alt="American Legion Post 118"
            className="h-12 w-auto"
          />
        </Link>
        <div className="hidden md:flex items-center gap-1 ml-auto">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href}
              className={`px-3 py-1 text-sm transition-colors ${
                isActive(pathname, href)
                  ? "text-white border-b-2 border-legion-red"
                  : "text-legion-mist hover:text-white"
              }`}>
              {label}
            </Link>
          ))}
          <AboutDropdown />
        </div>
        <Link href="/join"
          className="hidden md:inline-block shrink-0 bg-legion-red text-white text-sm font-semibold px-4 py-2 rounded hover:opacity-90 transition-opacity ml-3">
          Join Now
        </Link>
        <button onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="md:hidden ml-auto p-2 text-white rounded hover:bg-white/10 transition-colors">
          {mobileOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
