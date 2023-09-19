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
        <div>
            <a id="title" className="invisible block relative -top-64">home anchor</a>
            <div className="flex justify-center mt-80 font-bold">
                <h1 className="text-6xl">
                    <span className="text-white">Hello, I&apos;m</span>
                    <span className="text-primary"> Josh</span>
                </h1>
            </div>
            <p className="mt-6 flex justify-center text-2xl text-grey">based in the Twin Cities</p>

            <ul className="mt-16 flex justify-center text-white">
                {
                    socialsData.map((social) => (
                        <li key={social.name} className="mr-4 ">
                        <a className="h-10 w-10" target="_blank" href={social.link} title={social.name}>
                            <Image
                                className="m-6 h-8 w-8 transition-all hover:-translate-y-1"
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