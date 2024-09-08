import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_JP, Playfair_Display } from 'next/font/google'

const noto_sans_jp = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap',
})

const playfair_display = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Joshua Dickinson',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair_display.className}`}>
      <body>
        <div className="fade-in flex min-h-[400px] min-w-[240px] flex-col justify-center items-center">
          {children}
        </div>
      </body>
    </html>
  )
}
