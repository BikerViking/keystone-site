import React, { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <section className="py-16" aria-labelledby="newsletter-title">
      <div className="container mx-auto text-center">
        <h2 id="newsletter-title" className="text-3xl font-light mb-4">Newsletter</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-mediumgray rounded px-2 py-1 flex-grow"
            placeholder="Email"
            required
          />
          <button type="submit" className="bg-charcoal text-white px-4 py-2 rounded">Subscribe</button>
        </form>
        {sent && <p className="mt-4 text-darkgray">Thanks for subscribing!</p>}
      </div>
    </section>
  );
}
