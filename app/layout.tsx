import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "./provider";
import SessionProvider  from "./SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloned E-Commerce",
  description: "E-Commerce, high-end women dresses niche",
};


export default function RootLayout({
  children, session
}: Readonly<{
  children: React.ReactNode;
  session: any
}>) {
  return (
      <html lang="en">
        <NextAuthProvider session={session}>
          <body className={inter.className}>
            <SessionProvider>
              <main className="font-sans">
                {children}
              </main>
            </SessionProvider>
          </body>
        </NextAuthProvider>
      </html>
  );
}
