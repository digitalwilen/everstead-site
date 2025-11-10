"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { trackEvent } from "@/lib/analytics"
import { Menu, X } from "lucide-react"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault()
    trackEvent("navigation_click", { anchor })

    setMobileMenuOpen(false)

    const element = document.getElementById(anchor)
    if (element) {
      const header = document.querySelector("header")
      const actualHeaderHeight = header?.offsetHeight || 64
      const elementPosition = element.getBoundingClientRect().top
      const currentScroll = window.pageYOffset || window.scrollY
      const targetScroll = currentScroll + elementPosition - actualHeaderHeight

      console.log("[v0] Scroll Debug:", {
        anchor,
        actualHeaderHeight,
        elementPosition,
        currentScroll,
        targetScroll,
        elementId: element.id,
        elementOffsetTop: element.offsetTop,
      })

      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      })
    } else {
      console.log("[v0] Element not found:", anchor)
    }
  }

  const navLinks = [
    { href: "#how-it-works", label: "How it works", anchor: "how-it-works" },
    { href: "#outcomes", label: "Outcomes", anchor: "outcomes" },
    { href: "#pricing", label: "Pricing", anchor: "pricing" },
    { href: "#faq", label: "FAQ", anchor: "faq" },
    { href: "#contact", label: "Contact", anchor: "contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-semibold text-[var(--color-everstead-blue-dark)]">
              Everstead
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.anchor}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[var(--color-everstead-blue)] transition-colors"
                onClick={(e) => handleAnchorClick(e, link.anchor)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phone + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+12405932485"
              className="text-sm font-semibold text-[var(--color-everstead-blue)] hover:text-[var(--color-everstead-blue-dark)] transition-colors"
              onClick={() => trackEvent("phone_click", { location: "header" })}
            >
              (240) 593-2485
            </a>

            <button
              className="md:hidden p-2 text-gray-700 hover:text-[var(--color-everstead-blue)] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.anchor}
                  href={link.href}
                  className="text-base font-medium text-gray-700 hover:text-[var(--color-everstead-blue)] transition-colors py-2"
                  onClick={(e) => handleAnchorClick(e, link.anchor)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
