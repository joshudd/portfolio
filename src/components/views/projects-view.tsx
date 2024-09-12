"use client"

import React, { useState } from "react";
import Link from "next/link";
import { ProjectItem } from "@/components/project-item";
import { projects, Project } from "@/data/projects";

const ProjectsView = () => {
    const colorset = {
        text: "text-text-projects-color",
        textHover: "text-text-projects-hover-color",
        background: "bg-background-transparent-color",
        backgroundHover: "bg-background-transparent-color-hover",
    };

    const [currentPage, setCurrentPage] = useState(1);
    const pagination = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };
    const projectsPerPage = 6;

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center text-text-projects-color">
            {/* back button */}
            <div className={`absolute top-[5vh] left-[5vw] p-2 md:p-3 lg:p-4 bg-background-transparent-color rounded-sm md:rounded-lg backdrop-blur-sm z-[200]`}>
                <a href="/" className="flex items-center hover:text-text-projects-hover-color">
                    <h2 className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] underline">
                        back
                    </h2>
                </a>
            </div>

            {/* title */}
            <div className={`absolute top-[5vh] left-[84vw] p-2 md:p-3 lg:p-4 bg-background-transparent-color rounded-sm md:rounded-lg backdrop-blur-sm z-[200]`}>
                <h1 className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
                    projects
                </h1>
            </div>

            {/* project list */}
            <div className="mt-6 w-[80%] max-w-[700px] absolute top-[20vh] bg-background-transparent-color rounded-lg backdrop-blur-sm z-[200] flex flex-col justify-between" style={{ minHeight: '40vh' }}>
                <div className="flex flex-col flex-wrap gap-x-4 md:gap-x-8 text-[10px] sm:text-[12px] md:text-[14px]">
                    {currentProjects.map((project: Project) => (
                        <ProjectItem key={project.name} project={project} colorset={colorset} /> 
                    ))}
                </div>
                <div className="flex justify-center mt-4 pb-4">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button 
                            key={index} 
                            onClick={() => pagination(index + 1)} 
                            className={`mx-1 px-2 py-1 rounded-lg hover:text-text-projects-hover-color ${currentPage === index + 1 ? 'bg-background-projects-hover-color opacity-10' : ''}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectsView;
