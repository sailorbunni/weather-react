import React, { useState } from "react";

export default function ConvertTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahr(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCel(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span>
        <strong className="mainTemp">{Math.round(props.celsius)}</strong>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={convertToFahr}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahr = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        <strong className="mainTemp">{Math.round(fahr)}</strong>
        <span className="units">
          <a href="/" onClick={convertToCel}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
