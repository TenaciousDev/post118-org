"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/events", label: "Events" },
  { href: "/lunch", label: "Lunch" },
  { href: "/membership", label: "Membership" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/" || pathname === "//";
  return pathname === href || pathname === `${href}/`;
}

export default function Nav() {
  const pathname = usePathname();
  const [contactOpen, setContactOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Close on outside click
  useEffect(() => {
    function onPointerDown(e: MouseEvent) {
      if (contactRef.current && !contactRef.current.contains(e.target as Node)) {
        setContactOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  function openContact() {
    clearTimeout(closeTimer.current);
    setContactOpen(true);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setContactOpen(false), 120);
  }

  return (
    <nav className="bg-legion-navy h-16 flex items-center px-6 gap-6 relative">
      <Link href="/" className="flex items-center gap-3 shrink-0">
        <Image
          src="/images/logo.png"
          alt="American Legion Post 118"
          width={124}
          height={40}
          className="object-contain"
        />
        <div className="leading-tight">
          <div className="text-legion-white font-semibold text-sm">American Legion</div>
          <div className="text-legion-mist text-xs">Post 118 · Danville, IN</div>
        </div>
      </Link>

      <div className="flex items-center gap-1 ml-auto">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`px-3 py-1 text-sm transition-colors ${
              isActive(pathname, href)
                ? "text-legion-white border-b-2 border-legion-red"
                : "text-legion-mist hover:text-legion-white"
            }`}
          >
            {label}
          </Link>
        ))}

        {/* Contact dropdown */}
        <div
          ref={contactRef}
          className="relative"
          onMouseEnter={openContact}
          onMouseLeave={scheduleClose}
        >
          <button
            onClick={() => setContactOpen((o) => !o)}
            className={`flex items-center gap-1 px-3 py-1 text-sm transition-colors ${
              isActive(pathname, "/contact")
                ? "text-legion-white border-b-2 border-legion-red"
                : "text-legion-mist hover:text-legion-white"
            }`}
          >
            Contact
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              className={`w-3 h-3 transition-transform duration-150 ${contactOpen ? "rotate-180" : ""}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          {contactOpen && (
            <div
              className="absolute right-0 top-full mt-2 w-60 bg-white rounded shadow-lg border border-gray-100 py-3 z-50"
              onMouseEnter={openContact}
              onMouseLeave={scheduleClose}
            >
              <div className="px-4 space-y-2.5">
                <div className="flex items-start gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 text-legion-navy shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <p className="text-xs text-gray-500 leading-snug">846 S SR-39<br />Danville, IN 46122</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 text-legion-navy shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <a href="tel:+13177454736" className="text-xs text-gray-600 hover:text-legion-navy transition-colors">
                    (317) 745-4736
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 text-legion-navy shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <a href="mailto:contact@post118.org" className="text-xs text-gray-600 hover:text-legion-navy transition-colors">
                    contact@post118.org
                  </a>
                </div>
              </div>
              <div className="border-t border-gray-100 mt-3 pt-2.5 px-4">
                <Link
                  href="/contact"
                  onClick={() => setContactOpen(false)}
                  className="text-sm font-semibold text-legion-blue hover:text-legion-navy transition-colors"
                >
                  Full Contact Page →
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <Link
        href="/membership"
        className="shrink-0 bg-legion-red text-white text-sm font-semibold px-4 py-2 rounded hover:opacity-90 transition-opacity"
      >
        Join Now
      </Link>
    </nav>
  );
}
