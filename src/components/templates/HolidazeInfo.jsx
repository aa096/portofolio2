import IconButton from "../iconButton";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function HolidazeInfo() {
  return (
      <section className="flex justify-center">
        <div className="bg-white rounded-xl flex place-items-center z-10 flex-col p-10 lg:ml-[450px] xl:ml-[550px] text-secondary max-w-[1200px] w-full">
          <div className="flex flex-row gap-6 justify-center group">
            <img
              src="/images/Holidazedesk.png"
              alt="Holidaze desktop view"
              className="w-full md:w-1/2 object-contain mb-1 transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <img
              src="/images/holidazemobile.png"
              alt="Holidaze mobile view"
              className="w-20 sm:w-36 lg:w-1/7 object-contain mb-1 transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center items-center lg:p-10 xl:px-32 gap-3 mt-4">
            <h2 className="font-barlow uppercase text-[24px] lg:text-[27px]">Holidaze</h2>
            <p className="text-sm lg:text-base ">
                Holidaze is a fictional holiday venue booking website created as a project exam at Noroff. Built using React, Tailwind CSS, and JavaScript, the site includes functionality for searching venues, viewing details, making bookings, and managing user profiles.
            </p>
            <div className="flex flex-row gap-6">
                <IconButton
                url="https://github.com/aa096/project-exam-2"
                label="GitHub"
                icon={faGithub}
                />
                <IconButton
                url="https://holidaze-aa096.netlify.app/"
                label="live site"
                icon={faGlobe}
                />
            </div>
          </div>
        </div>
      </section>
  );
}

export default HolidazeInfo;


