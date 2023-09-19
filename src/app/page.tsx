import Header from '@/components/Header'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Title from '@/components/Title'

export default function Home() {
  return (
    <main className=" bg-black">
      <Header/>
      <Title/>
      <About/>
      <Projects/>
      <Contact/>
    </main>
  )
}
