import { onInitialClientRender, onRouteUpdate } from "../gatsby-browser";import { Minimatch } from "minimatch";import { getLCP, getFID, getCLS } from "web-vitals/base";jest.mock(`web-vitals/base`, () => {
  function t(e, t, n) {
    return { name: e, id: t, value: n };
  }return { getLCP: jest.fn(e => {
      e(t(`LCP`, `1`, `300`));
    }), getFID: jest.fn(e => {
      e(t(`FID`, `2`, `150`));
    }), getCLS: jest.fn(e => {
      e(t(`CLS`, `3`, `0.10`));
    }) };
});describe(`gatsby-plugin-google-analytics`, () => {
  describe(`gatsby-browser`, () => {
    describe(`onRouteUpdate`, () => {
      describe(`in non-production env`, () => {
        it(`does not send page view`, () => {
          window.ga = jest.fn();onRouteUpdate({});expect(window.ga).not.toHaveBeenCalled();
        });
      });describe(`in production env`, () => {
        var e;
        beforeAll(() => {
          e = process.env.NODE_ENV;process.env.NODE_ENV = `production`;
        });afterAll(() => {
          process.env.NODE_ENV = e;
        });beforeEach(() => {
          jest.useFakeTimers();jest.clearAllMocks();window.ga = jest.fn();
        });afterEach(() => {
          jest.useRealTimers();
        });it(`does not send page view when ga is undefined`, () => {
          delete window.ga;onRouteUpdate({});jest.runAllTimers();expect(setTimeout).not.toHaveBeenCalled();
        });it(`does not send page view when path is excluded`, () => {
          const e = new Minimatch(`/test-pages/**`);
          window.excludeGAPaths = [e.makeRe()];onRouteUpdate({ location: { pathname: `/test-pages/example` } });jest.runAllTimers();expect(window.ga).not.toHaveBeenCalled();
        });it(`sends page view`, () => {
          onRouteUpdate({});jest.runAllTimers();expect(window.ga).toHaveBeenCalledTimes(2);
        });it(`uses setTimeout with a minimum delay of 32ms`, () => {
          onRouteUpdate({});jest.runAllTimers();expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 32);expect(window.ga).toHaveBeenCalledTimes(2);
        });it(`uses setTimeout with the provided pageTransitionDelay value`, () => {
          onRouteUpdate({}, { pageTransitionDelay: 1e3 });jest.runAllTimers();expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1e3);expect(window.ga).toHaveBeenCalledTimes(2);
        });it(`sends core web vitals when enabled`, async () => {
          onInitialClientRender({}, { enableWebVitalsTracking: true });await Promise.resolve();await Promise.resolve();jest.runAllTimers();expect(window.ga).toBeCalledTimes(3);expect(window.ga).toBeCalledWith(`send`, `event`, expect.objectContaining({ eventAction: `LCP`, eventCategory: `Web Vitals`, eventLabel: `1`, eventValue: 300 }));expect(window.ga).toBeCalledWith(`send`, `event`, expect.objectContaining({ eventAction: `FID`, eventCategory: `Web Vitals`, eventLabel: `2`, eventValue: 150 }));expect(window.ga).toBeCalledWith(`send`, `event`, expect.objectContaining({ eventAction: `CLS`, eventCategory: `Web Vitals`, eventLabel: `3`, eventValue: 100 }));
        });it(`sends nothing when web vitals tracking is disabled`, async () => {
          onInitialClientRender({}, { enableWebVitalsTracking: false });await Promise.resolve();await Promise.resolve();jest.runAllTimers();expect(getLCP).not.toBeCalled();expect(getFID).not.toBeCalled();expect(getCLS).not.toBeCalled();
        });
      });
    });
  });
});