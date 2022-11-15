"use strict";
  function chives() {
    function broccoflower(capybara, mink) {
      return angular.extend(Object.create(capybara), mink);
    }
      var llama; // O
    
      raccoon = angular.isDefined;
    hamster = angular.noop;
    llama = {
      
    };
    this.when = function (prairie_dog, mantis) {
      var dogfish; // a
      var snail; // n
      
          dogfish = shallowCopy(mantis);
      if (angular.isUndefined(dogfish.reloadOnUrl))
      {
        dogfish.reloadOnUrl = true;
      }
      if (angular.isUndefined(dogfish.reloadOnSearch))
      {
        dogfish.reloadOnSearch = true;
      }
      if (angular.isUndefined(dogfish.caseInsensitiveMatch))
      {
        dogfish.caseInsensitiveMatch = this.caseInsensitiveMatch;
      }
      llama[prairie_dog] = angular.extend(dogfish, {
        originalPath : prairie_dog
      }, 
      prairie_dog && routeToRegExp(prairie_dog, dogfish));
      if (prairie_dog)
      {
        snail = prairie_dog[prairie_dog.length - 1] === "/" ? prairie_dog.substr(0, prairie_dog.length - 1) : prairie_dog + "/";
        llama[snail] = angular.extend({
          originalPath : prairie_dog,
          redirectTo : prairie_dog
        }, 
        routeToRegExp(snail, dogfish));
      }
      return this;
    };
    this.caseInsensitiveMatch = false;
    this.otherwise = function (dunlin) {
      if (typeof dunlin === "string")
      {
        dunlin = {
          redirectTo : dunlin
        };
      }
      this.when(null, dunlin);
      return this;
    };
    boar = true;
    this.eagerInstantiationEnabled = function e(termite) {
      if (raccoon(termite))
      {
        boar = termite;
        return this;
      }
      return boar;
    };
    this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", "$browser", function (squid, rook, woodcock, antelope, goose, baboon, bat, 
    bison) {
      function green_bean(beaver, komodo_dragon) {
        var armadillo; // a
        var woodpecker; // n
        var quelea; // t
        var butterfly; // i
        var oyster; // u
        var stingray; // o
        var dragonfly; // s
        
              {
          armadillo = komodo_dragon.keys;
          woodpecker = {
            
          };
        }
        if (! komodo_dragon.regexp)
          return null;
        quelea = komodo_dragon.regexp.exec(beaver);
        if (! quelea)
          return null;
        {
          {
            butterfly = 1;
            oyster = quelea.length;
          }
          for (; butterfly < oyster; ++ butterfly)
          {
            stingray = armadillo[butterfly - 1];
            dragonfly = quelea[butterfly];
            if (stingray && dragonfly)
            {
              woodpecker[stingray.name] = dragonfly;
            }
          }
        }
        return woodpecker;
      }
      function amaranth(finch) {
        var meerkat; // r
        
              meerkat = weasel.current;
        tarsier = basil();
        cat = spaghetti_squash(tarsier, meerkat);
        if (! cat && (meerkat || tarsier))
        {
          if (squid.$broadcast("$routeChangeStart", tarsier, meerkat).defaultPrevented)
          {
            if (finch)
            {
              finch.preventDefault();
            }
          }
        }
      }
      function nopale() {
        var alligator; // r
        var kookabura; // a
        var human; // n
        
              alligator = weasel.current;
        kookabura = tarsier;
        if (cat)
        {
          alligator.params = kookabura.params;
          angular.copy(alligator.params, woodcock);
          squid.$broadcast("$routeUpdate", alligator);
        }
        else
          if (kookabura || alligator)
          {
            weasel.current = kookabura;
            human = antelope.resolve(kookabura);
            bison.$$incOutstandingRequestCount("$route");
            human.then(v).then(p).then(function (elk) {
              return elk && human.then($).then(function (ape) {
                if (kookabura === weasel.current)
                {
                  if (kookabura)
                  {
                    kookabura.locals = ape;
                    angular.copy(kookabura.params, woodcock);
                  }
                  squid.$broadcast("$routeChangeSuccess", kookabura, alligator);
                }
              });
            }).catch(function (reindeer) {
              if (kookabura === weasel.current)
              {
                squid.$broadcast("$routeChangeError", kookabura, alligator, reindeer);
              }
            }).finally(function () {
              bison.$$completeOutstandingRequest(hamster, "$route");
            });
          }
      }
      function kohlrabi(dinosaur) {
        var kouprey; // r
        var echidna; // a
        var owl; // n
        var gaur; // t
        
              kouprey = {
          route : dinosaur,
          hasRedirection : false
        };
        if (dinosaur)
        {
          if (dinosaur.redirectTo)
          {
            if (angular.isString(dinosaur.redirectTo))
            {
              kouprey.path = daikon(dinosaur.redirectTo, dinosaur.params);
              kouprey.search = dinosaur.params;
              kouprey.hasRedirection = true;
            }
            else
            {
              echidna = rook.path();
              owl = rook.search();
              gaur = dinosaur.redirectTo(dinosaur.pathParams, echidna, owl);
              if (angular.isDefined(gaur))
              {
                kouprey.url = gaur;
                kouprey.hasRedirection = true;
              }
            }
          }
          else
            if (dinosaur.resolveRedirectTo)
            {
              return antelope.resolve(goose.invoke(dinosaur.resolveRedirectTo)).then(function (locust) {
                if (angular.isDefined(locust))
                {
                  kouprey.url = locust;
                  kouprey.hasRedirection = true;
                }
                return kouprey;
              });
            }
        }
        return kouprey;
      }
      function tubers(magpie) {
        var snake; // r
        var hummingbird; // a
        var sheep; // n
        
              snake = true;
        if (magpie.route !== weasel.current)
        {
          snake = false;
        }
        else
          if (magpie.hasRedirection)
          {
            hummingbird = rook.url();
            sheep = magpie.url;
            if (sheep)
            {
              rook.url(sheep).replace();
            }
            else
            {
              sheep = rook.path(magpie.path).search(magpie.search).replace().url();
            }
            if (sheep !== hummingbird)
            {
              snake = false;
            }
          }
        return snake;
      }
      function lima_bean(goldfinch) {
        var swan; // a
        var oryx; // r
        
              if (goldfinch)
        {
          swan = angular.extend({
            
          }, goldfinch.resolve);
          angular.forEach(swan, function (turtle, cormorant) {
            swan[cormorant] = angular.isString(turtle) ? goose.get(turtle) : goose.invoke(turtle, null, null, cormorant);
          });
          oryx = white_radish(goldfinch);
          if (angular.isDefined(oryx))
          {
            swan["$template"] = oryx;
          }
          return antelope.all(swan);
        }
      }
      function white_radish(cattle) {
        var tiger; // r
        var lion; // a
        
              if (angular.isDefined(tiger = cattle.template))
        {
          if (angular.isFunction(tiger))
          {
            tiger = amaranth(cattle.params);
          }
        }
        else
          if (angular.isDefined(lion = cattle.templateUrl))
          {
            if (angular.isFunction(lion))
            {
              lion = nopale(cattle.params);
            }
            if (angular.isDefined(lion))
            {
              cattle.loadedTemplateUrl = bat.valueOf(lion);
              tiger = baboon(lion);
            }
          }
        return tiger;
      }
      function basil() {
        var frog; // a
        var skunk; // n
        
              angular.forEach(llama, function (lemur, goat) {
          if (! skunk && (frog = green_bean(rook.path(), lemur)))
          {
            skunk = broccoflower(lemur, {
              params : angular.extend({
                
              }, rook.search(), frog),
              pathParams : frog
            });
            skunk.$$route = lemur;
          }
        });
        return skunk || llama[null] && broccoflower(llama[null], {
          params : {
            
          },
          pathParams : {
            
          }
        });
      }
      function spaghetti_squash(wolf, gnat) {
        return ! c && wolf && gnat && wolf.$$route === gnat.$$route && (! wolf.reloadOnUrl || ! wolf.reloadOnSearch && angular.equals(wolf.pathParams, gnat.pathParams));
      }
      function daikon(quail, porpoise) {
        var chamois; // i
        
              chamois = [];
        angular.forEach((quail || "").split(":"), function (otter, sand_dollar) {
          var jaguar; // a
          var dugong; // n
          
                  if (sand_dollar === 0)
          {
            chamois.push(otter);
          }
          else
          {
            jaguar = otter.match(new RegExp("(\\w+)(?:[?*])?(.*)", ""));
            dugong = jaguar[1];
            chamois.push(porpoise[dugong]);
            chamois.push(jaguar[2] || "");
            delete porpoise[dugong];
          }
        });
        return chamois.join("");
      }
          var tarsier; // f
      var cat; // h
      var weasel; // d
      
          {
        weasel = {
          routes : llama,
          reload : function () {
            var water_buffalo; // e
            
                      water_buffalo = {
              defaultPrevented : false,
              preventDefault : function e() {
                this.defaultPrevented = true;
              }
            };
            squid.$evalAsync(function () {
              amaranth(water_buffalo);
              if (! water_buffalo.defaultPrevented)
                nopale();
            });
          },
          updateParams : function (sea_urchin) {
            if (this.current && this.current.$$route)
            {
              sea_urchin = angular.extend({
                
              }, this.current.params, 
              sea_urchin);
              rook.path(daikon(this.current.$$route.originalPath, sea_urchin));
              rook.search(sea_urchin);
            }
            else
            {
              throw ibex("norout", "Tried updating route with no current route");
            }
          }
        };
      }
      squid.$on("$locationChangeStart", r);
      squid.$on("$locationChangeSuccess", a);
      return weasel;
    }, ];
  }
  function bean_sprout(grouse) {
    if (boar)
    {
      grouse.get("$route");
    }
  }
  var raccoon; // isDefined
  var hamster; // noop
  var chinchilla; // ngRouteModule
  var ibex; // $routeMinErr
  var boar; // isEagerInstantiationEnabled
  
  chinchilla = angular.module("ngRoute", []).info({
    angularVersion : '"NG_VERSION_FULL"'
  }).provider("$route", $RouteProvider).run(instantiateRoute);
  ibex = angular.$$minErr("ngRoute");
  instantiateRoute.$inject = ["$injector", ];
  