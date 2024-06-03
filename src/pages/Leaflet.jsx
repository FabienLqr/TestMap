import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Leaflet() {
  return (
    <>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: "80", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>Un Popup pour toute information supplémentaire.</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default Leaflet;

/*

var carte = L.map('carte').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© Open

*/
