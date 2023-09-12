import { html } from "@elysiajs/html";
import * as elements from "typed-html";

function Header() {
    return (
      <div>
        <h1 class="text-5xl">
            <span class="text-black">Hello, I'm</span>
            <span class="text-blue-500">Josh</span>
        </h1>
        <p class="pt-5 text-2xl text-gray-500">based in the Twin Cities</p>
      </div>
    );
  }

export default Header;