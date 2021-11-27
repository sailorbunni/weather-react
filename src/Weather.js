import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import ConvertTemp from "./ConvertTemp";
import "./Weather.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Weather() {
  const [city, setCity] = useState();
  const [update, setUpdate] = useState({});
  const [apiResponse, setApiResponse] = useState({});

  const apiKey = "84459afcb8fce3b4af9f271f4cb1929c";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  function handleResponse(response) {
    console.log(response.data.daily);
    setApiResponse({
      firstDay: response.data.daily[0].dt,
      firstMin: response.data.daily[0].temp.min,
      firstMax: response.data.daily[0].temp.max,
      firstIcon: response.data.daily[0].weather[0].icon,
      firstDescription: response.data.daily[0].weather[0].description,

      secondDay: response.data.daily[1].dt,
      secondMin: response.data.daily[1].temp.min,
      secondMax: response.data.daily[1].temp.max,
      secondIcon: response.data.daily[1].weather[0].icon,
      secondDescription: response.data.daily[1].weather[0].description,

      thirdDay: response.data.daily[2].dt,
      thirdMin: response.data.daily[2].temp.min,
      thirdMax: response.data.daily[2].temp.max,
      thirdIcon: response.data.daily[2].weather[0].icon,
      thirdDescription: response.data.daily[2].weather[0].description,

      forthDay: response.data.daily[3].dt,
      forthMin: response.data.daily[3].temp.min,
      forthMax: response.data.daily[3].temp.max,
      forthIcon: response.data.daily[3].weather[0].icon,
      forthDescription: response.data.daily[3].weather[0].description,

      fifthDay: response.data.daily[4].dt,
      fifthMin: response.data.daily[4].temp.min,
      fifthMax: response.data.daily[4].temp.max,
      fifthIcon: response.data.daily[4].weather[0].icon,
      fifthDescription: response.data.daily[4].weather[0].description,
    });
  }

  function updateWeather(response) {
    const lat = response.data.coord.lat;
    const lon = response.data.coord.lon;
    let apiCityUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiCityUrl).then(handleResponse);

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
            <WeatherIcon
              code={update.icon}
              alt={update.description}
              size="80"
            />
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
          <WeatherForecastDay day={apiResponse.firstDay} />
          <br />{" "}
          <WeatherIcon
            code={apiResponse.firstIcon}
            alt={apiResponse.firstDescription}
            size="55"
          />{" "}
          <br />
          {Math.round(apiResponse.firstMin)}° |{" "}
          {Math.round(apiResponse.firstMax)}°
        </div>
        <div className="col-2 forecast">
          <WeatherForecastDay day={apiResponse.secondDay} />
          <br />{" "}
          <WeatherIcon
            code={apiResponse.secondIcon}
            alt={apiResponse.secondDescription}
            size="55"
          />{" "}
          <br />
          {Math.round(apiResponse.secondMin)}° |{" "}
          {Math.round(apiResponse.secondMax)}°
        </div>
        <div className="col-2 forecast">
          <WeatherForecastDay day={apiResponse.thirdDay} />
          <br />{" "}
          <WeatherIcon
            code={apiResponse.thirdIcon}
            alt={apiResponse.thirdDescription}
            size="55"
          />{" "}
          <br />
          {Math.round(apiResponse.thirdMin)}° |{" "}
          {Math.round(apiResponse.thirdMax)}°
        </div>
        <div className="col-2 forecast">
          <WeatherForecastDay day={apiResponse.forthDay} />
          <br />{" "}
          <WeatherIcon
            code={apiResponse.forthIcon}
            alt={apiResponse.forthDescription}
            size="55"
          />{" "}
          <br />
          {Math.round(apiResponse.forthMin)}° |{" "}
          {Math.round(apiResponse.forthMax)}°
        </div>
        <div className="col-2 forecast">
          <WeatherForecastDay day={apiResponse.fifthDay} />
          <br />{" "}
          <WeatherIcon
            code={apiResponse.fifthIcon}
            alt={apiResponse.fifthDescription}
            size="55"
          />{" "}
          <br />
          {Math.round(apiResponse.fifthMin)}° |{" "}
          {Math.round(apiResponse.fifthMax)}°
        </div>
      </div>
    </div>
  );
}
