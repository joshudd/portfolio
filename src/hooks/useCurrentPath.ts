'use client';

import { usePathname } from 'next/navigation';

export function useCurrentPath() {
    const pathname = usePathname();

    return {
        isHome: pathname === '/',
        isAbout: pathname === '/about',
        isDesign: pathname === '/design',
        isProjects: pathname === '/projects',
        currentProject: pathname.startsWith('/projects/') ? pathname.split('/')[2] : null,
    };
} 