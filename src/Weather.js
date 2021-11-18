import React from "react";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
  let weatherData = {
    city: "Tokyo",
    temperature: 18,
    date: "Wednesday 15:00",
    description: "Sunny",
    humidity: 42,
    wind: 6,
  };

  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="black"
              size={55}
              animate={true}
              alt={weatherData.description}
              className="float-left"
            />
            <strong>{weatherData.temperature}</strong>
            <span className="units">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
      <br />
      <div className="row fiveDay">
        <div className="col-2 forecast">
          Thur <br />{" "}
          <ReactAnimatedWeather
            icon="CLOUDY"
            color="black"
            size={55}
            animate={true}
          />
          13°
        </div>
        <div className="col-2 forecast">
          Fri
          <br />{" "}
          <ReactAnimatedWeather
            icon="WIND"
            color="black"
            size={55}
            animate={true}
          />
          14°
        </div>
        <div className="col-2 forecast">
          Sat
          <br />{" "}
          <ReactAnimatedWeather
            icon="RAIN"
            color="black"
            size={55}
            animate={true}
          />
          15°
        </div>
        <div className="col-2 forecast">
          Sun
          <br />{" "}
          <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_DAY"
            color="black"
            size={55}
            animate={true}
          />
          16°
        </div>
        <div className="col-2 forecast">
          Mon
          <br />{" "}
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="black"
            size={55}
            animate={true}
          />
          17°
        </div>
      </div>
    </div>
  );
}
