'use strict';
describe("Binder", function() {
  function childNode(element, index) {
    return jqLite(element[0].childNodes[index]);
  }
  var element;
  beforeEach(function() {
    this.compileToHtml = function(content) {
      var html;
      inject(function($scope, $compile) {
        content = jqLite(content);
        $compile(content)($scope);
        html = sortedHtml(content);
      });
      return html;
    };
  });
  afterEach(function() {
    dealoc(element);
    dealoc(this.element);
  });
  it("BindUpdate", inject(function($rootScope, $compile) {
    $compile('<div ng-init="a=123"/>')($rootScope);
    $rootScope.$digest();
    expect($rootScope.a).toBe(123);
  }));
  it("ExecuteInitialization", inject(function(union, cb) {
    cb('<div ng-init="a=123">')(union);
    expect(union.a).toBe(123);
  }));
  it("ExecuteInitializationStatements", inject(function(diff, cb) {
    cb('<div ng-init="a=123;b=345">')(diff);
    expect(diff.a).toBe(123);
    expect(diff.b).toBe(345);
  }));
  it("ApplyTextBindings", inject(function($rootScope, $compile) {
    element = $compile('<div ng-bind="model.a">x</div>')($rootScope);
    $rootScope.model = {
      a : 123
    };
    $rootScope.$apply();
    expect(element.text()).toBe("123");
  }));
  it("InputTypeButtonActionExecutesInScope", inject(function(e, cb) {
    var child_rendered_first = false;
    element = cb('<input type="button" ng-click="person.save()" value="Apply">')(e);
    e.person = {};
    e.person.save = function() {
      child_rendered_first = true;
    };
    browserTrigger(element, "click");
    expect(child_rendered_first).toBe(true);
  }));
  it("InputTypeButtonActionExecutesInScope2", inject(function(e, cb) {
    var last = "";
    element = cb('<input type="image" ng-click="action()">')(e);
    e.action = function() {
      last = last + "click;";
    };
    expect(last).toEqual("");
    browserTrigger(element, "click");
    expect(last).toEqual("click;");
  }));
  it("ButtonElementActionExecutesInScope", inject(function(e, cb) {
    var child_rendered_first = false;
    element = cb('<button ng-click="person.save()">Apply</button>')(e);
    e.person = {};
    e.person.save = function() {
      child_rendered_first = true;
    };
    browserTrigger(element, "click");
    expect(child_rendered_first).toBe(true);
  }));
  it("RepeaterUpdateBindings", inject(function($rootScope, $compile) {
    var form = $compile("<ul>" + '<LI ng-repeat="item in model.items" ng-bind="item.a"></LI>' + "</ul>")($rootScope);
    var values = [{
      a : "A"
    }, {
      a : "B"
    }];
    $rootScope.model = {
      items : values
    };
    $rootScope.$apply();
    expect(sortedHtml(form)).toBe("<ul>" + "\x3c!-- ngRepeat: item in model.items --\x3e" + '<li ng-bind="item.a" ng-repeat="item in model.items">A</li>' + "\x3c!-- end ngRepeat: item in model.items --\x3e" + '<li ng-bind="item.a" ng-repeat="item in model.items">B</li>' + "\x3c!-- end ngRepeat: item in model.items --\x3e" + "</ul>");
    values.unshift({
      a : "C"
    });
    $rootScope.$apply();
    expect(sortedHtml(form)).toBe("<ul>" + "\x3c!-- ngRepeat: item in model.items --\x3e" + '<li ng-bind="item.a" ng-repeat="item in model.items">C</li>' + "\x3c!-- end ngRepeat: item in model.items --\x3e" + '<li ng-bind="item.a" ng-repeat="item in model.items">A</li>' + "\x3c!-- end ngRepeat: item in model.items --\x3e" + '<li ng-bind="item.a" ng-repeat="item in model.items">B</li>' + "\x3c!-- end ngRepeat: item in model.items --\x3e" + "</ul>");
    values.shift();
    $rootScope.$apply();
    expect(sortedHtml(form)).toBe("<ul>" + "\x3c!-- ngRepeat: item in model.items --\x3e" + '<li ng-bind="item.a" ng-repeat="item in model.items">A</li>' + "\x3c!-- end ngRepeat: item in model.items --\x3e" + '<li ng-bind="item.a" ng-repeat="item in model.items">B</li>' + "\x3c!-- end ngRepeat: item in model.items --\x3e" + "</ul>");
    values.shift();
    values.shift();
    $rootScope.$apply();
  }));
  it("RepeaterContentDoesNotBind", inject(function($rootScope, $compile) {
    element = $compile("<ul>" + '<LI ng-repeat="item in model.items"><span ng-bind="item.a"></span></li>' + "</ul>")($rootScope);
    $rootScope.model = {
      items : [{
        a : "A"
      }]
    };
    $rootScope.$apply();
    expect(sortedHtml(element)).toBe("<ul>" + "\x3c!-- ngRepeat: item in model.items --\x3e" + '<li ng-repeat="item in model.items"><span ng-bind="item.a">A</span></li>' + "\x3c!-- end ngRepeat: item in model.items --\x3e" + "</ul>");
  }));
  it("DoNotOverwriteCustomAction", function() {
    var html = this.compileToHtml('<input type="submit" value="Save" action="foo();">');
    expect(html.indexOf('action="foo();"')).toBeGreaterThan(0);
  });
  it("ItShouldRemoveExtraChildrenWhenIteratingOverHash", inject(function($rootScope, $compile) {
    element = $compile('<div><div ng-repeat="i in items">{{i}}</div></div>')($rootScope);
    var items = {};
    $rootScope.items = items;
    $rootScope.$apply();
    expect(element[0].childNodes.length).toEqual(1);
    items.name = "misko";
    $rootScope.$apply();
    expect(element[0].childNodes.length).toEqual(3);
    delete items.name;
    $rootScope.$apply();
    expect(element[0].childNodes.length).toEqual(1);
  }));
  it("IfAttrBindingThrowsErrorDecorateTheAttribute", function() {
    module(function(instance) {
      instance.mode("log");
    });
    inject(function($rootScope, data, $compile) {
      $compile('<div attr="before {{error.throw()}} after"></div>', null, true)($rootScope);
      var messages = data.errors;
      var count = 0;
      $rootScope.error = {
        throw : function() {
          throw new Error("ErrorMsg" + ++count);
        }
      };
      $rootScope.$apply();
      expect(messages.length).not.toEqual(0);
      expect(messages.shift()).toMatch(/ErrorMsg1/);
      messages.length = 0;
      $rootScope.error["throw"] = function() {
        return "X";
      };
      $rootScope.$apply();
      expect(messages.length).toMatch("0");
    });
  });
  it("NestedRepeater", inject(function($rootScope, $compile) {
    element = $compile("<div>" + '<div ng-repeat="m in model" name="{{m.name}}">' + '<ul name="{{i}}" ng-repeat="i in m.item"></ul>' + "</div>" + "</div>")($rootScope);
    $rootScope.model = [{
      name : "a",
      item : ["a1", "a2"]
    }, {
      name : "b",
      item : ["b1", "b2"]
    }];
    $rootScope.$apply();
    expect(sortedHtml(element)).toBe("<div>" + "\x3c!-- ngRepeat: m in model --\x3e" + '<div name="a" ng-repeat="m in model">' + "\x3c!-- ngRepeat: i in m.item --\x3e" + '<ul name="a1" ng-repeat="i in m.item"></ul>' + "\x3c!-- end ngRepeat: i in m.item --\x3e" + '<ul name="a2" ng-repeat="i in m.item"></ul>' + "\x3c!-- end ngRepeat: i in m.item --\x3e" + "</div>" + "\x3c!-- end ngRepeat: m in model --\x3e" + '<div name="b" ng-repeat="m in model">' + "\x3c!-- ngRepeat: i in m.item --\x3e" + '<ul name="b1" ng-repeat="i in m.item"></ul>' + 
    "\x3c!-- end ngRepeat: i in m.item --\x3e" + '<ul name="b2" ng-repeat="i in m.item"></ul>' + "\x3c!-- end ngRepeat: i in m.item --\x3e" + "</div>" + "\x3c!-- end ngRepeat: m in model --\x3e" + "</div>");
  }));
  it("HideBindingExpression", inject(function($rootScope, $compile) {
    element = $compile('<div ng-hide="hidden === 3"/>')($rootScope);
    $rootScope.hidden = 3;
    $rootScope.$apply();
    assertHidden(element);
    $rootScope.hidden = 2;
    $rootScope.$apply();
    assertVisible(element);
  }));
  it("HideBinding", inject(function($rootScope, $compile) {
    element = $compile('<div ng-hide="hidden"/>')($rootScope);
    $rootScope.hidden = "true";
    $rootScope.$apply();
    assertHidden(element);
    $rootScope.hidden = "false";
    $rootScope.$apply();
    assertHidden(element);
    $rootScope.hidden = 0;
    $rootScope.$apply();
    assertVisible(element);
    $rootScope.hidden = false;
    $rootScope.$apply();
    assertVisible(element);
    $rootScope.hidden = "";
    $rootScope.$apply();
    assertVisible(element);
  }));
  it("ShowBinding", inject(function($rootScope, $compile) {
    element = $compile('<div ng-show="show"/>')($rootScope);
    $rootScope.show = "true";
    $rootScope.$apply();
    assertVisible(element);
    $rootScope.show = "false";
    $rootScope.$apply();
    assertVisible(element);
    $rootScope.show = false;
    $rootScope.$apply();
    assertHidden(element);
    $rootScope.show = false;
    $rootScope.$apply();
    assertHidden(element);
    $rootScope.show = "";
    $rootScope.$apply();
    assertHidden(element);
  }));
  it("BindClass", inject(function($rootScope, $compile) {
    element = $compile('<div ng-class="clazz"/>')($rootScope);
    $rootScope.clazz = "testClass";
    $rootScope.$apply();
    expect(sortedHtml(element)).toBe('<div class="testClass" ng-class="clazz"></div>');
    $rootScope.clazz = ["a", "b"];
    $rootScope.$apply();
    expect(sortedHtml(element)).toBe('<div class="a b" ng-class="clazz"></div>');
  }));
  it("BindClassEvenOdd", inject(function($rootScope, $compile) {
    element = $compile("<div>" + '<div ng-repeat="i in [0,1]" ng-class-even="\'e\'" ng-class-odd="\'o\'"></div>' + "</div>")($rootScope);
    $rootScope.$apply();
    var parent = jqLite(element[0].childNodes[1]);
    var d2 = jqLite(element[0].childNodes[3]);
    expect(parent.hasClass("o")).toBeTruthy();
    expect(d2.hasClass("e")).toBeTruthy();
    expect(sortedHtml(element)).toBe("<div>" + "\x3c!-- ngRepeat: i in [0,1] --\x3e" + '<div class="o" ng-class-even="\'e\'" ng-class-odd="\'o\'" ng-repeat="i in [0,1]"></div>' + "\x3c!-- end ngRepeat: i in [0,1] --\x3e" + '<div class="e" ng-class-even="\'e\'" ng-class-odd="\'o\'" ng-repeat="i in [0,1]"></div>' + "\x3c!-- end ngRepeat: i in [0,1] --\x3e" + "</div>");
  }));
  it("BindStyle", inject(function($rootScope, $compile) {
    element = $compile('<div ng-style="style"/>')($rootScope);
    $rootScope.$eval('style={height: "10px"}');
    $rootScope.$apply();
    expect(element.css("height")).toBe("10px");
    $rootScope.$eval("style={}");
    $rootScope.$apply();
  }));
  it("ActionOnAHrefThrowsError", function() {
    module(function(instance) {
      instance.mode("log");
    });
    inject(function(e, convertedObject, cb) {
      var script = cb('<a ng-click="action()">Add Phone</a>')(e);
      e.action = function() {
        throw new Error("MyError");
      };
      browserTrigger(script, "click");
      expect(convertedObject.errors[0]).toMatch(/MyError/);
    });
  });
  it("ShouldIgnoreVbNonBindable", inject(function($rootScope, $compile) {
    element = $compile("<div>{{a}}" + "<div ng-non-bindable>{{a}}</div>" + "<div ng-non-bindable=''>{{b}}</div>" + "<div ng-non-bindable='true'>{{c}}</div>" + "</div>")($rootScope);
    $rootScope.a = 123;
    $rootScope.$apply();
    expect(element.text()).toBe("123{{a}}{{b}}{{c}}");
  }));
  it("ShouldTemplateBindPreElements", inject(function($rootScope, $compile) {
    element = $compile("<pre>Hello {{name}}!</pre>")($rootScope);
    $rootScope.name = "World";
    $rootScope.$apply();
    expect(sortedHtml(element)).toBe("<pre>Hello World!</pre>");
  }));
  it("FillInOptionValueWhenMissing", inject(function($rootScope, $compile) {
    element = $compile('<select ng-model="foo">' + '<option selected="true">{{a}}</option>' + '<option value="">{{b}}</option>' + "<option>C</option>" + "</select>")($rootScope);
    $rootScope.a = "A";
    $rootScope.b = "B";
    $rootScope.$apply();
    var optionA = childNode(element, 0);
    var optionB = childNode(element, 1);
    var optionC = childNode(element, 2);
    expect(optionA.attr("value")).toEqual("A");
    expect(optionA.text()).toEqual("A");
    expect(optionB.attr("value")).toEqual("");
    expect(optionB.text()).toEqual("B");
    expect(optionC.attr("value")).toEqual("C");
    expect(optionC.text()).toEqual("C");
  }));
  it("ItShouldSelectTheCorrectRadioBox", inject(function(e, cb, proposalList, result) {
    element = cb("<div>" + '<input type="radio" ng-model="sex" value="female">' + '<input type="radio" ng-model="sex" value="male">' + "</div>")(e);
    jqLite(result[0].body).append(proposalList.append(element));
    var input = jqLite(element[0].childNodes[0]);
    var female = jqLite(element[0].childNodes[1]);
    browserTrigger(input);
    expect(e.sex).toBe("female");
    expect(input[0].checked).toBe(true);
    expect(female[0].checked).toBe(false);
    expect(input.val()).toBe("female");
    browserTrigger(female);
    expect(e.sex).toBe("male");
    expect(input[0].checked).toBe(false);
    expect(female[0].checked).toBe(true);
    expect(female.val()).toBe("male");
  }));
  it("ItShouldRepeatOnHashes", inject(function($rootScope, $compile) {
    element = $compile("<ul>" + '<li ng-repeat="(k,v) in {a:0,b:1}" ng-bind="k + v"></li>' + "</ul>")($rootScope);
    $rootScope.$apply();
    expect(sortedHtml(element)).toBe("<ul>" + "\x3c!-- ngRepeat: (k,v) in {a:0,b:1} --\x3e" + '<li ng-bind="k + v" ng-repeat="(k,v) in {a:0,b:1}">a0</li>' + "\x3c!-- end ngRepeat: (k,v) in {a:0,b:1} --\x3e" + '<li ng-bind="k + v" ng-repeat="(k,v) in {a:0,b:1}">b1</li>' + "\x3c!-- end ngRepeat: (k,v) in {a:0,b:1} --\x3e" + "</ul>");
  }));
  it("ItShouldFireChangeListenersBeforeUpdate", inject(function($rootScope, $compile) {
    element = $compile('<div ng-bind="name"></div>')($rootScope);
    $rootScope.name = "";
    $rootScope.$watch("watched", function() {
      $rootScope.name = 123;
    });
    $rootScope.watched = "change";
    $rootScope.$apply();
    expect($rootScope.name).toBe(123);
    expect(sortedHtml(element)).toBe('<div ng-bind="name">123</div>');
  }));
  it("ItShouldHandleMultilineBindings", inject(function($rootScope, $compile) {
    element = $compile("<div>{{\n 1 \n + \n 2 \n}}</div>")($rootScope);
    $rootScope.$apply();
    expect(element.text()).toBe("3");
  }));
});

