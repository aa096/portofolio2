import { FaReact } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiTailwindcss, SiSass, SiAdobephotoshop, SiFigma } from "react-icons/si";

function Technologies() {
  return (
    <section className="flex justify-center py-20">
      <div className="bg-white rounded-xl py-20 flex place-items-center z-10 flex-col p-10 lg:ml-[450px] xl:ml-[550px] text-secondary max-w-[1200px] w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 text-center">
          <div>
            <SiHtml5 className="mx-auto text-[55px] text-orange-500" />
            <p className="mt-2 text-lg">HTML5</p>
          </div>
          <div>
            <SiCss3 className="mx-auto text-[55px] text-blue-500" />
            <p className="mt-2 text-lg">CSS3</p>
          </div>
          <div>
            <SiBootstrap className="mx-auto text-[55px] text-purple-600" />
            <p className="mt-2 text-lg">Bootstrap</p>
          </div>
          <div>
          <SiTailwindcss className="mx-auto text-[55px] text-cyan-500" />
            <p className="mt-2 text-lg ">Tailwind</p>
          </div>
          <div>
            <SiJavascript className="mx-auto text-[55px] text-yellow-400" />
            <p className="mt-2 text-lg ">JavaScript</p>
          </div>
          <div>
            <FaReact className="mx-auto text-[55px] text-blue-400" />
            <p className="mt-2 text-lg ">React</p>
          </div>
          <div>
            <SiSass className="mx-auto text-[55px] text-pink-400" />
            <p className="mt-2 text-lg">Sass</p>
          </div>
          <div>
            <SiAdobephotoshop className="mx-auto text-[55px] text-blue-900" />
            <p className="mt-2 text-lg">Photoshop</p>
          </div>
          <div>
            <SiFigma className="mx-auto text-[55px] text-blue-900" />
            <p className="mt-2 text-lg">Figma</p>
          </div> 
        </div>
        </div>
    </section>
  );
}

export default Technologies;
