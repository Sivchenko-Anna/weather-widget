import { UI_ELEMENTS } from "./variables.js";

export function clearInput() {
  UI_ELEMENTS.FORM.reset();
}

export function isInputEmpty(value) {
  return !value.trim();
}

export function convertTime(time, timezone) {
  if (typeof time !== "number" || typeof timezone !== "number") {
    throw new Error("Time and timezone must be numbers.");
  }

  const newDate = new Date((time + timezone) * 1000);

  if (isNaN(newDate.getTime())) {
    throw new Error("Invalid time or timezone.");
  }
  
  const localTime = newDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
  });
  return localTime;
}