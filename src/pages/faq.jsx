import React, { useState } from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";

export default function FaqPage() {
  const faqs = [
    {
      q: "What do I need to bring to my notary appointment?",
      a: "A valid, government-issued photo ID is required for all notarizations.",
    },
    {
      q: "Do you offer mobile notary services?",
      a: "Yes. We travel to your home, business, or public meeting location in Bucks and Montgomery County.",
    },
    {
      q: "What types of documents can you notarize?",
      a: "We notarize affidavits, acknowledgements, jurats, power of attorney forms, real estate documents, and more.",
    },
    {
      q: "Are you certified and insured?",
      a: "Yes. We are NNA Certified and carry errors & omissions insurance.",
    },
    {
      q: "Do you provide after-hours or emergency service?",
      a: "Yes. After-hours and emergency appointments are available upon request and subject to availability. An additional surcharge may apply.",
    },
  ];

  // Track which FAQ item is currently expanded. Only one can be open at a time.
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle the open index when a question is clicked
  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <PageTransition>
      <LayoutWrapper>
        <motion.section
          aria-label="Frequently Asked Questions"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-b from-neutral-900 via-black to-neutral-950 rounded-t-[3rem] mx-auto max-w-screen-lg px-4 pt-20 pb-24 text-gray-200 sm:px-6 lg:px-8 space-y-4 sm:space-y-6"
        >
        <h1 className="text-center">
          Frequently Asked Questions
        </h1>
        <div aria-hidden="true" className="border-b-2 border-blue-500 w-12 mx-auto mb-6" />
        <dl className="space-y-6 sm:space-y-8">
          {faqs.map(({ q, a }, idx) => (
            <motion.div
              key={q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.1 }}
              className="rounded bg-neutral-800 p-4 sm:p-6 shadow-sm"
            >
              <dt>
                <button
                  type="button"
                  className="flex w-full items-center justify-between text-left text-base font-medium text-gray-100 sm:text-lg"
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-panel-${idx}`}
                  onClick={() => toggle(idx)}
                >
                  <span>{q}</span>
                  <svg
                    className={`ml-2 h-5 w-5 transform transition-transform duration-300 ${
                      openIndex === idx ? 'rotate-180' : ''
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </dt>
              <dd
                id={`faq-panel-${idx}`}
                className={`mt-2 overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? 'max-h-96' : 'max-h-0'
                }`}
                aria-hidden={openIndex !== idx}
              >
                <p className="text-left text-gray-400 pb-2">{a}</p>
              </dd>
            </motion.div>
          ))}
        </dl>
        <div className="mt-12 rounded-lg border border-blue-500/30 bg-neutral-800 p-6 text-center shadow-inner">
          <h2 className="text-center text-3xl font-semibold tracking-wide text-white mb-8">Still have questions?</h2>
          <div aria-hidden="true" className="mx-auto mb-6 h-0.5 w-24 bg-gradient-to-r from-blue-500/50 to-blue-500/0" />
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact#contact"
            className="inline-block min-h-[48px] rounded-md bg-blue-600 px-6 py-2 font-semibold text-white shadow transition-transform duration-200 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-neutral-900"
          >
            Contact Us
          </motion.a>
        </div>
        </motion.section>
      </LayoutWrapper>
    </PageTransition>
  );
}
