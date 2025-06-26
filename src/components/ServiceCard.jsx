import React from "react";

export default function ServiceCard({ title, description }) {
  return (
    <div className="rounded-lg bg-neutral-900 p-6 text-white shadow-sm border border-neutral-800">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-neutral-300">{description}</p>
    </div>
  );
}
