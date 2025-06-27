import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutWrapper({ children, fullWidth = false }) {
  return (
    <div
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-cover bg-center bg-no-repeat brightness-125 contrast-110 text-gray-200 before:absolute before:inset-0 before:-z-10 before:pointer-events-none before:bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] before:bg-[length:50px_50px]"
      style={{ backgroundImage: "url('/bg-texture.PNG')" }}
    >
      <Header />
      <main
        role="main"
        className={`flex-grow ${
          fullWidth
            ? ''
            : 'mx-auto max-w-screen-lg px-4 py-12 sm:px-6 sm:py-16 lg:px-8'
        }`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
