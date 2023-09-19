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
        <div className="text-md md:text-2xl bg-lighterblack text-grey">
            <a id="about" className="invisible block relative -top-16">about anchor</a>
            <h2 className="py-8 md:py-16 px-10 md:px-28 flex text-xl md:text-4xl">
                <span className="text-white">{'>'} about</span>
            </h2>

            <div className="px-16 md:px-36 text-grey">
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
                <ul className="px-10 list-disc text-white">
                    <li>recommender systems</li>
                    <li>human-computer interaction and user experience</li>
                    <li>full-stack development</li>
                </ul>
                <br />
                <p className="">
                    I am eager to take on opportunities where I can learn, grow, and make a meaningful contribution. 
                </p>
                <br /><br />
                <p className="pl-4 md:pl-12">
                    Technologies I’ve worked with include
                </p>
                <br />
            </div>
            <div className="pt-4 md:pt-8 pb-12 px-4 md:px-28 flex justify-center">
                <ul className="text-lg md:text-3xl font-bold text-primary flex flex-wrap justify-center">
                    {
                        skillsData.map((skill) => (
                            <li key={skill.id} className="hover:text-white p-4 md:p-6">
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