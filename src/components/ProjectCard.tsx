import Image from "next/image";
type project = { name : string, link : string, tech : string, desc : string };

function ProjectCard({ name, link, tech, desc  }: project) {
    return (
      <div className="m-10 flex flex-1 min-w-min max-w-lg hover:outline-dashed align-middle bg-lighterblack rounded-xl text-grey">
        <a target="_blank" href={link}>
        <div className="m-10">
            <div className="mb-8 flex justify-between">
                <h3 className="text-white text-3xl mr-8 w-64">{name}</h3>
                <div className="flex justify-center items-center h-8 w-8">
                    <Image
                        className="m-6 h-8 w-8 hover:bg-lightblack"
                        height="32"
                        width="32"
                        src={`/github.png`}
                        alt={`${name} github link`}
                    />
                </div>
            </div>

            <text className="mt-8 mr-16 text-2xl flex flex-wrap">{desc}</text>
            <text className="mt-8 text-2xl text-primary text-right flex justify-end font-bold">{tech}</text>

        </div>
        </a>
      </div>
    );
  }

export default ProjectCard;
