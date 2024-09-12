import React, { Suspense } from 'react';
import ProjectsView from '@/components/views/projects-view';

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectsView />
    </Suspense>
  );
}