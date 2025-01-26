"use client";

import { DirectoryExplorer } from "@/components/directory-explorer";
import SharedHeader from "@/components/shared-header";
import { useHotkeys } from "@/hooks/useHotkeys";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useHotkeys(); // enable universal hotkeys

  return (
    <div className="relative min-h-screen w-full flex">
      <DirectoryExplorer />
      <div className="flex-1 ml-12">
        <SharedHeader />
        {children}
      </div>
    </div>
  );
} 