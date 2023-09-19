import Header from '@/components/Header'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Title from '@/components/Title'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between w-full mx-auto md:py-24 py-14 bg-black">
      <Header/>
      <Title/>
      <About/>
      <Projects/>
      <Contact/>
    </main>
  )
}
