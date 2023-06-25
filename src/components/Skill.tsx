import React from 'react'
import { motion } from 'framer-motion'

interface Props {
    name: string
    x: string
    y: string
}

const Skill = ({ name, x, y }: Props) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light dark:text-dark text-light shadow-dark py-3 px-6 cursor-pointer absolute'
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