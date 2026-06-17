"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Calculator,
  FileText,
  TrendingUp,
  Shield,
  Clock,
  Users,
  ChevronRight,
  CheckCircle2,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnScroll } from "@/components/fade-in"
import { motion } from "framer-motion"

const services = [
  {
    title: "Maximize Your Tax Refund",
    description:
      "Find every deduction you're entitled to and keep more of your money.",
  },
  {
    title: "Never Miss a Deduction Again",
    description:
      "Stay organized year-round so you never lose money to forgotten expenses.",
  },
  {
    title: "Grow Your Business Faster",
    description:
      "Get strategic financial guidance that helps you make smarter business decisions.",
  },
  {
    title: "Protect Yourself from CRA Issues",
    description:
      "Get expert representation if you face an audit or tax notice.",
  },
]

const whyChooseUs = [
  {
    icon: Users,
    title: "Personalized Service",
    description:
      "Every client receives direct attention from an experienced CPA, not a rotating staff.",
  },
  {
    icon: Clock,
    title: "Responsive Communication",
    description:
      "Quick responses to your questions and concerns throughout the year.",
  },
  {
    icon: Shield,
    title: "Trusted Expertise",
    description:
      "Years of experience serving individuals and small businesses with integrity.",
  },
  {
    icon: CheckCircle2,
    title: "Attention to Detail",
    description:
      "Thorough review of every return to maximize deductions and minimize errors.",
  },
]

const testimonials = [
  {
    name: "Arjun K.",
    role: "Self-Employed Professional",
    content:
      "Preet found $5,200 in deductions I didn't know I qualified for. My first year working with him saved me more than his fees cost. Best financial decision I've made.",
    rating: 5,
  },
  {
    name: "Simran P.",
    role: "Small Business Owner",
    content:
      "My tax bill went from $12,000 to $7,400 after Preet restructured my business expenses. He responds within hours on WhatsApp and actually explains things in plain English.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    role: "Individual Client",
    content:
      "Got audited by the CRA and Preet resolved it in 2 weeks instead of the 3 months they estimated. Zero penalties and he found an additional $1,800 refund during the process.",
    rating: 5,
  },
]

