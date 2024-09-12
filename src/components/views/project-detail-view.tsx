"use client"

import React, { useState } from "react";
import { linkarrowIcon } from "../icons";
import { Project } from "@/data/projects";

const ProjectDetailView = ({ project }: { project: Project }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    if (!project) {
        console.log(project)
        return <div>Project not found</div>;
    }
    return (
        <div>
            <div className="w-full h-screen flex flex-col justify-center items-center text-text-projects-color">

                {/* back button */}
                <div className={`absolute top-[5vh] left-[5vw] p-2 md:p-3 lg:p-4 bg-background-transparent-color rounded-sm md:rounded-lg backdrop-blur-sm z-[200]`}>
                    <a href="/projects" className="flex items-center hover:text-text-projects-hover-color">
                        <h2 className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] underline">
                            back
                        </h2>
                    </a>
                </div>

                {/* body */}
                <div className="mt-6 top-[8vh] w-[80%] max-w-[700px] absolute p-4 sm:p-4 md:p-6 lg:p-8 bg-background-transparent-color rounded-lg backdrop-blur-sm z-[200]">
                    <div className="flex items-center justify-between">
                        <h1 className="text-lg sm:text-xl md:text-2xl font-normal">
                            {project.name}
                        </h1>
                    </div>
                    <div className="mt-4 mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {project.images && project.images.map((image, index) => (
                            <div key={index} className="aspect-w-4 aspect-h-3 cursor-pointer" onClick={() => setSelectedImage(image)}>
                                <img
                                    src={`/images/${image}`}
                                    alt={`${project.name} project image`}
                                    className="w-full h-full object-cover rounded-lg shadow-md"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="text-[8px] sm:text-[10px] md:text-[12px] leading-[1.8]">
                        {project.external_link && 
                            <>
                                <a href={project.external_link} target="_blank" className="ml-0 flex flex-nowrap hover:text-text-projects-hover-color items-center">
                                    {project.display_link} {linkarrowIcon()}
                                </a>
                                <br />
                            </>
                        }
                    </div>
                    <p className="text-[10px] sm:text-[12px] md:text-[14px] leading-[1.8]">
                        {project.description}
                    </p>
                    <br />
                    <div className="flex flex-row content-start justify-end gap-x-2 md:gap-x-4 text-[10px] sm:text-[12px] md:text-[14px] leading-[1.8]">
                        {project.tools && project.tools.map((tool, index) => 
                            <div key={index} className="bg-background-item-color pl-2 pr-2 rounded-lg">
                                <p className="">
                                    {tool}
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Image Modal */}
                {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[300]" onClick={() => setSelectedImage(null)}>
                        <div className="max-w-[90%] max-h-[90%]">
                            <img
                                src={`/images/${selectedImage}`}
                                alt="Expanded project image"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectDetailView;