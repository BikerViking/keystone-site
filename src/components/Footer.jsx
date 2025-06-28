import React from "react";
export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-500">
      <div className="mx-auto max-w-screen-lg px-4 py-3 text-left sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-xl px-4 py-3 text-left">
        {/* Static copyright text for legal clarity */}
        <p className="text-xs tracking-wider">&copy; Keystone Notary Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
