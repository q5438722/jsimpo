'use strict';
const BinaryMiddleware = require("../lib/serialization/BinaryMiddleware");
const SerializerMiddleware = require("../lib/serialization/SerializerMiddleware");
const cont = (colors, x) => {
  const self = [];
  for (let i = 0; i < x; i++) {
    self.push(colors[i % colors.length]);
  }
  return self;
};
const mw = new BinaryMiddleware;
const other = {
  other : true
};
const resolveLazy = (wrongCredsCallback) => {
  if (SerializerMiddleware.isLazy(wrongCredsCallback)) {
    const calleeIdentifier = wrongCredsCallback();
    if (Array.isArray(calleeIdentifier)) {
      return {
        resolvesTo : calleeIdentifier.map(resolveLazy)
      };
    }
    return {
      resolvesTo : resolveLazy(calleeIdentifier)
    };
  }
  return wrongCredsCallback;
};
describe("BinaryMiddleware", () => {
  const options = [true, false, null, "", "hi", "hi".repeat(200), "\ud83d\ude00", "\ud83d\ude00".repeat(200), Buffer.from("hello"), 1, 11, 256, -1, -11, -256, -1.25, SerializerMiddleware.createLazy([5], other)];
  const button = [...options, SerializerMiddleware.createLazy([SerializerMiddleware.createLazy([5], other)], mw), SerializerMiddleware.createLazy([1, SerializerMiddleware.createLazy([2], mw), SerializerMiddleware.createLazy([5], other), 4], mw)];
  button.push(SerializerMiddleware.createLazy(button.slice(), mw));
  button.push(SerializerMiddleware.createLazy(button.slice(), other));
  options.push(undefined);
  const match = [...button.map((canCreateDiscussions) => {
    return [canCreateDiscussions];
  }), [(true, true)], [false, true], [true, false], [false, false], [false, false, false], [false, true, false, true], [true, true, true], [false, false, false], cont([false, true, false, true], 5), cont([true], 5), cont([false], 5), cont([false, true, false, true], 6), cont([true], 6), cont([false], 6), cont([false, true, false, true], 7), cont([false, true, false, true], 8), cont([false, true, false, true], 9), cont([false, true, false, true], 132), cont([false, true, false, true], 133), cont([false, 
  true, false, true], 134), cont([false, true, false, true], 135), cont([false, true, false, true], 1e4), cont([true], 135), [null], [null, null], [null, null, null], cont([null], 4), cont([null], 100), cont([null], 300), cont([-20], 20), cont([400], 20), cont([5.5], 20)];
  for (const size of [1, 100]) {
    for (const i of match) {
      for (const optionsFetcher of options) {
        for (const fill of options) {
          if (size > 1 && fill !== undefined) {
            continue;
          }
          let dir = [optionsFetcher, ...i, fill].filter((inParentIndex) => {
            return inParentIndex !== undefined;
          });
          if (dir.length * size > 2e5) {
            continue;
          }
          if (dir.length === 0) {
            continue;
          }
          let charListNotLatin = JSON.stringify(dir.map(resolveLazy));
          if (charListNotLatin.length > 100) {
            charListNotLatin = charListNotLatin.slice(0, 50) + " ... " + charListNotLatin.slice(-50);
          }
          it(`should serialize ${size} x ${charListNotLatin} (${dir.length}) correctly`, () => {
            const e = cont(dir, dir.length * size);
            const msg = mw.serialize(e, {});
            const navLinksArr = mw.deserialize(msg, {});
            expect(navLinksArr.map(resolveLazy)).toEqual(e.map(resolveLazy));
          });
        }
      }
    }
  }
});

