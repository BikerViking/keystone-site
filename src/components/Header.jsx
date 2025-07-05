import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const firstRef = useRef(null);
  const lastRef = useRef(null);

  const toggleMenu = () => setOpen((v) => !v);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const body = document.body;
    if (open) {
      body.classList.add("overflow-hidden");
      firstRef.current?.focus();
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [open]);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enabled = stored ? stored === 'dark' : prefersDark;
    document.body.classList.toggle('dark', enabled);
    setDark(enabled);
  }, []);

  const toggleTheme = () => {
    setDark((prev) => {
      const next = !prev;
      document.body.classList.toggle('dark', next);
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  };

  // Toggle a subtle shadow once the user scrolls down the page
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === firstRef.current) {
          e.preventDefault();
          lastRef.current?.focus();
        }
      } else if (document.activeElement === lastRef.current) {
        e.preventDefault();
        firstRef.current?.focus();
      }
    } else if (e.key === "Escape") {
      closeMenu();
    }
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 z-50 w-full flex items-center justify-between border-b backdrop-blur transition-shadow duration-300 bg-white/70 text-gray-800 border-gray-200 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-950 dark:to-black dark:text-gray-200 dark:border-gray-800 ${
        scrolled ? "shadow-sm" : "shadow-none"
      }`}
    >
      <h1 className="sr-only">Keystone Notary Group</h1>
      <div className="flex w-full items-center justify-between px-4">
        {/* Theme toggle button */}
        <button
          type="button"
          aria-label="Toggle dark mode"
          onClick={toggleTheme}
          className="rounded border border-gray-600 px-3 min-h-[36px] py-1 text-xs uppercase tracking-wide text-gray-800 dark:text-gray-200 transition-transform duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md active:shadow-none focus:outline-none focus:ring-2 focus:ring-blue-600 mr-4"
        >
          {dark ? 'Light' : 'Dark'}
        </button>
        {/* Mobile navigation toggle */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={toggleMenu}
          className="ml-4 rounded border border-gray-600 px-6 min-h-[48px] py-1 text-xs uppercase tracking-wide text-gray-800 dark:text-gray-200 transition-transform duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md active:shadow-none focus:outline-none focus:ring-2 focus:ring-blue-600 sm:hidden"
        >
          Menu
        </button>
      </div>

      {/* Mobile menu overlay rendered in a portal to avoid stacking issues */}
      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              role="presentation"
              aria-label="Menu overlay"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="sm:hidden fixed inset-0 z-[9999] bg-black/80"
            >
              <motion.nav
                id="mobile-menu"
                aria-label="Mobile"
                onKeyDown={handleKeyDown}
                onClick={(e) => e.stopPropagation()}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed inset-0 w-full h-full bg-black z-50 flex flex-col"
              >
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
              ref={firstRef}
              className="absolute top-4 right-4 text-gray-800 dark:text-white text-2xl z-50 focus:outline-none"
            >
              &times;
            </button>
            <ul className="flex flex-col items-start space-y-4 px-6 py-8 text-lg">
            <li>
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-2 py-1 transition-transform duration-300 ease-in-out hover:-translate-y-0.5 hover:text-blue-400${isActive ? " underline text-blue-400" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-2 py-1 transition-transform duration-300 ease-in-out hover:-translate-y-0.5 hover:text-blue-400${isActive ? " underline text-blue-400" : ""}`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-2 py-1 transition-transform duration-300 ease-in-out hover:-translate-y-0.5 hover:text-blue-400${isActive ? " underline text-blue-400" : ""}`
                }
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={closeMenu}
                ref={lastRef}
                className={({ isActive }) =>
                  `block px-2 py-1 transition-transform duration-300 ease-in-out hover:-translate-y-0.5 hover:text-blue-400${isActive ? " underline text-blue-400" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </header>
  );
}
