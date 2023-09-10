import { WEATHER } from "./variables.js";
import { isLocationExist, findLocationIndex } from "./utils.js";
import { renderLocations, renderTabs } from "./ui.js";
import { getWeatherData } from "./api.js";

export let locations = [];

export function addFavoriteLocation() {
  try {
    const favoriteCity = WEATHER.NOW.CITY_NAME.textContent;
    if (isLocationExist(locations, favoriteCity)) {
      alert("Выбранный город уже добавен в избранное");
      return;
    }
    locations.push({ location: favoriteCity });
    renderLocations();
  } catch (error) {
    console.log(error);
  }
}

export function deleteFavoriteLocation(favoriteLocation) {
  const index = findLocationIndex(locations, favoriteLocation);
  locations.splice(index, 1);
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
    renderTabs(await getWeatherData(item.location));
  });

  btnCloseLocation.addEventListener("click", (event) => {
    event.stopPropagation();
    deleteFavoriteLocation(favoriteLocation);
  });

  return favoriteLocation;
}
