import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Control Room",
  description: "Your personal control panel",
  appleWebApp: {
    capable: true,
    title: "Control Room",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: "#14131c",
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={`${spaceGrotesk.variable} h-full`}>
      <body className="h-full antialiased bg-[var(--background)]">
        <div className="app-shell">{children}</div>
      </body>
    </html>
  );
}
