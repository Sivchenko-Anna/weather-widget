import { API_KEY } from "../key.js";

const SERVER_URL = "http://api.openweathermap.org/data/2.5/weather";

export async function getWeatherData(city) {
  try {
    const url = `${SERVER_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}