import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
      className={`fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-gradient-to-b from-gray-900 via-gray-950 to-black backdrop-blur text-gray-200 transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : "shadow-none"
      }`}
    >
      <h1 className="sr-only">Keystone Notary Group</h1>
      <div className="mx-auto flex max-w-screen-xl items-center justify-end px-4 sm:px-6">
        {/* Mobile navigation toggle */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={toggleMenu}
          className="ml-4 rounded border border-gray-600 px-6 min-h-[48px] py-1 text-xs uppercase tracking-wide text-gray-200 transition-transform duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md active:shadow-none focus:outline-none focus:ring-2 focus:ring-blue-600 sm:hidden"
        >
          Menu
        </button>
      </div>

      {/* Mobile menu overlay rendered in a portal to avoid stacking issues */}
      {createPortal(
        <div
          role="presentation"
          aria-hidden={!open}
          aria-label="Menu overlay"
          className={`sm:hidden fixed inset-0 z-[9999] bg-black/80 transition-opacity duration-300 ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={closeMenu}
        >
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            onKeyDown={handleKeyDown}
            onClick={(e) => e.stopPropagation()}
            className={`fixed right-0 top-0 bottom-0 w-64 transform bg-gray-900 text-white shadow-xl transition-all duration-300 ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
              ref={firstRef}
              className="absolute top-4 right-4 text-white text-2xl z-50 focus:outline-none"
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
        </nav>
        </div>,
        document.body
      )}
    </header>
  );
}
