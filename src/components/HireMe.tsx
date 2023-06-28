import Link from 'next/link'
import React from 'react'
import { CircularText } from './Icons'

const HireMe = () => {
    return (
        <div
            className='absolute lg:fixed right-0 left-auto bottom-auto top-0 lg:left-4 lg:bottom-4 lg:top-auto lg:right-auto flex items-center justify-center overflow-hidden'
        >
            <div
                className='w-24 lg:w-48 h-auto flex items-center justify-center relative'
            >
                <CircularText className='fill-dark animate-spin-slow dark:fill-light'/>
                <Link
                    href="mailto:williansaaid@hotmail.com"
                    className='flex items-center justify-center absolute text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border-2 border-solid border-dark lg:w-20 lg:h-20 rounded-full font-semibold hover:bg-light hover:text-dark duration-500 dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:border-light w-12 h-12 text-xs lg:text-lg'
                >
                    Hire Me
                </Link>
            </div>
        </div>
    )
}

export default HireMe