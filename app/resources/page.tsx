"use client"

import Link from "next/link"
import Image from "next/image"
import {
  FileText,
  Download,
  Calendar,
  Clock,
  ChevronRight,
  BookOpen,
  Calculator,
  Building2,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnScroll } from "@/components/fade-in"
import { motion } from "framer-motion"

const featuredArticle = {
  title: "2025 Canadian Tax Season: What You Need to Know",
  excerpt:
    "Key changes to federal and BC provincial tax brackets, deductions, and credits that could affect your 2025 T1 filing. Stay informed and prepared for tax season.",
  category: "Tax Tips",
  date: "January 10, 2025",
  readTime: "5 min read",
  slug: "#",
}

const articles = [
  {
    title: "Self-Employment in Canada: Tax Deductions You Should Not Miss",
    excerpt:
      "Freelancers and sole proprietors in BC often leave money on the table. Discover the most commonly overlooked deductions on your T1.",
    category: "Self-Employed",
    date: "December 10, 2024",
    readTime: "4 min read",
    slug: "#",
  },
  {
    title: "How to Pay CRA Instalments and Avoid Penalties",
    excerpt:
      "If you owe more than $3,000 in taxes, the CRA may require quarterly instalment payments. Here is how to calculate and pay them correctly.",
    category: "Tax Tips",
    date: "November 5, 2024",
    readTime: "6 min read",
    slug: "#",
  },
  {
    title: "Sole Proprietor vs. Incorporated: Which Is Right for You?",
    excerpt:
      "A practical comparison of operating as a sole proprietor versus incorporating in BC, including tax and liability considerations.",
    category: "Small Business",
    date: "October 1, 2024",
    readTime: "7 min read",
    slug: "#",
  },
  {
    title: "Year-End Tax Planning for Canadians",
    excerpt:
      "Smart moves to make before December 31st — RRSP contributions, loss harvesting, and more — to lower your 2024 tax bill.",
    category: "Tax Planning",
    date: "September 12, 2024",
    readTime: "5 min read",
    slug: "#",
  },
  {
    title: "Claiming a Home Office Deduction in Canada",
    excerpt:
      "Working from home? Learn how to claim workspace-in-home expenses on your T1 under the detailed or flat-rate method.",
    category: "Tax Tips",
    date: "August 18, 2024",
    readTime: "4 min read",
    slug: "#",
  },
  {
    title: "RRSP vs. TFSA: Which Should You Contribute To First?",
    excerpt:
      "Both accounts offer powerful tax advantages, but choosing the right one depends on your income and goals. We break it down simply.",
    category: "Financial Planning",
    date: "July 22, 2024",
    readTime: "6 min read",
    slug: "#",
  },
]

const categories = [
  { name: "Tax Tips", icon: Calculator, count: 10 },
  { name: "Self-Employed", icon: Users, count: 7 },
  { name: "Small Business", icon: Building2, count: 6 },
  { name: "Financial Planning", icon: BookOpen, count: 5 },
]

const downloads = [
  {
    title: "Canadian T1 Tax Checklist",
    description:
      "A comprehensive list of slips and documents needed for your personal tax return (T4, T5, RRSP, etc.).",
    format: "PDF",
  },
  {
    title: "Self-Employment Expense Tracker",
    description:
      "Simple spreadsheet to track business expenses throughout the year for your T2125.",
    format: "Excel",
  },
  {
    title: "2025 CRA Tax Deadlines",
    description: "Key filing and payment deadlines for individuals and self-employed Canadians.",
    format: "PDF",
  },
  {
    title: "Vehicle & Mileage Log",
    description: "Track business kilometres for CRA motor vehicle expense claims.",
    format: "Excel",
  },
]

