import * as elements from "typed-html";
import { PROJECTS } from "../config";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    return (
        <div class="mt-28 mb-16 text-grey">
            <h2 class="text-3xl mx-28 mt-16 flex">
                <span class="my-16 text-4xl font-normal text-white">{'>'} projects</span>
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