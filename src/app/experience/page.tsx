import Card from "@/components/Cards/Card"
export default function Abaut() {
    return (
        <div className="
        flex flex-col justify-center !mt-20
            items-center overflow-x-hidden
        text-white  font-sans xl:pr-[0%] md:pr-0 gap-10 pt-5
       ">
            <Card
                imagen="/Logo-Tower-and-Tower.png"
                url="https://towerandtower.com.pe"
                nombre="Auxiliar de Sistemas - T&T"
                span="Trabajé como auxiliar de sistemas en Tower and Tower, donde fui responsable de 
                la gestión y mantenimiento de la infraestructura tecnológica de la empresa. 
                Realicé tareas de soporte técnico, administración de redes, instalación y 
                configuración de equipos. También colaboré en la implementación de nuevas 
                herramientas de software y en la resolución de incidencias técnicas del día a día."
            />

            <Card
                imagen="/imagenhmusic.png"
                url="https://henry-music.vercel.app"
                nombre="HMusic"
                span="H Music es una aplicación de música diseñada 
                para los amantes de la música que desean explorar, 
                descubrir y disfrutar de una amplia variedad de canciones 
                en cualquier momento y lugar. Desarrollada con tecnologías 
                modernas como TypeScript, Next.js, Tailwind, Node.js y PostgreSQL, 
                H Music ofrece una experiencia de usuario excepcional con 
                funcionalidades innovadoras y una interfaz intuitiva">
            </Card>
            <Card
                imagen="/imagen-dogs.png"
                url="https://miguelnc-pi-dogs.vercel.app/"
                nombre="PI-Dogs"
                span="Dogs es mi aplicación que tiene como objetivo permitir a los usuarios buscar y 
                gestionar información sobre diferentes razas de perros.
                Ofrece una experiencia de usuario excepcional con 
                funcionalidades adorables que combina con la tematica de perros.
                Todo eso desarrollado utilizando React y css puro.
                Construí el backend utilizando Node.js y Express.
                Integré la base de datos con PostgreSQL y Sequelize.
                ">
            </Card>
        </div>
    )
}