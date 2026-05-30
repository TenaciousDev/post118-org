"use client";

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
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/" || pathname === "//";
  return pathname === href || pathname === `${href}/`;
}

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="bg-legion-navy h-16 flex items-center px-6 gap-6">
      <Link href="/" className="flex items-center gap-3 shrink-0">
        <Image
          src="/images/logo.png"
          alt="American Legion Post 118"
          height={40}
          width={40}
          className="object-contain"
        />
        <div className="leading-tight">
          <div className="text-white font-semibold text-sm">American Legion</div>
          <div className="text-white/50 text-xs">Post 118 · Danville, IN</div>
        </div>
      </Link>

      <div className="flex items-center gap-1 ml-auto">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`px-3 py-1 text-sm transition-colors ${
              isActive(pathname, href)
                ? "text-white border-b-2 border-legion-red"
                : "text-white/70 hover:text-white"
            }`}
          >
            {label}
          </Link>
        ))}
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
