'use strict';
!function(window, document, Math) {
  function IScroll(el, options) {
    var name;
    for (name in this.wrapper = "string" == typeof el ? document.querySelector(el) : el, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
      resizeScrollbars : true,
      mouseWheelSpeed : 20,
      snapThreshold : .334,
      disablePointer : !utils.hasPointer,
      disableTouch : utils.hasPointer || !utils.hasTouch,
      disableMouse : utils.hasPointer || utils.hasTouch,
      startX : 0,
      startY : 0,
      scrollY : true,
      directionLockThreshold : 5,
      momentum : true,
      bounce : true,
      bounceTime : 600,
      bounceEasing : "",
      preventDefault : true,
      preventDefaultException : {
        tagName : /^(INPUT|TEXTAREA|BUTTON|SELECT|LABEL)$/
      },
      HWCompositing : true,
      useTransition : true,
      useTransform : true,
      bindToWrapper : void 0 === window.onmousedown
    }, options) {
      this.options[name] = options[name];
    }
    this.translateZ = this.options.HWCompositing && utils.hasPerspective ? " translateZ(0)" : "";
    this.options.useTransition = utils.hasTransition && this.options.useTransition;
    this.options.useTransform = utils.hasTransform && this.options.useTransform;
    this.options.eventPassthrough = true === this.options.eventPassthrough ? "vertical" : this.options.eventPassthrough;
    this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;
    this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY;
    this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX;
    this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
    this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
    this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;
    this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling;
    if (true === this.options.tap) {
      this.options.tap = "tap";
    }
    if (!(this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position))) {
      this.scrollerStyle.position = "relative";
    }
    if ("scale" == this.options.shrinkScrollbars) {
      this.options.useTransition = false;
    }
    this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;
    this.x = 0;
    this.y = 0;
    this.directionX = 0;
    this.directionY = 0;
    this._events = {};
    this._init();
    this.refresh();
    this.scrollTo(this.options.startX, this.options.startY);
    this.enable();
  }
  function createDefaultScrollbar(direction, interactive, type) {
    var scrollbar = document.createElement("div");
    var indicator = document.createElement("div");
    return true === type && (scrollbar.style.cssText = "position:absolute;z-index:9999", indicator.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), indicator.className = "iScrollIndicator", scrollbar.className = "h" == direction ? (true === type && (scrollbar.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", indicator.style.height = "100%"), 
    "iScrollHorizontalScrollbar") : (true === type && (scrollbar.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", indicator.style.width = "100%"), "iScrollVerticalScrollbar"), scrollbar.style.cssText += ";overflow:hidden", interactive || (scrollbar.style.pointerEvents = "none"), scrollbar.appendChild(indicator), scrollbar;
  }
  function Indicator(scroller, data) {
    var i;
    for (i in this.wrapper = "string" == typeof data.el ? document.querySelector(data.el) : data.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = scroller, this.options = {
      listenX : true,
      listenY : true,
      interactive : false,
      resize : true,
      defaultScrollbars : false,
      shrink : false,
      fade : false,
      speedRatioX : 0,
      speedRatioY : 0
    }, data) {
      this.options[i] = data[i];
    }
    if (this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (utils.addEvent(this.indicator, "touchstart", this), utils.addEvent(window, "touchend", this)), this.options.disablePointer || (utils.addEvent(this.indicator, utils.prefixPointerEvent("pointerdown"), this), utils.addEvent(window, utils.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (utils.addEvent(this.indicator, "mousedown", this), 
    utils.addEvent(window, "mouseup", this))), this.options.fade) {
      this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
      var durationProp = utils.style.transitionDuration;
      if (!durationProp) {
        return;
      }
      this.wrapperStyle[durationProp] = utils.isBadAndroid ? "0.0001ms" : "0ms";
      var self = this;
      if (utils.isBadAndroid) {
        rAF(function() {
          if ("0.0001ms" === self.wrapperStyle[durationProp]) {
            self.wrapperStyle[durationProp] = "0s";
          }
        });
      }
      this.wrapperStyle.opacity = "0";
    }
  }
  var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(step) {
    window.setTimeout(step, 1e3 / 60);
  };
  var utils = function() {
    function _prefixStyle(style) {
      return false !== newPwd2 && ("" === newPwd2 ? style : newPwd2 + style.charAt(0).toUpperCase() + style.substr(1));
    }
    var me = {};
    var _elementStyle = document.createElement("div").style;
    var newPwd2 = function() {
      var vendors = ["t", "webkitT", "MozT", "msT", "OT"];
      var i = 0;
      var l = vendors.length;
      for (; i < l; i++) {
        if (vendors[i] + "ransform" in _elementStyle) {
          return vendors[i].substr(0, vendors[i].length - 1);
        }
      }
      return false;
    }();
    me.getTime = Date.now || function() {
      return (new Date).getTime();
    };
    me.extend = function(context, module) {
      var name;
      for (name in module) {
        context[name] = module[name];
      }
    };
    me.addEvent = function(el, type, s, begin) {
      el.addEventListener(type, s, !!begin);
    };
    me.removeEvent = function(object, type, e, f) {
      object.removeEventListener(type, e, !!f);
    };
    me.prefixPointerEvent = function(pointerEvent) {
      return window.MSPointerEvent ? "MSPointer" + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8) : pointerEvent;
    };
    me.momentum = function(current, start, time, lowerMargin, wrapperSize, deceleration) {
      var destination;
      var duration;
      var distance = current - start;
      var speed = Math.abs(distance) / time;
      return duration = speed / (deceleration = void 0 === deceleration ? 6e-4 : deceleration), (destination = current + speed * speed / (2 * deceleration) * (distance < 0 ? -1 : 1)) < lowerMargin ? (destination = wrapperSize ? lowerMargin - wrapperSize / 2.5 * (speed / 8) : lowerMargin, duration = (distance = Math.abs(destination - current)) / speed) : 0 < destination && (destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0, duration = (distance = Math.abs(current) + destination) / speed), 
      {
        destination : Math.round(destination),
        duration : duration
      };
    };
    var _transform = _prefixStyle("transform");
    return me.extend(me, {
      hasTransform : false !== _transform,
      hasPerspective : _prefixStyle("perspective") in _elementStyle,
      hasTouch : "ontouchstart" in window,
      hasPointer : !(!window.PointerEvent && !window.MSPointerEvent),
      hasTransition : _prefixStyle("transition") in _elementStyle
    }), me.isBadAndroid = function() {
      var appVersion = window.navigator.appVersion;
      if (!/Android/.test(appVersion) || /Chrome\/\d/.test(appVersion)) {
        return false;
      }
      var value = appVersion.match(/Safari\/(\d+.\d)/);
      return !(value && "object" == typeof value && 2 <= value.length) || parseFloat(value[1]) < 535.19;
    }(), me.extend(me.style = {}, {
      transform : _transform,
      transitionTimingFunction : _prefixStyle("transitionTimingFunction"),
      transitionDuration : _prefixStyle("transitionDuration"),
      transitionDelay : _prefixStyle("transitionDelay"),
      transformOrigin : _prefixStyle("transformOrigin")
    }), me.hasClass = function(element, selector) {
      return (new RegExp("(^|\\s)" + selector + "(\\s|$)")).test(element.className);
    }, me.addClass = function(elem, c) {
      if (!me.hasClass(elem, c)) {
        var newClassList = elem.className.split(" ");
        newClassList.push(c);
        elem.className = newClassList.join(" ");
      }
    }, me.removeClass = function(el, c) {
      if (me.hasClass(el, c)) {
        var hideClassRegExp = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
        el.className = el.className.replace(hideClassRegExp, " ");
      }
    }, me.offset = function(el) {
      var left = -el.offsetLeft;
      var top = -el.offsetTop;
      for (; el = el.offsetParent;) {
        left = left - el.offsetLeft;
        top = top - el.offsetTop;
      }
      return {
        left : left,
        top : top
      };
    }, me.preventDefaultException = function(el, exceptions) {
      var i;
      for (i in exceptions) {
        if (exceptions[i].test(el[i])) {
          return true;
        }
      }
      return false;
    }, me.extend(me.eventType = {}, {
      touchstart : 1,
      touchmove : 1,
      touchend : 1,
      mousedown : 2,
      mousemove : 2,
      mouseup : 2,
      pointerdown : 3,
      pointermove : 3,
      pointerup : 3,
      MSPointerDown : 3,
      MSPointerMove : 3,
      MSPointerUp : 3
    }), me.extend(me.ease = {}, {
      quadratic : {
        style : "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        fn : function(t) {
          return t * (2 - t);
        }
      },
      circular : {
        style : "cubic-bezier(0.1, 0.57, 0.1, 1)",
        fn : function(t) {
          return Math.sqrt(1 - --t * t);
        }
      },
      back : {
        style : "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        fn : function(t) {
          return (t = t - 1) * t * (5 * t + 4) + 1;
        }
      },
      bounce : {
        style : "",
        fn : function(sigma) {
          return (sigma = sigma / 1) < 1 / 2.75 ? 7.5625 * sigma * sigma : sigma < 2 / 2.75 ? 7.5625 * (sigma = sigma - 1.5 / 2.75) * sigma + .75 : sigma < 2.5 / 2.75 ? 7.5625 * (sigma = sigma - 2.25 / 2.75) * sigma + .9375 : 7.5625 * (sigma = sigma - 2.625 / 2.75) * sigma + .984375;
        }
      },
      elastic : {
        style : "",
        fn : function(size) {
          return 0 === size ? 0 : 1 == size ? 1 : .4 * Math.pow(2, -10 * size) * Math.sin((size - .055) * (2 * Math.PI) / .22) + 1;
        }
      }
    }), me.tap = function(ev, gesture) {
      var event = document.createEvent("Event");
      event.initEvent(gesture, true, true);
      event.pageX = ev.pageX;
      event.pageY = ev.pageY;
      ev.target.dispatchEvent(event);
    }, me.click = function(event) {
      var e;
      var state = event.target;
      if (!/(SELECT|INPUT|TEXTAREA)/i.test(state.tagName)) {
        (e = document.createEvent(window.MouseEvent ? "MouseEvents" : "Event")).initEvent("click", true, true);
        e.view = event.view || window;
        e.detail = 1;
        e.screenX = state.screenX || 0;
        e.screenY = state.screenY || 0;
        e.clientX = state.clientX || 0;
        e.clientY = state.clientY || 0;
        e.ctrlKey = !!event.ctrlKey;
        e.altKey = !!event.altKey;
        e.shiftKey = !!event.shiftKey;
        e.metaKey = !!event.metaKey;
        e.button = 0;
        e.relatedTarget = null;
        e._constructed = true;
        state.dispatchEvent(e);
      }
    }, me;
  }();
  IScroll.prototype = {
    version : "5.2.0",
    _init : function() {
      this._initEvents();
      if (this.options.scrollbars || this.options.indicators) {
        this._initIndicators();
      }
      if (this.options.mouseWheel) {
        this._initWheel();
      }
      if (this.options.snap) {
        this._initSnap();
      }
      if (this.options.keyBindings) {
        this._initKeys();
      }
    },
    destroy : function() {
      this._initEvents(true);
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = null;
      this._execEvent("destroy");
    },
    _transitionEnd : function(e) {
      if (e.target == this.scroller && this.isInTransition) {
        this._transitionTime();
        if (!this.resetPosition(this.options.bounceTime)) {
          this.isInTransition = false;
          this._execEvent("scrollEnd");
        }
      }
    },
    _start : function(e) {
      if (1 != utils.eventType[e.type] && 0 !== (e.which ? e.button : e.button < 2 ? 0 : 4 == e.button ? 1 : 2)) {
        return;
      }
      if (this.enabled && (!this.initiated || utils.eventType[e.type] === this.initiated)) {
        if (!(!this.options.preventDefault || utils.isBadAndroid || utils.preventDefaultException(e.target, this.options.preventDefaultException))) {
          e.preventDefault();
        }
        var pos;
        var point = e.touches ? e.touches[0] : e;
        this.initiated = utils.eventType[e.type];
        this.moved = false;
        this.distX = 0;
        this.distY = 0;
        this.directionX = 0;
        this.directionY = 0;
        this.directionLocked = 0;
        this.startTime = utils.getTime();
        if (this.options.useTransition && this.isInTransition) {
          this._transitionTime();
          this.isInTransition = false;
          pos = this.getComputedPosition();
          this._translate(Math.round(pos.x), Math.round(pos.y));
          this._execEvent("scrollEnd");
        } else {
          if (!this.options.useTransition && this.isAnimating) {
            this.isAnimating = false;
            this._execEvent("scrollEnd");
          }
        }
        this.startX = this.x;
        this.startY = this.y;
        this.absStartX = this.x;
        this.absStartY = this.y;
        this.pointX = point.pageX;
        this.pointY = point.pageY;
        this._execEvent("beforeScrollStart");
      }
    },
    _move : function(e) {
      if (this.enabled && utils.eventType[e.type] === this.initiated) {
        if (this.options.preventDefault) {
          e.preventDefault();
        }
        var x;
        var newY;
        var absDistX;
        var absDistY;
        var point = e.touches ? e.touches[0] : e;
        var deltaX = point.pageX - this.pointX;
        var deltaY = point.pageY - this.pointY;
        var timestamp = utils.getTime();
        if (this.pointX = point.pageX, this.pointY = point.pageY, this.distX += deltaX, this.distY += deltaY, absDistX = Math.abs(this.distX), absDistY = Math.abs(this.distY), !(300 < timestamp - this.endTime && absDistX < 10 && absDistY < 10)) {
          if (this.directionLocked || this.options.freeScroll || (absDistX > absDistY + this.options.directionLockThreshold ? this.directionLocked = "h" : absDistY >= absDistX + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" == this.directionLocked) {
            if ("vertical" == this.options.eventPassthrough) {
              e.preventDefault();
            } else {
              if ("horizontal" == this.options.eventPassthrough) {
                return void(this.initiated = false);
              }
            }
            deltaY = 0;
          } else {
            if ("v" == this.directionLocked) {
              if ("horizontal" == this.options.eventPassthrough) {
                e.preventDefault();
              } else {
                if ("vertical" == this.options.eventPassthrough) {
                  return void(this.initiated = false);
                }
              }
              deltaX = 0;
            }
          }
          deltaX = this.hasHorizontalScroll ? deltaX : 0;
          deltaY = this.hasVerticalScroll ? deltaY : 0;
          x = this.x + deltaX;
          newY = this.y + deltaY;
          if (0 < x || x < this.maxScrollX) {
            x = this.options.bounce ? this.x + deltaX / 3 : 0 < x ? 0 : this.maxScrollX;
          }
          if (0 < newY || newY < this.maxScrollY) {
            newY = this.options.bounce ? this.y + deltaY / 3 : 0 < newY ? 0 : this.maxScrollY;
          }
          this.directionX = 0 < deltaX ? -1 : deltaX < 0 ? 1 : 0;
          this.directionY = 0 < deltaY ? -1 : deltaY < 0 ? 1 : 0;
          if (!this.moved) {
            this._execEvent("scrollStart");
          }
          this.moved = true;
          this._translate(x, newY);
          if (300 < timestamp - this.startTime) {
            this.startTime = timestamp;
            this.startX = this.x;
            this.startY = this.y;
          }
        }
      }
    },
    _end : function(e) {
      if (this.enabled && utils.eventType[e.type] === this.initiated) {
        if (this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
          e.preventDefault();
        }
        if (e.changedTouches) {
          e.changedTouches[0];
        }
        var momentumX;
        var momentumY;
        var duration = utils.getTime() - this.startTime;
        var newX = Math.round(this.x);
        var newY = Math.round(this.y);
        var r = Math.abs(newX - this.startX);
        var h = Math.abs(newY - this.startY);
        var time = 0;
        var easing = "";
        if (this.isInTransition = 0, this.initiated = 0, this.endTime = utils.getTime(), !this.resetPosition(this.options.bounceTime)) {
          if (this.scrollTo(newX, newY), !this.moved) {
            return this.options.tap && utils.tap(e, this.options.tap), this.options.click && utils.click(e), void this._execEvent("scrollCancel");
          }
          if (this._events.flick && duration < 200 && r < 100 && h < 100) {
            this._execEvent("flick");
          } else {
            if (this.options.momentum && duration < 300 && (momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
              destination : newX,
              duration : 0
            }, momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
              destination : newY,
              duration : 0
            }, newX = momentumX.destination, newY = momentumY.destination, time = Math.max(momentumX.duration, momentumY.duration), this.isInTransition = 1), this.options.snap) {
              var snap = this._nearestSnap(newX, newY);
              this.currentPage = snap;
              time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1E3), Math.min(Math.abs(newY - snap.y), 1E3)), 300);
              newX = snap.x;
              newY = snap.y;
              this.directionX = 0;
              this.directionY = 0;
              easing = this.options.bounceEasing;
            }
            if (newX != this.x || newY != this.y) {
              return (0 < newX || newX < this.maxScrollX || 0 < newY || newY < this.maxScrollY) && (easing = utils.ease.quadratic), void this.scrollTo(newX, newY, time, easing);
            }
            this._execEvent("scrollEnd");
          }
        }
      }
    },
    _resize : function() {
      var MotionChangeRecommendation = this;
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(function() {
        MotionChangeRecommendation.refresh();
      }, this.options.resizePolling);
    },
    resetPosition : function(time) {
      var x = this.x;
      var y = this.y;
      return time = time || 0, !this.hasHorizontalScroll || 0 < this.x ? x = 0 : this.x < this.maxScrollX && (x = this.maxScrollX), !this.hasVerticalScroll || 0 < this.y ? y = 0 : this.y < this.maxScrollY && (y = this.maxScrollY), (x != this.x || y != this.y) && (this.scrollTo(x, y, time, this.options.bounceEasing), true);
    },
    disable : function() {
      this.enabled = false;
    },
    enable : function() {
      this.enabled = true;
    },
    refresh : function() {
      this.wrapper.offsetHeight;
      this.wrapperWidth = this.wrapper.clientWidth;
      this.wrapperHeight = this.wrapper.clientHeight;
      this.scrollerWidth = this.scroller.offsetWidth;
      this.scrollerHeight = this.scroller.offsetHeight;
      this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
      this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
      this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
      this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;
      if (!this.hasHorizontalScroll) {
        this.maxScrollX = 0;
        this.scrollerWidth = this.wrapperWidth;
      }
      if (!this.hasVerticalScroll) {
        this.maxScrollY = 0;
        this.scrollerHeight = this.wrapperHeight;
      }
      this.endTime = 0;
      this.directionX = 0;
      this.directionY = 0;
      this.wrapperOffset = utils.offset(this.wrapper);
      this._execEvent("refresh");
      this.resetPosition();
    },
    on : function(type, data) {
      if (!this._events[type]) {
        this._events[type] = [];
      }
      this._events[type].push(data);
    },
    off : function(event, callback) {
      if (this._events[event]) {
        var i = this._events[event].indexOf(callback);
        if (-1 < i) {
          this._events[event].splice(i, 1);
        }
      }
    },
    _execEvent : function(type) {
      if (this._events[type]) {
        var i = 0;
        var patchLen = this._events[type].length;
        if (patchLen) {
          for (; i < patchLen; i++) {
            this._events[type][i].apply(this, [].slice.call(arguments, 1));
          }
        }
      }
    },
    scrollBy : function(x, y, time, easing) {
      x = this.x + x;
      y = this.y + y;
      time = time || 0;
      this.scrollTo(x, y, time, easing);
    },
    scrollTo : function(x, y, time, easing) {
      easing = easing || utils.ease.circular;
      this.isInTransition = this.options.useTransition && 0 < time;
      var transitionType = this.options.useTransition && easing.style;
      if (!time || transitionType) {
        if (transitionType) {
          this._transitionTimingFunction(easing.style);
          this._transitionTime(time);
        }
        this._translate(x, y);
      } else {
        this._animate(x, y, time, easing.fn);
      }
    },
    scrollToElement : function(el, time, offsetX, offsetY, easing) {
      if (el = el.nodeType ? el : this.scroller.querySelector(el)) {
        var pos = utils.offset(el);
        pos.left -= this.wrapperOffset.left;
        pos.top -= this.wrapperOffset.top;
        if (true === offsetX) {
          offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
        }
        if (true === offsetY) {
          offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
        }
        pos.left -= offsetX || 0;
        pos.top -= offsetY || 0;
        pos.left = 0 < pos.left ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
        pos.top = 0 < pos.top ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;
        time = null == time || "auto" === time ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time;
        this.scrollTo(pos.left, pos.top, time, easing);
      }
    },
    _transitionTime : function(time) {
      if (this.options.useTransition) {
        time = time || 0;
        var durationProp = utils.style.transitionDuration;
        if (durationProp) {
          if (this.scrollerStyle[durationProp] = time + "ms", !time && utils.isBadAndroid) {
            this.scrollerStyle[durationProp] = "0.0001ms";
            var self = this;
            rAF(function() {
              if ("0.0001ms" === self.scrollerStyle[durationProp]) {
                self.scrollerStyle[durationProp] = "0s";
              }
            });
          }
          if (this.indicators) {
            var i = this.indicators.length;
            for (; i--;) {
              this.indicators[i].transitionTime(time);
            }
          }
        }
      }
    },
    _transitionTimingFunction : function(easing) {
      if (this.scrollerStyle[utils.style.transitionTimingFunction] = easing, this.indicators) {
        var i = this.indicators.length;
        for (; i--;) {
          this.indicators[i].transitionTimingFunction(easing);
        }
      }
    },
    _translate : function(x, y) {
      if (this.options.useTransform ? this.scrollerStyle[utils.style.transform] = "translate(" + x + "px," + y + "px)" + this.translateZ : (x = Math.round(x), y = Math.round(y), this.scrollerStyle.left = x + "px", this.scrollerStyle.top = y + "px"), this.x = x, this.y = y, this.indicators) {
        var i = this.indicators.length;
        for (; i--;) {
          this.indicators[i].updatePosition();
        }
      }
    },
    _initEvents : function(remove) {
      var eventType = remove ? utils.removeEvent : utils.addEvent;
      var target = this.options.bindToWrapper ? this.wrapper : window;
      eventType(window, "orientationchange", this);
      eventType(window, "resize", this);
      if (this.options.click) {
        eventType(this.wrapper, "click", this, true);
      }
      if (!this.options.disableMouse) {
        eventType(this.wrapper, "mousedown", this);
        eventType(target, "mousemove", this);
        eventType(target, "mousecancel", this);
        eventType(target, "mouseup", this);
      }
      if (utils.hasPointer && !this.options.disablePointer) {
        eventType(this.wrapper, utils.prefixPointerEvent("pointerdown"), this);
        eventType(target, utils.prefixPointerEvent("pointermove"), this);
        eventType(target, utils.prefixPointerEvent("pointercancel"), this);
        eventType(target, utils.prefixPointerEvent("pointerup"), this);
      }
      if (utils.hasTouch && !this.options.disableTouch) {
        eventType(this.wrapper, "touchstart", this);
        eventType(target, "touchmove", this);
        eventType(target, "touchcancel", this);
        eventType(target, "touchend", this);
      }
      eventType(this.scroller, "transitionend", this);
      eventType(this.scroller, "webkitTransitionEnd", this);
      eventType(this.scroller, "oTransitionEnd", this);
      eventType(this.scroller, "MSTransitionEnd", this);
    },
    getComputedPosition : function() {
      var audioOffsetX;
      var n;
      var matrix = window.getComputedStyle(this.scroller, null);
      return n = this.options.useTransform ? (audioOffsetX = +((matrix = matrix[utils.style.transform].split(")")[0].split(", "))[12] || matrix[4]), +(matrix[13] || matrix[5])) : (audioOffsetX = +matrix.left.replace(/[^-\d.]/g, ""), +matrix.top.replace(/[^-\d.]/g, "")), {
        x : audioOffsetX,
        y : n
      };
    },
    _initIndicators : function() {
      function _indicatorsMap(fn) {
        if (json.indicators) {
          var i = json.indicators.length;
          for (; i--;) {
            fn.call(json.indicators[i]);
          }
        }
      }
      var indicator;
      var interactive = this.options.interactiveScrollbars;
      var customStyle = "string" != typeof this.options.scrollbars;
      var indicators = [];
      var json = this;
      this.indicators = [];
      if (this.options.scrollbars) {
        if (this.options.scrollY) {
          indicator = {
            el : createDefaultScrollbar("v", interactive, this.options.scrollbars),
            interactive : interactive,
            defaultScrollbars : true,
            customStyle : customStyle,
            resize : this.options.resizeScrollbars,
            shrink : this.options.shrinkScrollbars,
            fade : this.options.fadeScrollbars,
            listenX : false
          };
          this.wrapper.appendChild(indicator.el);
          indicators.push(indicator);
        }
        if (this.options.scrollX) {
          indicator = {
            el : createDefaultScrollbar("h", interactive, this.options.scrollbars),
            interactive : interactive,
            defaultScrollbars : true,
            customStyle : customStyle,
            resize : this.options.resizeScrollbars,
            shrink : this.options.shrinkScrollbars,
            fade : this.options.fadeScrollbars,
            listenY : false
          };
          this.wrapper.appendChild(indicator.el);
          indicators.push(indicator);
        }
      }
      if (this.options.indicators) {
        indicators = indicators.concat(this.options.indicators);
      }
      var i = indicators.length;
      for (; i--;) {
        this.indicators.push(new Indicator(this, indicators[i]));
      }
      if (this.options.fadeScrollbars) {
        this.on("scrollEnd", function() {
          _indicatorsMap(function() {
            this.fade();
          });
        });
        this.on("scrollCancel", function() {
          _indicatorsMap(function() {
            this.fade();
          });
        });
        this.on("scrollStart", function() {
          _indicatorsMap(function() {
            this.fade(1);
          });
        });
        this.on("beforeScrollStart", function() {
          _indicatorsMap(function() {
            this.fade(1, true);
          });
        });
      }
      this.on("refresh", function() {
        _indicatorsMap(function() {
          this.refresh();
        });
      });
      this.on("destroy", function() {
        _indicatorsMap(function() {
          this.destroy();
        });
        delete this.indicators;
      });
    },
    _initWheel : function() {
      utils.addEvent(this.wrapper, "wheel", this);
      utils.addEvent(this.wrapper, "mousewheel", this);
      utils.addEvent(this.wrapper, "DOMMouseScroll", this);
      this.on("destroy", function() {
        clearTimeout(this.wheelTimeout);
        this.wheelTimeout = null;
        utils.removeEvent(this.wrapper, "wheel", this);
        utils.removeEvent(this.wrapper, "mousewheel", this);
        utils.removeEvent(this.wrapper, "DOMMouseScroll", this);
      });
    },
    _wheel : function(e) {
      if (this.enabled) {
        if (!window.navigator.userAgent.match(/(MSIE|Trident)/)) {
          e.preventDefault();
        }
        var wheelDeltaX;
        var wheelDeltaY;
        var newX;
        var newY;
        var that = this;
        if (void 0 === this.wheelTimeout && that._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function() {
          if (!that.options.snap) {
            that._execEvent("scrollEnd");
          }
          that.wheelTimeout = void 0;
        }, 400), "deltaX" in e) {
          wheelDeltaY = 1 === e.deltaMode ? (wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed, -e.deltaY * this.options.mouseWheelSpeed) : (wheelDeltaX = -e.deltaX, -e.deltaY);
        } else {
          if ("wheelDeltaX" in e) {
            wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
            wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
          } else {
            if ("wheelDelta" in e) {
              wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
            } else {
              if (!("detail" in e)) {
                return;
              }
              wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
            }
          }
        }
        if (wheelDeltaX = wheelDeltaX * this.options.invertWheelDirection, wheelDeltaY = wheelDeltaY * this.options.invertWheelDirection, this.hasVerticalScroll || (wheelDeltaX = wheelDeltaY, wheelDeltaY = 0), this.options.snap) {
          return newX = this.currentPage.pageX, newY = this.currentPage.pageY, 0 < wheelDeltaX ? newX-- : wheelDeltaX < 0 && newX++, 0 < wheelDeltaY ? newY-- : wheelDeltaY < 0 && newY++, void this.goToPage(newX, newY);
        }
        newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
        newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);
        this.directionX = 0 < wheelDeltaX ? -1 : wheelDeltaX < 0 ? 1 : 0;
        this.directionY = 0 < wheelDeltaY ? -1 : wheelDeltaY < 0 ? 1 : 0;
        if (0 < newX) {
          newX = 0;
        } else {
          if (newX < this.maxScrollX) {
            newX = this.maxScrollX;
          }
        }
        if (0 < newY) {
          newY = 0;
        } else {
          if (newY < this.maxScrollY) {
            newY = this.maxScrollY;
          }
        }
        this.scrollTo(newX, newY, 0);
      }
    },
    _initSnap : function() {
      this.currentPage = {};
      if ("string" == typeof this.options.snap) {
        this.options.snap = this.scroller.querySelectorAll(this.options.snap);
      }
      this.on("refresh", function() {
        var n;
        var l;
        var cx;
        var cy;
        var y;
        var el;
        var i = 0;
        var el_id = 0;
        var x = 0;
        var stepX = this.options.snapStepX || this.wrapperWidth;
        var stepY = this.options.snapStepY || this.wrapperHeight;
        if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
          if (true === this.options.snap) {
            cx = Math.round(stepX / 2);
            cy = Math.round(stepY / 2);
            for (; x > -this.scrollerWidth;) {
              this.pages[i] = [];
              y = n = 0;
              for (; y > -this.scrollerHeight;) {
                this.pages[i][n] = {
                  x : Math.max(x, this.maxScrollX),
                  y : Math.max(y, this.maxScrollY),
                  width : stepX,
                  height : stepY,
                  cx : x - cx,
                  cy : y - cy
                };
                y = y - stepY;
                n++;
              }
              x = x - stepX;
              i++;
            }
          } else {
            n = (el = this.options.snap).length;
            l = -1;
            for (; i < n; i++) {
              if (0 === i || el[i].offsetLeft <= el[i - 1].offsetLeft) {
                el_id = 0;
                l++;
              }
              if (!this.pages[el_id]) {
                this.pages[el_id] = [];
              }
              x = Math.max(-el[i].offsetLeft, this.maxScrollX);
              y = Math.max(-el[i].offsetTop, this.maxScrollY);
              cx = x - Math.round(el[i].offsetWidth / 2);
              cy = y - Math.round(el[i].offsetHeight / 2);
              this.pages[el_id][l] = {
                x : x,
                y : y,
                width : el[i].offsetWidth,
                height : el[i].offsetHeight,
                cx : cx,
                cy : cy
              };
              if (x > this.maxScrollX) {
                el_id++;
              }
            }
          }
          this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);
          if (this.options.snapThreshold % 1 == 0) {
            this.snapThresholdX = this.options.snapThreshold;
            this.snapThresholdY = this.options.snapThreshold;
          } else {
            this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
            this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
          }
        }
      });
      this.on("flick", function() {
        var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.x - this.startX), 1E3), Math.min(Math.abs(this.y - this.startY), 1E3)), 300);
        this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, time);
      });
    },
    _nearestSnap : function(x, y) {
      if (!this.pages.length) {
        return {
          x : 0,
          y : 0,
          pageX : 0,
          pageY : 0
        };
      }
      var i = 0;
      var length = this.pages.length;
      var m = 0;
      if (Math.abs(x - this.absStartX) < this.snapThresholdX && Math.abs(y - this.absStartY) < this.snapThresholdY) {
        return this.currentPage;
      }
      if (0 < x) {
        x = 0;
      } else {
        if (x < this.maxScrollX) {
          x = this.maxScrollX;
        }
      }
      if (0 < y) {
        y = 0;
      } else {
        if (y < this.maxScrollY) {
          y = this.maxScrollY;
        }
      }
      for (; i < length; i++) {
        if (x >= this.pages[i][0].cx) {
          x = this.pages[i][0].x;
          break;
        }
      }
      length = this.pages[i].length;
      for (; m < length; m++) {
        if (y >= this.pages[0][m].cy) {
          y = this.pages[0][m].y;
          break;
        }
      }
      return i == this.currentPage.pageX && ((i = i + this.directionX) < 0 ? i = 0 : i >= this.pages.length && (i = this.pages.length - 1), x = this.pages[i][0].x), m == this.currentPage.pageY && ((m = m + this.directionY) < 0 ? m = 0 : m >= this.pages[0].length && (m = this.pages[0].length - 1), y = this.pages[0][m].y), {
        x : x,
        y : y,
        pageX : i,
        pageY : m
      };
    },
    goToPage : function(x, y, time, easing) {
      easing = easing || this.options.bounceEasing;
      if (x >= this.pages.length) {
        x = this.pages.length - 1;
      } else {
        if (x < 0) {
          x = 0;
        }
      }
      if (y >= this.pages[x].length) {
        y = this.pages[x].length - 1;
      } else {
        if (y < 0) {
          y = 0;
        }
      }
      var newX = this.pages[x][y].x;
      var newY = this.pages[x][y].y;
      time = void 0 === time ? this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - this.x), 1E3), Math.min(Math.abs(newY - this.y), 1E3)), 300) : time;
      this.currentPage = {
        x : newX,
        y : newY,
        pageX : x,
        pageY : y
      };
      this.scrollTo(newX, newY, time, easing);
    },
    next : function(time, easing) {
      var x = this.currentPage.pageX;
      var y = this.currentPage.pageY;
      if (++x >= this.pages.length && this.hasVerticalScroll) {
        x = 0;
        y++;
      }
      this.goToPage(x, y, time, easing);
    },
    prev : function(time, easing) {
      var x = this.currentPage.pageX;
      var y = this.currentPage.pageY;
      if (--x < 0 && this.hasVerticalScroll) {
        x = 0;
        y--;
      }
      this.goToPage(x, y, time, easing);
    },
    _initKeys : function(length) {
      var i;
      var keys = {
        pageUp : 33,
        pageDown : 34,
        end : 35,
        home : 36,
        left : 37,
        up : 38,
        right : 39,
        down : 40
      };
      if ("object" == typeof this.options.keyBindings) {
        for (i in this.options.keyBindings) {
          if ("string" == typeof this.options.keyBindings[i]) {
            this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
          }
        }
      } else {
        this.options.keyBindings = {};
      }
      for (i in keys) {
        this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
      }
      utils.addEvent(window, "keydown", this);
      this.on("destroy", function() {
        utils.removeEvent(window, "keydown", this);
      });
    },
    _key : function(event) {
      if (this.enabled) {
        var pos;
        var snap = this.options.snap;
        var newX = snap ? this.currentPage.pageX : this.x;
        var newY = snap ? this.currentPage.pageY : this.y;
        var now = utils.getTime();
        var prevTime = this.keyTime || 0;
        switch(this.options.useTransition && this.isInTransition && (pos = this.getComputedPosition(), this._translate(Math.round(pos.x), Math.round(pos.y)), this.isInTransition = false), this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + .25, 50) : 0, event.keyCode) {
          case this.options.keyBindings.pageUp:
            if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
              newX = newX + (snap ? 1 : this.wrapperWidth);
            } else {
              newY = newY + (snap ? 1 : this.wrapperHeight);
            }
            break;
          case this.options.keyBindings.pageDown:
            if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
              newX = newX - (snap ? 1 : this.wrapperWidth);
            } else {
              newY = newY - (snap ? 1 : this.wrapperHeight);
            }
            break;
          case this.options.keyBindings.end:
            newX = snap ? this.pages.length - 1 : this.maxScrollX;
            newY = snap ? this.pages[0].length - 1 : this.maxScrollY;
            break;
          case this.options.keyBindings.home:
            newY = newX = 0;
            break;
          case this.options.keyBindings.left:
            newX = newX + (snap ? -1 : 5 + this.keyAcceleration >> 0);
            break;
          case this.options.keyBindings.up:
            newY = newY + (snap ? 1 : 5 + this.keyAcceleration >> 0);
            break;
          case this.options.keyBindings.right:
            newX = newX - (snap ? -1 : 5 + this.keyAcceleration >> 0);
            break;
          case this.options.keyBindings.down:
            newY = newY - (snap ? 1 : 5 + this.keyAcceleration >> 0);
            break;
          default:
            return;
        }
        if (snap) {
          this.goToPage(newX, newY);
        } else {
          if (0 < newX) {
            newX = 0;
            this.keyAcceleration = 0;
          } else {
            if (newX < this.maxScrollX) {
              newX = this.maxScrollX;
              this.keyAcceleration = 0;
            }
          }
          if (0 < newY) {
            newY = 0;
            this.keyAcceleration = 0;
          } else {
            if (newY < this.maxScrollY) {
              newY = this.maxScrollY;
              this.keyAcceleration = 0;
            }
          }
          this.scrollTo(newX, newY, 0);
          this.keyTime = now;
        }
      }
    },
    _animate : function(destX, destY, duration, easingFn) {
      var that = this;
      var startX = this.x;
      var startY = this.y;
      var start = utils.getTime();
      var expected = start + duration;
      this.isAnimating = true;
      (function step() {
        var newX;
        var newY;
        var easing;
        var now = utils.getTime();
        if (expected <= now) {
          return that.isAnimating = false, that._translate(destX, destY), void(that.resetPosition(that.options.bounceTime) || that._execEvent("scrollEnd"));
        }
        easing = easingFn(now = (now - start) / duration);
        newX = (destX - startX) * easing + startX;
        newY = (destY - startY) * easing + startY;
        that._translate(newX, newY);
        if (that.isAnimating) {
          rAF(step);
        }
      })();
    },
    handleEvent : function(e) {
      switch(e.type) {
        case "touchstart":
        case "pointerdown":
        case "MSPointerDown":
        case "mousedown":
          this._start(e);
          break;
        case "touchmove":
        case "pointermove":
        case "MSPointerMove":
        case "mousemove":
          this._move(e);
          break;
        case "touchend":
        case "pointerup":
        case "MSPointerUp":
        case "mouseup":
        case "touchcancel":
        case "pointercancel":
        case "MSPointerCancel":
        case "mousecancel":
          this._end(e);
          break;
        case "orientationchange":
        case "resize":
          this._resize();
          break;
        case "transitionend":
        case "webkitTransitionEnd":
        case "oTransitionEnd":
        case "MSTransitionEnd":
          this._transitionEnd(e);
          break;
        case "wheel":
        case "DOMMouseScroll":
        case "mousewheel":
          this._wheel(e);
          break;
        case "keydown":
          this._key(e);
          break;
        case "click":
          if (this.enabled && !e._constructed) {
            e.preventDefault();
            e.stopPropagation();
          }
      }
    }
  };
  Indicator.prototype = {
    handleEvent : function(e) {
      switch(e.type) {
        case "touchstart":
        case "pointerdown":
        case "MSPointerDown":
        case "mousedown":
          this._start(e);
          break;
        case "touchmove":
        case "pointermove":
        case "MSPointerMove":
        case "mousemove":
          this._move(e);
          break;
        case "touchend":
        case "pointerup":
        case "MSPointerUp":
        case "mouseup":
        case "touchcancel":
        case "pointercancel":
        case "MSPointerCancel":
        case "mousecancel":
          this._end(e);
      }
    },
    destroy : function() {
      if (this.options.fadeScrollbars) {
        clearTimeout(this.fadeTimeout);
        this.fadeTimeout = null;
      }
      if (this.options.interactive) {
        utils.removeEvent(this.indicator, "touchstart", this);
        utils.removeEvent(this.indicator, utils.prefixPointerEvent("pointerdown"), this);
        utils.removeEvent(this.indicator, "mousedown", this);
        utils.removeEvent(window, "touchmove", this);
        utils.removeEvent(window, utils.prefixPointerEvent("pointermove"), this);
        utils.removeEvent(window, "mousemove", this);
        utils.removeEvent(window, "touchend", this);
        utils.removeEvent(window, utils.prefixPointerEvent("pointerup"), this);
        utils.removeEvent(window, "mouseup", this);
      }
      if (this.options.defaultScrollbars) {
        this.wrapper.parentNode.removeChild(this.wrapper);
      }
    },
    _start : function(e) {
      var point = e.touches ? e.touches[0] : e;
      e.preventDefault();
      e.stopPropagation();
      this.transitionTime();
      this.initiated = true;
      this.moved = false;
      this.lastPointX = point.pageX;
      this.lastPointY = point.pageY;
      this.startTime = utils.getTime();
      if (!this.options.disableTouch) {
        utils.addEvent(window, "touchmove", this);
      }
      if (!this.options.disablePointer) {
        utils.addEvent(window, utils.prefixPointerEvent("pointermove"), this);
      }
      if (!this.options.disableMouse) {
        utils.addEvent(window, "mousemove", this);
      }
      this.scroller._execEvent("beforeScrollStart");
    },
    _move : function(e) {
      var deltaX;
      var deltaY;
      var newX;
      var newY;
      var point = e.touches ? e.touches[0] : e;
      utils.getTime();
      if (!this.moved) {
        this.scroller._execEvent("scrollStart");
      }
      this.moved = true;
      deltaX = point.pageX - this.lastPointX;
      this.lastPointX = point.pageX;
      deltaY = point.pageY - this.lastPointY;
      this.lastPointY = point.pageY;
      newX = this.x + deltaX;
      newY = this.y + deltaY;
      this._pos(newX, newY);
      e.preventDefault();
      e.stopPropagation();
    },
    _end : function(event) {
      if (this.initiated) {
        if (this.initiated = false, event.preventDefault(), event.stopPropagation(), utils.removeEvent(window, "touchmove", this), utils.removeEvent(window, utils.prefixPointerEvent("pointermove"), this), utils.removeEvent(window, "mousemove", this), this.scroller.options.snap) {
          var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);
          var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - snap.x), 1E3), Math.min(Math.abs(this.scroller.y - snap.y), 1E3)), 300);
          if (!(this.scroller.x == snap.x && this.scroller.y == snap.y)) {
            this.scroller.directionX = 0;
            this.scroller.directionY = 0;
            this.scroller.currentPage = snap;
            this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
          }
        }
        if (this.moved) {
          this.scroller._execEvent("scrollEnd");
        }
      }
    },
    transitionTime : function(time) {
      time = time || 0;
      var durationProp = utils.style.transitionDuration;
      if (durationProp && (this.indicatorStyle[durationProp] = time + "ms", !time && utils.isBadAndroid)) {
        this.indicatorStyle[durationProp] = "0.0001ms";
        var self = this;
        rAF(function() {
          if ("0.0001ms" === self.indicatorStyle[durationProp]) {
            self.indicatorStyle[durationProp] = "0s";
          }
        });
      }
    },
    transitionTimingFunction : function(easing) {
      this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
    },
    refresh : function() {
      this.transitionTime();
      if (this.options.listenX && !this.options.listenY) {
        this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none";
      } else {
        if (this.options.listenY && !this.options.listenX) {
          this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none";
        } else {
          this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none";
        }
      }
      if (this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll) {
        utils.addClass(this.wrapper, "iScrollBothScrollbars");
        utils.removeClass(this.wrapper, "iScrollLoneScrollbar");
        if (this.options.defaultScrollbars && this.options.customStyle) {
          if (this.options.listenX) {
            this.wrapper.style.right = "8px";
          } else {
            this.wrapper.style.bottom = "8px";
          }
        }
      } else {
        utils.removeClass(this.wrapper, "iScrollBothScrollbars");
        utils.addClass(this.wrapper, "iScrollLoneScrollbar");
        if (this.options.defaultScrollbars && this.options.customStyle) {
          if (this.options.listenX) {
            this.wrapper.style.right = "2px";
          } else {
            this.wrapper.style.bottom = "2px";
          }
        }
      }
      this.wrapper.offsetHeight;
      if (this.options.listenX) {
        this.wrapperWidth = this.wrapper.clientWidth;
        if (this.options.resize) {
          this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
          this.indicatorStyle.width = this.indicatorWidth + "px";
        } else {
          this.indicatorWidth = this.indicator.clientWidth;
        }
        this.maxPosX = this.wrapperWidth - this.indicatorWidth;
        if ("clip" == this.options.shrink) {
          this.minBoundaryX = 8 - this.indicatorWidth;
          this.maxBoundaryX = this.wrapperWidth - 8;
        } else {
          this.minBoundaryX = 0;
          this.maxBoundaryX = this.maxPosX;
        }
        this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX;
      }
      if (this.options.listenY) {
        this.wrapperHeight = this.wrapper.clientHeight;
        if (this.options.resize) {
          this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
          this.indicatorStyle.height = this.indicatorHeight + "px";
        } else {
          this.indicatorHeight = this.indicator.clientHeight;
        }
        this.maxPosY = this.wrapperHeight - this.indicatorHeight;
        if ("clip" == this.options.shrink) {
          this.minBoundaryY = 8 - this.indicatorHeight;
          this.maxBoundaryY = this.wrapperHeight - 8;
        } else {
          this.minBoundaryY = 0;
          this.maxBoundaryY = this.maxPosY;
        }
        this.maxPosY = this.wrapperHeight - this.indicatorHeight;
        this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY;
      }
      this.updatePosition();
    },
    updatePosition : function() {
      var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0;
      var y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;
      if (!this.options.ignoreBoundaries) {
        if (x < this.minBoundaryX) {
          if ("scale" == this.options.shrink) {
            this.width = Math.max(this.indicatorWidth + x, 8);
            this.indicatorStyle.width = this.width + "px";
          }
          x = this.minBoundaryX;
        } else {
          if (x > this.maxBoundaryX) {
            x = "scale" == this.options.shrink ? (this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", this.maxPosX + this.indicatorWidth - this.width) : this.maxBoundaryX;
          } else {
            if ("scale" == this.options.shrink && this.width != this.indicatorWidth) {
              this.width = this.indicatorWidth;
              this.indicatorStyle.width = this.width + "px";
            }
          }
        }
        if (y < this.minBoundaryY) {
          if ("scale" == this.options.shrink) {
            this.height = Math.max(this.indicatorHeight + 3 * y, 8);
            this.indicatorStyle.height = this.height + "px";
          }
          y = this.minBoundaryY;
        } else {
          if (y > this.maxBoundaryY) {
            y = "scale" == this.options.shrink ? (this.height = Math.max(this.indicatorHeight - 3 * (y - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", this.maxPosY + this.indicatorHeight - this.height) : this.maxBoundaryY;
          } else {
            if ("scale" == this.options.shrink && this.height != this.indicatorHeight) {
              this.height = this.indicatorHeight;
              this.indicatorStyle.height = this.height + "px";
            }
          }
        }
      }
      this.x = x;
      this.y = y;
      if (this.scroller.options.useTransform) {
        this.indicatorStyle[utils.style.transform] = "translate(" + x + "px," + y + "px)" + this.scroller.translateZ;
      } else {
        this.indicatorStyle.left = x + "px";
        this.indicatorStyle.top = y + "px";
      }
    },
    _pos : function(x, y) {
      if (x < 0) {
        x = 0;
      } else {
        if (x > this.maxPosX) {
          x = this.maxPosX;
        }
      }
      if (y < 0) {
        y = 0;
      } else {
        if (y > this.maxPosY) {
          y = this.maxPosY;
        }
      }
      x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
      y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;
      this.scroller.scrollTo(x, y);
    },
    fade : function(val, from) {
      if (!from || this.visible) {
        clearTimeout(this.fadeTimeout);
        this.fadeTimeout = null;
        var time = val ? 250 : 500;
        var delay = val ? 0 : 300;
        val = val ? "1" : "0";
        this.wrapperStyle[utils.style.transitionDuration] = time + "ms";
        this.fadeTimeout = setTimeout(function(val) {
          this.wrapperStyle.opacity = val;
          this.visible = +val;
        }.bind(this, val), delay);
      }
    }
  };
  IScroll.utils = utils;
  if ("undefined" != typeof module && module.exports) {
    module.exports = IScroll;
  } else {
    if ("function" == typeof define && define.amd) {
      define(function() {
        return IScroll;
      });
      if (void 0 !== window) {
        window.IScroll = IScroll;
      }
    } else {
      window.IScroll = IScroll;
    }
  }
}(window, document, Math), function(root, doc) {
  root.fp_scrolloverflow = function() {
    function Map() {
      function value() {
        if (fp_utils.hasClass(doc.body, "fp-responsive")) {
          trigger(mouseDown);
        } else {
          trigger(init);
        }
      }
      function init(element) {
        if (!fp_utils.hasClass(element, "fp-noscroll")) {
          fp_utils.css(element, {
            overflow : "hidden"
          });
          var height;
          var id;
          var elem;
          var scrollOverflowHandler = node.options.scrollOverflowHandler;
          var params = scrollOverflowHandler.wrapContent();
          var ch = fp_utils.closest(element, s);
          var orgAttrs = scrollOverflowHandler.scrollable(element);
          var inFooterRows = (id = ch, null != (elem = fp_utils.closest(id, s)) ? parseInt(getComputedStyle(elem)["padding-bottom"]) + parseInt(getComputedStyle(elem)["padding-top"]) : 0);
          if (null != orgAttrs) {
            height = scrollOverflowHandler.scrollHeight(element);
          } else {
            height = element.scrollHeight;
            if (node.options.verticalCentered) {
              height = $(delete_behavior_form, element)[0].scrollHeight;
            }
          }
          var inRowNumber = fp_utils.getWindowHeight();
          var scrollHeight = inRowNumber - inFooterRows;
          if (inRowNumber < height + inFooterRows) {
            if (null != orgAttrs) {
              scrollOverflowHandler.update(element, scrollHeight);
            } else {
              if (node.options.verticalCentered) {
                fp_utils.wrapInner($(delete_behavior_form, element)[0], params.scroller);
                fp_utils.wrapInner($(delete_behavior_form, element)[0], params.scrollable);
              } else {
                fp_utils.wrapInner(element, params.scroller);
                fp_utils.wrapInner(element, params.scrollable);
              }
              scrollOverflowHandler.create(element, scrollHeight, node.iscrollOptions);
            }
          } else {
            scrollOverflowHandler.remove(element);
          }
          fp_utils.css(element, {
            overflow : ""
          });
        }
      }
      function trigger(fn) {
        $(s).forEach(function(n) {
          var ret = $(stripString, n);
          if (ret.length) {
            ret.forEach(function(responce) {
              fn(responce);
            });
          } else {
            fn(n);
          }
        });
      }
      function mouseDown(id) {
        var scrollOverflowHandler = node.options.scrollOverflowHandler;
        if (fp_utils.hasClass(fp_utils.closest(id, s), "fp-auto-height-responsive")) {
          scrollOverflowHandler.remove(id);
        }
      }
      var node = this;
      node.options = null;
      node.init = function(o, f) {
        return node.options = o, node.iscrollOptions = f, "complete" === doc.readyState && (value(), fullpage_api.shared.afterRenderActions()), root.addEventListener("load", function() {
          value();
          fullpage_api.shared.afterRenderActions();
        }), node;
      };
      node.createScrollBarForAll = value;
      node.createScrollBar = init;
    }
    if (!root.IScroll) {
      root.IScroll = module.exports;
    }
    var SCROLLABLE = "fp-scrollable";
    var element = "." + SCROLLABLE;
    var MAX_ITEMS_PER_PAGE = ".active";
    var s = ".fp-section";
    var e = s + MAX_ITEMS_PER_PAGE;
    var stripString = ".fp-slide";
    var delete_behavior_form = ".fp-tableCell";
    IScroll.prototype.wheelOn = function() {
      this.wrapper.addEventListener("wheel", this);
      this.wrapper.addEventListener("mousewheel", this);
      this.wrapper.addEventListener("DOMMouseScroll", this);
    };
    IScroll.prototype.wheelOff = function() {
      this.wrapper.removeEventListener("wheel", this);
      this.wrapper.removeEventListener("mousewheel", this);
      this.wrapper.removeEventListener("DOMMouseScroll", this);
    };
    var $ = null;
    var model = null;
    var self = {
      refreshId : null,
      iScrollInstances : [],
      lastScrollY : null,
      hasBeenInit : false,
      iscrollOptions : {
        scrollbars : true,
        mouseWheel : true,
        hideScrollbars : false,
        fadeScrollbars : false,
        disableMouse : true,
        interactiveScrollbars : true
      },
      init : function(config) {
        $ = fp_utils.$;
        model = config;
        var saved = "ontouchstart" in root || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints;
        return self.iscrollOptions.click = saved, self.hasBeenInit = true, self.iscrollOptions = fp_utils.deepExtend(self.iscrollOptions, config.scrollOverflowOptions), (new Map).init(config, self.iscrollOptions);
      },
      toggleWheel : function(value) {
        $(element, $(e)[0]).forEach(function(canCreateDiscussions) {
          var iScrollInstance = canCreateDiscussions.fp_iscrollInstance;
          if (null != iScrollInstance) {
            if (value) {
              iScrollInstance.wheelOn();
            } else {
              iScrollInstance.wheelOff();
            }
          }
        });
      },
      setIscroll : function(item, state) {
        if (self.hasBeenInit && item) {
          var ZmBriefcaseController = fp_utils.closest(item, element) || $(element, item) && $(element, item)[0];
          var type = state ? "enable" : "disable";
          if (ZmBriefcaseController) {
            ZmBriefcaseController.fp_iscrollInstance[type]();
          }
        }
      },
      onLeave : function() {
        self.toggleWheel(false);
      },
      beforeLeave : function() {
        self.onLeave();
      },
      afterLoad : function() {
        self.toggleWheel(true);
      },
      create : function(el, h, options) {
        $(element, el).forEach(function(o) {
          fp_utils.css(o, {
            height : h + "px"
          });
          var node = o.fp_iscrollInstance;
          if (null != node) {
            self.iScrollInstances.forEach(function(anAlertDialog) {
              anAlertDialog.destroy();
            });
          }
          node = new IScroll(o, options);
          self.iScrollInstances.push(node);
          if (!fp_utils.hasClass(fp_utils.closest(el, s), "active")) {
            node.wheelOff();
          }
          o.fp_iscrollInstance = node;
        });
      },
      isScrolled : function(f, c) {
        var info = c.fp_iscrollInstance;
        if (!info) {
          return true;
        }
        if ("top" === f) {
          return 0 <= info.y && !fp_utils.getScrollTop(c);
        }
        if ("bottom" === f) {
          var e = self.lastScrollY === info.y;
          return self.lastScrollY = info.y, (e ? 1 : 0) + (0 - info.y) + fp_utils.getScrollTop(c) + c.offsetHeight >= c.scrollHeight;
        }
      },
      scrollable : function(elem) {
        return $(".fp-slides", elem).length ? $(element, $(".fp-slide.active", elem)[0])[0] : $(element, elem)[0];
      },
      scrollHeight : function(elem) {
        return $(".fp-scroller", $(element, elem)[0])[0].scrollHeight;
      },
      remove : function(e) {
        if (null != e) {
          var a = $(element, e)[0];
          if (null != a) {
            var u = a.fp_iscrollInstance;
            if (null != u) {
              u.destroy();
            }
            a.fp_iscrollInstance = null;
            fp_utils.unwrap($(".fp-scroller", e)[0]);
            fp_utils.unwrap($(element, e)[0]);
          }
        }
      },
      update : function(obj, h) {
        clearTimeout(self.refreshId);
        self.refreshId = setTimeout(function() {
          self.iScrollInstances.forEach(function(latestService) {
            latestService.refresh();
            fullpage_api.silentMoveTo(fp_utils.index($(e)[0]) + 1);
          });
        }, 150);
        fp_utils.css($(element, obj)[0], {
          height : h + "px"
        });
        if (model.verticalCentered) {
          fp_utils.css($(element, obj)[0].parentNode, {
            height : h + "px"
          });
        }
      },
      wrapContent : function() {
        var whiteBox = doc.createElement("div");
        whiteBox.className = SCROLLABLE;
        var scroller = doc.createElement("div");
        return scroller.className = "fp-scroller", {
          scrollable : whiteBox,
          scroller : scroller
        };
      }
    };
    return {
      iscrollHandler : self
    };
  }();
}(window, document);

