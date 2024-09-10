"use client"

import React, { useState } from "react"
import { NavItem } from "@/types/nav"
import Link from "next/link"
import ThemeToggle from "./theme-toggle"
import { Icons } from "./icons"
import { cn } from "@udecode/cn"
import fonts from "@/config/fonts"
import { motion, AnimatePresence } from "framer-motion"

interface MainNavProps {
  items?: NavItem[]
}

export default function MainNav({ items }: MainNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => setIsOpen(!isOpen)

  const springConfig = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass : 0.5,
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 right-0 z-40"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={springConfig}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-b-sm">
              <div className="flex flex-col gap-2 items-center justify-between divide-y-2 hover:divide-primary-300 divide-primary-100 pb-3 rounded-xl">
                <div className="flex flex-row justify-center items-center justify-items-center mt-2">
                  <Link href="/" className={cn("font-head text-4xl flex items-center justify-items-center justify-center font-medium bg-opacity-10 hover:translate-x-1 hover:bg-secondary-200 ease-out duration-100 rounded-md px-4 ", fonts.madeGentle.className)}>
                    Bognar.dev
                  </Link>
                  <ThemeToggle className='' />
                </div>

                {items?.length ? (
                  <nav className="gap-2 flex md:gap-24 min-w-screen ">
                    {items?.map(
                      (item, index) =>
                        item.href && (
                          <Link
                            key={index}
                            href={item.href}
                            className="text-md lg:text-xl group flex items-center font-medium hover:animate-wiggle hover:translate-x-1 hover:bg-secondary-200 ease-out duration-100 rounded-md md:px-4 mt-1 py-1"
                          >
                            {item.title}
                            <Icons.arrowUpRight className="group-hover:-translate-y-0.5 ease-out duration-100 w-2 h-2 md:w-4 md:h-4 ml-2" />
                          </Link>
                        )
                    )}
                  </nav>
                ) : null}
              </div>
            </div>

            {/* Close button */}
            <motion.button
              onClick={toggleNav}
              className="absolute left-1/2 transform -translate-x-1/2 bottom-0 bg-primary-300 text-white p-1 rounded-b-md shadow-md hover:bg-primary-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pull cord */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={toggleNav}
            className="fixed top-0 left-1/2 transform -translate-x-1/2 z-40 bg-primary-300 text-white p-1 rounded-b-md shadow-md hover:bg-primary-400"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={springConfig}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" y="4" width="16" height="2" rx="1" fill="currentColor" />
              <rect x="4" y="9" width="16" height="2" rx="1" fill="currentColor" />
              <path d="M12 14L8 18H16L12 14Z" fill="currentColor" />
              <rect x="11" y="14" width="2" height="6" rx="1" fill="currentColor" />
            </motion.svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}