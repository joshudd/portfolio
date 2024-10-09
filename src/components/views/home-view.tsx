'use client';

import React, { useState } from "react";
import { linkarrowIcon, heartCardIcon, folderIcon, compassIcon } from "@/components/icons";
import Link from 'next/link';
import TransitionLink from '@/components/transition-link';

const HomeView = () => {
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

    const [isAboutHovered, setIsAboutHovered] = useState(false);
    const [isDesignHovered, setIsDesignHovered] = useState(false);
    const [isProjectsHovered, setIsProjectsHovered] = useState(false);

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center text-text-color">
            {/* header */}
            <div className="mb-6 absolute top-[15vh] left-[10vw] p-2 md:p-3 lg:p-4 bg-background-transparent-color rounded-sm md:rounded-lg backdrop-blur-sm z-[200]">
                <h1 className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[38px] font-normal">
                    hey there, i&apos;m josh!
                </h1>
            </div>

            {/* links */}
            <div className="fixed top-0 right-0 p-2 md:p-3 lg:p-4 bg-background-transparent-color rounded-bl-sm md:rounded-bl-lg backdrop-blur-sm z-[200]">
                <div className="flex flex-row content-start justify-end gap-x-2 md:gap-x-4 text-[10px] sm:text-[12px] md:text-[14px]">
                    {links.map((link) => (
                        <Link 
                            href={link.url} 
                            key={link.name} 
                            className="py-1 flex items-center hover:text-text-hover-color" 
                            target={link.url.startsWith('http') || link.url.startsWith('mailto:') ? "_blank" : undefined}
                            rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                        >
                            <span className="underline">{link.name}</span>
                            {linkarrowIcon()}
                        </Link>
                    ))}
                </div>
            </div>

            {/* page links */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {/* about */}
                <div className="absolute top-[40%] -translate-x-1/2 left-[calc(50%-7rem)] sm:left-[calc(50%-12rem)] md:left-[calc(50%-14rem)] lg:left-[calc(50%-16rem)] xl:left-[calc(50%-18rem)] z-[200] pointer-events-auto">
                    <TransitionLink 
                        href="/about" 
                        key="about"
                        className="flex flex-col items-center justify-center hover:text-text-hover-color group hover-trigger"
                        onMouseEnter={() => setIsAboutHovered(true)}
                        onMouseLeave={() => setIsAboutHovered(false)}
                    >
                        <div className={`transition-all duration-100 ${isAboutHovered ? 'animate-pop' : 'hidden-icon'}`}>
                            {heartCardIcon()}
                        </div>
                        <h2 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[32px] font-normal mt-5">
                            about
                        </h2>
                    </TransitionLink>
                </div>

                {/* design */}
                <div className="absolute top-[40%] -translate-x-1/2 left-[50%] z-[200] pointer-events-auto">
                    <TransitionLink 
                        href="/design" 
                        key="design"
                        className="flex flex-col items-center justify-center hover:text-text-hover-color group hover-trigger"
                        onMouseEnter={() => setIsDesignHovered(true)}
                        onMouseLeave={() => setIsDesignHovered(false)}
                    >
                        <div className={`transition-all duration-300 ${isDesignHovered ? 'animate-pop' : 'hidden-icon'}`}>
                            {compassIcon()}
                        </div>
                        <h2 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[32px] font-normal mt-5">
                            design
                        </h2>
                    </TransitionLink>
                </div>

                {/* projects */}
                <div className="absolute top-[40%] -translate-x-1/2 left-[calc(50%+7rem)] sm:left-[calc(50%+12rem)] md:left-[calc(50%+14rem)] lg:left-[calc(50%+16rem)] xl:left-[calc(50%+18rem)] z-[200] pointer-events-auto">
                    <TransitionLink 
                        href="/projects" 
                        key="projects"
                        className="flex flex-col items-center justify-center hover:text-text-hover-color group hover-trigger"
                        onMouseEnter={() => setIsProjectsHovered(true)}
                        onMouseLeave={() => setIsProjectsHovered(false)}
                    >
                        <div className={`transition-all duration-300 ${isProjectsHovered ? 'animate-pop' : 'hidden-icon'}`}>
                            {folderIcon()}
                        </div>
                        <h2 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[32px] font-normal mt-5">
                            projects
                        </h2>
                    </TransitionLink>
                </div>
            </div>

        </div>
    );
}

export default HomeView;
