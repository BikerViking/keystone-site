import React, { useState } from 'react';

export default function ClientPortal() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  if (loggedIn) {
    return (
      <section className="py-16 bg-lightgray dark:bg-darkbg" aria-labelledby="portal-title">
        <div className="container mx-auto text-center">
          <h2 id="portal-title" className="text-3xl font-light mb-4">Client Portal</h2>
          <p className="mb-4">Welcome, {email.split('@')[0]}!</p>
          <button className="bg-charcoal text-white px-4 py-2 rounded" onClick={() => setLoggedIn(false)}>Logout</button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16" aria-labelledby="login-title">
      <div className="container mx-auto">
        <h2 id="login-title" className="text-3xl font-light mb-8 text-center">Client Login</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setLoggedIn(true);
          }}
          className="max-w-md mx-auto space-y-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-mediumgray rounded px-2 py-1 w-full"
            placeholder="Email"
            required
          />
          <button type="submit" className="bg-charcoal text-white px-4 py-2 rounded">Login</button>
        </form>
      </div>
    </section>
  );
}
