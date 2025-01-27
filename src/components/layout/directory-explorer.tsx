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
  Code2,
  Gamepad2,
  Music4,
  Brush,
  Database,
  Globe,
  LayoutDashboard,
} from "lucide-react";
import { useState, useEffect } from "react";
import React from "react";
import { projects } from "@/data/projects";

// get icon based on project tools and type
const getProjectIcon = (tools: string[], name: string) => {
  // web apps and sites
  if (tools.includes("Nextjs") || tools.includes("React.js")) {
    return <Globe size={15} />
  }
  // design projects
  if (tools.includes("Figma") || tools.includes("User Research")) {
    return <Brush size={15} />
  }
  // games
  if (name.toLowerCase().includes("game") || name === "Sketch with Friends") {
    return <Gamepad2 size={15} />
  }
  // audio/music
  if (name === "honey" || tools.includes("JUCE")) {
    return <Music4 size={15} />
  }
  // data/backend focused
  if (tools.includes("Python") || tools.includes("SQLite") || tools.includes("Firebase")) {
    return <Database size={15} />
  }
  // default for other projects
  return <Code2 size={15} />
};

// project link component for directory
const ProjectLink = ({ name, link, isExpanded, isActive, tools }: { 
  name: string;
  link: string;
  isExpanded: boolean;
  isActive: boolean;
  tools: string[];
}) => (
  <Link
    href={`/projects/${link}`}
    className={`flex items-center rounded-md px-2 py-1.5 mb-0.5 directory-item opacity-80 hover:opacity-100
      ${isActive ? "active opacity-100" : ""}`}
  >
    <div className="w-5 flex items-center opacity-70">
      {getProjectIcon(tools, name)}
    </div>
    <span
      className={`ml-3 overflow-hidden transition-all duration-200 text-[12px] truncate ${
        isExpanded ? "opacity-100 w-[11rem]" : "w-0 opacity-0"
      } group-hover/sidebar:opacity-100 group-hover/sidebar:w-[11rem]`}
    >
      {name.toLowerCase()}
    </span>
  </Link>
);

export function DirectoryExplorer() {
  const { isHome, isAbout, isDesign, isProjects, currentProject } =
    useCurrentPath();
  const [isHomeOpen, setIsHomeOpen] = useState(true);
  const [isProjectsOpen, setIsProjectsOpen] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // mark component as mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // auto expand when mobile menu opens
  useEffect(() => {
    if (isMobileOpen) {
      setIsExpanded(true);
    }
  }, [isMobileOpen]);

  // close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // prevent flash of mobile menu on ssr
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className={`md:hidden fixed z-20 p-2 directory-sidebar rounded-md
          ${
            isMobileOpen ? "left-[230px] top-4" : "left-4 top-4"
          } transition-all duration-200`}
      >
        {isMobileOpen ? <X size={20} /> : <AlignLeft size={20} />}
      </button>
      <aside
        className={`fixed top-0 left-0 transition-all duration-200 directory-sidebar
          ${isExpanded || isMobileOpen ? "w-56" : "w-12"} 
          ${
            isMobileOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
          min-h-screen px-2 py-4 group/sidebar hover:w-56 z-10`}
        onMouseEnter={() => !isMobileOpen && setIsExpanded(true)}
        onMouseLeave={() => !isMobileOpen && setIsExpanded(false)}
      >
        <div className="text-[13px] font-mono">
          <div
            className={`mb-3 overflow-hidden whitespace-nowrap directory-item ${
              isExpanded ? "" : "opacity-0"
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
                  className={`group flex items-center rounded-md px-2 py-1 mb-1 directory-item
                    ${isHome ? "active" : ""}`}
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
                    className={`flex items-center rounded-md px-2 py-1 mb-1 directory-item
                      ${isAbout ? "active" : ""}`}
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
                    className={`flex items-center rounded-md px-2 py-1 mb-1 directory-item
                      ${isDesign ? "active" : ""}`}
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
                      className={`flex items-center rounded-md px-2 py-1 mb-1 directory-item
                        ${isProjects ? "active" : ""}`}
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
                      {projects.map((project) => (
                        <ProjectLink
                          key={project.link}
                          name={project.name}
                          link={project.link}
                          tools={project.tools}
                          isExpanded={isExpanded}
                          isActive={currentProject === project.link}
                        />
                      ))}
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
