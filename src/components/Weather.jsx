import React from "react";
import PropTypes from "prop-types";

const Weather = ({ handleChange, handleSubmit, city, data, message }) => {
  return (
    <div className="container">
      <div className="weather__header">
        <form onSubmit={handleSubmit} className="weather__search">
          <input
            type="text"
            placeholder="Search for a city..."
            className="weather__searchform"
            value={city}
            onChange={handleChange}
          />
          <i className="fa-solid fa-magnifying-glass" />
        </form>
        <div className="weather__units">
          <button type="submit" onClick={handleSubmit}>
            <i className="fa-solid fa-search"></i>
          </button>
        </div>
      </div>
      <div className="weather__body">
        {data.name ? (
          <>
            <h1 className="weather__city">{data.name}</h1>
            <div className="weather__datetime">
              <p>{new Date().toLocaleString()}</p>
            </div>
            <div className="weather__forecast">
              <p>{data.weather[0].description}</p>
            </div>
            <div className="weather__icon">
              <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt="weather"
              />
            </div>
            <p className="weather__temperature">{data.main.temp}°C</p>
            <div className="weather__minmax">
              <p>Min: {data.main.temp_min}°C</p>
              <p>Max: {data.main.temp_max}°C</p>
            </div>
          </>
        ) : (
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {city ? "Please wait..." : "Please enter city name"}
          </p>
        )}
      </div>
      <div className="weather__info">
        {data.name ? (
          <>
            <div className="weather__card">
              <i className="fa-solid fa-temperature-full" />
              <div>
                <p>Real Feel</p>
                <p className="weather__realfeel">{data.main.feels_like}°C</p>
              </div>
            </div>
            <div className="weather__card">
              <i className="fa-solid fa-droplet" />
              <div>
                <p>Humidity</p>
                <p className="weather__humidity">{data.main.humidity}%</p>
              </div>
            </div>
            <div className="weather__card">
              <i className="fa-solid fa-wind" />
              <div>
                <p>Wind</p>
                <p className="weather__wind">{data.wind.speed} m/s</p>
              </div>
            </div>
            <div className="weather__card">
              <i className="fa-solid fa-gauge-high" />
              <div>
                <p>Pressure</p>
                <p className="weather__pressure">{data.main.pressure} hPa</p>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

Weather.defaultProps = {
  city: "",
};

Weather.propTypes = {
  city: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
};

export default Weather;
