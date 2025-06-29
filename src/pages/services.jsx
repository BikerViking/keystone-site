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
        className={`bg-black mx-auto max-w-screen-lg px-4 py-12 lg:py-20 text-gray-200 sm:px-6 lg:px-8 opacity-0 translate-y-6 transition-all duration-700 ease-in-out ${visible ? "opacity-100 translate-y-0" : ""}`}
      >
        <h1 className="mb-2 text-center">
          Our Services
        </h1>
        <div aria-hidden="true" className="border-t border-gray-600 w-12 mx-auto mt-4 opacity-60" />

        <div className="space-y-8">
          {/* Add subtle dividers between list items for improved readability */}
          <ul className="list-disc list-inside divide-y divide-gray-400/20 space-y-4 text-left text-base sm:text-lg text-gray-300">
            <li>
              General notary work including acknowledgments, oaths,
              affirmations, and signature witnessing
            </li>
            <li>
              Loan signing services for real estate closings, refinances, and
              mortgage documents
            </li>
            <li>Power of attorney, wills, and estate planning notarizations</li>
            <li>
              Real estate transaction support for buyers, sellers, and agents
            </li>
            <li>
              After-hours and emergency appointments
              <span className="italic"> (additional surcharge applies)</span>
            </li>
            <li>
              Mobile services to homes, offices, hospitals, financial
              institutions, attorney offices, senior care facilities, and public
              meeting locations
            </li>
          </ul>
        </div>

        <p className="mt-6 text-center text-base sm:text-lg text-gray-300">
          <strong>We proudly work with:</strong>
          <br />
          Homeowners &bull; Attorneys &bull; Title Companies &bull; Real Estate Agents &bull;
          Financial Institutions &bull; Health & Senior Care Providers &bull; Individuals with
          urgent or specialized needs
        </p>
      </section>
    </LayoutWrapper>
  );
}
