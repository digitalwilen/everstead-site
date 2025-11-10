import { ClarityCallSection } from "@/components/clarity-call-section";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { ProcessSection } from "@/components/process-section";
import { OutcomesSection } from "@/components/outcomes-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { PricingSection } from "@/components/pricing-section";
import { FaqSection } from "@/components/faq-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { StickyCtaBar } from "@/components/sticky-cta-bar";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        <HeroSection />
        <ProblemSection />

        <section id="how-it-works">
          <ProcessSection />
        </section>

        <section id="outcomes">
          <OutcomesSection />
        </section>

        <TestimonialsSection />

        <section id="pricing">
          <PricingSection />
        </section>

        <section id="faq">
          <FaqSection />
        </section>

        <section id="contact">
          {/* ...existing sections ... */}
        </section>

        {/* New clarity-call section */}
        <ClarityCallSection />

        {/* Existing Final CTA remains below */}
        <FinalCtaSection />

        <StickyCtaBar />
      </main>
    </>
  );
}
