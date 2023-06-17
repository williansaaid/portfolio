import Link from 'next/link'
import React from 'react'

interface Props {
    href: string
    text: string
    className?: string
    download?: boolean
    children?: React.JSX.Element
}

const Button = ({ href, className, download=false, text, children }: Props) => {
    return (
        <Link
            href={href}
            target="_blank"
            className={`flex items-center text-center justify-center ${className}`}
            download={download}
        >
            <p>{ text }</p>
            {children && <div className="w-6 h-auto ml-1">
                { children }
            </div>}
        </Link>
    )
}

export default Button