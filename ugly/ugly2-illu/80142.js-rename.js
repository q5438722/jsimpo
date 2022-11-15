import { getStorageSync } from "./storage";const UUID_KEY = "__DC_STAT_UUID";
var deviceId;
function addUuid(e) {
  deviceId = deviceId || getStorageSync(UUID_KEY);if (!deviceId) {
    deviceId = Date.now() + "" + Math.floor(Math.random() * 1e7);__GLOBAL__.setStorage({ key: UUID_KEY, data: deviceId });
  }e.deviceId = deviceId;
}function addSafeAreaInsets(e) {
  if (e.safeArea) {
    const t = e.safeArea;
    e.safeAreaInsets = { top: t.top, left: t.left, right: e.windowWidth - t.right, bottom: e.windowHeight - t.bottom };
  }
}function normalizePlatform(e) {
  var t = e.platform ? e.platform.toLowerCase() : "devtools";
  if (true) {
    t = "devtools";
  }e.platform = t;
}export default { returnValue: function (e) {
    addUuid(e);addSafeAreaInsets(e);normalizePlatform(e);
  } };
