import AnimatedText from '@/components/AnimatedText';
import FeaturedProject from '@/components/FeaturedProject';
import Layout from '@/components/Layout';
import Project from '@/components/Project';
import Head from 'next/head';
import React from 'react';
import featuredPjtImg from '../../../public/images/projects-dark-desktop.png'

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
                                title='Github Clone'
                                type='Featured Project'
                                img={featuredPjtImg}
                                link='/'
                                github='/'
                                summary='Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vitae, nemo optio fuga necessitatibus veritatis iste tempore aliquid, consequuntur eum ullam! Eius quia amet id minima repellat nostrum odit inventore!'
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title='Github Clone'
                                type='Web Project'
                                img={featuredPjtImg}
                                link='/'
                                github='/'
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title='Github Clone'
                                type='Web Project'
                                img={featuredPjtImg}
                                link='/'
                                github='/'
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title='Github Clone'
                                type='Web Project'
                                img={featuredPjtImg}
                                link='/'
                                github='/'
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title='Github Clone'
                                type='Web Project'
                                img={featuredPjtImg}
                                link='/'
                                github='/'
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default Projects;