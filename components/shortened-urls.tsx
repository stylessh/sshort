"use client"

import { useEffect } from "react"
import { useUrlStore } from "@/store/url"
import { motion } from "framer-motion"
import { useAutoAnimate } from "@formkit/auto-animate/react"

import UrlCard from "./url-card"

function ShortenedUrls() {
  const [parent] = useAutoAnimate()

  const { storedUrls, getUrls } = useUrlStore()

  useEffect(() => {
    getUrls()
  }, [getUrls])

  return (
    <motion.ul
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 1 }}
      className="grid grid-cols-1 gap-4 mb-10 sm:grid-cols-2 md:grid-cols-3"
      ref={parent}
    >
      {storedUrls.map((url) => (
        <UrlCard key={url.id} url={url} />
      ))}
    </motion.ul>
  )
}

export default ShortenedUrls
