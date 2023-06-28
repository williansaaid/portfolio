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
            <div className='absolute top-0 sm:-right-3 -z-10 sm:w-[101%] sm:h-[103%] sm:rounded-[2.5rem] sm:rounded-br-[2rem] bg-dark dark:bg-light -right-2 h-[102%] w-full rounded-[2rem] rounded-br-[1.5rem]'/>
            <Link href={link} target='_blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <Image src={img} alt={title} className='w-full h-auto object-cover'
                draggable={false}/>
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary dark:text-primaryDark font-medium text-base xs:text-xl'>
                    {type}
                </span>
                <Link href={link} target='_blank'>
                    <h2 className='my-2 w-full text-left text-2xl sm:text-4xl font-bold dark:text-light hover:text-primary dark:hover:text-primaryDark duration-700'>
                        {title}
                    </h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target='_blank'
                        className='text-dark dark:text-light text-lg rounded-lg border border-dark dark:border-light py-1 px-4 text-md sm:text-lg font-semibold hover:text-primary dark:hover:text-primaryDark hover:border-primary dark:hover:border-primaryDark duration-500'
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