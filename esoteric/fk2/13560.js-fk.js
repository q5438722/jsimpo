function Foo() {
  this instanceof Foo ? this.constructor : void +[];
}

Foo.prototype.test = function _target() {
  this instanceof _target ? this.constructor : void +[];
};

var Bar = function _target!+[]+!+[]() {
  this instanceof _target!+[]+!+[] ? this.constructor : void +[];
};
