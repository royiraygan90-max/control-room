import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Control Room",
  description: "לוח בקרה אישי",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${geist.variable} h-full`}>
      <body className="h-full flex flex-row-reverse antialiased">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-[var(--background)]">
          {children}
        </main>
      </body>
    </html>
  );
}
