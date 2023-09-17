import { html } from "@elysiajs/html";
import * as elements from "typed-html";
import { SKILLS } from "../config";

const About = () => {
    return (
        <div id="about" class="mt-64 text-3xl bg-lighterblack text-grey">
            <a name="about" class="invisible block relative -top-64">about anchor</a>
            <h2 class="mx-28 flex">
                <span class="my-16 text-4xl font-normal text-white">{'>'} about</span>
            </h2>

            <div class="mx-36 text-2xl bg-lighterblack text-grey">
                <p class="">
                    <span class="">I'm an undergraduate student at the </span>
                    <span class="font-bold text-primary">University of Minnesota</span>
                    <span class="">pursuing a Bachelor of Science degree in</span>
                    <span class="font-bold text-primary">Computer Science.</span>
                </p>
                <br />
                <p class="">
                    Some of my interests:
                </p>
                <br />
                <ul class="mx-10 list-disc text-white">
                    <li>recommender systems</li>
                    <li>human-computer interaction and user experience</li>
                    <li>full-stack development</li>
                </ul>
                <br />
                <p class="">
                    I am eager to take on opportunities where I can learn, grow, and make a meaningful contribution. 
                </p>
                <br /><br />
                <p class="ml-12">
                    Technologies I’ve worked with include
                </p>
                <br />
            </div>
            <div class="mx-28 flex justify-center">
                <ul class="mt-8 mb-12 text-3xl font-bold text-primary flex flex-wrap justify-center">
                    {
                        SKILLS.map((skill) => (
                            <li class="hover:text-white m-6">
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