"use client"
import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { CornerDownLeft } from "lucide-react"

import { motion } from "framer-motion"
import { useUrlStore } from "@/store/url"

function UrlInput() {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const { addUrl } = useUrlStore()

  const handleSubmit = async () => {
    setError("")
    if (!url) return

    // validate url
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/

    if (!urlRegex.test(url)) {
      setError("Enter a valid url")
      return
    }

    setLoading(true)

    const res = await fetch("/api/url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    })

    const data = await res.json()

    if (data.error) {
      alert(data.error)
      setLoading(false)
      return
    }

    const savedUrl = {
      id: data.urlId,
      url,
    }

    // save to local storage
    const urls = JSON.parse(localStorage.getItem("sshorten-urls") || "[]")
    urls.push(savedUrl)

    localStorage.setItem("sshorten-urls", JSON.stringify(urls))

    // reset input
    setUrl("")
    setLoading(false)

    // add to store
    addUrl(savedUrl)
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0.5 }}
      className="relative mx-auto my-12 md:w-1/2"
    >
      <Input
        placeholder="Enter your url (https://example.com)"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        onKeyUp={(e) => e.key === "Enter" && handleSubmit()}
        disabled={loading}
        className="pr-12"
      />

      <Button
        className="absolute top-[1.5px] right-2"
        size="sm"
        variant="ghost"
        onClick={handleSubmit}
      >
        <CornerDownLeft size={14} />
      </Button>

      {error && <p className="mt-2 text-xs italic text-red-500">{error}</p>}
    </motion.article>
  )
}

export default UrlInput
