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
        <div className="mx-auto max-w-screen-md p-8 sm:p-10">
          <img
            src="/logo.PNG"
            alt="Keystone Notary Group logo"
            className="mx-auto w-40 bg-transparent sm:w-52 md:w-64"
          />
        <p className="mt-4 text-base font-light tracking-wide sm:mt-6 sm:text-lg md:text-xl">
          Mobile Notary Services • Pennsylvania
        </p>

        <nav
          aria-label="Main navigation"
          className="mt-8 sm:mt-10"
        >
          <ul className="flex items-center justify-center gap-2 text-sm font-medium uppercase sm:gap-3">
            <li>
              <Link
                to="/"
                className="text-gray-400 transition-colors hover:text-white focus-visible:text-white"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="select-none text-gray-400">&bull;</li>
            <li>
              <Link
                to="/about"
                className="text-gray-400 transition-colors hover:text-white focus-visible:text-white"
              >
                About
              </Link>
            </li>
            <li aria-hidden="true" className="select-none text-gray-400">&bull;</li>
            <li>
              <Link
                to="/services"
                className="text-gray-400 transition-colors hover:text-white focus-visible:text-white"
              >
                Services
              </Link>
            </li>
            <li aria-hidden="true" className="select-none text-gray-400">&bull;</li>
            <li>
              <Link
                to="/faq"
                className="text-gray-400 transition-colors hover:text-white focus-visible:text-white"
              >
                FAQ
              </Link>
            </li>
            <li aria-hidden="true" className="select-none text-gray-400">&bull;</li>
            <li>
              <Link
                to="/contact"
                className="text-gray-400 transition-colors hover:text-white focus-visible:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        </div>
      </div>
    </section>
  );
}
