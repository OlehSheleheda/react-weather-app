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
  let day = days[new Date(props.data.curDate * 1000).getDay()];
  let hours = new Date(props.data.curDate * 1000).getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = new Date(props.data.curDate * 1000).getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="CurrentWeatherInfo">
      <div className="current-weather-info">
        <div className="first-line">
          <div className="left-first-line">
            <div className="current-icon">
              <CurrentWeatherIcon icon={props.data.curIcon} size={80} />
            </div>
            <CurrentTemperature
              celsius={Math.round(props.data.curTemperature)}
            />

            <div className="current-weather-condition">
              Humidity: {Math.round(props.data.curHumidity)} % <br /> Pressure:{" "}
              {Math.round(props.data.curPressure)} mm <br /> Wind:{" "}
              {Math.round(props.data.curWindSpeed)} m/s
            </div>
          </div>
          <div className="right-first-line">
            {props.data.curCity},{" "}
            <CurrentWeatherCountry code={props.data.curCountry} />
            <div className="current-day-time">
              {day}, {hours}:{minutes}
              <br />
              Cloudy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
