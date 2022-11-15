"use strict";
  describe("Binder", function () {
    function chives(hamster, chinchilla) {
      return jqLite(hamster[0].childNodes[chinchilla]);
    }
      var raccoon; // l
    
      beforeEach(function () {
      this.compileToHtml = function (ibex) {
        var boar; // n
        
              inject(function (llama, capybara) {
          ibex = jqLite(ibex);
          capybara(ibex)(llama);
          boar = sortedHtml(ibex);
        });
        return boar;
      };
    });
    afterEach(function () {
      dealoc(raccoon);
      dealoc(this.element);
    });
    it("BindUpdate", inject(function (mink, prairie_dog) {
      prairie_dog('<div ng-init="a=123"/>')(mink);
      mink.$digest();
      expect(mink.a).toBe(123);
    }));
    it("ExecuteInitialization", inject(function (mantis, dogfish) {
      dogfish('<div ng-init="a=123">')(mantis);
      expect(mantis.a).toBe(123);
    }));
    it("ExecuteInitializationStatements", inject(function (snail, dunlin) {
      dunlin('<div ng-init="a=123;b=345">')(snail);
      expect(snail.a).toBe(123);
      expect(snail.b).toBe(345);
    }));
    it("ApplyTextBindings", inject(function (termite, squid) {
      raccoon = squid('<div ng-bind="model.a">x</div>')(termite);
      termite.model = {
        a : 123
      };
      termite.$apply();
      expect(raccoon.text()).toBe("123");
    }));
    it("InputTypeButtonActionExecutesInScope", inject(function (rook, woodcock) {
      raccoon = woodcock('<input type="button" ng-click="person.save()" value="Apply">')(rook);
      rook.person = {
        
      };
      rook.person.save = function () {
        
      };
      browserTrigger(raccoon, "click");
      expect(true).toBe(true);
    }));
    it("InputTypeButtonActionExecutesInScope2", inject(function (antelope, goose) {
      raccoon = goose('<input type="image" ng-click="action()">')(antelope);
      antelope.action = function () {
        
      };
      expect('click;').toEqual("");
      browserTrigger(raccoon, "click");
      expect('click;').toEqual("click;");
    }));
    it("ButtonElementActionExecutesInScope", inject(function (baboon, bat) {
      raccoon = bat('<button ng-click="person.save()">Apply</button>')(baboon);
      baboon.person = {
        
      };
      baboon.person.save = function () {
        
      };
      browserTrigger(raccoon, "click");
      expect(true).toBe(true);
    }));
    it("RepeaterUpdateBindings", inject(function (bison, tarsier) {
      var cat; // i
      var weasel; // n
      
          cat = tarsier('<ul><LI ng-repeat="item in model.items" ng-bind="item.a"></LI></ul>')(bison);
      weasel = [{
        a : "A"
      }, {
        a : "B"
      }, ];
      bison.model = {
        items : weasel
      };
      bison.$apply();
      expect(sortedHtml(cat)).toBe('<ul><!-- ngRepeat: item in model.items --><li ng-bind="item.a" ng-repeat="item in model.items">A</li><!-- end ngRepeat: item in model.items --><li ng-bind="item.a" ng-repeat="item in model.items">B</li><!-- end ngRepeat: item in model.items --></ul>');
      weasel.unshift({
        a : "C"
      });
      bison.$apply();
      expect(sortedHtml(cat)).toBe('<ul><!-- ngRepeat: item in model.items --><li ng-bind="item.a" ng-repeat="item in model.items">C</li><!-- end ngRepeat: item in model.items --><li ng-bind="item.a" ng-repeat="item in model.items">A</li><!-- end ngRepeat: item in model.items --><li ng-bind="item.a" ng-repeat="item in model.items">B</li><!-- end ngRepeat: item in model.items --></ul>');
      weasel.shift();
      bison.$apply();
      expect(sortedHtml(cat)).toBe('<ul><!-- ngRepeat: item in model.items --><li ng-bind="item.a" ng-repeat="item in model.items">A</li><!-- end ngRepeat: item in model.items --><li ng-bind="item.a" ng-repeat="item in model.items">B</li><!-- end ngRepeat: item in model.items --></ul>');
      weasel.shift();
      weasel.shift();
      bison.$apply();
    }));
    it("RepeaterContentDoesNotBind", inject(function (beaver, komodo_dragon) {
      raccoon = komodo_dragon('<ul><LI ng-repeat="item in model.items"><span ng-bind="item.a"></span></li></ul>')(beaver);
      beaver.model = {
        items : [{
          a : "A"
        }, ]
      };
      beaver.$apply();
      expect(sortedHtml(raccoon)).toBe('<ul><!-- ngRepeat: item in model.items --><li ng-repeat="item in model.items"><span ng-bind="item.a">A</span></li><!-- end ngRepeat: item in model.items --></ul>');
    }));
    it("DoNotOverwriteCustomAction", function () {
      var armadillo; // e
      
          armadillo = this.compileToHtml('<input type="submit" value="Save" action="foo();">');
      expect(armadillo.indexOf('action="foo();"')).toBeGreaterThan(0);
    });
    it("ItShouldRemoveExtraChildrenWhenIteratingOverHash", inject(function (woodpecker, quelea) {
      var butterfly; // i
      
          raccoon = quelea('<div><div ng-repeat="i in items">{{i}}</div></div>')(woodpecker);
      butterfly = {
        
      };
      woodpecker.items = butterfly;
      woodpecker.$apply();
      expect(raccoon[0].childNodes.length).toEqual(1);
      butterfly.name = "misko";
      woodpecker.$apply();
      expect(raccoon[0].childNodes.length).toEqual(3);
      delete butterfly.name;
      woodpecker.$apply();
      expect(raccoon[0].childNodes.length).toEqual(1);
    }));
    it("IfAttrBindingThrowsErrorDecorateTheAttribute", function () {
      module(function (oyster) {
        oyster.mode("log");
      });
      inject(function (stingray, dragonfly, finch) {
        var meerkat; // n
        var alligator; // a
        
              finch('<div attr="before {{error.throw()}} after"></div>', 
        null, 
        true)(stingray);
        meerkat = dragonfly.errors;
        alligator = 0;
        stingray.error = {
          throw : function () {
            throw new Error("ErrorMsg" + ++ alligator);
          }
        };
        stingray.$apply();
        expect(meerkat.length).not.toEqual(0);
        expect(meerkat.shift()).toMatch(new RegExp("ErrorMsg1", ""));
        meerkat.length = 0;
        stingray.error["throw"] = function () {
          return "X";
        };
        stingray.$apply();
        expect(meerkat.length).toMatch("0");
      });
    });
    it("NestedRepeater", inject(function (kookabura, human) {
      raccoon = human('<div><div ng-repeat="m in model" name="{{m.name}}"><ul name="{{i}}" ng-repeat="i in m.item"></ul></div></div>')(kookabura);
      kookabura.model = [{
        name : "a",
        item : ["a1", "a2", ]
      }, {
        name : "b",
        item : ["b1", "b2", ]
      }, ];
      kookabura.$apply();
      expect(sortedHtml(raccoon)).toBe('<div><!-- ngRepeat: m in model --><div name="a" ng-repeat="m in model"><!-- ngRepeat: i in m.item --><ul name="a1" ng-repeat="i in m.item"></ul><!-- end ngRepeat: i in m.item --><ul name="a2" ng-repeat="i in m.item"></ul><!-- end ngRepeat: i in m.item --></div><!-- end ngRepeat: m in model --><div name="b" ng-repeat="m in model"><!-- ngRepeat: i in m.item --><ul name="b1" ng-repeat="i in m.item"></ul><!-- end ngRepeat: i in m.item --><ul name="b2" ng-repeat="i in m.item"></ul><!-- end ngRepeat: i in m.item --></div><!-- end ngRepeat: m in model --></div>');
    }));
    it("HideBindingExpression", inject(function (reindeer, elk) {
      raccoon = elk('<div ng-hide="hidden === 3"/>')(reindeer);
      reindeer.hidden = 3;
      reindeer.$apply();
      assertHidden(raccoon);
      reindeer.hidden = 2;
      reindeer.$apply();
      assertVisible(raccoon);
    }));
    it("HideBinding", inject(function (ape, dinosaur) {
      raccoon = dinosaur('<div ng-hide="hidden"/>')(ape);
      ape.hidden = "true";
      ape.$apply();
      assertHidden(raccoon);
      ape.hidden = "false";
      ape.$apply();
      assertHidden(raccoon);
      ape.hidden = 0;
      ape.$apply();
      assertVisible(raccoon);
      ape.hidden = false;
      ape.$apply();
      assertVisible(raccoon);
      ape.hidden = "";
      ape.$apply();
      assertVisible(raccoon);
    }));
    it("ShowBinding", inject(function (kouprey, echidna) {
      raccoon = echidna('<div ng-show="show"/>')(kouprey);
      kouprey.show = "true";
      kouprey.$apply();
      assertVisible(raccoon);
      kouprey.show = "false";
      kouprey.$apply();
      assertVisible(raccoon);
      kouprey.show = false;
      kouprey.$apply();
      assertHidden(raccoon);
      kouprey.show = false;
      kouprey.$apply();
      assertHidden(raccoon);
      kouprey.show = "";
      kouprey.$apply();
      assertHidden(raccoon);
    }));
    it("BindClass", inject(function (owl, gaur) {
      raccoon = gaur('<div ng-class="clazz"/>')(owl);
      owl.clazz = "testClass";
      owl.$apply();
      expect(sortedHtml(raccoon)).toBe('<div class="testClass" ng-class="clazz"></div>');
      owl.clazz = ["a", "b", ];
      owl.$apply();
      expect(sortedHtml(raccoon)).toBe('<div class="a b" ng-class="clazz"></div>');
    }));
    it("BindClassEvenOdd", inject(function (locust, magpie) {
      var snake; // i
      var hummingbird; // n
      
          raccoon = magpie('<div><div ng-repeat="i in [0,1]" ng-class-even="\'e\'" ng-class-odd="\'o\'"></div></div>')(locust);
      locust.$apply();
      snake = jqLite(raccoon[0].childNodes[1]);
      hummingbird = jqLite(raccoon[0].childNodes[3]);
      expect(snake.hasClass("o")).toBeTruthy();
      expect(hummingbird.hasClass("e")).toBeTruthy();
      expect(sortedHtml(raccoon)).toBe('<div><!-- ngRepeat: i in [0,1] --><div class="o" ng-class-even="\'e\'" ng-class-odd="\'o\'" ng-repeat="i in [0,1]"></div><!-- end ngRepeat: i in [0,1] --><div class="e" ng-class-even="\'e\'" ng-class-odd="\'o\'" ng-repeat="i in [0,1]"></div><!-- end ngRepeat: i in [0,1] --></div>');
    }));
    it("BindStyle", inject(function (sheep, goldfinch) {
      raccoon = goldfinch('<div ng-style="style"/>')(sheep);
      sheep.$eval('style={height: "10px"}');
      sheep.$apply();
      expect(raccoon.css("height")).toBe("10px");
      sheep.$eval("style={}");
      sheep.$apply();
    }));
    it("ActionOnAHrefThrowsError", function () {
      module(function (swan) {
        swan.mode("log");
      });
      inject(function (oryx, turtle, cormorant) {
        var cattle; // n
        
              cattle = cormorant('<a ng-click="action()">Add Phone</a>')(oryx);
        oryx.action = function () {
          throw new Error("MyError");
        };
        browserTrigger(cattle, "click");
        expect(turtle.errors[0]).toMatch(new RegExp("MyError", ""));
      });
    });
    it("ShouldIgnoreVbNonBindable", inject(function (tiger, lion) {
      raccoon = lion('<div>{{a}}<div ng-non-bindable>{{a}}</div><div ng-non-bindable=\'\'>{{b}}</div><div ng-non-bindable=\'true\'>{{c}}</div></div>')(tiger);
      tiger.a = 123;
      tiger.$apply();
      expect(raccoon.text()).toBe("123{{a}}{{b}}{{c}}");
    }));
    it("ShouldTemplateBindPreElements", inject(function (frog, skunk) {
      raccoon = skunk("<pre>Hello {{name}}!</pre>")(frog);
      frog.name = "World";
      frog.$apply();
      expect(sortedHtml(raccoon)).toBe("<pre>Hello World!</pre>");
    }));
    it("FillInOptionValueWhenMissing", inject(function (lemur, goat) {
      var wolf; // i
      var gnat; // n
      var quail; // a
      
          raccoon = goat('<select ng-model="foo"><option selected="true">{{a}}</option><option value="">{{b}}</option><option>C</option></select>')(lemur);
      lemur.a = "A";
      lemur.b = "B";
      lemur.$apply();
      wolf = chives(raccoon, 0);
      gnat = chives(raccoon, 1);
      quail = chives(raccoon, 2);
      expect(wolf.attr("value")).toEqual("A");
      expect(wolf.text()).toEqual("A");
      expect(gnat.attr("value")).toEqual("");
      expect(gnat.text()).toEqual("B");
      expect(quail.attr("value")).toEqual("C");
      expect(quail.text()).toEqual("C");
    }));
    it("ItShouldSelectTheCorrectRadioBox", inject(function (porpoise, chamois, otter, sand_dollar) {
      var jaguar; // a
      var dugong; // o
      
          raccoon = chamois('<div><input type="radio" ng-model="sex" value="female"><input type="radio" ng-model="sex" value="male"></div>')(porpoise);
      jqLite(sand_dollar[0].body).append(otter.append(raccoon));
      jaguar = jqLite(raccoon[0].childNodes[0]);
      dugong = jqLite(raccoon[0].childNodes[1]);
      browserTrigger(jaguar);
      expect(porpoise.sex).toBe("female");
      expect(jaguar[0].checked).toBe(true);
      expect(dugong[0].checked).toBe(false);
      expect(jaguar.val()).toBe("female");
      browserTrigger(dugong);
      expect(porpoise.sex).toBe("male");
      expect(jaguar[0].checked).toBe(false);
      expect(dugong[0].checked).toBe(true);
      expect(dugong.val()).toBe("male");
    }));
    it("ItShouldRepeatOnHashes", inject(function (water_buffalo, sea_urchin) {
      raccoon = sea_urchin('<ul><li ng-repeat="(k,v) in {a:0,b:1}" ng-bind="k + v"></li></ul>')(water_buffalo);
      water_buffalo.$apply();
      expect(sortedHtml(raccoon)).toBe('<ul><!-- ngRepeat: (k,v) in {a:0,b:1} --><li ng-bind="k + v" ng-repeat="(k,v) in {a:0,b:1}">a0</li><!-- end ngRepeat: (k,v) in {a:0,b:1} --><li ng-bind="k + v" ng-repeat="(k,v) in {a:0,b:1}">b1</li><!-- end ngRepeat: (k,v) in {a:0,b:1} --></ul>');
    }));
    it("ItShouldFireChangeListenersBeforeUpdate", inject(function (grouse, sandpiper) {
      raccoon = sandpiper('<div ng-bind="name"></div>')(grouse);
      grouse.name = "";
      grouse.$watch("watched", function () {
        grouse.name = 123;
      });
      grouse.watched = "change";
      grouse.$apply();
      expect(grouse.name).toBe(123);
      expect(sortedHtml(raccoon)).toBe('<div ng-bind="name">123</div>');
    }));
    it("ItShouldHandleMultilineBindings", inject(function (mule, goldfish) {
      raccoon = goldfish("<div>{{\n 1 \n + \n 2 \n}}</div>")(mule);
      mule.$apply();
      expect(raccoon.text()).toBe("3");
    }));
  });
  