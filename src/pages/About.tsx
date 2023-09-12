import { html } from "@elysiajs/html";
import * as elements from "typed-html";

const About = () => {
    return (
        <div id="about" class="pt-10 h-screen justify-center">
            <h2>
                <span class="text-3xl font-bold text-black">about</span>
            </h2>
            <p class="text-xl pt-5">
                <span class="text-black">I'm an undergraduate student at the </span>
                <span class="font-bold text-primary">University of Minnesota</span>
                <span class="text-black">pursuing a Bachelor of Science degree in </span>
                <span class="font-bold text-blue-500">Computer Science</span>
                <span class="text-black">.</span>
            </p>
        </div>
    );
}

export default About;