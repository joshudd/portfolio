import { notFound } from "next/navigation";

import ProjectDetailView from "@/components/projects/project-detail-view";
import TransitionChild from "@/components/transition/transition-child";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.link,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.link === params.slug);

  if (!project) {
    notFound();
  }
  return (
    <main>
      <TransitionChild id="projects">
        <ProjectDetailView project={project} />
      </TransitionChild>
    </main>
  );
}
