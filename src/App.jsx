import React from "react";
import "./App.css";
import Weather from "./Weather.jsx";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Helsinki"/>
    </div>
  );
}

export default App;
