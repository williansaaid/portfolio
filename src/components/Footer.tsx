import React from 'react'
import Button from './Button'
import Layout from './Layout'

const Footer = () => {
    return (
        <footer className='w-11/12 border-t-2 border-solid border-dark font-medium text-lg dark:border-light'>
            <Layout className="py-8 flex items-center justify-between dark:text-light">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div>
                    Build with &#9825; by Willians Jimenez
                </div>
                <Button text="Contact Me"
                    href="mailto:williansaaid@hotmail.com"
                    className='hover:shadow-[3px_3px_8px_rgba(0,0,0,0.3)] px-4 py-2 border-solid rounded-2xl duration-500 underline'
                />
            </Layout>
        </footer>
    )
}

export default Footer