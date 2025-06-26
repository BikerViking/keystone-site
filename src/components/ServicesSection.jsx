import React from "react";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section aria-label="Our Services" className="bg-neutral-900 py-16 text-gray-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl uppercase tracking-wider">Our Services</h2>
        <div className="mt-10 space-y-8">
          <ServiceCard
            title="General Notary Work"
            description="Acknowledgements, jurats, oaths, affirmations, and more."
          />
          <ServiceCard
            title="Loan Signing Agent"
            description="Specialized in real estate closings and loan document notarizations."
          />
          <ServiceCard
            title="Remote Online Notary (RON)"
            description="Secure notarization via video call, anywhere in Pennsylvania."
          />
        </div>
      </div>
    </section>
  );
}
