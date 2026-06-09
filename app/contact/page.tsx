"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnScroll } from "@/components/fade-in"
import { motion, AnimatePresence } from "framer-motion"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+1 604-991-0465",
    description: "Mon-Fri, 9am-5pm EST",
  },
  {
    icon: Mail,
    title: "Email",
    value: "admin@pks-cpa.com",
    description: "Response within 24 hours",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "9:00 AM - 5:00 PM",
    description: "Monday through Friday",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Home-Based",
    description: "Services",
  },
]

const services = [
  "Tax Preparation",
  "Bookkeeping",
  "Business Advisory",
  "IRS Representation",
  "Payroll Services",
  "Financial Planning",
  "Other",
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-office.jpg"
            alt=""
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="font-serif text-4xl font-bold text-primary-foreground sm:text-5xl text-balance"
              >
                Contact Us
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-6 text-lg text-primary-foreground/80"
              >
                Have questions or ready to get started? We&apos;d love to hear
                from you. Reach out and we&apos;ll respond promptly.
              </motion.p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="flex items-start gap-4 p-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
                      >
                        <item.icon className="h-5 w-5" />
                      </motion.div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {item.title}
                        </p>
                        <p className="font-semibold">{item.value}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <FadeIn direction="left">
              <div>
                <h2 className="font-serif text-2xl font-bold sm:text-3xl text-balance">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you within
                  one business day.
                </p>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="mt-8 shadow-lg">
                        <CardContent className="flex flex-col items-center p-8 text-center">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                            className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600"
                          >
                            <CheckCircle2 className="h-8 w-8" />
                          </motion.div>
                          <h3 className="mt-4 text-xl font-semibold">
                            Message Sent!
                          </h3>
                          <p className="mt-2 text-muted-foreground">
                            Thank you for reaching out. We&apos;ll respond to your
                            inquiry within one business day.
                          </p>
                          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button
                              className="mt-6"
                              onClick={() => setIsSubmitted(false)}
                            >
                              Send Another Message
                            </Button>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="mt-8 space-y-6"
                    >
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            placeholder="John"
                            required
                            className="transition-shadow focus:shadow-md"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            placeholder="Doe"
                            required
                            className="transition-shadow focus:shadow-md"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                            className="transition-shadow focus:shadow-md"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone (Optional)</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            className="transition-shadow focus:shadow-md"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In</Label>
                        <Select name="service">
                          <SelectTrigger className="transition-shadow focus:shadow-md">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your needs..."
                          rows={5}
                          required
                          className="transition-shadow focus:shadow-md"
                        />
                      </div>

                      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full sm:w-auto shadow-lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                            >
                              Sending...
                            </motion.span>
                          ) : (
                            <>
                              Send Message
                              <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>

            {/* Info Panel */}
            <FadeIn direction="right" delay={200}>
              <div className="space-y-6">
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-secondary/50 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="font-semibold">Prefer to Schedule a Call?</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Book a free 15-minute consultation to discuss your
                        accounting needs directly.
                      </p>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button asChild className="mt-4" variant="outline">
                          <Link href="/book">Book Consultation</Link>
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-secondary/50 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="font-semibold">What to Expect</h3>
                      <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                        {[
                          "Response within 1 business day",
                          "No pressure, no obligation",
                          "Clear, upfront pricing discussion",
                          "Personalized recommendations",
                        ].map((item, index) => (
                          <motion.li
                            key={item}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-secondary/50 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="font-semibold">Existing Client?</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Current clients can access our secure client portal to
                        upload documents, view statements, and communicate
                        directly.
                      </p>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button asChild className="mt-4" variant="outline">
                          <Link href="#">Client Portal</Link>
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map/Location Note */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <ScaleOnScroll>
            <h2 className="font-serif text-2xl font-bold sm:text-3xl text-balance">
              Serving Clients Nationwide
            </h2>
            <p className="mt-4 text-muted-foreground">
              While we are based in the United States, we work with clients
              across the country. All consultations and document sharing are
              handled securely online, making our services accessible no matter
              where you are located.
            </p>
          </ScaleOnScroll>
        </div>
      </section>
    </div>
  )
}
