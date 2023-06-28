"use client"
import React, { useState } from 'react'
import CustomLink from './CustomLink'
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from './Icons'
import Logo from './Logo'
import { motion } from "framer-motion"
import useThemeSwitcher from '@/hooks/useThemeSwitcher'
import CustomMobileLink from './CustomMobileLink'

const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header
            className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative'
        >
            <div className='absolute top-10 left-16'>
                <button
                    className='flex lg:hidden flex-col justify-center items-center'
                    onClick={handleClick}
                >
                    <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
                    <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                    <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
                </button>
            </div>

            <div className='w-full hidden justify-between items-center lg:flex'>
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
            </div>

            { isOpen ?
                <motion.div
                    className='min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/70 text-light dark:text-dark dark:bg-light/70 rounded-lg backdrop-blur-md py-32 gap-6'
                    initial={{scale: 0, opacity: 0, x: "-50%", y: "-50%"}}
                    animate={{scale: 1, opacity: 1}}
                >
                    <button
                        className='flex lg:hidden flex-col justify-center items-center'
                        onClick={handleClick}
                    >
                        <span className={`bg-light dark:bg-dark block h-0.5 w-6 rounded-sm duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
                        <span className={`bg-light dark:bg-dark block h-0.5 w-6 rounded-sm my-0.5 duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                        <span className={`bg-light dark:bg-dark block h-0.5 w-6 rounded-sm duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
                    </button>
                    <nav className='flex items-center flex-col justify-center gap-6'>
                        <CustomMobileLink href='/' title='Home' toggle={handleClick}/>
                        <CustomMobileLink href='/about' title='About' toggle={handleClick}/>
                        <CustomMobileLink href='/projects' title='Projects' toggle={handleClick}/>
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
                            className={`flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-light text-dark" : "bg-dark text-light"}`}
                        >
                            {
                                mode === "dark" ?
                                <SunIcon className='fill-light'/> :
                                <MoonIcon className='fill-light'/>
                            }
                        </button>
                    </nav>
                </motion.div> : null
            }

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo/>
            </div>
        </header>
    )
}

export default NavBar