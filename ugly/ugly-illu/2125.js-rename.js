import utils from "./utils";describe("when assignWithDepth: should merge objects within objects", function () {
  it("should handle simple, depth:1 types (identity)", function () {
    const e = { foo: "bar", bar: 0 };
    const t = { foo: "bar", bar: 0 };
    const o = utils.assignWithDepth(e, t);
    expect(o).toEqual(t);
  });it("should handle simple, depth:1 types (dst: undefined)", function () {
    const e = undefined;
    const t = { foo: "bar", bar: 0 };
    const o = utils.assignWithDepth(e, t);
    expect(o).toEqual(t);
  });it("should handle simple, depth:1 types (src: undefined)", function () {
    const e = { foo: "bar", bar: 0 };
    const t = undefined;
    const o = utils.assignWithDepth(e, t);
    expect(o).toEqual(e);
  });it("should handle simple, depth:1 types (merge)", function () {
    const e = { foo: "bar", bar: 0 };
    const t = { foo: "foo" };
    const o = utils.assignWithDepth(e, t);
    expect(o).toEqual({ foo: "foo", bar: 0 });
  });it("should handle depth:2 types (dst: orphan)", function () {
    const e = { foo: "bar", bar: { foo: "bar" } };
    const t = { foo: "bar" };
    const o = utils.assignWithDepth(e, t);
    expect(o).toEqual(e);
  });it("should handle depth:2 types (dst: object, src: simple type)", function () {
    const e = { foo: "bar", bar: { foo: "bar" } };
    const t = { foo: "foo", bar: "should NOT clobber" };
    const o = utils.assignWithDepth(e, t);
    expect(o).toEqual({ foo: "foo", bar: { foo: "bar" } });
  });it("should handle depth:2 types (src: orphan)", function () {
    const e = { foo: "bar" };
    const t = { foo: "bar", bar: { foo: "bar" } };
    const o = utils.assignWithDepth(e, t);
    expect(o).toEqual(t);
  });it("should handle depth:2 types (merge)", function () {
    const e = { foo: "bar", bar: { foo: "bar" }, boofar: 1 };
    const t = { foo: "foo", bar: { bar: 0 }, foobar: "foobar" };
    const o = utils.assignWithDepth(e, t);
    expect(o).toEqual({ foo: "foo", bar: { foo: "bar", bar: 0 }, foobar: "foobar", boofar: 1 });
  });it("should handle depth:3 types (merge with clobber because assignWithDepth::depth == 2)", function () {
    const e = { foo: "bar", bar: { foo: "bar", bar: { foo: { message: "this", willbe: "clobbered" } } }, boofar: 1 };
    const t = { foo: "foo", bar: { foo: "foo", bar: { foo: { message: "clobbered other foo" } } }, foobar: "foobar" };
    const o = utils.assignWithDepth(e, t);
    expect(o).toEqual({ foo: "foo", bar: { foo: "foo", bar: { foo: { message: "clobbered other foo" } } }, foobar: "foobar", boofar: 1 });
  });it("should handle depth:3 types (merge with clobber because assignWithDepth::depth == 1)", function () {
    const e = { foo: "bar", bar: { foo: "bar", bar: { foo: { message: "", willNotbe: "present" }, bar: "shouldNotBePresent" } }, boofar: 1 };
    const t = { foo: "foo", bar: { foo: "foo", bar: { foo: { message: "this" } } }, foobar: "foobar" };
    const o = utils.assignWithDepth(e, t, { depth: 1 });
    expect(o).toEqual({ foo: "foo", bar: { foo: "foo", bar: { foo: { message: "this" } } }, foobar: "foobar", boofar: 1 });
  });it("should handle depth:3 types (merge with no clobber because assignWithDepth::depth == 3)", function () {
    const e = { foo: "bar", bar: { foo: "bar", bar: { foo: { message: "", willbe: "present" } } }, boofar: 1 };
    const t = { foo: "foo", bar: { foo: "foo", bar: { foo: { message: "this" } } }, foobar: "foobar" };
    const o = utils.assignWithDepth(e, t, { depth: 3 });
    expect(o).toEqual({ foo: "foo", bar: { foo: "foo", bar: { foo: { message: "this", willbe: "present" } } }, foobar: "foobar", boofar: 1 });
  });
});describe("when memoizing", function () {
  it("should return the same value", function () {
    const o = utils.memoize(function (e, t) {
      t.flag = true;if (e < 2) {
        return 1;
      } else {
        return o(e - 2, t) + o(e - 1, t);
      }
    });
    var e = { flag: false };
    o(10, e);expect(e.flag).toBe(true);e = { flag: false };o(10, e);expect(e.flag).toBe(false);
  });
});describe("when detecting chart type ", function () {
  it("should handle a graph definition", function () {
    const e = "graph TB\nbfs1:queue";
    const t = utils.detectType(e);
    expect(t).toBe("flowchart");
  });it("should handle an initialize definition", function () {
    const e = `
%%{initialize: { 'logLevel': 0, 'theme': 'dark' }}%%
sequenceDiagram
Alice->Bob: hi`;
    const t = utils.detectType(e);
    const o = utils.detectInit(e);
    expect(t).toBe("sequence");expect(o).toEqual({ logLevel: 0, theme: "dark" });
  });it("should handle an init definition", function () {
    const e = `
%%{init: { 'logLevel': 0, 'theme': 'dark' }}%%
sequenceDiagram
Alice->Bob: hi`;
    const t = utils.detectType(e);
    const o = utils.detectInit(e);
    expect(t).toBe("sequence");expect(o).toEqual({ logLevel: 0, theme: "dark" });
  });it("should handle an init definition with config converted to the proper diagram configuration", function () {
    const e = `
%%{init: { 'logLevel': 0, 'theme': 'dark', 'config': {'wrap': true} } }%%
sequenceDiagram
Alice->Bob: hi`;
    const t = utils.detectType(e);
    const o = utils.detectInit(e);
    expect(t).toBe("sequence");expect(o).toEqual({ logLevel: 0, theme: "dark", sequence: { wrap: true } });
  });it("should handle a multiline init definition", function () {
    const e = `
%%{
  init: {
    'logLevel': 0,
    'theme': 'dark'
  }
}%%
sequenceDiagram
Alice->Bob: hi`;
    const t = utils.detectType(e);
    const o = utils.detectInit(e);
    expect(t).toBe("sequence");expect(o).toEqual({ logLevel: 0, theme: "dark" });
  });it("should handle multiple init directives", function () {
    const e = `
%%{ init: { 'logLevel': 0, 'theme': 'forest' } }%%
%%{
  init: {
    'theme': 'dark'
  }
}%%
sequenceDiagram
Alice->Bob: hi`;
    const t = utils.detectType(e);
    const o = utils.detectInit(e);
    expect(t).toBe("sequence");expect(o).toEqual({ logLevel: 0, theme: "dark" });
  });it("should handle a graph definition with leading spaces", function () {
    const e = "    graph TB\nbfs1:queue";
    const t = utils.detectType(e);
    expect(t).toBe("flowchart");
  });it("should handle a graph definition with leading spaces and newline", function () {
    const e = "  \n  graph TB\nbfs1:queue";
    const t = utils.detectType(e);
    expect(t).toBe("flowchart");
  });it("should handle a graph definition for gitGraph", function () {
    const e = "  \n  gitGraph TB:\nbfs1:queue";
    const t = utils.detectType(e);
    expect(t).toBe("git");
  });
});describe("when finding substring in array ", function () {
  it("should return the array index that contains the substring", function () {
    const e = ["stroke:val1", "fill:val2"];
    const t = utils.isSubstringInArray("fill", e);
    expect(t).toEqual(1);
  });it("should return -1 if the substring is not found in the array", function () {
    const e = ["stroke:val1", "stroke-width:val2"];
    const t = utils.isSubstringInArray("fill", e);
    expect(t).toEqual(-1);
  });
});describe("when formatting urls", function () {
  it("should handle links", function () {
    const e = "https://mermaid-js.github.io/mermaid/#/";
    const t = { securityLevel: "loose" };
    var o = utils.formatUrl(e, t);
    expect(o).toEqual(e);t.securityLevel = "strict";o = utils.formatUrl(e, t);expect(o).toEqual(e);
  });it("should handle anchors", function () {
    const e = "#interaction";
    const t = { securityLevel: "loose" };
    var o = utils.formatUrl(e, t);
    expect(o).toEqual(e);t.securityLevel = "strict";o = utils.formatUrl(e, t);expect(o).toEqual("about:blank");
  });it("should handle mailto", function () {
    const e = "mailto:user@user.user";
    const t = { securityLevel: "loose" };
    var o = utils.formatUrl(e, t);
    expect(o).toEqual(e);t.securityLevel = "strict";o = utils.formatUrl(e, t);expect(o).toEqual(e);
  });it("should handle other protocols", function () {
    const e = "notes://do-your-thing/id";
    const t = { securityLevel: "loose" };
    var o = utils.formatUrl(e, t);
    expect(o).toEqual(e);t.securityLevel = "strict";o = utils.formatUrl(e, t);expect(o).toEqual(e);
  });it("should handle scripts", function () {
    const e = "javascript:alert(\"test\")";
    const t = { securityLevel: "loose" };
    var o = utils.formatUrl(e, t);
    expect(o).toEqual(e);t.securityLevel = "strict";o = utils.formatUrl(e, t);expect(o).toEqual("about:blank");
  });
});describe("when calculating SVG size", function () {
  it("should return width 100% when useMaxWidth is true", function () {
    const e = utils.calculateSvgSizeAttrs(100, 200, true);
    expect(e.get("height")).toEqual(100);expect(e.get("style")).toEqual("max-width: 200px;");expect(e.get("width")).toEqual("100%");
  });it("should return absolute width when useMaxWidth is false", function () {
    const e = utils.calculateSvgSizeAttrs(100, 200, false);
    expect(e.get("height")).toEqual(100);expect(e.get("width")).toEqual(200);
  });
});describe("when initializing the id generator", function () {
  it("should return a random number generator based on Date", function (e) {
    const t = new utils.initIdGeneratior(false);
    expect(typeof t.next).toEqual("function");const o = t.next();
    setTimeout(() => {
      expect(t.next() > o).toBe(true);e();
    }, 5);
  });it("should return a non random number generator", function () {
    const e = new utils.initIdGeneratior(true);
    expect(typeof e.next).toEqual("function");const t = 0;
    const o = e.next();
    expect(t).toEqual(o);expect(e.next()).toEqual(o + 1);
  });it("should return a non random number generator based on seed", function () {
    const e = new utils.initIdGeneratior(true, "thisIsASeed");
    expect(typeof e.next).toEqual("function");const t = 11;
    const o = e.next();
    expect(t).toEqual(o);expect(e.next()).toEqual(o + 1);
  });
});
