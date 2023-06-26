"use client"
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

interface Props {
    href: string;
    title: string;
    toggle: () => void;
    className?: string;
}


const CustomMobileLink = ({href, title, className="", toggle}: Props) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = () => {
        toggle();
        router.push(href)
    }

    return (
        <button className={`${className} relative group`}
            onClick={handleClick}
        >
            {title}
            <span
                className={`h-[1px] inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 bg-light dark:bg-dark ${pathname === href ? "w-full" : "w-0"}`}
            >
                &nbsp;
            </span>
        </button>
    )
}

export default CustomMobileLink;