'use strict';
var Offset = function(v, y, alpha) {
  v["x"] += y;
  v["y"] += alpha;
  return v;
};
module["exports"] = Offset;

