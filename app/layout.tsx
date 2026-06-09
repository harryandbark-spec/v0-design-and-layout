import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
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

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
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
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
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
