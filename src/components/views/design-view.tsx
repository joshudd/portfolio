"use client"

import React from "react";
import useSound from 'use-sound';
import { Project, projects } from "@/data/projects";
import { ProjectItem } from "@/components/project-item";
import { playIcon, stopIcon } from "@/components/icons";
const DesignView = () => {
    const designProjectNames = ["runstencil", "honey", "sisterscamelot"];
    const designProjects: Project[] = projects.filter(project => designProjectNames.includes(project.link));
    const colorset = {
        text: "text-text-design-color",
        textHover: "text-text-design-hover-color",
        background: "bg-background-transparent-color",
        backgroundHover: "bg-background-transparent-color-hover",
    };

    const audioFiles = [
        {
            name: "see.mp3",
            src: "/audio/see.mp3",
        },
        {
            name: "back home.mp3",
            src: "/audio/back home.mp3",
        },
        {
            name: "especial for wax kit.mp3",
            src: "/audio/especial for wax kit.mp3",
        },
        {
            name: "care for you.mp3",
            src: "/audio/care for you.mp3",
        },
    ];

    const [playSee, { stop: stopSee }] = useSound(audioFiles[0].src, { volume: 0.25 });
    const [playBackHome, { stop: stopBackHome }] = useSound(audioFiles[1].src, { volume: 0.25 });
    const [playEspecialForWaxKit, { stop: stopEspecialForWaxKit }] = useSound(audioFiles[2].src, { volume: 0.25 });
    const [playCareForYou, { stop: stopCareForYou }] = useSound(audioFiles[3].src, { volume: 0.25 });

    const [currentlyPlaying, setCurrentlyPlaying] = React.useState<number | null>(null);

    const playAudio = (index: number) => {
        stopAllSounds();
        setCurrentlyPlaying(index);
        switch (index) {
            case 0: playSee(); break;
            case 1: playBackHome(); break;
            case 2: playEspecialForWaxKit(); break;
            case 3: playCareForYou(); break;
        }
    };

    const stopAudio = () => {
        stopAllSounds();
        setCurrentlyPlaying(null);
    };

    const stopAllSounds = () => {
        stopSee(); stopBackHome(); stopEspecialForWaxKit(); stopCareForYou();
    }

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center text-text-design-color">
            {/* back button */}
            <div className={`absolute top-[5vh] left-[5vw] p-2 md:p-3 lg:p-4 bg-background-transparent-color rounded-sm md:rounded-lg backdrop-blur-sm z-[200]`}>
                <a href="/" className="flex items-center hover:text-text-design-hover-color">
                    <h2 className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] underline">
                        back
                    </h2>
                </a>
            </div>

            {/* title */}
            <div className={`absolute top-[5vh] left-[85vw] p-2 md:p-3 lg:p-4 bg-background-transparent-color rounded-sm md:rounded-lg backdrop-blur-sm z-[200]`}>
                <h1 className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
                    design
                </h1>
            </div>

            {/* body */}
            <div className="mt-6 w-[80%] max-w-[700px] absolute top-[10vh] p-4 sm:p-4 md:p-6 lg:p-8 bg-background-transparent-color rounded-lg backdrop-blur-sm z-[200]">
                <div className="flex items-center mb-3">
                    <h1 className="text-[20px] sm:text-[22px] md:text-[24px] font-normal">
                        visual &nbsp;
                    </h1>
                </div>
                <p className="text-[12px] sm:text-[14px] md:text-[16px] leading-[1.8]">
                    Before building out my own projects, I like to have a strong vision for its look + feel.
                    A lot of my early process is spent in <a href="https://www.figma.com/" target="_blank" className="text-text-design-color hover:text-text-design-hover-color italic">Figma</a>, iterating on layouts.
                    I also have experience with user research + testing, and have a strong understanding of design principles. 
                </p>
                <br/>
                <p className="content-start gap-x-4 md:gap-x-8 text-[12px] sm:text-[14px] md:text-[16px] leading-[1.8]">
                    Some examples of my visual design work can be found here + more on the <a href="/projects" className="text-text-design-color hover:text-text-design-hover-color underline">projects</a> page.
                </p>

                <div className="flex flex-col flex-wrap content-start gap-x-4 md:gap-x-8 text-[12px] sm:text-[14px] md:text-[16px] p-5 mb-8">
                    {designProjects.map((project: Project) => (
                        <ProjectItem key={project.name} project={project} colorset={colorset} />
                    ))}
                </div>

                <div className="flex items-center mb-3">
                    <h1 className="text-[20px] sm:text-[22px] md:text-[24px] font-normal">
                        sound &nbsp;
                    </h1>
                </div>
                <p className="flex flex-col flex-wrap content-start text-[12px] sm:text-[14px] md:text-[16px] leading-[1.8]">
                    Aside from visual design, I love to experiment with sound design.
                </p>
                <div className="mt-3 w-full overflow-x-auto scrollbar-hide transparent-scrollbar">
                    <div className="flex flex-row flex-nowrap justify-center gap-x-3 min-w-max">
                        {audioFiles.map((audioFile, index) => (
                        <div key={index} className="inline-flex items-center justify-between mb-3 gap-x-4 pl-4 pr-4 py-2 rounded-md bg-background-design-color">
                            <h3 className="text-[12px] sm:text-[14px] md:text-[16px] font-normal whitespace-nowrap">
                                {audioFile.name}
                            </h3>
                            <button onClick={() => currentlyPlaying === index ? stopAudio() : playAudio(index)}>
                                {currentlyPlaying === index ? stopIcon() : playIcon()}
                            </button>
                        </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* note */}
            <div className="hidden lg:block fixed bottom-0 left-0 right-0 p-2 md:p-3 lg:p-4 bg-background-transparent-color rounded-sm md:rounded-lg backdrop-blur-sm z-[200]">
                <h2 className="text-[10px] text-center">
                    designed and built by me
                </h2>
            </div>
        </div>
    );
}

export default DesignView;
