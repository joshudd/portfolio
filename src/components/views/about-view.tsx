"use client"

import React from "react";
import Ripples from "../animation/ripples-animation";

const AboutView = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center text-text-about-color">
            {/* header */}
            <div className="mb-6 absolute top-[15vh] left-[10vw] p-2 md:p-3 lg:p-4 bg-background-transparent-color rounded-sm md:rounded-lg backdrop-blur-sm z-[200]">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-normal">
                    about
                </h1>
            </div>

            {/* body */}
            <div className="mt-6 w-[38%] sm:w-[43%] md:w-[48%] lg:w-[43%] xl:w-[38%] absolute top-[22vh] left-[20vw] p-4 sm:p-4 md:p-6 lg:p-8 bg-background-transparent-color rounded-lg backdrop-blur-sm z-[200]">
                <div className="flex items-center">
                    <h1 className="text-lg sm:text-xl md:text-2xl font-normal">
                        nice to meet you! &nbsp;
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="inline-block flex-shrink-0 ml-1 mr-1">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                    </svg>
                </div>
                <br/>
                <p className="text-[10px] sm:text-[12px] md:text-[14px] leading-[1.8]">
                    I'm from the North metro area of MN and currently studying Computer Science + User Experience Design at the
                    <span className=""> University of Minnesota</span>.
                </p>
                <br/>
                <p className="text-[10px] sm:text-[12px] md:text-[14px] leading-[1.8]"> 
                    At the moment, I'm developing internal tools at
                    <a href="https://www.spscommerce.com/" target="_blank" className="text-text-about-color hover:text-text-about-hover-color"> SPS Commerce </a> 
                    as a software engineer intern
                    <span className="text-[8px] sm:text-[10px] md:text-[12px] align-super">
                    &nbsp;{'{'} extended through the end of 2024 {'}'}
                    </span>.
                </p>
                <p className="text-[10px] sm:text-[12px] md:text-[14px] leading-[1.8]">

                </p>
                <br/>
                <p className="flex flex-col flex-wrap content-start gap-x-4 md:gap-x-8 text-[10px] sm:text-[12px] md:text-[14px] leading-[1.8]">
                    <span className="inline-flex items-center">
                        I'm passionate about building tools that are both beautiful + functional;
                        one of its greatest rewards is constant learning.
                    </span>
                </p>

                {/* <a href="/projects" className="flex items-center align-middle">
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <p className="text-[10px] sm:text-[12px] md:text-[14px] leading-[1.8] italic underline hover:text-text-about-hover-color">
                        projects
                    </p>
                </a> */}
                <br/>
                <p className="flex flex-col flex-wrap content-start gap-x-4 md:gap-x-8 text-[10px] sm:text-[12px] md:text-[14px] leading-[1.8]">
                    Feel free to reach out if you'd like to chat!
                </p>
                <br/>
                <div className="flex items-end align-left">
                    <p className="flex flex-col flex-wrap content-start gap-x-4 md:gap-x-8 text-[10px] sm:text-[12px] md:text-[14px] leading-[1.8] italic">
                     - Josh
                    </p>
                    {/* <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="flex-shrink-0 mr-1">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>
                            <p className="text-[10px] sm:text-[12px] md:text-[14px] leading-[1.8]">
                                Twin Cities, MN
                            </p>
                    </div> */}
                </div>
            </div>

            {/* back button */}
            <div className={`absolute top-[28vh] left-[68vw] p-2 md:p-3 lg:p-4 bg-background-transparent-color rounded-sm md:rounded-lg backdrop-blur-sm z-[200]`}>
                <a href="/" className="flex items-center hover:text-text-about-hover-color">
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

            <div className="blur-sm">
                <Ripples view="about" />
            </div>
        </div>
    );
}

export default AboutView;