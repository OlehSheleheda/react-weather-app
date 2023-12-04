import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import MoonLoader from "react-spinners/MoonLoader";
import CurrentWeatherInfo from "./CurrentWeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [curData, getCurData] = useState({ ready: false });
  const [city, getCity] = useState(props.defaultCity);

  function getCurrentWeatherData(response) {
    getCurData({
      ready: true,
      curCity: response.data.name,
      curCountry: response.data.sys.country,
      curTemperature: response.data.main.temp,
      curHumidity: response.data.main.humidity,
      curWindSpeed: response.data.wind.speed,
      curPressure: response.data.main.pressure,
      curDate: response.data.dt,
      curDescription: response.data.weather[0].description,
      curIcon: response.data.weather[0].icon,
    });
  }

  function callApi() {
    let key = `1ee4264117b73d2263eecd562f31ef5c`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(apiUrl).then(getCurrentWeatherData);
  }

  function handleSearch(event) {
    event.preventDefault();
    callApi();
  }

  function changeCity(event) {
    getCity(event.target.value);
  }

  if (curData.ready === true) {
    console.log(curData);
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
          <WeatherForecast />
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
