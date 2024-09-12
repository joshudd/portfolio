import ProjectDetailView from '@/components/views/project-detail-view'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.link,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = projects.find((p) => p.link === params.slug)

    if (!project) {
      notFound()
    }
    return <ProjectDetailView project={project} />
}