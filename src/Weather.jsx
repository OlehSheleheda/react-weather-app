import React, { useState } from "react";
import "./Weather.css";
import WeatherFooter from "./WeatherFooter";
import WeatherForecast from "./WeatherForecast";

export default function Weather() {
  let weatherData = {
    date: "Thursday, 09:35",
    description: "light rain",
    humidity: "80%",
    windSpeed: "10 m/s",
    imageUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/snow-day.png",
    temperature: "7",
  };

  const [city, getCity] = useState("");
  const [h1Element, newH1Element] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    newH1Element(city);
  }

  function getSearch(event) {
    getCity(event.target.value);
  }

  return (
    <div className="weather-app">
      <div className="Search">
        <form onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Enter a city.."
            className="search-input"
            onChange={getSearch}
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
      </div>
      <div className="weatherMain">
        <div className="current-weather">
          <div className="city-weather-condition">
            <div className="current-city">{h1Element}</div>
            <p className="current-details">
              <span>{weatherData.date}</span>
              <span>, {weatherData.description}</span> <br />
              Humidity:
              <strong>
                <span> {weatherData.humidity}</span>
              </strong>
              , Wind:
              <strong>
                <span>{weatherData.windSpeed}</span>
              </strong>
            </p>
          </div>
          <div className="current-temperature">
            <div className="current-icon">
              <img src={weatherData.imageUrl} alt="{weatherData.description}" />
            </div>
            <div className="current-temperature-value">
              {weatherData.temperature}
            </div>
            <div className="current-temperature-unit">°C</div>
          </div>
        </div>
        <div className="weather-forecast"></div>
      </div>

      <div className="weatherForecast">
        <div className="row">
          <WeatherForecast />
        </div>
      </div>

      <WeatherFooter />
    </div>
  );
}
