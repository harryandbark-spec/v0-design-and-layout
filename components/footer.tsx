"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Book Appointment" },
]

const services = [
  "Tax Preparation",
  "Bookkeeping",
  "Business Advisory",
  "Financial Planning",
  "CRA Representation",
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6"
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative h-12 w-auto">
                <Image
                  src="/images/logo.png"
                  alt="Preet K Singh Accounting, CPA"
                  width={150}
                  height={48}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional accounting and tax services tailored for individuals
              and small businesses in Canada.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 text-sm font-semibold">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 text-sm font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-green" />
                <span className="text-sm text-muted-foreground">
                  (604) 991-0465
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-green" />
                <span className="text-sm text-muted-foreground">
                  info@preetaccounting.ca
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-green" />
                <span className="text-sm text-muted-foreground">
                  Surrey, BC V3S 0W5, Canada
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row"
        >
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Preet K Singh Accounting, CPA.
            All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
