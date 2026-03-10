import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/navbar/Topbar";
import Sidebar from "@/components/navbar/Sidebar";
import ParticlesBackground from "@/components/particles/ParticlesBackground";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Praveen Kumar Reddy",
  description: "Portfolio of Praveen Kumar Reddy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} antialiased min-h-screen lg:h-screen overflow-x-hidden lg:overflow-hidden bg-background text-text font-sora`}
      >
        <Topbar />
        <Sidebar />
        <ParticlesBackground />
        {children}
      </body>
    </html>
  );
}
