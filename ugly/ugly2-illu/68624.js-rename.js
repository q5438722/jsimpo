"use strict";
export default function* idMaker() {
  var e = 0;
  while (true) yield e++;
}
