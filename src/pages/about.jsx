import React from "react";
import LayoutWrapper from "../components/LayoutWrapper";

export default function AboutPage() {
  return (
    <LayoutWrapper>
      <section
        aria-label="About"
        className="mx-auto max-w-screen-lg px-4 py-12 text-gray-200 sm:px-6 sm:py-16 lg:px-8"
      >
        <h1 className="mb-8 text-center text-2xl font-semibold tracking-wide sm:mb-12 sm:text-3xl">
          About Keystone Notary Group
        </h1>
        <p className="mx-auto max-w-prose text-left text-gray-300">
          Keystone Notary Group, LLC is a mobile notary service dedicated to professionalism,
          punctuality, and privacy. We provide document notarization services throughout Bucks
          and Montgomery County, Pennsylvania.
        </p>
        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2">
          <div className="rounded bg-neutral-800 p-6 text-center shadow-sm">
            <p className="font-medium">Certified Loan Signing Agent</p>
          </div>
          <div className="rounded bg-neutral-800 p-6 text-center shadow-sm">
            <p className="font-medium">NNA Certified and Insured</p>
          </div>
          <div className="rounded bg-neutral-800 p-6 text-center shadow-sm">
            <p className="font-medium">Serving Bucks & Montgomery County</p>
          </div>
          <div className="rounded bg-neutral-800 p-6 text-center shadow-sm">
            <p className="font-medium">After-Hours & Emergency Services Available</p>
          </div>
        </div>
        <p className="mt-10 text-left text-sm text-gray-400">
          Commissioned in the Commonwealth of Pennsylvania
        </p>
      </section>
    </LayoutWrapper>
  );
}
