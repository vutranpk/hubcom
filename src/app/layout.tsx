import type { Metadata } from "next";
import { Outfit, Saira } from "next/font/google";
import { Header } from "@/components/ui/header";
import { ChatWidget } from "@/components/ui/chat-widget";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const saira = Saira({
  variable: "--font-serif",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "HubCom | Premium Tech Solutions",
  description: "High-end tech solutions and enterprise infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${saira.variable} h-full antialiased overflow-x-hidden w-full dark`}
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden w-full bg-background text-foreground">
        <Header />
        <main className="flex-grow">{children}</main>
        <ChatWidget />
      </body>
    </html>
  );
}
