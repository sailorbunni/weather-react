import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";

export default function Weather(props) {
  const [city, setCity] = useState();
  const [update, setUpdate] = useState({ ready: false });
  const apiKey = "516d8557dd651a50157fe1f94e6882a3";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  let weatherData = {
    city: "Tokyo",
    temperature: 18,
    date: "Wednesday 15:00",
    description: "Sunny",
    humidity: 42,
    wind: 6,
  };
  function updateWeather(response) {
    setUpdate({
      ready: true,
      city: response.data.name,
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios.get(apiUrl).then(updateWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  if (update.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit} className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control"
                autoComplete="off"
                onChange={updateCity}
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
          <h1>{update.city}</h1>
          <ul>
            <li>Last updated: {weatherData.date}</li>
            <li>{update.description}</li>
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
                alt={update.description}
                className="float-left"
              />
              <strong className="mainTemp">{Math.round(update.temp)}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {update.humidity}%</li>
              <li>Wind: {update.wind} km/h</li>
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
  } else {
    let defaultUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.default}&appid=${apiKey}&units=metric`;
    axios.get(defaultUrl).then(updateWeather);

    return "Loading. . .";
  }
}
