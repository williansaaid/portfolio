import './globals.css'
import { Montserrat } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

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
        className={`bg-light w-full min-h-screen flex flex-col items-center ${monserrat.className}`}
      >
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
