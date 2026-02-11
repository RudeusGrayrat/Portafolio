import Image from "next/image"
import Link from "next/link"
export default function Skill(props: any) {
  return (

    <div className="w-[800px] flex flex-col
        ">
      <h1 className=" text-6xl  text-green-200 
             font-bold  ">
        {props.nombre}
      </h1>
      <div className="flex  text-center items-center">
        <span className="my-10 md:m-10 md:mx-12 xl:mx-20">
          {props.span}
        </span>
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
      </div>

    </div >
  )
}