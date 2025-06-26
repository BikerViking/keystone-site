import React from "react";
import LayoutWrapper from "../components/LayoutWrapper";

export default function ServicesPage() {
  return (
    <LayoutWrapper>
      <section
        aria-label="Services"
        className="mx-auto max-w-screen-lg px-4 py-12 text-gray-200 sm:px-6 sm:py-16 lg:px-8"
      >
        <h1 className="mb-8 text-center text-2xl font-semibold tracking-wide sm:mb-12 sm:text-3xl">
          Our Services
        </h1>
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
