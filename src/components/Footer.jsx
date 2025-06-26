import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-neutral-950 text-neutral-400">
      <div className="mx-auto px-4 py-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm">&copy; {year} Keystone Notary Group. All rights reserved.</p>
      </div>
    </footer>
  );
}
