'use strict';
var Equals = function(p1, p2) {
  return p1["x"] === p2["x"] && p1["y"] === p2["y"] && p1["radius"] === p2["radius"];
};
module["exports"] = Equals;

