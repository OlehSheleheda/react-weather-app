import React, { useState } from "react";
import "./CurrentWeatherInfo.css";
import CurrentWeatherIcon from "./CurrentWeatherIcon";
import CurrentWeatherCountry from "./CurrentWeatherCountry";
import CurrentTemperature from "./CurrentTemperature";

export default function CurrentWeatherInfo(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thusday",
    "Friday",
    "Sunday",
  ];
  let day = days[new Date(props.data.list[0].dt * 1000).getDay()];
  let hours = new Date(props.data.list[0].dt * 1000).getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = new Date(props.data.list[0].dt * 1000).getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="CurrentWeatherInfo">
      <div className="current-weather-info">
        <div className="first-line">
          <div className="left-first-line">
            <div className="current-icon">
              <CurrentWeatherIcon
                icon={props.data.list[0].weather[0].icon}
                size={80}
              />
            </div>
            <CurrentTemperature
              celsius={Math.round(props.data.list[0].main.temp)}
            />

            <div className="current-weather-condition">
              Humidity: {Math.round(props.data.list[0].main.humidity)} % <br />{" "}
              Pressure: {Math.round(props.data.list[0].main.pressure)} mm <br />{" "}
              Wind: {Math.round(props.data.list[0].wind.speed)} m/s <br />
              {props.data.list[0].weather[0].main}
            </div>
          </div>
          <div className="right-first-line">
            {props.data.city.name},{" "}
            <CurrentWeatherCountry code={props.data.city.country} />
            <div className="current-day-time">
              {day}, {hours}:{minutes}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
