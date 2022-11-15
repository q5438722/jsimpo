'use strict';
class Outer {
  constructor(couchbaseUri) {
    this["x"] = couchbaseUri;
  }
}
class ArrayHolder {
  constructor(options) {
    this["array"] = [];
    this["array"][1] = options;
  }
}
const root = {};
root["first"] = new Outer(new ArrayHolder(root));
JSON["stringify"](root);

