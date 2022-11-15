import { compile } from "../../../packages/weex-template-compiler";import { strToRegExp } from "../helpers/index";describe("compile style", () => {
  it("should be compiled", () => {
    var { render: e, staticRenderFns: t, errors: o } = compile(`<div style="a: x; b: y"></div>`);
    expect(e).not.toBeUndefined();expect(t).not.toBeUndefined();expect(t.length).toEqual(0);expect(e).toMatch(strToRegExp(`staticStyle:{a:"x",b:"y"}`));expect(o).toEqual([]);
  });it("should compile empty style value", () => {
    var { render: e, staticRenderFns: t, errors: o } = compile(`<div style=""></div>`);
    expect(e).not.toBeUndefined();expect(t).not.toBeUndefined();expect(t.length).toEqual(0);expect(e).toMatch(/[(^style|^staticStyle)]/);expect(o).toEqual([]);
  });it("should compile style value with trailing semicolon", () => {
    var { render: e, staticRenderFns: t, errors: o } = compile(`<div style="a: x; b: y;"></div>`);
    expect(e).not.toBeUndefined();expect(t).not.toBeUndefined();expect(t.length).toEqual(0);expect(e).toMatch(strToRegExp(`staticStyle:{a:"x",b:"y"}`));expect(o).toEqual([]);
  });it("should compile hyphenated style name & value", () => {
    var { render: e, staticRenderFns: t, errors: o } = compile(`<div style="-abc-def: x-y; abc-def: x-y"></div>`);
    expect(e).not.toBeUndefined();expect(t).not.toBeUndefined();expect(t.length).toEqual(0);expect(e).toMatch(strToRegExp(`staticStyle:{AbcDef:"x-y",abcDef:"x-y"}`));expect(o).toEqual([]);
  });it("should compile dynamic style", () => {
    var { render: e, staticRenderFns: t, errors: o } = compile(`<div style="a: x; b: {{y}}"></div>`);
    expect(e).not.toBeUndefined();expect(t).toEqual([]);expect(e).toMatch(strToRegExp(`style:{a:"x",b:_s(y)}`));expect(o).not.toBeUndefined();expect(o.length).toEqual(1);expect(o[0]).toMatch(strToRegExp(`b: {{y}}`));expect(o[0]).toMatch(strToRegExp(`v-bind`));
  });it("should compile style binding of array", () => {
    var { render: e, staticRenderFns: t, errors: o } = compile(`<div v-bind:style="[a, b, c]"></div>`);
    expect(e).not.toBeUndefined();expect(t).toEqual([]);expect(e).toMatch(strToRegExp(`style:[a, b, c]`));expect(o).toEqual([]);
  });it("should compile style binding of map", () => {
    var { render: e, staticRenderFns: t, errors: o } = compile(`<div v-bind:style="{ a: x, b: 'y' + z }"></div>`);
    expect(e).not.toBeUndefined();expect(t).toEqual([]);expect(e).toMatch(strToRegExp(`style:{ a: x, b: 'y' + z }`));expect(o).toEqual([]);
  });it("should compile style binding of a variable", () => {
    var { render: e, staticRenderFns: t, errors: o } = compile(`<div v-bind:style="x"></div>`);
    expect(e).not.toBeUndefined();expect(t).toEqual([]);expect(e).toMatch(strToRegExp(`style:x`));expect(o).toEqual([]);
  });it("should compile style binding by shorthand", () => {
    var { render: e, staticRenderFns: t, errors: o } = compile(`<div :style="[a, b, c]"></div>`);
    expect(e).not.toBeUndefined();expect(t).toEqual([]);expect(e).toMatch(strToRegExp(`style:[a, b, c]`));expect(o).toEqual([]);
  });
});
