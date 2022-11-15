const Circle = require("./Circle");

const Clone = function (e) {
  return new Circle(e.x, e.y, e.radius);
};

module.exports = Clone;
