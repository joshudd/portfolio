"use client";

import Link from "next/link";
import { linkarrowIcon } from "../ui/icons";
import { useState } from "react";
import { Share2, X } from "lucide-react";

// shared header component for all pages
export function SharedHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const links = [
    {
      name: "linkedin",
      url: "https://linkedin.com/in/joshuu",
    },
    {
      name: "github",
      url: "https://github.com/joshudd",
    },
    {
      name: "resume",
      url: "/Joshua Dickinson Resume - Fall 2024.pdf",
    },
    {
      name: "email",
      url: "mailto:josh25dickinson@gmail.com",
    },
  ];

  return (
    <>
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 right-4 z-[201] p-2 bg-background-transparent-color rounded-md md:hidden"
      >
        {isMobileMenuOpen ? <X size={20} /> : <Share2 size={20} />}
      </button>
      <div className={`fixed top-0 right-0 md:p-3 lg:p-4 md:bg-background-transparent-color md:backdrop-blur-2xl rounded-bl-sm md:rounded-bl-lg z-[200] 
        ${isMobileMenuOpen ? 'w-screen h-screen bg-[var(--background)] py-16' : 'hidden'} md:block md:w-auto md:h-auto md:py-4`}>
        <div className={`flex ${isMobileMenuOpen ? 'flex-col items-center' : 'flex-row'} md:flex-row content-start justify-end gap-4 text-[12px] md:text-[14px]`}>
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.name}
              className="py-2 flex items-center hover:text-text-hover-color"
              target={link.url.startsWith("http") || link.url.startsWith("mailto:") ? "_blank" : undefined}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="underline">{link.name}</span>
              {linkarrowIcon()}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
