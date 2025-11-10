export function PricingSection() {
  return (
    <section className="bg-[var(--color-everstead-sage)] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-[var(--color-everstead-charcoal)] text-balance">
              Simple, predictable pricing
            </h2>
            <p className="text-xl text-gray-800 leading-relaxed">
              No surprises. No hidden fees. Just honest pricing for honest work.
            </p>
          </div>

          <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-semibold text-[var(--color-everstead-charcoal)]">
                How pricing works
              </h3>
              <p className="text-gray-800 leading-relaxed text-lg">
                Our coordination fee typically ranges from{" "}
                <strong className="text-[var(--color-everstead-green)]">15–25%</strong> of total project value,
                depending on scope and property size. Vendor costs are always transparent.
              </p>
              <p className="text-gray-700 italic pt-2">
                <strong>Example:</strong> $30,000 in vendor costs ={" "}
                <strong className="text-[var(--color-everstead-green)]">$4,500–$7,500</strong> Everstead coordination
                fee.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6 space-y-4">
              <h4 className="text-xl font-semibold text-[var(--color-everstead-blue-dark)]">What's included</h4>
              <ul className="space-y-3">
                {[
                  "Free phone consultation",
                  "Optional in-home assessment ($250–$500, credited if you proceed)",
                  "Written plan with vetted providers, transparent pricing, and timeline",
                  "Vendor coordination, scheduling, and regular progress updates",
                  "Quality oversight and problem-solving",
                  "Final documentation and organized records",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-[var(--color-everstead-blue)] flex-shrink-0 mt-0.5"
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
                    <span className="text-gray-800 leading-relaxed text-base md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-5 md:p-6 rounded-xl space-y-3">
              <h4 className="text-lg font-semibold text-[var(--color-everstead-blue-dark)]">
                Typical vendor ranges (Austin, TX)
              </h4>
              <div className="text-sm text-gray-700 leading-relaxed space-y-2">
                <p>
                  <span className="font-medium">Local move (2–3 BR):</span>{" "}
                  <span className="font-semibold">$700–$1,600</span> •
                  <span className="font-medium"> Packing help:</span> <span className="font-semibold">$280–$2,200</span>
                </p>
                <p>
                  <span className="font-medium">Aging-in-place:</span> grab bars{" "}
                  <span className="font-semibold">$200–$350 per bar</span> • ramps{" "}
                  <span className="font-semibold">$2,200–$7,500+</span> • accessible bath{" "}
                  <span className="font-semibold">$5,600–$12,000+</span>
                </p>
                <p>
                  <span className="font-medium">Estate sale:</span>{" "}
                  <span className="font-semibold">35–50% commission</span> on proceeds (avg sale often{" "}
                  <span className="font-semibold">$18k–$20k</span>)
                </p>
                <p>
                  <span className="font-medium">Junk removal:</span> single item{" "}
                  <span className="font-semibold">~$100</span> • ½ truck{" "}
                  <span className="font-semibold">$400–$600</span> • full truck{" "}
                  <span className="font-semibold">$600–$800</span>
                </p>
                <p>
                  <span className="font-medium">Light prep:</span> handyman{" "}
                  <span className="font-semibold">$200–$1,000</span> • paint single room{" "}
                  <span className="font-semibold">$400–$1,600</span> • typical 3–4 BR spruce-up{" "}
                  <span className="font-semibold">$2,000–$5,000</span> • landscaping refresh{" "}
                  <span className="font-semibold">$500–$1,500</span>
                </p>
              </div>
            </div>

            <div className="bg-[var(--color-everstead-sage-light)] p-5 md:p-6 rounded-xl">
              <p className="text-gray-900 leading-relaxed font-medium text-base md:text-lg">
                You'll receive a written estimate before any work begins. No commitment until you're ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
