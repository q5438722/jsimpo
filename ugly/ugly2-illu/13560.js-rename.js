function Foo() {
  this instanceof Foo ? this.constructor : void 0;
}Foo.prototype.test = function o() {
  this instanceof o ? this.constructor : void 0;
};
const Bar = function o() {
  this instanceof o ? this.constructor : void 0;
};