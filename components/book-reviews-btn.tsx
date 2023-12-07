"use client";

import { useTheme } from '@/context/theme-context'
import Link from 'next/link';
import React from 'react'
import { BsBook, BsBookFill } from 'react-icons/bs'

export default function BookReviewsButton() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Link href={'/book-reviews'}>
            <button
                className="fixed bottom-5 left-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5 rem] 
                    border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center 
                    hover:scale-[1.15] active:scale-105 transition-all
                    dark:bg-gray-950"
            >
                {theme === "light" ? <BsBook /> : <BsBookFill />}
            </button>
        </Link>
    )
}
