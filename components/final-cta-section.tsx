"use client"

import { trackEvent } from "@/lib/analytics"

export function FinalCtaSection() {
  return (
    <section className="bg-[var(--color-everstead-footer)] py-20 md:py-28">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4">
          Let’s make this transition simple.
        </h2>
        <p className="text-lg text-gray-300 mb-10 leading-relaxed">
          You don’t have to do this alone. When you’re ready, we’ll coordinate the people,
          the plans, and the peace of mind.
        </p>

        {/* Contact / Trust Info */}
        <div className="border-t border-gray-700 pt-8 mt-12">
          <p className="text-gray-400 text-sm mb-6">
            Everstead Transitions | Serving Austin, TX & Raleigh, NC | Licensed & Insured | Trusted by Local Families
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-300">
            <a
              href="mailto:hello@everstead.com"
              className="hover:text-white transition-colors"
              onClick={() => trackEvent("email_click", { location: "final_cta" })}
            >
              hello@everstead.com
            </a>
            <a
              href="tel:+12405932485"
              className="hover:text-white transition-colors"
              onClick={() => trackEvent("phone_click", { location: "final_cta" })}
            >
              (240) 593-2485
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
