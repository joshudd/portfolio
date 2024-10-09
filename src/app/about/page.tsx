import AboutView from '@/components/views/about-view'
import TransitionChild from "@/components/transition/transition-child";

export default function About() {
  return (
    <main>
      <TransitionChild id="about">
        <AboutView />
      </TransitionChild>
    </main>
  )
}