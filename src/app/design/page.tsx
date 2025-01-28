"use client";

import React from "react";
import Link from "next/link";
import useSound from "use-sound";

import { Project, projects } from "@/data/projects";
import { playIcon, stopIcon } from "@/components/ui/icons";
import { ProjectItem } from "@/components/projects/project-item";
import TransitionChild from "@/components/transition/transition-child";

function DesignContent() {
  const designProjectNames = ["runstencil", "honey", "sisterscamelot"];
  const designProjects: Project[] = projects.filter((project) =>
    designProjectNames.includes(project.link)
  );
  const colorset = {
    text: "link",
    textHover: "",
    background: "bg-background-transparent",
    backgroundHover: "bg-background-transparent-hover",
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

  const [playSee, { stop: stopSee }] = useSound(audioFiles[0].src, {
    volume: 0.25,
  });
  const [playBackHome, { stop: stopBackHome }] = useSound(audioFiles[1].src, {
    volume: 0.25,
  });
  const [playEspecialForWaxKit, { stop: stopEspecialForWaxKit }] = useSound(
    audioFiles[2].src,
    { volume: 0.25 }
  );
  const [playCareForYou, { stop: stopCareForYou }] = useSound(
    audioFiles[3].src,
    { volume: 0.25 }
  );

  const [currentlyPlaying, setCurrentlyPlaying] = React.useState<number | null>(
    null
  );

  const playAudio = (index: number) => {
    stopAllSounds();
    setCurrentlyPlaying(index);
    switch (index) {
      case 0:
        playSee();
        break;
      case 1:
        playBackHome();
        break;
      case 2:
        playEspecialForWaxKit();
        break;
      case 3:
        playCareForYou();
        break;
    }
  };

  const stopAudio = () => {
    stopAllSounds();
    setCurrentlyPlaying(null);
  };

  const stopAllSounds = () => {
    stopSee();
    stopBackHome();
    stopEspecialForWaxKit();
    stopCareForYou();
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-8 relative">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto pt-24 sm:pt-48">
        <div className="flex items-center">
          <h1 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px]">
            visual &nbsp;
          </h1>
        </div>
        <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-[14px] sm:text-[16px] leading-[1.8]">
          <p>
            Before building out my own projects, I like to have a strong vision
            for its look + feel. A lot of my early process is spent in{" "}
            <Link
              href="https://www.figma.com/"
              target="_blank"
              className="link italic"
            >
              Figma
            </Link>
            , iterating on layouts. I also have experience with user research +
            testing, and have a strong understanding of design principles.
          </p>

          <p>
            Some examples of my visual design work can be found here + more on
            the{" "}
            <Link href="/projects" className="link underline">
              projects
            </Link>{" "}
            page.
          </p>
        </div>

        <div className="flex flex-col p-3 sm:p-5 mb-12">
          {designProjects.map((project: Project) => (
            <ProjectItem
              key={project.name}
              project={project}
              colorset={colorset}
            />
          ))}
        </div>

        <div className="flex items-center mb-3">
          <h1 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px]">
            sound &nbsp;
          </h1>
        </div>
        <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-[14px] sm:text-[16px] leading-[1.8]">
          <p>
            Aside from visual design, I love to experiment with sound design.
          </p>
          <div className="mt-3 w-full overflow-x-auto scrollbar-hide transparent-scrollbar">
            <div className="flex flex-col sm:flex-row flex-nowrap justify-center gap-3 min-w-max">
              {audioFiles.map((audioFile, index) => (
                <div
                  key={audioFile.name}
                  className="inline-flex items-center justify-between mb-2 sm:mb-3 gap-x-4 pl-4 pr-4 py-2 rounded-md bg-background-item"
                >
                  <h3 className="font-normal whitespace-nowrap">
                    {audioFile.name}
                  </h3>
                  <button
                    onClick={() =>
                      currentlyPlaying === index
                        ? stopAudio()
                        : playAudio(index)
                    }
                    className="flex items-center justify-center"
                  >
                    {currentlyPlaying === index ? stopIcon() : playIcon()}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Design() {
  return (
    <main>
      <TransitionChild id="design">
        <DesignContent />
      </TransitionChild>
    </main>
  );
}
