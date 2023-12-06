import React from "react";
import "./App.css";
import Weather from "./Weather.jsx";
import WeatherFooter from "./WeatherFooter.jsx"

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Helsinki"/>
      <WeatherFooter />
    </div>
  );
}

export default App;
