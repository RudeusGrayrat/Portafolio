import Image from "next/image"
import Miguel from "../Miguel.svg"
export default function About() {
  return (

    <div className="
      flex flex-col xl:flex-row w-full xl:h-screen  justify-center  items-center mt-16  xl:mt-0  text-white  font-sans  ">
      <div className=" w-4/5 px-4 md:mx-12 shadow-slate-800 pt-4 flex border-gray-600 mb-2 shadow-lg border flex-col items-center bg-[#a5c2f8] rounded-xl bg-opacity-15">
        <h1 className=" text-6xl text-center text-green-200 
             font-bold  ">
          Miguel Nicolas
        </h1>
        <span className="my-6  xl:my-10 text-center xl:mx-16 md:m-10 xl:px-16 ">
          <strong>
            💻 Desarrollador Full Stack <br />
          </strong>
          Background:
          🎓 Ingeniería de Ciberseguridad   <br />
          ¡Hola! Tengo 23 años y soy de Perú. Mi experiencia abarca tanto el desarrollo front-end como back-end, siempre buscando nuevos desafíos y formas de mejorar la experiencia del usuario con soluciones técnicas sólidas.
          <br />

          🚀 Objetivo profesional: Aprender continuamente y mejorar en cada paso.
          <br />
          📚 Tengo conocimientos en Java, Kotlin, Flutter y otras tecnologías, pero mis fortalezas son la lógica de programación y el desarrollo web. Siempre estoy dispuesto a aprender nuevas herramientas y ampliar mis habilidades. </span>
      </div>

      <div className="flex  my-10 w-4/5 xl:w-2/5 px-4 shadow-slate-800 justify-center items-center md:mx-12 md:p-6  h-[400px] bg-[#a5c2f8] bg-opacity-15 border-gray-600 shadow-lg border rounded-3xl">
        <Image
          src={Miguel}
          alt="hola"
          width={500}
          className=" flex justify-center items-center rounded-3xl max-w-64	 h-auto "
          height={400}>
        </Image>
      </div>
    </div>
  )
}