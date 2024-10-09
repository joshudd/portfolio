import './globals.css'
import type { Metadata } from 'next'
import { Inconsolata } from 'next/font/google'
// import TransitionProvider from '@/components/transition-provider'

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
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inconsolata.className}`}>
      <body>  
        <div className="min-h-[400px] min-w-[240px] flex flex-col justify-center items-center">
          {children}
        </div>
      </body>
    </html>
  )
}
