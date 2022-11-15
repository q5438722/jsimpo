function expectHookNamesToEqual(e, o) {
  expect(Array.from(e.values())).toEqual(o);
}function requireText(e, o) {
  var { existsSync: _, readFileSync: n } = require("fs");

  if (_(e)) {
    return Promise.resolve(n(e, o));
  } else {
    return Promise.reject(`File not found "${e}"`);
  }
}describe("parseHookNames", () => {
  var _;

  var t;
  var i;
  beforeEach(() => {
    jest.resetModules();jest.mock("source-map-support", () => {
      console.trace("source-map-support");
    });_ = require("jest-fetch-mock");_.enableMocks();t = require("react-debug-tools/src/ReactDebugHooks").inspectHooks;i = require("../parseHookNames/parseHookNames").parseHookNames;Error.prepareStackTrace = (e, o) => {
      return e.stack;
    };_.mockIf(/.+$/, e => {
      const o = e.url;

      const _ = /external\/.*\.map/.test(o);

      if (_) {
        expect(o.includes("?foo=bar&param=some_value")).toBe(true);const n = o.split("?")[0];
        return requireText(n, "utf8");
      }return requireText(o, "utf8");
    });
  });afterEach(() => {
    fetch.resetMocks();
  });async function a(e, o = {}) {
    const _ = t(e, o, undefined, true);

    const n = await i(_);
    return n;
  }it("should parse names for useState()", async () => {
    const e = require("./__source__/__untransformed__/ComponentWithUseState").Component;

    const o = await a(e);
    expectHookNamesToEqual(o, ["foo", "bar", "baz", null]);
  });it("should parse names for useReducer()", async () => {
    const e = require("./__source__/__untransformed__/ComponentWithUseReducer").Component;

    const o = await a(e);
    expectHookNamesToEqual(o, ["foo", "bar", "baz"]);
  });it("should skip loading source files for unnamed hooks like useEffect", async () => {
    const e = require("./__source__/__untransformed__/ComponentWithUseEffect").Component;

    _.mockIf(/.+$/, e => {
      throw Error(`Unexpected file request for "${e.url}"`);
    });const o = await a(e);
    expectHookNamesToEqual(o, []);
  });it("should skip loading source files for unnamed hooks like useEffect (alternate)", async () => {
    const e = require("./__source__/__untransformed__/ComponentWithExternalUseEffect").Component;

    _.mockIf(/.+$/, e => {
      if (e.url.endsWith("useCustom.js")) {
        throw Error(`Unexpected file request for "${e.url}"`);
      }return requireText(e.url, "utf8");
    });const o = await a(e);
    expectHookNamesToEqual(o, ["count", null]);
  });it("should parse names for custom hooks", async () => {
    const e = require("./__source__/__untransformed__/ComponentWithNamedCustomHooks").Component;

    const o = await a(e);
    expectHookNamesToEqual(o, ["foo", null, "baz"]);
  });it("should parse names for code using hooks indirectly", async () => {
    const e = require("./__source__/__untransformed__/ComponentUsingHooksIndirectly").Component;

    const o = await a(e);
    expectHookNamesToEqual(o, ["count", "darkMode", "isDarkMode"]);
  });it("should parse names for code using nested hooks", async () => {
    const e = require("./__source__/__untransformed__/ComponentWithNestedHooks").Component;

    var o;

    const _ = await a(e, { callback: e => {
        o = e;
      } });

    const n = await a(o);
    expectHookNamesToEqual(_, ["InnerComponent"]);expectHookNamesToEqual(n, ["state"]);
  });it("should return null for custom hooks without explicit names", async () => {
    const e = require("./__source__/__untransformed__/ComponentWithUnnamedCustomHooks").Component;

    const o = await a(e);
    expectHookNamesToEqual(o, [null, null, null]);
  });describe("inline, external and bundle source maps", () => {
    it("should work for simple components", async () => {
      async function e(e, o = "Component") {
        const _ = require(e)[o];

        const n = await a(_);
        expectHookNamesToEqual(n, ["count"]);
      }await e("./__source__/Example");await e("./__source__/__compiled__/inline/Example");await e("./__source__/__compiled__/external/Example");await e("./__source__/__compiled__/inline/index-map/Example");await e("./__source__/__compiled__/external/index-map/Example");await e("./__source__/__compiled__/bundle/index", "Example");await e("./__source__/__compiled__/no-columns/Example");
    });it("should work with more complex files and components", async () => {
      async function e(e, o = undefined) {
        const _ = o != null ? require(e)[o] : require(e);

        var n = await a(_.List);
        expectHookNamesToEqual(n, ["newItemText", "items", "uid", "handleClick", "handleKeyPress", "handleChange", "removeItem", "toggleItem"]);n = await a(_.ListItem, { item: {} });expectHookNamesToEqual(n, ["handleDelete", "handleToggle"]);
      }await e("./__source__/ToDoList");await e("./__source__/__compiled__/inline/ToDoList");await e("./__source__/__compiled__/external/ToDoList");await e("./__source__/__compiled__/inline/index-map/ToDoList");await e("./__source__/__compiled__/external/index-map/ToDoList");await e("./__source__/__compiled__/bundle", "ToDoList");await e("./__source__/__compiled__/no-columns/ToDoList");
    });it("should work for custom hook", async () => {
      async function e(e, o = "Component") {
        const _ = require(e)[o];

        const n = await a(_);
        expectHookNamesToEqual(n, ["count", "isDarkMode", "isDarkMode", null]);
      }await e("./__source__/ComponentWithCustomHook");await e("./__source__/__compiled__/inline/ComponentWithCustomHook");await e("./__source__/__compiled__/external/ComponentWithCustomHook");await e("./__source__/__compiled__/inline/index-map/ComponentWithCustomHook");await e("./__source__/__compiled__/external/index-map/ComponentWithCustomHook");await e("./__source__/__compiled__/bundle", "ComponentWithCustomHook");await e("./__source__/__compiled__/no-columns/ComponentWithCustomHook");
    });it("should work when code is using hooks indirectly", async () => {
      async function e(e, o = "Component") {
        const _ = require(e)[o];

        const n = await a(_);
        expectHookNamesToEqual(n, ["count", "darkMode", "isDarkMode"]);
      }await e("./__source__/__compiled__/inline/ComponentUsingHooksIndirectly");await e("./__source__/__compiled__/external/ComponentUsingHooksIndirectly");await e("./__source__/__compiled__/inline/index-map/ComponentUsingHooksIndirectly");await e("./__source__/__compiled__/external/index-map/ComponentUsingHooksIndirectly");await e("./__source__/__compiled__/bundle", "ComponentUsingHooksIndirectly");await e("./__source__/__compiled__/no-columns/ComponentUsingHooksIndirectly");
    });it("should work when code is using nested hooks", async () => {
      async function e(e, o = "Component") {
        const _ = require(e)[o];

        var n;
        const t = await a(_, { callback: e => {
            n = e;
          } });
        const i = await a(n);
        expectHookNamesToEqual(t, ["InnerComponent"]);expectHookNamesToEqual(i, ["state"]);
      }await e("./__source__/__compiled__/inline/ComponentWithNestedHooks");await e("./__source__/__compiled__/external/ComponentWithNestedHooks");await e("./__source__/__compiled__/inline/index-map/ComponentWithNestedHooks");await e("./__source__/__compiled__/external/index-map/ComponentWithNestedHooks");await e("./__source__/__compiled__/bundle", "ComponentWithNestedHooks");await e("./__source__/__compiled__/no-columns/ComponentWithNestedHooks");
    });it("should work for external hooks", async () => {
      async function e(e, o = "Component") {
        const _ = require(e)[o];

        const n = await a(_);
        expectHookNamesToEqual(n, ["theme", "theme"]);
      }await e("./__source__/__compiled__/inline/ComponentWithExternalCustomHooks");await e("./__source__/__compiled__/external/ComponentWithExternalCustomHooks");await e("./__source__/__compiled__/inline/index-map/ComponentWithExternalCustomHooks");await e("./__source__/__compiled__/external/index-map/ComponentWithExternalCustomHooks");await e("./__source__/__compiled__/bundle", "ComponentWithExternalCustomHooks");await e("./__source__/__compiled__/no-columns/ComponentWithExternalCustomHooks");
    });it("should work when multiple hooks are on a line", async () => {
      async function e(e, o = "Component") {
        const _ = require(e)[o];

        const n = await a(_);
        expectHookNamesToEqual(n, ["a", "b", "c", "d"]);
      }await e("./__source__/__compiled__/inline/ComponentWithMultipleHooksPerLine");await e("./__source__/__compiled__/external/ComponentWithMultipleHooksPerLine");await e("./__source__/__compiled__/inline/index-map/ComponentWithMultipleHooksPerLine");await e("./__source__/__compiled__/external/index-map/ComponentWithMultipleHooksPerLine");await e("./__source__/__compiled__/bundle", "ComponentWithMultipleHooksPerLine");async function o(e, o = "Component") {
        const _ = require(e)[o];

        const n = await a(_);
        expectHookNamesToEqual(n, ["a", "b", null, null]);
      }await o("./__source__/__compiled__/no-columns/ComponentWithMultipleHooksPerLine");
    });xit("should work for inline requires", async () => {
      async function e(e, o = "Component") {
        const _ = require(e)[o];

        const n = await a(_);
        expectHookNamesToEqual(n, ["count"]);
      }await e("./__source__/InlineRequire");await e("./__source__/__compiled__/inline/InlineRequire");await e("./__source__/__compiled__/external/InlineRequire");await e("./__source__/__compiled__/inline/index-map/InlineRequire");await e("./__source__/__compiled__/external/index-map/InlineRequire");await e("./__source__/__compiled__/bundle", "InlineRequire");await e("./__source__/__compiled__/no-columns/InlineRequire");
    });it("should support sources that contain the string \"sourceMappingURL=\"", async () => {
      async function e(e, o = "Component") {
        const _ = require(e)[o];

        const n = await a(_);
        expectHookNamesToEqual(n, ["count"]);
      }console.warn = () => {};await e("./__source__/ContainingStringSourceMappingURL");await e("./__source__/__compiled__/inline/ContainingStringSourceMappingURL");await e("./__source__/__compiled__/external/ContainingStringSourceMappingURL");await e("./__source__/__compiled__/inline/index-map/ContainingStringSourceMappingURL");await e("./__source__/__compiled__/external/index-map/ContainingStringSourceMappingURL");await e("./__source__/__compiled__/bundle", "ContainingStringSourceMappingURL");await e("./__source__/__compiled__/no-columns/ContainingStringSourceMappingURL");
    });
  });describe("extended source maps", () => {
    beforeEach(() => {
      const e = require("@babel/parser");

      const o = require("../generateHookMap");

      jest.spyOn(e, "parse");jest.spyOn(o, "decodeHookMap");
    });it("should work for simple components", async () => {
      async function e(e, o = "Component") {
        const _ = require(e)[o];

        const n = await a(_);
        expectHookNamesToEqual(n, ["count"]);expect(require("@babel/parser").parse).toHaveBeenCalledTimes(0);expect(require("../generateHookMap").decodeHookMap).toHaveBeenCalled();
      }await e("./__source__/__compiled__/inline/fb-sources-extended/Example");await e("./__source__/__compiled__/external/fb-sources-extended/Example");await e("./__source__/__compiled__/inline/react-sources-extended/Example");await e("./__source__/__compiled__/external/react-sources-extended/Example");await e("./__source__/__compiled__/inline/fb-sources-extended/index-map/Example");await e("./__source__/__compiled__/external/fb-sources-extended/index-map/Example");await e("./__source__/__compiled__/inline/react-sources-extended/index-map/Example");await e("./__source__/__compiled__/external/react-sources-extended/index-map/Example");
    });it("should work with more complex files and components", async () => {
      async function e(e, o = undefined) {
        const _ = o != null ? require(e)[o] : require(e);

        var n = await a(_.List);
        expectHookNamesToEqual(n, ["newItemText", "items", "uid", "handleClick", "handleKeyPress", "handleChange", "removeItem", "toggleItem"]);n = await a(_.ListItem, { item: {} });expectHookNamesToEqual(n, ["handleDelete", "handleToggle"]);expect(require("@babel/parser").parse).toHaveBeenCalledTimes(0);expect(require("../generateHookMap").decodeHookMap).toHaveBeenCalled();
      }await e("./__source__/__compiled__/inline/fb-sources-extended/ToDoList");await e("./__source__/__compiled__/external/fb-sources-extended/ToDoList");await e("./__source__/__compiled__/inline/react-sources-extended/ToDoList");await e("./__source__/__compiled__/external/react-sources-extended/ToDoList");await e("./__source__/__compiled__/inline/fb-sources-extended/index-map/ToDoList");await e("./__source__/__compiled__/external/fb-sources-extended/index-map/ToDoList");await e("./__source__/__compiled__/inline/react-sources-extended/index-map/ToDoList");await e("./__source__/__compiled__/external/react-sources-extended/index-map/ToDoList");
    });it("should work for custom hook", async () => {
      async function e(e, o = "Component") {
        const _ = require(e)[o];

        const n = await a(_);
        expectHookNamesToEqual(n, ["count", "isDarkMode", "isDarkMode", null]);expect(require("@babel/parser").parse).toHaveBeenCalledTimes(0);expect(require("../generateHookMap").decodeHookMap).toHaveBeenCalled();
      }await e("./__source__/__compiled__/inline/fb-sources-extended/ComponentWithCustomHook");await e("./__source__/__compiled__/external/fb-sources-extended/ComponentWithCustomHook");await e("./__source__/__compiled__/inline/react-sources-extended/ComponentWithCustomHook");await e("./__source__/__compiled__/external/react-sources-extended/ComponentWithCustomHook");await e("./__source__/__compiled__/inline/fb-sources-extended/index-map/ComponentWithCustomHook");await e("./__source__/__compiled__/external/fb-sources-extended/index-map/ComponentWithCustomHook");await e("./__source__/__compiled__/inline/react-sources-extended/index-map/ComponentWithCustomHook");await e("./__source__/__compiled__/external/react-sources-extended/index-map/ComponentWithCustomHook");
    });it("should work when code is using hooks indirectly", async () => {
      async function e(e, o = "Component") {
        const _ = require(e)[o];

        const n = await a(_);
        expectHookNamesToEqual(n, ["count", "darkMode", "isDarkMode"]);expect(require("@babel/parser").parse).toHaveBeenCalledTimes(0);expect(require("../generateHookMap").decodeHookMap).toHaveBeenCalled();
      }await e("./__source__/__compiled__/inline/fb-sources-extended/ComponentUsingHooksIndirectly");await e("./__source__/__compiled__/external/fb-sources-extended/ComponentUsingHooksIndirectly");await e("./__source__/__compiled__/inline/react-sources-extended/ComponentUsingHooksIndirectly");await e("./__source__/__compiled__/external/react-sources-extended/ComponentUsingHooksIndirectly");await e("./__source__/__compiled__/inline/fb-sources-extended/index-map/ComponentUsingHooksIndirectly");await e("./__source__/__compiled__/external/fb-sources-extended/index-map/ComponentUsingHooksIndirectly");await e("./__source__/__compiled__/inline/react-sources-extended/index-map/ComponentUsingHooksIndirectly");await e("./__source__/__compiled__/external/react-sources-extended/index-map/ComponentUsingHooksIndirectly");
    });it("should work when code is using nested hooks", async () => {
      async function e(e, o = "Component") {
        const _ = require(e)[o];

        var n;
        const t = await a(_, { callback: e => {
            n = e;
          } });
        const i = await a(n);
        expectHookNamesToEqual(t, ["InnerComponent"]);expectHookNamesToEqual(i, ["state"]);expect(require("@babel/parser").parse).toHaveBeenCalledTimes(0);expect(require("../generateHookMap").decodeHookMap).toHaveBeenCalled();
      }await e("./__source__/__compiled__/inline/fb-sources-extended/ComponentWithNestedHooks");await e("./__source__/__compiled__/external/fb-sources-extended/ComponentWithNestedHooks");await e("./__source__/__compiled__/inline/react-sources-extended/ComponentWithNestedHooks");await e("./__source__/__compiled__/external/react-sources-extended/ComponentWithNestedHooks");await e("./__source__/__compiled__/inline/fb-sources-extended/index-map/ComponentWithNestedHooks");await e("./__source__/__compiled__/external/fb-sources-extended/index-map/ComponentWithNestedHooks");await e("./__source__/__compiled__/inline/react-sources-extended/index-map/ComponentWithNestedHooks");await e("./__source__/__compiled__/external/react-sources-extended/index-map/ComponentWithNestedHooks");
    });it("should work for external hooks", async () => {
      async function e(e, o = "Component") {
        const _ = require(e)[o];

        const n = await a(_);
        expectHookNamesToEqual(n, ["theme", "theme"]);expect(require("@babel/parser").parse).toHaveBeenCalledTimes(0);expect(require("../generateHookMap").decodeHookMap).toHaveBeenCalled();
      }await e("./__source__/__compiled__/inline/fb-sources-extended/ComponentWithExternalCustomHooks");await e("./__source__/__compiled__/external/fb-sources-extended/ComponentWithExternalCustomHooks");await e("./__source__/__compiled__/inline/react-sources-extended/ComponentWithExternalCustomHooks");await e("./__source__/__compiled__/external/react-sources-extended/ComponentWithExternalCustomHooks");await e("./__source__/__compiled__/inline/fb-sources-extended/index-map/ComponentWithExternalCustomHooks");await e("./__source__/__compiled__/external/fb-sources-extended/index-map/ComponentWithExternalCustomHooks");await e("./__source__/__compiled__/inline/react-sources-extended/index-map/ComponentWithExternalCustomHooks");await e("./__source__/__compiled__/external/react-sources-extended/index-map/ComponentWithExternalCustomHooks");
    });it("should work when multiple hooks are on a line", async () => {
      async function e(e, o = "Component") {
        const _ = require(e)[o];

        const n = await a(_);
        expectHookNamesToEqual(n, ["a", "b", "c", "d"]);expect(require("@babel/parser").parse).toHaveBeenCalledTimes(0);expect(require("../generateHookMap").decodeHookMap).toHaveBeenCalled();
      }await e("./__source__/__compiled__/inline/fb-sources-extended/ComponentWithMultipleHooksPerLine");await e("./__source__/__compiled__/external/fb-sources-extended/ComponentWithMultipleHooksPerLine");await e("./__source__/__compiled__/inline/react-sources-extended/ComponentWithMultipleHooksPerLine");await e("./__source__/__compiled__/external/react-sources-extended/ComponentWithMultipleHooksPerLine");await e("./__source__/__compiled__/inline/fb-sources-extended/index-map/ComponentWithMultipleHooksPerLine");await e("./__source__/__compiled__/external/fb-sources-extended/index-map/ComponentWithMultipleHooksPerLine");await e("./__source__/__compiled__/inline/react-sources-extended/index-map/ComponentWithMultipleHooksPerLine");await e("./__source__/__compiled__/external/react-sources-extended/index-map/ComponentWithMultipleHooksPerLine");
    });xit("should work for inline requires", async () => {
      async function e(e, o = "Component") {
        const _ = require(e)[o];

        const n = await a(_);
        expectHookNamesToEqual(n, ["count"]);expect(require("@babel/parser").parse).toHaveBeenCalledTimes(0);expect(require("../generateHookMap").decodeHookMap).toHaveBeenCalled();
      }await e("./__source__/__compiled__/inline/fb-sources-extended/InlineRequire");await e("./__source__/__compiled__/external/fb-sources-extended/InlineRequire");await e("./__source__/__compiled__/inline/react-sources-extended/InlineRequire");await e("./__source__/__compiled__/external/react-sources-extended/InlineRequire");await e("./__source__/__compiled__/inline/fb-sources-extended/index-map/InlineRequire");await e("./__source__/__compiled__/external/fb-sources-extended/index-map/InlineRequire");await e("./__source__/__compiled__/inline/react-sources-extended/index-map/InlineRequire");await e("./__source__/__compiled__/external/react-sources-extended/index-map/InlineRequire");
    });it("should support sources that contain the string \"sourceMappingURL=\"", async () => {
      async function e(e, o = "Component") {
        const _ = require(e)[o];

        const n = await a(_);
        expectHookNamesToEqual(n, ["count"]);expect(require("@babel/parser").parse).toHaveBeenCalledTimes(0);expect(require("../generateHookMap").decodeHookMap).toHaveBeenCalled();
      }console.warn = () => {};await e("./__source__/__compiled__/inline/fb-sources-extended/ContainingStringSourceMappingURL");await e("./__source__/__compiled__/external/fb-sources-extended/ContainingStringSourceMappingURL");await e("./__source__/__compiled__/inline/react-sources-extended/ContainingStringSourceMappingURL");await e("./__source__/__compiled__/external/react-sources-extended/ContainingStringSourceMappingURL");await e("./__source__/__compiled__/inline/fb-sources-extended/index-map/ContainingStringSourceMappingURL");await e("./__source__/__compiled__/external/fb-sources-extended/index-map/ContainingStringSourceMappingURL");await e("./__source__/__compiled__/inline/react-sources-extended/index-map/ContainingStringSourceMappingURL");await e("./__source__/__compiled__/external/react-sources-extended/index-map/ContainingStringSourceMappingURL");
    });
  });
});describe("parseHookNames worker", () => {
  var t;
  var i;
  var o;
  beforeEach(() => {
    window.Worker = undefined;o = jest.fn();jest.mock("../parseHookNames/parseHookNames.worker.js", () => {
      return { __esModule: true, default: () => ({ parseHookNames: o }) };
    });t = require("react-debug-tools/src/ReactDebugHooks").inspectHooks;i = require("../parseHookNames").parseHookNames;
  });async function _(e, o = {}) {
    const _ = t(e, o, undefined, true);

    const n = await i(_);
    return n;
  }it("should use worker", async () => {
    const e = require("./__source__/__untransformed__/ComponentWithUseState").Component;

    window.Worker = true;jest.resetModules();i = require("../parseHookNames").parseHookNames;await _(e);expect(o).toHaveBeenCalledTimes(1);
  });
});
