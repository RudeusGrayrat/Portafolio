import Card from "@/components/Cards/Card"
export default function Abaut() {
    return (
        <div className="
        flex flex-col w-4/5 ml-[17%] md:ml-[20%] justify-center
            items-center mt-16
        text-white  font-sans pr-[17%] md:pr-0
       ">
            <Card
                imagen="/imagenhmusic.png"
                url="https://henry-music.vercel.app"
                nombre="HMusic"
                span="H Music es una aplicación de música diseñada 
                para los amantes de la música que desean explorar, 
                descubrir y disfrutar de una amplia variedad de canciones 
                en cualquier momento y lugar. Desarrollada con tecnologías 
                modernas como TypeScript, React, Next.js, Node.js y PostgreSQL, 
                H Music ofrece una experiencia de usuario excepcional con 
                funcionalidades innovadoras y una interfaz intuitiva">
            </Card>
            <Card
                imagen="/imagen-dogs.png"
                url="https://miguelnc-pi-dogs.vercel.app/"
                nombre="PI-Dogs"
                span="H Music es una aplicación de música diseñada 
                para los amantes de la música que desean explorar, 
                descubrir y disfrutar de una amplia variedad de canciones 
                en cualquier momento y lugar. Desarrollada con tecnologías 
                modernas como TypeScript, React, Next.js, Node.js y PostgreSQL, 
                H Music ofrece una experiencia de usuario excepcional con 
                funcionalidades innovadoras y una interfaz intuitiva">
            </Card>
        </div>
    )
}