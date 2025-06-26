import React from "react";

export default function HeroSection() {
  return (
    <section
      aria-label="Hero Section"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-black text-gray-200"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent)]" />
      <div className="mx-auto max-w-2xl px-6 py-12 text-center backdrop-blur-md ring-1 ring-white/10 bg-neutral-800/20 shadow-lg">
        <h2 className="text-4xl font-semibold tracking-wide uppercase">
          Mobile Notary Services in Pennsylvania
        </h2>
        <p className="mt-6 text-lg text-neutral-300">
          Trusted. Insured. Available when you need us.
        </p>
        <button
          type="button"
          className="mt-8 bg-blue-600 px-6 py-3 font-semibold uppercase tracking-wide text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Request a Signing
        </button>
      </div>
    </section>
  );
}
