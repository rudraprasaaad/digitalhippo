import Navbar from "@/components/Navbar";
import { cn, constructMetadata } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <main className="relative flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow flex-1">{children}</div>
        </main>

        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
