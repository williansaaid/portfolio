"use client"
import React from 'react'
import CustomLink from './CustomLink'
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from './Icons'
import Logo from './Logo'
import { motion } from "framer-motion"
import useThemeSwitcher from '@/hooks/useThemeSwitcher'

const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher();

    return (
        <header
            className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light'
        >
            <nav className='flex gap-8'>
                <CustomLink href='/' title='Home'/>
                <CustomLink href='/about' title='About'/>
                <CustomLink href='/projects' title='Projects'/>
            </nav>
            <nav className='flex items-center justify-center flex-wrap gap-6'>
                <motion.a
                    href="https://github.com/williansaaid"
                    target="_blank"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6"
                >
                    <GithubIcon/>
                </motion.a>
                <motion.a
                    href="https://www.linkedin.com/in/williansaaid/"
                    target="_blank"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6"
                >
                    <LinkedInIcon/>
                </motion.a>

                <button
                    onClick={() => setMode( mode === "light" ? "dark" : "light")}
                    className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                >
                    {
                        mode === "dark" ?
                        <SunIcon className='fill-dark'/> :
                        <MoonIcon className='fill-dark'/>
                    }
                </button>
            </nav>
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo/>
            </div>
        </header>
    )
}

export default NavBar