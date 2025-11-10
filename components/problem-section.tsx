export function ProblemSection() {
  const challenges = [
    "Coordinating multiple movers and schedules",
    "Organizing estate sales and donations",
    "Managing home repairs and modifications",
    "Sorting through decades of belongings",
    "Handling paperwork and documentation",
    "Making decisions under emotional stress",
  ]

  return (
    <section className="bg-[var(--color-everstead-sage-light)] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--color-everstead-blue-dark)] text-balance">
            The to-do list feels endless. The stakes feel high.
          </h2>

          <p className="text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto">
            When families face downsizing, aging in place, or settling an estate, the coordination alone can be
            overwhelming.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pt-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[var(--color-everstead-blue)] flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-gray-800 text-left leading-relaxed text-base md:text-lg">{challenge}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
