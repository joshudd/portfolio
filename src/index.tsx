import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";

const app = new Elysia()
  .use(html())
  .get("/", ({ html }) => 
    html(
      <BaseHTML>
        <HeaderHTML />
        <AboutHTML />
      </BaseHTML>
    )
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server.hostname}:${app.server.port}`
  )
  
const BaseHTML = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://unpkg.com/htmx.org@1.9.5" integrity="sha384-xcuj3WpfgjlKF+FXhSQFQ0ZNr39ln+hwjN3npfM9VBnUskLolQAcN80McRIVOPuO" crossorigin="anonymous"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="src/styles.css" rel="stylesheet">
  </head>
  <div class="container mx-auto">
    <body>
      ${children}
    </body>
  </div>
  `;

const HeaderHTML = ({ children }: elements.Children) => `
    <div id="header" class="pt-10 font-bold">
      <h1 class="text-5xl">
        <span class="text-black">Hello, I'm</span>
        <span class="text-blue-500">Josh</span>
      </h1>
      <p class="pt-5 text-2xl text-gray-500">based in the Twin Cities</p>
    </div>
    `
// theres a comma coming from somewhere but can't find it
const AboutHTML = ({ children }: elements.Children) => `
    <div id="about" class="pt-10 h-screen justify-center">
      <h2>
        <span class="text-3xl font-bold text-black">> about</span>
      </h2>
      <p class="text-xl pt-5">
        <span class="text-black">I'm an undergraduate student at the </span>
        <span class="font-bold text-primary">University of Minnesota</span>
        <span class="text-black">pursuing a Bachelor of Science degree in </span>
        <span class="font-bold text-blue-500">Computer Science</span>
        <span class="text-black">.</span>
    </div>
    `