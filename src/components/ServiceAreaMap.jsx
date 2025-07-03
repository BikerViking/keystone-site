import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

/**
 * Displays an interactive map showing the notary service area.
 * Utilizes Leaflet with OpenStreetMap tiles.
 */
export default function ServiceAreaMap() {
  useEffect(() => {
    const container = L.DomUtil.get('service-area-map');
    // React 18 StrictMode mounts components twice in development which can
    // leave a leftover Leaflet map instance on the container. Remove any
    // existing internal identifier so a new map can be created cleanly.
    if (container && container._leaflet_id) {
      container._leaflet_id = null;
    }

    const map = L.map(container, {
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
