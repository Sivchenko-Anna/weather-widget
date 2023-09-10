import { UI_ELEMENTS } from "./variables.js";
import { getWeatherData, getWeatherForecast } from "./api.js";
import { clearInput, isInputEmpty } from "./utils.js";
import { renderLocations, renderTabs } from "./ui.js";
import { addFavoriteLocation } from "./location.js";
import { saveCurrentCityInLocalStorage } from "./storage.js";

export async function initialization() {
  UI_ELEMENTS.TABS.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      UI_ELEMENTS.TABS.forEach((t) => t.classList.remove("active"));
      UI_ELEMENTS.WEATHER_TAB.forEach((el) => el.classList.remove("active"));
      tab.classList.add("active");
      UI_ELEMENTS.WEATHER_TAB[index].classList.add("active");
    });
  });

  UI_ELEMENTS.FORM.addEventListener("submit", async (event) => {
    event.preventDefault();
    const city = new FormData(UI_ELEMENTS.FORM).get("city");

    if (isInputEmpty(city)) {
      alert("Введите название города");
      return;
    }

    const actualData = await getWeatherData(city);
    const forecastData = await getWeatherForecast(city);

    renderTabs(actualData, forecastData);
    saveCurrentCityInLocalStorage(city);
    clearInput();
  });

  UI_ELEMENTS.BTN_FAVORITE.addEventListener("click", addFavoriteLocation);

  renderLocations();
}
