"use client"

import { useEffect, useRef } from "react"
import "leaflet/dist/leaflet.css"

export default function MapComponent() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)

  useEffect(() => {
    // Check if window is defined (client-side) and the map container exists
    if (typeof window !== "undefined" && mapRef.current && !mapInstanceRef.current) {
      // Dynamically import Leaflet
      const initializeMap = async () => {
        try {
          const L = await import("leaflet")

          // Initialize the map centered on Tunisia (Gulf of Tunis)
          const map = L.map(mapRef.current!).setView([36.8065, 10.1815], 10)

          // Add tile layer (OpenStreetMap)
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }).addTo(map)

          // Add markers for units - using Tunisian coastal locations
          const droneIcon = L.divIcon({
            html: `<div class="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>`,
            className: "leaflet-div-icon-custom",
            iconSize: [12, 12],
            iconAnchor: [6, 6],
          })

          const boatIcon = L.divIcon({
            html: `<div class="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>`,
            className: "leaflet-div-icon-custom",
            iconSize: [12, 12],
            iconAnchor: [6, 6],
          })

          const alertIcon = L.divIcon({
            html: `<div class="w-4 h-4 rounded-full bg-red-500 animate-ping"></div>`,
            className: "leaflet-div-icon-custom",
            iconSize: [16, 16],
            iconAnchor: [8, 8],
          })

          // Add markers at Tunisian coastal locations
          // Drone near La Goulette
          L.marker([36.8183, 10.305], { icon: droneIcon })
            .addTo(map)
            .bindPopup("Drone Unit Alpha - Monitoring La Goulette Port")

          // Patrol boat near Sidi Bou Said
          L.marker([36.8679, 10.3414], { icon: boatIcon })
            .addTo(map)
            .bindPopup("Patrol Boat Bravo - Patrolling Sidi Bou Said coast")

          // Alert near Gammarth (illegal fishing activity)
          L.marker([36.915, 10.29], { icon: alertIcon })
            .addTo(map)
            .bindPopup("Alert: Illegal fishing activity detected near Gammarth")

          // Add patrol zone (polygon) - Protected marine area in Gulf of Tunis
          const patrolZone = L.polygon(
            [
              [36.84, 10.28],
              [36.89, 10.28],
              [36.89, 10.35],
              [36.84, 10.35],
            ],
            { color: "rgba(59, 130, 246, 0.5)", fillOpacity: 0.2 },
          )
            .addTo(map)
            .bindPopup("Protected Marine Zone - Gulf of Tunis")

          // Save map instance for cleanup
          mapInstanceRef.current = map

          // Handle resize
          const handleResize = () => {
            if (mapInstanceRef.current) {
              mapInstanceRef.current.invalidateSize()
            }
          }

          window.addEventListener("resize", handleResize)

          // Force a resize after a short delay to ensure the map renders correctly
          setTimeout(() => {
            handleResize()
          }, 300)
        } catch (error) {
          console.error("Error initializing map:", error)
        }
      }

      initializeMap()
    }

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        window.removeEventListener("resize", () => {
          if (mapInstanceRef.current) {
            mapInstanceRef.current.invalidateSize()
          }
        })
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  return (
    <div
      ref={mapRef}
      className="absolute inset-0 rounded-b-lg overflow-hidden"
      style={{ width: "100%", height: "100%" }}
    />
  )
}
