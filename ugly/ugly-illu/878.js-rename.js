import * as Taro from "../src/api";describe("systemInfo", () => {
  test("should getSystemInfoSync return system information", () => {
    const e = Taro.getSystemInfoSync();
    expect(e).toHaveProperty("brand");expect(e).toHaveProperty("model");expect(e).toHaveProperty("system");expect(e).toHaveProperty("pixelRatio");expect(e).toHaveProperty("screenWidth");expect(e).toHaveProperty("screenHeight");expect(e).toHaveProperty("windowWidth");expect(e).toHaveProperty("windowHeight");expect(e).toHaveProperty("version");expect(e).toHaveProperty("statusBarHeight");expect(e).toHaveProperty("platform");expect(e).toHaveProperty("language");expect(e).toHaveProperty("fontSizeSetting");expect(e).toHaveProperty("SDKVersion");
  });test("should getSystemInfo return Promise that resolve system information", () => {
    const t = jest.fn();
    const o = jest.fn();
    expect.assertions(3);return Taro.getSystemInfo({ success: t, complete: o }).then(e => {
      expect(t.mock.calls.length).toBe(1);expect(o.mock.calls.length).toBe(1);expect(e).toEqual(Taro.getSystemInfoSync());
    });
  });
});
