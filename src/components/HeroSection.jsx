import React from "react";

export default function HeroSection() {
  return (
    <section
      aria-label="Hero Section"
      className="flex min-h-screen items-center justify-center bg-neutral-950 text-white"
    >
      <div className="mx-auto max-w-2xl px-4 text-center">
        <h2 className="text-3xl font-bold sm:text-5xl">
          Mobile Notary Services in Pennsylvania
        </h2>
        <p className="mt-4 text-lg text-neutral-300 sm:text-xl">
          Trusted. Insured. Available when you need us.
        </p>
        <button
          type="button"
          className="mt-8 rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring focus-visible:ring-blue-400 focus-visible:ring-opacity-50"
        >
          Request a Signing
        </button>
      </div>
    </section>
  );
}
