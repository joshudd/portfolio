"use client"

import HomeView from '@/components/views/home-view'
import ProjectsView from '@/components/views/projects-view'
import { useView } from '@/contexts/view-context'

const views = {
	"HOME": HomeView,
	"PROJECTS": ProjectsView,
};
  
export default function Home() {
  type ViewKey = keyof typeof views;
  const { currentView } = useView() as { currentView: ViewKey };
  const View = views[currentView];

  return (
    <main className={`flex min-h-[400px] min-w-[240px] flex-col justify-center items-center`}>
      <View />
    </main>
  )
}
