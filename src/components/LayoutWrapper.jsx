import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutWrapper({ children }) {
  return (
    <div
      className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-gray-200 before:absolute before:inset-0 before:-z-10 before:pointer-events-none before:bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] before:bg-[length:40px_40px]"
    >
      <Header />
      <main role="main" className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
