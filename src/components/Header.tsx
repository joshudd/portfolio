const Header = () =>{
    return (
      <div className="fixed top-0 left-0 right-0 bg-lighterblack text-grey text-md md:text-2xl mx-auto md:flex flex-row justify-between">
        <div className="ml-10 text-white py-6 group flex justify-center scale-0 md:scale-100">

          <button className="align-middle font-semibold hover:text-white transition-all md:scale-0 group-hover:scale-100">
            🦆&nbsp;
          </button>
          <a href="#title" className="align-left font-bold hover:text-white transition-all hover:translate-x-1">
            Joshua Dickinson
          </a>
          
        </div>

        <div className="pb-6 -mt-10 md:mt-6 flex flex-row flex-nowrap items-center justify-center">
          <a href="#about" className="scroll-smooth mx-4 hover:text-white">
              About
          </a>
          <a href="#projects" className="mx-4 align-middle hover:text-white">
            Projects
          </a>
          <a href="#contact" className="mx-4 align-middle hover:text-white">
            Contact
          </a>
          <a href="../resume.pdf" download="Resume - Joshua Dickinson - Fall 2023" className="mx-4 md:mr-16 align-middle hover:text-white">
            Resume
          </a>
          
        </div>
      </div>
    );
};

export default Header;