export default function ResourcesPage() {
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
          <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
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
                Resources & Insights
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-6 text-lg text-primary-foreground/80"
              >
                Canadian tax tips, CRA guides, and free downloadable tools to
                help you stay informed and organized — written for BC residents,
                self-employed individuals, and small business owners.
              </motion.p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ScaleOnScroll>
            <Card className="overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2">
                <div className="bg-secondary/50 p-8 md:p-12">
                  <Badge className="mb-4">{featuredArticle.category}</Badge>
                  <h2 className="font-serif text-2xl font-bold sm:text-3xl text-balance">
                    {featuredArticle.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredArticle.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredArticle.readTime}
                    </span>
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button asChild className="mt-6 shadow-lg">
                      <Link href={featuredArticle.slug}>
                        Read Article
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
                <div className="flex items-center justify-center bg-primary/5 p-8">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-32 w-32 items-center justify-center rounded-full bg-primary/10"
                  >
                    <FileText className="h-16 w-16 text-primary" />
                  </motion.div>
                </div>
              </div>
            </Card>
          </ScaleOnScroll>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Articles */}
            <div className="lg:col-span-2">
              <FadeIn>
                <h2 className="font-serif text-2xl font-bold">
                  Recent Articles
                </h2>
              </FadeIn>
              <div className="mt-6 space-y-6">
                {articles.map((article, index) => (
                  <FadeIn key={article.title} delay={index * 50}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="transition-shadow hover:shadow-lg">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <Badge variant="outline" className="mb-2">
                                {article.category}
                              </Badge>
                              <h3 className="font-semibold hover:text-primary transition-colors">
                                <Link href={article.slug}>{article.title}</Link>
                              </h3>
                              <p className="mt-2 text-sm text-muted-foreground">
                                {article.excerpt}
                              </p>
                              <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {article.date}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {article.readTime}
                                </span>
                              </div>
                            </div>
                            <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground" />
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </FadeIn>
                ))}
              </div>
              <FadeIn delay={300}>
                <div className="mt-8">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="outline">Load More Articles</Button>
                  </motion.div>
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <FadeIn direction="right">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">Categories</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {categories.map((category, index) => (
                      <motion.div
                        key={category.name}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 4 }}
                      >
                        <Link
                          href="#"
                          className="flex items-center justify-between rounded-lg p-2 transition-colors hover:bg-secondary"
                        >
                          <div className="flex items-center gap-3">
                            <category.icon className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">
                              {category.name}
                            </span>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {category.count}
                          </Badge>
                        </Link>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </FadeIn>

              {/* Downloads */}
              <FadeIn direction="right" delay={100}>
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">Free Downloads</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {downloads.map((download, index) => (
                      <motion.div
                        key={download.title}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.01 }}
                        className="rounded-lg border border-border p-3 transition-shadow hover:shadow-md"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <p className="text-sm font-medium">{download.title}</p>
                            <p className="mt-1 text-xs text-muted-foreground">
                              {download.description}
                            </p>
                          </div>
                          <Badge variant="outline" className="shrink-0 text-xs">
                            {download.format}
                          </Badge>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="mt-2 h-8 w-full text-xs"
                        >
                          <Download className="mr-1 h-3 w-3" />
                          Download
                        </Button>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </FadeIn>

              {/* CTA Card */}
              <FadeIn direction="right" delay={200}>
                <Card className="bg-primary text-primary-foreground shadow-xl">
                  <CardContent className="p-6">
                    <h3 className="font-semibold">Need Personalized Help?</h3>
                    <p className="mt-2 text-sm text-primary-foreground/80">
                      Schedule a free consultation to discuss your specific
                      situation with an experienced CPA.
                    </p>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        asChild
                        variant="secondary"
                        className="mt-4 w-full shadow-lg"
                      >
                        <Link href="/book">Book Consultation</Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <ScaleOnScroll>
            <h2 className="font-serif text-2xl font-bold sm:text-3xl text-balance">
              Stay Informed
            </h2>
            <p className="mt-4 text-muted-foreground">
              Subscribe for Canadian tax tips, CRA deadline reminders, and
              practical financial insights from Preet K Singh, CPA — delivered
              straight to your inbox.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-lg border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring sm:w-64 transition-shadow focus:shadow-md"
              />
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="shadow-lg">Subscribe</Button>
              </motion.div>
            </div>
          </ScaleOnScroll>
        </div>
      </section>
    </div>
  )
}
