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
            icon={{
              path: "M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z",
              fillColor: "yellow",
              fillOpacity: 0.9,
              scale: 2,
              strokeColor: "gold",
              strokeWeight: 2,
            }}
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
