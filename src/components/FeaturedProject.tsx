import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GithubIcon } from './Icons'

interface Props {
    type: string,
    title: string,
    summary: string,
    img: StaticImageData,
    link: string,
    github: string
}

const FeaturedProject = ({ type, title, summary, img, link, github }: Props) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-[2rem] bg-dark'/>
            <Link href={link} target='_blank'
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
            >
                <Image src={img} alt={title} className='w-full h-auto object-cover'/>
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl'>
                    {type}
                </span>
                <Link href={link} target='_blank'
                    className='hover:text-primary duration-700'
                >
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>
                        {title}
                    </h2>
                </Link>
                <p className='my-2 font-medium text-dark'>
                    {summary}
                </p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank'
                        className='w-10 hover:text-primary duration-500'
                    >
                        <GithubIcon/>
                    </Link>
                    <Link href={link} target='_blank'
                        className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:bg-primary duration-500'
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default FeaturedProject