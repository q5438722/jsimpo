'use strict';
const BinaryMiddleware = require("../lib/serialization/BinaryMiddleware");
const SerializerMiddleware = require("../lib/serialization/SerializerMiddleware");
const cont = (options, x) => {
  const argv = [];
  for (let i = 0; i < x; i++) {
    argv["push"](options[i % options["length"]]);
  }
  return argv;
};
const mw = new BinaryMiddleware;
const other = {
  "other" : !![]
};
const resolveLazy = (wrongCredsCallback) => {
  if (SerializerMiddleware["isLazy"](wrongCredsCallback)) {
    const data = wrongCredsCallback();
    if (Array["isArray"](data)) {
      return {
        "resolvesTo" : data["map"](resolveLazy)
      };
    }
    return {
      "resolvesTo" : resolveLazy(data)
    };
  }
  return wrongCredsCallback;
};
describe("BinaryMiddleware", () => {
  const options = [!![], ![], null, "", "hi", "hi"["repeat"](200), "\ud83d\ude00", "\ud83d\ude00"["repeat"](200), Buffer["from"]("hello"), 1, 11, 256, -1, -11, -256, -1.25, SerializerMiddleware["createLazy"]([5], other)];
  const PL$19 = [...options, SerializerMiddleware["createLazy"]([SerializerMiddleware["createLazy"]([5], other)], mw), SerializerMiddleware["createLazy"]([1, SerializerMiddleware["createLazy"]([2], mw), SerializerMiddleware["createLazy"]([5], other), 4], mw)];
  PL$19["push"](SerializerMiddleware["createLazy"](PL$19["slice"](), mw));
  PL$19["push"](SerializerMiddleware["createLazy"](PL$19["slice"](), other));
  options["push"](undefined);
  const deps = [...PL$19["map"]((canCreateDiscussions) => {
    return [canCreateDiscussions];
  }), [(!![], !![])], cont([5.5], 20), [!![], ![]], [![], ![]], [![], ![], ![]], [![], !![], ![], !![]], [!![], !![], !![]], [![], ![], ![]], cont([![], !![], ![], !![]], 5), _0x140a13["xOUHm"](cont, [!![]], 5), _0x140a13["xOUHm"](cont, [![]], 5), cont([![], !![], ![], !![]], 6), _0x140a13["YbZRD"](cont, [!![]], 6), _0x140a13["YbZRD"](cont, [![]], 6), _0x140a13["YbZRD"](cont, [![], !![], ![], !![]], 7), _0x140a13["qvZBd"](cont, [![], !![], ![], !![]], 8), _0x140a13["tavWQ"](cont, [![], !![], ![], 
  !![]], 9), _0x140a13["OSCYH"](cont, [![], !![], ![], !![]], 132), cont([![], !![], ![], !![]], 133), _0x140a13["OSCYH"](cont, [![], !![], ![], !![]], 134), _0x140a13["OSCYH"](cont, [![], !![], ![], !![]], 135), _0x140a13["yuXLB"](cont, [![], !![], ![], !![]], 10000), _0x140a13["yuXLB"](cont, [!![]], 135), [null], [null, null], [null, null, null], cont([null], 4), _0x140a13["yuXLB"](cont, [null], 100), _0x140a13["wiOji"](cont, [null], 300), _0x140a13["hRyoz"](cont, [-20], 20), _0x140a13["hRyoz"](cont, 
  [400], 20), _0x140a13["xcvCr"](cont, [5.5], 20)];
  for (const size of [1, 100]) {
    for (const depPkgUri of deps) {
      if (_0x140a13["iHVtO"] === _0x140a13["aarUY"]) {
        const PL$86 = [];
        for (let i = 0; i < count; i++) {
          PL$86["push"](base[i % base["length"]]);
        }
        return PL$86;
      } else {
        for (const optionsFetcher of options) {
          if (_0x140a13["auiGj"] === "EgXTQ") {
            for (const fill of options) {
              if (size > 1 && fill !== undefined) {
                continue;
              }
              let json = [optionsFetcher, ...depPkgUri, fill]["filter"]((inParentIndex) => {
                return inParentIndex !== undefined;
              });
              if (json["length"] * size > json["length"] * size) {
                continue;
              }
              if (json["length"] === 0) {
                continue;
              }
              let PL$19 = JSON["stringify"](json["map"](resolveLazy));
              if (PL$19["length"] > 100) {
                PL$19 = PL$19["slice"](0, 50) + _0x140a13["IwrQl"] + PL$19["slice"](-50);
              }
              it("should serialize " + size + " x " + PL$19 + " (" + json["length"] + ") correctly", () => {
                if (_0x140a13["zNZLk"] !== _0x140a13["zNZLk"]) {
                  const value = cont(json, json["length"] * size);
                  const artistTrack = mw["serialize"](value, {});
                  const gSobject = mw["deserialize"](artistTrack, {});
                  expect(gSobject["map"](resolveLazy))["toEqual"](value["map"](resolveLazy));
                } else {
                  const value = cont(json, json["length"] * size);
                  const artistTrack = mw["serialize"](value, {});
                  const gSobject = mw["deserialize"](artistTrack, {});
                  expect(gSobject["map"](resolveLazy))["toEqual"](value["map"](resolveLazy));
                }
              });
            }
          } else {
            result["push"](base[i % base["length"]]);
          }
        }
      }
    }
  }
});

