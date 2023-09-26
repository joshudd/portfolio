import Image from "next/image";
type project = { name : string, link : string, tech : string, desc : string };

function ProjectCard({ name, link, tech, desc  }: project) {
    return (
      <div className="m-8 flex flex-1 md:min-w-min max-w-lg rounded-xl hover:outline-dashed align-middle bg-lighterblack text-grey text-sm md:text-xl">
        <a target="_blank" href={link}>
        <div className="p-10">
            <div className="mb-8 flex justify-between">
                <h3 className="text-white text-xl md:text-3xl mr-8 md:w-64">{name}</h3>
                <div className="flex justify-center items-center h-8 w-8">
                    <Image
                        className="m-4 md:m-6 h-6 md:h-8 w-6 md:w-8 hover:bg-lightblack"
                        height="32"
                        width="32"
                        src={`/github.png`}
                        alt={`${name} github link`}
                    />
                </div>
            </div>

            <text className="mt-8 flex flex-wrap">{desc}</text>
            <text className="mt-8 text-primary text-right flex justify-end font-bold">{tech}</text>

        </div>
        </a>
      </div>
    );
  }

export default ProjectCard;
