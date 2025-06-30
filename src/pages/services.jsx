import React from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import useScrollReveal from "../hooks/useScrollReveal";

export default function ServicesPage() {
  const [ref, visible] = useScrollReveal();
  return (
    <LayoutWrapper>
      <section
        aria-label="Services"
        ref={ref}
        className={`relative overflow-hidden bg-black mx-auto max-w-screen-lg px-4 py-12 lg:py-20 text-gray-200 sm:px-6 lg:px-8 opacity-0 translate-y-6 transition-all duration-700 ease-in-out ${visible ? "opacity-100 translate-y-0" : ""}`}
      >
        <h1 className="mb-2 text-center">
          Our Services
        </h1>
        <div aria-hidden="true" className="border-t border-gray-600 w-12 mx-auto mt-4 opacity-60" />

        <div className="space-y-8">
          {/* Add subtle dividers between list items for improved readability */}
          <ul className="list-disc list-inside divide-y divide-gray-400/20 space-y-4 text-left text-base sm:text-lg text-gray-300">
            {[
              'General notary work including acknowledgments, oaths, affirmations, and signature witnessing',
              'Loan signing services for real estate closings, refinances, and mortgage documents',
              'Power of attorney, wills, and estate planning notarizations',
              'Real estate transaction support for buyers, sellers, and agents',
              'After-hours and emergency appointments',
              'Mobile services to homes, offices, hospitals, financial institutions, attorney offices, senior care facilities, and public meeting locations',
            ].map((text, idx) => (
              <li
                key={idx}
                className={`opacity-0 translate-y-3 transition-all duration-700 ease-in-out ${
                  visible ? 'opacity-100 translate-y-0' : ''
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {text.includes('After-hours') ? (
                  <>
                    After-hours and emergency appointments
                    <span className="italic"> (additional surcharge applies)</span>
                  </>
                ) : (
                  text
                )}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 text-center text-base sm:text-lg text-gray-300">
          <strong>We proudly work with:</strong>
          <br />
          Homeowners &bull; Attorneys &bull; Title Companies &bull; Real Estate Agents &bull;
          Financial Institutions &bull; Health & Senior Care Providers &bull; Individuals with
          urgent or specialized needs
        </p>
        {/* Decorative feather watermark */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 w-40 md:w-64 opacity-10 -z-10"
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
      </section>
    </LayoutWrapper>
  );
}
