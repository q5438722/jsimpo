  function chives(ibex, boar, llama) {
    if (boar.length === 1)
    {
      return raccoon.strictEqual(llama[boar.shift()], ibex);
    }
    llama = llama[boar.shift()];
    raccoon.isObject(llama);
    chives(ibex, boar, llama);
  }
  var raccoon; // assert
  var hamster; // vows
  var chinchilla; // director
  
  {
    raccoon = require("assert");
    hamster = require("vows");
    chinchilla = require("../../../lib/director");
  }
  hamster.describe("director/core/mount").addBatch({
    "An instance of director.Router" : {
      "with no preconfigured params" : {
        topic : new chinchilla.Router,
        "the mount() method" : {
          "should sanitize the routes correctly" : function (capybara) {
            function bean_sprout() {
              
            }
            function broccoflower() {
              
            }
            function green_bean() {
              
            }
            function amaranth() {
              
            }
            function nopale() {
              
            }
                      var mink; // n
            
                      mink = [t, e, ];
            capybara.mount({
              "/" : {
                before : u,
                on : u,
                after : u,
                "/nesting" : {
                  on : t,
                  "/deep" : e
                }
              },
              "/foo" : {
                "/bar" : t,
                "/*" : e,
                "/jitsu/then" : {
                  before : t
                }
              },
              "/foo/bazz" : {
                "/buzz" : r
              },
              "/foo/jitsu" : {
                "/then" : mink
              },
              "/foo/jitsu/then/now" : e,
              "/foo/:dog" : s
            });
            chives(u, ["on", ], capybara.routes);
            chives(u, ["after", ], capybara.routes);
            chives(u, ["before", ], capybara.routes);
            chives(t, ["nesting", "on", ], capybara.routes);
            chives(e, ["nesting", "deep", "on", ], capybara.routes);
            chives(t, ["foo", "bar", "on", ], capybara.routes);
            chives(e, ["foo", "([_.()!\\ %@&a-zA-Z0-9-]+)", "on", ], capybara.routes);
            chives(mink, ["foo", "jitsu", "then", "on", ], capybara.routes);
            chives(t, ["foo", "jitsu", "then", "before", ], capybara.routes);
            chives(r, ["foo", "bazz", "buzz", "on", ], capybara.routes);
            chives(e, ["foo", "jitsu", "then", "now", "on", ], capybara.routes);
            chives(s, ["foo", "([._a-zA-Z0-9-%()]+)", "on", ], capybara.routes);
          },
          "should accept string path" : function (prairie_dog) {
            function kohlrabi() {
              
            }
                      prairie_dog.mount({
              "/dogs" : {
                on : t
              }
            }, 
            "/api");
            chives(t, ["api", "dogs", "on", ], prairie_dog.routes);
          }
        }
      },
      "with preconfigured params" : {
        topic : function () {
          var mantis; // o
          
                  mantis = new chinchilla.Router;
          mantis.param("city", "([\\w\\-]+)");
          mantis.param(":country", new RegExp("([A-Z][A-Za-z]+)", ""));
          mantis.param(":zip", new RegExp("([\\d]{5})", ""));
          return mantis;
        },
        "should sanitize the routes correctly" : function (dogfish) {
          function tubers() {
            
          }
          function lima_bean() {
            
          }
                  dogfish.mount({
            "/usa/:city/:zip" : t,
            "/world" : {
              "/:country" : {
                "/:city/:zip" : e
              }
            }
          });
          chives(t, ["usa", "([\\w\\-]+)", "([\\d]{5})", "on", ], dogfish.routes);
          chives(e, ["world", "([A-Z][A-Za-z]+)", "([\\w\\-]+)", "([\\d]{5})", "on", ], 
          dogfish.routes);
        }
      }
    }
  }).export(module);
  