"use client";
import { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState("idle");

  return (
    <form
      action="https://formspree.io/f/xrbrggob"
      method="POST"
      onSubmit={() => setState("sending")}
      className="space-y-4 max-w-lg"
    >
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

      <div>
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" required className="mt-1 w-full rounded-md border p-2" />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md border p-2" />
      </div>

      <div>
        <label htmlFor="context">What’s going on?</label>
        <textarea id="context" name="context" rows={4} required className="mt-1 w-full rounded-md border p-2" />
      </div>

      <input type="hidden" name="_next" value="/thanks" />
      <input type="hidden" name="_subject" value="Everstead: New Clarity Call" />

      <button
        type="submit"
        disabled={state === "sending"}
        className="inline-flex items-center rounded-md bg-emerald-700 px-4 py-2 text-white"
      >
        {state === "sending" ? "Sending…" : "Request call"}
      </button>
    </form>
  );
}
