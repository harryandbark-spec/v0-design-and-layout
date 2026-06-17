import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { CustomCursor } from "@/components/custom-cursor"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Preet K Singh Accounting, CPA | Canadian Tax & Accounting Services",
  description:
    "Trusted Canadian accounting and tax services for individuals, self-employed, and small businesses in BC. Personalized attention, expert CRA guidance, and reliable results.",
  keywords: [
    "CPA",
    "accountant",
    "tax preparation",
    "bookkeeping",
    "small business accounting",
    "tax planning",
    "CRA representation",
    "Canadian tax services",
    "Surrey BC accountant",
    "tax refund",
  ],
  openGraph: {
    title: "Preet K Singh Accounting, CPA | Canadian Tax & Accounting Services",
    description: "Maximize your tax refund with personalized Canadian accounting services. Expert CRA representation for individuals and small businesses in BC.",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preet K Singh Accounting, CPA | Canadian Tax & Accounting Services",
    description: "Maximize your tax refund with personalized Canadian accounting services. Expert CRA representation for individuals and small businesses in BC.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
