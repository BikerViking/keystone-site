import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

/**
 * Displays an interactive map showing the notary service area.
 * Utilizes Leaflet with OpenStreetMap tiles.
 */
export default function ServiceAreaMap() {
  useEffect(() => {
    const map = L.map('service-area-map', {
      attributionControl: false,
      zoomControl: false,
    }).setView([40.2765, -75.1449], 9); // Centered on Bucks/Montgomery County, PA

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="service-area-map"
      className="h-64 w-full rounded-md shadow-inner"
      role="img"
      aria-label="Service area map"
    />
  );
}
