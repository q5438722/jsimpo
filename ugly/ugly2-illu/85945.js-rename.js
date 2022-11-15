const CONST = require("../const");

const CounterClockwise = function (C) {
  if (C > Math.PI) {
    C -= CONST.PI2;
  }return Math.abs(((C + CONST.TAU) % CONST.PI2 - CONST.PI2) % CONST.PI2);
};

module.exports = CounterClockwise;
