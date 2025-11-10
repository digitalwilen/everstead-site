"use client";

import { useEffect, useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics";

const FORMSPREE_URL = "https://formspree.io/f/xrbrggob"; // step 0 paste here

type Status = "idle" | "submitting" | "ok" | "error";

export function ClarityCallSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errs, setErrs] = useState<Record<string, string>>({});
  const [tz, setTz] = useState<string>("");
  const utms = useMemo(() => {
    if (typeof window === "undefined") return {};
    const p = new URLSearchParams(window.location.search);
    return {
      utm_source: p.get("utm_source") ?? "",
      utm_medium: p.get("utm_medium") ?? "",
      utm_campaign: p.get("utm_campaign") ?? "",
    };
  }, []);

  useEffect(() => {
    try { setTz(Intl.DateTimeFormat().resolvedOptions().timeZone || ""); } catch {}
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrs({});
    setStatus("submitting");

    const fd = new FormData(e.currentTarget);

    // honeypot
    if ((fd.get("company") as string)?.trim()) {
      setStatus("ok"); // silently drop bots
      return;
    }

    // client validation
    const required = ["name", "email", "zip"];
    const newErrs: Record<string, string> = {};
    required.forEach((k) => {
      if (!(fd.get(k) as string)?.trim()) newErrs[k] = "Required";
    });
    if ((fd.get("zip") as string)?.trim() && !/^\d{5}$/.test(fd.get("zip") as string)) {
      newErrs["zip"] = "Enter 5 digits";
    }
    if (Object.keys(newErrs).length) {
      setErrs(newErrs);
      setStatus("idle");
      return;
    }

    // tracking meta
    fd.append("source", "everstead-site");
    fd.append("timezone", tz);
    fd.append("utm_source", utms.utm_source || "");
    fd.append("utm_medium", utms.utm_medium || "");
    fd.append("utm_campaign", utms.utm_campaign || "");

    try {
      const r = await fetch(FORMSPREE_URL, { method: "POST", body: fd, headers: { Accept: "application/json" } });
      if (r.ok) {
        setStatus("ok");
        trackEvent("lead_submitted", { location: "clarity_call" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="clarity-call" className="bg-[var(--color-everstead-footer)] py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 md:grid md:grid-cols-5 md:gap-10">
        {/* Left: reassurance */}
        <div className="md:col-span-2 mb-10 md:mb-0">
          <h3 className="text-2xl md:text-3xl font-serif text-white">Let’s start with a few details.</h3>
          <p className="mt-3 text-gray-200">
            Share what’s going on. We’ll reply within one business day to schedule your free clarity call.
          </p>
          <ul className="mt-6 space-y-2 text-gray-300 text-sm">
            <li>• Your information stays private</li>
            <li>• No obligation</li>
            <li>• Serving Austin, TX & Raleigh, NC</li>
          </ul>
        </div>

        {/* Right: form card */}
        <div className="md:col-span-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-8">
            {status === "ok" ? (
              <div className="text-center py-10">
                <p className="text-xl font-semibold text-white">Thank you.</p>
                <p className="mt-2 text-gray-200">
                  We received your request and will reach out within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} aria-live="polite" noValidate>
                {/* honeypot */}
                <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-300">Your name*</label>
                    <input
                      id="name" name="name" autoComplete="name"
                      className="mt-1 w-full rounded-lg bg-black/20 text-white px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                      aria-invalid={!!errs.name} />
                    {errs.name && <p className="text-red-300 text-xs mt-1">{errs.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-300">Email*</label>
                    <input
                      id="email" name="email" type="email" autoComplete="email"
                      className="mt-1 w-full rounded-lg bg-black/20 text-white px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                      aria-invalid={!!errs.email} />
                    {errs.email && <p className="text-red-300 text-xs mt-1">{errs.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-sm text-gray-300">ZIP code*</label>
                    <input
                      id="zip" name="zip" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} autoComplete="postal-code"
                      className="mt-1 w-full rounded-lg bg-black/20 text-white px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                      aria-invalid={!!errs.zip} />
                    {errs.zip && <p className="text-red-300 text-xs mt-1">{errs.zip}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm text-gray-300">Phone (optional)</label>
                    <input
                      id="phone" name="phone" inputMode="tel" autoComplete="tel"
                      className="mt-1 w-full rounded-lg bg-black/20 text-white px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-white/40" />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="relationship" className="block text-sm text-gray-300">Who are you helping? (optional)</label>
                    <input
                      id="relationship" name="relationship" placeholder="e.g., my mother"
                      className="mt-1 w-full rounded-lg bg-black/20 text-white px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-white/40" />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="context" className="block text-sm text-gray-300">Briefly describe your situation (optional)</label>
                    <textarea
                      id="context" name="context" rows={4}
                      className="mt-1 w-full rounded-lg bg-black/20 text-white px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-white/40" />
                  </div>
                </div>

                {/* hidden tracking fields */}
                <input type="hidden" name="source" value="everstead-site" />
                <input type="hidden" name="timezone" value={tz} />
                <input type="hidden" name="utm_source" value={utms.utm_source || ""} />
                <input type="hidden" name="utm_medium" value={utms.utm_medium || ""} />
                <input type="hidden" name="utm_campaign" value={utms.utm_campaign || ""} />

                <div className="mt-6 flex items-center gap-4">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center justify-center rounded-xl bg-[var(--color-everstead-green)] text-white px-5 py-3 font-semibold disabled:opacity-70">
                    {status === "submitting" ? "Sending..." : "Request call"}
                  </button>
                  {status === "error" && (
                    <p className="text-red-300 text-sm">
                      Something went wrong. Please try again or email hello@everstead.com.
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
