export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Intake",
      description: "We listen to your situation, timeline, and concerns in a free consultation.",
    },
    {
      number: "02",
      title: "Assessment",
      description: "We visit the home, understand the scope, and identify what needs to happen.",
    },
    {
      number: "03",
      title: "Plan",
      description: "You receive a clear written plan with vetted providers, transparent pricing, and a timeline.",
    },
    {
      number: "04",
      title: "Execution",
      description: "We coordinate everything—movers, repairs, sales—while keeping you informed.",
    },
    {
      number: "05",
      title: "Closure",
      description: "The home is ready, records are organized, and you have space to move forward.",
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--color-everstead-blue-dark)] text-balance">
              Five steps. One accountable partner.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              From first call to final walkthrough, we're with you every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-[var(--color-everstead-sage-light)] p-6 rounded-xl h-full space-y-4">
                  <div className="text-4xl font-bold text-[var(--color-everstead-blue)] opacity-40">{step.number}</div>
                  <h3 className="text-xl font-semibold text-[var(--color-everstead-blue-dark)]">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[var(--color-everstead-blue)] opacity-30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
