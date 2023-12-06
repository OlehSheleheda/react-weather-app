import React from "react";
import "./WeatherFooter.css";

export default function WeatherFooter() {
  return (
    <div className="WeatherFooter">
      <p>
        This project was coded by{" "}
        <a
          href="https://github.com/OlehSheleheda"
          target="_blank"
          rel="noopener noreferrer"
        >
          Oleh Sheleheda{" "}
        </a>
        committed on{" "}
        <a
          href="https://github.com/OlehSheleheda/weather_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://rococo-bonbon-544074.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </p>
    </div>
  );
}
