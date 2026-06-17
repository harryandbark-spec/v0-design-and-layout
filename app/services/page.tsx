"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Calculator,
  FileText,
  TrendingUp,
  Shield,
  Building2,
  PiggyBank,
  ClipboardCheck,
  Users,
  CheckCircle2,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnScroll } from "@/components/fade-in"
import { motion } from "framer-motion"

const mainServices = [
  {
    title: "Maximize Your Tax Refund",
    description:
      "Find every deduction you're entitled to and keep more of your hard-earned money.",
    features: [
      "Individual tax returns (T1 General)",
      "Small business returns (T2125)",
      "Corporation returns",
      "Tax planning and strategy",
      "Amendment preparation",
      "Multi-province filing",
    ],
  },
  {
    title: "Never Miss a Deduction Again",
    description:
      "Stay organized year-round so you never lose money to forgotten expenses.",
    features: [
      "Monthly bookkeeping",
      "Bank reconciliation",
      "Accounts payable/receivable",
      "Financial statement preparation",
      "QuickBooks setup & support",
      "Year-end closing",
    ],
  },
  {
    title: "Grow Your Business Faster",
    description:
      "Get strategic financial guidance that helps you make smarter business decisions.",
    features: [
      "Business entity selection",
      "Financial analysis",
      "Cash flow management",
      "Growth strategy",
      "Budgeting & forecasting",
      "Exit planning",
    ],
  },
  {
    title: "Protect Yourself from CRA Issues",
    description:
      "Get expert representation if you face an audit or tax notice.",
    features: [
      "Audit representation",
      "Notice response",
      "Payment plans (installment agreements)",
      "Penalty abatement",
      "Tax lien assistance",
      "CRA negotiation",
    ],
  },
]

const additionalServices = [
  {
    title: "Business Formation",
    description: "LLC, S-Corp, and Partnership setup with proper tax elections.",
  },
  {
    title: "Retirement Planning",
    description: "Tax-advantaged retirement strategy and contribution optimization.",
  },
  {
    title: "Payroll Services",
    description: "Complete payroll processing with tax filings and compliance.",
  },
  {
    title: "Estate Planning Support",
    description: "Tax considerations for wealth transfer and estate matters.",
  },
]

const industries = [
  "Professional Services",
  "Real Estate",
  "Healthcare",
  "Retail & E-Commerce",
  "Construction",
  "Restaurants & Hospitality",
  "Technology & Startups",
  "Consulting",
]

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services-workspace.jpg"
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
          <div className="absolute -left-32 top-1/2 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        </motion.div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="font-serif text-4xl font-bold text-primary-foreground sm:text-5xl text-balance"
              >
                Our Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-6 text-lg text-primary-foreground/80"
              >
                Comprehensive accounting solutions tailored to your needs.
                From tax preparation to strategic business advisory.
              </motion.p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold sm:text-4xl text-balance">
                Core Services
              </h2>
              <p className="mt-4 text-muted-foreground">
                Professional services designed to meet your financial needs.
              </p>
            </div>
          </FadeIn>
          <div className="mt-12 space-y-8">
            {mainServices.map((service, index) => (
              <FadeIn
                key={service.title}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 100}
              >
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="border-l-4 border-green bg-secondary/30 p-6 hover:bg-secondary/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.05 }}
                        className="flex items-start gap-2 text-sm"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="relative bg-secondary/30 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-office.jpg"
            alt=""
            fill
            className="object-cover opacity-5"
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold sm:text-4xl text-balance">
                Additional Services
              </h2>
              <p className="mt-4 text-muted-foreground">
                Specialized services to support your complete financial picture.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {additionalServices.map((service) => (
              <StaggerItem key={service.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full bg-background/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <h3 className="mb-2 font-semibold">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold sm:text-4xl text-balance">
                Industries We Serve
              </h2>
              <p className="mt-4 text-muted-foreground">
                We work with clients across a variety of industries, adapting
                our services to meet specific needs.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {industries.map((industry, index) => (
                <motion.span
                  key={industry}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md transition-shadow cursor-default"
                >
                  {industry}
                </motion.span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-secondary/30 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold sm:text-4xl text-balance">
                How We Work
              </h2>
              <p className="mt-4 text-muted-foreground">
                A simple, straightforward process designed to make working with
                us easy.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "We start with a free consultation to understand your needs and goals.",
              },
              {
                step: "02",
                title: "Assessment",
                description:
                  "We review your current situation and develop a customized plan.",
              },
              {
                step: "03",
                title: "Execution",
                description:
                  "We complete the work with attention to detail and regular updates.",
              },
              {
                step: "04",
                title: "Ongoing Support",
                description:
                  "We remain available for questions and provide year-round guidance.",
              },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground shadow-lg"
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <ScaleOnScroll>
            <Card className="shadow-xl">
              <CardContent className="p-8 text-center">
                <h2 className="font-serif text-2xl font-bold sm:text-3xl text-balance">
                  Transparent, Fair Pricing
                </h2>
                <p className="mt-4 text-muted-foreground">
                  We believe in transparent pricing with no hidden fees. Every
                  client receives a clear quote before we begin any work. Our
                  fees are based on the complexity of your situation, not
                  one-size-fits-all pricing.
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Schedule a free consultation to receive a personalized quote
                  for your needs.
                </p>
              </CardContent>
            </Card>
          </ScaleOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary/30 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ScaleOnScroll>
            <div className="relative overflow-hidden rounded-3xl bg-primary p-8 text-center sm:p-12">
              <div className="absolute inset-0">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
              </div>
              <div className="relative">
                <h2 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
                  Start Saving Money Today
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                  Let&apos;s discuss how much you could be saving with the right
                  tax strategy. Schedule a free consultation today.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button asChild size="lg" variant="secondary" className="shadow-lg">
                      <Link href="/book">
                        Get Your Tax Strategy
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                    >
                      <Link href="/contact">Start Saving Today</Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </ScaleOnScroll>
        </div>
      </section>
    </div>
  )
}
