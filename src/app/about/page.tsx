"use client"
import AnimatedText from '@/components/AnimatedText'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Layout from '@/components/Layout'
import Skills from '@/components/Skills'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profile from "../../../public/images/profile2.jpg"

const AnimatedNumbers = ({ value }: any) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, {once: true})

    useEffect(() => {
        if(isInView){
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const About = () => {
    return (
        <>
            <Head>
                <title>About</title>
                <meta name='description' content='More info about Willians Jimenez'/>
            </Head>
            <main className='flex w-dull flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText
                        text='Passionate. Driven. Creative.'
                        className='text-6xl mb-16'
                    />
                    <div
                        className='grid w-full grid-cols-8 gap-16'
                    >
                        <div className='col-span-3 flex flex-col items-start justify-start gap-2'>
                            <h2
                                className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'
                            >
                                More about me
                            </h2>
                            <p className='font-medium'>
                                I'm a Full Stack Developer with a focus on front-end development. I have experience in PERN Stack, Typescript, React Native, MongoDB, and more. I bring creative thinking, problem-solving autonomy, and effective communication to boost individual and teamwork performance.
                            </p>
                            <p className='font-medium'>
                                I have a broad range of skills in various technologies including Typescript, React, React Native, Next.js, Redux, Node.js, Express, PostgreSQL, MongoDB, and more. I'm also proficient in front-end styling with TailwindCSS and StyledComponents. My expertise covers both front-end and back-end development.
                            </p>
                            <p className='font-medium'>
                                I follow an agile approach, particularly SCRUM, to manage projects efficiently. With my technical skills, problem-solving abilities, and passion for creating great user experiences, I strive to exceed expectations and contribute to project success.
                            </p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-light'/>
                            <Image src={profile} alt="Willians Jimenez"
                                className="w-full h-auto rounded-2xl" priority
                                sizes="
                                    (max-width: 768px) 100vw,
                                    (max-width: 1200px) 50vw,
                                    50vw
                                "
                            />
                        </div>
                        <div className='col-span-2 flex flex-col items-end justify-between'>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimatedNumbers value={7}/>+
                                </span>
                                <h2
                                    className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'
                                >
                                    Learned technologies
                                </h2>
                            </div>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimatedNumbers value={5}/>+
                                </span>
                                <h2
                                    className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'
                                >
                                    Projects completed
                                </h2>
                            </div>
                        </div>
                    </div>

                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    )
}

export default About