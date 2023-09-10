import { API_KEY } from "../key.js";
import { API } from "./variables.js";

export async function getWeatherData(location) {
  try {
    const url = `${API.SERVER_URL}/${API.WEATHER_ACTUAL}?q=${location}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getWeatherForecast(location) {
  try {
    const url = `${API.SERVER_URL}/${API.WEATHER_FORECAST}?q=${location}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}