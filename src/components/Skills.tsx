import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-48 md:mt-64 w-full text-center mb-4 md:mb-8'>
                Skills
            </h2>
            <div className='w-full h-[50vh] sm:h-[60vh] lg:h-[80vh] relative flex items-center justify-center rounded-full bg-circularLightSm dark:bg-circularDarkSm sm:bg-circularLightMd sm:dark:bg-circularDarkMd md:bg-circularLightLg md:dark:bg-circularDarkLg lg:bg-circularLight lg:dark:bg-circularDark'>
                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light text-light dark:text-dark shadow-dark h-12 w-12 sm:h-14 sm:w-14 md:h-20 md:w-20 cursor-pointer text-md md:text-lg lg:text-xl'
                    whileHover={{
                        scale: 1.2
                    }}
                >
                    Web
                </motion.div>

                <Skill name='CSS' x='-8vw' y='-13vw' />
                <Skill name='HTML' x='-25vw' y='-2vw' />
                <Skill name='React' x='-24vw' y='-16vw' />
                <Skill name='Node' x='21vw' y='5vw' />
                <Skill name='React Native' x='19vw' y='-9vw' />
                <Skill name='Javascript' x='1vw' y='-20vw' />
                <Skill name='Typescript' x='-2vw' y='22vw' />
                <Skill name='Redux' x='24vw' y='-18vw' />
                <Skill name='MongoDB' x='-10vw' y='13vw' />
                <Skill name='TanStack Query' x='25vw' y='14vw' />
                <Skill name='NextJS' x='-25vw' y='12vw' />
                <Skill name='Express' x='32vw' y='-2vw' />
                <Skill name='PostgreSQL' x='-37vw' y='5vw' />
            </div>
        </>
    )
}

export default Skills