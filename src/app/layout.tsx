import type { Metadata } from "next";
import type { ReactNode } from "react";
import SiteShell from "@/components/layout/SiteShell";
import "./globals.css";

export const metadata: Metadata = {
  title: "GLS-INTER SARL | Transport et transit au Cameroun",
  description:
    "Leader de l'excellence logistique, transport et transit au Cameroun et en Afrique centrale.",
  icons: {
    icon: "/images/favicon.jpg",
    shortcut: "/images/favicon.jpg",
    apple: "/images/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
