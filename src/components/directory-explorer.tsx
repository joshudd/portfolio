"use client";

import Link from "next/link";
import { useCurrentPath } from "@/hooks/useCurrentPath";
import {
  Home,
  User2,
  Palette,
  FolderKanban,
  FileText,
  ChevronRight,
  AlignLeft,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import React from "react";

export function DirectoryExplorer() {
  const { isHome, isAbout, isDesign, isProjects, currentProject } =
    useCurrentPath();
  const [isHomeOpen, setIsHomeOpen] = useState(true);
  const [isProjectsOpen, setIsProjectsOpen] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // auto expand when mobile menu opens
  useEffect(() => {
    if (isMobileOpen) {
      setIsExpanded(true);
    }
  }, [isMobileOpen]);

  // close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <button 
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className={`md:hidden fixed z-20 p-2 bg-background-transparent-color/70 backdrop-blur-md rounded-md
          ${isMobileOpen ? "left-[200px] top-4" : "left-4 top-4"} transition-all duration-200`}
      >
        {isMobileOpen ? <X size={20} /> : <AlignLeft size={20} />}
      </button>
      <aside
        className={`fixed top-0 left-0 transition-all duration-200 
          ${isExpanded || isMobileOpen ? "w-48" : "w-12"} 
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          min-h-screen bg-background-transparent-color/70 backdrop-blur-md border-zinc-300/30 px-2 py-4 group/sidebar hover:w-48 z-10`}
        onMouseEnter={() => !isMobileOpen && setIsExpanded(true)}
        onMouseLeave={() => !isMobileOpen && setIsExpanded(false)}
      >
        <div className="text-[13px] font-mono">
          <div
            className={`mb-2 opacity-70 overflow-hidden whitespace-nowrap ${
              isExpanded ? "opacity-70" : "opacity-0"
            } group-hover/sidebar:opacity-70`}
          >
            EXPLORER
          </div>
          <div>
            {/* home section */}
            <div>
              <div className="relative">
                <Link
                  href="/"
                  className={`group flex items-center rounded-md px-2 py-1 mb-1 ${
                    isHome ? "bg-zinc-800/30" : ""
                  } opacity-70 hover:opacity-100 hover:bg-zinc-700/20`}
                >
                  <div className="w-5 relative flex items-center">
                    <Home
                      size={16}
                      className={`${
                        isExpanded ? "opacity-0" : "opacity-100"
                      } group-hover/sidebar:opacity-0`}
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsHomeOpen(!isHomeOpen);
                      }}
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity ${
                        isExpanded ? "opacity-100" : ""
                      } group-hover/sidebar:opacity-100 flex items-center justify-center`}
                    >
                      <ChevronRight
                        size={16}
                        className={`transform transition-transform ${
                          isHomeOpen ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                  </div>
                  <span
                    className={`ml-3 overflow-hidden transition-all duration-200 ${
                      isExpanded ? "opacity-100 w-auto" : "w-0 opacity-0"
                    } group-hover/sidebar:opacity-100 group-hover/sidebar:w-auto`}
                  >
                    home
                  </span>
                </Link>
              </div>

              {/* home content */}
              {isHomeOpen && (
                <div
                  className={`${
                    isExpanded ? "ml-2" : ""
                  } group-hover/sidebar:ml-2`}
                >
                  <Link
                    href="/about"
                    className={`flex items-center rounded-md px-2 py-1 mb-1 ${
                      isAbout ? "bg-zinc-800/30" : ""
                    } opacity-70 hover:opacity-100 hover:bg-zinc-700/20`}
                  >
                    <div className="w-5 flex items-center">
                      <User2 size={16} />
                    </div>
                    <span
                      className={`ml-3 overflow-hidden transition-all duration-200 ${
                        isExpanded ? "opacity-100 w-auto" : "w-0 opacity-0"
                      } group-hover/sidebar:opacity-100 group-hover/sidebar:w-auto`}
                    >
                      about
                    </span>
                  </Link>
                  <Link
                    href="/design"
                    className={`flex items-center rounded-md px-2 py-1 mb-1 ${
                      isDesign ? "bg-zinc-800/30" : ""
                    } opacity-70 hover:opacity-100 hover:bg-zinc-700/20`}
                  >
                    <div className="w-5 flex items-center">
                      <Palette size={16} />
                    </div>
                    <span
                      className={`ml-3 overflow-hidden transition-all duration-200 ${
                        isExpanded ? "opacity-100 w-auto" : "w-0 opacity-0"
                      } group-hover/sidebar:opacity-100 group-hover/sidebar:w-auto`}
                    >
                      design
                    </span>
                  </Link>

                  {/* projects section */}
                  <div className="relative">
                    <Link
                      href="/projects"
                      className={`flex items-center rounded-md px-2 py-1 mb-1 ${
                        isProjects ? "bg-zinc-800/30" : ""
                      } opacity-70 hover:opacity-100 hover:bg-zinc-700/20`}
                    >
                      <div className="w-5 relative flex items-center">
                        <FolderKanban
                          size={16}
                          className={`${
                            isExpanded ? "opacity-0" : "opacity-100"
                          } group-hover/sidebar:opacity-0`}
                        />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsProjectsOpen(!isProjectsOpen);
                          }}
                          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity ${
                            isExpanded ? "opacity-100" : ""
                          } group-hover/sidebar:opacity-100 flex items-center justify-center`}
                        >
                          <ChevronRight
                            size={16}
                            className={`transform transition-transform ${
                              isProjectsOpen ? "rotate-90" : ""
                            }`}
                          />
                        </button>
                      </div>
                      <span
                        className={`ml-3 overflow-hidden transition-all duration-200 ${
                          isExpanded ? "opacity-100 w-auto" : "w-0 opacity-0"
                        } group-hover/sidebar:opacity-100 group-hover/sidebar:w-auto`}
                      >
                        projects
                      </span>
                    </Link>
                  </div>

                  {/* projects content */}
                  {isProjectsOpen && (
                    <div
                      className={`${
                        isExpanded ? "ml-2" : ""
                      } group-hover/sidebar:ml-2`}
                    >
                      <Link
                        href="/projects/transitpal"
                        className={`flex items-center rounded-md px-2 py-1 mb-1 ${
                          currentProject === "transitpal" ? "bg-zinc-800/30" : ""
                        } opacity-70 hover:opacity-100 hover:bg-zinc-700/20`}
                      >
                        <div className="w-5 flex items-center">
                          <FileText size={16} />
                        </div>
                        <span
                          className={`ml-3 overflow-hidden transition-all duration-200 ${
                            isExpanded ? "opacity-100 w-auto" : "w-0 opacity-0"
                          } group-hover/sidebar:opacity-100 group-hover/sidebar:w-auto`}
                        >
                          transitpal
                        </span>
                      </Link>
                      <Link
                        href="/projects/hallplotter"
                        className={`flex items-center rounded-md px-2 py-1 ${
                          currentProject === "hallplotter" ? "bg-zinc-800/30" : ""
                        } opacity-70 hover:opacity-100 hover:bg-zinc-700/20`}
                      >
                        <div className="w-5 flex items-center">
                          <FileText size={16} />
                        </div>
                        <span
                          className={`ml-3 overflow-hidden transition-all duration-200 ${
                            isExpanded ? "opacity-100 w-auto" : "w-0 opacity-0"
                          } group-hover/sidebar:opacity-100 group-hover/sidebar:w-auto`}
                        >
                          hallplotter
                        </span>
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
