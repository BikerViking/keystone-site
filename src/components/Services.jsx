import React from 'react';

const services = [
  'General Notary Work',
  'Loan Signing',
  'Apostille Processing',
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-lightgray dark:bg-darkbg">
      <div className="container mx-auto">
        <h2 className="text-3xl font-light mb-8 text-center">Our Services</h2>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <li
              key={service}
              className="service-card p-4 bg-white dark:bg-charcoal rounded shadow"
            >
              {service}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