const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "We serve clients throughout Canada, with a strong presence in British Columbia. Most of our work is conducted remotely via secure document sharing and video calls, making it convenient regardless of your location.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Our fees are based on the complexity of your tax situation and the services you need. We provide transparent pricing upfront so there are no surprises. Contact us for a free consultation and quote.",
  },
  {
    question: "What documents do I need for tax preparation?",
    answer:
      "We provide a comprehensive checklist tailored to your situation. Common documents include T4s, T1 Generals, receipts for deductions, and prior year tax returns. We will guide you through exactly what is needed.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Absolutely. Small businesses and self-employed individuals are a core part of our practice. We offer bookkeeping, tax preparation, and advisory services specifically designed for small business needs and budgets.",
  },
  {
    question: "What makes you different from larger firms?",
    answer:
      "You work directly with Preet, an experienced CPA who knows your situation personally. We're accessible via email and WhatsApp, responsive to your needs, and dedicated to providing personalized service. No call centers or being passed around—just reliable, attentive service.",
  },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section with Background */}
      <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-placeholder.png"
            alt=""
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80" />
        </div>
        
        {/* Animated background elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />
        </motion.div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center rounded-full border border-green/40 bg-green/20 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm"
                >
                  Trusted CPA Services
                </motion.div>
                <h1 className="font-serif text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
                  Keep More of Your Hard-Earned Money
                </h1>
                <p className="max-w-lg text-lg text-primary-foreground/80">
                  Stop overpaying on taxes and missing deductions. Get the
                  maximum refund you deserve with personalized Canadian tax
                  expertise that actually saves you money.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      asChild
                      size="lg"
                      className="bg-green text-white font-semibold shadow-lg hover:bg-green-dark hover:shadow-xl transition-all"
                    >
                      <Link href="/book">
                        Get Your Maximum Refund
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
                      <Link href="/services">View Services</Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={200}>
              <div className="relative hidden lg:block">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-8 -top-8 h-64 w-64 rounded-full bg-gold/20 blur-3xl"
                />
                <div className="relative rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 backdrop-blur-sm shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { value: "8+", label: "Years Experience" },
                      { value: "100%", label: "Client Focus" },
                      { value: "CRA", label: "CPA Designated" },
                      { value: "24/7", label: "Secure Portal" },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                        className="space-y-2 rounded-xl bg-primary-foreground/10 p-4 transition-colors hover:bg-primary-foreground/15"
                      >
                        <p className="text-3xl font-bold text-primary-foreground">
                          {stat.value}
                        </p>
                        <p className="text-sm text-primary-foreground/70">
                          {stat.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold sm:text-4xl text-balance">
                Comprehensive Accounting Services
              </h2>
              <p className="mt-4 text-muted-foreground">
                From tax preparation to business advisory, we provide the
                expertise you need to achieve your financial goals.
              </p>
            </div>
          </FadeIn>
          <div className="mt-12 space-y-6">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 100}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="border-l-4 border-green bg-secondary/30 p-6 hover:bg-secondary/50 transition-colors"
                >
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={400}>
            <div className="mt-10 text-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild variant="outline">
                  <Link href="/services">
                    See How I Can Help
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Us with Background */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-secondary/50" />
        <div className="absolute inset-0">
          <Image
            src="/images/services-workspace.png"
            alt=""
            fill
            className="object-cover opacity-5"
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold sm:text-4xl text-balance">
                Why Choose Preet K Singh Accounting?
              </h2>
              <p className="mt-4 text-muted-foreground">
                We combine professional expertise with the personal touch of a
                boutique firm.
              </p>
            </div>
          </FadeIn>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {whyChooseUs.map((item, index) => (
              <FadeIn
                key={item.title}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 100}
              >
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex gap-4 rounded-xl bg-background/80 p-6 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-light text-green"
                  >
                    <item.icon className="h-6 w-6" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary">
                <Image
                  src="/placeholder-user.jpg"
                  alt="Preet K Singh"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="flex flex-col justify-center">
                <h2 className="font-serif text-3xl font-bold sm:text-4xl text-balance">
                  Meet Preet K Singh
                </h2>
                <p className="mt-4 text-muted-foreground">
                  I started this practice because I saw too many people overpaying on taxes simply because they didn't know what deductions they were entitled to. After working with large firms, I realized that personalized attention makes all the difference.
                </p>
                <p className="mt-4 text-muted-foreground">
                  When you work with me, you're not just another file on someone's desk. I take the time to understand your specific situation and find every opportunity to save you money. Whether you're self-employed, running a small business, or just want to ensure you're not leaving money on the table, I'm here to help.
                </p>
                <p className="mt-4 text-muted-foreground">
                  My clients have saved thousands of dollars in their first year with me, and many have become long-term partners in their financial success. Let's see how much I can save you.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold sm:text-4xl text-balance">
                What Our Clients Say
              </h2>
              <p className="mt-4 text-muted-foreground">
                Real feedback from individuals and businesses we have had the
                pleasure of serving.
              </p>
            </div>
          </FadeIn>
          <div className="mt-12 space-y-6">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={testimonial.name} delay={index * 100}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="border-l-4 border-gold bg-secondary/30 p-6 hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex gap-4">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-secondary">
                      <Image
                        src="/placeholder.jpg"
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <Star className="h-4 w-4 fill-green text-green" />
                          </motion.div>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground italic">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>
                      <div className="mt-4">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-secondary/30 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <FadeIn>
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold sm:text-4xl text-balance">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-muted-foreground">
                Get answers to common questions about our services.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <Accordion type="single" collapsible className="mt-10">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium hover:text-green transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ScaleOnScroll>
            <div className="relative overflow-hidden rounded-3xl bg-primary p-8 text-center sm:p-12">
              {/* Background decoration */}
              <div className="absolute inset-0">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green/15 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
              </div>
              
              <div className="relative">
                <h2 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
                  Stop Leaving Money on the Table
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                  Schedule a free consultation to find out how much you could be
                  saving. Most clients discover deductions they didn't know existed.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button asChild size="lg" className="bg-green text-white shadow-lg hover:bg-green-dark">
                      <Link href="/book">Find Your Savings</Link>
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
