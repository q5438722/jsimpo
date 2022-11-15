  var raccoon; // Class
  var hamster; // NOOP
  var chinchilla; // RequestAnimationFrame
  
  raccoon = require('../utils/Class');
  hamster = require('../utils/NOOP');
  chinchilla = new raccoon({
    initialize : function RequestAnimationFrame() {
      this.isRunning = ! [];
      this.callback = hamster;
      this.tick = + [];
      this.isSetTimeOut = ! [];
      this.timeOutID = null;
      this.lastTime = + [];
      this.target = + [];
      this.step = function step() {
        var ibex; // timestamp
        
              ibex = []["filter"]["constructor"]("return this")().performance.now();
        this.lastTime = this.tick;
        this.tick = ibex;
        this.callback(ibex);
        this.timeOutID = []["filter"]["constructor"]("return this")().requestAnimationFrame(step);
      };
      this.stepTimeout = function stepTimeout() {
        var boar; // d
        var llama; // delay
        
              boar = Date.now();
        llama = Math.min(Math.max(this.target * ! + [] + ! + [] + this.tick - boar, + []), 
        this.target);
        this.lastTime = this.tick;
        this.tick = boar;
        this.callback(boar);
        this.timeOutID = []["filter"]["constructor"]("return this")().setTimeout(stepTimeout, llama);
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
      this.isRunning = ! ! [];
      this.timeOutID = (mink) ? []["filter"]["constructor"]("return this")().setTimeout(this.stepTimeout, + []) : []["filter"]["constructor"]("return this")().requestAnimationFrame(this.step);
    },
    stop : function () {
      this.isRunning = ! [];
      if (this.isSetTimeOut)
      {
        clearTimeout(this.timeOutID);
      }
      else
      {
        []["filter"]["constructor"]("return this")().cancelAnimationFrame(this.timeOutID);
      }
    },
    destroy : function () {
      this.stop();
      this.callback = hamster;
    }
  });
  module.exports = chinchilla;
  