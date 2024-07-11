"use client";

import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link';
import { BsEnvelopeFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi"
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';


export default function Intro() {
    const { ref } = useSectionInView("Home", .5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section
            ref={ref}
            className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
            id="home"
        >
            <div className='flex items-center justify-center'>
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: .2
                        }}
                    >
                        <Image
                            src="/roshen.jpg"
                            width={500}
                            height={500}
                            quality={100}
                            alt="profile pic"
                            priority={true}
                            className="h-48 w-48 rounded-full object-cover border-[0.25rem] border-white shadow-xl"
                        />
                    </motion.div>
                    <motion.span
                        className="absolute bottom-0 left-5 text-4xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: .1,
                            duration: .7
                        }}
                    >
                        ✌
                    </motion.span>
                    <motion.span
                        className="absolute  bottom-0 end-4 text-4xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: .1,
                            duration: .7
                        }}
                    >
                        😋
                    </motion.span>
                </div>
            </div>
            <motion.h1
                className="mb-10 mt-4 px-4 text-2xl font-normal !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Hello, my name is {" "}
                <span className="font-extrabold bg-gradient-to-r from-blue-400 via-indigo-500 to-violet-600 text-transparent bg-clip-text">
                    Roshen
                </span>
                !{" "}I'm currently working as a {" "}
                <span className="font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    Software Engineer {" "}
                </span>
                at {" "}
                <span className="font-bold bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 text-transparent bg-clip-text">
                    Capital One
                </span>
                .{" "}I am attempting to learn as many branches of programming as I can. {" "}
                At the moment, I'm learning {" "}
                <span className="font-bold bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text text-transparent">
                    Machine Learning {" "}
                </span>
                with {" "}
                <span className="font-bold bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-[length:100%_6px] bg-no-repeat bg-bottom">
                    Python
                </span>
                {" "}and {" "}
                <span className="font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                    Front-End Development {" "}
                </span>
                using {" "}
                <span className="font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-[length:100%_6px] bg-no-repeat bg-bottom">
                    NextJS
                </span>
                .{" "} Join me in my journey!
            </motion.h1>
            <motion.div
                className="flex flex-col sm:flex-row justify-center items-center gap-2 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <Link href="#contact"
                    className="group bg-sky-500 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-sky-950 active:scale-105 transition"
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    Contact Me <BsEnvelopeFill className="group-hover:translate-x-3 transition" />
                </Link>
                <a
                    className=" marker:group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
                                focus:scale-110 hover:scale-110 active:scale-105 transition borderBlack
                                dark:bg-white/10"
                    href="/RoshenAbrahamResume2024.pdf"
                    target='_blank'
                >
                    Resume <HiDownload className="group-hover:translate-y-1 transition" />
                </a>
                <a className=" bg-white text-gray-700 p-3 flex items-center gap-2 rounded-full 
                                focus:scale-[1.15] hover:scale-[1.15] hover:text-sky-950 active:scale-105 transition borderBlack
                                dark:bg-white/10 dark:text-white/60"
                    href="https://www.linkedin.com/in/roshen-a-230722114/"
                    target="_blank"
                >
                    <BsLinkedin className="text-2xl" />
                </a>
                <a className="bg-white text-gray-700 p-2 flex items-center gap-2 rounded-full focus:scale-[1.15] 
                                hover:scale-[1.15] hover:text-sky-950 active:scale-105 transition borderBlack
                                dark:bg-white/10 dark:text-white/60"
                    href="https://github.com/Richrosh3"
                    target="_blank"
                >
                    <BsGithub className="text-3xl" />
                </a>
            </motion.div>
        </section>
    )
}
