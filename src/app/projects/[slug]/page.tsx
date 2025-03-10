"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import TransitionChild from "@/components/transition/transition-child";
import { Project, projects } from "@/data/projects";
import { linkarrowIcon } from "@/components/ui/icons";

const ProjectDetailContent = ({ project }: { project: Project }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    console.log(project);
    return <div>Project not found</div>;
  }

  return (
    <div>
      <div className="min-h-screen px-4 sm:px-6 md:px-8 relative">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto pt-24 sm:pt-48">
          <div className="flex items-center">
            <h1 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px]">
              {project.name}
            </h1>
          </div>
          <div className="mt-4 mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {project.images?.map((image, index) => (
              <button
                key={image}
                className="aspect-w-4 aspect-h-3 cursor-pointer p-0 border-0 bg-transparent w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px]"
                onClick={() => setSelectedImage(image)}
                aria-label={`View larger image ${index + 1} of ${project.name}`}
              >
                <Image
                  src={`/images/${image}`}
                  alt={project.name}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                  width={300}
                  height={225}
                />
              </button>
            ))}
          </div>
          <div className="text-[14px] sm:text-[16px] leading-[1.8]">
            {project.external_link && (
              <>
                <Link
                  href={project.external_link}
                  target="_blank"
                  className="ml-0 flex flex-nowrap link items-center"
                >
                  {project.display_link} {linkarrowIcon()}
                </Link>
                <br />
              </>
            )}
          </div>
          <p className="text-[14px] sm:text-[16px] leading-[1.8]">
            {project.description}
          </p>
          <br />
          <div className="flex flex-wrap content-start justify-end gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4 text-[14px] sm:text-[16px] leading-[1.8]">
            {project.tools?.map((tool, index) => (
              <div
                key={tool}
                className="highlight-item pl-2 pr-2 rounded-lg whitespace-nowrap"
              >
                <p>{tool.toLowerCase()}</p>
              </div>
            ))}
          </div>
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 modal-overlay flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <div className="w-[90vw] h-[90vh] flex items-center justify-center">
              <Image
                src={`/images/${selectedImage}`}
                alt={project.name}
                className="max-w-full max-h-full w-auto h-auto object-contain"
                width={1200}
                height={800}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.link === params.slug);

  if (!project) {
    notFound();
  }
  return (
    <main>
      <TransitionChild id="projects">
        <ProjectDetailContent project={project} />
      </TransitionChild>
    </main>
  );
}
