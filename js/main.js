import { UI_ELEMENTS } from "./modules/variables.js";
import { getWeatherData } from "./modules/api.js";
import { clearInput } from "./modules/utils.js";

function initialization() {
  UI_ELEMENTS.TABS.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      UI_ELEMENTS.TABS.forEach((t) => t.classList.remove("active"));
      UI_ELEMENTS.WEATHER_TAB.forEach((el) => el.classList.remove("active"));
      tab.classList.add("active");
      UI_ELEMENTS.WEATHER_TAB[index].classList.add("active");
    })
  })

  UI_ELEMENTS.FORM.addEventListener("submit", async (event) => {
    event.preventDefault();
    const city = new FormData(UI_ELEMENTS.FORM).get("city");
    await getWeatherData(city);
    clearInput();
  });
}

window.addEventListener("DOMContentLoaded", initialization)