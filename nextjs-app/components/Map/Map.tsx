import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import styles from "./Map.module.css";

import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

const DEFAULT_CENTER = { lat: 41.84011314251885, lng: 23.47760643594089 };

const icon = L.icon({
  iconRetinaUrl: iconRetinaUrl.src,
  iconUrl: iconUrl.src,
  shadowUrl: shadowUrl.src,
  iconSize: [32, 48],
  iconAnchor: [16, 48],
});

const Map = () => {
  return (
    <MapContainer className={styles.map} zoom={15} center={DEFAULT_CENTER}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker icon={icon} position={DEFAULT_CENTER}>
        <Popup>Four leaf clover coliving ❤️</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
