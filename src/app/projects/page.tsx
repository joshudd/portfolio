import { Suspense } from 'react';
import ProjectsView from '@/components/views/projects-view';

export default function ProjectsPage({  
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <ProjectsView params={params} searchParams={searchParams} />
  );
}
