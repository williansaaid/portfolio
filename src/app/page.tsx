"use client"
import Head from 'next/head';
import AnimatedText from "@/components/AnimatedText"
import Button from "@/components/Button"
import HireMe from "@/components/HireMe"
import { LinkArrow } from "@/components/Icons"
import Layout from "@/components/Layout"
import Image from "next/image"
import devPic from "../../public/images/profile.jpg"
import TransitionEffect from "@/components/TransitionEffect"
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Head>
          <title>Projects</title>
          <meta name='description' content='Projects done by Willians Jimenez'/>
      </Head>
      <TransitionEffect />
      <main className="flex flex-col min-h-screen w-full bg-light dark:bg-dark dark:text-light pt-8 md:pt-16 lg:pt-0">
        <Layout className="">
          <div className="flex flex-col md:flex-row items-center justify-between w-full pb-12">
            <motion.div
              className="w-1/2 p-0 sm:p-8 lg:p-16 py-6"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 1, duration: 1, ease:"easeInOut"}}
            >
              <Image src={devPic}
                alt="Willians Jimenez"
                className="w-full h-auto select-none rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl" priority
                draggable={false}
                sizes="
                  (max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  50vw
                "
              />
            </motion.div>
            <div className="w-5/6 md:w-1/2 flex flex-col items-center justify-center text-justify md:text-left">
              <AnimatedText text="A little introduction about Me" className="text-3xl text-center xl:text-6xl md:text-left sm:text-5xl"/>
              <p className="my-4 text-base font-medium">
                An enthusiast Full Stack Web Developer that loves to learn new technologies and think out of the box to solve problems.
                It motivates me to be part of a team that allows me to share, through my knowledge and soft skills, solutions to problems or specific market needs.
              </p>
              <motion.div className="flex flex-col sm:flex-row items-center justify-center lg:self-start mt-2 gap-6 sm:pt-0 pt-4"
                initial={{x: 500, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{delay: 1, duration: 1, ease:"easeInOut"}}
              >
                <Button href="/en-resume.pdf" text="Resume"
                  download
                  className="bg-dark text-light px-4 py-2 rounded-2xl text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark duration-500 ease-in-out dark:bg-light dark:hover:bg-dark dark:hover:text-light dark:text-dark dark:hover:border-light"
                >
                  <LinkArrow/>
                </Button>
                <Button
                  href="mailto:williansaaid@hotmail.com"
                  text="Contact Me"
                  className="underline bg-transparent text-dark px-6 py-2 rounded-2xl text-lg font-semibold hover:shadow-[3px_3px_8px_rgba(0,0,0,0.3)] duration-500 ease-in-out dark:text-light"
                />
              </motion.div>
            </div>
          </div>
        </Layout>

        <HireMe/>
      </main>
    </>
  )
}
