"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const host = process.env.NEXT_PUBLIC_HOST || "http://localhost:3000"

function ShortenedUrls() {
  const [storedUrls, setStoredUrls] = useState<Url[]>([])

  useEffect(() => {
    const urls = JSON.parse(localStorage.getItem("sshorten-urls") || "[]")
    setStoredUrls(urls)
  }, [])

  return (
    <motion.ul
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 1 }}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
    >
      {storedUrls.map((url) => (
        <li
          key={url.id}
          className="p-4 transition-all bg-white border rounded-md hover:border-black"
        >
          <a
            href={`${host}/${url.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:underline"
          >
            {host}/{url.id}
          </a>
          <p className="mt-2 text-sm text-gray-500">{url.url}</p>
        </li>
      ))}
    </motion.ul>
  )
}

export default ShortenedUrls
