"use client";

import React, { useState } from "react";
import Link from "next/link";
import { linkarrowIcon } from "../icons";
import { Project, projects } from "@/data/projects";

const ProjectDetailView = ({ project }: { project: Project }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const pageNumber =
    Math.floor(projects.findIndex((p) => p.link === project.link) / 6) + 1;

  if (!project) {
    console.log(project);
    return <div>Project not found</div>;
  }

  return (
    <div>
      <div className="w-full h-screen flex flex-col justify-center items-center text-text-projects-color">
        {/* back button */}
        <div
          className={`absolute top-[5vh] left-[5vw] p-2 md:p-3 lg:p-4 bg-background-transparent-color rounded-sm md:rounded-lg backdrop-blur-sm z-[200]`}
        >
          <Link
            href={`/projects?page=${pageNumber}`}
            className="flex items-center hover:text-text-projects-hover-color"
          >
            <h2 className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] underline">
              back
            </h2>
          </Link>
        </div>

        {/* body */}
        <div className="mt-6 top-[8vh] w-[80%] max-w-[700px] absolute p-4 sm:p-4 md:p-6 lg:p-8 bg-background-transparent-color rounded-lg backdrop-blur-sm z-[200]">
          <div className="flex items-center justify-between">
            <h1 className="text-[22px] sm:text-[24px] md:text-[26px] font-normal">
              {project.name}
            </h1>
          </div>
          <div className="mt-4 mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {project.images?.map((image, index) => (
              <button
                key={image}
                className="aspect-w-4 aspect-h-3 cursor-pointer p-0 border-0 bg-transparent w-full"
                onClick={() => setSelectedImage(image)}
                aria-label={`View larger image ${index + 1} of ${project.name}`}
              >
                <img
                  src={`/images/${image}`}
                  alt={project.name}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </button>
            ))}
          </div>
          <div className="text-[14px] sm:text-[16px] md:text-[18px] leading-[1.8]">
            {project.external_link && (
              <>
                <Link
                  href={project.external_link}
                  target="_blank"
                  className="ml-0 flex flex-nowrap hover:text-text-projects-hover-color items-center"
                >
                  {project.display_link} {linkarrowIcon()}
                </Link>
                <br />
              </>
            )}
          </div>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[1.8]">
            {project.description}
          </p>
          <br />
          <div className="flex flex-row content-start justify-end gap-x-2 md:gap-x-4 text-[14px] sm:text-[16px] md:text-[18px] leading-[1.8]">
            {project.tools?.map((tool, index) => (
              <div
                key={tool}
                className="bg-background-item-color pl-2 pr-2 rounded-lg"
              >
                <p className="">{tool}</p>
              </div>
            ))}
          </div>
        </div>

        {/* image modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[300]"
            onClick={() => setSelectedImage(null)}
          >
            <div className="w-[90vw] h-[90vh] flex items-center justify-center">
              <img
                src={`/images/${selectedImage}`}
                alt={project.name}
                className="max-w-full max-h-full w-auto h-auto object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailView;
