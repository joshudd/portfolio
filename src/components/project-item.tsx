import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion } from 'framer-motion';
import { Project } from "@/data/projects";

type ColorSet = {
    text: string | null;
    textHover: string | null;
    background: string | null;
    backgroundHover: string | null;
}

export const ProjectItem = ({ project, colorset }: { project: Project, colorset: ColorSet }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [animateUp, setAnimateUp] = useState(false);
    const itemRef = useRef<HTMLDivElement | null>(null);

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
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
        <Link href={`/projects/${project.link}`}>
            <motion.div
                key={project.name} 
                className={`pt-4 pb-4 gap-x-6 md:gap-x-12 lg:gap-x-18 flex items-center max-w-full ${colorset.text} ${colorset.background} hover:${colorset.textHover} hover:${colorset.backgroundHover}`} 
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
                    <span className="block truncate">{project.summary}</span>
                </div>
                <div className="flex-shrink-0 ml-auto hidden sm:block font-extrabold">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                </div>
            </motion.div>
        </Link>
    );
};