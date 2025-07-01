import React from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <PageTransition>
      <LayoutWrapper>
        <motion.section
          aria-label="Services"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-b from-neutral-900 via-black to-neutral-950 mx-auto max-w-screen-lg px-4 pt-20 pb-24 text-gray-200 sm:px-6 lg:px-8 space-y-4 sm:space-y-6"
        >
          <h1 className="text-center">Our Services</h1>
          <div aria-hidden="true" className="border-b-2 border-blue-500 w-12 mx-auto mb-6" />

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
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.1 }}
                >
                  {text.includes('After-hours') ? (
                    <>
                      After-hours and emergency appointments
                      <span className="italic"> (additional surcharge applies)</span>
                    </>
                  ) : (
                    text
                  )}
                </motion.li>
              ))}
            </ul>
          </div>

        <p className="mt-6 text-center text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          <strong>We proudly work with:</strong>
          <br />
          Homeowners &bull; Attorneys &bull; Title Companies &bull; Real Estate Agents &bull;
          Financial Institutions &bull; Health & Senior Care Providers &bull; Individuals with
          urgent or specialized needs
        </p>
        {/* Decorative feather watermark */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 w-40 md:w-64 opacity-10 -z-10 animate-spin-slow"
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
        </motion.section>
      </LayoutWrapper>
    </PageTransition>
  );
}
