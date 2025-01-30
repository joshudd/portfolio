"use client";

import React from "react";
import Link from "next/link";

import TransitionChild from "@/components/transition/transition-child";
import { ProjectItem } from "@/components/projects/project-item";
import { projects, Project } from "@/data/projects";

function ProjectsContent({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const currentPage = Number(searchParams?.page ?? "1");

  const colorset = {
    text: "link",
    textHover: "",
    background: "bg-background-transparent",
    backgroundHover: "bg-background-transparent-hover",
  };

  const projectsPerPage = 6;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-8 relative">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto py-24 sm:py-48">
        <div className="flex items-center">
          <h1 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px]">
            projects &nbsp;
          </h1>
        </div>

        <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
          {currentProjects.map((project: Project) => (
            <ProjectItem
              key={project.name}
              project={project}
              colorset={colorset}
            />
          ))}
        </div>
        <div className="flex justify-center mt-6 sm:mt-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <Link
              key={index}
              href={`/projects?page=${index + 1}`}
              className={`mx-2 px-3 py-1 rounded-lg link hover-item ${
                currentPage === index + 1 ? "highlight-item" : ""
              }`}
            >
              {index + 1}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main>
      <TransitionChild id="projects">
        <ProjectsContent searchParams={searchParams} />
      </TransitionChild>
    </main>
  );
}
