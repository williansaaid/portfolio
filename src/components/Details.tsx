import React, { useRef } from 'react'
import LiIcon from './LiIcon'
import { motion } from 'framer-motion'

interface Props {
    position: string,
    company: string,
    companyLink: string,
    time: string,
    address: string,
    work: string
}

const Details = ({ position, company, companyLink, time, address, work }: Props) => {

    const ref = useRef(null)

    return (
        <li
            ref={ref}
            className='my-8 first:mt-0 last:mb-0 w-[80%] md:w-[60%] mx-auto flex flex-col items-center justify-between'
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
                    {position}&nbsp;
                    <a href={companyLink}
                        target='_blank'
                        className='text-primary dark:text-primaryDark capitalize'
                    >
                        @{company}
                    </a>
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 text-sm sm:text-lg'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full text-sm md:text-lg'>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

export default Details