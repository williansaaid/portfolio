import React, { useRef } from 'react'
import LiIcon from './LiIcon'
import { motion } from 'framer-motion'

interface Props {
    type: string,
    time: string,
    place: string,
    info: string
}

const EducationDetails = ({ type, time, place, info }: Props) => {

    const ref = useRef(null)

    return (
        <li
            ref={ref}
            className='my-8 first:mt-0 last:mb-0 w-[80%] md:w-[60%] mx-auto flex flex-col justify-between'
        >
            <LiIcon reference={ref}/>
            <motion.div
                initial={{
                    y: 50
                }}
                whileInView={{
                    y: 0
                }}
                transition={{
                    duration: 0.5,
                    type: 'spring'
                }}
            >
                <h3
                    className='capitalize font-bold text-lg xs:text-xl sm:text-2xl'
                >
                    {type}&nbsp;
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 text-sm sm:text-lg'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full text-sm md:text-lg'>
                    {info}
                </p>
            </motion.div>
        </li>
    )
}

export default EducationDetails;