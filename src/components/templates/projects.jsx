import AnyCartInfo from "./AnyCartInfo";
import NobleOakInfo from "./NobleOakInfo";
import HolidazeInfo from "./HolidazeInfo";
import About from "./about";

function ProjectsTemplate() {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-primary bg-fixed bg-cover bg-no-repeat bg-portfolio p-5 text-primary">
        <h1 className="text-white fixed top-8 right-4 sm:top-12 md:top-14 sl:top-16 lg:top-20 xl:top-24 z-10">By Aashild R. Lauvland</h1>
        <About />
        <h2 className="text-white uppercase lg:ml-[450px] xl:ml-[550px] mt-[70px] mb-[20px] text-center text-[32px] font-bold">My projects</h2>
        <HolidazeInfo />
        <AnyCartInfo />
        <NobleOakInfo />
    </div>
  );
}

export default ProjectsTemplate;


