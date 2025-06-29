import React, { useState } from "react";
import LayoutWrapper from "../components/LayoutWrapper";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  // Prevent default form submission until backend integration is added
  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset form fields so the user sees a clear form
    e.target.reset();
    // Show confirmation message
    setSubmitted(true);
  };

  return (
    <LayoutWrapper>
      <section
        id="contact"
        aria-label="Contact"
        className="bg-neutral-800 mx-auto max-w-screen-lg px-4 py-12 lg:py-20 text-gray-200 sm:px-6 lg:px-8"
      >
        <h1 className="mb-8 text-center font-extrabold">
          Contact
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
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
              className="rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-6 min-h-[48px] py-2 font-semibold text-white transition transform hover:scale-105 active:scale-95 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-neutral-900"
            >
              Send Message
            </button>
          </div>
        </form>
        <p
          role="status"
          aria-live="polite"
          className={
            "text-green-400 text-center mt-6 text-lg font-medium transition-opacity duration-500" +
            (submitted ? " opacity-100" : " opacity-0")
          }
        >
          ✅ Thank you! Your message has been sent. We’ll be in touch shortly.
        </p>
        <p className="mt-4 text-left text-sm text-gray-500">
          <strong>Disclaimer:</strong> Keystone Notary Group, LLC is not a law
          firm and does not provide legal advice, guidance on document selection,
          or assistance in preparing legal documents. For questions about what
          type of document you need, please consult a licensed attorney.
        </p>
        {/* Additional instructions and contact information */}
        <p className="mt-8 text-sm text-gray-400 sm:mt-10">
          Please mention the type of document or notarization service you are requesting.
        </p>
        <div className="mt-4 space-y-2 text-base sm:text-lg text-gray-300">
          <p>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:2673099000"
              className="text-blue-400 hover:text-blue-300"
              aria-label="Call 267-309-9000"
            >
              (267) 309-9000
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:appointments@keystonenotarygroup.com"
              className="text-blue-400 hover:text-blue-300"
            >
              appointments@keystonenotarygroup.com
            </a>
          </p>
          <p>
            <strong>Service Area:</strong> Bucks and Montgomery County, PA
          </p>
        </div>
      </section>
    </LayoutWrapper>
  );
}
