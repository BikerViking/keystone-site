import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      aria-label="Hero Section"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center text-gray-200"
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true" />

      <img
        src="/logo.PNG"
        alt="Keystone Notary Group logo"
        className="w-48 md:w-64 shadow-xl shadow-black/50 ring-1 ring-white/10 rounded-sm"
      />
      <p className="mt-6 text-base font-light tracking-wide sm:text-lg md:text-xl">
        Mobile Notary Services • Pennsylvania
      </p>

      <nav
        aria-label="Main navigation"
        className="mt-6 flex justify-center gap-6 flex-wrap text-sm font-medium uppercase"
      >
        <Link
          to="/"
          className="text-gray-400 transition-colors hover:text-white focus-visible:text-white"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-gray-400 transition-colors hover:text-white focus-visible:text-white"
        >
          About
        </Link>
        <Link
          to="/services"
          className="text-gray-400 transition-colors hover:text-white focus-visible:text-white"
        >
          Services
        </Link>
        <Link
          to="/faq"
          className="text-gray-400 transition-colors hover:text-white focus-visible:text-white"
        >
          FAQ
        </Link>
        <Link
          to="/contact"
          className="text-gray-400 transition-colors hover:text-white focus-visible:text-white"
        >
          Contact
        </Link>
      </nav>
    </section>
  );
}
