"use client"

import { Button } from "@/components/ui/button"
import { trackConsultationRequest, trackPlanRequest, trackEvent } from "@/lib/analytics"
import ContactForm from "./contact-form";

export function FinalCtaSection() {
  return (
    <section className="bg-[var(--color-everstead-footer)] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-white text-balance">
            Let's make this transition simple.
          </h2>
          <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
            You don't have to do this alone. Let us handle the coordination, the vendors, and the stress.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
  <Button
    size="lg"
    className="bg-[var(--color-everstead-green)] text-white hover:bg-[var(--color-everstead-green)]/90 text-lg px-8 py-6 rounded-xl font-semibold"
    onClick={() => {
      trackConsultationRequest("final_cta_primary")
    }}
  >
    Schedule Your Free Clarity Call
  </Button>

  <Button
    size="lg"
    variant="outline"
    className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl bg-transparent font-semibold"
    onClick={() => {
      // optional: smooth-scroll to Process section
      document.getElementById("process")?.scrollIntoView({ behavior: "smooth" });
      trackPlanRequest("final_cta_secondary")
    }}
  >
    Talk to a Transition Consultant
  </Button>
</div>  {/* <-- CLOSE the flex row here. Buttons only inside this row. */}

{/* Form lives OUTSIDE the row so it spans the width below the buttons */}
<div className="pt-8 max-w-lg mx-auto">
  <ContactForm />
</div>

          </div> 

          <div className="pt-8 border-t border-gray-700 mt-12">
            <p className="text-gray-400 text-sm mb-6">
              Everstead Transitions | Serving Austin, TX & Raleigh, NC | Licensed & Insured | Trusted by Local Families
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-300">
              <a
                href="mailto:hello@everstead.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
                onClick={() => trackEvent("email_click", { location: "final_cta" })}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>hello@everstead.com</span>
              </a>
              <a
                href="tel:+12405932485"
                className="flex items-center gap-2 hover:text-white transition-colors"
                onClick={() => trackEvent("phone_click", { location: "final_cta" })}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>(240) 593-2485</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
