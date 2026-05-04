"use client"

import Link from "next/link"
import Image from "next/image"
import { Award, BookOpen, Heart, Target, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnScroll } from "@/components/fade-in"
import { motion } from "framer-motion"

const values = [
  {
    icon: Heart,
    title: "Client-Centered",
    description:
      "Your success is our priority. We take the time to understand your unique situation and goals.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We hold ourselves to the highest professional standards in everything we do.",
  },
  {
    icon: BookOpen,
    title: "Education",
    description:
      "We believe in empowering clients with knowledge, not just completing transactions.",
  },
  {
    icon: Target,
    title: "Precision",
    description:
      "Attention to detail ensures accuracy and maximizes your financial outcomes.",
  },
]

const timeline = [
  {
    year: "2008",
    title: "Foundation",
    description:
      "Started providing accounting services with a focus on personalized client relationships.",
  },
  {
    year: "2012",
    title: "CPA Certification",
    description:
      "Achieved Certified Public Accountant status, expanding service capabilities.",
  },
  {
    year: "2016",
    title: "Business Advisory",
    description:
      "Expanded services to include comprehensive business consulting and advisory.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description:
      "Implemented secure digital workflows to serve clients nationwide.",
  },
  {
    year: "Today",
    title: "Continued Growth",
    description:
      "Serving clients across the United States with personalized, professional service.",
  },
]

export default function AboutPage() {
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        </motion.div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
                className="font-serif text-4xl font-bold text-primary-foreground sm:text-5xl text-balance"
              >
                About Kaushal & Kaushal Associates
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-6 text-lg text-primary-foreground/80"
              >
                A boutique accounting practice dedicated to providing
                exceptional service with a personal touch.
              </motion.p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="space-y-6">
                <h2 className="font-serif text-3xl font-bold sm:text-4xl text-balance">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Kaushal & Kaushal Associates Inc. was founded on a simple
                    belief: everyone deserves access to quality accounting
                    services delivered with genuine care and attention.
                  </p>
                  <p>
                    Too often, individuals and small businesses feel overlooked
                    by larger firms or overwhelmed by impersonal service. We set
                    out to be different. When you work with us, you work
                    directly with an experienced CPA who takes the time to
                    understand your unique situation.
                  </p>
                  <p>
                    Over the years, we have had the privilege of helping
                    hundreds of clients navigate tax challenges, organize their
                    finances, and build stronger businesses. Each client
                    relationship is built on trust, transparency, and a shared
                    commitment to achieving your financial goals.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={200}>
              <div className="relative">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -left-4 -top-4 h-48 w-48 rounded-full bg-gold/20 blur-3xl"
                />
                <ScaleOnScroll>
                  <Card className="relative shadow-xl">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4 border-b border-border pb-6">
                          <motion.div
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground"
                          >
                            <span className="font-serif text-2xl font-bold">
                              K
                            </span>
                          </motion.div>
                          <div>
                            <p className="font-serif text-xl font-bold">
                              Our Mission
                            </p>
                            <p className="text-sm text-muted-foreground">
                              What drives us every day
                            </p>
                          </div>
                        </div>
                        <p className="text-muted-foreground">
                          To provide accessible, reliable, and personalized
                          accounting services that empower individuals and small
                          businesses to achieve their financial goals with
                          confidence.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </ScaleOnScroll>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative bg-secondary/30 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services-workspace.jpg"
            alt=""
            fill
            className="object-cover opacity-5"
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold sm:text-4xl text-balance">
                Our Core Values
              </h2>
              <p className="mt-4 text-muted-foreground">
                The principles that guide how we serve our clients.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full bg-background/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                    <CardContent className="flex h-full flex-col items-center p-6 text-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-gold"
                      >
                        <value.icon className="h-6 w-6" />
                      </motion.div>
                      <h3 className="mb-2 font-semibold">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold sm:text-4xl text-balance">
                Our Journey
              </h2>
              <p className="mt-4 text-muted-foreground">
                Key milestones in our commitment to serving clients.
              </p>
            </div>
          </FadeIn>
          <div className="mt-12">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-gold to-primary md:left-1/2 md:-ml-0.5" />

              {/* Timeline items */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <FadeIn
                    key={item.year}
                    direction={index % 2 === 0 ? "left" : "right"}
                    delay={index * 100}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className={`relative flex items-center ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      <div className="flex-1 md:pr-8 md:text-right">
                        {index % 2 === 0 && (
                          <div className="ml-12 md:ml-0">
                            <motion.span
                              whileHover={{ scale: 1.05 }}
                              className="inline-block rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground shadow-md"
                            >
                              {item.year}
                            </motion.span>
                            <h3 className="mt-2 font-semibold">{item.title}</h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        )}
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="absolute left-4 flex h-8 w-8 items-center justify-center rounded-full border-4 border-background bg-primary shadow-lg md:relative md:left-0"
                      >
                        <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                      </motion.div>
                      <div className="flex-1 md:pl-8">
                        {index % 2 !== 0 && (
                          <div className="ml-12 md:ml-0">
                            <motion.span
                              whileHover={{ scale: 1.05 }}
                              className="inline-block rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground shadow-md"
                            >
                              {item.year}
                            </motion.span>
                            <h3 className="mt-2 font-semibold">{item.title}</h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary/30 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ScaleOnScroll>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold sm:text-4xl text-balance">
                Let&apos;s Work Together
              </h2>
              <p className="mt-4 text-muted-foreground">
                Ready to experience the difference of personalized accounting
                service? Schedule a free consultation to discuss your needs.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button asChild size="lg" className="shadow-lg">
                    <Link href="/book">
                      Book Consultation
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/services">Explore Services</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </ScaleOnScroll>
        </div>
      </section>
    </div>
  )
}
