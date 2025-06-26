import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutWrapper({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-950 text-white">
      <Header />
      <main role="main" className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
