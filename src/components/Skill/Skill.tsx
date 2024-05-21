import Image from "next/image"

export default function Skill(props:any) {
    return (
        <div className="flex flex-col items-center w-40 hover:text-white">
            <Image
                src={props.src}
                alt="imagen"
                width={50}
                height={30}
                className=" rounded-lg hover:scale-105 "
            >
            </Image>
            <h1 className="p-8">{props.nombre}</h1>
        </div>
    )
}