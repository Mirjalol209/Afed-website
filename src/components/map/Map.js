import ReactDOM from "react-dom";
import "./map.css";
 import { YMaps, Map, Placemark } from "@pb";
import { useEffect, useState } from "react";

// const apiKey =
export default function ContactMap() {
  const Button = ({ id }) => (
    <button onClick={() => alert(id)}>показать адрес</button>
  );

  const BaloonContent = ({ id }) => {
    const portalRoot = document.querySelector(".portal");
    const portalContainer = document.createElement("div");
    useEffect(() => {
      portalRoot.appendChild(portalContainer);
    }, [portalContainer, portalRoot]);

    return ReactDOM.createPortal(<Button id={id} />, portalContainer);
  };
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("1");
  return (
    <>
      <YMaps query={{ load: "package.full" }}>
        <Map
          width="100%"
          height="100%"
          defaultState={{
            center: [55.751574, 37.573856],
            zoom: 8,
            controls: ["typeSelector"],
          }}
        >
          <Placemark
            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
            properties={{
              balloonContent: `<div class="portal"></div>`,
            }}
            geometry={[55.763338, 37.565466]}
            onBalloonOpen={() => {
              setOpen(true);
              setId("2");
            }}
            onBalloonClose={() => setOpen(false)}
          />
        </Map>
      </YMaps>
      {open && <BaloonContent id={id} />}
    </>
  );
}
