import { UI_ELEMENTS, WEATHER } from "./variables.js";
import { convertTime, convertDate } from "./utils.js";
import { locations, createLocationItem } from "./location.js";
import { hideLoader, showLoader } from "./preload.js";

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

export function setWeatherTabForecast(data) {
  const { city, list } = data;
  const name = city.name;

  WEATHER.FORECAST.CITY.textContent = name;

  WEATHER.FORECAST.DATE.forEach((date, index) => {
    let dateForecast = convertDate(list[index].dt, city.timezone);
    date.textContent = dateForecast;
  });

  WEATHER.FORECAST.TIME.forEach((time, index) => {
    let timeForecast = convertTime(list[index].dt, city.timezone);
    time.textContent = timeForecast;
  })

  WEATHER.FORECAST.TEMPERATURE.forEach((temp, index) => {
    let tempForecast = Math.round(list[index].main.temp);
    temp.textContent = tempForecast;
  })

  WEATHER.FORECAST.FEELS_LIKE.forEach((tempfeels, index) => {
    let tempfeelsForecast = Math.round(list[index].main.feels_like);
    tempfeels.textContent = tempfeelsForecast;
  });

  WEATHER.FORECAST.DESCRIPTION.forEach((description, index) => {
    let descriptionForecast = list[index].weather[0].main;
    description.textContent = descriptionForecast;
  });

  WEATHER.FORECAST.ICON.forEach((icon, index) => {
    let iconForecast = list[index].weather[0].icon;
    icon.src = `./assets/weather-icons/${iconForecast}.png`;
  });
}

export function renderTabs(actualData, forecastData) {
  // showLoader();
  setWeatherTabNow(actualData);
  setWeatherTabDetails(actualData);
  setWeatherTabForecast(forecastData);
  setTimeout(hideLoader, 250);
}

export function renderLocations() {
  UI_ELEMENTS.CITIES_LIST.innerHTML = "";
  let locationsList = locations.map((item) => createLocationItem(item));
  UI_ELEMENTS.CITIES_LIST.append(...locationsList);
}