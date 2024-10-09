import DesignView from '@/components/views/design-view'
import TransitionChild from "@/components/transition/transition-child";

export default function Design() {
  return (
    <main>
      <TransitionChild id="design">
        <DesignView />
      </TransitionChild>
    </main>
  )
}