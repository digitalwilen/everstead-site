"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { trackEvent } from "@/lib/analytics"

export function StickyCtaBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past hero section (~600px)
      setIsVisible(window.scrollY > 600)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 md:hidden"
      role="region"
      aria-label="Quick action buttons"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex gap-3">
          <Button
            asChild
            className="flex-1 bg-[var(--color-everstead-blue)] hover:bg-[var(--color-everstead-blue-dark)] text-white rounded-xl text-base py-5"
            onClick={() => trackEvent("cta_click", { location: "sticky_cta", label: "start_plan" })}
          >
            <a href="#clarity-call">Start your plan</a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="flex-1 border-2 border-[var(--color-everstead-blue)] text-[var(--color-everstead-blue)] hover:bg-[var(--color-everstead-sage-light)] hover:text-[var(--color-everstead-blue-dark)] rounded-xl bg-transparent text-base py-5"
            onClick={() => trackEvent("cta_click", { location: "sticky_cta", label: "free_consultation" })}
          >
            <a href="#clarity-call">Free consultation</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
