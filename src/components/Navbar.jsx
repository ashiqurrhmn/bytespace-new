"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  if (pathname === "/signin") return null;

  return (
    <header className="relative w-full z-50">
      <div className="w-full h-[80px] md:h-[120px] flex items-center justify-between px-5 sm:px-8 md:px-16 max-w-[1240px] mx-auto text-white">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Assets/Header_Logo.png"
            alt="ByteSpace Logo"
            width={180}
            height={37}
            className="h-7 sm:h-8 md:h-9 w-auto"
            priority
          />
        </Link>

        {/* Navigation Menu – Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-[16px] font-medium hover:opacity-80 transition-opacity">Home</Link>
          <Link href="/courses" className="text-[16px] font-normal hover:opacity-80 transition-opacity">Courses</Link>
          <Link href="/creators" className="text-[16px] font-normal hover:opacity-80 transition-opacity">Creators</Link>
        </nav>

        {/* Right Side Actions – Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/signin" className="text-[16px] font-normal hover:opacity-80 transition-opacity">Sign In</Link>
          <Link href="/join" className="text-[16px] font-normal hover:opacity-80 transition-opacity">Join Us</Link>
          <button className="flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Shopping Cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </button>
        </div>

        {/* Hamburger Button – Mobile/Tablet */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#002EB8] border-t border-white/10 shadow-2xl transition-all duration-300 overflow-hidden z-50 ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-1 py-6 px-6">
          <Link href="/" onClick={() => setMenuOpen(false)} className="w-full text-center text-white text-lg font-medium py-3 rounded-xl hover:bg-white/10 transition-colors">Home</Link>
          <Link href="/courses" onClick={() => setMenuOpen(false)} className="w-full text-center text-white text-lg font-normal py-3 rounded-xl hover:bg-white/10 transition-colors">Courses</Link>
          <Link href="/creators" onClick={() => setMenuOpen(false)} className="w-full text-center text-white text-lg font-normal py-3 rounded-xl hover:bg-white/10 transition-colors">Creators</Link>
          <div className="w-full h-px bg-white/15 my-2" />
          <Link href="/signin" onClick={() => setMenuOpen(false)} className="w-full text-center text-white text-lg font-normal py-3 rounded-xl hover:bg-white/10 transition-colors">Sign In</Link>
          <Link href="/join" onClick={() => setMenuOpen(false)} className="w-full text-center text-[#003BE2] text-lg font-semibold py-3 rounded-xl bg-[#D4FB20] hover:bg-[#c8ec1a] transition-colors">Join Us</Link>
        </nav>
      </div>
    </header>
  );
}
