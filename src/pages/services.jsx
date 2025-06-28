import React from "react";
import LayoutWrapper from "../components/LayoutWrapper";

export default function ServicesPage() {
  return (
    <LayoutWrapper>
      {/* Extra bottom padding keeps the NNA seal from overlapping page text */}
      <div className="relative w-full pb-64 pr-8">
        <section
          aria-label="Services"
          className="mx-auto max-w-screen-lg px-4 py-12 text-gray-200 sm:px-6 sm:py-16 lg:px-8"
        >
          <h1 className="mb-8 text-center text-2xl font-semibold tracking-wide sm:mb-12 sm:text-3xl">
            Our Services
          </h1>

          <div className="space-y-8">
            <ul className="list-disc list-inside space-y-4 text-left text-lg text-gray-300">
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

          <p className="mt-6 text-center text-lg text-gray-300">
            <strong>We proudly work with:</strong>
            <br />
            Homeowners &bull; Attorneys &bull; Title Companies &bull; Real Estate Agents &bull;
            Financial Institutions &bull; Health & Senior Care Providers &bull; Individuals with
            urgent or specialized needs
          </p>
        </section>

        {/* NNA Seal Floating on Screen Corner */}
        {/* Position seal at bottom right so it doesn't overlap the content */}
        <img
          src="/nna-seal.PNG"
          alt="NNA Certified Notary Signing Agent 2025"
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-4 h-40 w-auto rotate-[10deg] shadow-2xl z-50"
        />
      </div>
    </LayoutWrapper>
  );
}
