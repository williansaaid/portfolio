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

const Projects = () => {
    return (
        <>
            <Head>
                <title>Projects</title>
                <meta name='description' content='Projects done by Willians Jimenez'/>
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout
                    className='pt-16'
                >
                    <AnimatedText
                        text='Code. Create. Innovate.'
                        className='text-6xl mb-16'
                    />

                    <div className='grid grid-cols-12 gap-24 gap-y-32'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title='Delivery Tracking App'
                                type='Featured Mobile Project'
                                img={ups}
                                link='https://github.com/williansaaid/DeliveryTrackingApp'
                                github='https://github.com/williansaaid/DeliveryTrackingApp'
                                summary='I developed a UPS delivery tracking app clone using React Native, integrating a GraphQL backend with Firebase using StepZen. The app included robust TypeScript code, seamless navigation with React Native Navigation, and styling with Tailwind CSS. React Native Elements enhanced the app design, while custom React Hooks were implemented for reusable functionality. This project provided valuable experience in backend integration, TypeScript usage, navigation implementation, styling, and improved design.'
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title='Events Marketplace'
                                type='Web Project'
                                img={dondeSuena}
                                link='https://donde-suena.vercel.app/'
                                github='https://github.com/williansaaid/donde-suena-frontend'
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title='Ponder Landing Page'
                                type='Web Project'
                                img={ponder}
                                link='https://ponder-beta.vercel.app'
                                github='https://github.com/LuisLeonPardo/Ponder'
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title='Pokemon Website'
                                type='Web Project'
                                img={pokemon}
                                link='https://pi-pokemon-williansaaid.vercel.app/'
                                github='https://github.com/williansaaid/PI-Pokemon'
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title='Backend for Events Marketplace'
                                type='Backend Project'
                                img={dondeSuena2}
                                link='https://github.com/tomychi/DondeSuena-backend'
                                github='https://github.com/tomychi/DondeSuena-backend'
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default Projects;