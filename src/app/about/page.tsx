"use client"
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profile from "../../../public/images/profile2.jpg"

const AnimatedNumbers = ({ value }: any) => {
    const ref = useRef(null);
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
            <main className='flex w-dull flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText
                        text='Passion fuels purpose!'
                        className='text-6xl mb-16'
                    />
                    <div
                        className='grid w-full grid-cols-8 gap-16'
                    >
                        <div className='col-span-3 flex flex-col items-start justify-start gap-2'>
                            <h2
                                className='mb-4 text-lg font-bold uppercase text-dark/75'
                            >
                                More about me
                            </h2>
                            <p className='font-medium'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate similique reiciendis ullam tempora accusantium odio enim unde ad, saepe, molestias voluptates! Mollitia quae deleniti nostrum impedit! Laborum debitis autem eligendi.
                            </p>
                            <p className='font-medium'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate similique reiciendis ullam tempora accusantium odio enim unde ad, saepe, molestias voluptates! Mollitia quae deleniti nostrum impedit! Laborum debitis autem eligendi.
                            </p>
                            <p className='font-medium'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate similique reiciendis ullam tempora accusantium odio enim unde ad, saepe, molestias voluptates! Mollitia quae deleniti nostrum impedit! Laborum debitis autem eligendi.
                            </p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark'/>
                            <Image src={profile} alt="Willians Jimenez"
                                className="w-full h-auto rounded-2xl"
                            />
                        </div>
                        <div className='col-span-2 flex flex-col items-end justify-between'>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimatedNumbers value={7}/>+
                                </span>
                                <h2
                                    className='text-xl font-medium capitalize text-dark/75'
                                >
                                    Learned technologies
                                </h2>
                            </div>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimatedNumbers value={5}/>+
                                </span>
                                <h2
                                    className='text-xl font-medium capitalize text-dark/75'
                                >
                                    Projects completed
                                </h2>
                            </div>
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default About