import Skill from "@/components/Skill/Skill";
import Link from "next/link";

export default function Home() {
  return (
    <div className="  w-full flex 
            my-20 lg:my-0 sm:flex-row md:flex-col
            lg:flex-col  justify-center  items-center md:h-screen
            text-2xl text-green-200 
             font-bold font-sans px-[20%] lg:px-0">
      <div className=" flex flex-wrap justify-center items-center ">
        <Link href="https://github.com/RudeusGrayrat" target="_blank" className="">
          <Skill
            src="/github-image.jpg"
            nombre="Github">
          </Skill>
        </Link>
        <Link href="https://www.linkedin.com/in/miguel-nicolas-8b6582258" target="_blank" >
          <Skill
            src="/linkedin-image.jpg"
            nombre="Linkedin">
          </Skill>
        </Link>
        <Link href="mailto:miguelnc2502@gmail.com" target="_blank" >
          <Skill
            src="/gmail-icono.png"
            nombre="Gmail">
          </Skill>
        </Link>
        <Link
          href="https://es.fiverr.com/miguelnicola384"
          target="_blank"
        >
          <Skill
            src="/fiverr_icon.png"
            nombre="Friverr">
          </Skill>
        </Link>
        <Link
          href="https://drive.google.com/file/d/1rT_7CHVtO1Ciznl4NVYmO7Hy1dGzgu9B/view?usp=sharing"
          target="_blank"
        >
          <Skill
            src="/cv-icono.png"
            nombre="Curriculum">
          </Skill>
        </Link>
      </div>

    </div>
  );
}
