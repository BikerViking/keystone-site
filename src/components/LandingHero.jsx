import React from "react";
import { Link } from "react-router-dom";

export default function LandingHero() {
  const navItems = ["Home", "About", "Services", "FAQ", "Contact"];

  return (
    <section
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-neutral-900 text-gray-200 overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/bg-texture.PNG')" }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto w-full max-w-screen-md px-4 py-12 text-center sm:py-16">
        <img
          src="/logo.PNG"
          alt="Keystone Notary Group logo"
          className="mx-auto w-40 sm:w-52 md:w-64"
        />
        <p className="mt-4 text-sm tracking-wide text-amber-200 sm:mt-6 sm:text-base">
          Mobile Notary Services • Pennsylvania
        </p>

        <nav className="mt-10 sm:mt-12" aria-label="Site navigation">

        <div className="mt-10 sm:mt-12">
         main
          <ul className="space-y-2 text-sm font-medium uppercase text-gray-300 sm:flex sm:justify-center sm:gap-6 sm:space-y-0">
            {navItems.map((label) => (
              <li key={label}>
                <Link
                  to={`/${label.toLowerCase() === "home" ? "" : label.toLowerCase()}`}
                  className="block px-2 py-1 transition-colors hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
