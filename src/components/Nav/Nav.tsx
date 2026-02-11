"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Miguel from "../../app/Miguel.svg"


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const links = [
        { id: 1, link: "about" },
        { id: 2, link: "experience" },
        { id: 3, link: "skills" },
        { id: 4, link: "contact" },
    ];

    return (
        <div className=" flex m-8 md:m-0  fixed md:z-600 md:h-[84px] w-screen 
        px-12 items-center justify-between  z-50 text-white
         bg-black border-b border-green-900 border-opacity-50"

        >
            <div className="hidden md:flex justify-center  w-auto h-auto  ">
                <Link href="/">
                    <Image
                        src={Miguel}
                        alt="logo"
                        className="rounded-full"
                        width={70}
                        height={70}
                    >
                    </Image>
                </Link>
            </div>
            <div className="hidden md:block">
                <ul className="flex my-6 text-center gap-6"
                >
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="nav-links px-5 my-3 cursor-pointer text-xl hover:bg-black hover:shadow-slate-700 hover:bg-opacity-15 rounded-lg py-2 hover:shadow-lg capitalize font-medium text-gray-500 hover:scale-110 hover:text-white duration-300 link-underline"
                        >
                            <Link href={link}>{link}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div onClick={() => setNav(!nav)} className="cursor-pointer p-2 z-10 text-gray-500 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (
                <ul className="flex flex-col h-full  fixed   justify-center items-center  top-0 left-0 w-full  bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                        >
                            <Link onClick={() => setNav(!nav)} href={link}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;
