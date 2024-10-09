
import HomeView from '@/components/views/home-view'
import TransitionChild from "@/components/transition/transition-child";

export default function Home() {
  return (
      <main>
        <TransitionChild id="home">
          <HomeView />
        </TransitionChild>
      </main>
  )
}
