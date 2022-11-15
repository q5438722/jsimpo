"use strict";
  var raccoon; // _typeof
  var hamster; // windowIsDefined
  
  {
    raccoon = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (chinchilla) {
      return typeof chinchilla;
    } : function (ibex) {
      return ibex && "function" == typeof Symbol && ibex.constructor === Symbol && ibex !== Symbol.prototype ? "symbol" : typeof ibex;
    };
    hamster = "object" === ("undefined" == typeof window ? "undefined" : raccoon(window));
  }
  ! function (sheep_1) {
    var goldfinch_1; // e
    
      if ("function" == typeof define && define.amd)
      define(["jquery", ], sheep_1);
    else
      if ("object" === ("undefined" == typeof module ? "undefined" : raccoon(module)) && module.exports)
      {
        try {
          goldfinch_1 = require("jquery");
        }
        catch (t) {
          goldfinch_1 = null;
        }
        module.exports = sheep_1(goldfinch_1);
      }
      else
        window && (window.Slider = sheep_1(window.jQuery));
  }(function (boar) {
    var llama; // n
    var capybara; // a
    var mink; // e
    
      {
      llama = "slider";
      capybara = "bootstrapSlider";
    }
    hamster && ! window.console && (window.console = {
      
    }), 
    hamster && ! window.console.log && (window.console.log = function () {
      
    }), 
    hamster && ! window.console.warn && (window.console.warn = function () {
      
    });
    return function (prairie_dog) {
      function chives() {
        
      }
      function bean_sprout(mantis) {
        function broccoflower(dogfish) {
          dogfish.prototype.option || (dogfish.prototype.option = function (snail) {
            mantis.isPlainObject(snail) && (this.options = mantis.extend(true, this.options, snail));
          });
        }
        function green_bean(dunlin, termite) {
          mantis.fn[dunlin] = function (squid) {
            var rook; // t
            var woodcock; // i
            var antelope; // s
            var goose; // o
            var baboon; // n
            var bat; // a
            var bison; // h
            
                      if ("string" == typeof squid)
            {
              {
                rook = c.call(arguments, 1);
                woodcock = 0;
                antelope = this.length;
              }
              for (; antelope > woodcock; woodcock++)
              {
                {
                  goose = this[woodcock];
                  baboon = mantis.data(goose, dunlin);
                }
                if (baboon)
                  if (mantis.isFunction(baboon[squid]) && "_" !== squid.charAt(0))
                  {
                    bat = baboon[squid].apply(baboon, rook);
                    if (void 0 !== bat && bat !== baboon)
                      return bat;
                  }
                  else
                    p("no such method '" + squid + "' for " + dunlin + " instance");
                else
                  p("cannot call methods on " + dunlin + " prior to initialization; attempted to call '" + squid + "'");
              }
              return this;
            }
            bison = this.map(function () {
              var tarsier; // t
              
                          tarsier = mantis.data(this, dunlin);
              return tarsier ? (tarsier.option(squid), tarsier._init()) : (tarsier = new termite(this, squid), mantis.data(this, dunlin, tarsier)), 
              mantis(this);
            });
            return 1 === bison.length ? bison[0] : bison;
          };
        }
              if (mantis)
        {
          return mantis.bridget = function (cat, weasel) {
            broccoflower(weasel), green_bean(cat, weasel);
          }, 
          mantis.bridget;
        }
      }
          bean_sprout(prairie_dog);
    }(boar), 
    function (beaver) {
      function amaranth(quelea, butterfly) {
        function nopale(chamois, otter) {
          var sand_dollar; // i
          var jaguar; // s
          
                  {
            sand_dollar = "data-slider-" + otter.replace(new RegExp("_", "g"), "-");
            jaguar = chamois.getAttribute(sand_dollar);
          }
          try {
            return JSON.parse(jaguar);
          }
          catch (t) {
            return jaguar;
          }
        }
              var oyster; // s
        var stingray; // o
        var dragonfly; // n
        var finch; // a
        var meerkat; // h
        var alligator; // l
        var kookabura; // r
        var human; // d
        var reindeer; // p
        var elk; // c
        var ape; // u
        var dinosaur; // m
        var kouprey; // v
        var echidna; // _
        var owl; // g
        var gaur; // f
        var locust; // b
        var magpie; // y
        var snake; // k
        var hummingbird; // E
        var sheep; // C
        var goldfinch; // w
        var swan; // x
        var oryx; // L
        var turtle; // T
        var cormorant; // M
        var cattle; // P
        var tiger; // A
        var lion; // H
        var frog; // N
        var skunk; // S
        var lemur; // V
        var goat; // z
        var wolf; // I
        var gnat; // D
        var quail; // F
        var porpoise; // O
        
              this._state = {
          value : null,
          enabled : null,
          offset : null,
          size : null,
          percentage : null,
          inDrag : false,
          over : false,
          tickIndex : null
        }, 
        this.ticksCallbackMap = {
          
        }, 
        this.handleCallbackMap = {
          
        }, 
        "string" == typeof quelea ? this.element = document.querySelector(quelea) : quelea instanceof HTMLElement && (this.element = quelea), 
        butterfly = butterfly ? butterfly : {
          
        };
        {
          {
            oyster = Object.keys(this.defaultOptions);
            stingray = butterfly.hasOwnProperty("min");
            dragonfly = butterfly.hasOwnProperty("max");
            finch = 0;
          }
          for (; finch < oyster.length; finch++)
          {
            {
              meerkat = oyster[finch];
              alligator = butterfly[meerkat];
            }
            alligator = "undefined" != typeof alligator ? alligator : nopale(this.element, meerkat), 
            alligator = null !== alligator ? alligator : this.defaultOptions[meerkat], 
            this.options || (this.options = {
              
            }), 
            this.options[meerkat] = alligator;
          }
        }
        if (this.ticksAreValid = Array.isArray(this.options.ticks) && this.options.ticks.length > 0, 
        this.ticksAreValid || (this.options.lock_to_ticks = false), 
        "auto" === this.options.rtl)
        {
          kookabura = window.getComputedStyle(this.element);
          null != kookabura ? this.options.rtl = "rtl" === kookabura.direction : this.options.rtl = "rtl" === this.element.style.direction;
        }
        "vertical" !== this.options.orientation || "top" !== this.options.tooltip_position && "bottom" !== this.options.tooltip_position ? "horizontal" !== this.options.orientation || "left" !== this.options.tooltip_position && "right" !== this.options.tooltip_position || (this.options.tooltip_position = "top") : this.options.rtl ? this.options.tooltip_position = "left" : this.options.tooltip_position = "right";
        {
          kouprey = this.element.style.width;
          echidna = false;
          owl = this.element.parentNode;
        }
        if (this.sliderElem)
          echidna = true;
        else
        {
          this.sliderElem = document.createElement("div"), this.sliderElem.className = "slider";
          gaur = document.createElement("div");
          gaur.className = "slider-track", reindeer = document.createElement("div"), 
          reindeer.className = "slider-track-low", 
          human = document.createElement("div"), 
          human.className = "slider-selection", 
          elk = document.createElement("div"), 
          elk.className = "slider-track-high", 
          ape = document.createElement("div"), 
          ape.className = "slider-handle min-slider-handle", 
          ape.setAttribute("role", "slider"), 
          ape.setAttribute("aria-valuemin", this.options.min), 
          ape.setAttribute("aria-valuemax", this.options.max), 
          dinosaur = document.createElement("div"), 
          dinosaur.className = "slider-handle max-slider-handle", 
          dinosaur.setAttribute("role", "slider"), 
          dinosaur.setAttribute("aria-valuemin", this.options.min), 
          dinosaur.setAttribute("aria-valuemax", this.options.max), 
          gaur.appendChild(reindeer), 
          gaur.appendChild(human), 
          gaur.appendChild(elk), 
          this.rangeHighlightElements = [];
          locust = this.options.rangeHighlights;
          if (Array.isArray(locust) && locust.length > 0)
          {
            magpie = 0;
            for (; magpie < locust.length; magpie++)
            {
              {
                snake = document.createElement("div");
                hummingbird = locust[magpie]["class"] || "";
              }
              snake.className = "slider-rangeHighlight slider-selection " + hummingbird, 
              this.rangeHighlightElements.push(snake), 
              gaur.appendChild(snake);
            }
          }
          sheep = Array.isArray(this.options.labelledby);
          if (sheep && this.options.labelledby[0] && ape.setAttribute("aria-labelledby", this.options.labelledby[0]), 
          sheep && this.options.labelledby[1] && dinosaur.setAttribute("aria-labelledby", this.options.labelledby[1]), 
          ! sheep && this.options.labelledby && (ape.setAttribute("aria-labelledby", this.options.labelledby), 
          dinosaur.setAttribute("aria-labelledby", this.options.labelledby)), 
          this.ticks = [], 
          Array.isArray(this.options.ticks) && this.options.ticks.length > 0)
          {
            for (this.ticksContainer = document.createElement("div"), 
            this.ticksContainer.className = "slider-tick-container", 
            finch = 0; finch < this.options.ticks.length; finch++)
            {
              goldfinch = document.createElement("div");
              if (goldfinch.className = "slider-tick", this.options.ticks_tooltip)
              {
                {
                  swan = this._addTickListener();
                  oryx = swan.addMouseEnter(this, goldfinch, finch);
                  turtle = swan.addMouseLeave(this, goldfinch);
                }
                this.ticksCallbackMap[finch] = {
                  mouseEnter : oryx,
                  mouseLeave : turtle
                };
              }
              this.ticks.push(goldfinch), this.ticksContainer.appendChild(goldfinch);
            }
            human.className += " tick-slider-selection";
          }
          if (this.tickLabels = [], Array.isArray(this.options.ticks_labels) && this.options.ticks_labels.length > 0)
            for (this.tickLabelContainer = document.createElement("div"), 
            this.tickLabelContainer.className = "slider-tick-label-container", 
            finch = 0; finch < this.options.ticks_labels.length; finch++)
            {
              {
                cormorant = document.createElement("div");
                cattle = 0 === this.options.ticks_positions.length;
                tiger = this.options.reversed && cattle ? this.options.ticks_labels.length - (finch + 1) : finch;
              }
              cormorant.className = "slider-tick-label", cormorant.innerHTML = this.options.ticks_labels[tiger], 
              this.tickLabels.push(cormorant), 
              this.tickLabelContainer.appendChild(cormorant);
            }
          {
            lion = function (dugong) {
              var water_buffalo; // e
              var sea_urchin; // i
              
                          water_buffalo = document.createElement("div");
              water_buffalo.className = "arrow";
              sea_urchin = document.createElement("div");
              sea_urchin.className = "tooltip-inner", dugong.appendChild(water_buffalo), 
              dugong.appendChild(sea_urchin);
            };
            frog = document.createElement("div");
          }
          frog.className = "tooltip tooltip-main", frog.setAttribute("role", "presentation"), 
          lion(frog);
          skunk = document.createElement("div");
          skunk.className = "tooltip tooltip-min", skunk.setAttribute("role", "presentation"), 
          lion(skunk);
          lemur = document.createElement("div");
          lemur.className = "tooltip tooltip-max", lemur.setAttribute("role", "presentation"), 
          lion(lemur), 
          this.sliderElem.appendChild(gaur), 
          this.sliderElem.appendChild(frog), 
          this.sliderElem.appendChild(skunk), 
          this.sliderElem.appendChild(lemur), 
          this.tickLabelContainer && this.sliderElem.appendChild(this.tickLabelContainer), 
          this.ticksContainer && this.sliderElem.appendChild(this.ticksContainer), 
          this.sliderElem.appendChild(ape), 
          this.sliderElem.appendChild(dinosaur), 
          owl.insertBefore(this.sliderElem, this.element), 
          this.element.style.display = "none";
        }
        if (beaver && (this.$element = beaver(this.element), this.$sliderElem = beaver(this.sliderElem)), 
        this.eventToCallbackMap = {
          
        }, 
        this.sliderElem.id = this.options.id, 
        this.touchCapable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, 
        this.touchX = 0, 
        this.touchY = 0, 
        this.tooltip = this.sliderElem.querySelector(".tooltip-main"), 
        this.tooltipInner = this.tooltip.querySelector(".tooltip-inner"), 
        this.tooltip_min = this.sliderElem.querySelector(".tooltip-min"), 
        this.tooltipInner_min = this.tooltip_min.querySelector(".tooltip-inner"), 
        this.tooltip_max = this.sliderElem.querySelector(".tooltip-max"), 
        this.tooltipInner_max = this.tooltip_max.querySelector(".tooltip-inner"), 
        woodpecker[this.options.scale] && (this.options.scale = woodpecker[this.options.scale]), 
        echidna === true && (this._removeClass(this.sliderElem, "slider-horizontal"), 
        this._removeClass(this.sliderElem, "slider-vertical"), 
        this._removeClass(this.sliderElem, "slider-rtl"), 
        this._removeClass(this.tooltip, "hide"), 
        this._removeClass(this.tooltip_min, "hide"), 
        this._removeClass(this.tooltip_max, "hide"), 
        ["left", "right", "top", "width", "height", ].forEach(function (grouse) {
          this._removeProperty(this.trackLow, grouse), this._removeProperty(this.trackSelection, grouse), 
          this._removeProperty(this.trackHigh, grouse);
        }, 
        this), 
        [this.handle1, this.handle2, ].forEach(function (sandpiper) {
          this._removeProperty(sandpiper, "left"), this._removeProperty(sandpiper, "right"), 
          this._removeProperty(sandpiper, "top");
        }, 
        this), 
        [this.tooltip, this.tooltip_min, this.tooltip_max, ].forEach(function (mule) {
          this._removeProperty(mule, "bs-tooltip-left"), this._removeProperty(mule, "bs-tooltip-right"), 
          this._removeProperty(mule, "bs-tooltip-top"), 
          this._removeClass(mule, "bs-tooltip-right"), 
          this._removeClass(mule, "bs-tooltip-left"), 
          this._removeClass(mule, "bs-tooltip-top");
        }, 
        this)), 
        "vertical" === this.options.orientation ? (this._addClass(this.sliderElem, "slider-vertical"), this.stylePos = "top", 
        this.mousePos = "pageY", 
        this.sizePos = "offsetHeight") : (this._addClass(this.sliderElem, "slider-horizontal"), 
        this.sliderElem.style.width = kouprey, 
        this.options.orientation = "horizontal", 
        this.options.rtl ? this.stylePos = "right" : this.stylePos = "left", 
        this.mousePos = "clientX", 
        this.sizePos = "offsetWidth"), 
        this.options.rtl && this._addClass(this.sliderElem, "slider-rtl"), 
        this._setTooltipPosition(), 
        Array.isArray(this.options.ticks) && this.options.ticks.length > 0 && (dragonfly || (this.options.max = Math.max.apply(Math, this.options.ticks)), 
        stingray || (this.options.min = Math.min.apply(Math, this.options.ticks))), 
        Array.isArray(this.options.value) ? (this.options.range = true, this._state.value = this.options.value) : this.options.range ? this._state.value = [this.options.value, this.options.max, ] : this._state.value = this.options.value, 
        this.trackLow = reindeer || this.trackLow, 
        this.trackSelection = human || this.trackSelection, 
        this.trackHigh = elk || this.trackHigh, 
        "none" === this.options.selection ? (this._addClass(this.trackLow, "hide"), this._addClass(this.trackSelection, "hide"), 
        this._addClass(this.trackHigh, "hide")) : ("after" === this.options.selection || "before" === this.options.selection) && (this._removeClass(this.trackLow, "hide"), this._removeClass(this.trackSelection, "hide"), 
        this._removeClass(this.trackHigh, "hide")), 
        this.handle1 = ape || this.handle1, 
        this.handle2 = dinosaur || this.handle2, 
        echidna === true)
          for (this._removeClass(this.handle1, "round triangle"), this._removeClass(this.handle2, "round triangle hide"), 
          finch = 0; finch < this.ticks.length; finch++)
            this._removeClass(this.ticks[finch], "round triangle hide");
        {
          goat = ["round", "triangle", "custom", ];
          wolf = -1 !== goat.indexOf(this.options.handle);
        }
        if (wolf)
          for (this._addClass(this.handle1, this.options.handle), this._addClass(this.handle2, this.options.handle), 
          finch = 0; finch < this.ticks.length; finch++)
            this._addClass(this.ticks[finch], this.options.handle);
        if (this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], 
        this.setValue(this._state.value), 
        this.handle1Keydown = this._keydown.bind(this, 0), 
        this.handle1.addEventListener("keydown", this.handle1Keydown, false), 
        this.handle2Keydown = this._keydown.bind(this, 1), 
        this.handle2.addEventListener("keydown", this.handle2Keydown, false), 
        this.mousedown = this._mousedown.bind(this), 
        this.touchstart = this._touchstart.bind(this), 
        this.touchmove = this._touchmove.bind(this), 
        this.touchCapable && (this.sliderElem.addEventListener("touchstart", this.touchstart, false), 
        this.sliderElem.addEventListener("touchmove", this.touchmove, false)), 
        this.sliderElem.addEventListener("mousedown", this.mousedown, false), 
        this.resize = this._resize.bind(this), 
        window.addEventListener("resize", this.resize, false), 
        "hide" === this.options.tooltip)
          this._addClass(this.tooltip, "hide"), this._addClass(this.tooltip_min, "hide"), 
          this._addClass(this.tooltip_max, "hide");
        else
          if ("always" === this.options.tooltip)
            this._showTooltip(), this._alwaysShowTooltip = true;
          else
          {
            if (this.showTooltip = this._showTooltip.bind(this), this.hideTooltip = this._hideTooltip.bind(this), 
            this.options.ticks_tooltip)
            {
              {
                gnat = this._addTickListener();
                quail = gnat.addMouseEnter(this, this.handle1);
                porpoise = gnat.addMouseLeave(this, this.handle1);
              }
              this.handleCallbackMap.handle1 = {
                mouseEnter : quail,
                mouseLeave : porpoise
              }, 
              quail = gnat.addMouseEnter(this, this.handle2), 
              porpoise = gnat.addMouseLeave(this, this.handle2), 
              this.handleCallbackMap.handle2 = {
                mouseEnter : quail,
                mouseLeave : porpoise
              };
            }
            else
              this.sliderElem.addEventListener("mouseenter", this.showTooltip, false), 
              this.sliderElem.addEventListener("mouseleave", this.hideTooltip, false), 
              this.touchCapable && (this.sliderElem.addEventListener("touchstart", this.showTooltip, false), 
              this.sliderElem.addEventListener("touchmove", this.showTooltip, false), 
              this.sliderElem.addEventListener("touchend", this.hideTooltip, false));
            this.handle1.addEventListener("focus", this.showTooltip, false), 
            this.handle1.addEventListener("blur", this.hideTooltip, false), 
            this.handle2.addEventListener("focus", this.showTooltip, false), 
            this.handle2.addEventListener("blur", this.hideTooltip, false), 
            this.touchCapable && (this.handle1.addEventListener("touchstart", this.showTooltip, false), 
            this.handle1.addEventListener("touchmove", this.showTooltip, false), 
            this.handle1.addEventListener("touchend", this.hideTooltip, false), 
            this.handle2.addEventListener("touchstart", this.showTooltip, false), 
            this.handle2.addEventListener("touchmove", this.showTooltip, false), 
            this.handle2.addEventListener("touchend", this.hideTooltip, false));
          }
        this.options.enabled ? this.enable() : this.disable();
      }
          var komodo_dragon; // s
      var armadillo; // o
      var woodpecker; // j
      
          {
        komodo_dragon = void 0;
        armadillo = {
          formatInvalidInputErrorMsg : function (goldfish) {
            return "Invalid input value '" + goldfish + "' passed in";
          },
          callingContextNotSliderInstance : "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
        };
        woodpecker = {
          linear : {
            getValue : function (caribou, raven) {
              return caribou < raven.min ? raven.min : caribou > raven.max ? raven.max : caribou;
            },
            toValue : function (ram) {
              var salmon; // e
              var cheetah; // i
              var viper; // s
              var pheasant; // o
              var pony; // n
              var hawk; // a
              var spoonbill; // h
              var swallow; // l
              var octopus; // r
              var newt; // d
              
                          {
                salmon = ram / 100 * (this.options.max - this.options.min);
                cheetah = true;
              }
              if (this.options.ticks_positions.length > 0)
              {
                {
                  hawk = 0;
                  spoonbill = 1;
                }
                for (; spoonbill < this.options.ticks_positions.length; spoonbill++)
                  if (ram <= this.options.ticks_positions[spoonbill])
                  {
                    viper = this.options.ticks[spoonbill - 1], pony = this.options.ticks_positions[spoonbill - 1], 
                    pheasant = this.options.ticks[spoonbill], 
                    hawk = this.options.ticks_positions[spoonbill];
                    break;
                  }
                swallow = (ram - pony) / (hawk - pony);
                salmon = viper + swallow * (pheasant - viper), cheetah = false;
              }
              {
                octopus = cheetah ? this.options.min : 0;
                newt = octopus + Math.round(salmon / this.options.step) * this.options.step;
              }
              return woodpecker.linear.getValue(newt, this.options);
            },
            toPercentage : function (caterpillar) {
              var kingfisher; // e
              var nightingale; // i
              var wombat; // s
              var crane; // o
              var chough; // n
              var goshawk; // a
              
                          if (this.options.max === this.options.min)
                return 0;
              if (this.options.ticks_positions.length > 0)
              {
                {
                  crane = 0;
                  chough = 0;
                }
                for (; chough < this.options.ticks.length; chough++)
                  if (caterpillar <= this.options.ticks[chough])
                  {
                    kingfisher = chough > 0 ? this.options.ticks[chough - 1] : 0, 
                    wombat = chough > 0 ? this.options.ticks_positions[chough - 1] : 0, 
                    nightingale = this.options.ticks[chough], 
                    crane = this.options.ticks_positions[chough];
                    break;
                  }
                if (chough > 0)
                {
                  goshawk = (caterpillar - kingfisher) / (nightingale - kingfisher);
                  return wombat + goshawk * (crane - wombat);
                }
              }
              return 100 * (caterpillar - this.options.min) / (this.options.max - this.options.min);
            }
          },
          logarithmic : {
            toValue : function (monkey) {
              var horse; // e
              var okapi; // i
              var worm; // s
              var hornet; // o
              
                          {
                horse = 1 - this.options.min;
                okapi = Math.log(this.options.min + horse);
                worm = Math.log(this.options.max + horse);
                hornet = Math.exp(okapi + (worm - okapi) * monkey / 100) - horse;
              }
              return Math.round(hornet) === worm ? worm : (hornet = this.options.min + Math.round((hornet - this.options.min) / this.options.step) * this.options.step, 
              woodpecker.linear.getValue(hornet, this.options));
            },
            toPercentage : function (quetzal) {
              var seahorse; // e
              var chicken; // i
              var mallard; // s
              var aardvark; // o
              
                          if (this.options.max === this.options.min)
                return 0;
              {
                seahorse = 1 - this.options.min;
                chicken = Math.log(this.options.max + seahorse);
                mallard = Math.log(this.options.min + seahorse);
                aardvark = Math.log(quetzal + seahorse);
              }
              return 100 * (aardvark - mallard) / (chicken - mallard);
            }
          }
        };
      }
      mink = function (albatross, cobra) {
        return i.call(this, albatross, cobra), this;
      }, 
      mink.prototype = {
        _init : function () {
          
        },
        constructor : mink,
        defaultOptions : {
          id : "",
          min : 0,
          max : 10,
          step : 1,
          precision : 0,
          orientation : "horizontal",
          value : 5,
          range : false,
          selection : "before",
          tooltip : "show",
          tooltip_split : false,
          lock_to_ticks : false,
          handle : "round",
          reversed : false,
          rtl : "auto",
          enabled : true,
          formatter : function (walrus) {
            return Array.isArray(walrus) ? walrus[0] + " : " + walrus[1] : walrus;
          },
          natural_arrow_keys : false,
          ticks : [],
          ticks_positions : [],
          ticks_labels : [],
          ticks_snap_bounds : 0,
          ticks_tooltip : false,
          scale : "linear",
          focus : false,
          tooltip_position : null,
          labelledby : null,
          rangeHighlights : []
        },
        getElement : function () {
          return this.sliderElem;
        },
        getValue : function () {
          return this.options.range ? this._state.value : this._state.value[0];
        },
        setValue : function (pelican, mosquito, trout) {
          var whale; // s
          var cassowary; // o
          var guinea_fowl; // n
          var mouse; // a
          
                  pelican || ;
          whale = this.getValue();
          this._state.value = this._validateInputValue(0);
          cassowary = this._applyPrecision.bind(this);
          this.options.range ? (this._state.value[0] = cassowary(this._state.value[0]), 
          this._state.value[1] = cassowary(this._state.value[1]), 
          this.ticksAreValid && this.options.lock_to_ticks && (this._state.value[0] = this.options.ticks[this._getClosestTickIndex(this._state.value[0])], 
          this._state.value[1] = this.options.ticks[this._getClosestTickIndex(this._state.value[1])]), 
          this._state.value[0] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[0])), 
          this._state.value[1] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[1]))) : (this._state.value = cassowary(this._state.value), this.ticksAreValid && this.options.lock_to_ticks && (this._state.value = this.options.ticks[this._getClosestTickIndex(this._state.value)]), 
          this._state.value = [Math.max(this.options.min, Math.min(this.options.max, this._state.value)), ], 
          this._addClass(this.handle2, "hide"), 
          "after" === this.options.selection ? this._state.value[1] = this.options.max : this._state.value[1] = this.options.min), 
          this._setTickIndex(), 
          this.options.max > this.options.min ? this._state.percentage = [this._toPercentage(this._state.value[0]), this._toPercentage(this._state.value[1]), 100 * this.options.step / (this.options.max - this.options.min), ] : this._state.percentage = [0, 0, 100, ], 
          this._layout();
          guinea_fowl = this.options.range ? this._state.value : this._state.value[0];
          this._setDataVal(guinea_fowl), mosquito === true && this._trigger("slide", guinea_fowl);
          mouse = false;
          return mouse = Array.isArray(guinea_fowl) ? whale[0] !== guinea_fowl[0] || whale[1] !== guinea_fowl[1] : whale !== guinea_fowl, 
          mouse && trout === true && this._trigger("change", {
            oldValue : whale,
            newValue : guinea_fowl
          }), 
          this;
        },
        destroy : function () {
          this._removeSliderEventHandlers(), this.sliderElem.parentNode.removeChild(this.sliderElem), 
          this.element.style.display = "", 
          this._cleanUpEventCallbacksMap(), 
          this.element.removeAttribute("data"), 
          beaver && (this._unbindJQueryEventHandlers(), komodo_dragon === llama && this.$element.removeData(komodo_dragon), 
          this.$element.removeData(capybara));
        },
        disable : function () {
          return this._state.enabled = false, this.handle1.removeAttribute("tabindex"), 
          this.handle2.removeAttribute("tabindex"), 
          this._addClass(this.sliderElem, "slider-disabled"), 
          this._trigger("slideDisabled"), 
          this;
        },
        enable : function () {
          return this._state.enabled = true, this.handle1.setAttribute("tabindex", 0), 
          this.handle2.setAttribute("tabindex", 0), 
          this._removeClass(this.sliderElem, "slider-disabled"), 
          this._trigger("slideEnabled"), 
          this;
        },
        toggle : function () {
          return this._state.enabled ? this.disable() : this.enable(), 
          this;
        },
        isEnabled : function () {
          return this._state.enabled;
        },
        on : function (wolverine, koala) {
          return this._bindNonQueryEventHandler(wolverine, koala), this;
        },
        off : function (giant_panda, mongoose) {
          beaver ? (this.$element.off(giant_panda, mongoose), this.$sliderElem.off(giant_panda, mongoose)) : this._unbindNonQueryEventHandler(giant_panda, mongoose);
        },
        getAttribute : function (mandrill) {
          return mandrill ? this.options[mandrill] : this.options;
        },
        setAttribute : function (moose, sea_lion) {
          return this.options[moose] = sea_lion, this;
        },
        refresh : function (leopard) {
          var gerbil; // e
          
                  gerbil = this.getValue();
          return this._removeSliderEventHandlers(), i.call(this, this.element, this.options), 
          leopard && leopard.useCurrentValue === true && this.setValue(gerbil), 
          beaver && (komodo_dragon === llama ? (beaver.data(this.element, llama, this), beaver.data(this.element, capybara, this)) : beaver.data(this.element, capybara, this)), 
          this;
        },
        relayout : function () {
          return this._resize(), this;
        },
        _removeTooltipListener : function (dog, vicuña) {
          this.handle1.removeEventListener(dog, vicuña, false), 
          this.handle2.removeEventListener(dog, vicuña, false);
        },
        _removeSliderEventHandlers : function () {
          var kangaroo; // t
          var shark; // e
          
                  if (this.handle1.removeEventListener("keydown", this.handle1Keydown, false), 
          this.handle2.removeEventListener("keydown", this.handle2Keydown, false), 
          this.options.ticks_tooltip)
          {
            {
              kangaroo = this.ticksContainer.getElementsByClassName("slider-tick");
              shark = 0;
            }
            for (; shark < kangaroo.length; shark++)
              kangaroo[shark].removeEventListener("mouseenter", this.ticksCallbackMap[shark].mouseEnter, 
              false), 
              kangaroo[shark].removeEventListener("mouseleave", this.ticksCallbackMap[shark].mouseLeave, 
              false);
            this.handleCallbackMap.handle1 && this.handleCallbackMap.handle2 && (this.handle1.removeEventListener("mouseenter", this.handleCallbackMap.handle1.mouseEnter, 
            false), 
            this.handle2.removeEventListener("mouseenter", this.handleCallbackMap.handle2.mouseEnter, 
            false), 
            this.handle1.removeEventListener("mouseleave", this.handleCallbackMap.handle1.mouseLeave, 
            false), 
            this.handle2.removeEventListener("mouseleave", this.handleCallbackMap.handle2.mouseLeave, 
            false));
          }
          this.handleCallbackMap = null, this.ticksCallbackMap = null, 
          this.showTooltip && this._removeTooltipListener("focus", this.showTooltip), 
          this.hideTooltip && this._removeTooltipListener("blur", this.hideTooltip), 
          this.showTooltip && this.sliderElem.removeEventListener("mouseenter", this.showTooltip, false), 
          this.hideTooltip && this.sliderElem.removeEventListener("mouseleave", this.hideTooltip, false), 
          this.sliderElem.removeEventListener("mousedown", this.mousedown, false), 
          this.touchCapable && (this.showTooltip && (this.handle1.removeEventListener("touchstart", this.showTooltip, false), 
          this.handle1.removeEventListener("touchmove", this.showTooltip, false), 
          this.handle2.removeEventListener("touchstart", this.showTooltip, false), 
          this.handle2.removeEventListener("touchmove", this.showTooltip, false)), 
          this.hideTooltip && (this.handle1.removeEventListener("touchend", this.hideTooltip, false), 
          this.handle2.removeEventListener("touchend", this.hideTooltip, false)), 
          this.showTooltip && (this.sliderElem.removeEventListener("touchstart", this.showTooltip, false), 
          this.sliderElem.removeEventListener("touchmove", this.showTooltip, false)), 
          this.hideTooltip && this.sliderElem.removeEventListener("touchend", this.hideTooltip, false), 
          this.sliderElem.removeEventListener("touchstart", this.touchstart, false), 
          this.sliderElem.removeEventListener("touchmove", this.touchmove, false)), 
          window.removeEventListener("resize", this.resize, false);
        },
        _bindNonQueryEventHandler : function (wallaby, crow) {
          void 0 === this.eventToCallbackMap[wallaby] && (this.eventToCallbackMap[wallaby] = []), 
          this.eventToCallbackMap[wallaby].push(crow);
        },
        _unbindNonQueryEventHandler : function (eagle, rail) {
          var marten; // i
          var jay; // s
          
                  marten = this.eventToCallbackMap[eagle];
          if (void 0 !== marten)
          {
            jay = 0;
            for (; jay < marten.length; jay++)
              if (marten[jay] === rail)
              {
                marten.splice(jay, 1);
                break;
              }
          }
        },
        _cleanUpEventCallbacksMap : function () {
          var eland; // t
          var panther; // e
          var opossum; // i
          
                  {
            {
              eland = Object.keys(this.eventToCallbackMap);
              panther = 0;
            }
            for (; panther < eland.length; panther++)
            {
              opossum = eland[panther];
              delete this.eventToCallbackMap[opossum];
            }
          }
        },
        _showTooltip : function () {
          this.options.tooltip_split === false ? (this._addClass(this.tooltip, "show"), this.tooltip_min.style.display = "none", 
          this.tooltip_max.style.display = "none") : (this._addClass(this.tooltip_min, "show"), this._addClass(this.tooltip_max, "show"), 
          this.tooltip.style.display = "none"), 
          this._state.over = true;
        },
        _hideTooltip : function () {
          this._state.inDrag === false && this._alwaysShowTooltip !== true && (this._removeClass(this.tooltip, "show"), this._removeClass(this.tooltip_min, "show"), 
          this._removeClass(this.tooltip_max, "show")), 
          this._state.over = false;
        },
        _setToolTipOnMouseOver : function (shrew) {
          function kohlrabi(crab, bee) {
            return bee ? [100 - crab.percentage[0], i.options.range ? 100 - crab.percentage[1] : crab.percentage[1], ] : [crab.percentage[0], crab.percentage[1], ];
          }
                  var duck; // s
          var cod; // o
          
                  {
            duck = this.options.formatter(shrew ? shrew.value[0] : this._state.value[0]);
            cod = shrew ? kohlrabi(shrew, this.options.reversed) : kohlrabi(this._state, this.options.reversed);
          }
          this._setText(this.tooltipInner, duck), this.tooltip.style[this.stylePos] = cod[0] + "%";
        },
        _copyState : function () {
          return {
            value : [this._state.value[0], this._state.value[1], ],
            enabled : this._state.enabled,
            offset : this._state.offset,
            size : this._state.size,
            percentage : [this._state.percentage[0], this._state.percentage[1], this._state.percentage[2], ],
            inDrag : this._state.inDrag,
            over : this._state.over,
            dragged : this._state.dragged,
            keyCtrl : this._state.keyCtrl
          };
        },
        _addTickListener : function () {
          return {
            addMouseEnter : function (wasp, stork, eel) {
              var lapwing; // t
              
                          lapwing = function () {
                var guinea_pig; // t
                var ibis; // e
                var camel; // i
                
                              {
                  guinea_pig = wasp._copyState();
                  ibis = stork === wasp.handle1 ? guinea_pig.value[0] : guinea_pig.value[1];
                  camel = void 0;
                }
                void 0 !== eel ? (ibis = wasp.options.ticks[eel], camel = wasp.options.ticks_positions.length > 0 && wasp.options.ticks_positions[eel] || wasp._toPercentage(wasp.options.ticks[eel])) : camel = wasp._toPercentage(ibis), 
                guinea_pig.value[0] = ibis, 
                guinea_pig.percentage[0] = camel, 
                wasp._setToolTipOnMouseOver(guinea_pig), 
                wasp._showTooltip();
              };
              return stork.addEventListener("mouseenter", lapwing, false), 
              lapwing;
            },
            addMouseLeave : function (lyrebird, donkey) {
              var clam; // i
              
                          clam = function () {
                lyrebird._hideTooltip();
              };
              return donkey.addEventListener("mouseleave", clam, false), clam;
            }
          };
        },
        _layout : function () {
          var grasshopper; // t
          var gnu; // e
          var mole; // i
          var penguin; // s
          var elephant; // o
          var dove; // n
          var badger; // a
          var guanaco; // h
          var pig; // l
          var deer; // r
          var gazelle; // d
          var giraffe; // p
          var rat; // c
          var starling; // u
          var emu; // m
          var bear; // v
          var kudu; // _
          var fish; // g
          
                  if (grasshopper = this.options.reversed ? [100 - this._state.percentage[0], this.options.range ? 100 - this._state.percentage[1] : this._state.percentage[1], ] : [this._state.percentage[0], this._state.percentage[1], ], 
          this.handle1.style[this.stylePos] = grasshopper[0] + "%", 
          this.handle1.setAttribute("aria-valuenow", this._state.value[0]), 
          gnu = this.options.formatter(this._state.value[0]), 
          isNaN(gnu) ? this.handle1.setAttribute("aria-valuetext", gnu) : this.handle1.removeAttribute("aria-valuetext"), 
          this.handle2.style[this.stylePos] = grasshopper[1] + "%", 
          this.handle2.setAttribute("aria-valuenow", this._state.value[1]), 
          gnu = this.options.formatter(this._state.value[1]), 
          isNaN(gnu) ? this.handle2.setAttribute("aria-valuetext", gnu) : this.handle2.removeAttribute("aria-valuetext"), 
          this.rangeHighlightElements.length > 0 && Array.isArray(this.options.rangeHighlights) && this.options.rangeHighlights.length > 0)
          {
            mole = 0;
            for (; mole < this.options.rangeHighlights.length; mole++)
            {
              {
                penguin = this._toPercentage(this.options.rangeHighlights[mole].start);
                elephant = this._toPercentage(this.options.rangeHighlights[mole].end);
              }
              if (this.options.reversed)
              {
                dove = 100 - elephant;
                elephant = 100 - penguin, penguin = dove;
              }
              badger = this._createHighlightRange(penguin, elephant);
              badger ? "vertical" === this.options.orientation ? (this.rangeHighlightElements[mole].style.top = badger.start + "%", 
              this.rangeHighlightElements[mole].style.height = badger.size + "%") : (this.options.rtl ? this.rangeHighlightElements[mole].style.right = badger.start + "%" : this.rangeHighlightElements[mole].style.left = badger.start + "%", 
              this.rangeHighlightElements[mole].style.width = badger.size + "%") : this.rangeHighlightElements[mole].style.display = "none";
            }
          }
          if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0)
          {
            pig = "vertical" === this.options.orientation ? "height" : "width";
            guanaco = "vertical" === this.options.orientation ? "marginTop" : this.options.rtl ? "marginRight" : "marginLeft";
            deer = this._state.size / (this.options.ticks.length - 1);
            if (this.tickLabelContainer)
            {
              gazelle = 0;
              if (0 === this.options.ticks_positions.length)
                "vertical" !== this.options.orientation && (this.tickLabelContainer.style[guanaco] = - deer / 2 + "px"), 
                gazelle = this.tickLabelContainer.offsetHeight;
              else
                for (giraffe = 0; giraffe < this.tickLabelContainer.childNodes.length; giraffe++)
                  this.tickLabelContainer.childNodes[giraffe].offsetHeight > gazelle && (gazelle = this.tickLabelContainer.childNodes[giraffe].offsetHeight);
              "horizontal" === this.options.orientation && (this.sliderElem.style.marginBottom = gazelle + "px");
            }
            {
              giraffe = 0;
              for (; giraffe < this.options.ticks.length; giraffe++)
              {
                rat = this.options.ticks_positions[giraffe] || this._toPercentage(this.options.ticks[giraffe]);
                this.options.reversed && (rat = 100 - rat), this.ticks[giraffe].style[this.stylePos] = rat + "%", 
                this._removeClass(this.ticks[giraffe], "in-selection"), 
                this.options.range ? rat >= grasshopper[0] && rat <= grasshopper[1] && this._addClass(this.ticks[giraffe], "in-selection") : "after" === this.options.selection && rat >= grasshopper[0] ? this._addClass(this.ticks[giraffe], "in-selection") : "before" === this.options.selection && rat <= grasshopper[0] && this._addClass(this.ticks[giraffe], "in-selection"), 
                this.tickLabels[giraffe] && (this.tickLabels[giraffe].style[pig] = deer + "px", "vertical" !== this.options.orientation && void 0 !== this.options.ticks_positions[giraffe] ? (this.tickLabels[giraffe].style.position = "absolute", 
                this.tickLabels[giraffe].style[this.stylePos] = rat + "%", 
                this.tickLabels[giraffe].style[guanaco] = - deer / 2 + "px") : "vertical" === this.options.orientation && (this.options.rtl ? this.tickLabels[giraffe].style.marginRight = this.sliderElem.offsetWidth + "px" : this.tickLabels[giraffe].style.marginLeft = this.sliderElem.offsetWidth + "px", 
                this.tickLabelContainer.style[guanaco] = this.sliderElem.offsetWidth / 2 * -1 + "px"), 
                this._removeClass(this.tickLabels[giraffe], "label-in-selection label-is-selection"), 
                this.options.range ? rat >= grasshopper[0] && rat <= grasshopper[1] && (this._addClass(this.tickLabels[giraffe], "label-in-selection"), 
                (rat === grasshopper[0] || grasshopper[1]) && this._addClass(this.tickLabels[giraffe], "label-is-selection")) : ("after" === this.options.selection && rat >= grasshopper[0] ? this._addClass(this.tickLabels[giraffe], "label-in-selection") : "before" === this.options.selection && rat <= grasshopper[0] && this._addClass(this.tickLabels[giraffe], "label-in-selection"), 
                rat === grasshopper[0] && this._addClass(this.tickLabels[giraffe], "label-is-selection")));
              }
            }
          }
          if (this.options.range)
          {
            starling = this.options.formatter(this._state.value), 
            this._setText(this.tooltipInner, starling), 
            this.tooltip.style[this.stylePos] = (grasshopper[1] + grasshopper[0]) / 2 + "%";
            emu = this.options.formatter(this._state.value[0]);
            this._setText(this.tooltipInner_min, emu);
            bear = this.options.formatter(this._state.value[1]);
            this._setText(this.tooltipInner_max, bear), this.tooltip_min.style[this.stylePos] = grasshopper[0] + "%", 
            this.tooltip_max.style[this.stylePos] = grasshopper[1] + "%";
          }
          else
            starling = this.options.formatter(this._state.value[0]), 
            this._setText(this.tooltipInner, starling), 
            this.tooltip.style[this.stylePos] = grasshopper[0] + "%";
          if ("vertical" === this.options.orientation)
            this.trackLow.style.top = "0", this.trackLow.style.height = Math.min(grasshopper[0], grasshopper[1]) + "%", 
            this.trackSelection.style.top = Math.min(grasshopper[0], grasshopper[1]) + "%", 
            this.trackSelection.style.height = Math.abs(grasshopper[0] - grasshopper[1]) + "%", 
            this.trackHigh.style.bottom = "0", 
            this.trackHigh.style.height = 100 - Math.min(grasshopper[0], grasshopper[1]) - Math.abs(grasshopper[0] - grasshopper[1]) + "%";
          else
          {
            "right" === this.stylePos ? this.trackLow.style.right = "0" : this.trackLow.style.left = "0", 
            this.trackLow.style.width = Math.min(grasshopper[0], grasshopper[1]) + "%", 
            "right" === this.stylePos ? this.trackSelection.style.right = Math.min(grasshopper[0], grasshopper[1]) + "%" : this.trackSelection.style.left = Math.min(grasshopper[0], grasshopper[1]) + "%", 
            this.trackSelection.style.width = Math.abs(grasshopper[0] - grasshopper[1]) + "%", 
            "right" === this.stylePos ? this.trackHigh.style.left = "0" : this.trackHigh.style.right = "0", 
            this.trackHigh.style.width = 100 - Math.min(grasshopper[0], grasshopper[1]) - Math.abs(grasshopper[0] - grasshopper[1]) + "%";
            {
              kudu = this.tooltip_min.getBoundingClientRect();
              fish = this.tooltip_max.getBoundingClientRect();
            }
            "bottom" === this.options.tooltip_position ? kudu.right > fish.left ? (this._removeClass(this.tooltip_max, "bs-tooltip-bottom"), 
            this._addClass(this.tooltip_max, "bs-tooltip-top"), 
            this.tooltip_max.style.top = "", 
            this.tooltip_max.style.bottom = "22px") : (this._removeClass(this.tooltip_max, "bs-tooltip-top"), 
            this._addClass(this.tooltip_max, "bs-tooltip-bottom"), 
            this.tooltip_max.style.top = this.tooltip_min.style.top, 
            this.tooltip_max.style.bottom = "") : kudu.right > fish.left ? (this._removeClass(this.tooltip_max, "bs-tooltip-top"), 
            this._addClass(this.tooltip_max, "bs-tooltip-bottom"), 
            this.tooltip_max.style.top = "18px") : (this._removeClass(this.tooltip_max, "bs-tooltip-bottom"), 
            this._addClass(this.tooltip_max, "bs-tooltip-top"), 
            this.tooltip_max.style.top = this.tooltip_min.style.top);
          }
        },
        _createHighlightRange : function (tapir, jellyfish) {
          return this._isHighlightRange(tapir, jellyfish) ? tapir > jellyfish ? {
            start : jellyfish,
            size : tapir - jellyfish
          } : {
            start : tapir,
            size : jellyfish - tapir
          } : null;
        },
        _isHighlightRange : function (loris, coyote) {
          return loris >= 0 && 100 >= loris && coyote >= 0 && 100 >= coyote ? true : false;
        },
        _resize : function (stinkbug) {
          this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], 
          this._layout();
        },
        _removeProperty : function (toad, chimpanzee) {
          toad.style.removeProperty ? toad.style.removeProperty(chimpanzee) : toad.style.removeAttribute(chimpanzee);
        },
        _mousedown : function (louse) {
          var turkey; // e
          var hyena; // i
          var sparrow; // s
          var hippopotamus; // o
          
                  if (! this._state.enabled)
            return false;
          louse.preventDefault && louse.preventDefault(), this._state.offset = this._offset(this.sliderElem), 
          this._state.size = this.sliderElem[this.sizePos];
          turkey = this._getPercentage(louse);
          if (this.options.range)
          {
            {
              hyena = Math.abs(this._state.percentage[0] - turkey);
              sparrow = Math.abs(this._state.percentage[1] - turkey);
            }
            this._state.dragged = sparrow > hyena ? 0 : 1, this._adjustPercentageForRangeSliders(turkey);
          }
          else
            this._state.dragged = 0;
          this._state.percentage[this._state.dragged] = turkey, 
          this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, false), 
          document.removeEventListener("touchend", this.mouseup, false)), 
          this.mousemove && document.removeEventListener("mousemove", this.mousemove, false), 
          this.mouseup && document.removeEventListener("mouseup", this.mouseup, false), 
          this.mousemove = this._mousemove.bind(this), 
          this.mouseup = this._mouseup.bind(this), 
          this.touchCapable && (document.addEventListener("touchmove", this.mousemove, false), 
          document.addEventListener("touchend", this.mouseup, false)), 
          document.addEventListener("mousemove", this.mousemove, false), 
          document.addEventListener("mouseup", this.mouseup, false), 
          this._state.inDrag = true;
          hippopotamus = this._calculateValue();
          return this._trigger("slideStart", hippopotamus), this.setValue(hippopotamus, false, true), 
          louse.returnValue = false, 
          this.options.focus && this._triggerFocusOnHandle(this._state.dragged), 
          true;
        },
        _touchstart : function (cockroach) {
          this._mousedown(cockroach);
        },
        _triggerFocusOnHandle : function (scorpion) {
          0 === scorpion && this.handle1.focus(), 1 === scorpion && this.handle2.focus();
        },
        _keydown : function (squirrel, yak) {
          var gorilla; // i
          var anteater; // s
          var ant; // o
          var spider; // n
          var parrot; // a
          var fox; // h
          var elephant_seal; // l
          var dotterel; // r
          var rhinoceros; // d
          var falcon; // p
          
                  if (! this._state.enabled)
            return false;
          switch (yak.keyCode) {
            case 37:
              

            case 40:
              gorilla = -1;
              break;

            case 39:
              

            case 38:
              gorilla = 1;

            
          }
          if (gorilla)
          {
            if (this.options.natural_arrow_keys)
            {
              {
                anteater = "horizontal" === this.options.orientation;
                ant = "vertical" === this.options.orientation;
                spider = this.options.rtl;
                parrot = this.options.reversed;
              }
              anteater ? spider ? parrot || (gorilla = - gorilla) : parrot && (gorilla = - gorilla) : ant && (parrot || (gorilla = - gorilla));
            }
            if (this.ticksAreValid && this.options.lock_to_ticks)
            {
              elephant_seal = void 0;
              elephant_seal = this.options.ticks.indexOf(this._state.value[squirrel]), 
              -1 === elephant_seal && (elephant_seal = 0, window.console.warn("(lock_to_ticks) _keydown: index should not be -1")), 
              elephant_seal = 0 + gorilla, 
              elephant_seal = Math.max(0, Math.min(this.options.ticks.length - 1, elephant_seal)), 
              fox = this.options.ticks[elephant_seal];
            }
            else
              fox = this._state.value[squirrel] + gorilla * this.options.step;
            dotterel = this._toPercentage(fox);
            if (this._state.keyCtrl = squirrel, this.options.range)
            {
              this._adjustPercentageForRangeSliders(dotterel);
              {
                rhinoceros = this._state.keyCtrl ? this._state.value[0] : fox;
                falcon = this._state.keyCtrl ? fox : this._state.value[1];
              }
              fox = [Math.max(this.options.min, Math.min(this.options.max, rhinoceros)), Math.max(this.options.min, Math.min(this.options.max, falcon)), ];
            }
            else
              fox = Math.max(this.options.min, Math.min(this.options.max, fox));
            return this._trigger("slideStart", fox), this.setValue(fox, true, true), 
            this._trigger("slideStop", fox), 
            this._pauseEvent(yak), 
            delete this._state.keyCtrl, 
            false;
          }
        },
        _pauseEvent : function (pigeon) {
          pigeon.stopPropagation && pigeon.stopPropagation(), pigeon.preventDefault && pigeon.preventDefault(), 
          pigeon.cancelBubble = true, 
          pigeon.returnValue = false;
        },
        _mousemove : function (flamingo) {
          var jackal; // e
          var fly; // i
          
                  if (! this._state.enabled)
            return false;
          jackal = this._getPercentage(flamingo);
          this._adjustPercentageForRangeSliders(jackal), this._state.percentage[this._state.dragged] = jackal;
          fly = this._calculateValue(true);
          return this.setValue(fly, true, true), false;
        },
        _touchmove : function (vulture) {
          void 0 !== vulture.changedTouches && vulture.preventDefault && vulture.preventDefault();
        },
        _adjustPercentageForRangeSliders : function (lobster) {
          var buffalo; // e
          var peafowl; // i
          
                  if (this.options.range)
          {
            buffalo = this._getNumDigitsAfterDecimalPlace(lobster);
            buffalo = buffalo ? buffalo - 1 : 0;
            peafowl = this._applyToFixedAndParseFloat(lobster, buffalo);
            0 === this._state.dragged && this._applyToFixedAndParseFloat(this._state.percentage[1], buffalo) < peafowl ? (this._state.percentage[0] = this._state.percentage[1], 
            this._state.dragged = 1) : 1 === this._state.dragged && this._applyToFixedAndParseFloat(this._state.percentage[0], buffalo) > peafowl ? (this._state.percentage[1] = this._state.percentage[0], 
            this._state.dragged = 0) : 0 === this._state.keyCtrl && this._toPercentage(this._state.value[1]) < lobster ? (this._state.percentage[0] = this._state.percentage[1], 
            this._state.keyCtrl = 1, 
            this.handle2.focus()) : 1 === this._state.keyCtrl && this._toPercentage(this._state.value[0]) > lobster && (this._state.percentage[1] = this._state.percentage[0], 
            this._state.keyCtrl = 0, 
            this.handle1.focus());
          }
        },
        _mouseup : function (narwhal) {
          var ferret; // e
          var ox; // i
          
                  if (! this._state.enabled)
            return false;
          ferret = this._getPercentage(narwhal);
          this._adjustPercentageForRangeSliders(ferret), this._state.percentage[this._state.dragged] = ferret, 
          this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, false), 
          document.removeEventListener("touchend", this.mouseup, false)), 
          document.removeEventListener("mousemove", this.mousemove, false), 
          document.removeEventListener("mouseup", this.mouseup, false), 
          this._state.inDrag = false, 
          this._state.over === false && this._hideTooltip();
          ox = this._calculateValue(true);
          return this.setValue(ox, false, true), this._trigger("slideStop", ox), 
          this._state.dragged = null, 
          false;
        },
        _setValues : function (polar_bear, crocodile) {
          var curlew; // i
          
                  curlew = 0 === polar_bear ? 0 : 100;
          this._state.percentage[polar_bear] !== curlew && (crocodile.data[polar_bear] = this._toValue(this._state.percentage[polar_bear]), 
          crocodile.data[polar_bear] = this._applyPrecision(crocodile.data[polar_bear]));
        },
        _calculateValue : function (sardine) {
          var herring; // e
          
                  herring = {
            
          };
          return this.options.range ? (herring.data = [this.options.min, this.options.max, ], 
          this._setValues(0, herring), 
          this._setValues(1, herring), 
          sardine && (herring.data[0] = this._snapToClosestTick(herring.data[0]), 
          herring.data[1] = this._snapToClosestTick(herring.data[1]))) : (herring.data = this._toValue(this._state.percentage[0]), 
          herring.data = parseFloat(herring.data), 
          herring.data = this._applyPrecision(herring.data), 
          sardine && (herring.data = this._snapToClosestTick(herring.data))), 
          herring.data;
        },
        _snapToClosestTick : function (red_panda) {
          var rabbit; // e
          var zebra; // i
          var dolphin; // s
          
                  {
            {
              rabbit = [red_panda, 1 / 0, ];
              zebra = 0;
            }
            for (; zebra < this.options.ticks.length; zebra++)
            {
              dolphin = Math.abs(this.options.ticks[zebra] - red_panda);
              dolphin <= rabbit[1] && (rabbit = [this.options.ticks[zebra], dolphin, ]);
            }
          }
          return rabbit[1] <= this.options.ticks_snap_bounds ? rabbit[0] : red_panda;
        },
        _applyPrecision : function (salamander) {
          var gull; // e
          
                  gull = this.options.precision || this._getNumDigitsAfterDecimalPlace(this.options.step);
          return this._applyToFixedAndParseFloat(salamander, gull);
        },
        _getNumDigitsAfterDecimalPlace : function (alpaca) {
          var ostrich; // e
          
                  ostrich = ("" + alpaca).match(new RegExp("(?:\\.(\\d+))?(?:[eE]([+-]?\\d+))?$", ""));
          return ostrich ? Math.max(0, (ostrich[1] ? ostrich[1].length : 0) - (ostrich[2] ? + ostrich[2] : 0)) : 0;
        },
        _applyToFixedAndParseFloat : function (manatee, red_deer) {
          var barracuda; // i
          
                  barracuda = manatee.toFixed(red_deer);
          return parseFloat(barracuda);
        },
        _getPercentage : function (hare) {
          var hedgehog; // e
          var porcupine; // i
          var seal; // s
          var lark; // o
          
                  ! this.touchCapable || "touchstart" !== hare.type && "touchmove" !== hare.type && "touchend" !== hare.type || (hare = hare.changedTouches[0]);
          {
            hedgehog = hare[this.mousePos];
            porcupine = this._state.offset[this.stylePos];
            seal = hedgehog - porcupine;
          }
          "right" === this.stylePos && (seal = - seal);
          lark = seal / this._state.size * 100;
          return lark = Math.round(lark / this._state.percentage[2]) * this._state.percentage[2], 
          this.options.reversed && (lark = 100 - lark), 
          Math.max(0, Math.min(100, lark));
        },
        _validateInputValue : function (wren) {
          if (isNaN(+ wren))
          {
            if (Array.isArray(wren))
              return this._validateArray(wren), wren;
            throw new Error(armadillo.formatInvalidInputErrorMsg(wren));
          }
          return + wren;
        },
        _validateArray : function (partridge) {
          var heron; // e
          var raccoon_1; // i
          
                  {
            heron = 0;
            for (; heron < partridge.length; heron++)
            {
              raccoon_1 = partridge[heron];
              if ("number" != typeof raccoon_1)
                throw new Error(armadillo.formatInvalidInputErrorMsg(raccoon_1));
            }
          }
        },
        _setDataVal : function (hamster_1) {
          this.element.setAttribute("data-value", hamster_1), this.element.setAttribute("value", hamster_1), 
          this.element.value = hamster_1;
        },
        _trigger : function (chinchilla_1, ibex_1) {
          var boar_1; // i
          var llama_1; // s
          var capybara_1; // o
          
                  ibex_1 = ibex_1 || 0 === ibex_1 ? ibex_1 : void 0;
          boar_1 = this.eventToCallbackMap[chinchilla_1];
          if (boar_1 && boar_1.length)
          {
            llama_1 = 0;
            for (; llama_1 < boar_1.length; llama_1++)
            {
              capybara_1 = boar_1[llama_1];
              capybara_1(ibex_1);
            }
          }
          beaver && this._triggerJQueryEvent(chinchilla_1, ibex_1);
        },
        _triggerJQueryEvent : function (mink_1, prairie_dog_1) {
          var mantis_1; // i
          
                  mantis_1 = {
            type : mink_1,
            value : prairie_dog_1
          };
          this.$element.trigger(mantis_1), this.$sliderElem.trigger(mantis_1);
        },
        _unbindJQueryEventHandlers : function () {
          this.$element.off(), this.$sliderElem.off();
        },
        _setText : function (dogfish_1, snail_1) {
          "undefined" != typeof dogfish_1.textContent ? dogfish_1.textContent = snail_1 : "undefined" != typeof dogfish_1.innerText && (dogfish_1.innerText = snail_1);
        },
        _removeClass : function (dunlin_1, termite_1) {
          var squid_1; // i
          var rook_1; // s
          var woodcock_1; // o
          var antelope_1; // n
          var goose_1; // a
          
                  {
            {
              squid_1 = termite_1.split(" ");
              rook_1 = dunlin_1.className;
              woodcock_1 = 0;
            }
            for (; woodcock_1 < squid_1.length; woodcock_1++)
            {
              {
                antelope_1 = squid_1[woodcock_1];
                goose_1 = new RegExp("(?:\\s|^)" + antelope_1 + "(?:\\s|$)");
              }
              rook_1 = rook_1.replace(goose_1, " ");
            }
          }
          dunlin_1.className = rook_1.trim();
        },
        _addClass : function (baboon_1, bat_1) {
          var bison_1; // i
          var tarsier_1; // s
          var cat_1; // o
          var weasel_1; // n
          var beaver_1; // a
          var komodo_dragon_1; // h
          
                  {
            {
              bison_1 = bat_1.split(" ");
              tarsier_1 = baboon_1.className;
              cat_1 = 0;
            }
            for (; cat_1 < bison_1.length; cat_1++)
            {
              {
                weasel_1 = bison_1[cat_1];
                beaver_1 = new RegExp("(?:\\s|^)" + weasel_1 + "(?:\\s|$)");
                komodo_dragon_1 = beaver_1.test(tarsier_1);
              }
              komodo_dragon_1 || (tarsier_1 += " " + weasel_1);
            }
          }
          baboon_1.className = tarsier_1.trim();
        },
        _offsetLeft : function (armadillo_1) {
          return armadillo_1.getBoundingClientRect().left;
        },
        _offsetRight : function (woodpecker_1) {
          return woodpecker_1.getBoundingClientRect().right;
        },
        _offsetTop : function (quelea_1) {
          var butterfly_1; // e
          
                  {
            butterfly_1 = quelea_1.offsetTop;
            for (; (quelea_1 = quelea_1.offsetParent) && ! isNaN(quelea_1.offsetTop); )
              butterfly_1 += quelea_1.offsetTop, "BODY" !== quelea_1.tagName && (butterfly_1 -= quelea_1.scrollTop);
          }
          return butterfly_1;
        },
        _offset : function (oyster_1) {
          return {
            left : this._offsetLeft(oyster_1),
            right : this._offsetRight(oyster_1),
            top : this._offsetTop(oyster_1)
          };
        },
        _css : function (stingray_1, dragonfly_1, finch_1) {
          var meerkat_1; // s
          
                  if (beaver)
            beaver.style(stingray_1, dragonfly_1, finch_1);
          else
          {
            meerkat_1 = dragonfly_1.replace(new RegExp("^-ms-", ""), "ms-").replace(new RegExp("-([\\da-z])", "gi"), function (alligator_1, kookabura_1) {
              return kookabura_1.toUpperCase();
            });
            stingray_1.style[meerkat_1] = finch_1;
          }
        },
        _toValue : function (human_1) {
          return this.options.scale.toValue.apply(this, [human_1, ]);
        },
        _toPercentage : function (reindeer_1) {
          return this.options.scale.toPercentage.apply(this, [reindeer_1, ]);
        },
        _setTooltipPosition : function () {
          var elk_1; // t
          var ape_1; // e
          var dinosaur_1; // i
          
                  elk_1 = [this.tooltip, this.tooltip_min, this.tooltip_max, ];
          if ("vertical" === this.options.orientation)
          {
            ape_1 = this.options.tooltip_position ? this.options.tooltip_position : this.options.rtl ? "left" : "right";
            dinosaur_1 = "left" === ape_1 ? "right" : "left";
            elk_1.forEach(function (kouprey_1) {
              this._addClass(kouprey_1, "bs-tooltip-" + ape_1), kouprey_1.style[dinosaur_1] = "100%";
            }.bind(this));
          }
          else
            "bottom" === this.options.tooltip_position ? elk_1.forEach(function (echidna_1) {
              this._addClass(echidna_1, "bs-tooltip-bottom"), echidna_1.style.top = "22px";
            }.bind(this)) : elk_1.forEach(function (owl_1) {
              this._addClass(owl_1, "bs-tooltip-top"), owl_1.style.top = - this.tooltip.outerHeight - 14 + "px";
            }.bind(this));
        },
        _getClosestTickIndex : function (gaur_1) {
          var locust_1; // e
          var magpie_1; // i
          var snake_1; // s
          var hummingbird_1; // o
          
                  {
            {
              magpie_1 = 0;
              snake_1 = 0;
            }
            for (; snake_1 < this.options.ticks.length; ++ snake_1)
            {
              hummingbird_1 = Math.abs(gaur_1 - this.options.ticks[snake_1]);
              locust_1 > hummingbird_1 && (magpie_1 = snake_1);
            }
          }
          return magpie_1;
        },
        _setTickIndex : function () {
          this.ticksAreValid && (this._state.tickIndex = [this.options.ticks.indexOf(this._state.value[0]), this.options.ticks.indexOf(this._state.value[1]), ]);
        }
      }, 
      beaver && beaver.fn && (beaver.fn.slider ? (hamster && window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead."), 
      komodo_dragon = capybara) : (beaver.bridget(llama, mink), komodo_dragon = llama), 
      beaver.bridget(capybara, mink), 
      beaver(function () {
        beaver("input[data-provide=slider]")[komodo_dragon]();
      }));
    }(boar), 
    mink;
  });
  