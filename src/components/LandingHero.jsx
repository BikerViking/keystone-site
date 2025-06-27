import React from "react";
import { Link } from "react-router-dom";

export default function LandingHero() {
  return (
    <section
      aria-label="Landing Hero"
      className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-neutral-900 text-gray-200"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/bg-texture.PNG')" }}
      />
      <div className="mx-auto w-full max-w-screen-md px-4 py-12 text-center sm:py-16">
        <img
          src="/logo.PNG"
          alt="Keystone Notary Group logo"
          className="mx-auto w-40 sm:w-52 md:w-64"
        />
        <h1 className="mt-4 text-base font-light tracking-wide text-amber-200 sm:mt-6 sm:text-lg md:text-xl">
          Mobile Notary Services • Pennsylvania
        </h1>

        <nav aria-label="Main navigation" className="mt-8 sm:mt-10">
          <ul className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium uppercase sm:gap-4">
            <li>
              <Link
                to="/"
                className="text-gray-300 transition-colors hover:text-white focus-visible:text-white"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="hidden select-none text-gray-400 sm:block">
              &bull;
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-300 transition-colors hover:text-white focus-visible:text-white"
              >
                About
              </Link>
            </li>
            <li aria-hidden="true" className="hidden select-none text-gray-400 sm:block">
              &bull;
            </li>
            <li>
              <Link
                to="/services"
                className="text-gray-300 transition-colors hover:text-white focus-visible:text-white"
              >
                Services
              </Link>
            </li>
            <li aria-hidden="true" className="hidden select-none text-gray-400 sm:block">
              &bull;
            </li>
            <li>
              <Link
                to="/faq"
                className="text-gray-300 transition-colors hover:text-white focus-visible:text-white"
              >
                FAQ
              </Link>
            </li>
            <li aria-hidden="true" className="hidden select-none text-gray-400 sm:block">
              &bull;
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-300 transition-colors hover:text-white focus-visible:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
