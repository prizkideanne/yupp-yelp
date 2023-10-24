import GoogleMap from "google-maps-react-markers";
import { useEffect, useRef, useState } from "react";
import Marker from "./Marker";

function Maps({ region, businesses }) {
  const mapRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);

  const onGoogleApiLoaded = ({ map }) => {
    mapRef.current = map;
    const { latitude, longitude } = region;
    mapRef.current.setCenter({ lat: latitude, lng: longitude });
    setMapReady(true);
  };

  const panMapTo = (coordinates) => {
    if (mapRef.current) {
      mapRef.current.panTo(coordinates);
    }
  };

  useEffect(() => {
    if (mapReady && businesses.length) {
      const { latitude, longitude } = region;
      panMapTo({ lat: latitude, lng: longitude });
    }
  }, [businesses, mapReady, region]);

  return (
    <div className="h-[calc(100vh-80px)] flex-1 sticky top-20">
      <GoogleMap
        apiKey={import.meta.env.VITE_MAPS_API_KEY}
        defaultCenter={{
          lat: region.latitude,
          lng: region.longitude,
        }}
        defaultZoom={12}
        options={{ disableDefaultUI: true, zoomControl: false }}
        onGoogleApiLoaded={onGoogleApiLoaded}
      >
        {businesses.map((business, index) => (
          <Marker
            key={index}
            lat={business.coordinates.latitude}
            lng={business.coordinates.longitude}
            text={index + 1}
          />
        ))}
      </GoogleMap>
    </div>
  );
}

export default Maps;
