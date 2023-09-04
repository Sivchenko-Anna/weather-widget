import { WEATHER } from "./variables.js";

export function setWeatherTabNow(data) {
  const {main, name, weather} = data;
  const temp = Math.round(main.temp);
  const icon = weather[0].icon;
  const iconSrc = `./assets/weather-icons/${icon}.png`;

  WEATHER.NOW.TEMPERATURE.textContent = `${temp}°`;
  WEATHER.NOW.ICON.src = iconSrc;
  WEATHER.NOW.CITY_NAME.textContent = name;
}