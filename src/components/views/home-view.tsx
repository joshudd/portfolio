import React from "react";
import Image from 'next/image';
import { linkarrowIcon, speakerIcon, cropIcon, chatIcon, documentIcon } from "@/components/icons";
import waveforms from '/public/waveforms.svg';

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
            url: "/resume.pdf",
        },
        {
            name: "email",
            url: "mailto:josh25dickinson@gmail.com",
        },
    ];

    const waveformsImage = () => {
        return (
            <div 
                className={`
                    absolute top-0 right-0
                    bottom-[24vh] left-[22vw] 
                    sm:bottom-[24vh] sm:left-[25vw] 
                    md:bottom-[23vh] md:left-[29vw] 
                    lg:bottom-[22vh] lg:left-[29vw] 
                    overflow-hidden z-[-10]
                `}
                style={{ opacity: 1 }}
            >
                <Image 
                    src={waveforms} 
                    alt="Waveforms" 
                    fill
                    style={{
                        objectFit: 'none',
                        objectPosition: 'bottom left',
                    }}
                />
            </div>
        );
    }

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            {/* header */}
            <div className="mb-6 absolute top-[15vh] left-[10vw] p-4 sm:p-4 md:p-6 lg:p-8 bg-background-transparent-color rounded-lg backdrop-blur-sm">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal">
                    hey there, i'm josh!
                </h1>
            </div>

            {/* links */}
            <div className="mt-6 mr-[500px] md:mr-0 absolute top-[22vh] left-[10vw] p-4 sm:p-4 md:p-6 lg:p-8 bg-background-transparent-color rounded-lg backdrop-blur-sm">
                <div className="flex flex-row flex-wrap content-start gap-x-4 md:gap-x-8 text-sm sm:text-base md:text-lg lg:text-xl">
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
            <div className={`absolute top-[55vh] left-[16vw] p-4 sm:p-4 md:p-6 lg:p-8 bg-background-transparent-color rounded-lg backdrop-blur-sm`}>
                <a href="#design" className="flex items-center hover:text-text-hover-color">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-normal">
                        design
                    </h2>
                    {cropIcon()}
                </a>
            </div>

            {/* projects */}
            <div className={`absolute top-[76vh] left-[28vw] p-4 sm:p-4 md:p-6 lg:p-8 bg-background-transparent-color rounded-lg backdrop-blur-sm`}>
                <a href="#projects" className="flex items-center hover:text-text-hover-color">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-normal">
                        projects
                    </h2>
                    {speakerIcon()}
                </a>
            </div>

            {/* experience */}
            <div className={`absolute top-[65vh] left-[60vw] p-4 sm:p-4 md:p-6 lg:p-8 bg-background-transparent-color rounded-lg backdrop-blur-sm`}>
                <a href="#experience" className="flex items-center hover:text-text-hover-color">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-normal">
                        experience
                    </h2>
                    {documentIcon()}
                </a>
            </div>

            {/* about */}
            <div className={`absolute top-[43vh] left-[70vw] p-4 sm:p-4 md:p-6 lg:p-8 bg-background-transparent-color rounded-lg backdrop-blur-sm`}>
                <a href="#about" className="flex items-center hover:text-text-hover-color">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-normal">
                        about
                    </h2>
                    {chatIcon()}
                </a>
            </div>

            {/* note */}
            <div className="absolute bottom-[0vh] p-4 sm:p-4 md:p-6 lg:p-8 bg-background-transparent-color rounded-lg backdrop-blur-sm">
                <h2 className="text-[12px]">
                    designed and built by me
                </h2>
            </div>

            {/* waveforms */}
            {waveformsImage()}
        </div>
    );
}

export default HomeView;
