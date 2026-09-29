"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/signin" || pathname === "/signup") return null;

  const footerLinks = [
    {
      title: "Column 1",
      links: ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
    },
    {
      title: "Column 2",
      links: ["Development", "Marketing", "Photography", "Finance", "Sport"],
    },
    {
      title: "Column 3",
      links: ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
    }
  ];

  return (
    <footer className="w-full bg-white pt-20 pb-10 border-t border-[#E8E8EA]">
      <div className="max-w-[1240px] px-6 mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-18 mb-20">
          
          {/* Left: Newsletter */}
          <div className="flex-1 max-w-[450px]">
            <Image 
              src="/footer-logo.png" 
              alt="ByteSpace Logo" 
              width={200} 
              height={40} 
              className="h-10 w-auto mb-6" 
            />
            <p className="font-satoshi text-[16px] text-[#4B4C53] mb-8">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            
            <form className="flex items-center gap-4 mb-6">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 h-[50px] px-5 rounded-full border border-[#E8E8EA] text-[#1A1D27] placeholder:text-[#7F879E] text-[15px] font-satoshi focus:outline-none focus:border-[#0055FF] transition-colors"
                required
              />
              <button 
                type="submit" 
                className="h-[50px] px-8 bg-[#D4FB20] text-[#1A1D27] font-satoshi font-semibold text-[15px] rounded-full hover:bg-[#c5ec15] transition-colors whitespace-nowrap shadow-sm"
              >
                Search
              </button>
            </form>
            
            <p className="font-satoshi text-[12px] text-[#7F879E] leading-relaxed">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex-[1.5] grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerLinks.map((col, idx) => (
              <div key={idx} className="flex flex-col gap-5 mt-2">
                {col.links.map((link, linkIdx) => (
                  <Link 
                    key={linkIdx} 
                    href="#" 
                    className="font-satoshi text-[15px] text-[#4B4C53] hover:text-[#0055FF] transition-colors"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-[#E8E8EA] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-satoshi text-[14px] text-[#7F879E]">
            @ 2023 ByteSpace. All rights reserved.
          </p>
          <div className="flex items-center gap-6 sm:gap-8">
            <Link href="#" className="font-satoshi text-[14px] text-[#7F879E] hover:text-[#0055FF] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="font-satoshi text-[14px] text-[#7F879E] hover:text-[#0055FF] transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="font-satoshi text-[14px] text-[#7F879E] hover:text-[#0055FF] transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
