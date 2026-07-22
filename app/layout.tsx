import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Nabaz Designer",
    template: "%s | Nabaz Designer",
  },
  description: "Hi, I’m Nabaz, a 22-year-old Graphic Designer with over 8 years of experience creating modern and impactful visual designs. I specialize in Branding, Logo Design, Social Media Design, and Advertising. I also have experience in Photography, Video Editing, Cyber Security, and Live Streaming. My passion is helping brands build a strong identity through creative, high-quality digital experiences.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
