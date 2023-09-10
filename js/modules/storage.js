export function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromLocalStorage(key) {
  const result = localStorage.getItem(key);
  return result ? JSON.parse(result) : null;
}

export function saveCurrentCityInLocalStorage(cityName) {
  localStorage.setItem("currentCity", cityName);
}

export function getCurrentCityFromlocalStorage() {
  return localStorage.getItem("currentCity") || "Vladivostok";
}