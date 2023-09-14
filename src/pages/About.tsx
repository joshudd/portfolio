import { html } from "@elysiajs/html";
import * as elements from "typed-html";

const About = () => {
    return (
        <div class="mt-64 text-3xl bg-lighterblack text-grey">
            <h2 class="mx-28 mt-16 flex">
                <span class="my-16 text-4xl font-normal text-white">{'>'} about</span>
            </h2>

            <div class="mx-36 text-2xl bg-lighterblack text-grey">
                <p class="">
                    <span class="">I'm an undergraduate student at the </span>
                    <span class="font-bold text-primary">University of Minnesota</span>
                    <span class="">pursuing a Bachelor of Science degree in</span>
                    <span class="font-bold text-primary">Computer Science</span><span>.</span>
                </p>
                <br />
                <p class="">
                    Some of my interests:
                </p>
                <br />
                <ul class="mx-10 list-disc">
                    <li>human-computer interaction and user experience</li>
                    <li>recommender systems</li>
                    <li>full-stack development</li>
                </ul>
                <br />
                <p class="">
                    I am eager to take on opportunities where I can learn, grow, and make a meaningful contribution. 
                </p>
                <br /><br />
                <p class="">
                    Technologies I’ve worked with include
                </p>
                <br />
                
            </div>
            <div class="mb-16">
                <ul class="ml-20 mr-20 mb-16 text-3xl font-bold text-primary flex justify-between">
                        <li class="mr-12">JavaScript</li>  <li class="mr-12">ElysiaJS</li>  <li class="mr-12">React.js</li>  <li class="mr-12">GraphQL</li> <li class="mr-12">JUCE</li>  
                        <li class="mr-12">P5.js</li>  <li class="mr-12">Java</li>  <li class="mr-12">Python</li>  <li class="mr-12">CSS</li>  <li class="mr-12">HTML</li>
                </ul>
            </div>
        </div>
    );
}

export default About;