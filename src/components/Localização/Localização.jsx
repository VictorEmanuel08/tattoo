import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "./Localização.scss";

export function Localização() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyALTHHlmc3vLrvikClL7gAyULY2EQIHmTw",
  });

  const position = {
    lat: -2.527688521485413,
    lng: -44.302991310812466,
  };

  return (
    <div className="map">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "400px", height: "400px" }}
          center={position}
          zoom={15}
        >
          <Marker
            position={position}
            options={{
              label: {
                text: "Posição Teste",
                className: "map-marker",
              },
            }}
          />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
}
