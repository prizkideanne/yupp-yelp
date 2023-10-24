import { MapPinIcon } from "@heroicons/react/20/solid";

/* eslint-disable react/no-unknown-property */
const Marker = ({ lat, lng, ...otherProps }) => {
  if (!lat || !lng) return null;
  return (
    <MapPinIcon
      style={{ cursor: "pointer" }}
      className="text-red-500 w-7 h-10 relative"
      lng={lng}
      lat={lat}
      {...otherProps}
    />
  );
};

export default Marker;
