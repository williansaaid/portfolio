import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GithubIcon } from './Icons'

interface Props {
    type: string,
    title: string,
    img: StaticImageData,
    link: string,
    github: string
}

const Project = ({ type, title, img, link, github }: Props) => {
    return (
        <article className='w-full flex flex-col items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-7 relative'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-[2rem] bg-dark'/>
            <Link href={link} target='_blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <Image src={img} alt={title} className='w-full h-auto object-cover'/>
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl'>
                    {type}
                </span>
                <Link href={link} target='_blank'
                    className='hover:text-primary duration-700'
                >
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>
                        {title}
                    </h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target='_blank'
                        className='text-dark text-lg rounded-lg border border-dark px-4 py-1 font-semibold hover:text-primary hover:border-primary duration-500'
                    >
                        Visit
                    </Link>
                    <Link href={github} target='_blank'
                        className='w-8 hover:text-primary duration-500'
                    >
                        <GithubIcon/>
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default Project