import IconButton from "../iconButton";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function About() {
    return (
        <section className="flex justify-center">
            <div className="bg-white rounded-xl flex place-items-center z-50 flex-col p-10 mt-[160px] sm:mt-[200px] md:mt-[240px] sl:mt-[280px] lg:ml-[450px] lg:mt-[100px] xl:ml-[550px] xl:mt-[120px] text-secondary max-w-[1200px] w-full">
                <div className="flex flex-row justify-center">
                    <img
                        src="/images/image33.jpg"
                        alt="AnyCart desktop view"
                        className="w-[150px] h-[150px] object-cover transform transition-transform rounded-full duration-300 ease-in-out hover:scale-105"
                    />
                </div>
                <div className="flex flex-col justify-center items-center p-6 xl:px-32">
                    <h2 className="font-barlow font-bold text-[24px] lg:text-[36px]">Aashild R. Lauvland</h2>
                    <h3 className="font-barlow text-[16px] lg:text-[24px] text-primary mb-2">Frontend Developer</h3>
                    <p className="font-barlow text-sm lg:text-base">
                        Hi! I'm Aashild, a frontend developer based in Stavanger. I combine creativity with coding to build websites that are functional and visually engaging.
                    </p>
                    <div className="flex flex-row gap-6 mt-3">
                        <IconButton
                            url="https://github.com/aa096"
                            label="GitHub"
                            icon={faGithub}
                        />
                        <IconButton
                            url="https://www.linkedin.com/in/aashild-l-rasmussen/"
                            label="LinkedIn"
                            icon={faLinkedin}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
