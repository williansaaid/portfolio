"use client"
import React from 'react'
import { motion } from 'framer-motion'

interface Props {
    text: string
    className?: string
}

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        transition: {
            delayChildren: 1,
            staggerChildren: 0.1
        }
    }
}
const singleWord = {
    initial: {
        opacity: 0,
        y: 50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delayChildren: 1,
            duration: 1,
        }
    }
}

const AnimatedText = ({text, className=""}: Props) => {
    return (
        <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden dark:text-light sm:py-0'>
            <motion.h1
                className={`inline-block w-full text-dark font-bold capitalize dark:text-light ${className}`}
                variants={quote}
                initial="initial"
                animate="animate"
            >
                {
                    text.split(" ").map((word, index) =>
                        <motion.span
                            key={index}
                            className="inline-block hover:text-primary dark:hover:text-primaryDark duration-500 cursor-default"
                            variants={singleWord}
                        >
                            {word}&nbsp;
                        </motion.span>
                    )
                }
            </motion.h1>
        </div>
    )
}

export default AnimatedText