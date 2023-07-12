"use client"
import { motion } from "framer-motion"

import ShortenedUrls from "@/components/shortened-urls"
import UrlInput from "@/components/url-input"

export default function Home() {
  return (
    <>
      <section className="w-[90%] mx-auto mt-20 md:max-w-5xl">
        <header>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="text-3xl font-bold text-center md:text-6xl"
          >
            No need to be long,
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="mt-4 text-center md:text-2xl"
          >
            just be short.
          </motion.p>
        </header>

        <UrlInput />

        <ShortenedUrls />
      </section>

      <div className="fixed bottom-0 left-0 w-full p-4 text-xs text-center border-t text-slate-500 bg-white/20 backdrop-blur-sm">
        Built with Next, Tailwind, Upstash and Vercel.
      </div>
    </>
  )
}
