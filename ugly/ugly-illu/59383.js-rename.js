class Outer {
  constructor(r) {
    this.x = r;
  }
}class ArrayHolder {
  constructor(r) {
    this.array = [];this.array[1] = r;
  }
}const root = {};
root.first = new Outer(new ArrayHolder(root));JSON.stringify(root);