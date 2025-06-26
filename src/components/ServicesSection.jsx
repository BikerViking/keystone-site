import React from "react";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section aria-label="Our Services" className="bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-16 text-gray-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-wide sm:text-3xl">Our Services</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
