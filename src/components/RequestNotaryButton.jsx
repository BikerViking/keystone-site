import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * Fixed mobile button that navigates to the contact section.
 * Hides when form fields are focused to avoid keyboard overlap on iOS Safari.
 */
export default function RequestNotaryButton() {
  const navigate = useNavigate();
  const [hidden, setHidden] = useState(false);

  const handleClick = () => {
    navigate("/contact#contact");
  };

  useEffect(() => {
    const focusIn = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
        setHidden(true);
      }
    };
    const focusOut = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
        setHidden(false);
      }
    };
    window.addEventListener("focusin", focusIn);
    window.addEventListener("focusout", focusOut);
    let observer;
    const heroCta = document.getElementById("hero-request-notary");
    if (heroCta) {
      observer = new IntersectionObserver(
        ([entry]) => setHidden(entry.isIntersecting),
        { threshold: 0.1 }
      );
      observer.observe(heroCta);
    }
    return () => {
      window.removeEventListener("focusin", focusIn);
      window.removeEventListener("focusout", focusOut);
      observer?.disconnect();
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed bottom-4 left-0 right-0 z-50 md:hidden ${
        hidden ? "hidden" : ""
      }`}
    >
      <motion.button
        type="button"
        onClick={handleClick}
        aria-label="Request Notary"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative pointer-events-auto w-full max-w-[400px] mx-auto px-4 bg-blue-600 text-white text-center py-4 rounded-md shadow-lg text-lg font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] focus:outline-none focus:ring-2 focus:ring-blue-400 ring-1 ring-blue-500/40 before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-gradient-radial before:from-blue-600/30 before:to-transparent before:blur-2xl"
      >
        Request Notary
      </motion.button>
    </div>
  );
}
