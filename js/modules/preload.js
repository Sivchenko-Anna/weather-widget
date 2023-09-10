import { UI_ELEMENTS } from "./variables.js";

export function showLoader() {
  UI_ELEMENTS.WEATHER_CONTAINER.style.filter = "blur(1.5rem)";
  UI_ELEMENTS.PRELOADER.style.display = "flex";
}

export function hideLoader() {
  UI_ELEMENTS.WEATHER_CONTAINER.style.filter = "none";
  UI_ELEMENTS.PRELOADER.style.display = "none";
}