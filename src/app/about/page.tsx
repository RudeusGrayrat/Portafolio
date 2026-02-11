import Image from "next/image"
import Miguel from "../Miguel.svg"
import Card from "@/components/Cards/Card"
import Link from "next/link"

export default function About() {
  return (

    <div className="
      flex flex-col  w-full  justify-center  items-center   xl:mt-0  text-white  font-sans overflow-y-auto  ">
      <div className="w-[1000px] flex flex-col justify-center items-center 
         text-white border px-4 border-slate-600 rounded-xl shadow-lg shadow-slate-800 bg-[#a5c2f8] bg-opacity-15 pt-4  font-sans mb-10 max-md:w-[90%] ">
        <h1 className=" text-6xl  text-green-200 
             font-bold  ">
          Miguel Nicolas
        </h1>
        <div className="flex  text-center items-center  max-md:flex-col">
          <span className="m-10 md:m-10 md:mx-12 xl:mx-20">
            Hola, soy Miguel Nicolas, un apasionado desarrollador de software especializado en el desarrollo web.
            Con una sólida formación en ingeniería de software y una amplia experiencia en el desarrollo de aplicaciones web, me dedico a crear soluciones innovadoras y eficientes para satisfacer las necesidades de los usuarios.
            Mi enfoque se centra en el desarrollo de aplicaciones web modernas utilizando tecnologías como React, Next.js, Node.js y bases de datos relacionales. Me esfuerzo por escribir código limpio, mantenible y escalable, siguiendo las mejores prácticas de desarrollo.
            Además de mis habilidades técnicas, también valoro la colaboración y el trabajo en equipo. Disfruto compartir conocimientos y aprender de otros desarrolladores para mejorar continuamente mis habilidades y contribuir al crecimiento del equipo.
          </span>
          <div className="mx-16 hover:scale-110  transition duration-500 ease-in-out  ">
            <Link href="https://www.linkedin.com/in/miguel-nicolas-8b6582258/" target="_blank">
              <Image
                src={Miguel}
                alt="proyecto"
                width={700}
                className=" flex justify-center items-center rounded-3xl max-w-64	 h-auto "
                height={500}>
              </Image>
              <span>Ir</span>
            </Link>
          </div>


        </div >
      </div>
    </div>
  )
}