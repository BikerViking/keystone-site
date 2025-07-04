import React, { useEffect, useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import { motion } from "framer-motion";

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

  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        className={`relative flex min-h-dvh w-full flex-col items-center justify-center bg-white text-gray-800 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-950 dark:to-black dark:text-gray-200 overflow-hidden overflow-x-hidden py-12 sm:py-16 md:py-20 lg:py-24 opacity-0 translate-y-[10px] transition-all duration-700 ease-in-out scroll-mt-20 ${homeVisible ? "opacity-100 translate-y-0" : ""}`}
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40 motion-safe:animate-bg-pan"
          /* Faint parchment overlay to subtly reinforce legal theme */
          style={{
            backgroundImage:
              "linear-gradient(rgba(246,242,238,0.45), rgba(246,242,238,0.45)), url('/bg-texture.PNG')",
            backgroundSize: '400% 400%',
          }}
          aria-hidden="true"
        ></div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-5"
          style={{
            transform: `translateY(${offsetY * 0.2}px)`,
            backgroundImage: "url('/bg-texture.PNG')",
            backgroundSize: 'cover',
          }}
        />
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-10rem] right-[-5rem] -z-10 w-64 md:w-96 opacity-10 rotate-[12deg] animate-spin-slower"
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 mx-auto flex w-full max-w-screen-md flex-col items-center">
          {/* Subtle glow behind logo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-radial from-blue-600/20 via-blue-600/10 to-transparent blur-2xl"
          />
          <motion.img
            src="/logo.PNG"
            alt="Keystone Notary Group logo"
            className="max-w-xs w-full object-contain mx-auto invert dark:invert-0 drop-shadow"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <motion.p
            className="mt-4 mb-4 w-full text-center text-gray-700 dark:text-gray-300 tracking-wide"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            Mobile Notary Services in Pennsylvania
          </motion.p>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="mb-6 sm:mb-8 w-full max-w-[90%] sm:max-w-[400px] mx-auto sm:w-auto text-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-4 sm:px-6 min-h-[48px] py-2 font-semibold text-white transition-colors duration-300 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Request Notary
          </motion.a>
          <nav
            className="mt-8 sm:mt-10 border-b border-gray-700 pb-4 shadow-md"
            aria-label="Main navigation"
            >
              <ul className="flex flex-col items-center space-y-3 sm:space-y-6 text-sm sm:text-base font-medium uppercase text-gray-700 dark:text-gray-300">
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
        </div>
      </section>
      {/* About Section */}
      <section
        id="about"
        ref={aboutRef}
        aria-label="About"
        className={`flex min-h-dvh w-full flex-col items-center justify-center bg-gray-100 text-gray-800 dark:bg-neutral-900 dark:text-gray-200 overflow-x-hidden px-4 py-16 lg:py-24 sm:px-6 lg:px-8 opacity-0 translate-y-[10px] transition-all duration-700 ease-in-out scroll-mt-20 ${aboutVisible ? "opacity-100 translate-y-0" : ""}`}
      >
        <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 text-center">
          <h2>
            About Keystone Notary Group
          </h2>
          <div aria-hidden="true" className="border-b-2 border-blue-500 w-12 mx-auto mb-6" />
          {/* Ensure readability on all devices */}
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide">
            Keystone Notary Group, LLC is a mobile notary service dedicated to
            professionalism, punctuality, and privacy. We provide document
            notarization services throughout Bucks and Montgomery County,
            Pennsylvania.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:mt-12">
            <div className="bg-gray-200 text-gray-800 dark:bg-neutral-900 dark:text-gray-100 p-6 text-center shadow-md">
              <p className="font-medium">Certified Loan Signing Agent</p>
            </div>
            <div className="bg-gray-200 text-gray-800 dark:bg-neutral-900 dark:text-gray-100 p-6 text-center shadow-md">
              <p className="font-medium">NNA Certified and Insured</p>
            </div>
            <div className="bg-gray-200 text-gray-800 dark:bg-neutral-900 dark:text-gray-100 p-6 text-center shadow-md">
              <p className="font-medium">Serving Bucks & Montgomery County</p>
            </div>
            <div className="bg-gray-200 text-gray-800 dark:bg-neutral-900 dark:text-gray-100 p-6 text-center shadow-md">
              <p className="font-medium">
                After-Hours & Emergency Services Available
              </p>
            </div>
          </div>
          <p className="mt-10 text-sm text-gray-600 dark:text-gray-400">
            Commissioned in the Commonwealth of Pennsylvania
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        ref={servicesRef}
        aria-label="Services"
        className={`flex min-h-dvh w-full flex-col items-center justify-center bg-gray-100 paper-texture text-gray-800 dark:bg-gray-950 dark:text-gray-200 overflow-x-hidden px-4 py-16 lg:py-24 sm:px-6 lg:px-8 opacity-0 translate-y-[10px] transition-all duration-700 ease-in-out scroll-mt-20 ${servicesVisible ? "opacity-100 translate-y-0" : ""}`}
      >
        <div className="container mx-auto w-full max-w-screen-lg px-4 sm:px-6 lg:px-8">
          <h2 className="text-center">
            Our Services
          </h2>
          <div aria-hidden="true" className="border-b-2 border-blue-500 w-12 mx-auto mb-6" />
          <div className="space-y-8">
            {/* Add subtle dividers between list items for improved readability */}
            <ul className="list-disc list-inside divide-y divide-gray-400/20 space-y-4 text-left text-base sm:text-lg text-gray-700 dark:text-gray-300">
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
            <p className="mt-6 text-center text-base sm:text-lg text-gray-700 dark:text-gray-300">
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
      {/* Section divider between Services and FAQ */}
      <div aria-hidden="true" className="-mt-1">
        <svg
          className="hidden h-16 w-full sm:block"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="divider-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#000" />
              <stop offset="100%" stopColor="#171717" />
            </linearGradient>
          </defs>
          <path d="M0 0h1440v100L0 20Z" fill="url(#divider-gradient)" />
        </svg>
        <hr className="border-neutral-700 sm:hidden" />
      </div>

      {/* FAQ Section */}
      <section
        id="faq"
        ref={faqRef}
        aria-label="Frequently Asked Questions"
        className={`flex min-h-dvh w-full flex-col items-center justify-center bg-gray-100 text-gray-800 dark:bg-neutral-900 dark:text-gray-200 overflow-x-hidden px-4 py-16 lg:py-24 sm:px-6 lg:px-8 opacity-0 translate-y-[10px] transition-all duration-700 ease-in-out scroll-mt-20 ${faqVisible ? "opacity-100 translate-y-0" : ""}`}
      >
        <div className="container mx-auto w-full max-w-screen-lg px-4 sm:px-6 lg:px-8">
          <h2 className="text-center">
            Frequently Asked Questions
          </h2>
          <div aria-hidden="true" className="border-b-2 border-blue-500 w-12 mx-auto mb-6" />
          <dl className="space-y-6 sm:space-y-8">
            {faqs.map(({ q, a }, idx) => (
              <div
                key={q}
                className={`bg-gray-200 text-gray-800 dark:bg-neutral-900 dark:text-gray-100 p-6 shadow-md opacity-0 translate-y-3 transition-all duration-700 ease-in-out ${
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
                    className="flex flex-row w-full items-center justify-between text-left text-base font-medium text-gray-800 dark:text-gray-100 sm:text-lg"
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
                  <p className="text-left text-base sm:text-lg text-gray-700 dark:text-gray-300 pb-2">
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
        className={`flex min-h-dvh w-full flex-col items-center justify-center bg-gray-100 paper-texture text-gray-800 dark:bg-gray-950 dark:text-gray-200 overflow-x-hidden px-4 py-16 lg:py-24 sm:px-6 lg:px-8 opacity-0 translate-y-[10px] transition-all duration-700 ease-in-out scroll-mt-20 ${contactVisible ? "opacity-100 translate-y-0" : ""}`}
      >
        <div className="container mx-auto w-full max-w-screen-lg px-4 sm:px-6 lg:px-8">
          <h2 className="text-center">
            Contact
          </h2>
          <div aria-hidden="true" className="border-b-2 border-blue-500 w-12 mx-auto mb-6" />
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
                className="mt-2 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-800 p-2 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                className="mt-2 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-800 p-2 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                className="mt-2 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-800 p-2 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
          <p className="mt-4 text-left text-sm text-gray-600 dark:text-gray-500">
            <strong>Disclaimer:</strong> Keystone Notary Group, LLC is not a law
            firm and does not provide legal advice, guidance on document
            selection, or assistance in preparing legal documents. For questions
            about what type of document you need, please consult a licensed
            attorney.
          </p>
          <p className="mt-8 text-sm text-gray-600 dark:text-gray-400 sm:mt-10">
            Please mention the type of document or notarization service you are
            requesting.
          </p>
          <div className="mt-4 space-y-2 text-base sm:text-lg text-gray-700 dark:text-gray-300">
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
