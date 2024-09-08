"use client"

import React, { useState, useRef } from "react";

import { linkarrowIcon } from "@/components/icons";

import { motion } from 'framer-motion';

interface Project {
    name: string;
    description: string;
    tools: string;
    link: string;
  }

const ProjectItem = ({ project, linkarrowIcon }: { project: Project, linkarrowIcon: () => React.ReactNode }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [animateUp, setAnimateUp] = useState(false);
    const itemRef = useRef<HTMLAnchorElement | null>(null);

    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (itemRef.current) {
            const rect = itemRef.current.getBoundingClientRect();
            const mouseY = e.clientY;
            setAnimateUp(mouseY > rect.top + rect.height / 2);
        }
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <motion.a 
            href={project.link} 
            key={project.name} 
            className="pt-4 pb-4 gap-x-6 md:gap-x-12 lg:gap-x-18 flex items-center justify-between w-[50vw] hover:text-text-projects-hover-color" 
            target="_blank"
            ref={itemRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ y: 0 }}
            animate={{ y: isHovered ? (animateUp ? -2 : 2) : 0 }}
            transition={{ duration: 0.2 }}
        >
            <div className="flex sm:min-w-[140px] md:min-w-[170px]">
                <span className="whitespace-nowrap overflow-hidden text-ellipsis">{project.name}</span>
            </div>
            <div className="flex-grow overflow-hidden">
                <span className="block truncate">{project.description}</span>
            </div>
            <div className="ml-auto hidden sm:block">
                {linkarrowIcon()}
            </div>
        </motion.a>
    );
};

const ProjectsView = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pagination = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };
    const projectsPerPage = 5;

    const projects = [
        {
            name: "honey",
            description: "audio VST3 plug-in",
            tools: "c++, JUCE, react.js",
            link: "https://github.com/joshudd/honey",
        },
        {
            name: "TransitPal",
            description: "web tool for tracking public transit usage",
            tools: "next.js, firebase, recharts, tailwind",
            link: "https://github.com/joshudd/project2",
        },
        {
            name: "Sketch with Friends",
            description: "online collaborative drawing game",
            tools: "c++, vst3, wwise",
            link: "https://github.com/joshudd/project3",
        },
        {
            name: "Date Engine",
            description: "Monday.com app",
            tools: "react.js, graph ql, Monday.com API",
            link: "https://github.com/joshudd/project4",
        },
        {
            name: "SodiumTrack",
            description: "nutrition tracking tool",
            tools: "python, sqlite",
            link: "https://github.com/joshudd/project5",
        },
        {
            name: "Gibberisher",
            description: "gibberish text generator",
            tools: "java",
            link: "https://github.com/joshudd/gibberisher",
        },
    ];

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center text-text-projects-color">
            {/* header */}
            <div className="mb-6 absolute top-[15vh] left-[10vw] p-2 md:p-3 lg:p-4 bg-background-transparent-color rounded-sm md:rounded-lg backdrop-blur-sm z-[200]">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-normal">
                    projects
                </h1>
            </div>

            {/* project list */}
            <div className="mt-6 mr-[500px] md:mr-0 absolute top-[22vh] left-[20vw] p-4 sm:p-4 md:p-6 lg:p-8 bg-background-transparent-color rounded-lg backdrop-blur-sm z-[200]">
                <div className="flex flex-col flex-wrap content-start gap-x-4 md:gap-x-8 text-[10px] sm:text-[12px] md:text-[14px]">
                    {currentProjects.map((project) => ( 
                        <ProjectItem key={project.name} project={project} linkarrowIcon={linkarrowIcon} /> 
                    ))}
                </div>
                <div className="flex justify-center mt-4">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button 
                            key={index} 
                            onClick={() => pagination(index + 1)} 
                            className={`mx-1 px-2 py-1 rounded ${currentPage === index + 1 ? 'bg-text-projects-color text-background-transparent-color' : 'bg-background-transparent-color text-text-projects-color'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>

            {/* back button */}
            <div className={`absolute top-[76vh] left-[28vw] p-2 md:p-3 lg:p-4 bg-background-transparent-color rounded-sm md:rounded-lg backdrop-blur-sm z-[200]`}>
                <a href="/" className="flex items-center hover:text-text-projects-hover-color">
                    <h2 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal underline">
                        back
                    </h2>
                </a>
            </div>

            {/* note */}
            <div className="absolute bottom-[0vh] p-2 md:p-3 lg:p-4 bg-background-transparent-color rounded-sm md:rounded-lg backdrop-blur-sm z-[200]">
                <h2 className="text-[10px]">
                    designed and built by me
                </h2>
            </div>
        </div>
    );
}

export default ProjectsView;
