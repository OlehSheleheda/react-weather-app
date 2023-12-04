import React from "react";
import CurrentWeatherIcon from "./CurrentWeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  let element = (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-1">
          <div className="weather-forecast-day">Tue</div>
          <CurrentWeatherIcon icon="01d" size={40}/>
          <div className="max-man-temperature">
            <span className="forecast-temperature-max">12° </span>
            <span className="forecast-temperature-min">8°</span>
          </div>
        </div>
      </div>
    </div>
  );
  return element;
}
