import { WEATHER } from "./variables.js";
import { findLocationIndex } from "./utils.js";
import { renderLocations, renderTabs } from "./ui.js";
import { getWeatherData, getWeatherForecast } from "./api.js";
import { getFromLocalStorage, saveCurrentCityInLocalStorage, saveToLocalStorage } from "./storage.js";

export let locations = getFromLocalStorage("favoriteLocation") || [];

export function addFavoriteLocation() {
  try {
    const favoriteCity = WEATHER.NOW.CITY_NAME.textContent;

    if (locations.some((el) => el.location === favoriteCity)) {
      locations = locations.filter((el) => el.location !== favoriteCity);
      saveToLocalStorage("favoriteLocation", locations);
      renderLocations();
      return;
    }

    locations.push({ location: favoriteCity });
    saveToLocalStorage("favoriteLocation", locations);
    renderLocations();
  } catch (error) {
    console.error(error);
  }
}

export function deleteFavoriteLocation(favoriteLocation) {
  const index = findLocationIndex(locations, favoriteLocation);
  locations.splice(index, 1);
  saveToLocalStorage("favoriteLocation", locations);
  renderLocations();
}

export function createLocationItem(item) {
  const favoriteLocation = document.createElement("li");
  favoriteLocation.className = "locations-list__item";
  favoriteLocation.textContent = item.location;

  const btnCloseLocation = document.createElement("button");
  btnCloseLocation.className = "locations-list__item-btn";
  favoriteLocation.append(btnCloseLocation);

  favoriteLocation.addEventListener("click", async () => {
    saveCurrentCityInLocalStorage(item.location);
    renderTabs(
      await getWeatherData(item.location),
      await getWeatherForecast(item.location)
    );
  });

  btnCloseLocation.addEventListener("click", (event) => {
    event.stopPropagation();
    deleteFavoriteLocation(favoriteLocation);
  });

  return favoriteLocation;
}
