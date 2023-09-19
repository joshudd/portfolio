import Image from "next/image";
export const socialsData = [
    {
      name: "GitHub",
      link: "https://github.com/joshudd",
      icon: "github.png",
    },
    {
      name: "Email",
      link: "mailto: josh25dickinson@gmail.com",
      icon: "email.png",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/joshuadickinson111/",
      icon: "linkedin.png",
    },
] satisfies {
    name: string;
    link: string;
    icon: string;
}[];

const Title = () => {
    return (
        <div className="bg-black pt-32 md:pt-72 pb-24 md:pb-64">
            <a id="title" className="invisible block relative -top-64">home anchor</a>
            <div className="flex justify-center font-bold">
                <h1 className="text-2xl md:text-6xl">
                    <span className="text-white">Hello, I&apos;m</span>
                    <span className="text-primary"> Josh</span>
                </h1>
            </div>
            <p className="pt-6 flex justify-center text-sm md:text-2xl text-grey">based in the Twin Cities</p>

            <ul className="pt-12 md:pt-16 flex justify-center text-white">
                {
                    socialsData.map((social) => (
                        <li key={social.name} className="mr-4 ">
                        <a className="h-10 w-10" target="_blank" href={social.link} title={social.name}>
                            <Image
                                className="m-4 md:m-6 h-6 md:h-8 w-6 md:w-8 transition-all hover:-translate-y-1"
                                height="32"
                                width="32"
                                src={`/${social.icon}`}
                                alt={`${social.name} icon`}
                            />
                        </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Title;