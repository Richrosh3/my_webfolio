"use client";

import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"
import Link from 'next/link';
import { BsEnvelopeFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload} from "react-icons/hi"


export default function Intro() {
  return (
    <section
        className = "mb-28 max-w-[50rem] text-center sm:mb-0"
    >
        <div className = 'flex items-center justify-center'>
            <div className = "relative">
                <motion.div
                    initial = {{opacity: 0, scale: 0}}
                    animate = {{opacity: 1, scale: 1}}
                    transition = {{
                        type: "tween", 
                        duration: .2
                    }}
                >
                    <Image 
                        src = "/roshen.jpg"
                        width = {192}
                        height = {192}
                        quality = {100}
                        alt = "profile pic"
                        priority = {true}
                        className = "h-24 w-24 rounded-full object-cover border-[0.35rem]
                                    border-white shadow-xl"
                    />
                </motion.div>
                <motion.span 
                    className = "absolute bottom-0 right-0 text-4xl"
                    initial = {{opacity: 0, scale: 0}}
                    animate = {{opacity: 1, scale: 1}}
                    transition = {{
                        type: "spring", 
                        stiffness : 125, 
                        delay : .1,
                        duration : .7
                    }}
                >
                    ✌
                </motion.span>
            </div>
        </div>
        <motion.p 
            className = "mb-10 mt-4 px-4 text-2xl font-normal !leading-[1.5] sm:text-4xl"
            initial = {{opacity: 0, y:100}}
            animate = {{opacity: 1, y: 0}}
        >
            Hello, my name is {" "}
            <span className = "font-extrabold">
                Roshen {" "}
            </span>
            <span className = "font-semibold">
                :) {"\n"}
            </span>
            {" "}I'm currently working as a {" "}
            <span className = "font-bold">
                Software Engineer {" "}
            </span>
            at {" "}
            <span className = "font-bold">
                Northrop Grumman. {" "}
            </span>
            I am attempting to learn as many branches of programming as I can. {" "}
            Currently, I'm learning {" "}
            <span className = "font-bold">
                Front-End Development {" "}
            </span>
            using {" "}
            <span className = "font-bold underline">
                NextJS
            </span>
            .{" "} Join me in my journey! 
        </motion.p>
        <motion.div
            className = "flex flex-col sm:flex-row justify-center items-center gap-2 px-4 text-lg font-medium"    
            initial = {{opacity: 0, y:100}}
            animate = {{opacity: 1, y: 0}}
            transition={{delay:0.1}}
        >
            <Link href = "#contact"
                className = "group bg-sky-500 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-sky-950 active:scale-105 transition"    
            >
                Contact Me <BsEnvelopeFill className = "group-hover:translate-x-3 transition"/>
            </Link>
            <a 
                className = "group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/5"    
                href = "/RoshenAbrahamResume2023.pdf"
                target='_blank'
            >
                Resume <HiDownload className = "group-hover:translate-y-1 transition"/>
            </a>
            <a className = " bg-white text-gray-700 p-3 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-sky-950 active:scale-105 transition border border-black/5"
                href = "https://www.linkedin.com/in/roshen-a-230722114/"
                target = "_blank"
            >
                <BsLinkedin className = "text-2xl"/>
            </a>
            <a className = "bg-white text-gray-700 p-2 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-sky-950 active:scale-105 transition border border-black/5"
                href = "https://github.com/Richrosh3"
                target = "_blank"
            >
                    <BsGithub className = "text-3xl"/>
            </a>
        </motion.div>
    </section>
  )
}
