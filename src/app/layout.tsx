import type { Metadata } from "next";
import { Space_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Shubham Panwar | AI & Machine Learning Developer",
  description: "Portfolio of Shubham Panwar, Python Developer specializing in FastAPI, LLM-based systems, and Machine Learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.variable} ${dmSans.variable} antialiased`}
      >
        <div className="noise-bg"></div>
        {children}
      </body>
    </html>
  );
}
