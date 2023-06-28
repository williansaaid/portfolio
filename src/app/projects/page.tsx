"use client"
import AnimatedText from '@/components/AnimatedText';
import FeaturedProject from '@/components/FeaturedProject';
import Layout from '@/components/Layout';
import Project from '@/components/Project';
import Head from 'next/head';
import React from 'react';
import dondeSuena from '../../../public/images/dondeSuena.jpg';
import dondeSuena2 from '../../../public/images/dondeSuena2.jpg';
import ponder from '../../../public/images/ponder.jpg';
import pokemon from '../../../public/images/pokemonProject.jpeg';
import ups from '../../../public/images/ups.jpg';
import TransitionEffect from '@/components/TransitionEffect';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <>
            <Head>
                <title>Projects</title>
                <meta name='description' content='Projects done by Willians Jimenez'/>
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-start dark:text-light pt-8 md:pt-16 lg:pt-4'>
                <Layout
                    className='mb-24 sm:mb-48'
                >
                    <AnimatedText
                        text='Code. Create. Innovate.'
                        className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center mb-8 md:mb-16'
                    />

                    <div className='grid grid-cols-12 xl:gap-24 md:gap-y-32 gap-x-0 sm:gap-y-24 sm:gap-x-8 lg:gap-x-16'>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 1.3, duration: 1, ease: "easeInOut" }}
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 100 }
                            }}
                            className='col-span-12'
                        >
                            <FeaturedProject
                                title='Delivery Tracking App'
                                type='Featured Mobile Project'
                                img={ups}
                                link='https://github.com/williansaaid/DeliveryTrackingApp'
                                github='https://github.com/williansaaid/DeliveryTrackingApp'
                                summary='I developed a UPS delivery tracking app clone using React Native, integrating a GraphQL backend with Firebase using StepZen. The app included robust TypeScript code, seamless navigation with React Native Navigation, and styling with Tailwind CSS. React Native Elements enhanced the app design, while custom React Hooks were implemented for reusable functionality. This project provided valuable experience in backend integration, TypeScript usage, navigation implementation, styling, and improved design.'
                            />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
                            variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -50 }
                            }}
                            className='col-span-12 sm:col-span-6 pt-10'
                        >
                            <Project
                                title='Events Marketplace'
                                type='Web Project'
                                img={dondeSuena}
                                link='https://donde-suena.vercel.app/'
                                github='https://github.com/williansaaid/donde-suena-frontend'
                            />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                            variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: 50 }
                            }}
                            className='col-span-12 sm:col-span-6 pt-10'
                        >
                            <Project
                                title='Ponder Landing Page'
                                type='Web Project'
                                img={ponder}
                                link='https://ponder-beta.vercel.app'
                                github='https://github.com/LuisLeonPardo/Ponder'
                            />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{delay: 0.7, duration: 0.8, ease: "easeInOut" }}
                            variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -50 }
                            }}
                            className='col-span-12 sm:col-span-6 pt-10'
                        >
                            <Project
                                title='Pokemon Website'
                                type='Web Project'
                                img={pokemon}
                                link='https://pi-pokemon-williansaaid.vercel.app/'
                                github='https://github.com/williansaaid/PI-Pokemon'
                            />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                            variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: 50 }
                            }}
                            className='col-span-12 sm:col-span-6 pt-10'
                        >
                            <Project
                                title='Backend for Events Marketplace'
                                type='Backend Project'
                                img={dondeSuena2}
                                link='https://github.com/tomychi/DondeSuena-backend'
                                github='https://github.com/tomychi/DondeSuena-backend'
                            />
                        </motion.div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default Projects;