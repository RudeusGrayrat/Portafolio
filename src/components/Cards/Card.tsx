import Image from "next/image"
import Link from "next/link"
export default function Skill(props: any) {
  return (

    <div className="w-4/5 flex flex-col xl:flex-row justify-center items-center h-max
         text-white border border-slate-600 rounded-xl shadow-lg shadow-slate-800 bg-[#a5c2f8] bg-opacity-15 pt-4  font-sans mb-10
        ">
      <div className="flex flex-col text-center items-center">
          <h1 className=" text-6xl  text-green-200 
             font-bold  ">
            {props.nombre}
          </h1>
          <span className="my-10 md:m-10 md:mx-12 xl:mx-20">
            {props.span}
          </span>
      </div>
      <div className="mx-16 hover:scale-110  transition duration-500 ease-in-out  ">
        <Link href={props.url} target="_blank">
          <Image
            src={props.imagen}
            alt="proyecto"
            width={700}
            className=" flex justify-center items-center rounded-3xl max-w-64	 h-auto "
            height={500}>
          </Image>
          <span>Ir</span>
        </Link>
      </div>

    </div >
  )
}