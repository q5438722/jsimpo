"use strict";

const expect = require("expect");

const gulp = require("../");

describe("gulp", function () {
  describe("hasOwnProperty", function () {
    it("src", function (t) {
      expect(gulp.hasOwnProperty("src")).toEqual(true);t();
    });it("dest", function (t) {
      expect(gulp.hasOwnProperty("dest")).toEqual(true);t();
    });it("symlink", function (t) {
      expect(gulp.hasOwnProperty("symlink")).toEqual(true);t();
    });it("watch", function (t) {
      expect(gulp.hasOwnProperty("watch")).toEqual(true);t();
    });it("task", function (t) {
      expect(gulp.hasOwnProperty("task")).toEqual(true);t();
    });it("series", function (t) {
      expect(gulp.hasOwnProperty("series")).toEqual(true);t();
    });it("parallel", function (t) {
      expect(gulp.hasOwnProperty("parallel")).toEqual(true);t();
    });it("tree", function (t) {
      expect(gulp.hasOwnProperty("tree")).toEqual(true);t();
    });it("lastRun", function (t) {
      expect(gulp.hasOwnProperty("lastRun")).toEqual(true);t();
    });it("registry", function (t) {
      expect(gulp.hasOwnProperty("registry")).toEqual(true);t();
    });
  });
});
