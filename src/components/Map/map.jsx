import React, { useRef, useState, useEffect, useMemo } from "react";
import { createRoot } from "react-dom";
import Map, { Marker, Popup } from "react-map-gl";
import { useDispatch, useSelector } from "react-redux";
import { getCitys } from "../../redux/actions";

// Marcadores
import Parcela from "../../markers/Parcela";
import Nuevo from "../../markers/Propiedades";
import Pin from "../../markers/Pin";
import CITIES from "../../data/cities.json";
import Propital from "../../assets/Propital.png";

// Cards
import Card from "../Cards/Cards";

// Filter
import Filter from "../Filters/Filters";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibGVhbmNiYSIsImEiOiJjbGo5YTY1c3ExNzlxM3FxZ3M5ZXQ5NHlqIn0.QinKi3DFID_166VxNwOF1Q";

const initialViewState = {
  latitude: -33.437776,
  longitude: -70.65045,
  zoom: 13,
  bearing: 0,
  pitch: 0,
};

export default function App() {
  const mapRef = useRef();

  const dispatch = useDispatch();

  const selectedCity = useSelector((state) => state.selectedCity);
  console.log(selectedCity);

  useEffect(() => {
    dispatch(getCitys());
  }, []);

  const [popupInfo, setPopupInfo] = useState("");

  if (
    selectedCity &&
    typeof selectedCity.longitude === "number" &&
    typeof selectedCity.latitude === "number"
  ) {
    mapRef.current?.flyTo({
      center: [selectedCity.longitude, selectedCity.latitude],
      duration: 2000,
    });
  }

  if (popupInfo) {
    mapRef.current?.flyTo({
      center: [popupInfo.coords[0].longitude, popupInfo.coords[0].latitude],
      duration: 2000,
    });
  }

  const pins = useMemo(
    () =>
      CITIES.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
          }}
        >
          <Pin />
        </Marker>
      )),
    []
  );

  const oportunitys = useMemo(
    () =>
      selectedCity?.oportunidades?.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.coords[0].longitude}
          latitude={city.coords[0].latitude}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(city);
          }}
        >
          {city.tipo === "Parcela" ? (
            <Parcela />
          ) : city.tipo === "Nuevo" ? (
            <Nuevo color="#007473" />
          ) : (
            <Nuevo color="#ebc942" />
          )}
        </Marker>
      )),
    [selectedCity]
  );

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "30%", height: "100vh" }}>
        <div style={{ height: "50%" }}>
          <img src={Propital} style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={{ height: "50%", overflow: "auto" }}>
          <Filter setPopupInfo={setPopupInfo} />
        </div>
      </div>
      <div style={{ width: "70%", height: "500px" }}>
        <Map
          style={{ width: "100%", height: "100vh" }}
          ref={mapRef}
          initialViewState={initialViewState}
          mapStyle="mapbox://styles/mapbox/light-v8"
          mapboxAccessToken={MAPBOX_TOKEN}
        >
          {pins}
          {oportunitys}

          {popupInfo && (
            <Popup
              anchor="center"
              longitude={Number(popupInfo.coords[0].longitude)}
              latitude={Number(popupInfo.coords[0].latitude)}
              onClose={() => setPopupInfo(null)}
            >
              <Card info={popupInfo} />
            </Popup>
          )}
        </Map>
      </div>
    </div>
  );
}

export function renderToDom(container) {
  createRoot(container).render(<App />);
}
