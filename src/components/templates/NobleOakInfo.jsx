import IconButton from "../iconButton";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function NobleOakInfo() {
  return (
      <section className="flex justify-center">
        <div className="bg-white rounded-xl flex place-items-center z-50 flex-col p-10 mt-[160px] sm:mt-[200px] md:mt-[240px] sl:mt-[280px] lg:ml-[450px] lg:mt-[100px] xl:ml-[550px] xl:mt-[120px] text-secondary max-w-[1200px] w-full">
          <div className="flex flex-row gap-6 justify-center group">
            <img
              src="public/images/noble.png"
              alt="Noble Oak desktop view"
              className="w-full md:w-1/2 object-contain mb-1 transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <img
              src="public/images/nobleoakmobile.png"
              alt="Noble Oak mobile view"
              className="w-20 sm:w-36 lg:w-1/7 object-contain mb-1 transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center items-center lg:p-10 xl:px-32 gap-3 mt-4">
            <h2 className="font-barlow uppercase text-[24px] lg:text-[27px]">Noble Oak</h2>
            <p className="text-sm lg:text-base ">
                 Noble Oak is a fictional auction house created as a semester project at Noroff. Built using JavaScript, Sass, and Bootstrap, the website features functionality for listing auctions, placing bids, and managing user profile.
            </p>
            <div className="flex flex-row gap-6">
                <IconButton
                url="https://github.com/aa096/SemesterProject2"
                label="GitHub"
                icon={faGithub}
                />
                <IconButton
                url="https://nobleoakauction.netlify.app/"
                label="live site"
                icon={faGlobe}
                />
            </div>
          </div>
        </div>
      </section>
  );
}

export default NobleOakInfo;


