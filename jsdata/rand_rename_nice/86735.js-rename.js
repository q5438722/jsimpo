'use strict';
var Class = require("../utils/Class");
var NOOP = require("../utils/NOOP");
var RequestAnimationFrame = new Class({
  initialize : function start() {
    this.isRunning = false;
    this.callback = NOOP;
    this.tick = 0;
    this.isSetTimeOut = false;
    this.timeOutID = null;
    this.lastTime = 0;
    this.target = 0;
    var self = this;
    this.step = function start() {
      var resp = window.performance.now();
      self.lastTime = self.tick;
      self.tick = resp;
      self.callback(resp);
      self.timeOutID = window.requestAnimationFrame(start);
    };
    this.stepTimeout = function start() {
      var delay = Date.now();
      var renewTokenIn = Math.min(Math.max(self.target * 2 + self.tick - delay, 0), self.target);
      self.lastTime = self.tick;
      self.tick = delay;
      self.callback(delay);
      self.timeOutID = window.setTimeout(start, renewTokenIn);
    };
  },
  start : function(kernelVert, updateFrag, sphereVert) {
    if (this.isRunning) {
      return;
    }
    this.callback = kernelVert;
    this.isSetTimeOut = updateFrag;
    this.target = sphereVert;
    this.isRunning = true;
    this.timeOutID = updateFrag ? window.setTimeout(this.stepTimeout, 0) : window.requestAnimationFrame(this.step);
  },
  stop : function() {
    this.isRunning = false;
    if (this.isSetTimeOut) {
      clearTimeout(this.timeOutID);
    } else {
      window.cancelAnimationFrame(this.timeOutID);
    }
  },
  destroy : function() {
    this.stop();
    this.callback = NOOP;
  }
});
module.exports = RequestAnimationFrame;

