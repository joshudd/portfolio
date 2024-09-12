'use client';

import React, { useState } from "react";
import { linkarrowIcon } from "@/components/icons";
import Ripples from "@/components/animation/ripples-animation";

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
                <h1 className="text-xl sm:text-2xl md:text-3xl font-normal">
                    hey there, i&apos;m josh!
                </h1>
            </div>

            {/* links */}
            <div className="fixed top-0 right-0 p-2 md:p-3 lg:p-4 bg-background-transparent-color rounded-bl-sm md:rounded-bl-lg backdrop-blur-sm z-[200]">
                <div className="flex flex-row content-start justify-end gap-x-2 md:gap-x-4 text-[10px] sm:text-[12px] md:text-[14px]">
                    {links.map((link) => (
                        <a 
                            href={link.url} 
                            key={link.name} 
                            className="py-1 flex items-center hover:text-text-hover-color" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="underline">{link.name}</span>
                            {linkarrowIcon()}
                        </a>
                    ))}
                </div>
            </div>

            {/* page links */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {/* about */}
                <div className="absolute top-[40%] -translate-x-1/2 left-[calc(50%-7rem)] sm:left-[calc(50%-12rem)] md:left-[calc(50%-14rem)] lg:left-[calc(50%-16rem)] xl:left-[calc(50%-18rem)] z-[200] pointer-events-auto">
                    <a 
                        href="/about" 
                        className="flex flex-col items-center justify-center hover:text-text-hover-color"
                        onMouseEnter={() => setIsAboutHovered(true)}
                        onMouseLeave={() => setIsAboutHovered(false)}
                    >
                        <div className="blur-sm w-24 h-24">
                            {isAboutHovered && (<div className="fade-in"><Ripples view="home"/></div>)}
                        </div>
                        <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-normal mt-5">
                            about
                        </h2>
                    </a>
                </div>

                {/* design */}
                <div className="absolute top-[40%] -translate-x-1/2 left-[50%] z-[200] pointer-events-auto">
                    <a 
                        href="/design" 
                        className="flex flex-col items-center justify-center hover:text-text-hover-color"
                        onMouseEnter={() => setIsDesignHovered(true)}
                        onMouseLeave={() => setIsDesignHovered(false)}
                    >
                        <div className="blur-sm w-24 h-24">
                            {isDesignHovered && (<div className="fade-in"><Ripples view="home"/></div>)}
                        </div>
                        <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-normal mt-5">
                            design
                        </h2>
                    </a>
                </div>

                {/* projects */}
                <div className="absolute top-[40%] -translate-x-1/2 left-[calc(50%+7rem)] sm:left-[calc(50%+12rem)] md:left-[calc(50%+14rem)] lg:left-[calc(50%+16rem)] xl:left-[calc(50%+18rem)] z-[200] pointer-events-auto">
                    <a 
                        href="/projects" 
                        className="flex flex-col items-center justify-center hover:text-text-hover-color"
                        onMouseEnter={() => setIsProjectsHovered(true)}
                        onMouseLeave={() => setIsProjectsHovered(false)}
                    >
                        <div className="blur-sm w-24 h-24">
                            {isProjectsHovered && (<div className="fade-in"><Ripples view="home"/></div>)}
                        </div>
                        <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-normal mt-5">
                            projects
                        </h2>
                    </a>
                </div>
            </div>

            {/* experience */}
            {/* <div className={`hidden absolute top-[50%] p-2 md:p-3 lg:p-4 bg-background-transparent-color rounded-sm md:rounded-lg backdrop-blur-sm z-[200]`}>
                <a href="/experience" className="flex items-center hover:text-text-hover-color">
                    <h2 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-normal">
                        experience
                    </h2>
                </a>
            </div> */}


            {/* note */}
            <div className="hidden lg:block fixed bottom-0 left-0 right-0 p-2 md:p-3 lg:p-4 bg-background-transparent-color rounded-sm md:rounded-lg backdrop-blur-sm z-[200]">
                <h2 className="text-[10px] text-center">
                    designed and built by me
                </h2>
            </div>


        </div>
    );
}

export default HomeView;
