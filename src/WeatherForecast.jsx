import React from "react";

import "./WeatherForecast.css";
import DailyWeatherForecast from "./DailyWeatherForecast";

export default function WeatherForecast(props) {
  if (props.data) {
    return (
      <div className="WeatherForecast">
        <DailyWeatherForecast data={props.data.list[7]} />
        <DailyWeatherForecast data={props.data.list[15]} />
        <DailyWeatherForecast data={props.data.list[23]} />
        <DailyWeatherForecast data={props.data.list[31]} />
        <DailyWeatherForecast data={props.data.list[39]} />
      </div>
    );
  } else {
    return `Loading forecast data...`;
  }
}
