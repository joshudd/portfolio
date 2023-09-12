import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";

const app = new Elysia()
  .use(html())
  .get("/", ({ html }) => 
    html(
      <BaseHtml>
        <body
          class="bg-gray-300"
          hx-get="/todos"
          hx-swap="innerHTML"
          hx-trigger="load"
        />
        <Header />
        <About />
      </BaseHtml>
    )
  )
  .listen(3000);

console.log(
`🦊 Elysia is running at ${app.server.hostname}:${app.server.port}`
)

const BaseHtml = ({ children }: elements.Children) => `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="utf-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Joshua Dickinson</title>
    <script src="https://unpkg.com/htmx.org@1.9.5" integrity="sha384-xcuj3WpfgjlKF+FXhSQFQ0ZNr39ln+hwjN3npfM9VBnUskLolQAcN80McRIVOPuO" crossorigin="anonymous"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="src/styles.css" rel="stylesheet">
  </head>
      
  ${children}
  `;