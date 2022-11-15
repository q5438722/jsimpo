'use strict';
class Outer {
  constructor(posx) {
    this.x = posx;
  }
}
class ArrayHolder {
  constructor(options) {
    this.array = [];
    this.array[1] = options;
  }
}
const root = {};
root.first = new Outer(new ArrayHolder(root));
JSON.stringify(root);

