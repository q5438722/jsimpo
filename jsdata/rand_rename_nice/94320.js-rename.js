'use strict';
(function() {
  function e() {
    const buttonCollapseAll = document.createElement("div");
    buttonCollapseAll.innerText = `security triggered ${(new Error).stack.split("\n", 3)[2]}`;
    document.body.appendChild(buttonCollapseAll);
  }
  window.topFoo = "foo";
  window.parentFoo = "foo";
  (function() {
    const o = "foo";
    const oldObj = "foo";
    const newObj = "foo";
    if (o !== newObj) {
      e();
    }
    if (oldObj !== newObj) {
      e();
    }
    if (newObj !== o) {
      e();
    }
    if (newObj !== oldObj) {
      e();
    }
  })();
  if (top != self) {
    e();
  }
  if (top != self) {
    e();
  }
  if (top.location != self.location) {
    e();
  }
  if (top.location != location) {
    e();
  }
  if (parent.frames.length > 0) {
    e();
  }
  if (window != top) {
    e();
  }
  if (window.top !== window.self) {
    e();
  }
  if (window.top !== window.self) {
    e();
  }
  if (window.self != window.top) {
    e();
  }
  if (window.top != window.self) {
    e();
  }
  if (window["top"] != window["parent"]) {
    e();
  }
  if (window["top"] != window["parent"]) {
    e();
  }
  if (window["top"] != self["parent"]) {
    e();
  }
  if (parent && parent != window) {
    e();
  }
  if (parent && parent != self) {
    e();
  }
  if (parent && window.topFoo != topFoo) {
    e();
  }
  if (parent && window.parentFoo != parentFoo) {
    e();
  }
  if (parent && window != parent) {
    e();
  }
  if (parent && self != parent) {
    e();
  }
  if (parent && parent.frames && parent.frames.length > 0) {
    e();
  }
  if (self.parent && !(self.parent === self) && self.parent.frames.length != 0) {
    e();
  }
  const buttonCollapseAll = document.createElement("div");
  buttonCollapseAll.innerText = "js ran";
  document.body.appendChild(buttonCollapseAll);
})();

