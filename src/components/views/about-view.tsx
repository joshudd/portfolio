import React from "react";
import { useView } from "@/contexts/view-context";

const AboutView = () => {
    const { setCurrentView } = useView();

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center text-text-about-color">
            {/* header */}
            <div className="mb-6 absolute top-[15vh] left-[10vw] p-2 md:p-3 lg:p-4 bg-background-transparent-color rounded-sm md:rounded-lg backdrop-blur-sm z-[200]">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-normal">
                    about
                </h1>
            </div>

            {/* back button */}
                        {/* about */}
                        {/* <div className={`absolute top-[38vh] left-[70vw] p-2 md:p-3 lg:p-4 bg-background-transparent-color rounded-sm md:rounded-lg backdrop-blur-sm z-[200]`}>
                <button className="flex items-center hover:text-text-hover-color" onClick={() => setCurrentView("ABOUT")}>
                    <h2 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal">
                        about
                    </h2>
                    {chatIcon()}
                </button>
            </div> */}
            <div className={`absolute top-[38vh] left-[70vw] p-2 md:p-3 lg:p-4 bg-background-transparent-color rounded-sm md:rounded-lg backdrop-blur-sm z-[200]`}>
                <button className="flex items-center hover:text-text-about-hover-color" onClick={() => setCurrentView("HOME")}>
                    <h2 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal underline">
                        back
                    </h2>
                </button>
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
