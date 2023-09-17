import * as elements from "typed-html";
type project = { name : string, link : string, tech : string, desc : string };

function ProjectCard({ name, link, tech, desc  }: project) {
    return (
      <div class="m-10 flex flex-1 min-w-[400] max-w-lg hover:outline-dashed align-middle w-[400] bg-lighterblack rounded-xl text-grey">
        <a target="_blank" href={link}>
        <div class="m-10">
            <div class="mb-8 flex justify-between">
                <h3 class="text-white text-3xl mr-8">{name}</h3>

                {/* <a class="flex justify-center items-center h-8 w-8" target="_blank" href={link} title={name}> */}
                <div class="flex justify-center items-center h-8 w-8">
                    <img
                        class="m-6 h-8 w-8 hover:bg-lightblack"
                        src={`public/github.png`}
                        alt={`${name} github link`}
                    />
                </div>
            </div>

            <text class="mt-8 mr-16 text-2xl flex flex-wrap">{desc}</text>
            <text class="mt-8 text-2xl text-primary text-right flex justify-end">{tech}</text>

        </div>
        </a>
      </div>
    );
  }

export default ProjectCard;
