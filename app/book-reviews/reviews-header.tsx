"use client";

import { motion } from 'framer-motion'
import React from 'react'

export default function ReviewsHeader() {
  return (
    <header className="flex-1 z-[999] relative justify-center items-center text-center">
      <motion.div className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white 
                            border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] 
                            backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full
                            dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"

        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <h1 
          className='flex bg-gradient-to-r from-rose-400 via-blue-500 to-green-400 bg-clip-text text-transparent animate-gradient w-full items-center justify-center px-3 py-[6px] text-3xl font-extrabold bg-300%
          '
        >
          Roshen's Book Reviews
        </h1>
      </motion.div>
    </header>
  )
}
