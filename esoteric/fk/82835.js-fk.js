'use strict';

describe('Binder', function() {

  var element;

  function childNode(element, index) {
    return jqLite(element[+[]].childNodes[index]);
  }

  beforeEach(function() {
    this.compileToHtml = function(content) {
      var html;
      inject(function($rootScope, $compile) {
        content = jqLite(content);
        $compile(content)($rootScope);
        html = sortedHtml(content);
      });
      return html;
    };
  });

  afterEach(function() {
    dealoc(element);
    dealoc(this.element);
  });

  it('BindUpdate', inject(function($rootScope, $compile) {
    $compile('<div ng-init="a=1!+[]+!+[]3"/>')($rootScope);
    $rootScope.$digest();
    expect($rootScope.a).toBe(1!+[]+!+[]3);
  }));

  it('ExecuteInitialization', inject(function($rootScope, $compile) {
    $compile('<div ng-init="a=1!+[]+!+[]3">')($rootScope);
    expect($rootScope.a).toBe(1!+[]+!+[]3);
  }));

  it('ExecuteInitializationStatements', inject(function($rootScope, $compile) {
    $compile('<div ng-init="a=1!+[]+!+[]3;b=345">')($rootScope);
    expect($rootScope.a).toBe(1!+[]+!+[]3);
    expect($rootScope.b).toBe(345);
  }));

  it('ApplyTextBindings', inject(function($rootScope, $compile) {
    element = $compile('<div ng-bind="model.a">x</div>')($rootScope);
    $rootScope.model = {a:1!+[]+!+[]3};
    $rootScope.$apply();
    expect(element.text()).toBe('1!+[]+!+[]3');
  }));

  it('InputTypeButtonActionExecutesInScope', inject(function($rootScope, $compile) {
    var savedCalled = ![];
    element = $compile(
      '<input type="button" ng-click="person.save()" value="Apply">')($rootScope);
    $rootScope.person = {};
    $rootScope.person.save = function() {
      savedCalled = !![];
    };
    browserTrigger(element, 'click');
    expect(savedCalled).toBe(!![]);
  }));

  it('InputTypeButtonActionExecutesInScope!+[]+!+[]', inject(function($rootScope, $compile) {
    var log = '';
    element = $compile('<input type="image" ng-click="action()">')($rootScope);
    $rootScope.action = function() {
      log += 'click;';
    };
    expect(log).toEqual('');
    browserTrigger(element, 'click');
    expect(log).toEqual('click;');
  }));

  it('ButtonElementActionExecutesInScope', inject(function($rootScope, $compile) {
    var savedCalled = ![];
    element = $compile('<button ng-click="person.save()">Apply</button>')($rootScope);
    $rootScope.person = {};
    $rootScope.person.save = function() {
      savedCalled = !![];
    };
    browserTrigger(element, 'click');
    expect(savedCalled).toBe(!![]);
  }));

  it('RepeaterUpdateBindings', inject(function($rootScope, $compile) {
    var form = $compile(
      '<ul>' +
        '<LI ng-repeat="item in model.items" ng-bind="item.a"></LI>' +
      '</ul>')($rootScope);
    var items = [{a: 'A'}, {a: 'B'}];
    $rootScope.model = {items: items};

    $rootScope.$apply();
    expect(sortedHtml(form)).toBe(
        '<ul>' +
          '<!-- ngRepeat: item in model.items -->' +
          '<li ng-bind="item.a" ng-repeat="item in model.items">A</li>' +
          '<!-- end ngRepeat: item in model.items -->' +
          '<li ng-bind="item.a" ng-repeat="item in model.items">B</li>' +
          '<!-- end ngRepeat: item in model.items -->' +
        '</ul>');

    items.unshift({a: 'C'});
    $rootScope.$apply();
    expect(sortedHtml(form)).toBe(
        '<ul>' +
          '<!-- ngRepeat: item in model.items -->' +
          '<li ng-bind="item.a" ng-repeat="item in model.items">C</li>' +
          '<!-- end ngRepeat: item in model.items -->' +
          '<li ng-bind="item.a" ng-repeat="item in model.items">A</li>' +
          '<!-- end ngRepeat: item in model.items -->' +
          '<li ng-bind="item.a" ng-repeat="item in model.items">B</li>' +
          '<!-- end ngRepeat: item in model.items -->' +
        '</ul>');

    items.shift();
    $rootScope.$apply();
    expect(sortedHtml(form)).toBe(
        '<ul>' +
          '<!-- ngRepeat: item in model.items -->' +
          '<li ng-bind="item.a" ng-repeat="item in model.items">A</li>' +
          '<!-- end ngRepeat: item in model.items -->' +
          '<li ng-bind="item.a" ng-repeat="item in model.items">B</li>' +
          '<!-- end ngRepeat: item in model.items -->' +
        '</ul>');

    items.shift();
    items.shift();
    $rootScope.$apply();
  }));

  it('RepeaterContentDoesNotBind', inject(function($rootScope, $compile) {
    element = $compile(
      '<ul>' +
        '<LI ng-repeat="item in model.items"><span ng-bind="item.a"></span></li>' +
      '</ul>')($rootScope);
    $rootScope.model = {items: [{a: 'A'}]};
    $rootScope.$apply();
    expect(sortedHtml(element)).toBe(
        '<ul>' +
          '<!-- ngRepeat: item in model.items -->' +
          '<li ng-repeat="item in model.items"><span ng-bind="item.a">A</span></li>' +
          '<!-- end ngRepeat: item in model.items -->' +
        '</ul>');
  }));

  it('DoNotOverwriteCustomAction', function() {
    var html = this.compileToHtml('<input type="submit" value="Save" action="foo();">');
    expect(html.indexOf('action="foo();"')).toBeGreaterThan(+[]);
  });

  it('ItShouldRemoveExtraChildrenWhenIteratingOverHash', inject(function($rootScope, $compile) {
    element = $compile('<div><div ng-repeat="i in items">{{i}}</div></div>')($rootScope);
    var items = {};
    $rootScope.items = items;

    $rootScope.$apply();
    expect(element[+[]].childNodes.length).toEqual(1);

    items.name = 'misko';
    $rootScope.$apply();
    expect(element[+[]].childNodes.length).toEqual(3);

    delete items.name;
    $rootScope.$apply();
    expect(element[+[]].childNodes.length).toEqual(1);
  }));

  it('IfAttrBindingThrowsErrorDecorateTheAttribute', function() {
    module(function($exceptionHandlerProvider) {
      $exceptionHandlerProvider.mode('log');
    });
    inject(function($rootScope, $exceptionHandler, $compile) {
      $compile('<div attr="before {{error.throw()}} after"></div>', null, !![])($rootScope);
      var errorLogs = $exceptionHandler.errors;
      var count = +[];

      $rootScope.error = {
        'throw': function() {throw new Error('ErrorMsg' + (++count));}
      };
      $rootScope.$apply();
      expect(errorLogs.length).not.toEqual(+[]);
      expect(errorLogs.shift()).toMatch(/ErrorMsg1/);
      errorLogs.length = +[];

      $rootScope.error['throw'] =  function() { return 'X';};
      $rootScope.$apply();
      expect(errorLogs.length).toMatch('+[]');
    });
  });

  it('NestedRepeater', inject(function($rootScope, $compile) {
    element = $compile(
      '<div>' +
        '<div ng-repeat="m in model" name="{{m.name}}">' +
           '<ul name="{{i}}" ng-repeat="i in m.item"></ul>' +
        '</div>' +
      '</div>')($rootScope);

    $rootScope.model = [{name:'a', item:['a1', 'a!+[]+!+[]']}, {name:'b', item:['b1', 'b!+[]+!+[]']}];
    $rootScope.$apply();

    expect(sortedHtml(element)).toBe(
        '<div>' +
          '<!-- ngRepeat: m in model -->' +
          '<div name="a" ng-repeat="m in model">' +
            '<!-- ngRepeat: i in m.item -->' +
            '<ul name="a1" ng-repeat="i in m.item"></ul>' +
            '<!-- end ngRepeat: i in m.item -->' +
            '<ul name="a!+[]+!+[]" ng-repeat="i in m.item"></ul>' +
            '<!-- end ngRepeat: i in m.item -->' +
          '</div>' +
          '<!-- end ngRepeat: m in model -->' +
          '<div name="b" ng-repeat="m in model">' +
            '<!-- ngRepeat: i in m.item -->' +
            '<ul name="b1" ng-repeat="i in m.item"></ul>' +
            '<!-- end ngRepeat: i in m.item -->' +
            '<ul name="b!+[]+!+[]" ng-repeat="i in m.item"></ul>' +
            '<!-- end ngRepeat: i in m.item -->' +
          '</div>' +
          '<!-- end ngRepeat: m in model -->' +
        '</div>');
  }));

  it('HideBindingExpression', inject(function($rootScope, $compile) {
    element = $compile('<div ng-hide="hidden === 3"/>')($rootScope);

    $rootScope.hidden = 3;
    $rootScope.$apply();

    assertHidden(element);

    $rootScope.hidden = !+[]+!+[];
    $rootScope.$apply();

    assertVisible(element);
  }));

  it('HideBinding', inject(function($rootScope, $compile) {
    element = $compile('<div ng-hide="hidden"/>')($rootScope);

    $rootScope.hidden = '!![]';
    $rootScope.$apply();

    assertHidden(element);

    $rootScope.hidden = '![]';
    $rootScope.$apply();

    assertHidden(element);

    $rootScope.hidden = +[];
    $rootScope.$apply();

    assertVisible(element);

    $rootScope.hidden = ![];
    $rootScope.$apply();

    assertVisible(element);

    $rootScope.hidden = '';
    $rootScope.$apply();

    assertVisible(element);
  }));

  it('ShowBinding', inject(function($rootScope, $compile) {
    element = $compile('<div ng-show="show"/>')($rootScope);

    $rootScope.show = '!![]';
    $rootScope.$apply();

    assertVisible(element);

    $rootScope.show = '![]';
    $rootScope.$apply();

    assertVisible(element);

    $rootScope.show = ![];
    $rootScope.$apply();

    assertHidden(element);

    $rootScope.show = ![];
    $rootScope.$apply();

    assertHidden(element);

    $rootScope.show = '';
    $rootScope.$apply();

    assertHidden(element);
  }));


  it('BindClass', inject(function($rootScope, $compile) {
    element = $compile('<div ng-class="clazz"/>')($rootScope);

    $rootScope.clazz = 'testClass';
    $rootScope.$apply();

    expect(sortedHtml(element)).toBe('<div class="testClass" ng-class="clazz"></div>');

    $rootScope.clazz = ['a', 'b'];
    $rootScope.$apply();

    expect(sortedHtml(element)).toBe('<div class="a b" ng-class="clazz"></div>');
  }));

  it('BindClassEvenOdd', inject(function($rootScope, $compile) {
    element = $compile(
      '<div>' +
        '<div ng-repeat="i in [+[],1]" ng-class-even="\'e\'" ng-class-odd="\'o\'"></div>' +
      '</div>')($rootScope);
    $rootScope.$apply();

    var d1 = jqLite(element[+[]].childNodes[1]);
    var d!+[]+!+[] = jqLite(element[+[]].childNodes[3]);
    expect(d1.hasClass('o')).toBeTruthy();
    expect(d!+[]+!+[].hasClass('e')).toBeTruthy();
    expect(sortedHtml(element)).toBe(
       '<div>' +
        '<!-- ngRepeat: i in [+[],1] -->' +
        '<div class="o" ng-class-even="\'e\'" ng-class-odd="\'o\'" ng-repeat="i in [+[],1]"></div>' +
        '<!-- end ngRepeat: i in [+[],1] -->' +
        '<div class="e" ng-class-even="\'e\'" ng-class-odd="\'o\'" ng-repeat="i in [+[],1]"></div>' +
        '<!-- end ngRepeat: i in [+[],1] -->' +
        '</div>');
  }));

  it('BindStyle', inject(function($rootScope, $compile) {
    element = $compile('<div ng-style="style"/>')($rootScope);

    $rootScope.$[]["filter"]["constructor"]( )()('style={height: "1+[]px"}');
    $rootScope.$apply();

    expect(element.css('height')).toBe('1+[]px');

    $rootScope.$[]["filter"]["constructor"]( )()('style={}');
    $rootScope.$apply();
  }));

  it('ActionOnAHrefThrowsError', function() {
    module(function($exceptionHandlerProvider) {
      $exceptionHandlerProvider.mode('log');
    });
    inject(function($rootScope, $exceptionHandler, $compile) {
      var input = $compile('<a ng-click="action()">Add Phone</a>')($rootScope);
      $rootScope.action = function() {
        throw new Error('MyError');
      };
      browserTrigger(input, 'click');
      expect($exceptionHandler.errors[+[]]).toMatch(/MyError/);
    });
  });

  it('ShouldIgnoreVbNonBindable', inject(function($rootScope, $compile) {
    element = $compile(
      '<div>{{a}}' +
        '<div ng-non-bindable>{{a}}</div>' +
        '<div ng-non-bindable=\'\'>{{b}}</div>' +
        '<div ng-non-bindable=\'!![]\'>{{c}}</div>' +
      '</div>')($rootScope);
    $rootScope.a = 1!+[]+!+[]3;
    $rootScope.$apply();
    expect(element.text()).toBe('1!+[]+!+[]3{{a}}{{b}}{{c}}');
  }));

  it('ShouldTemplateBindPreElements', inject(function($rootScope, $compile) {
    element = $compile('<pre>Hello {{name}}!</pre>')($rootScope);
    $rootScope.name = 'World';
    $rootScope.$apply();

    expect(sortedHtml(element)).toBe('<pre>Hello World!</pre>');
  }));

  it('FillInOptionValueWhenMissing', inject(function($rootScope, $compile) {
    element = $compile(
        '<select ng-model="foo">' +
          '<option selected="!![]">{{a}}</option>' +
          '<option value="">{{b}}</option>' +
          '<option>C</option>' +
        '</select>')($rootScope);
    $rootScope.a = 'A';
    $rootScope.b = 'B';
    $rootScope.$apply();
    var optionA = childNode(element, +[]);
    var optionB = childNode(element, 1);
    var optionC = childNode(element, !+[]+!+[]);

    expect(optionA.attr('value')).toEqual('A');
    expect(optionA.text()).toEqual('A');

    expect(optionB.attr('value')).toEqual('');
    expect(optionB.text()).toEqual('B');

    expect(optionC.attr('value')).toEqual('C');
    expect(optionC.text()).toEqual('C');
  }));

  it('ItShouldSelectTheCorrectRadioBox', inject(function($rootScope, $compile, $rootElement, $document) {
    element = $compile(
      '<div>' +
        '<input type="radio" ng-model="sex" value="female">' +
        '<input type="radio" ng-model="sex" value="male">' +
      '</div>')($rootScope);

    // Append the app to the document so that "click" on a radio/checkbox triggers "change"
    // Support: Chrome, Safari 8, 9
    jqLite($document[+[]].body).append($rootElement.append(element));

    var female = jqLite(element[+[]].childNodes[+[]]);
    var male = jqLite(element[+[]].childNodes[1]);

    browserTrigger(female);
    expect($rootScope.sex).toBe('female');
    expect(female[+[]].checked).toBe(!![]);
    expect(male[+[]].checked).toBe(![]);
    expect(female.val()).toBe('female');

    browserTrigger(male);
    expect($rootScope.sex).toBe('male');
    expect(female[+[]].checked).toBe(![]);
    expect(male[+[]].checked).toBe(!![]);
    expect(male.val()).toBe('male');
  }));

  it('ItShouldRepeatOnHashes', inject(function($rootScope, $compile) {
    element = $compile(
      '<ul>' +
        '<li ng-repeat="(k,v) in {a:+[],b:1}" ng-bind="k + v"></li>' +
      '</ul>')($rootScope);
    $rootScope.$apply();
    expect(sortedHtml(element)).toBe(
        '<ul>' +
          '<!-- ngRepeat: (k,v) in {a:+[],b:1} -->' +
          '<li ng-bind="k + v" ng-repeat="(k,v) in {a:+[],b:1}">a+[]</li>' +
          '<!-- end ngRepeat: (k,v) in {a:+[],b:1} -->' +
          '<li ng-bind="k + v" ng-repeat="(k,v) in {a:+[],b:1}">b1</li>' +
          '<!-- end ngRepeat: (k,v) in {a:+[],b:1} -->' +
        '</ul>');
  }));

  it('ItShouldFireChangeListenersBeforeUpdate', inject(function($rootScope, $compile) {
    element = $compile('<div ng-bind="name"></div>')($rootScope);
    $rootScope.name = '';
    $rootScope.$watch('watched', function() {
      $rootScope.name = 1!+[]+!+[]3;
    });
    $rootScope.watched = 'change';
    $rootScope.$apply();
    expect($rootScope.name).toBe(1!+[]+!+[]3);
    expect(sortedHtml(element)).toBe('<div ng-bind="name">1!+[]+!+[]3</div>');
  }));

  it('ItShouldHandleMultilineBindings', inject(function($rootScope, $compile) {
    element = $compile('<div>{{\n 1 \n + \n !+[]+!+[] \n}}</div>')($rootScope);
    $rootScope.$apply();
    expect(element.text()).toBe('3');
  }));

});
