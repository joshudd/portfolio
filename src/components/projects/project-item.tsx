import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { ChevronRight } from "lucide-react";

type ColorSet = {
  text: string | null;
  textHover: string | null;
  background: string | null;
  backgroundHover: string | null;
};

export const ProjectItem = ({
  project,
  colorset,
}: {
  project: Project;
  colorset: ColorSet;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [animateUp, setAnimateUp] = useState(false);
  const itemRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (itemRef.current) {
      const rect = itemRef.current.getBoundingClientRect();
      const mouseY = e.clientY;
      setAnimateUp(mouseY > rect.top + rect.height / 2);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link href={`/projects/${project.link}`}>
      <motion.div
        key={project.name}
        className={`pt-4 pb-4 gap-x-6 md:gap-x-12 lg:gap-x-18 flex items-center max-w-full text-[14px] sm:text-[16px] ${colorset.text} ${colorset.background} hover:${colorset.textHover} hover:${colorset.backgroundHover}`}
        ref={itemRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{ y: 0 }}
        animate={{ y: isHovered ? (animateUp ? -2 : 2) : 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-[120px] md:w-[140px] shrink-0">
          <span className="block whitespace-nowrap overflow-hidden text-ellipsis">
            {project.name}
          </span>
        </div>
        <div className="flex-1 min-w-0 px-6">
          <span className="truncate block">{project.summary}</span>
        </div>
        <div className="shrink-0">
          <ChevronRight size={18} />
        </div>
      </motion.div>
    </Link>
  );
};
