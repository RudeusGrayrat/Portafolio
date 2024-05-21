import Image from "next/image"
import Link from "next/link"
export default function Skill(props: any) {
  return (

    <div className="w-4/5 flex flex-col xl:flex-row justify-center items-center h-max
         text-white  font-sans mb-20 hover:scale-105
        ">
      <div className="flex flex-col text-center items-center">
          <h1 className=" text-6xl  text-green-200 
             font-bold  ">
            {props.nombre}
          </h1>
          <span className="my-10 md:m-16 md:mx-12 ">
            {props.span}
          </span>
      </div>
      <div className="mx-16 hover:scale-105 ">
        <Link href={props.url} target="_blank">
          <Image
            src={props.imagen}
            alt="proyecto"
            width={700}
            className=" flex justify-center items-center rounded-3xl max-w-64	 h-auto "
            height={500}>
          </Image>
          <span>Link</span>
        </Link>
      </div>

    </div >
  )
}