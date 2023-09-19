import ProjectCard from "./ProjectCard";

const projectsData = [
    {
    name: "Hall Plotter",
    link: "https://github.com/doggu/gophergrades",
    tech: "JavaScript",
    desc: "Mapping out a user's day-to-day schedule from Schedule Builder to a map to provide insight on what their commute between/around campuses will look like.",
    },
    {
    name: "Date Engine",
    link: "https://github.com/joshudd/date-engine",
    tech: "React.js, GraphQL",
    desc: "A Monday.com app that adds functionality to date columns in boards.",
    },
    {
    name: "Gibberisher",
    link: "https://github.com/joshudd/gibberisher",
    tech: "Java",
    desc: "A trie-based model that generates pronounceable gibberish.",
    },
    {
    name: "SodiumTrack",
    link: "https://github.com/joshudd/sodiumtrack",
    tech: "Python",
    desc: "A nutrition tracker that implements user accounts and food recommendations based on criteria.",
    },
] satisfies {
    name: string;
    link: string;
    tech?: string;
    desc: string;
    }[];

const Projects = () => {
    return (
        <div className="pb-16 text-grey">
            <a id="projects" className="invisible block relative -top-32">projects anchor</a>
            <h2 className="pt-8 md:pt-16 px-10 md:px-28 flex text-xl md:text-4xl">
                <span className="text-white">{'>'} projects</span>
            </h2>

            <div className="py-4 px-8 md:px-36 flex justify-between">
                <ul className="flex flex-wrap">
                    {
                        projectsData.map((project) => (
                            <ProjectCard key={project.name} {...project} />
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Projects;