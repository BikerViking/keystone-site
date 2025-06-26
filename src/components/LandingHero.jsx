import React from "react";
import { Link } from "react-router-dom";

export default function LandingHero() {
  return (
    <section
      aria-label="Landing Hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-4 text-center text-gray-200 filter brightness-125 sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('/bg-texture.PNG')" }}
    >
      <div className="p-6 sm:p-8">
        <img
          src="/logo.PNG"
          alt="Keystone Notary Group logo"
          className="mx-auto w-40 sm:w-52 md:w-64 bg-transparent"
        />
        <p className="mt-4 text-base font-light tracking-wide sm:mt-6 sm:text-lg md:text-xl">
          Mobile Notary Services • Pennsylvania
        </p>

        <nav
          aria-label="Main navigation"
          className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium uppercase"
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
