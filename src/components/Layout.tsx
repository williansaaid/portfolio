import React from 'react'

interface Props {
    children: React.ReactNode,
    className?: string
}

const Layout = ({children, className=""}: Props) => {
    return (
        <div className={`w-full h-full inline-block z-0 bg-light px-4 dark:bg-dark xl:px-24 lg:px-16 md:px-12 sm:px-8 xs:px-6 ${className}`}>
            {children}
        </div>
    )
}

export default Layout