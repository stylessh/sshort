import Navbar from "@/components/navbar"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "sshort - url shortener",
  description:
    "No need to be long, just be short. Short all your urls with sshort.",

  authors: [
    {
      name: "stylessh",
      url: "https://stylessh.dev",
    },
  ],

  metadataBase: new URL("https://sshort.vercel.app"),

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sshort.vercel.app",
    siteName: "sshort",
    title: "sshort - url shortener",
    images: ["https://sshort.vercel.app/assets/og.png"],
  },

  // Twitter
  twitter: {
    title: "sshort - url shortener",
    description:
      "No need to be long, just be short. Short all your urls with sshort.",
    card: "summary_large_image",
    images: ["https://sshort.vercel.app/assets/og.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <main className="min-h-screen px-8 py-10 md:px-16">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
