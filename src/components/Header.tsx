const Header = () =>{
    return (
      <div className="mb-128 fixed top-0 left-0 right-0 text-2xl bg-lighterblack text-grey flex flex-row justify-between">
        <div className="text-white ml-20 my-6 group flex ">

          <button className="align-middle font-semibold hover:text-white transition-all scale-0 group-hover:scale-100">
            🦆
          </button>
          <a href="#title" className="break-keep align-left font-bold hover:text-white transition-all hover:translate-x-1">
           &nbsp;Joshua Dickinson
          </a>
          
        </div>

        <div className="text-2xl ml-12 flex flex-row flex-nowrap items-center justify-between">
          <a href="#about" className="scroll-smooth mx-4 hover:text-white">
              About
          </a>
          <a href="#projects" className="mx-4 align-middle hover:text-white">
            Projects
          </a>
          <a href="#contact" className="mx-4 align-middle hover:text-white">
            Contact
          </a>
          <a href="../resume.pdf" download="Resume - Joshua Dickinson - Fall 2023" className="mr-20 ml-4 align-middle hover:text-white">
            Resume
          </a>
          
        </div>
      </div>
    );
};

export default Header;