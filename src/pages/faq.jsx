import React from "react";
import LayoutWrapper from "../components/LayoutWrapper";

export default function FaqPage() {
  const faqs = [
    {
      q: "What do I need to bring to my notary appointment?",
      a: "A valid, government-issued photo ID is required for all notarizations.",
    },
    {
      q: "Do you offer mobile notary services?",
      a: "Yes. We travel to your home, business, or public meeting location in Bucks and Montgomery County.",
    },
    {
      q: "What types of documents can you notarize?",
      a: "We notarize affidavits, acknowledgements, jurats, power of attorney forms, real estate documents, and more.",
    },
    {
      q: "Are you certified and insured?",
      a: "Yes. We are NNA Certified and carry errors & omissions insurance.",
    },
    {
      q: "Do you provide after-hours or emergency service?",
      a: "Yes. After-hours and emergency appointments are available upon request and subject to availability.",
    },
  ];

  return (
    <LayoutWrapper>
      <section
        aria-label="Frequently Asked Questions"
        className="mx-auto max-w-3xl px-4 py-16 text-gray-200 sm:py-24"
      >
        <h1 className="mb-10 text-center text-2xl font-semibold tracking-wide sm:text-3xl">
          Frequently Asked Questions
        </h1>
        <div className="space-y-8">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded bg-neutral-800 p-6 shadow-sm">
              <h2 className="text-lg font-medium text-gray-100">{q}</h2>
              <p className="mt-2 text-gray-400">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </LayoutWrapper>
  );
}
