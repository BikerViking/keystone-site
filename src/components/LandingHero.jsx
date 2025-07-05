import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function LandingHero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-950 text-gray-200">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/bg-texture.PNG')" }}
        aria-hidden="true"
      />
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 text-center">
        <motion.img
          src="/logo.PNG"
          alt="Keystone Notary Group logo"
          className="w-48 sm:w-56"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h2
          className="mt-8 font-display text-3xl font-semibold tracking-tight sm:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Mobile Notary Services in Pennsylvania
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10"
        >
          <Link
            id="hero-request-notary"
            to="/contact"
            className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Request Notary
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
