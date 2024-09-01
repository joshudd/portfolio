import React, { useRef, useState, useEffect } from "react";
import { useView } from "@/contexts/view-context";

import { linkarrowIcon, speakerIcon, cropIcon, chatIcon, documentIcon } from "@/components/icons";
import AnimatedBackground from "@/components/speaker-animation";

const HomeView = () => {
    const { setCurrentView } = useView();
    const speakerRef = useRef<HTMLDivElement>(null);
    const [parentPosition, setParentPosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      if (speakerRef.current) {
        const rect = speakerRef.current.getBoundingClientRect();
        setParentPosition({ x: rect.left, y: rect.top });
      }
    }, []);

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
            url: "/resume.pdf",
        },
        {
            name: "email",
            url: "mailto:josh25dickinson@gmail.com",
        },
    ];

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center text-text-color">
            {/* header */}
            <div className="mb-6 absolute top-[15vh] left-[10vw] p-2 md:p-3 lg:p-4 bg-background-transparent-color rounded-sm md:rounded-lg backdrop-blur-sm z-[200]">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-normal">
                    hey there, i&apos;m josh!
                </h1>
            </div>

            {/* links */}
            <div className="mt-6 mr-[500px] md:mr-0 absolute top-[22vh] left-[10vw] p-2 md:p-3 lg:p-4 bg-background-transparent-color rounded-sm md:rounded-lg backdrop-blur-sm z-[200]">
                <div className="flex flex-row flex-wrap content-start gap-x-4 md:gap-x-8 text-[14px] sm:text-[16px] md:text-[18px]">
                    {links.map((link) => (
                        <a 
                            href={link.url} 
                            key={link.name} 
                            className="pt-2 pb-2 flex items-center hover:text-text-hover-color" 
                            target="_blank"
                        >
                            <span className="underline">{link.name}</span>
                            {linkarrowIcon()}
                        </a>
                    ))}
                </div>
            </div>

            {/* design */}
            <div className={`absolute top-[55vh] left-[16vw] p-2 md:p-3 lg:p-4 bg-background-transparent-color rounded-sm md:rounded-lg backdrop-blur-sm z-[200]`}>
                <button className="flex items-center hover:text-text-hover-color" onClick={() => setCurrentView("DESIGN")}>
                    <h2 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal">
                        design
                    </h2>
                    {cropIcon()}
                </button>
            </div>

            {/* projects */}
            <div 
                className={`absolute top-[76vh] left-[28vw] p-2 md:p-3 lg:p-4 bg-background-transparent-color rounded-sm md:rounded-lg backdrop-blur-sm z-[200]`}
            >
                <button className="flex items-center hover:text-text-hover-color" onClick={() => setCurrentView("PROJECTS")}>
                    <h2 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal">
                        projects
                    </h2>
                    <div 
                        ref={speakerRef}
                        className="relative"
                    > 
                        {speakerIcon()}
                    </div>
                </button>
            </div>

            {/* experience */}
            <div className={`absolute top-[65vh] left-[60vw] p-2 md:p-3 lg:p-4 bg-background-transparent-color rounded-sm md:rounded-lg backdrop-blur-sm z-[200]`}>
                <button className="flex items-center hover:text-text-hover-color" onClick={() => setCurrentView("EXPERIENCE")}>
                    <h2 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal">
                        experience
                    </h2>
                    {documentIcon()}
                </button>
            </div>

            {/* about */}
            <div className={`absolute top-[43vh] left-[70vw] p-2 md:p-3 lg:p-4 bg-background-transparent-color rounded-sm md:rounded-lg backdrop-blur-sm z-[200]`}>
                <button className="flex items-center hover:text-text-hover-color" onClick={() => setCurrentView("ABOUT")}>
                    <h2 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal">
                        about
                    </h2>
                    {chatIcon()}
                </button>
            </div>

            {/* note */}
            <div className="absolute bottom-[0vh] p-2 md:p-3 lg:p-4 bg-background-transparent-color rounded-sm md:rounded-lg backdrop-blur-sm z-[200]">
                <h2 className="text-[10px]">
                    designed and built by me
                </h2>
            </div>

            {/* waveforms */}
            {/* {waveformsImage()} */}
            <AnimatedBackground parentPosition={parentPosition} />
        </div>
    );
}

export default HomeView;
