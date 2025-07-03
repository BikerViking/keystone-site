import React, { useState } from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Network response was not ok");

      setFormData({ name: "", email: "", message: "" });
      setSubmitted(true);
    } catch (err) {
      setErrors({ submit: "Failed to send. Please try again later." });
      setSubmitted(false);
    }
  };

  return (
    <PageTransition>
      <LayoutWrapper>
        <motion.section
          id="contact"
          aria-label="Contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-b from-neutral-900 via-black to-neutral-950 paper-texture mx-auto max-w-screen-lg px-4 py-16 lg:py-24 text-gray-200 sm:px-6 lg:px-8 space-y-4 sm:space-y-6 scroll-mt-20"
        >
        <h1 className="text-center">
          Contact
        </h1>
        <div aria-hidden="true" className="border-b-2 border-blue-500 w-12 mx-auto mb-6" />
        <form onSubmit={handleSubmit} noValidate className="space-y-6 sm:space-y-8">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className="mt-2 w-full rounded-md border border-gray-600 bg-neutral-800 p-2 text-gray-200 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Your name"
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className="mt-2 w-full rounded-md border border-gray-600 bg-neutral-800 p-2 text-gray-200 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className="mt-2 w-full rounded-md border border-gray-600 bg-neutral-800 p-2 text-gray-200 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Your message"
            ></textarea>
            {errors.message && (
              <p id="message-error" className="mt-1 text-sm text-red-400" role="alert">
                {errors.message}
              </p>
            )}
          </div>
          <div className="text-center">
            <motion.button
              type="submit"
              aria-label="Send Message"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-6 min-h-[48px] py-2 font-semibold text-white transition-transform duration-200 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-neutral-900"
            >
              Send Message
            </motion.button>
          </div>
          {errors.submit && (
            <p className="mt-4 text-center text-sm text-red-400" role="alert">
              {errors.submit}
            </p>
          )}
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
        <p className="mt-4 text-left text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
          <strong>Disclaimer:</strong> Keystone Notary Group, LLC is not a law
          firm and does not provide legal advice, guidance on document selection,
          or assistance in preparing legal documents. For questions about what
          type of document you need, please consult a licensed attorney.
        </p>
        {/* Additional instructions and contact information */}
        <p className="mt-8 text-sm text-gray-400 sm:mt-10 max-w-3xl mx-auto leading-relaxed">
          Please mention the type of document or notarization service you are requesting.
        </p>
        <div className="mt-4 space-y-2 text-base sm:text-lg text-gray-300">
          {[
            (
              <>
                <strong>Phone:</strong>{' '}
                <a
                  href="tel:2673099000"
                  className="text-blue-400 transition-transform duration-300 ease-in-out hover:-translate-y-0.5 hover:text-blue-300"
                  aria-label="Call 267-309-9000"
                >
                  (267) 309-9000
                </a>
              </>
            ),
            (
              <>
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:appointments@keystonenotarygroup.com"
                  className="text-blue-400 transition-transform duration-300 ease-in-out hover:-translate-y-0.5 hover:text-blue-300"
                >
                  appointments@keystonenotarygroup.com
                </a>
              </>
            ),
            (
              <>
                <strong>Service Area:</strong> Bucks and Montgomery County, PA
              </>
            ),
          ].map((node, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.1 }}
              className="translate-y-3"
            >
              {node}
            </motion.p>
          ))}
        </div>
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
        <hr className="border-t border-gray-700 my-12" />
        <motion.section
          aria-label="What to Bring to Your Appointment"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-b from-neutral-900 via-black to-neutral-950 mx-auto mt-12 max-w-screen-md px-4 py-16 lg:py-24 space-y-4 sm:space-y-6"
        >
          <div className="bg-neutral-900 p-6 rounded-xl ring-1 ring-neutral-700 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
          <div className="mb-8 flex items-center justify-center">
            <svg
              className="h-6 w-6 text-blue-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.349 3.836c-.064.21-.099.433-.099.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75c0-.231-.035-.454-.1-.664M11.349 3.836c.283-.919 1.139-1.586 2.151-1.586h1.5c1.012 0 1.868.667 2.151 1.586M11.349 3.836c-.376.022-.75.049-1.123.08C9.095 4.01 8.25 4.973 8.25 6.108v2.142M17.15 3.836c.376.022.75.049 1.124.08C19.405 4.01 20.25 4.973 20.25 6.108V16.5c0 1.243-1.007 2.25-2.25 2.25H15.75M8.25 8.25H4.875A1.125 1.125 0 0 0 3.75 9.375v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75M8.25 8.25h6.375c.621 0 1.125.504 1.125 1.125v9.375M7.5 15.75 9 17.25l3-3.75"
              />
            </svg>
            <h2 className="text-center">What to Bring to Your Appointment</h2>
            <div aria-hidden="true" className="border-b-2 border-blue-500 w-12 mx-auto mb-6" />
          </div>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>Valid photo ID</li>
            <li>All documents to be notarized</li>
            <li>Any witnesses required</li>
            <li>Payment method (if applicable)</li>
          </ul>
          <a
            href="/checklist.pdf"
            download
            className="mt-2 inline-block text-sm text-blue-400 underline hover:text-blue-300"
          >
            📄 Download Appointment Checklist (PDF)
          </a>
        </div>
        </motion.section>
      </LayoutWrapper>
    </PageTransition>
  );
}
