import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import MarkerIcon from "../assets/icon-location.svg";

type MapProps = {
  center: [number, number];
};

export default function Map({ center }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Deeehstrikt
    const map = L.map(mapRef.current).setView(center, 18);

    const marker = L.icon({
      iconUrl: MarkerIcon,
      iconSize: [45, 55],
      iconAnchor: [16, 55],
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);

    const markerOptions = L.markerOptions;

    L.marker(center, {
      icon: marker,
      keyboard: true,
      draggable: true,
      riseOnHover: true,
    })
      .addTo(map)
      .bindPopup("Hello from Tschikish!");

    return () => {
      map.remove();
    };
  }, [center]);

  return (
    <div
      className="map"
      ref={mapRef}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}
