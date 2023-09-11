export const UI_ELEMENTS = {
  FORM: document.querySelector(".weather__search"),
  INPUT_NAME: document.querySelector(".weather__search-input"),
  WEATHER_TAB: document.querySelectorAll(".weather__tab"),
  BTN_FAVORITE: document.querySelector(".weather__tab-city-like"),
  CITIES_LIST: document.querySelector(".locations-list"),
  TABS: document.querySelectorAll(".tabs__item"),
  ACTIVE_TAB: document.querySelector(".active"),
  PRELOADER: document.querySelector(".preloader"),
  WEATHER_CONTAINER: document.querySelector(".weather__container"),
};

export const API = {
  SERVER_URL: "http://api.openweathermap.org/data/2.5",
  WEATHER_ACTUAL: "weather",
  WEATHER_FORECAST: "forecast",
  API_KEY: "aaf2b0f6382dec6aeb5ea5dc761527cb",
};

export const WEATHER = {
  NOW: {
    TEMPERATURE: document.querySelector(".weather__tab-temperature"),
    ICON: document.querySelector(".weather__tab-icon-img"),
    CITY_NAME: document.querySelector(".weather__tab-city-name"),
    LIKE: document.querySelector(".weather__tab-city-like"),
  },
  DETAILS: {
    CITY_NAME: document.querySelector(".title-details"),
    TEMPERATURE: document.querySelector(".temperature"),
    FEELS_LIKE: document.querySelector(".feels"),
    DESCRIPTION: document.querySelector(".weather-description"),
    WIND: document.querySelector(".weather-wind"),
    SUNRISE: document.querySelector(".sunrise"),
    SUNSET: document.querySelector(".sunset"),
  },
  FORECAST: {
    CITY: document.querySelector(".title-forecast"),
    DATE: document.querySelectorAll(".forecast-card__date"),
    TIME: document.querySelectorAll(".forecast-card__time"),
    TEMPERATURE: document.querySelectorAll(".forecast-card__temperature span"),
    DESCRIPTION: document.querySelectorAll(".forecast-card__weather"),
    FEELS_LIKE: document.querySelectorAll(".forecast-card__feels span"),
    ICON: document.querySelectorAll(".forecast-card__icon"),
  },
};