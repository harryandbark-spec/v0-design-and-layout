"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { MessageCircle, Mail, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const WHATSAPP_NUMBER = "16049910465"
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Preet, I found your website and I'd like to inquire about your accounting services. Could we schedule a quick chat?"
)
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close panel when scrolled back to top
  useEffect(() => {
    if (!isVisible) setIsOpen(false)
  }, [isVisible])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
        >
          {/* Options panel */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
                className="flex flex-col gap-2"
              >
                {/* Contact page option */}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2.5 rounded-full border border-border bg-background/95 px-4 py-2.5 text-sm font-medium text-foreground shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Mail className="h-3.5 w-3.5" />
                  </span>
                  Contact Us
                </Link>

                {/* WhatsApp option */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2.5 rounded-full border border-green/30 bg-background/95 px-4 py-2.5 text-sm font-medium text-foreground shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green text-white">
                    <MessageCircle className="h-3.5 w-3.5" />
                  </span>
                  WhatsApp
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main trigger button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close contact options" : "Get in touch"}
            className="flex items-center gap-2 rounded-full bg-green px-5 py-3 text-sm font-semibold text-white shadow-lg transition-shadow hover:shadow-xl"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="h-4 w-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <MessageCircle className="h-4 w-4" />
                </motion.span>
              )}
            </AnimatePresence>
            Get in Touch
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
