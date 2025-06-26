import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      aria-label="Hero Section"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center text-gray-200"
    >
      <div className="bg-black/70 p-6 rounded-md">
        <img
          src="/logo.PNG"
          alt="Keystone Notary Group logo"
          className="mx-auto w-48 md:w-64 shadow-lg shadow-black/60"
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
      </div>
    </section>
  );
}
