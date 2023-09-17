import * as elements from "typed-html";
import { PROJECTS } from "../config";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    return (
        <div class="mt-20 mb-16 text-grey">
            <a name="projects" class="invisible block relative -top-32">projects anchor</a>
            <h2 class="text-3xl mx-28 flex">
                <span class="text-4xl font-normal text-white">{'>'} projects</span>
            </h2>

            <div class="mx-36 flex justify-between">
                <ul class="mt-8 mb-12 flex flex-wrap content-start">
                    {
                        PROJECTS.map((project) => (
                            <ProjectCard {...project} />
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Projects;