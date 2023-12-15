"use client";

import { useTheme } from '@/context/theme-context'
import Link from 'next/link';
import React from 'react'
import { IoHome, IoHomeOutline } from "react-icons/io5";

export default function HomeButton() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Link href={'/'}>
            <button
                className="fixed bottom-5 left-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5 rem] 
                    border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center 
                    hover:scale-[1.15] active:scale-105 transition-all
                    dark:bg-gray-950"
            >
                {theme === "light" ? <IoHomeOutline /> : <IoHome />}
            </button>
        </Link>
    )
}