import React from "react";

export default function ServiceCard({ title, description }) {
  return (
    <div className="bg-white/5 px-6 py-6 text-gray-200 shadow-sm ring-1 ring-white/10 border-l-2 border-blue-600">
      <h3 className="text-xl tracking-wide text-white">{title}</h3>
      <p className="mt-2 text-neutral-300">{description}</p>
    </div>
  );
}
