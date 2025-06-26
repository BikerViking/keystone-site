import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      aria-label="Hero Section"
      className="relative flex min-h-screen flex-col items-center justify-center text-center bg-cover bg-center text-gray-200"
      style={{ backgroundImage: "url('/bg-texture.PNG')" }}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true" />

      <img
        src="/logo.PNG"
        alt="Keystone Notary Group logo"
        className="w-48 md:w-64"
      />
      <p className="mt-6 text-xl font-light">
        Mobile Notary Services • Pennsylvania
      </p>

      <nav aria-label="Main" className="mt-8 space-x-4 text-sm uppercase">
        <a href="#" className="hover:underline">
          Home
        </a>
        <span aria-hidden="true">&bull;</span>
        <a href="#" className="hover:underline">
          About
        </a>
        <span aria-hidden="true">&bull;</span>
        <Link to="/services" className="hover:underline">
          Services
        </Link>
        <span aria-hidden="true">&bull;</span>
        <a href="#" className="hover:underline">
          FAQ
        </a>
        <span aria-hidden="true">&bull;</span>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </nav>
    </section>
  );
}
