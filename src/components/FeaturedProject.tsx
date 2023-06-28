import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GithubIcon } from './Icons'

interface Props {
    type: string,
    title: string,
    summary: string,
    img: any,
    link: string,
    github: string
}

const FeaturedProject = ({ type, title, summary, img, link, github }: Props) => {
    return (
        <article className='w-full flex flex-col lg:flex-row items-center justify-between rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-4 xs:p-8 lg:p-12 relative'>
            <div className='absolute top-0 sm:-right-3 -z-10 sm:w-[101%] sm:h-[103%] sm:rounded-[2.5rem] sm:rounded-br-[2rem] bg-dark dark:bg-light -right-2 h-[101%] w-full rounded-[2rem] rounded-br-[1.5rem]'/>
            <Link href={link} target='_blank'
                className='w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg'
            >
                <Image src={img} alt={title} className='w-full h-auto object-cover' priority
                sizes="
                    (max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw
                "
                />
            </Link>
            <div className='w-full lg:w-1/2 flex flex-col items-start justify-between pl-0 pt-6 lg:pt-0 lg:pl-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-base xs:text-xl'>
                    {type}
                </span>
                <Link href={link} target='_blank'
                >
                    <h2 className='my-2 w-full text-left text-2xl sm:text-4xl font-bold dark:text-light hover:text-primary dark:hover:text-primaryDark duration-700'>
                        {title}
                    </h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light text-sm sm:text-lg'>
                    {summary}
                </p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank'
                        className='w-8 sm:w-10 hover:text-primary dark:hover:text-primaryDark dark:text-light duration-500'
                    >
                        <GithubIcon/>
                    </Link>
                    <Link href={link} target='_blank'
                        className='ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark py-2 px-4 sm:py-2 sm:px-6 text-md sm:text-lg font-semibold hover:bg-primary dark:hover:bg-primaryDark duration-500'
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default FeaturedProject