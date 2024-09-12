import './globals.css'
import type { Metadata } from 'next'
import { Inconsolata } from 'next/font/google'

const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
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
    <html lang="en" className={`${inconsolata.className}`}>
      <body>
        <div className="fade-in flex min-h-[400px] min-w-[240px] flex-col justify-center items-center">
          {children}
        </div>
      </body>
    </html>
  )
}
