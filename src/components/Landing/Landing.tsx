import Link from "next/link"
export default function Landing() {
    return (

        <div className="flex flex-col h-full justify-center items-center rounded-full w-auto ">
            <Link href="/about" className="text-4xl sm:text-8xl text-green-200 cursor-pointer 
             hover:text-white
            hover:scale-105 pr-4  font-bold font-sans">
                Bienvenido
            </Link>
            <h1 className="text-2xl text-green-200 text-center
             font-bold font-sans p-8">Soy Miguel!<br/> Un Full Stack Developer</h1>

        </div>
    )
}