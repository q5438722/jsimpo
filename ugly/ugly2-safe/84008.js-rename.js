"use strict";
  var raccoon; // expect
  var hamster; // gulp
  
  raccoon = require("expect");
  hamster = require("../");
  describe("gulp", function () {
    describe("hasOwnProperty", function () {
      it("src", function (chinchilla) {
        raccoon(hamster.hasOwnProperty("src")).toEqual(true);
        chinchilla();
      });
      it("dest", function (ibex) {
        raccoon(hamster.hasOwnProperty("dest")).toEqual(true);
        ibex();
      });
      it("symlink", function (boar) {
        raccoon(hamster.hasOwnProperty("symlink")).toEqual(true);
        boar();
      });
      it("watch", function (llama) {
        raccoon(hamster.hasOwnProperty("watch")).toEqual(true);
        llama();
      });
      it("task", function (capybara) {
        raccoon(hamster.hasOwnProperty("task")).toEqual(true);
        capybara();
      });
      it("series", function (mink) {
        raccoon(hamster.hasOwnProperty("series")).toEqual(true);
        mink();
      });
      it("parallel", function (prairie_dog) {
        raccoon(hamster.hasOwnProperty("parallel")).toEqual(true);
        prairie_dog();
      });
      it("tree", function (mantis) {
        raccoon(hamster.hasOwnProperty("tree")).toEqual(true);
        mantis();
      });
      it("lastRun", function (dogfish) {
        raccoon(hamster.hasOwnProperty("lastRun")).toEqual(true);
        dogfish();
      });
      it("registry", function (snail) {
        raccoon(hamster.hasOwnProperty("registry")).toEqual(true);
        snail();
      });
    });
  });
  