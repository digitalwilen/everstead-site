"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { trackCtaClick, trackPlanRequest, trackConsultationRequest } from "@/lib/analytics"

export function HeroSection() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const variants = prefersReducedMotion
    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      }

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              className="space-y-4"
              initial={variants.initial}
              animate={variants.animate}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-[54px] font-serif font-semibold text-balance leading-tight text-[var(--color-everstead-charcoal)]">
                When your parent's next move becomes your job, we make it manageable.
              </h1>
              <p className="text-lg md:text-xl text-gray-700 text-pretty leading-relaxed">
                Stop juggling movers, repairs, and family emotions. Everstead orchestrates every step with empathy,
                order, and accountability—so you don't have to.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={variants.initial}
              animate={variants.animate}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <Button
                size="lg"
                className="bg-[var(--color-everstead-green)] hover:bg-[var(--color-everstead-charcoal)] text-white text-lg px-8 py-6 rounded-xl"
                onClick={() => {
                  trackPlanRequest("hero_primary")
                  trackCtaClick("Schedule Your Free Clarity Call", "hero")
                }}
              >
                Schedule Your Free Clarity Call
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[var(--color-everstead-green)] text-[var(--color-everstead-green)] hover:bg-[var(--color-everstead-sage)] hover:text-[var(--color-everstead-charcoal)] text-lg px-8 py-6 rounded-xl bg-transparent"
                onClick={() => {
                  trackConsultationRequest("hero_secondary")
                  trackCtaClick("Talk to a Transition Consultant", "hero")
                }}
              >
                Talk to a Transition Consultant
              </Button>
            </motion.div>

            <motion.div
              className="space-y-3 pt-4"
              initial={variants.initial}
              animate={variants.animate}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[var(--color-everstead-green)]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Vetted local vendors</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[var(--color-everstead-green)]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[var(--color-everstead-green)]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Serving Austin, TX & Raleigh, NC</span>
                </div>
              </div>
              <p className="text-sm italic text-gray-600">
                "They handled every moving piece—repairs, donations, movers—while we handled the goodbyes."
              </p>
            </motion.div>
          </div>

          <motion.div
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.25, ease: "easeOut" }}
          >
            <Image
              src="/images/hero-everstead.jpg"
              alt="Adult child helping elderly parent organize their home in a warm, naturally lit living room with soft blue and sage accents, representing compassionate estate transition and downsizing services"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
