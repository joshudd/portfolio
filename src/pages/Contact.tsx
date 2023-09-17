import * as elements from "typed-html";
import { SOCIALS } from "../config";
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <div class="mt-48 text-3xl bg-lighterblack text-grey">
            <a name="contact" class="invisible block relative -top-64">contact anchor</a>
            <h2 class="mx-28 flex">
                <span class="my-16 text-4xl font-normal text-white">{'>'} contact</span>
            </h2>

            {/* <div class="mx-36 text-2xl text-grey">
                <p class="">
                    <span class="">Email: </span>
                    
                    <a href="" class="font-bold text-primary">josh25dickinson@gmail.com</a>
                </p>
            </div> */}

            <ul class="ml-16 mb-16 flex justify-center items-center text-white">
                {
                    SOCIALS.map((social) => (
                        <li class="mx-10 ">
                        <a class="" target="_blank" href={social.link} title={social.name}>
                            <img
                                class="m-6 transition-all hover:-translate-y-1"
                                src={`public/${social.icon}`}
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