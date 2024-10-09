'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const pathname = usePathname()

  // useEffect(() => {
  //   console.log('pathname', pathname)
  //   setIsTransitioning(true)
  //   tran = true
  //   // Remove the delay and use requestAnimationFrame for the next render cycle
  //   requestAnimationFrame(() => {
  //     requestAnimationFrame(() => {
  //       tran = false
  //       setIsTransitioning(false)
  //     })
  //   })
  // }, [pathname])

  return (
    <div
      className={`transition-opacity duration-500 ease-out ${
        isTransitioning ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {children}
    </div>
  )
}