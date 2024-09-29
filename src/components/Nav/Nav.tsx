"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const links = [
        { id: 1, link: "about" },
        { id: 2, link: "experiencie" },
        { id: 3, link: "skills" },
        { id: 4, link: "contact" },
    ];

    return (
        <div className=" flex m-8 md:m-0 flex-col fixed md:z-600  h-10 md:h-screen 
        justify-center items-center md:w-1/5  text-white
         bg-slate-800 shadow-lg md:shadow-white"
        >
            <div className="hidden md:flex justify-center  bg-slate-50 rounded-full w-auto h-auto  ">
                <Link href="/">
                    <Image
                        src="/android-chrome-512x512-removebg-preview.png"
                        alt="logo"
                        width={100}
                        height={100}
                    >
                    </Image>
                </Link>
            </div>
            <div className="hidden md:block">
                <ul className="flex flex-col my-6 text-center"
                >
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="nav-links px-4 my-5 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
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
