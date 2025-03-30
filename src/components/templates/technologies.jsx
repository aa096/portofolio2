import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons"
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

function Technologies() {
  return (
      <section className="flex justify-center">
        <div className="bg-white rounded-xl flex place-items-center z-10 flex-col p-10 lg:ml-[450px]  xl:ml-[550px] text-secondary max-w-[1200px] w-full">
            <div className="flex flex-row gap-6 text-[40px]">
            <FontAwesomeIcon icon={faHtml5} />
            <FontAwesomeIcon icon={faCss} />
            <FontAwesomeIcon icon={faJs} />
            <FontAwesomeIcon icon={faBootstrap} />
            <FontAwesomeIcon icon={faReact} />
            <FontAwesomeIcon icon={faSass} />
            </div>
          </div>
      </section>
  );
}

export default Technologies;


