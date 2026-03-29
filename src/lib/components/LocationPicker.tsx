import { useEffect } from "react"
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// Fix broken default marker icons in Vite/webpack builds
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
})

interface LocationPickerProps {
  lat: number | null
  lng: number | null
  onChange: (lat: number, lng: number) => void
}

function ClickHandler({
  onChange,
}: {
  onChange: (lat: number, lng: number) => void
}) {
  useMapEvents({
    click(e) {
      onChange(e.latlng.lat, e.latlng.lng)
    },
  })
  return null
}

// Recenter the map when existing coordinates are loaded
function MapRecenter({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap()
  useEffect(() => {
    map.setView([lat, lng], map.getZoom())
  }, [lat, lng, map])
  return null
}

const DEFAULT_CENTER: [number, number] = [12.9716, 77.5946] // Bengaluru

function LocationPicker({ lat, lng, onChange }: LocationPickerProps) {
  const position: [number, number] | null =
    lat !== null && lng !== null ? [lat, lng] : null

  return (
    <div className="space-y-1">
      <MapContainer
        center={position ?? DEFAULT_CENTER}
        zoom={13}
        className="h-64 w-full rounded-md border border-input z-0"
        style={{ zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ClickHandler onChange={onChange} />
        {position && (
          <>
            <Marker position={position} />
            <MapRecenter lat={position[0]} lng={position[1]} />
          </>
        )}
      </MapContainer>
      <p className="text-xs text-muted-foreground">
        {position
          ? `Selected: ${position[0].toFixed(6)}, ${position[1].toFixed(6)}`
          : "Click on the map to set the location"}
      </p>
    </div>
  )
}

export default LocationPicker
