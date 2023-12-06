import React from "react";
import "./DailyWeatherForecast.css";
import CurrentWeatherIcon from "./CurrentWeatherIcon";

export default function DailyWeatherForecast(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sut"];
 

  return (
    <div className="DailyWeatherForecast">
      <div className="weather-forecast-day">
        {days[new Date(props.data.dt * 1000).getDay()]}
      </div>
      <CurrentWeatherIcon icon={props.data.weather[0].icon} size={40} />
      <div className="max-man-temperature">
        <span className="forecast-temperature-max">
          {Math.round(props.data.main.temp_max)}°
        </span>{" "}
        <span className="forecast-temperature-min">
          {Math.round(props.data.main.temp_min)}°
        </span>
      </div>
    </div>
  );
}