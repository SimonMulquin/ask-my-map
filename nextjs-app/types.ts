export interface MarkerData {
  id: string;
  attributes: {
    title: string;
    lat: number;
    lng: number;
  };
}

export interface Props {
  markers: Array<MarkerData>;
}
