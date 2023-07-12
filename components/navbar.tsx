"use client"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { Github } from "lucide-react"

import { motion } from "framer-motion"
import Logo from "./logo"

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="flex items-center justify-between"
    >
      <Link
        href="/"
        className="inline-flex items-center gap-3 text-xl font-semibold"
      >
        <Logo className="w-8 text-black" />
        <span>sshort</span>
      </Link>

      <ul className="flex items-center gap-6">
        <li>
          <a
            href="https://github.com/stylessh/sshort"
            target="_blank"
            rel="noopener noreferrer"
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
