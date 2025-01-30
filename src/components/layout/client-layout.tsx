"use client";

import { DirectoryExplorer } from "@/components/layout/directory-explorer";
import { SharedHeader } from "@/components/layout/shared-header";
import { useHotkeys } from "@/hooks/useHotkeys";
import { ThemeProvider } from "@/context/theme-context";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useHotkeys(); // enable universal hotkeys

  return (
    <ThemeProvider>
      <div className="relative min-h-screen w-full flex">
        <DirectoryExplorer />
        <div className="flex-1">
          <SharedHeader />
          {children}
        </div>
      </div>
    </ThemeProvider>
  );
}
