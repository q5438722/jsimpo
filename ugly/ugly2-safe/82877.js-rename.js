"use strict";
  angular.module("test", []).controller("TestController", function (raccoon, hamster, chinchilla) {
    raccoon.yOffset = 50;
    chinchilla.scrollTo = function (ibex) {
      if (hamster.hash() !== ibex)
      {
        hamster.hash(ibex);
      }
      else
      {
        raccoon();
      }
    };
  });
  