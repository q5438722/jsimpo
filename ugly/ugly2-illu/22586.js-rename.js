(function () {
  const e = babelHelpers.asyncToGenerator(function* () {
    console.log((yield Promise.resolve("Hello")));setTimeout(o, 1e3);
  });
  function o() {
    return e.apply(this, arguments);
  }return o;
})()();
