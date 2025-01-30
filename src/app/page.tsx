"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";

import TransitionChild from "@/components/transition/transition-child";
import { useTheme } from "@/context/theme-context";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-[20px] h-[20px]" />; // placeholder with same dimensions
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2.5 rounded-lg theme-toggle transition-all duration-200 ease-in-out"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon size={20} strokeWidth={1.5} aria-hidden="true" />
      ) : (
        <Sun size={20} strokeWidth={1.5} aria-hidden="true" />
      )}
    </button>
  );
}

const navItems = [
  {
    title: "about",
    href: "/about",
    shortcut: "s",
  },
  {
    title: "design",
    href: "/design",
    shortcut: "d",
  },
  {
    title: "projects",
    href: "/projects",
    shortcut: "f",
  },
];

function HomeContent() {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-8 relative">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto py-24 sm:py-48">
        <div className="flex items-center justify-between">
          <h1 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px]">
            hey there, i&apos;m josh!
          </h1>
          <ThemeToggle />
        </div>
        <nav className="mt-6 sm:mt-8 flex gap-6 sm:gap-8">
          {navItems.map((item) => (
            <div key={item.title} className="flex items-baseline">
              <Link
                href={item.href}
                className="text-base sm:text-lg nav-link transition-colors"
              >
                {item.title}
              </Link>
              <span className="hidden sm:inline-flex text-xs font-bold items-center justify-center rounded px-1.5 py-0.5 ml-2 bg-[var(--foreground)] !text-[var(--background)] nav-shortcut">
                {item.shortcut}
              </span>
            </div>
          ))}
        </nav>
        <div className="w-full h-[1px] bg-[var(--foreground)] opacity-10 my-6 sm:my-8" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <TransitionChild id="home">
        <HomeContent />
      </TransitionChild>
    </main>
  );
}
