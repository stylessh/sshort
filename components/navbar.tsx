"use client"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { Github } from "lucide-react"

import { motion } from "framer-motion"

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="flex items-center justify-between"
    >
      <Link href="/" className="text-xl font-bold">
        sshort
      </Link>

      <ul className="flex items-center gap-6">
        <li>
          <a
            href="https://github.com/stylessh"
            className={buttonVariants({
              variant: "ghost",
              className: "cursor-pointer",
            })}
          >
            <Github size={24} />
          </a>
        </li>
      </ul>
    </motion.nav>
  )
}

export default Navbar
