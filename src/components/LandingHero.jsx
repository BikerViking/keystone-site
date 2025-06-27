import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LandingHero() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ["Home", "About", "Services", "FAQ", "Contact"];

  return (
    <section
      aria-label="Landing Hero"
      className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-neutral-900 text-gray-200"
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
        <nav className="mt-8 hidden sm:block" aria-label="Main navigation">
          <ul className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium uppercase sm:gap-4">
            {navItems.map((label, idx) => (
              <React.Fragment key={label}>
                <li>
                  <Link
                    to={`/${label.toLowerCase() === "home" ? "" : label.toLowerCase()}`}
                    className="text-gray-300 transition-colors hover:text-white focus-visible:text-white"
                  >
                    {label}
                  </Link>
                </li>
                {idx < navItems.length - 1 && (
                  <li aria-hidden="true" className="hidden select-none text-gray-400 sm:block">
                    &bull;
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
        <div className="mt-6 sm:hidden">
          <button
            onClick={toggleMenu}
            className="rounded border border-gray-500 px-4 py-2 text-sm uppercase tracking-wide text-gray-200 hover:border-white"
          >
            {isOpen ? "Close Menu" : "Open Menu"}
          </button>
          {isOpen && (
            <ul className="mt-4 space-y-2 text-sm font-medium uppercase">
              {navItems.map((label) => (
                <li key={label}>
                  <Link
                    to={`/${label.toLowerCase() === "home" ? "" : label.toLowerCase()}`}
                    className="block text-gray-300 transition-colors hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
