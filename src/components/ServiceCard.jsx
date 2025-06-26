import React from "react";

export default function ServiceCard({ title, description }) {
  return (
    <div className="rounded-xl bg-white/5 px-6 py-8 text-gray-200 shadow-lg ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10">
      <h3 className="text-xl font-semibold tracking-wide">{title}</h3>
      <p className="mt-2 font-light text-neutral-300">{description}</p>
    </div>
  );
}
