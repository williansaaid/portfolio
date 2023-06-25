import AnimatedText from "@/components/AnimatedText"
import Button from "@/components/Button"
import HireMe from "@/components/HireMe"
import { LinkArrow } from "@/components/Icons"
import Layout from "@/components/Layout"
import Image from "next/image"
import devPic from "../../public/images/devPic.png"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-light dark:bg-dark dark:text-light">
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image src={devPic}
              alt="Willians Jimenez"
              className="w-full h-auto" priority
              sizes="
                (max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw
              "
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText text="A little introduction about Me" className="text-6xl text-left"/>
            <p className="my-4 text-base font-medium">
              An enthusiast Full Stack Web Developer that loves to learn new technologies and think out of the box to solve problems.
              It motivates me to be part of a team that allows me to share, through my knowledge and soft skills, solutions to problems or specific market needs.
            </p>
            <div className="flex items-center self-start mt-2 gap-6">
              <Button href="/en-resume.pdf" text="Resume"
                download
                className="!Important bg-dark text-light px-4 py-2 rounded-2xl text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark duration-500 ease-in-out dark:bg-light dark:hover:bg-dark dark:hover:text-light dark:text-dark dark:hover:border-light"
              >
                <LinkArrow/>
              </Button>
              <Button
                href="mailto:williansaaid@hotmail.com"
                text="Contact Me"
                className="underline bg-transparent text-dark px-6 py-2 rounded-2xl text-lg font-semibold hover:shadow-[3px_3px_8px_rgba(0,0,0,0.3)] duration-500 ease-in-out dark:text-light"
              />
            </div>
          </div>
        </div>
      </Layout>

      <HireMe/>
    </main>
  )
}
