import * as elements from "typed-html";

function Header() {
    return (
      <div class="mb-128 fixed top-0 left-0 right-0 text-2xl bg-lighterblack text-grey flex flex-row justify-between">
        <div class="text-white ml-20 my-6 group flex ">

          <button class="align-middle font-semibold hover:text-white transition-all scale-0 group-hover:scale-100">
            🦆
          </button>
          <a href="#home" class="break-keep align-left font-bold hover:text-white transition-all hover:translate-x-1">
            &nbsp  Joshua Dickinson
          </a>
          
        </div>

        <div class="text-2xl ml-12 flex flex-row flex-nowrap items-center justify-between">
          <a href="#about" class="scroll-smooth mx-4 hover:text-white">
              About
          </a>
          <a href="#projects" class="mx-4 align-middle hover:text-white">
            Projects
          </a>
          <a href="#contact" class="mx-4 align-middle hover:text-white">
            Contact
          </a>
          <a href="public/resume.pdf" download="Resume - Joshua Dickinson - Fall 2023" class="mr-20 ml-4 align-middle hover:text-white">
            Resume
          </a>
          
        </div>
      </div>
    );
  }

export default Header;