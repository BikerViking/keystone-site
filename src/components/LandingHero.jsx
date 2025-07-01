import React, { useEffect, useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function LandingHero() {
  // Map labels to in-page anchor targets
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];
  // Controls the full hero fade-in effect
  const [fadeIn, setFadeIn] = useState(false);
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
      a: "Yes. After-hours and emergency appointments are available upon request and subject to availability.",
    },
  ];
  // Track which FAQ item is expanded; only one can be open at a time
  const [openIndex, setOpenIndex] = useState(null);

  const [homeRef, homeVisible] = useScrollReveal();
  const [aboutRef, aboutVisible] = useScrollReveal();
  const [servicesRef, servicesVisible] = useScrollReveal();
  const [faqRef, faqVisible] = useScrollReveal();
  const [contactRef, contactVisible] = useScrollReveal();

  // Trigger the fade-in shortly after initial render so the transition runs
  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div
      className={`scroll-smooth space-y-12 opacity-0 transition-opacity duration-[2000ms] ease-out ${
        fadeIn ? "opacity-100" : ""
      }`}
    >
      <section
        id="home"
        ref={homeRef}
        className={`relative flex min-h-screen w-full flex-col items-center justify-center bg-black text-gray-200 overflow-hidden py-12 lg:py-20 opacity-0 translate-y-6 transition-all duration-700 ease-in-out ${homeVisible ? "opacity-100 translate-y-0" : ""}`}
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          /* Faint parchment overlay to subtly reinforce legal theme */
          style={{
            backgroundImage:
              "linear-gradient(rgba(246,242,238,0.45), rgba(246,242,238,0.45)), url('/bg-texture.PNG')",
          }}
          aria-hidden="true"
        ></div>

        <div className="relative z-10 mx-auto w-full max-w-screen-md px-4 py-12 lg:py-20 text-center">
          <div
            className="flex flex-col items-center border-b border-gray-800 bg-gradient-to-b from-black via-gray-950 to-transparent pb-4 pt-4"
          >
            <img
              src="/logo.PNG"
              alt="Keystone Notary Group logo"
              className="mx-auto mb-4 w-32 sm:w-36 md:w-40"
            />
            <p className="text-xs uppercase tracking-wide text-gray-400">
              Mobile Notary Services • Pennsylvania
            </p>
          </div>
          <nav
            className="mt-8 sm:mt-10 border-b border-gray-700 pb-4 shadow-md"
            aria-label="Main navigation"
            >
              <ul className="flex flex-col items-center space-y-3 sm:space-y-6 text-sm sm:text-base font-medium uppercase text-gray-300">
                {navItems.map(({ label, href }, idx) => (
                  <li
                    key={label}
                    className={`opacity-0 translate-y-3 transition-all duration-700 ease-in-out ${
                      homeVisible ? 'opacity-100 translate-y-0' : ''
                    }`}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <a
                      href={href}
                      className="block rounded px-2 py-1 transition-transform duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md hover:text-amber-300 focus:text-amber-300"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
      </section>
      {/* About Section */}
      <section
        id="about"
        ref={aboutRef}
        aria-label="About"
        className={`flex min-h-screen w-full flex-col items-center justify-center bg-neutral-900 px-4 py-12 lg:py-20 text-gray-200 sm:px-6 lg:px-8 opacity-0 translate-y-6 transition-all duration-700 ease-in-out ${aboutVisible ? "opacity-100 translate-y-0" : ""}`}
      >
        <div className="mx-auto max-w-screen-lg text-center">
          <h2 className="mb-2 sm:mb-4">
            About Keystone Notary Group
          </h2>
          <div aria-hidden="true" className="border-t border-gray-600 w-12 mx-auto mt-4 opacity-60" />
          {/* Ensure readability on small screens */}
          <p className="mx-auto max-w-prose text-base sm:text-lg text-gray-300">
            Keystone Notary Group, LLC is a mobile notary service dedicated to
            professionalism, punctuality, and privacy. We provide document
            notarization services throughout Bucks and Montgomery County,
            Pennsylvania.
          </p>
          <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2">
            <div className="rounded-lg bg-neutral-900 p-6 text-center shadow-md">
              <p className="font-medium">Certified Loan Signing Agent</p>
            </div>
            <div className="rounded-lg bg-neutral-900 p-6 text-center shadow-md">
              <p className="font-medium">NNA Certified and Insured</p>
            </div>
            <div className="rounded-lg bg-neutral-900 p-6 text-center shadow-md">
              <p className="font-medium">Serving Bucks & Montgomery County</p>
            </div>
            <div className="rounded-lg bg-neutral-900 p-6 text-center shadow-md">
              <p className="font-medium">
                After-Hours & Emergency Services Available
              </p>
            </div>
          </div>
          <p className="mt-10 text-sm text-gray-400">
            Commissioned in the Commonwealth of Pennsylvania
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        ref={servicesRef}
        aria-label="Services"
        className={`flex min-h-screen w-full flex-col items-center justify-center bg-gray-950 paper-texture px-4 py-12 lg:py-20 text-gray-200 sm:px-6 lg:px-8 opacity-0 translate-y-6 transition-all duration-700 ease-in-out ${servicesVisible ? "opacity-100 translate-y-0" : ""}`}
      >
        <div className="mx-auto w-full max-w-screen-lg">
          <h2 className="mb-2 text-center sm:mb-4">
            Our Services
          </h2>
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
                    servicesVisible ? 'opacity-100 translate-y-0' : ''
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
            <p className="mt-6 text-center text-base sm:text-lg text-gray-300">
              <strong>We proudly work with:</strong>
              <br />
              Homeowners &bull; Attorneys &bull; Title Companies &bull; Real
              Estate Agents &bull; Financial Institutions &bull; Health &amp;
              Senior Care Providers &bull; Individuals with urgent or
              specialized needs
            </p>
          </div>
        </div>
      </section>
      {/* Mobile separator between Services and FAQ */}
      <hr aria-hidden="true" className="border-neutral-700 sm:hidden" />

      {/* FAQ Section */}
      <section
        id="faq"
        ref={faqRef}
        aria-label="Frequently Asked Questions"
        className={`flex min-h-screen w-full flex-col items-center justify-center bg-neutral-900 rounded-t-[3rem] px-4 py-12 lg:py-20 text-gray-200 sm:px-6 lg:px-8 opacity-0 translate-y-6 transition-all duration-700 ease-in-out ${faqVisible ? "opacity-100 translate-y-0" : ""}`}
      >
        <div className="mx-auto w-full max-w-screen-lg">
          <h2 className="mb-2 text-center sm:mb-4">
            Frequently Asked Questions
          </h2>
          <div aria-hidden="true" className="border-t border-gray-600 w-12 mx-auto mt-4 opacity-60" />
          <dl className="space-y-6 sm:space-y-8">
            {faqs.map(({ q, a }, idx) => (
              <div
                key={q}
                className={`rounded-lg bg-neutral-900 p-6 shadow-md opacity-0 translate-y-3 transition-all duration-700 ease-in-out ${
                  faqVisible ? 'opacity-100 translate-y-0' : ''
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <dt>
                  <button
                    type="button"
                    aria-expanded={openIndex === idx}
                    aria-controls={`faq-panel-${idx}`}
                    onClick={() => toggleFaq(idx)}
                    className="flex w-full items-center justify-between text-left text-base font-medium text-gray-100 sm:text-lg"
                  >
                    <span>{q}</span>
                    <svg
                      className={`ml-2 h-5 w-5 transform transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </dt>
                <dd
                  id={`faq-panel-${idx}`}
                  className={`mt-2 overflow-hidden transition-all duration-300 ${openIndex === idx ? "max-h-96" : "max-h-0"}`}
                  aria-hidden={openIndex !== idx}
                >
                  <p className="text-left text-base sm:text-lg text-gray-300 pb-2">
                    {a}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      {/* Mobile separator between FAQ and Contact */}
      <hr aria-hidden="true" className="border-neutral-700 sm:hidden" />

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        aria-label="Contact"
        className={`flex min-h-screen w-full flex-col items-center justify-center bg-gray-950 paper-texture rounded-t-[3rem] px-4 py-12 lg:py-20 text-gray-200 sm:px-6 lg:px-8 opacity-0 translate-y-6 transition-all duration-700 ease-in-out ${contactVisible ? "opacity-100 translate-y-0" : ""}`}
      >
        <div className="mx-auto w-full max-w-screen-lg">
          <h2 className="mb-2 text-center sm:mb-4">
            Contact
          </h2>
          <div aria-hidden="true" className="border-t border-gray-600 w-12 mx-auto mt-4 opacity-60" />
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-2 w-full rounded-md border border-gray-600 bg-neutral-800 p-2 text-gray-200 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 w-full rounded-md border border-gray-600 bg-neutral-800 p-2 text-gray-200 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="mt-2 w-full rounded-md border border-gray-600 bg-neutral-800 p-2 text-gray-200 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                aria-label="Send Message"
                className="rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-6 min-h-[48px] py-2 font-semibold text-white transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-neutral-900"
              >
                Send Message
              </button>
            </div>
          </form>
          <p className="mt-4 text-left text-sm text-gray-500">
            <strong>Disclaimer:</strong> Keystone Notary Group, LLC is not a law
            firm and does not provide legal advice, guidance on document
            selection, or assistance in preparing legal documents. For questions
            about what type of document you need, please consult a licensed
            attorney.
          </p>
          <p className="mt-8 text-sm text-gray-400 sm:mt-10">
            Please mention the type of document or notarization service you are
            requesting.
          </p>
          <div className="mt-4 space-y-2 text-base sm:text-lg text-gray-300">
            <p>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:2673099000"
                className="text-blue-400 transition-transform duration-300 ease-in-out hover:-translate-y-0.5 hover:text-blue-300 hover:shadow-md"
                aria-label="Call 267-309-9000"
              >
                (267) 309-9000
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:appointments@keystonenotarygroup.com"
                className="text-blue-400 transition-transform duration-300 ease-in-out hover:-translate-y-0.5 hover:text-blue-300 hover:shadow-md"
              >
                appointments@keystonenotarygroup.com
              </a>
            </p>
            <p>
              <strong>Service Area:</strong> Bucks and Montgomery County, PA
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
