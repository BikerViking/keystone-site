import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FAQ from './components/FAQ';
import AppointmentScheduler from './components/AppointmentScheduler';
import DocumentVerification from './components/DocumentVerification';
import ClientPortal from './components/ClientPortal';
import ContactForm from './components/ContactForm';
import NewsletterForm from './components/NewsletterForm';
import Footer from './components/Footer';

export default function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? 'dark' : ''}>
      <Navbar dark={dark} toggleDark={() => setDark(!dark)} />
      <main className="flex flex-col gap-16">
        <Hero />
        <Services />
        <FAQ />
        <AppointmentScheduler />
        <DocumentVerification />
        <ClientPortal />
        <ContactForm />
        <NewsletterForm />
      </main>
      <Footer />
    </div>
  );
}
