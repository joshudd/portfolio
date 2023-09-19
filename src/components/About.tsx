const skillsData = [
    {
      id: 1,
      name: "nextjs",
    },
    {
      id: 2,
      name: "react",
    },
    {
      id: 3,
      name: "tailwindCSS",
    },
    {
      id: 4,
      name: "typescript",
    },
    {
      id: 5,
      name: "graphQL",
    },
    {
      id: 6,
      name: "java",
    },
    {
      id: 7,
      name: "python",
    },
    {
      id: 8,
      name: "git",
    },
    {
      id: 9,
      name: "ocaml",
    },
    {
      id: 10,
      name: "bunjs",
    },
    {
      id: 11,
      name: "elysiajs",
    },
    {
      id: 12,
      name: "juce",
    },
    {
      id: 13,
      name: "p5.js",
    },
  ] satisfies {
    id: number;
    name: string;
  }[];

const About = () => {
    return (
        <div className="mt-64 text-3xl bg-lighterblack text-grey">
            <a id="about" className="invisible block relative -top-16">about anchor</a>
            <h2 className="mx-28 flex">
                <span className="my-16 text-4xl font-normal text-white">{'>'} about</span>
            </h2>

            <div className="mx-36 text-2xl bg-lighterblack text-grey">
                <p className="">
                    <span className="">I&apos;m an undergraduate student at the </span>
                    <span className="font-bold text-primary">University of Minnesota </span>
                    <span className="">pursuing a Bachelor of Science degree in </span>
                    <span className="font-bold text-primary">Computer Science.</span>
                </p>
                <br />
                <p className="">
                    Some of my interests:
                </p>
                <br />
                <ul className="mx-10 list-disc text-white">
                    <li>recommender systems</li>
                    <li>human-computer interaction and user experience</li>
                    <li>full-stack development</li>
                </ul>
                <br />
                <p className="">
                    I am eager to take on opportunities where I can learn, grow, and make a meaningful contribution. 
                </p>
                <br /><br />
                <p className="ml-12">
                    Technologies I’ve worked with include
                </p>
                <br />
            </div>
            <div className="mx-28 flex justify-center">
                <ul className="mt-8 mb-12 text-3xl font-bold text-primary flex flex-wrap justify-center">
                    {
                        skillsData.map((skill) => (
                            <li key={skill.id} className="hover:text-white m-6">
                                {skill.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default About;