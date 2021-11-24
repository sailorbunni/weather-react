import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import ConvertTemp from "./ConvertTemp";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
  const [city, setCity] = useState();
  const [update, setUpdate] = useState({});
  const apiKey = "1f8137cf6aeb3d50524cd142a838b3ff";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  function updateWeather(response) {
    setUpdate({
      time: response.data.dt,
      city: response.data.name,
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios.get(apiUrl).then(updateWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

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
          <li>
            Last updated: <FormattedDate date={update.time} />
          </li>
          <li>{update.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <WeatherIcon code={update.icon} alt={update.description} />
            <ConvertTemp celsius={update.temp} />
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
}
