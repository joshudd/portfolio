import Footer from "./Footer";
import { socialsData } from "./Title";
import Image from "next/image";

const Contact = () => {
    return (
        <div className="mt-48 text-3xl bg-lighterblack text-grey">
            <a id="contact" className="invisible block relative -top-64">contact anchor</a>
            <h2 className="mx-28 flex">
                <span className="my-16 text-4xl font-normal text-white">{'>'} contact</span>
            </h2>

            {/* <div class="mx-36 text-2xl text-grey">
                <p class="">
                    <span class="">Email: </span>
                    
                    <a href="" class="font-bold text-primary">josh25dickinson@gmail.com</a>
                </p>
            </div> */}

            <ul className="ml-16 mb-16 flex justify-center items-center text-white">
                {
                    socialsData.map((social) => (
                        <li key={social.name} className="mx-10 ">
                        <a className="" target="_blank" href={social.link} title={social.name}>
                            <Image
                                className="m-6 transition-all hover:-translate-y-1"
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