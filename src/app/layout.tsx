import './globals.css'
import type { Metadata } from 'next'
import { Overpass_Mono } from 'next/font/google'

const overpass_mono = Overpass_Mono({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Joshua Dickinson',
  description: 'Portfolio of Joshua Dickinson',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={overpass_mono.className}>{children}</body>
    </html>
  )
}
