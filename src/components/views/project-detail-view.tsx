import React from "react";
import { linkarrowIcon } from "../icons";

const ProjectDetailView = ({ title, description, tools, image, link, display_link }: { title: string, description: string, tools: string[], image: string, link: string, display_link: string}) => (
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
            <div className="mt-6 w-[38%] sm:w-[43%] md:w-[48%] lg:w-[43%] xl:w-[38%] absolute top-[12vh] left-[20vw] p-4 sm:p-4 md:p-6 lg:p-8 bg-background-transparent-color rounded-lg backdrop-blur-sm z-[200]">
                <div className="flex items-center justify-between">
                    <h1 className="text-lg sm:text-xl md:text-2xl font-normal">
                        {title}
                    </h1>
                </div>
                <br />
                <div className="mb-4">
                    <img
                        src={`/images/${image}`}
                        alt={`${title} project image`}
                        className="w-full h-auto rounded-lg shadow-md" />
                </div>
                <div className="text-[8px] sm:text-[10px] md:text-[12px] leading-[1.8]">
                    {link!="" && <a href={link} target="_blank" className="ml-2 flex flex-nowrap hover:text-text-projects-hover-color">{display_link} {linkarrowIcon()}</a>}
                </div>
                <br />
                <p className="text-[10px] sm:text-[12px] md:text-[14px] leading-[1.8]">
                    {description}
                </p>
                <br />
                <div className="flex flex-row content-start justify-end gap-x-2 md:gap-x-4 text-[10px] sm:text-[12px] md:text-[14px] leading-[1.8]">
                    {tools && tools.map((tool) => <div className="bg-background-item-color pl-2 pr-2 rounded-lg">
                        <p className="">
                            {tool}
                        </p>
                    </div>
                    )}
                </div>
            </div>

            {/* note */}
            <div className="absolute bottom-[0vh] p-2 md:p-3 lg:p-4 bg-background-transparent-color rounded-sm md:rounded-lg backdrop-blur-sm z-[200]">
                <h2 className="text-[10px]">
                    designed and built by me
                </h2>
            </div>
        </div>
    </div>
);

export default ProjectDetailView;