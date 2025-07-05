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
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 text-center space-y-6">
        {/* Placeholder for upcoming logo reveal video */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-2xl aspect-video rounded-md bg-black/70 ring-1 ring-neutral-700 flex items-center justify-center"
        >
          {/* Remove this block and swap in <video> element when video is available */}
          <span className="font-display text-gray-400">Logo Reveal Coming Soon</span>
        </motion.div>

        <motion.h1
          className="font-display text-4xl sm:text-6xl font-semibold text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Keystone Notary Group, LLC
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          Mobile Notary Services in Pennsylvania
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <Link
            id="hero-request-notary"
            to="/contact"
            className="relative inline-flex min-h-[48px] items-center justify-center rounded-md bg-white/10 px-8 py-3 font-semibold text-gray-100 shadow hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-600 backdrop-blur"
          >
            Request Notary
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
