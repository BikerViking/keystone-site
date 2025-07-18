import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  return (
    <section id="contact" className="py-16 bg-platinum dark:bg-charcoal" aria-labelledby="contact-title">
      <div className="container mx-auto">
        <h2 id="contact-title" className="text-3xl font-light mb-8 text-center">Contact Us</h2>
        <form
          className="max-w-md mx-auto space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setStatus('Thank you for your message.');
          }}
        >
          <input
            type="text"
            className="border border-mediumgray rounded px-2 py-1 w-full"
            placeholder="Name"
            required
          />
          <input
            type="email"
            className="border border-mediumgray rounded px-2 py-1 w-full"
            placeholder="Email"
            required
          />
          <textarea
            className="border border-mediumgray rounded px-2 py-1 w-full"
            placeholder="Message"
            rows="4"
            required
          />
          <button type="submit" className="bg-charcoal text-white px-4 py-2 rounded">Send</button>
        </form>
        {status && <p className="mt-4 text-center text-darkgray">{status}</p>}
      </div>
    </section>
  );
}
