import React, { useEffect, useState } from "react";
import { Geolocation } from "@capacitor/geolocation";

const App = () => {
  const [lat, setLat] = useState("");
  const [log, setLog] = useState("");

  useEffect(() => {
    const printCurrentPosition = async () => {
      try {
        const coordinates = await Geolocation.getCurrentPosition();
        setLat(coordinates.coords.latitude);
        setLog(coordinates.coords.longitude);
        console.log(
          "Current position:",
          coordinates.coords.latitude,
          coordinates.coords.longitude
        );
      } catch (error) {
        console.error("Error getting location:", error);
      }
    };
    printCurrentPosition();
  }, []);

  return (
    <div>
      <div>
        <p>Latitude:{lat} </p>
        <p>Longitude: {log} </p>
      </div>
    </div>
  );
};

export default App;
