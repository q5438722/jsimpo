'use strict';
import*as Taro$jscomp$0$jscomp$0 from "../src/api";
describe("systemInfo", () => {
  test("should getSystemInfoSync return system information", () => {
    const geolocation = $.getSystemInfoSync();
    expect(geolocation).toHaveProperty("brand");
    expect(geolocation).toHaveProperty("model");
    expect(geolocation).toHaveProperty("system");
    expect(geolocation).toHaveProperty("pixelRatio");
    expect(geolocation).toHaveProperty("screenWidth");
    expect(geolocation).toHaveProperty("screenHeight");
    expect(geolocation).toHaveProperty("windowWidth");
    expect(geolocation).toHaveProperty("windowHeight");
    expect(geolocation).toHaveProperty("version");
    expect(geolocation).toHaveProperty("statusBarHeight");
    expect(geolocation).toHaveProperty("platform");
    expect(geolocation).toHaveProperty("language");
    expect(geolocation).toHaveProperty("fontSizeSetting");
    expect(geolocation).toHaveProperty("SDKVersion");
  });
  test("should getSystemInfo return Promise that resolve system information", () => {
    const handleRemoveFn = jest.fn();
    const spy400Errors = jest.fn();
    expect.assertions(3);
    return $.getSystemInfo({
      success : handleRemoveFn,
      complete : spy400Errors
    }).then((e) => {
      expect(handleRemoveFn.mock.calls.length).toBe(1);
      expect(spy400Errors.mock.calls.length).toBe(1);
      expect(e).toEqual($.getSystemInfoSync());
    });
  });
});

