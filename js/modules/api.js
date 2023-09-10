import { API_KEY } from "../key.js";
import { hideLoader, showLoader } from "./preload.js";
import { API } from "./variables.js";

export async function getWeatherData(location) {
  try {
    showLoader();
    const url = `${API.SERVER_URL}/${API.WEATHER_ACTUAL}?q=${location}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url);
    if (!response.ok) {
      setTimeout(hideLoader, 250);
      throw new Error("Повторите попытку позже");
    }
    // setTimeout(hideLoader, 250);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getWeatherForecast(location) {
  try {
    showLoader();
    const url = `${API.SERVER_URL}/${API.WEATHER_FORECAST}?q=${location}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url);
    if (!response.ok) {
      setTimeout(hideLoader, 250);
      throw new Error("Повторите попытку позже");
    }
    // setTimeout(hideLoader, 250);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}