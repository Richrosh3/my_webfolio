import React from 'react'

export default function Footer() {
  return (
    <footer className = "mb-10 px-4 text-center text-gray-500">
        <p className = "mb-2 text-xs italic">
            Resume Last Updated 12/1/2023
        </p>
        <p className = "text-xs">
            <span className="font-semibold">About this website: </span>
            Built with React/NextJS, TypeScript, and Tailwind CSS
        </p>
    </footer>
  )
}
