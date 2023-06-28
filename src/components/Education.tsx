import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import EducationDetails from './EducationDetails'

const Education = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ['start end', 'center start']
        }
    );

    return (
        <>
            <div className='my-64 mb-80'>
                <h2 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-32 w-full text-center'>
                    Education
                </h2>
                <div
                    ref={ref}
                    className='w-full md:w-[90%] lg:w-[75%] mx-auto relative'
                >
                    <motion.div
                        style={{
                            scaleY: scrollYProgress
                        }}
                        className='absolute inset-0 left-[20px] top-0 w-[2px] h-full origin-top dark:bg-primaryDark md:w-[4px] xs:left-[30px] md:left-9 rounded-lg blur'/>
                    <motion.div
                        style={{
                            scaleY: scrollYProgress
                        }}
                        className='absolute left-[20px] top-0 w-[2px] h-full bg-dark origin-top dark:bg-primaryDark md:w-[4px] xs:left-[30px] md:left-9'
                    />
                    <ul className='w-full flex flex-col items-center justify-between ml-2 xs:ml-4'>
                        <EducationDetails
                            type='Full Stack Developer'
                            place='Henry'
                            time='Oct 2022 - Oct 2022'
                            info='Web Developer Henry Bootcamp, +800 theoretical/coding hours.'
                        />
                        <EducationDetails
                            type='Professional Git and GitHub course'
                            place='Platzi'
                            time='Dec 2022'
                            info='Git and Github training for good practices.'
                        />
                        <EducationDetails
                            type='Practical Frontend Developer course'
                            place='Platzi'
                            time='Jan 2023'
                            info='Design and development of frontend applications.'
                        />
                        <EducationDetails
                            type='Cybersecurity Degree'
                            place='Saint Leo University'
                            time='Mar 2023 - Present'
                            info='Protect and prevent the leaking of relevant data in a computer system.'
                        />
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Education;