import * as elements from "typed-html";
type project = { name : string, link : string, tech : string, desc : string };

function ProjectCard({ name, link, tech, desc  }: project) {
    return (
      <div class="m-10 max-w-lg hover:outline-dashed align-middle w-512 bg-lighterblack rounded-xl text-grey">
        <div class="m-10">
            <div class="mb-8 flex justify-between">
                <h3 class="text-white text-3xl">{name}</h3>

                <a class="flex justify-center items-center h-8 w-8" target="_blank" href={link} title={name}>
                    <img
                        class="m-6 h-8 w-8 hover:bg-lightblack"
                        src={`public/github.png`}
                        alt={`${name} github link`}
                    />
                </a>
            </div>

            <text class="mt-8 mr-16 text-2xl flex flex-wrap">{desc}</text>
            <text class="mt-8 text-2xl text-primary text-right flex justify-end align-bottom">{tech}</text>

        </div>
      </div>
    );
  }

export default ProjectCard;
