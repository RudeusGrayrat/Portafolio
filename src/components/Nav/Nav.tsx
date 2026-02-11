"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [glitchText, setGlitchText] = useState(">_ Home");
    const [isHovered, setIsHovered] = useState(false);
    const [binaryCode, setBinaryCode] = useState("");
    const pathname = usePathname();
    const links = [
        { id: 1, link: "about" },
        { id: 2, link: "experience" },
        { id: 3, link: "skills" },
        { id: 4, link: "contact" },
    ];
    const textToBinary = (text) => {
        return text.split('').map(char => {
            return char.charCodeAt(0).toString(2).padStart(8, '0');
        }).join(' ');
    };
    const getCurrentSection = () => {
        const path = pathname?.split('/')[1] || 'home';
        switch (path) {
            case 'about': return 'ABOUT';
            case 'experience': return 'EXPERIENCE';
            case 'skills': return 'SKILLS';
            case 'contact': return 'CONTACT';
            default: return 'HOME';
        }
    };
    useEffect(() => {
        const updateBinaryCode = () => {
            const section = getCurrentSection();
            const binary = textToBinary(section);
            setBinaryCode(binary);
        };

        updateBinaryCode(); // Actualizar inmediatamente
        const interval = setInterval(updateBinaryCode, 3000);

        return () => clearInterval(interval);
    }, [pathname]);

    // Efecto glitch al hacer hover
    useEffect(() => {
        let interval;
        if (isHovered) {
            const glitchChars = "!<>-_\\/[]{}—=+*^?#$%&@|";
            let iterations = 0;

            interval = setInterval(() => {
                setGlitchText(prev =>
                    prev.split("")
                        .map((char, index) => {
                            if (index < iterations) {
                                return ">_ Home"[index];
                            }
                            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                        })
                        .join("")
                );

                if (iterations >= ">_ Home".length) {
                    clearInterval(interval);
                    setGlitchText(">_ Home");
                    iterations = 0;
                }
                iterations += 1 / 3;
            }, 30);
        } else {
            setGlitchText(">_ Home");
        }

        return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <div className="flex md:z-600 md:h-20 w-screen 
        px-12 items-center fixed justify-between z-50  text-white
        bg-black border-b border-green-500 border-opacity-40
        shadow-[0_0_13px_rgba(0,255,0,0.2)]" // Efecto glow verde
        >
            <div
                className="hidden md:flex justify-center w-auto h-auto"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Link href="/" className="group relative">


                    <span className="text-gray-200 group-hover:text-green-400 transition-all duration-300 text-2xl mx-1 relative">
                        {glitchText}
                        {/* Efecto de scan lines */}
                        <span className="absolute inset-0 bg-gradient-to-b from-transparent  to-transparent animate-scan"></span>
                    </span>

                    <span className="text-black group-hover:text-green-400 transition-all duration-300 text-2xl relative">
                        {"_"}

                    </span>

                    {/* Efecto de código flotando */}
                    {isHovered && (
                        <div className="absolute bottom-1 left-32 text-xs text-green-600 font-mono whitespace-nowrap animate-fadeIn">
                            {'>'} access_main.exe
                        </div>
                    )}
                </Link>
            </div>

            {/* Resto del navbar... */}
            <div className="hidden md:block">
                <ul className="flex my-6 text-center gap-6">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="relative group px-5 my-3 cursor-pointer text-xl py-2 capitalize font-mono"
                        >
                            <Link href={link} className="relative">
                                <span className="text-gray-200 group-hover:text-green-400 transition-colors duration-300">
                                    {'>_'} {link}
                                </span>

                                {/* Línea inferior animada */}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-green-500 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_#00ff00]"></span>

                                {/* Efecto de terminal */}
                                <span className="absolute -right-4 top-0 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    _
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Menú móvil con estilo hacker */}
            <div onClick={() => setNav(!nav)} className="cursor-pointer p-2 z-10 text-green-500 md:hidden w-screen hover:shadow-[0_0_15px_#00ff00] transition-all duration-300">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col h-full fixed justify-center items-center top-0 left-0 w-full bg-black border border-green-500/30 shadow-[0_0_50px_rgba(0,255,0,0.2)]">
                    <div className="absolute top-4 left-4 text-green-600 font-mono text-sm">
                        {'>'} NAVIGATION.exe
                        <span className="animate-pulse ml-1">_</span>
                    </div>

                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl group"
                        >
                            <Link
                                onClick={() => setNav(!nav)}
                                href={link}
                                className="relative font-mono text-gray-500 group-hover:text-green-400 transition-all duration-300"
                            >
                                <span className="relative">
                                    {'['} {link} {']'}
                                    <span className="absolute -inset-1 bg-green-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                </span>
                            </Link>
                        </li>
                    ))}

                    {/* Efecto de código binario */}
                    <div className="absolute bottom-4  text-center text-[10px] text-green-700 font-mono opacity-50">
                        {binaryCode || textToBinary(getCurrentSection())}
                    </div>
                </ul>
            )}
        </div>
    );
};

export default Navbar;