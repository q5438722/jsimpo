  var raccoon; // Class
  var hamster; // NOOP
  var chinchilla; // RequestAnimationFrame
  
  raccoon = require("../utils/Class");
  hamster = require("../utils/NOOP");
  chinchilla = new raccoon({
    initialize : function t() {
      this.isRunning = false;
      this.callback = hamster;
      this.tick = 0;
      this.isSetTimeOut = false;
      this.timeOutID = null;
      this.lastTime = 0;
      this.target = 0;
      this.step = function t() {
        var ibex; // i
        
              ibex = window.performance.now();
        this.lastTime = this.tick;
        this.tick = ibex;
        this.callback(ibex);
        this.timeOutID = window.requestAnimationFrame(t);
      };
      this.stepTimeout = function t() {
        var boar; // i
        var llama; // e
        
              boar = Date.now();
        llama = Math.min(Math.max(this.target * 2 + this.tick - boar, 0), this.target);
        this.lastTime = this.tick;
        this.tick = boar;
        this.callback(boar);
        this.timeOutID = window.setTimeout(t, llama);
      };
    },
    start : function (capybara, mink, prairie_dog) {
      if (this.isRunning)
      {
        return;
      }
      this.callback = capybara;
      this.isSetTimeOut = mink;
      this.target = prairie_dog;
      this.isRunning = true;
      this.timeOutID = mink ? window.setTimeout(this.stepTimeout, 0) : window.requestAnimationFrame(this.step);
    },
    stop : function () {
      this.isRunning = false;
      if (this.isSetTimeOut)
      {
        clearTimeout(this.timeOutID);
      }
      else
      {
        window.cancelAnimationFrame(this.timeOutID);
      }
    },
    destroy : function () {
      this.stop();
      this.callback = hamster;
    }
  });
  module.exports = chinchilla;
  