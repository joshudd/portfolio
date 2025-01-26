"use client";

import Link from "next/link";
import { linkarrowIcon } from "./icons";

// shared header component for all pages
export default function SharedHeader() {
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
    <div className="fixed top-0 right-0 p-2 md:p-3 lg:p-4 bg-background-transparent-color rounded-bl-sm md:rounded-bl-lg backdrop-blur-sm z-[200]">
      <div className="flex flex-row content-start justify-end gap-x-2 md:gap-x-4 text-[10px] sm:text-[12px] md:text-[14px]">
        {links.map((link) => (
          <Link
            href={link.url}
            key={link.name}
            className="py-1 flex items-center hover:text-text-hover-color"
            target={
              link.url.startsWith("http") || link.url.startsWith("mailto:")
                ? "_blank"
                : undefined
            }
            rel={
              link.url.startsWith("http") ? "noopener noreferrer" : undefined
            }
          >
            <span className="underline">{link.name}</span>
            {linkarrowIcon()}
          </Link>
        ))}
      </div>
    </div>
  );
}
