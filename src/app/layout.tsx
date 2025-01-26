import "./globals.css";
import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import ClientLayout from "./client-layout";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Josh Dickinson",
  description: "Josh Dickinson's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inconsolata.className}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}