  (function (raccoon) {
  "use strict";
    function chives() {
      this.defaultTemplate = '<li data-id="{{id}}" class="{{completed}}"><div class="view"><input class="toggle" type="checkbox" {{checked}}><label>{{title}}</label><button class="destroy"></button></div></li>';
    }
      var hamster; // t
    var chinchilla; // r
    var ibex; // l
    var boar; // a
    var llama; // n
    
      hamster = {
      "&" : "&amp;",
      "<" : "&lt;",
      ">" : "&gt;",
      '"' : "&quot;",
      "'" : "&#x27;",
      "`" : "&#x60;"
    };
    chinchilla = function (capybara) {
      return hamster[capybara];
    };
    ibex = new RegExp("[&<>\"'`]", "g");
    boar = new RegExp(ibex.source);
    llama = function (mink) {
      return mink && boar.test(mink) ? mink.replace(ibex, chinchilla) : mink;
    };
    o.prototype.show = function (prairie_dog) {
      var mantis; // t
      var dogfish; // r
      var snail; // l
      var dunlin; // a
      var termite; // o
      var squid; // c
      
          snail = "";
      for (mantis = 0, dogfish = prairie_dog.length; mantis < dogfish; mantis++)
      {
        dunlin = this.defaultTemplate;
        termite = "";
        squid = "";
        if (prairie_dog[mantis].completed)
        {
          termite = "completed";
          squid = "checked";
        }
        dunlin = dunlin.replace("{{id}}", prairie_dog[mantis].id);
        dunlin = dunlin.replace("{{title}}", llama(prairie_dog[mantis].title));
        dunlin = dunlin.replace("{{completed}}", termite);
        dunlin = dunlin.replace("{{checked}}", squid);
        snail = snail + dunlin;
      }
      return snail;
    };
    o.prototype.itemCounter = function (rook) {
      var woodcock; // t
      
          woodcock = rook === 1 ? "" : "s";
      return "<strong>" + rook + "</strong> item" + woodcock + " left";
    };
    o.prototype.clearCompletedButton = function (antelope) {
      if (antelope > 0)
      {
        return "Clear completed";
      }
      else
      {
        return "";
      }
    };
    raccoon.app = raccoon.app || {
      
    };
    raccoon.app.Template = o;
  })(window);
  