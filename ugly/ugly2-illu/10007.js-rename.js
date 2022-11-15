const cacheLoader = require("../cacheLoader");

module.exports = cacheLoader(function e(t) {
  return fetch(t).then(function (e) {
    if (WebAssembly.instantiateStreaming) {
      return WebAssembly.instantiateStreaming(e);
    } else {
      return e.arrayBuffer().then(function (e) {
        return WebAssembly.instantiate(e);
      });
    }
  }).then(function (e) {
    return e.instance.exports;
  });
});
