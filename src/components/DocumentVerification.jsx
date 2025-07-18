import React, { useState } from 'react';

export default function DocumentVerification() {
  const [file, setFile] = useState(null);

  return (
    <section className="py-16" aria-labelledby="verify-title">
      <div className="container mx-auto">
        <h2 id="verify-title" className="text-3xl font-light mb-8 text-center">Document Pre-Verification</h2>
        <form className="max-w-md mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="block w-full"
            aria-label="Upload document"
          />
          {file && <p className="text-sm">Selected: {file.name}</p>}
          <button type="submit" className="bg-charcoal text-white px-4 py-2 rounded">Upload</button>
        </form>
      </div>
    </section>
  );
}
