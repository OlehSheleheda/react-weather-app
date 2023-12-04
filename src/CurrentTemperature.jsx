import React from "react";
import "./CurrentTemperature.css"

export default function CurrentTemperature(props) {
  if (props.celsius) {
    return (
      <div className="CurrentTemperature">
        <div className="current-temperature-value">10</div>
        <div className="current-weather-unit">
          ℃ | <a href="#">F</a>
        </div>
      </div>
    );
  }
}
