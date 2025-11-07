import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const center = [35.29921471115069, -120.66084448340538]; 
const pins = [
  { name: 'Rec Center', lat: 35.2985508804553,  lng: -120.65988903883893 },
  { name: 'Upper Sports Complex', lat: 35.30986951020059, lng: -120.66914841874986 },
  { name: 'Doerr Field', lat: 35.296959410206824, lng:  -120.65746808449185 },
];

export default function MapComponent() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current).setView(center, 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    // Add pins
    pins.forEach(pin => {
      L.marker([pin.lat, pin.lng])
        .addTo(map)
        .bindPopup(pin.name);
    });

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />;
}

