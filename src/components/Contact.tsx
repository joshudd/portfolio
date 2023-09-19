import Footer from "./Footer";
import { socialsData } from "./Title";
import Image from "next/image";

const Contact = () => {
    return (
        <div className="bg-lighterblack text-grey">
            <a id="contact" className="invisible block relative -top-64">contact anchor</a>
            <h2 className="py-8 md:py-16 px-10 md:px-28 flex text-xl md:text-4xl">
                <span className="text-white">{'>'} contact</span>
            </h2>

            <ul className="pb-12 flex justify-center items-center text-white">
                {
                    socialsData.map((social) => (
                        <li key={social.name} className="">
                        <a className="" target="_blank" href={social.link} title={social.name}>
                            <Image
                                className="m-4 md:m-16 h-6 md:h-8 w-6 md:w-8 transition-all hover:-translate-y-1"
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

            <Footer />
        </div>
    );
}

export default Contact;