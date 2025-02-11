"use strict";

const test = require("tap").test;

const path = require("path");

const findNodeDirectory = require("../lib/find-node-directory");

const platforms = ["darwin", "freebsd", "linux", "sunos", "win32", "aix"];
test("test find-node-directory - node install", function (e) {
  e.plan(6);for (var o = 0; o < 6; o++) {
    const t = { execPath: "/x/y/bin/node", platform: platforms[o] };
    e.equal(findNodeDirectory("/x/deps/npm/node_modules/node-gyp/lib", t), path.join("/x"));
  }
});test("test find-node-directory - node build", function (e) {
  e.plan(6);for (var o = 0; o < 6; o++) {
    const t = { execPath: "/x/y/bin/node", platform: platforms[o] };
    if (platforms[o] === "win32") {
      e.equal(findNodeDirectory("/y/node_modules/npm/node_modules/node-gyp/lib", t), path.join("/y"));
    } else {
      e.equal(findNodeDirectory("/y/lib/node_modules/npm/node_modules/node-gyp/lib", t), path.join("/y"));
    }
  }
});test("test find-node-directory - node in bin directory", function (e) {
  e.plan(6);for (var o = 0; o < 6; o++) {
    const t = { execPath: "/x/y/bin/node", platform: platforms[o] };
    e.equal(findNodeDirectory("/nothere/npm/node_modules/node-gyp/lib", t), path.join("/x/y"));
  }
});test("test find-node-directory - node in build release dir", function (e) {
  e.plan(6);for (var o = 0; o < 6; o++) {
    var t;
    if (platforms[o] === "win32") {
      t = { execPath: "/x/y/Release/node", platform: platforms[o] };
    } else {
      t = { execPath: "/x/y/out/Release/node", platform: platforms[o] };
    }e.equal(findNodeDirectory("/nothere/npm/node_modules/node-gyp/lib", t), path.join("/x/y"));
  }
});test("test find-node-directory - node in Debug release dir", function (e) {
  e.plan(6);for (var o = 0; o < 6; o++) {
    var t;
    if (platforms[o] === "win32") {
      t = { execPath: "/a/b/Debug/node", platform: platforms[o] };
    } else {
      t = { execPath: "/a/b/out/Debug/node", platform: platforms[o] };
    }e.equal(findNodeDirectory("/nothere/npm/node_modules/node-gyp/lib", t), path.join("/a/b"));
  }
});test("test find-node-directory - not found", function (e) {
  e.plan(6);for (var o = 0; o < 6; o++) {
    const t = { execPath: "/x/y/z/y", platform: o };
    e.equal(findNodeDirectory("/a/b/c/d", t), "");
  }
});test("test find-node-directory - node install", function (e) {
  e.plan(6);for (var o = 0; o < 6; o++) {
    const t = { execPath: "/x/y/bin/node", platform: platforms[o] };
    e.equal(findNodeDirectory("/x/y/z/a/b/c/deps/npm/node_modules/node-gyp/lib", t), path.join("/x/y/z/a/b/c"));
  }
});
