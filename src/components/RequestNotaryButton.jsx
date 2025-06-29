import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Fixed mobile button that navigates to the contact section.
 */
export default function RequestNotaryButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact#contact");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Request Notary"
      className="sm:hidden fixed bottom-4 left-1/2 z-40 -translate-x-1/2 rounded-full bg-blue-600 px-6 min-h-[48px] py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      Request Notary
    </button>
  );
}
