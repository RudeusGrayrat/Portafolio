import Link from "next/link"

export default function Landing() {
    return (
        <div className="relative flex flex-col h-screen justify-center items-center ">
            <Link
                href="/about"
                className="group relative text-[44px] line sm:text-9xl text-white cursor-pointer font-black tracking-tight"
                style={{
                    lineHeight: "10px"
                }}
            >
                <span className="relative">
                    <span className="text-[#1e52b3] group-hover:text-[#3a7fd1] transition-colors mr-2">{"<"}</span>
                    <span style={{
                        fontFamily: "'Exo', sans-serif",
                        fontWeight: 700,
                        letterSpacing: "1px",
                    }} className="bg-gradient-to-r whitespace-nowrap 
                     from-white to-gray-300 bg-clip-text  transition-all duration-500">
                        Bienvenido
                    </span>
                    <span className="text-[#1e52b3] group-hover:text-[#3a7fd1] transition-colors ml-2">{"/>"}</span>
                </span>
            </Link>

            <div className="relative mt-12 text-center">
                <h1 className="relative text-2xl sm:text-3xl text-green-400 font-mono pr-2 animate-pulse whitespace-nowrap flex max-sm:flex-col max-sm:gap-0 gap-3 overflow-hidden">
                    <span>Miguel Nicolas</span>
                    <span>
                        ·
                    </span>
                    <span>Software Developer</span>
                </h1>
                <p className="text-gray-500 mt-4 text-sm tracking-widest uppercase">
                    Full Stack · React · Node · MongoDB
                </p>
            </div>
        </div>
    )
}