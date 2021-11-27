import React from "react";

export default function WeatherForecastDay(props) {
  let now = new Date(props.day * 1000);
  let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  let day = days[now.getDay()];

  return <div> {day}</div>;
}
