import React from "react";

export default function HeroSection() {
  return (
    <section
      aria-label="Hero Section"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-neutral-950 text-gray-200 before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent)] before:blur-2xl"
    >
      <div className="mx-auto max-w-2xl rounded-xl bg-neutral-800/30 px-6 py-12 text-center backdrop-blur-md ring-1 ring-white/10">
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
