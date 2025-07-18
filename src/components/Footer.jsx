import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-4" aria-label="Footer">
      <div className="container mx-auto text-center text-sm">
        &copy; {new Date().getFullYear()} Keystone Notary Group
      </div>
    </footer>
  );
}
