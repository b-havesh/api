import React, { useState } from "react";
import axios from "axios";
import Weather from "./components/Weather";
import "./App.css";

const App = () => {
  const API = "bd922d64279c4d9af741cccbc48769c8";
  const [data, setData] = useState({});
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city === "") {
      setMessage("Please enter a city");
      setData({});
      return;
    }

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`
      )
      .then((res) => {
        setData(res.data);
        setMessage("");
      })
      .catch((err) => {
        setMessage("City not found");
        setData({});
      });

    setCity("");
  };

  return (
    <Weather
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      data={data}
      message={message}
      city={city}
    />
  );
};

export default App;
