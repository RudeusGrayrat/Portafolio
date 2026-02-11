import Skill from "@/components/Skill/Skill";
export default function Home() {
    return (
        <div className="w-full  flex h-full  max-md:mt-10 flex-wrap justify-center items-center p-5 ">
            <div className="flex flex-wrap lg:w-[50%] h-full gap content-center justify-center items-center  text-2xl ">
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
