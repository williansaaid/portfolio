import './globals.css'
import { Montserrat } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Script from 'next/script'

const monserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-mon"
})

export const metadata = {
  title: 'Willians Jimenez',
  description: "Willians Jimenez' portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`bg-light dark:bg-dark w-full min-h-screen flex flex-col items-center ${monserrat.className}`}
      >
        <Script id='theme-switcher' strategy='beforeInteractive'>{`
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
        `}</Script>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
