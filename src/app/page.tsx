"use client";

import React from "react";
import Link from "next/link";
import TransitionChild from "@/components/transition/transition-child";

function HomeContent() {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-8 relative">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-md lg:max-w-md mx-auto pt-24 sm:pt-48">
        <h1 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px]">
          hey there, i&apos;m josh!
        </h1>
        <nav className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
          <Link href="/about" className="block text-base sm:text-lg hover:text-gray-400 transition-colors">
            about <span className="text-xs sm:text-sm text-gray-500 ml-2">[s]</span>
          </Link>
          <Link href="/design" className="block text-base sm:text-lg hover:text-gray-400 transition-colors">
            design <span className="text-xs sm:text-sm text-gray-500 ml-2">[d]</span>
          </Link>
          <Link href="/projects" className="block text-base sm:text-lg hover:text-gray-400 transition-colors">
            projects <span className="text-xs sm:text-sm text-gray-500 ml-2">[f]</span>
          </Link>
        </nav>
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
