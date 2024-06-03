import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const position = [51.505, -0.09];
function Leaflet() {
  return (
    <>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "80vh", width: "80vw" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
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
