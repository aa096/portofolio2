import IconButton from "../iconButton";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function AnyCartInfo() {
  return (
      <section className="flex justify-center">
        <div className="bg-white rounded-xl flex place-items-center z-50 flex-col p-10 mt-[160px] sm:mt-[200px] md:mt-[240px] sl:mt-[280px] lg:ml-[450px] lg:mt-[100px] xl:ml-[550px] xl:mt-[120px] text-secondary max-w-[1200px] w-full">
          <div className="flex flex-row gap-6 justify-center group">
            <img
              src="public/assets/images/anycartdesk.png"
              alt="AnyCart desktop view"
              className="w-full md:w-1/2 object-contain mb-1 transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <img
              src="public/assets/images/anycartmobile.png"
              alt="AnyCart mobile view"
              className="w-20 sm:w-36 lg:w-1/7 object-contain mb-1 transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center items-center lg:p-10 xl:px-32 gap-3 mt-4">
            <h2 className="font-barlow uppercase text-[24px] lg:text-[27px]">AnyCart</h2>
            <p className="text-sm lg:text-base ">
              A fictional e-commerce website for AnyCart, created as part of an assignment at Noroff. The project features a responsive design, dynamic product pages built with React, functionality for adding products to a cart, displaying discounts, and managing product data through API integration. Optimized for usability and a seamless shopping experience across devices.
            </p>
            <div className="flex flex-row gap-6">
                <IconButton
                url="https://github.com/aa096/frontend-frameworks-ca"
                label="GitHub"
                icon={faGithub}
                />
                <IconButton
                url="https://anycart-aa096.netlify.app/"
                label="live site"
                icon={faGlobe}
                />
            </div>
          </div>
        </div>
      </section>
  );
}

export default AnyCartInfo;


