import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from '@elysiajs/static'
import * as elements from "typed-html";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const app = new Elysia()
  .use(html())
  .use(
    staticPlugin()
  )
  .get("/", ({ html }) => 
    html(
      <BaseHtml>
        <body
          class="bg-black"
        >
          <Header />
          <Home />
          <About />
          <Projects />
        </body>
      </BaseHtml>
    )
  )
  .get("/styles.css", () => Bun.file("./tailwind-gen/styles.css"))
  .listen(3000);

console.log(
`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)

const BaseHtml = ({ children }: elements.Children) => `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="utf-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Joshua Dickinson</title>
    <script src="https://unpkg.com/htmx.org@1.9.5" integrity="sha384-xcuj3WpfgjlKF+FXhSQFQ0ZNr39ln+hwjN3npfM9VBnUskLolQAcN80McRIVOPuO" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
    <link href="/styles.css" rel="stylesheet">
    <link rel="shortcut icon" href="/public/favicon.png">
  </head>
      
  ${children}
  `;