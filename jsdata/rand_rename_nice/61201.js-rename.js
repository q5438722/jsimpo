'use strict';
var extend = function(d, b) {
  function __() {
    this.constructor = d;
  }
  __.prototype = b.prototype;
  d.prototype = new __;
};
var Car = function(r) {
  var e = function() {
    var that = this;
    r.call(that);
    Object.defineProperties(that, {
      make : {
        enumerable : true,
        configurable : true,
        get : function() {
          return "Ford";
        }
      }
    });
    that.copy = function() {
      throw new Error("Meant to be overriden");
    };
    return that;
  };
  extend(e, r);
  return e;
}(Object);
var SuperCar = function(decorator) {
  var e = function(n) {
    var that = this;
    decorator.call(that);
    Object.defineProperties(that, {
      make : {
        enumerable : true,
        configurable : true,
        get : function() {
          return n;
        }
      }
    });
    that.copy = function() {
    };
    return that;
  };
  extend(e, decorator);
  return e;
}(Car);
assertEquals("Ford", (new Car).make);
assertEquals("Bugatti", (new SuperCar("Bugatti")).make);
assertEquals("Lambo", (new SuperCar("Lambo")).make);
assertEquals("Shelby", (new SuperCar("Shelby")).make);

