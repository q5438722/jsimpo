/**
 * @license
    2020 Photon Storm Ltd.
 @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
'use strict';
var Offset = function(v, y, alpha) {
  v["x"] += y;
  v["y"] += alpha;
  return v;
};
module["exports"] = Offset;

