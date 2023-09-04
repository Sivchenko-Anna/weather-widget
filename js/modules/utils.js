import { UI_ELEMENTS } from "./variables.js";

export function clearInput() {
  UI_ELEMENTS.FORM.reset();
}

export function isInputEmpty(value) {
  return !value.trim();
}