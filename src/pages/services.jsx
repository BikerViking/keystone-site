import React from "react";
import LayoutWrapper from "../components/LayoutWrapper";

export default function ServicesPage() {
  return (
    <LayoutWrapper>
      <section aria-label="Services" className="mx-auto max-w-2xl px-4 py-20 text-gray-200">
        <h1 className="mb-12 text-center text-3xl font-semibold">Our Services</h1>
        <div className="space-y-8">
          <div className="rounded bg-neutral-800 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">General Notary Work</h2>
            <p className="mt-2 text-gray-400">
              Acknowledgements, jurats, oaths, affirmations, and more.
            </p>
          </div>
          <div className="rounded bg-neutral-800 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Loan Signing Agent</h2>
            <p className="mt-2 text-gray-400">
              Specialized in real estate closings and loan document notarizations.
            </p>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
