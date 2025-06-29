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
    <button
      type="button"
      onClick={handleClick}
      aria-label="Request Notary"
      className={`sm:hidden fixed bottom-0 left-0 right-0 z-50 w-full py-4 bg-blue-600 min-h-[48px] font-semibold text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 ${hidden ? "hidden" : ""}`}
    >
      Request Notary
    </button>
  );
}
