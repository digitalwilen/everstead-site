export function trackEvent(name: string, params: Record<string, any> = {}) {
  // Track with Google Analytics 4
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", name, params)
  }

  // Track with Vercel Analytics
  if (typeof window !== "undefined" && (window as any).va) {
    ;(window as any).va("track", name, params)
  }

  // Log in development
  if (process.env.NODE_ENV === "development") {
    console.log("[Analytics]", name, params)
  }
}

// Helper functions for common events
export function trackCtaClick(ctaText: string, location: string) {
  trackEvent("cta_click", {
    cta_type: ctaText.toLowerCase().replace(/\s+/g, "_"),
    location,
  })
}

export function trackConsultationRequest(source: string) {
  trackEvent("consultation_request", { source })
}

export function trackPlanRequest(source: string) {
  trackEvent("plan_request", { source })
}
