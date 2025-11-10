import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", weight: ["400", "600", "700"] })

export const metadata: Metadata = {
  title: "Everstead Transitions | Estate & Downsizing Concierge – Austin & Raleigh",
  description:
    "When your parent's next move becomes your job, we make it manageable. Licensed & insured estate, downsizing, and aging-in-place coordination for families in Austin & Raleigh.",
  keywords: [
    "estate transition planning",
    "downsizing services",
    "aging in place",
    "senior move management",
    "estate settlement",
    "home modification",
    "Austin downsizing",
    "Raleigh estate planning",
    "concierge estate services",
  ],
  authors: [{ name: "Everstead" }],
  creator: "Everstead",
  publisher: "Everstead",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://everstead.com",
    siteName: "Everstead",
    title: "Everstead Transitions | Estate & Downsizing Concierge – Austin & Raleigh",
    description:
      "Professional estate transition planning, downsizing coordination, and aging-in-place services. Licensed & insured. Serving Austin, TX & Raleigh, NC.",
    images: [
      {
        url: "/images/hero-everstead.jpg",
        width: 1200,
        height: 630,
        alt: "Everstead - Professional estate transition and downsizing services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Everstead Transitions | Estate & Downsizing Concierge – Austin & Raleigh",
    description:
      "Professional estate transition planning, downsizing coordination, and aging-in-place services. Licensed & insured. Serving Austin, TX & Raleigh, NC.",
    images: ["/images/hero-everstead.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { anonymize_ip: true });
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased scroll-smooth`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
