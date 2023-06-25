import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GithubIcon } from './Icons'

interface Props {
    type: string,
    title: string,
    img: any,
    link: string,
    github: string
}

const Project = ({ type, title, img, link, github }: Props) => {
    return (
        <article className='w-full flex flex-col items-center justify-between rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-7 relative'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-[2rem] bg-dark dark:bg-light'/>
            <Link href={link} target='_blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <Image src={img} alt={title} className='w-full h-auto object-cover'/>
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl'>
                    {type}
                </span>
                <Link href={link} target='_blank'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light hover:text-primary dark:hover:text-primaryDark duration-700'>
                        {title}
                    </h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target='_blank'
                        className='text-dark dark:text-light text-lg rounded-lg border border-dark dark:border-light px-4 py-1 font-semibold hover:text-primary dark:hover:text-primaryDark hover:border-primary dark:hover:border-primaryDark duration-500'
                    >
                        Visit
                    </Link>
                    <Link href={github} target='_blank'
                        className='w-8 hover:text-primary dark:hover:text-primaryDark dark:text-light duration-500'
                    >
                        <GithubIcon/>
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default Project