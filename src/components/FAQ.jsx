import React from 'react';

const items = [
  { q: 'What do I need to bring?', a: 'Please bring a valid government ID and your documents.' },
  { q: 'Do you offer mobile services?', a: 'Yes, appointments are available at your location.' },
];

export default function FAQ() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-light mb-8 text-center">FAQs</h2>
        <ul className="space-y-4">
          {items.map(({ q, a }) => (
            <li key={q}>
              <h3 className="font-medium">{q}</h3>
              <p className="text-darkgray">{a}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
