import React from "react";

export default function WeatherForecast() {
  let element = (
    <div className="col-1">
      <div className="weather-forecast-day">Tue</div>
      <img
        src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/snow-day.png"
        className="forecast-icon"
        alt=""
      />
      <div className="max-man-temperature">
        <span className="forecast-temperature-max">12°</span>
        <span className="forecast-temperature-min">8°</span>
      </div>
    </div>
  );
  return element;
}
