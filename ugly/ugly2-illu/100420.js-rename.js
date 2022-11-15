import { bidi } from "../../src/core/bidi.js";describe("bidi", function () {
  it("should mark text as RTL if more than 30% of text is RTL", function () {
    const t = "\u0645\u0635\u0631 Egypt";
    const i = "Egypt \u0631\u0635\u0645";
    const s = bidi(t, -1, false);
    expect(s.str).toEqual(i);expect(s.dir).toEqual("rtl");
  });it("should mark text as LTR if less than 30% of text is RTL", function () {
    const t = "Egypt is known as \u0645\u0635\u0631 in Arabic.";
    const i = "Egypt is known as \u0631\u0635\u0645 in Arabic.";
    const s = bidi(t, -1, false);
    expect(s.str).toEqual(i);expect(s.dir).toEqual("ltr");
  });
});
