import BinaryBackground from "@/components/BackgroundDynamic"
import Image from "next/image"
export default function About() {
  return (

    <div className="
      flex mx-[15%] md:mx-0  md:ml-[20%] flex-col xl:flex-row justify-center
      items-center  text-white font-sans pr-6 md:pr-14
      w-4/5 xl:h-screen my-24 xl:my-0">
      <div className=" ml-12  shadow-slate-800 pt-4 flex border-gray-600 mb-2 shadow-lg border flex-col items-center bg-[#a5c2f8] rounded-xl bg-opacity-15">
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

      <div className="flex ml-12 mt-10  shadow-slate-800 justify-center items-center md:mx-24 md:p-6  h-[400px] bg-[#a5c2f8] bg-opacity-15 border-gray-600 shadow-lg border rounded-3xl">
        <Image
          src="/miguel_traje.jpeg"
          alt="hola"
          width={500}
          className=" flex justify-center items-center rounded-3xl max-w-64	 h-auto "
          height={400}>
        </Image>
      </div>
    </div>
  )
}