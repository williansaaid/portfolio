import React, { useRef } from 'react'
import Details from './Details'
import { motion, useScroll } from 'framer-motion'

const Experience = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ['start end', 'center start']
        }
    );

    return (
        <>
            <div className='my-64'>
                <h2 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-32 w-full text-center'>
                    Experience
                </h2>
                <div
                    ref={ref}
                    className='w-full md:w-[90%] lg:w-[75%] mx-auto relative'
                >
                    <motion.div
                        style={{
                            scaleY: scrollYProgress
                        }}
                        className='absolute left-[20px] top-0 w-[2px] h-full bg-dark origin-top dark:bg-primaryDark md:w-[4px] xs:left-[30px] md:left-9'
                    />
                    <ul className='w-full flex flex-col items-center justify-between ml-2 xs:ml-4'>
                        <Details
                            position='Full Stack Developer'
                            company='Henry'
                            companyLink='https://www.soyhenry.com/'
                            time='Oct 2022 - Oct 2022'
                            address='Buenos Aires, Argentina'
                            work='Design and develop a Pokemon based Single Page Application with search, filters, sorting and creation functionalities.'
                        />
                        <Details
                            position='Full Stack Developer'
                            company='Henry'
                            companyLink='https://www.soyhenry.com/'
                            time='Oct 2022 - Dec 2022'
                            address='Buenos Aires, Argentina'
                            work='Using that tech stack I built controlled forms, image hosting in the cloud, UI/UX design, dashboards and implementation of payments gateways.'
                        />
                        <Details
                            position='Frontend Developer'
                            company='Libertum'
                            companyLink='https://ponder-beta.vercel.app/'
                            time='Jan 2023 - Feb 2023'
                            address='Buenos Aires, Argentina'
                            work='Single Page Application development of Ponder and Libertum projects, using frontend technologies such as React, TailwindCSS and Framer Motion'
                        />
                        <Details
                            position='Full Stack Mobile Developer'
                            company='Wally.Io'
                            companyLink='#'
                            time='Jan 2023 - Feb 2023'
                            address='Buenos Aires, Argentina'
                            work='Development of "Flowbook App", a money management/financial flow app, for mobile devices.'
                        />
                        <Details
                            position='Frontend Mobile Developer'
                            company='Maui'
                            companyLink='#'
                            time='Mar 2023 - Current'
                            address='Buenos Aires, Argentina'
                            work='Development of MAUI, a finance app for recording money transactions, show your balance, debts and contacts, app designed for mobile devices.'
                        />
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Experience