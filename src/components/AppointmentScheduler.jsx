import React, { useState } from 'react';

function generateTimes() {
  const times = [];
  for (let h = 9; h < 17; h++) {
    times.push(`${h}:00`);
    times.push(`${h}:30`);
  }
  return times;
}

export default function AppointmentScheduler() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  return (
    <section className="py-16 bg-platinum dark:bg-charcoal" aria-labelledby="appt-title">
      <div className="container mx-auto">
        <h2 id="appt-title" className="text-3xl font-light mb-8 text-center">Schedule Appointment</h2>
        <form className="max-w-md mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-mediumgray rounded px-2 py-1 w-full"
            aria-label="Date"
            required
          />
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="border border-mediumgray rounded px-2 py-1 w-full"
            aria-label="Time"
            required
          >
            <option value="" disabled>Select time</option>
            {generateTimes().map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <button type="submit" className="bg-charcoal text-white px-4 py-2 rounded">Book</button>
        </form>
      </div>
    </section>
  );
}
