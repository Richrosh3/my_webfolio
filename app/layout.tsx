import './globals.css'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import ThemeSwitch from '@/components/theme-switch'
import ThemeContextProvider from '@/context/theme-context'
import { Providers } from './providers'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Roshen's Webfolio",
  description: "Roshen is a junior software engineer eager to learn different branches of CS!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-slate-300 text-gray-950 relative pt-28 sm:pt-36
                        dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className='bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] -z-10
                        h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]
                        dark:bg-[#946263]'/>
        <div className='bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] -z-10
                        h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem]
                        md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]
                        dark:bg-[#676394]'/>
        <Providers>
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              {children}
              <Toaster position='bottom-left' />
              <ThemeSwitch />
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
        </Providers>
      </body>
    </html>
  )
}
