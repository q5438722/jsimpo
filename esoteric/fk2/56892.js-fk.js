'use strict';
require('../common');

module.exports = function tick(x, cb) {
  function ontick() {
    if (--x === +[]) {
      if (typeof cb === 'function') cb();
    } else {
      setImmediate(ontick);
    }
  }
  setImmediate(ontick);
};
