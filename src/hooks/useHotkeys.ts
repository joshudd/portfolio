import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const useHotkeys = () => {
  const router = useRouter();

  useEffect(() => {
    // handle keyboard shortcuts
    const handleKeyPress = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT') return; // ignore if typing in input
      
      switch(e.key.toLowerCase()) {
        case 'a': router.push('/'); break;
        case 's': router.push('/about'); break;
        case 'd': router.push('/design'); break;
        case 'f': router.push('/projects'); break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [router]);
};