import Image from "next/image"

export default function Skill(props: any) {
    return (
        <div className="flex flex-col items-center w-40 p-5 hover:text-white  hover:scale-110 transition duration-300 ease-in-out">

            <button
                className="group !mb-20 relative cursor-pointer outline-none border-none rounded-full flex flex-row items-center justify-center h-20 w-20 hover:!w-[160px] transition-all duration-[0.75s] before:content-[''] before:absolute before:w-full before:h-full before:inset-0 before:bg-[linear-gradient(130deg,#7209d4,#2832d4_33%,#00a5b2)] before:ring-4 before:ring-offset-4 before:ring-[#2832d4] before:rounded-full before:transition before:duration-300 before:ring-offset-[#fff] hover:before:scale-105 active:before:scale-95 text-white"
            >
                <img
                    src={props.src}
                    className="absolute rounded-lg left-4 group-hover:left-1.5 group-active:left-[10px] duration-300 transition-[left] z-10 w-12 h-12 text-white"
                />

                <span className="absolute right-1.5 text-[17px] font-semibold [--w:calc(100%-48px)] w-[--w] max-w-[--w] overflow-hidden flex items-center justify-center -z-[1] group-hover:z-[9] pointer-events-none select-none opacity-0 group-hover:opacity-100 text-transparent group-hover:text-inherit group-active:right-2 transition-all duration-[2s] group-hover:duration-300 group-active:scale-[0.85]">{props.nombre}</span>
            </button>


        </div>
    )
}