"use client"

import React from "react";

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
            <div className="mt-6 mr-[200px] sm:mr-[260px] md:mr-[290px] lg:mr-[400px] xl:mr-[500px] absolute top-[22vh] left-[20vw] p-4 sm:p-4 md:p-6 lg:p-8 bg-background-transparent-color rounded-lg backdrop-blur-sm z-[200]">
                <p className="flex flex-col flex-wrap content-start gap-x-4 md:gap-x-8 text-[10px] sm:text-[12px] md:text-[14px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam repudiandae ab facere, fuga quibusdam expedita dolore quo accusamus beatae? Excepturi, officia fugiat aliquid hic nam, animi debitis veniam eligendi dolorum, accusantium qui distinctio nulla quasi natus cum commodi modi. Laborum optio, quisquam, tenetur suscipit veniam doloremque blanditiis perspiciatis, aspernatur corrupti voluptatum minus minima dolor cupiditate rem voluptate quasi? Esse minus, inventore vel, sunt delectus dolorum nemo, magnam quo veniam quidem itaque voluptas eius iure voluptatem libero a molestias ex sequi magni quasi repellendus commodi vitae. Sapiente, pariatur doloremque iste praesentium voluptatem, perspiciatis officiis animi neque id adipisci, quaerat molestiae provident.
                </p>
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
        </div>
    );
}

export default AboutView;
