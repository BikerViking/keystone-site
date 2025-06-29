import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    return () => {
      window.removeEventListener("focusin", focusIn);
      window.removeEventListener("focusout", focusOut);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed bottom-4 left-4 right-4 z-50 md:hidden ${
        hidden ? "hidden" : ""
      }`}
    >
      <button
        type="button"
        onClick={handleClick}
        aria-label="Request Notary"
        className="pointer-events-auto w-full bg-blue-600 text-white text-center py-4 rounded-md shadow-lg text-lg font-semibold transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Request Notary
      </button>
    </div>
  );
}
