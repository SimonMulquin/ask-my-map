import L from "leaflet";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import styles from "./Map.module.css";
import { MarkerData, Props } from "../../types";

const icon = L.icon({
  iconRetinaUrl: iconRetinaUrl.src,
  iconUrl: iconUrl.src,
  shadowUrl: shadowUrl.src,
  iconSize: [32, 48],
  iconAnchor: [16, 48],
});

const getMarkerPosition = ({ attributes }: MarkerData): [number, number] => [
  attributes.lat,
  attributes.lng,
];

const Map = ({ markers }: Props) => {
  return (
    <MapContainer
      className={styles.map}
      zoom={15}
      center={getMarkerPosition(markers[0])}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map(marker => (
        <Marker
          key={marker.id}
          icon={icon}
          position={getMarkerPosition(marker)}
        >
          <Popup>{marker.attributes.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
