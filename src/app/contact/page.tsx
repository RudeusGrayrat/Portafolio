import Skill from "@/components/Skill/Skill";
import Link from "next/link";

export default function Home() {
  return (
    <div className="  ml-[10%] md:ml-[20%] w-4/5 flex 
            my-20 lg:my-0 flex-col sm:flex-row md:flex-col
            lg:flex-col  justify-center  items-center md:h-screen
            text-2xl text-green-200 
             font-bold font-sans px-[20%] lg:px-0">
      <div className="md:flex lg:flex-wrap content-center ">

        <Link href="https://github.com/RudeusGrayrat" target="_blank" className="hover:text-white transition duration-300 ease-in-out hover:scale-150">
          <Skill
            src="/github-image.jpg"
            nombre="Github">
          </Skill>
        </Link>
        <Link href="https://www.linkedin.com/in/miguel-nicolas-8b6582258" target="_blank" className="hover:text-whitetransition duration-300 ease-in-out hover:scale-150">
          <Skill
            src="/linkedin-image.jpg"
            nombre="Linkedin">
          </Skill>
        </Link>
        <Link href="mailto:miguelnc2502@gmail.com" target="_blank" className="hover:text-white transition duration-300 ease-in-out hover:trans hover:scale-150">
          <Skill
            src="/gmail-icono.png"
            nombre="Gmail">
          </Skill>
        </Link>
      </div>
      <div className="hover:text-white hover:scale-150 m-8 transition duration-300 ease-in-out">
        <Link
          href="https://drive.google.com/file/d/1w1j79q4gWnJPfodrpLZip9-D1Qpjk2_o/view?usp=sharing"
          target="_blank"
        >
          <Skill
            src="/cv-icono.png"
            nombre="CV">
          </Skill>
        </Link>
      </div>
    </div>
  );
}