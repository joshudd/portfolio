'use client'

import { useRouter } from 'next/navigation'
import Link, { LinkProps } from 'next/link'
interface TransitionLinkProps extends LinkProps {
    children: React.ReactNode
    href: string
    className?: string
    onMouseEnter?: () => void
    onMouseLeave?: () => void
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default function TransitionLink({ href, children, ...props }: TransitionLinkProps) {
  const router = useRouter()

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const body = document.querySelector('body')
    body?.classList.add('page-transition') // exit animation
    await sleep(200)
    router.push(href)
    await sleep(200)
    body?.classList.remove('page-transition') // enter animation
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  )
}