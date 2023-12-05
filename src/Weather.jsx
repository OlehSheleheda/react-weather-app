import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import MoonLoader from "react-spinners/MoonLoader";
import CurrentWeatherInfo from "./CurrentWeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [loaded, getLoaded] = useState(false);
  const [curData, getCurData] = useState(null);
  const [city, getCity] = useState(props.defaultCity);

  function getCurrentWeatherData(response) {
    getLoaded(true);
    getCurData(response.data);
  
  }

  function callApi() {
    let key = `a3cbd9d4064873f3bb4b9245b13146d7`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`;
    axios.get(apiUrl).then(getCurrentWeatherData);
  }

  function handleSearch(event) {
    event.preventDefault();
    callApi();
  }

  function changeCity(event) {
    getCity(event.target.value);
  }

  if (loaded === true) {
    return (
      <div className="Weather">
        <div className="weather-app">
          <div className="search">
            <form onSubmit={handleSearch}>
              <input
                type="search"
                placeholder="city name"
                className="search-input"
                onChange={changeCity}
              />
              <input type="submit" value="Search" className="search-button" />
            </form>
          </div>
          <CurrentWeatherInfo data={curData} />
          <WeatherForecast data={curData} />
        </div>
      </div>
    );
  } else {
    callApi();
    return (
      <div className="Weather">
        <div className="weather-app">
          <div className="search">
            <form>
              <input
                type="search"
                placeholder="city name"
                className="search-input"
              />
              <input type="submit" value="Search" className="search-button" />
            </form>
          </div>

          <div className="current-weather-info">
            <div className="loader">
              <MoonLoader color="#36d7b7" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
