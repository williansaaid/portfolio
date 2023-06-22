import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center'>
                Skills
            </h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light shadow-dark h-20 w-20 cursor-pointer'
                    whileHover={{
                        scale: 1.5
                    }}
                >
                    Web
                </motion.div>

                <Skill name='CSS' x='-3vw' y='-7vw' />
                <Skill name='HTML' x='-25vw' y='-2vw' />
                <Skill name='React' x='-14vw' y='-12vw' />
                <Skill name='Node' x='17vw' y='5vw' />
                <Skill name='React Native' x='15vw' y='-7vw' />
                <Skill name='Javascript' x='1vw' y='-18vw' />
                <Skill name='Typescript' x='-2vw' y='15vw' />
                <Skill name='Redux' x='21vw' y='-14vw' />
                <Skill name='MongoDB' x='-10vw' y='5vw' />
                <Skill name='TanStack Query' x='20vw' y='14vw' />
                <Skill name='NextJS' x='-25vw' y='12vw' />
                <Skill name='Express' x='32vw' y='-2vw' />
                <Skill name='PostgreSQL' x='-37vw' y='5vw' />
            </div>
        </>
    )
}

export default Skills