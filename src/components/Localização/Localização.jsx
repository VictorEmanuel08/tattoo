import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "./Localização.scss";

export function Localização() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyALTHHlmc3vLrvikClL7gAyULY2EQIHmTw",
  });

  const position = {
    lat: -2.526620438214027,
    lng: -44.25378120527478,
  };

  return (
    <div className="map">
      {isLoaded ? (
        <GoogleMap
          id="map-container"
          // mapContainerStyle={{ width: "25rem", height: "400px" }}
          center={position}
          zoom={15}
        >
          <Marker
            position={position}
            // options={{
            //   label: {
            //     text: "Localização",
            //     className: "map-marker",
            //   },
            // }}
          />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
}
