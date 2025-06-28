import React from "react";
export default function Footer() {
  return (
    <div className="relative">
      <footer className="bg-neutral-900 text-gray-500">
        <div className="mx-auto max-w-screen-lg px-4 py-3 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-screen-xl px-4 py-3 text-center">
            {/* Static copyright text for legal clarity */}
            <p className="text-xs tracking-wider">
              &copy; Keystone Notary Group. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      {/* NNA certification seal displayed like a notary embosser stamp */}
      <img
        src="/nna-seal.PNG"
        alt="NNA Certified Notary Signing Agent 2025"
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 right-4 h-28 w-auto rotate-[10deg] shadow-2xl"
      />
    </div>
  );
}
