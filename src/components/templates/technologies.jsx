import { FaReact } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiTailwindcss, SiSass, SiAdobephotoshop, SiFigma } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";

function Technologies() {
  return (
    <section className="flex justify-center">
      <div className="bg-white rounded-xl py-20 flex place-items-center z-10 flex-col p-10 lg:ml-[450px] xl:ml-[550px] text-secondary max-w-[1200px] w-full">
        <div className="flex flex-row gap-6 text-[55px]">
          <SiHtml5 className="text-orange-500" title="HTML5" />
          <SiCss3 className="text-blue-500" title="CSS3" />
          <SiJavascript className="text-yellow-400" title="JavaScript" />
          <SiBootstrap className="text-purple-600" title="Bootstrap" />
          <SiTailwindcss className="text-cyan-500" title="Tailwind" />
          <FaReact className="text-blue-400" title="React" />
          <SiSass className="text-pink-400" title="Sass" />
          <SiAdobephotoshop className="text-blue-900" title="Photoshop" />
          <SiFigma className="text-blue-900" title="Figma" />
        </div>
      </div>
    </section>
  );
}

export default Technologies;
