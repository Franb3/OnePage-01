import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  return (
    <MapContainer
      center={[40.7128, -74.006]}
      zoom={13}
      className="map-container"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[40.7128, -74.006]}>
        <Popup>Ubicación del estudio de tatuajes</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
