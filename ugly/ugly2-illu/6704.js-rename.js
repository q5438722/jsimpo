import { CHANGE_LOCALE } from "./constants";export function changeLocale(o) {
  return { type: CHANGE_LOCALE, locale: o };
}
