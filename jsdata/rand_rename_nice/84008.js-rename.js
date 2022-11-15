'use strict';
var expect = require("expect");
var gulp = require("../");
describe("gulp", function() {
  describe("hasOwnProperty", function() {
    it("src", function(saveNotifs) {
      expect(gulp.hasOwnProperty("src")).toEqual(true);
      saveNotifs();
    });
    it("dest", function(saveNotifs) {
      expect(gulp.hasOwnProperty("dest")).toEqual(true);
      saveNotifs();
    });
    it("symlink", function(saveNotifs) {
      expect(gulp.hasOwnProperty("symlink")).toEqual(true);
      saveNotifs();
    });
    it("watch", function(saveNotifs) {
      expect(gulp.hasOwnProperty("watch")).toEqual(true);
      saveNotifs();
    });
    it("task", function(saveNotifs) {
      expect(gulp.hasOwnProperty("task")).toEqual(true);
      saveNotifs();
    });
    it("series", function(saveNotifs) {
      expect(gulp.hasOwnProperty("series")).toEqual(true);
      saveNotifs();
    });
    it("parallel", function(saveNotifs) {
      expect(gulp.hasOwnProperty("parallel")).toEqual(true);
      saveNotifs();
    });
    it("tree", function(saveNotifs) {
      expect(gulp.hasOwnProperty("tree")).toEqual(true);
      saveNotifs();
    });
    it("lastRun", function(saveNotifs) {
      expect(gulp.hasOwnProperty("lastRun")).toEqual(true);
      saveNotifs();
    });
    it("registry", function(saveNotifs) {
      expect(gulp.hasOwnProperty("registry")).toEqual(true);
      saveNotifs();
    });
  });
});

