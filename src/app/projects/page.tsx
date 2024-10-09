import ProjectsView from '@/components/views/projects-view';
import TransitionChild from "@/components/transition/transition-child";
export default function ProjectsPage({  
  searchParams,
}: {  
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main>
      <TransitionChild id="projects">
        <ProjectsView searchParams={searchParams} />
      </TransitionChild>
    </main>
  );
}
