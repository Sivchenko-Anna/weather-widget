import { UI_ELEMENTS } from "./modules/variables.js";

function initialization() {
  UI_ELEMENTS.TABS.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      UI_ELEMENTS.TABS.forEach((t) => t.classList.remove("active"));
      UI_ELEMENTS.WEATHER_TAB.forEach((el) => el.classList.remove("active"));
      tab.classList.add("active");
      UI_ELEMENTS.WEATHER_TAB[index].classList.add("active");
    })
  })
}

window.addEventListener("DOMContentLoaded", initialization)