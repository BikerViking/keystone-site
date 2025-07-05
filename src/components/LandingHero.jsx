import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function LandingHero() {
  const [fadeIn, setFadeIn] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  // Track scroll position for subtle parallax effect
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Delay fade-in on mount for smoother entrance
  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`space-y-12 opacity-0 transition-opacity duration-[2000ms] ease-out ${
        fadeIn ? "opacity-100" : ""
      }`}
    >
      <section
        className="relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-white py-12 text-gray-800 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-950 dark:to-black dark:text-gray-200 sm:py-16 md:py-20 lg:py-24"
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40 motion-safe:animate-bg-pan"
          style={{
            backgroundImage:
              "linear-gradient(rgba(246,242,238,0.45), rgba(246,242,238,0.45)),url('/bg-texture.PNG')",
            backgroundSize: "400% 400%",
          }}
          aria-hidden="true"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-5"
          style={{
            transform: `translateY(${offsetY * 0.2}px)`,
            backgroundImage: "url('/bg-texture.PNG')",
            backgroundSize: "cover",
          }}
        />
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-10rem] right-[-5rem] -z-10 w-64 rotate-[12deg] opacity-10 md:w-96 animate-spin-slower"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
          <line x1="16" y1="8" x2="2" y2="22" />
          <line x1="17.5" y1="15" x2="9" y2="15" />
        </svg>
        <section className="w-full px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex w-full flex-col items-center">
            {/* Subtle glow behind logo */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-radial from-blue-600/20 via-blue-600/10 to-transparent blur-2xl"
            />
            <motion.img
              src="/logo.PNG"
              alt="Keystone Notary Group logo"
              className="w-full object-contain invert drop-shadow dark:invert-0"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <motion.p
              className="mt-4 mb-4 w-full text-center tracking-wide text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              Mobile Notary Services in Pennsylvania
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              <Link
                id="hero-request-notary"
                to="/contact"
                className="mb-6 flex min-h-[48px] w-full items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-center font-semibold text-white transition-colors duration-300 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-600 sm:mb-8 sm:w-auto sm:px-6"
              >
                Request Notary
              </Link>
            </motion.div>
          </div>
        </section>
      </section>
    </div>
  );
}
