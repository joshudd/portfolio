import * as elements from "typed-html";

function Header() {
    return (
      <div class="text-2xl bg-lighterblack text-grey flex flex-row justify-between flex-nowrap">
        <div class="text-white ml-20 my-6 group flex ">

          <button class="align-middle font-semibold hover:text-white transition-all scale-0 group-hover:scale-100">
            🦆
          </button>
          <button class="break-keep align-left font-bold hover:text-white transition-all hover:translate-x-1">
            &nbsp  Joshua Dickinson
          </button>
          
        </div>

        <div class="text-2xl ml-12 flex flex-row flex-nowrap justify-between">
          <button class="mx-4 align-middle hover:text-white">
            About
          </button>
          <button class="mx-4 align-middle hover:text-white">
            Projects
          </button>
          <button class="mx-4 align-middle hover:text-white">
            Contact
          </button>
          <button class="mr-20 ml-4 align-middle hover:text-white">
            Resume
          </button>
          
        </div>
      </div>
    );
  }

export default Header;