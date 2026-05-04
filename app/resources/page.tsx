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
  title: "2024 Tax Season: What You Need to Know",
  excerpt:
    "Key changes to tax brackets, deductions, and credits that could affect your 2024 filing. Stay informed and prepared for tax season.",
  category: "Tax Tips",
  date: "January 15, 2024",
  readTime: "5 min read",
  slug: "#",
}

const articles = [
  {
    title: "5 Common Tax Deductions Small Businesses Miss",
    excerpt:
      "Discover often-overlooked deductions that could save your business money this tax season.",
    category: "Small Business",
    date: "December 20, 2023",
    readTime: "4 min read",
    slug: "#",
  },
  {
    title: "Understanding Quarterly Estimated Taxes",
    excerpt:
      "A guide to calculating and paying estimated taxes to avoid penalties.",
    category: "Tax Tips",
    date: "November 10, 2023",
    readTime: "6 min read",
    slug: "#",
  },
  {
    title: "Choosing Between LLC and S-Corp: A Comparison",
    excerpt:
      "Learn the key differences to help you choose the right business structure.",
    category: "Small Business",
    date: "October 5, 2023",
    readTime: "7 min read",
    slug: "#",
  },
  {
    title: "Year-End Tax Planning Strategies",
    excerpt:
      "Smart moves to make before December 31st to optimize your tax situation.",
    category: "Tax Planning",
    date: "September 15, 2023",
    readTime: "5 min read",
    slug: "#",
  },
  {
    title: "Home Office Deduction: Who Qualifies?",
    excerpt:
      "Everything you need to know about claiming a home office deduction.",
    category: "Tax Tips",
    date: "August 22, 2023",
    readTime: "4 min read",
    slug: "#",
  },
  {
    title: "Retirement Contributions and Tax Benefits",
    excerpt:
      "Maximize your retirement savings while reducing your tax burden.",
    category: "Financial Planning",
    date: "July 30, 2023",
    readTime: "6 min read",
    slug: "#",
  },
]

const categories = [
  { name: "Tax Tips", icon: Calculator, count: 12 },
  { name: "Small Business", icon: Building2, count: 8 },
  { name: "Financial Planning", icon: BookOpen, count: 6 },
  { name: "Personal Finance", icon: Users, count: 5 },
]

const downloads = [
  {
    title: "Tax Preparation Checklist",
    description:
      "A comprehensive list of documents needed for your tax appointment.",
    format: "PDF",
  },
  {
    title: "Business Expense Tracker",
    description:
      "Simple spreadsheet to track business expenses throughout the year.",
    format: "Excel",
  },
  {
    title: "2024 Tax Calendar",
    description: "Important tax deadlines and dates for individuals and businesses.",
    format: "PDF",
  },
  {
    title: "Mileage Log Template",
    description: "Track business mileage for tax deduction purposes.",
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
                Helpful articles, tax tips, and downloadable tools to help you
                stay informed and organized.
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
              Subscribe to our newsletter for tax tips, deadline reminders, and
              helpful financial insights delivered to your inbox.
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
