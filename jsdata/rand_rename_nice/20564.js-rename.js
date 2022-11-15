'use strict';
const x = (async() => {
  throw new Error("sync");
})();

