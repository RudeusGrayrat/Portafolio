import Skill from "@/components/Skill/Skill";
import Image from "next/image"
export default function Home() {
    return (
        <div className="ml-[10%] md:ml-[20%] w-4/5 flex 
            my-20 lg:my-0 flex-col sm:flex-row
            lg:flex-col  justify-center  items-center md:h-screen
            text-2xl text-green-200 
             font-bold font-sans px-[20%] lg:px-0">
            <div className="flex flex-wrap content-center ">
                <Skill
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    nombre="Javascript">
                </Skill>
                <Skill
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    nombre="Typescript">
                </Skill>
                <Skill
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    nombre="React">
                </Skill>
                <Skill
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                    nombre="Next">
                </Skill>
            </div>
            <div className="flex flex-wrap content-center">
                <Skill
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    nombre="Node">
                </Skill>
                <Skill
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    nombre="Express">
                </Skill>
                <Skill
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                    nombre="PostgreSQL">
                </Skill>
                <Skill
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"
                    nombre="Sequelize">
                </Skill>
            </div>
            <div className="flex flex-wrap content-center">
            <Skill
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
                    nombre="Tailwind">
                </Skill>
                <Skill
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                    nombre="Redux">
                </Skill>
                <Skill
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                    nombre="Java">
                </Skill>
                <Skill
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                    nombre="Git">
                </Skill>
            </div>
        </div>
    );
}
