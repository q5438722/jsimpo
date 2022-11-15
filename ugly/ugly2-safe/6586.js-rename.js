  (function (echidna, owl) {
    if (typeof exports === "object" && typeof require === "function")
    {
      module.exports = owl(require("backbone"));
    }
    else
      if (typeof define === "function" && define.amd)
      {
        define(["backbone", ], function (gaur) {
          return owl(gaur || echidna.Backbone);
        });
      }
      else
      {
        owl(Backbone);
      }
  })(this, function (raccoon) {
    function chives() {
      return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
    }
    function bean_sprout() {
      return chives() + chives() + "-" + chives() + "-" + chives() + "-" + chives() + "-" + chives() + chives() + chives();
    }
    function broccoflower(hamster) {
      return hamster === Object(hamster);
    }
    function green_bean(chinchilla, ibex) {
      var boar; // r
      
          boar = chinchilla.length;
      while (boar--)
        if (chinchilla[boar] === ibex)
          return true;
      return false;
    }
    function amaranth(llama, capybara) {
      var mink; // r
      
          for (mink in capybara)
        llama[mink] = capybara[mink];
      return llama;
    }
    function nopale(prairie_dog, mantis) {
      var dogfish; // r
      
          if (prairie_dog == null)
        return void 0;
      dogfish = prairie_dog[mantis];
      return typeof dogfish === "function" ? prairie_dog[mantis]() : dogfish;
    }
      raccoon.LocalStorage = window.Store = function (snail, dunlin) {
      var termite; // r
      
          if (! this.localStorage)
      {
        throw "Backbone.localStorage: Environment does not support localStorage.";
      }
      this.name = snail;
      this.serializer = dunlin || {
        serialize : function (squid) {
          return broccoflower(squid) ? JSON.stringify(squid) : squid;
        },
        deserialize : function (rook) {
          return rook && JSON.parse(rook);
        }
      };
      termite = this.localStorage().getItem(this.name);
      this.records = termite && termite.split(",") || [];
    };
    amaranth(raccoon.LocalStorage.prototype, {
      save : function () {
        this.localStorage().setItem(this.name, this.records.join(","));
      },
      create : function (woodcock) {
        if (! woodcock.id && woodcock.id !== 0)
        {
          woodcock.id = bean_sprout();
          woodcock.set(woodcock.idAttribute, woodcock.id);
        }
        this.localStorage().setItem(this._itemName(woodcock.id), this.serializer.serialize(woodcock));
        this.records.push(woodcock.id.toString());
        this.save();
        return this.find(woodcock);
      },
      update : function (antelope) {
        var goose; // t
        
              this.localStorage().setItem(this._itemName(antelope.id), this.serializer.serialize(antelope));
        goose = antelope.id.toString();
        if (! green_bean(this.records, goose))
        {
          this.records.push(goose);
          this.save();
        }
        return this.find(antelope);
      },
      find : function (baboon) {
        return this.serializer.deserialize(this.localStorage().getItem(this._itemName(baboon.id)));
      },
      findAll : function () {
        var bat; // e
        var bison; // t
        var tarsier; // r
        var cat; // i
        
              bat = [];
        {
          bison = 0;
          for (; bison < this.records.length; bison++)
          {
            tarsier = this.records[bison];
            cat = this.serializer.deserialize(this.localStorage().getItem(this._itemName(tarsier)));
            if (cat != null)
              bat.push(cat);
          }
        }
        return bat;
      },
      destroy : function (weasel) {
        var beaver; // t
        var komodo_dragon; // r
        
              this.localStorage().removeItem(this._itemName(weasel.id));
        beaver = weasel.id.toString();
        {
          komodo_dragon = 0;
          for (; komodo_dragon < this.records.length; komodo_dragon++)
          {
            if (this.records[komodo_dragon] === beaver)
            {
              this.records.splice(komodo_dragon, 1);
            }
          }
        }
        this.save();
        return weasel;
      },
      localStorage : function () {
        return localStorage;
      },
      _clear : function () {
        var armadillo; // e
        var woodpecker; // t
        var quelea; // r
        
              {
          armadillo = this.localStorage();
          woodpecker = new RegExp("^" + this.name + "-");
        }
        armadillo.removeItem(this.name);
        for (quelea in armadillo)
        {
          if (woodpecker.test(quelea))
          {
            armadillo.removeItem(quelea);
          }
        }
        this.records.length = 0;
      },
      _storageSize : function () {
        return this.localStorage().length;
      },
      _itemName : function (butterfly) {
        return this.name + "-" + butterfly;
      }
    });
    raccoon.LocalStorage.sync = window.Store.sync = raccoon.localSync = function (oyster, stingray, dragonfly) {
      var finch; // i
      var meerkat; // o
      var alligator; // n
      var kookabura; // a
      
          finch = nopale(stingray, "localStorage") || nopale(stingray.collection, "localStorage");
      kookabura = raccoon.$ ? raccoon.$.Deferred && raccoon.$.Deferred() : raccoon.Deferred && raccoon.Deferred();
      try {
        switch (oyster) {
          case "read":
            meerkat = stingray.id != undefined ? finch.find(stingray) : finch.findAll();
            break;

          case "create":
            meerkat = finch.create(stingray);
            break;

          case "update":
            meerkat = finch.update(stingray);
            break;

          case "delete":
            meerkat = finch.destroy(stingray);
            break;

          
        }
      }
      catch (e) {
        if (oyster.code === 22 && finch._storageSize() === 0)
          alligator = "Private browsing is unsupported";
        else
          alligator = oyster.message;
      }
      if (meerkat)
      {
        if (dragonfly && dragonfly.success)
        {
          if (raccoon.VERSION === "0.9.10")
          {
            dragonfly.success(stingray, meerkat, dragonfly);
          }
          else
          {
            dragonfly.success(meerkat);
          }
        }
        if (kookabura)
        {
          kookabura.resolve(meerkat);
        }
      }
      else
      {
        alligator = alligator ? alligator : "Record Not Found";
        if (dragonfly && dragonfly.error)
          if (raccoon.VERSION === "0.9.10")
          {
            dragonfly.error(stingray, alligator, dragonfly);
          }
          else
          {
            dragonfly.error(alligator);
          }
        if (kookabura)
          kookabura.reject(alligator);
      }
      if (dragonfly && dragonfly.complete)
        dragonfly.complete(meerkat);
      return kookabura && kookabura.promise();
    };
    raccoon.ajaxSync = raccoon.sync;
    raccoon.getSyncMethod = function (human, reindeer) {
      var elk; // r
      
          elk = reindeer && reindeer.ajaxSync;
      if (! elk && (nopale(human, "localStorage") || nopale(human.collection, "localStorage")))
      {
        return raccoon.localSync;
      }
      return raccoon.ajaxSync;
    };
    raccoon.sync = function (ape, dinosaur, kouprey) {
      return raccoon.getSyncMethod(dinosaur, kouprey).apply(this, [ape, dinosaur, kouprey, ]);
    };
    return raccoon.LocalStorage;
  });
  