import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "I was drowning trying to coordinate my mother's move to assisted living. Everstead took over everything—the movers, the estate sale, even the repairs. I could finally just be her daughter again.",
      author: "Sarah M.",
      location: "Austin, TX",
    },
    {
      quote:
        "After my father passed, we had to clear out the family home from across the country. Everstead handled it all with such care and respect. They sent us photos, kept us updated, and made an impossible situation manageable.",
      author: "Michael R.",
      location: "Raleigh, NC",
    },
    {
      quote:
        "We wanted to age in place but didn't know where to start. Everstead coordinated the grab bars, ramp, and lighting—all the modifications we needed. Now we feel safe and independent in our own home.",
      author: "Patricia & James L.",
      location: "Austin, TX",
    },
  ]

  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2
              id="testimonials-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-[var(--color-everstead-charcoal)] text-balance"
            >
              What families are saying
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-[var(--color-everstead-sage-light)] border-none rounded-xl">
                <CardContent className="p-6 md:p-8 space-y-6">
                  <div className="text-4xl text-[var(--color-everstead-blue)] opacity-30" aria-hidden="true">
                    "
                  </div>
                  <p className="text-gray-900 leading-relaxed text-base md:text-lg -mt-4">{testimonial.quote}</p>
                  <div className="pt-4 border-t border-gray-300">
                    <p className="font-semibold text-[var(--color-everstead-blue-dark)]">{testimonial.author}</p>
                    <p className="text-sm text-gray-700">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
