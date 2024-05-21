import Image from "next/image"
export default function About() {
  return (

    <div className="
      flex mx-[15%] md:mx-0  md:ml-[20%] flex-col xl:flex-row justify-center
      items-center  text-white font-sans pr-6 md:pr-14
      w-4/5 xl:h-screen my-24 xl:my-0">
      <div className="flex flex-col items-center">
        <h1 className=" text-6xl text-center text-green-200 
             font-bold  ">
          Miguel Nicolas
        </h1>
        <span className="my-6  xl:my-10 text-center xl:mx-16 md:m-10 xl:px-16 ">
          Background:
          Ingeniería de Ciberseguridad  <br />
          Tengo 22 años ¡Soy de Perú! .
          Mi experiencia abarca tanto el desarrollo front-end como el back-end
          <br />
          Siempre estoy buscando nuevos desafíos y formas de mejorar la experiencia del usuario a través de soluciones técnicas sólidas.
          <br />

          🚀Mi objetivo profesional es invertir el mayor tiempo posible en ser un gran Desarrollador Web.
          <br />
          📚Tengo conocimientos en Java y actualmente estoy estudiando Spring Boot. </span>
      </div>
      <div className="md:mx-24 md:pr-6">
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