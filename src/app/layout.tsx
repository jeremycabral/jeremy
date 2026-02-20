import type { Metadata } from "next";
import "./globals.css";
import { ClientHydrationBoundary } from "./components/ClientHydrationBoundary";

export const metadata: Metadata = {
  title: "Growth Advisory",
  description:
    "Growth advisory, coaching, and playbooks to help founders scale to $100M+.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ClientHydrationBoundary>{children}</ClientHydrationBoundary>
      </body>
    </html>
  );
}
