const Triangle = require("./Triangle");

const Clone = function (e) {
  return new Triangle(e.x1, e.y1, e.x2, e.y2, e.x3, e.y3);
};

module.exports = Clone;
