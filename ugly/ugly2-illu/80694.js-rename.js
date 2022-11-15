const WINDOW_NAMES = ["VUniLeftWindow", "VUniTopWindow", "VUniRightWindow"];
export function checkInWindows(n) {
  if (__PLATFORM__ !== "h5") {
    return false;
  }while (n) {
    if (WINDOW_NAMES.indexOf(n.$options.name) !== -1) {
      return true;
    }n = n.$parent;
  }
}
