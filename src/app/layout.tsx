import './globals.css'
import { Montserrat } from 'next/font/google'

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
      <body className={monserrat.className}>{children}</body>
    </html>
  )
}
