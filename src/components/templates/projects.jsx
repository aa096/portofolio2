import { useState, useEffect, useRef } from "react";
import AnyCartInfo from "./AnyCartInfo";
import NobleOakInfo from "./NobleOakInfo";
import HolidazeInfo from "./HolidazeInfo";
import About from "./about";
import Technologies from "./technologies";

function ProjectsTemplate() {
  const [activeLink, setActiveLink] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const projectsRef = useRef(null);
  const technologiesRef = useRef(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const handleScrollToSection = (ref, link) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setActiveLink(link);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (technologiesRef.current && window.scrollY >= technologiesRef.current.offsetTop - 50) {
        setActiveLink("technologies");
      } else if (projectsRef.current && window.scrollY >= projectsRef.current.offsetTop - 50) {
        setActiveLink("projects");
      } else {
        setActiveLink("about");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center bg-primary md:bg-fixed md:bg-cover bg-contain bg-no-repeat bg-portfolio2 md:bg-portfolio lg:p-5 text-primary">
      <nav className="sticky top-0 w-full bg-primary p-5 z-50 flex justify-between items-center">
  {/* Desktop meny */}
  <div className="hidden lg:flex mx-auto gap-10 uppercase font-semibold">
    <a
      href="#about"
      onClick={() => handleLinkClick("about")}
      className={`text-white text-xl hover:text-secondary ${activeLink === "about" ? "border-b-2 border-white" : ""}`}
    >
      About
    </a>
    <a
      href="#projects"
      onClick={(e) => {
        e.preventDefault();
        handleScrollToSection(projectsRef, "projects");
      }}
      className={`text-white text-xl hover:text-secondary ${activeLink === "projects" ? "border-b-2 border-white" : ""}`}
    >
      My Projects
    </a>
    <a
      href="#technologies"
      onClick={(e) => {
        e.preventDefault();
        handleScrollToSection(technologiesRef, "technologies");
      }}
      className={`text-white text-xl hover:text-secondary ${activeLink === "technologies" ? "border-b-2 border-white" : ""}`}
    >
      Technologies
    </a>
  </div>

  {/* Hamburger-knapp for mobil */}
  <button
          className="lg:hidden text-white text-[30px] ml-auto z-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

  {/* Mobilmeny */}
  {isMenuOpen && (
      <div className="absolute top-20 right-0 bg-primary p-5 rounded-xl text-white lg:hidden flex flex-col gap-5 uppercase z-60">
      <a
        href="#about"
        onClick={() => handleLinkClick("about")}
        className={`text-xl ${activeLink === "about" ? "border-b-2 border-white" : ""}`}
      >
        About
      </a>
      <a
        href="#projects"
        onClick={(e) => {
          e.preventDefault();
          handleScrollToSection(projectsRef, "projects");
        }}
        className={`text-xl ${activeLink === "projects" ? "border-b-2 border-white" : ""}`}
      >
        My Projects
      </a>
      <a
        href="#technologies"
        onClick={(e) => {
          e.preventDefault();
          handleScrollToSection(technologiesRef, "technologies");
        }}
        className={`text-xl ${activeLink === "technologies" ? "border-b-2 border-white" : ""}`}
      >
        Technologies
      </a>
    </div>
  )}
</nav>


      <section id="about" className="anim-section">
        <About />
      </section>

      <section id="projects" ref={projectsRef} className={`anim-section`}>
        <h2 className="text-white uppercase lg:ml-[450px] xl:ml-[550px] mt-[70px] mb-[20px] text-center text-[32px] font-bold">
          My projects
        </h2>
        <HolidazeInfo />
        <AnyCartInfo />
        <NobleOakInfo />
      </section>

      <section id="technologies" ref={technologiesRef}className="anim-section mb-12">

        <h2 className="text-white uppercase lg:ml-[450px] xl:ml-[550px] mt-[70px] mb-[20px] text-center text-[32px] font-bold">
          Technologies
        </h2>
        <Technologies />
      </section>
    </div>
  );
}

export default ProjectsTemplate;

