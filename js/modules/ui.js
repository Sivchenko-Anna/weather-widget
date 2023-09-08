import { WEATHER } from "./variables.js";
import { convertTime } from "./utils.js";

export function setWeatherTabNow(data) {
  const {main, name, weather} = data;
  const temp = Math.round(main.temp);
  const icon = weather[0].icon;
  const iconSrc = `./assets/weather-icons/${icon}.png`;

  WEATHER.NOW.TEMPERATURE.textContent = `${temp}°`;
  WEATHER.NOW.ICON.src = iconSrc;
  WEATHER.NOW.CITY_NAME.textContent = name;
}

export function setWeatherTabDetails(data) {
  const { main, name, sys, timezone, weather, wind } = data;
  const temp = Math.round(main.temp);
  const feelsLike = Math.round(main.feels_like);
  const description = weather[0].description;
  const windSpeed = wind.speed.toFixed(1);
  const sunriseTime = convertTime(sys.sunrise, timezone);
  const sunsetTime = convertTime(sys.sunset, timezone);

  WEATHER.DETAILS.CITY_NAME.textContent = name;
  WEATHER.DETAILS.TEMPERATURE.textContent = temp;
  WEATHER.DETAILS.FEELS_LIKE.textContent = feelsLike;
  WEATHER.DETAILS.DESCRIPTION.textContent = description;
  WEATHER.DETAILS.WIND.textContent = windSpeed;
  WEATHER.DETAILS.SUNRISE.textContent = sunriseTime;
  WEATHER.DETAILS.SUNSET.textContent = sunsetTime;
}