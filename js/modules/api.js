// import { API_KEY } from "../key.js";
import { hideLoader } from "./preload.js";
import { API } from "./variables.js";

export async function getWeatherData(location) {
  try {
    const url = `${API.SERVER_URL}/${API.WEATHER_ACTUAL}?q=${location}&appid=${API.API_KEY}&units=metric`;
    let response = await fetch(url);
    if (response.status === 404) {
      alert("Такого города не существует");
      throw new Error("Такого города не существует");
    }
    if (!response.ok) {
      setTimeout(hideLoader, 250);
      throw new Error("Повторите попытку позже");
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getWeatherForecast(location) {
  try {
    const url = `${API.SERVER_URL}/${API.WEATHER_FORECAST}?q=${location}&appid=${API.API_KEY}&units=metric`;
    let response = await fetch(url);
    if (!response.ok) {
      setTimeout(hideLoader, 250);
      throw new Error("Повторите попытку позже");
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}