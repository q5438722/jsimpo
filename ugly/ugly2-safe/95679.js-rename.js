  (function (raccoon) {
    function chives(hamster) {
      return function () {
        var chinchilla; // t
        
              chinchilla = this.element.val();
        hamster.apply(this, arguments);
        this._refresh();
        if (chinchilla !== this.element.val())
        {
          this._trigger("change");
        }
      };
    }
      raccoon.widget("ui.spinner", {
      version : "@VERSION",
      defaultElement : "<input>",
      widgetEventPrefix : "spin",
      options : {
        culture : null,
        incremental : true,
        max : null,
        min : null,
        numberFormat : null,
        page : 10,
        step : 1,
        change : null,
        spin : null,
        start : null,
        stop : null
      },
      _create : function () {
        this._setOption("max", this.options.max);
        this._setOption("min", this.options.min);
        this._setOption("step", this.options.step);
        this._value(this.element.val(), true);
        this._draw();
        this._bind(this._events);
        this._refresh();
        this._bind(this.window, {
          beforeunload : function () {
            this.element.removeAttr("autocomplete");
          }
        });
      },
      _getCreateOptions : function () {
        var ibex; // n
        var boar; // s
        
              {
          ibex = {
            
          };
          boar = this.element;
        }
        raccoon.each(["min", "max", "step", ], function (llama, capybara) {
          var mink; // i
          
                  mink = boar.attr(capybara);
          if (mink !== undefined && mink.length)
          {
            ibex[capybara] = mink;
          }
        });
        return ibex;
      },
      _events : {
        keydown : function (prairie_dog) {
          if (this._start(prairie_dog) && this._keydown(prairie_dog))
          {
            prairie_dog.preventDefault();
          }
        },
        keyup : "_stop",
        focus : function () {
          this.uiSpinner.addClass("ui-state-active");
          this.previous = this.element.val();
        },
        blur : function (mantis) {
          if (this.cancelBlur)
          {
            delete this.cancelBlur;
            return;
          }
          this._refresh();
          this.uiSpinner.removeClass("ui-state-active");
          if (this.previous !== this.element.val())
          {
            this._trigger("change", mantis);
          }
        },
        mousewheel : function (dogfish, snail) {
          if (! snail)
          {
            return;
          }
          if (! this.spinning && ! this._start(dogfish))
          {
            return false;
          }
          this._spin((snail > 0 ? 1 : -1) * this.options.step, dogfish);
          clearTimeout(this.mousewheelTimer);
          this.mousewheelTimer = this._delay(function () {
            if (this.spinning)
            {
              this._stop(dogfish);
            }
          }, 
          100);
          dogfish.preventDefault();
        },
        "mousedown .ui-spinner-button" : function (dunlin) {
          function bean_sprout() {
            var squid; // t
            
                      squid = this.element[0] === this.document[0].activeElement;
            if (! squid)
            {
              this.element.focus();
              this.previous = termite;
              this._delay(function () {
                this.previous = termite;
              });
            }
          }
                  var termite; // e
          
                  dunlin.preventDefault();
          i.call(this);
          this.cancelBlur = true;
          this._delay(function () {
            delete this.cancelBlur;
            i.call(this);
          });
          if (this._start(dunlin) === false)
          {
            return;
          }
          this._repeat(null, raccoon(dunlin.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, 
          dunlin);
        },
        "mouseup .ui-spinner-button" : "_stop",
        "mouseenter .ui-spinner-button" : function (rook) {
          if (! raccoon(rook.currentTarget).hasClass("ui-state-active"))
          {
            return;
          }
          if (this._start(rook) === false)
          {
            return false;
          }
          this._repeat(null, raccoon(rook.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, 
          rook);
        },
        "mouseleave .ui-spinner-button" : "_stop"
      },
      _draw : function () {
        var woodcock; // t
        
              woodcock = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
        this._hoverable(woodcock);
        this.element.attr("role", "spinbutton");
        this.buttons = woodcock.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all");
        if (this.buttons.height() > Math.ceil(woodcock.height() * .5) && woodcock.height() > 0)
        {
          woodcock.height(woodcock.height());
        }
        if (this.options.disabled)
        {
          this.disable();
        }
      },
      _keydown : function (antelope) {
        var goose; // e
        var baboon; // i
        
              {
          goose = this.options;
          baboon = raccoon.ui.keyCode;
        }
        switch (antelope.keyCode) {
          case baboon.UP:
            this._repeat(null, 1, antelope);
            return true;

          case baboon.DOWN:
            this._repeat(null, -1, antelope);
            return true;

          case baboon.PAGE_UP:
            this._repeat(null, goose.page, antelope);
            return true;

          case baboon.PAGE_DOWN:
            this._repeat(null, - goose.page, antelope);
            return true;

          
        }
        return false;
      },
      _uiSpinnerHtml : function () {
        return "<span class='ui-spinner ui-state-default ui-widget ui-widget-content ui-corner-all'></span>";
      },
      _buttonHtml : function () {
        return '<a class=\'ui-spinner-button ui-spinner-up ui-corner-tr\'><span class=\'ui-icon ui-icon-triangle-1-n\'>&#9650;</span></a><a class=\'ui-spinner-button ui-spinner-down ui-corner-br\'><span class=\'ui-icon ui-icon-triangle-1-s\'>&#9660;</span></a>';
      },
      _start : function (bat) {
        if (! this.spinning && this._trigger("start", bat) === false)
        {
          return false;
        }
        if (! this.counter)
        {
          this.counter = 1;
        }
        this.spinning = true;
        return true;
      },
      _repeat : function (bison, tarsier, cat) {
        bison = bison || 500;
        clearTimeout(this.timer);
        this.timer = this._delay(function () {
          this._repeat(40, tarsier, cat);
        }, 
        bison);
        this._spin(tarsier * this.options.step, cat);
      },
      _spin : function (weasel, beaver) {
        var komodo_dragon; // i
        
              komodo_dragon = this.value() || 0;
        if (! this.counter)
        {
          this.counter = 1;
        }
        komodo_dragon = this._adjustValue(komodo_dragon + weasel * this._increment(this.counter));
        if (! this.spinning || this._trigger("spin", beaver, {
          value : komodo_dragon
        }) !== false)
        {
          this._value(komodo_dragon);
          this.counter++;
        }
      },
      _increment : function (armadillo) {
        var woodpecker; // e
        
              woodpecker = this.options.incremental;
        if (woodpecker)
        {
          return raccoon.isFunction(woodpecker) ? chives(armadillo) : Math.floor(armadillo * armadillo * armadillo / 50000 - armadillo * armadillo / 500 + 17 * armadillo / 200 + 1);
        }
        return 1;
      },
      _precision : function () {
        var quelea; // t
        
              quelea = this._precisionOf(this.options.step);
        if (this.options.min !== null)
        {
          quelea = Math.max(quelea, this._precisionOf(this.options.min));
        }
        return quelea;
      },
      _precisionOf : function (butterfly) {
        var oyster; // e
        var stingray; // i
        
              {
          oyster = butterfly.toString();
          stingray = oyster.indexOf(".");
        }
        return stingray === -1 ? 0 : oyster.length - stingray - 1;
      },
      _adjustValue : function (dragonfly) {
        var finch; // e
        var meerkat; // i
        var alligator; // n
        
              alligator = this.options;
        finch = alligator.min !== null ? alligator.min : 0;
        meerkat = dragonfly - finch;
        meerkat = Math.round(meerkat / alligator.step) * alligator.step;
        dragonfly = finch + meerkat;
        dragonfly = parseFloat(dragonfly.toFixed(this._precision()));
        if (alligator.max !== null && dragonfly > alligator.max)
        {
          return alligator.max;
        }
        if (alligator.min !== null && dragonfly < alligator.min)
        {
          return alligator.min;
        }
        return dragonfly;
      },
      _stop : function (kookabura) {
        if (! this.spinning)
        {
          return;
        }
        clearTimeout(this.timer);
        clearTimeout(this.mousewheelTimer);
        this.counter = 0;
        this.spinning = false;
        this._trigger("stop", kookabura);
      },
      _setOption : function (human, reindeer) {
        var elk; // i
        
              if (human === "culture" || human === "numberFormat")
        {
          elk = this._parse(this.element.val());
          this.options[human] = reindeer;
          this.element.val(this._format(elk));
          return;
        }
        if (human === "max" || human === "min" || human === "step")
        {
          if (typeof reindeer === "string")
          {
            reindeer = this._parse(reindeer);
          }
        }
        this._super(human, reindeer);
        if (human === "disabled")
        {
          if (reindeer)
          {
            this.element.prop("disabled", true);
            this.buttons.button("disable");
          }
          else
          {
            this.element.prop("disabled", false);
            this.buttons.button("enable");
          }
        }
      },
      _setOptions : chives(function (ape) {
        this._super(ape);
        this._value(this.element.val());
      }),
      _parse : function (dinosaur) {
        if (typeof dinosaur === "string" && dinosaur !== "")
        {
          dinosaur = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(dinosaur, 10, this.options.culture) : + dinosaur;
        }
        return dinosaur === "" || isNaN(dinosaur) ? null : dinosaur;
      },
      _format : function (kouprey) {
        if (kouprey === "")
        {
          return "";
        }
        return window.Globalize && this.options.numberFormat ? Globalize.format(kouprey, this.options.numberFormat, this.options.culture) : kouprey;
      },
      _refresh : function () {
        this.element.attr({
          "aria-valuemin" : this.options.min,
          "aria-valuemax" : this.options.max,
          "aria-valuenow" : this._parse(this.element.val())
        });
      },
      _value : function (echidna, owl) {
        var gaur; // i
        
              if (echidna !== "")
        {
          gaur = this._parse(echidna);
          if (gaur !== null)
          {
            if (! owl)
            {
              gaur = this._adjustValue(gaur);
            }
            echidna = this._format(gaur);
          }
        }
        this.element.val(echidna);
        this._refresh();
      },
      _destroy : function () {
        this.element.removeClass("ui-spinner-input").prop("disabled", false).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
        this.uiSpinner.replaceWith(this.element);
      },
      stepUp : chives(function (locust) {
        this._stepUp(locust);
      }),
      _stepUp : function (magpie) {
        this._spin((magpie || 1) * this.options.step);
      },
      stepDown : chives(function (snake) {
        this._stepDown(snake);
      }),
      _stepDown : function (hummingbird) {
        this._spin((hummingbird || 1) * - this.options.step);
      },
      pageUp : chives(function (sheep) {
        this._stepUp((sheep || 1) * this.options.page);
      }),
      pageDown : chives(function (goldfinch) {
        this._stepDown((goldfinch || 1) * this.options.page);
      }),
      value : function (swan) {
        if (! arguments.length)
        {
          return this._parse(this.element.val());
        }
        chives(this._value).call(this, swan);
      },
      widget : function () {
        return this.uiSpinner;
      }
    });
  })(jQuery);
  