import React, { useEffect, useState } from "react";
import { Geolocation } from "@capacitor/geolocation";

const App = () => {
  const [lat, setLat] = useState("");
  const [log, setLog] = useState("");
  const [data, setData] = useState("");
  function fetchWeatherData(latitude, longitude) {
    fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.address);
      })
      .catch((error) => console.error("Error fetching location data:", error));
  }

  useEffect(() => {
    const printCurrentPosition = async () => {
      try {
        const coordinates = await Geolocation.getCurrentPosition();
        setLat(coordinates.coords.latitude);
        setLog(coordinates.coords.longitude);
        fetchWeatherData(
          coordinates.coords.latitude,
          coordinates.coords.longitude
        );
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
        <p>Longitude: {data.leisure} </p>
      </div>
    </div>
  );
};

export default App;
