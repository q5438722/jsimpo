const extend = function (e, r) {
  function t() {
    this.constructor = e;
  }t.prototype = r.prototype;e.prototype = new t();
};

const Car = function (r) {
  const e = function () {
    const e = this;
    r.call(e);Object.defineProperties(e, { make: { enumerable: true, configurable: true, get: function () {
          return "Ford";
        } } });e.copy = function () {
      throw new Error("Meant to be overriden");
    };return e;
  };

  extend(e, r);return e;
}(Object);

const SuperCar = function (t) {
  const e = function (e) {
    const r = this;
    t.call(r);Object.defineProperties(r, { make: { enumerable: true, configurable: true, get: function () {
          return e;
        } } });r.copy = function () {};return r;
  };

  extend(e, t);return e;
}(Car);

assertEquals("Ford", new Car().make);assertEquals("Bugatti", new SuperCar("Bugatti").make);assertEquals("Lambo", new SuperCar("Lambo").make);assertEquals("Shelby", new SuperCar("Shelby").make);
