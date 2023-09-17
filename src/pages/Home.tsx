import * as elements from "typed-html";
import { SOCIALS } from "../config";

const Home = () => {
    return (
        <div id="" class="">
            <a name="home" class="invisible block relative -top-64">home anchor</a>
            <div class="flex justify-center mt-80 font-bold">
                <h1 class="text-6xl">
                    <span class="text-white">Hello, I'm</span>
                    <span class="text-primary">Josh</span>
                </h1>
            </div>
            <p class="mt-6 flex justify-center text-2xl text-grey">based in the Twin Cities</p>

            <ul class="mt-16 flex justify-center text-white">
                {
                    SOCIALS.map((social) => (
                        <li class="mr-4 ">
                        <a class="h-10 w-10" target="_blank" href={social.link} title={social.name}>
                            <img
                                class="m-6 h-8 w-8 transition-all hover:-translate-y-1"
                                src={`public/${social.icon}`}
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

export default Home;