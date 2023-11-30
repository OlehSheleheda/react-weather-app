import React from "react";
import "./WeatherFooter.css"

export default function WeatherFooter() {
  return (
    <div className="WeatherFooter">
      <p>
        This project was coded by
        <a href="https://github.com/OlehSheleheda" target="_blank">
          Oleh Sheleheda
        </a>
        committed on
        <a href="https://github.com/OlehSheleheda/weather_app" target="_blank">
          {" "}
          GitHub
        </a>
        and hosted on
        <a href="https://rococo-bonbon-544074.netlify.app" target="_blank">
          Netlify
        </a>
      </p>
    </div>
  );
}
