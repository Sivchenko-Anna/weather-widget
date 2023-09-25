import { hideLoader } from "./preload.js";
import { API } from "./variables.js";

export async function getWeatherData(location) {
  try {
    location = location.trim();
    const url = `${API.SERVER_URL}/${API.WEATHER_ACTUAL}?q=${location}&appid=${API.API_KEY}&units=metric`;
    let response = await fetch(url);
    if (response.status === 404) {
      alert("Такого города не существует");
      throw new Error("Такого города не существует");
    }
    if (!response.ok) {
      setTimeout(hideLoader, 250);
      alert("Повторите попытку позже");
      throw new Error("Повторите попытку позже");
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(error)
    alert("Упс! Произошла ошибка при запросе на сервер")
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
    console.error(error);
    alert(error.message);
  }
}