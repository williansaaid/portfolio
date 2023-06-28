import React from 'react'
import { motion } from 'framer-motion'

interface Props {
    name: string
    x: string
    y: string
}

const Skill = ({ name, x, y }: Props) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold sm:bg-dark sm:hover:bg-primary sm:dark:bg-light sm:dark:hover:bg-primaryDark sm:dark:text-dark sm:text-light shadow-dark py-1.5 px-3 md:py-2 md:px-4 lg:py-3 lg:px-6 cursor-pointer absolute text-sm md:text-md lg:text-lg bg-transparent dark:bg-transparent text-dark dark:text-light duration-500 ease-in-out'
            whileHover={{
                scale: 1.1
            }}
            initial={{
                x: 0,
                y: 0
            }}
            whileInView={{
                x: x,
                y: y,
                transition: {
                    duration: 1.5
                }
            }}
            viewport={{
                once: true
            }}
        >
            { name }
        </motion.div>
    )
};

export default Skill