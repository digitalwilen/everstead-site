import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "Do you do the work yourselves?",
      answer:
        "We coordinate and manage everything, but we work with a trusted network of licensed, insured professionals—movers, contractors, estate sale companies, and more. We vet every vendor, oversee the work, and ensure quality. You get the benefit of our relationships and accountability without having to manage multiple contractors yourself.",
    },
    {
      question: "Can we use our own vendors?",
      answer:
        "Absolutely. If you already have movers, contractors, or other providers you trust, we'll coordinate with them. Our role is to manage the timeline, communication, and quality—whoever's doing the work.",
    },
    {
      question: "How do you price your services?",
      answer:
        "Our coordination fee typically ranges from 15–25% of total project value, depending on scope and property size. Vendor costs are always transparent, and you'll receive a written estimate before any work begins.",
    },
    {
      question: "Where do you operate?",
      answer: "We currently serve families in Austin, TX and Raleigh, NC.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "It depends on the scope. A simple downsizing coordination might take 2–3 weeks. A full estate settlement with repairs and modifications could take 6–8 weeks. We'll give you a realistic timeline during the planning phase and keep you updated throughout.",
    },
    {
      question: "What if something goes wrong?",
      answer:
        "We're accountable. If a vendor falls short, we handle it. If timelines shift, we communicate immediately. Our job is to solve problems so you don't have to—that's what \"one accountable partner\" means.",
    },
  ]

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-[var(--color-everstead-charcoal)] text-balance">
              Questions we hear often
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[var(--color-everstead-sage-light)] border-none rounded-xl px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-[var(--color-everstead-blue-dark)] hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
