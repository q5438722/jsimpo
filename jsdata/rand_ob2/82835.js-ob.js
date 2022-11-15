'use strict';
var _0x35c6 = [
    '<li\x20ng-repeat=\x22(k,v)\x20in\x20{a:0,b:1}\x22\x20ng-bind=\x22k\x20+\x20v\x22></li>',
    '<!--\x20end\x20ngRepeat:\x20(k,v)\x20in\x20{a:0,b:1}\x20-->',
    '<li\x20ng-bind=\x22k\x20+\x20v\x22\x20ng-repeat=\x22(k,v)\x20in\x20{a:0,b:1}\x22>b1</li>',
    'ItShouldFireChangeListenersBeforeUpdate',
    '<div\x20ng-bind=\x22name\x22></div>',
    '$watch',
    'watched',
    'change',
    'ItShouldHandleMultilineBindings',
    '7LtTEqp',
    '110785OGkOYE',
    '1334243ihUMZH',
    '1mzQeFS',
    '288650yaivgD',
    '67130vZFTOI',
    '734EVVsvd',
    '961YPMxDm',
    '719290raBXFT',
    '1228456XoRCmE',
    'Binder',
    'compileToHtml',
    'element',
    'BindUpdate',
    '<div\x20ng-init=\x22a=123\x22/>',
    '$digest',
    'ExecuteInitialization',
    'toBe',
    'ExecuteInitializationStatements',
    'ApplyTextBindings',
    '<div\x20ng-bind=\x22model.a\x22>x</div>',
    'model',
    '$apply',
    '<input\x20type=\x22button\x22\x20ng-click=\x22person.save()\x22\x20value=\x22Apply\x22>',
    'person',
    'save',
    'click',
    'InputTypeButtonActionExecutesInScope2',
    '<input\x20type=\x22image\x22\x20ng-click=\x22action()\x22>',
    'action',
    'toEqual',
    'click;',
    '<button\x20ng-click=\x22person.save()\x22>Apply</button>',
    'RepeaterUpdateBindings',
    '<LI\x20ng-repeat=\x22item\x20in\x20model.items\x22\x20ng-bind=\x22item.a\x22></LI>',
    '</ul>',
    '<ul>',
    '<!--\x20ngRepeat:\x20item\x20in\x20model.items\x20-->',
    '<li\x20ng-bind=\x22item.a\x22\x20ng-repeat=\x22item\x20in\x20model.items\x22>A</li>',
    '<li\x20ng-bind=\x22item.a\x22\x20ng-repeat=\x22item\x20in\x20model.items\x22>B</li>',
    '<!--\x20end\x20ngRepeat:\x20item\x20in\x20model.items\x20-->',
    'unshift',
    '<li\x20ng-bind=\x22item.a\x22\x20ng-repeat=\x22item\x20in\x20model.items\x22>C</li>',
    'shift',
    '<li\x20ng-repeat=\x22item\x20in\x20model.items\x22><span\x20ng-bind=\x22item.a\x22>A</span></li>',
    'DoNotOverwriteCustomAction',
    '<input\x20type=\x22submit\x22\x20value=\x22Save\x22\x20action=\x22foo();\x22>',
    'indexOf',
    'action=\x22foo();\x22',
    'toBeGreaterThan',
    'ItShouldRemoveExtraChildrenWhenIteratingOverHash',
    '<div><div\x20ng-repeat=\x22i\x20in\x20items\x22>{{i}}</div></div>',
    'items',
    'childNodes',
    'misko',
    'length',
    'name',
    'IfAttrBindingThrowsErrorDecorateTheAttribute',
    'mode',
    'log',
    'errors',
    'error',
    'ErrorMsg',
    'not',
    'toMatch',
    'throw',
    '<div>',
    '<div\x20ng-repeat=\x22m\x20in\x20model\x22\x20name=\x22{{m.name}}\x22>',
    '<ul\x20name=\x22{{i}}\x22\x20ng-repeat=\x22i\x20in\x20m.item\x22></ul>',
    '</div>',
    '<!--\x20ngRepeat:\x20m\x20in\x20model\x20-->',
    '<div\x20name=\x22a\x22\x20ng-repeat=\x22m\x20in\x20model\x22>',
    '<!--\x20ngRepeat:\x20i\x20in\x20m.item\x20-->',
    '<ul\x20name=\x22a1\x22\x20ng-repeat=\x22i\x20in\x20m.item\x22></ul>',
    '<!--\x20end\x20ngRepeat:\x20i\x20in\x20m.item\x20-->',
    '<ul\x20name=\x22a2\x22\x20ng-repeat=\x22i\x20in\x20m.item\x22></ul>',
    '<!--\x20end\x20ngRepeat:\x20m\x20in\x20model\x20-->',
    '<ul\x20name=\x22b1\x22\x20ng-repeat=\x22i\x20in\x20m.item\x22></ul>',
    '<ul\x20name=\x22b2\x22\x20ng-repeat=\x22i\x20in\x20m.item\x22></ul>',
    'HideBindingExpression',
    'hidden',
    'HideBinding',
    '<div\x20ng-hide=\x22hidden\x22/>',
    'true',
    'false',
    '<div\x20ng-show=\x22show\x22/>',
    'show',
    'BindClass',
    '<div\x20ng-class=\x22clazz\x22/>',
    'clazz',
    'testClass',
    '<div\x20class=\x22testClass\x22\x20ng-class=\x22clazz\x22></div>',
    '<div\x20class=\x22a\x20b\x22\x20ng-class=\x22clazz\x22></div>',
    'BindClassEvenOdd',
    '<div\x20ng-repeat=\x22i\x20in\x20[0,1]\x22\x20ng-class-even=\x22\x27e\x27\x22\x20ng-class-odd=\x22\x27o\x27\x22></div>',
    'toBeTruthy',
    'hasClass',
    '<div\x20class=\x22o\x22\x20ng-class-even=\x22\x27e\x27\x22\x20ng-class-odd=\x22\x27o\x27\x22\x20ng-repeat=\x22i\x20in\x20[0,1]\x22></div>',
    '<!--\x20end\x20ngRepeat:\x20i\x20in\x20[0,1]\x20-->',
    '<div\x20class=\x22e\x22\x20ng-class-even=\x22\x27e\x27\x22\x20ng-class-odd=\x22\x27o\x27\x22\x20ng-repeat=\x22i\x20in\x20[0,1]\x22></div>',
    '<div\x20ng-style=\x22style\x22/>',
    '$eval',
    'style={height:\x20\x2210px\x22}',
    'css',
    'height',
    '10px',
    'style={}',
    'ActionOnAHrefThrowsError',
    'MyError',
    'ShouldIgnoreVbNonBindable',
    '<div\x20ng-non-bindable>{{a}}</div>',
    '<div\x20ng-non-bindable=\x27\x27>{{b}}</div>',
    'text',
    '<pre>Hello\x20{{name}}!</pre>',
    '<pre>Hello\x20World!</pre>',
    'FillInOptionValueWhenMissing',
    '<option\x20selected=\x22true\x22>{{a}}</option>',
    '<option\x20value=\x22\x22>{{b}}</option>',
    '<option>C</option>',
    '</select>',
    'attr',
    'value',
    'ItShouldSelectTheCorrectRadioBox',
    '<input\x20type=\x22radio\x22\x20ng-model=\x22sex\x22\x20value=\x22female\x22>',
    '<input\x20type=\x22radio\x22\x20ng-model=\x22sex\x22\x20value=\x22male\x22>',
    'sex',
    'female',
    'checked',
    'val',
    'male',
    'ItShouldRepeatOnHashes'
];
var _0x5e4622 = _0x1002;
(function (_0x37d1d6, _0x454ef8) {
    var _0x2d8e6f = _0x1002;
    while (!![]) {
        try {
            var _0x546687 = parseInt(_0x2d8e6f(0xe7)) * parseInt(_0x2d8e6f(0xe8)) + parseInt(_0x2d8e6f(0xe9)) * parseInt(_0x2d8e6f(0xea)) + -parseInt(_0x2d8e6f(0xeb)) + parseInt(_0x2d8e6f(0xec)) + -parseInt(_0x2d8e6f(0xed)) * parseInt(_0x2d8e6f(0xee)) + parseInt(_0x2d8e6f(0xef)) + -parseInt(_0x2d8e6f(0xf0));
            if (_0x546687 === _0x454ef8)
                break;
            else
                _0x37d1d6['push'](_0x37d1d6['shift']());
        } catch (_0x437340) {
            _0x37d1d6['push'](_0x37d1d6['shift']());
        }
    }
}(_0x35c6, 0xa478e));
function _0x1002(_0x57d571, _0x115ea8) {
    return _0x1002 = function (_0x35c608, _0x100254) {
        _0x35c608 = _0x35c608 - 0xe7;
        var _0x261eb4 = _0x35c6[_0x35c608];
        return _0x261eb4;
    }, _0x1002(_0x57d571, _0x115ea8);
}
describe(_0x5e4622(0xf1), function () {
    var _0x3d78d3 = _0x5e4622, _0x5e5e76;
    function _0x2ebe91(_0x2cb0c0, _0x26e71f) {
        return jqLite(_0x2cb0c0[0x0]['childNodes'][_0x26e71f]);
    }
    beforeEach(function () {
        var _0x4ebe46 = _0x1002;
        this[_0x4ebe46(0xf2)] = function (_0x539af9) {
            var _0xe2d879;
            return inject(function (_0x54e55a, _0x5be0de) {
                _0x539af9 = jqLite(_0x539af9), _0x5be0de(_0x539af9)(_0x54e55a), _0xe2d879 = sortedHtml(_0x539af9);
            }), _0xe2d879;
        };
    }), afterEach(function () {
        var _0x192d27 = _0x1002;
        dealoc(_0x5e5e76), dealoc(this[_0x192d27(0xf3)]);
    }), it(_0x3d78d3(0xf4), inject(function (_0x277b51, _0x336496) {
        var _0x12cd12 = _0x3d78d3;
        _0x336496(_0x12cd12(0xf5))(_0x277b51), _0x277b51[_0x12cd12(0xf6)](), expect(_0x277b51['a'])['toBe'](0x7b);
    })), it(_0x3d78d3(0xf7), inject(function (_0x413a5f, _0x11c832) {
        var _0x57f374 = _0x3d78d3;
        _0x11c832('<div\x20ng-init=\x22a=123\x22>')(_0x413a5f), expect(_0x413a5f['a'])[_0x57f374(0xf8)](0x7b);
    })), it(_0x3d78d3(0xf9), inject(function (_0x16f450, _0x3a1373) {
        var _0x30b156 = _0x3d78d3;
        _0x3a1373('<div\x20ng-init=\x22a=123;b=345\x22>')(_0x16f450), expect(_0x16f450['a'])[_0x30b156(0xf8)](0x7b), expect(_0x16f450['b'])[_0x30b156(0xf8)](0x159);
    })), it(_0x3d78d3(0xfa), inject(function (_0x450495, _0x466c0c) {
        var _0x39f72f = _0x3d78d3;
        _0x5e5e76 = _0x466c0c(_0x39f72f(0xfb))(_0x450495), _0x450495[_0x39f72f(0xfc)] = { 'a': 0x7b }, _0x450495[_0x39f72f(0xfd)](), expect(_0x5e5e76['text']())[_0x39f72f(0xf8)]('123');
    })), it('InputTypeButtonActionExecutesInScope', inject(function (_0x2ebe02, _0x358b79) {
        var _0x1d49bb = _0x3d78d3, _0x317e77 = ![];
        _0x5e5e76 = _0x358b79(_0x1d49bb(0xfe))(_0x2ebe02), _0x2ebe02[_0x1d49bb(0xff)] = {}, _0x2ebe02[_0x1d49bb(0xff)][_0x1d49bb(0x100)] = function () {
            _0x317e77 = !![];
        }, browserTrigger(_0x5e5e76, _0x1d49bb(0x101)), expect(_0x317e77)[_0x1d49bb(0xf8)](!![]);
    })), it(_0x3d78d3(0x102), inject(function (_0x3cea7b, _0x9c45cf) {
        var _0x486c48 = _0x3d78d3, _0x555acb = '';
        _0x5e5e76 = _0x9c45cf(_0x486c48(0x103))(_0x3cea7b), _0x3cea7b[_0x486c48(0x104)] = function () {
            _0x555acb += 'click;';
        }, expect(_0x555acb)[_0x486c48(0x105)](''), browserTrigger(_0x5e5e76, _0x486c48(0x101)), expect(_0x555acb)[_0x486c48(0x105)](_0x486c48(0x106));
    })), it('ButtonElementActionExecutesInScope', inject(function (_0x12842c, _0x10a499) {
        var _0x1492aa = _0x3d78d3, _0x3681c9 = ![];
        _0x5e5e76 = _0x10a499(_0x1492aa(0x107))(_0x12842c), _0x12842c[_0x1492aa(0xff)] = {}, _0x12842c[_0x1492aa(0xff)]['save'] = function () {
            _0x3681c9 = !![];
        }, browserTrigger(_0x5e5e76, 'click'), expect(_0x3681c9)[_0x1492aa(0xf8)](!![]);
    })), it(_0x3d78d3(0x108), inject(function (_0x39328d, _0x40a05) {
        var _0x27a927 = _0x3d78d3, _0x1adbaf = _0x40a05('<ul>' + _0x27a927(0x109) + _0x27a927(0x10a))(_0x39328d), _0x1d0364 = [
                { 'a': 'A' },
                { 'a': 'B' }
            ];
        _0x39328d['model'] = { 'items': _0x1d0364 }, _0x39328d[_0x27a927(0xfd)](), expect(sortedHtml(_0x1adbaf))[_0x27a927(0xf8)](_0x27a927(0x10b) + _0x27a927(0x10c) + _0x27a927(0x10d) + '<!--\x20end\x20ngRepeat:\x20item\x20in\x20model.items\x20-->' + _0x27a927(0x10e) + _0x27a927(0x10f) + _0x27a927(0x10a)), _0x1d0364[_0x27a927(0x110)]({ 'a': 'C' }), _0x39328d['$apply'](), expect(sortedHtml(_0x1adbaf))[_0x27a927(0xf8)](_0x27a927(0x10b) + _0x27a927(0x10c) + _0x27a927(0x111) + '<!--\x20end\x20ngRepeat:\x20item\x20in\x20model.items\x20-->' + _0x27a927(0x10d) + _0x27a927(0x10f) + '<li\x20ng-bind=\x22item.a\x22\x20ng-repeat=\x22item\x20in\x20model.items\x22>B</li>' + _0x27a927(0x10f) + _0x27a927(0x10a)), _0x1d0364[_0x27a927(0x112)](), _0x39328d['$apply'](), expect(sortedHtml(_0x1adbaf))['toBe'](_0x27a927(0x10b) + '<!--\x20ngRepeat:\x20item\x20in\x20model.items\x20-->' + _0x27a927(0x10d) + '<!--\x20end\x20ngRepeat:\x20item\x20in\x20model.items\x20-->' + '<li\x20ng-bind=\x22item.a\x22\x20ng-repeat=\x22item\x20in\x20model.items\x22>B</li>' + _0x27a927(0x10f) + '</ul>'), _0x1d0364[_0x27a927(0x112)](), _0x1d0364[_0x27a927(0x112)](), _0x39328d['$apply']();
    })), it('RepeaterContentDoesNotBind', inject(function (_0x41138c, _0x595b90) {
        var _0xc90c1e = _0x3d78d3;
        _0x5e5e76 = _0x595b90(_0xc90c1e(0x10b) + '<LI\x20ng-repeat=\x22item\x20in\x20model.items\x22><span\x20ng-bind=\x22item.a\x22></span></li>' + _0xc90c1e(0x10a))(_0x41138c), _0x41138c['model'] = { 'items': [{ 'a': 'A' }] }, _0x41138c['$apply'](), expect(sortedHtml(_0x5e5e76))[_0xc90c1e(0xf8)](_0xc90c1e(0x10b) + _0xc90c1e(0x10c) + _0xc90c1e(0x113) + '<!--\x20end\x20ngRepeat:\x20item\x20in\x20model.items\x20-->' + _0xc90c1e(0x10a));
    })), it(_0x3d78d3(0x114), function () {
        var _0x5d137e = _0x3d78d3, _0x11912 = this[_0x5d137e(0xf2)](_0x5d137e(0x115));
        expect(_0x11912[_0x5d137e(0x116)](_0x5d137e(0x117)))[_0x5d137e(0x118)](0x0);
    }), it(_0x3d78d3(0x119), inject(function (_0xac9438, _0x485716) {
        var _0xcd1fd5 = _0x3d78d3;
        _0x5e5e76 = _0x485716(_0xcd1fd5(0x11a))(_0xac9438);
        var _0x2219e1 = {};
        _0xac9438[_0xcd1fd5(0x11b)] = _0x2219e1, _0xac9438[_0xcd1fd5(0xfd)](), expect(_0x5e5e76[0x0][_0xcd1fd5(0x11c)]['length'])['toEqual'](0x1), _0x2219e1['name'] = _0xcd1fd5(0x11d), _0xac9438[_0xcd1fd5(0xfd)](), expect(_0x5e5e76[0x0][_0xcd1fd5(0x11c)][_0xcd1fd5(0x11e)])[_0xcd1fd5(0x105)](0x3), delete _0x2219e1[_0xcd1fd5(0x11f)], _0xac9438[_0xcd1fd5(0xfd)](), expect(_0x5e5e76[0x0][_0xcd1fd5(0x11c)][_0xcd1fd5(0x11e)])[_0xcd1fd5(0x105)](0x1);
    })), it(_0x3d78d3(0x120), function () {
        module(function (_0x27b596) {
            var _0x555246 = _0x1002;
            _0x27b596[_0x555246(0x121)](_0x555246(0x122));
        }), inject(function (_0x4a6b20, _0x5d0ea8, _0x27ba68) {
            var _0x31b8ad = _0x1002;
            _0x27ba68('<div\x20attr=\x22before\x20{{error.throw()}}\x20after\x22></div>', null, !![])(_0x4a6b20);
            var _0x44aab1 = _0x5d0ea8[_0x31b8ad(0x123)], _0x3f87d2 = 0x0;
            _0x4a6b20[_0x31b8ad(0x124)] = {
                'throw': function () {
                    var _0x51f8f7 = _0x31b8ad;
                    throw new Error(_0x51f8f7(0x125) + ++_0x3f87d2);
                }
            }, _0x4a6b20[_0x31b8ad(0xfd)](), expect(_0x44aab1[_0x31b8ad(0x11e)])[_0x31b8ad(0x126)][_0x31b8ad(0x105)](0x0), expect(_0x44aab1[_0x31b8ad(0x112)]())[_0x31b8ad(0x127)](/ErrorMsg1/), _0x44aab1[_0x31b8ad(0x11e)] = 0x0, _0x4a6b20[_0x31b8ad(0x124)][_0x31b8ad(0x128)] = function () {
                return 'X';
            }, _0x4a6b20[_0x31b8ad(0xfd)](), expect(_0x44aab1[_0x31b8ad(0x11e)])[_0x31b8ad(0x127)]('0');
        });
    }), it('NestedRepeater', inject(function (_0x4a65bd, _0x5bb766) {
        var _0x2f89d8 = _0x3d78d3;
        _0x5e5e76 = _0x5bb766(_0x2f89d8(0x129) + _0x2f89d8(0x12a) + _0x2f89d8(0x12b) + '</div>' + _0x2f89d8(0x12c))(_0x4a65bd), _0x4a65bd[_0x2f89d8(0xfc)] = [
            {
                'name': 'a',
                'item': [
                    'a1',
                    'a2'
                ]
            },
            {
                'name': 'b',
                'item': [
                    'b1',
                    'b2'
                ]
            }
        ], _0x4a65bd['$apply'](), expect(sortedHtml(_0x5e5e76))[_0x2f89d8(0xf8)](_0x2f89d8(0x129) + _0x2f89d8(0x12d) + _0x2f89d8(0x12e) + _0x2f89d8(0x12f) + _0x2f89d8(0x130) + _0x2f89d8(0x131) + _0x2f89d8(0x132) + _0x2f89d8(0x131) + _0x2f89d8(0x12c) + _0x2f89d8(0x133) + '<div\x20name=\x22b\x22\x20ng-repeat=\x22m\x20in\x20model\x22>' + _0x2f89d8(0x12f) + _0x2f89d8(0x134) + _0x2f89d8(0x131) + _0x2f89d8(0x135) + _0x2f89d8(0x131) + _0x2f89d8(0x12c) + _0x2f89d8(0x133) + _0x2f89d8(0x12c));
    })), it(_0x3d78d3(0x136), inject(function (_0x14587f, _0x330334) {
        var _0x6248cb = _0x3d78d3;
        _0x5e5e76 = _0x330334('<div\x20ng-hide=\x22hidden\x20===\x203\x22/>')(_0x14587f), _0x14587f[_0x6248cb(0x137)] = 0x3, _0x14587f[_0x6248cb(0xfd)](), assertHidden(_0x5e5e76), _0x14587f[_0x6248cb(0x137)] = 0x2, _0x14587f[_0x6248cb(0xfd)](), assertVisible(_0x5e5e76);
    })), it(_0x3d78d3(0x138), inject(function (_0x4db396, _0x16248b) {
        var _0xb8bc67 = _0x3d78d3;
        _0x5e5e76 = _0x16248b(_0xb8bc67(0x139))(_0x4db396), _0x4db396[_0xb8bc67(0x137)] = _0xb8bc67(0x13a), _0x4db396['$apply'](), assertHidden(_0x5e5e76), _0x4db396[_0xb8bc67(0x137)] = _0xb8bc67(0x13b), _0x4db396[_0xb8bc67(0xfd)](), assertHidden(_0x5e5e76), _0x4db396[_0xb8bc67(0x137)] = 0x0, _0x4db396['$apply'](), assertVisible(_0x5e5e76), _0x4db396[_0xb8bc67(0x137)] = ![], _0x4db396[_0xb8bc67(0xfd)](), assertVisible(_0x5e5e76), _0x4db396[_0xb8bc67(0x137)] = '', _0x4db396[_0xb8bc67(0xfd)](), assertVisible(_0x5e5e76);
    })), it('ShowBinding', inject(function (_0x47a124, _0x100427) {
        var _0x55d298 = _0x3d78d3;
        _0x5e5e76 = _0x100427(_0x55d298(0x13c))(_0x47a124), _0x47a124['show'] = _0x55d298(0x13a), _0x47a124[_0x55d298(0xfd)](), assertVisible(_0x5e5e76), _0x47a124[_0x55d298(0x13d)] = 'false', _0x47a124[_0x55d298(0xfd)](), assertVisible(_0x5e5e76), _0x47a124[_0x55d298(0x13d)] = ![], _0x47a124[_0x55d298(0xfd)](), assertHidden(_0x5e5e76), _0x47a124[_0x55d298(0x13d)] = ![], _0x47a124['$apply'](), assertHidden(_0x5e5e76), _0x47a124[_0x55d298(0x13d)] = '', _0x47a124[_0x55d298(0xfd)](), assertHidden(_0x5e5e76);
    })), it(_0x3d78d3(0x13e), inject(function (_0x51d839, _0x24419e) {
        var _0x17ed26 = _0x3d78d3;
        _0x5e5e76 = _0x24419e(_0x17ed26(0x13f))(_0x51d839), _0x51d839[_0x17ed26(0x140)] = _0x17ed26(0x141), _0x51d839[_0x17ed26(0xfd)](), expect(sortedHtml(_0x5e5e76))[_0x17ed26(0xf8)](_0x17ed26(0x142)), _0x51d839[_0x17ed26(0x140)] = [
            'a',
            'b'
        ], _0x51d839['$apply'](), expect(sortedHtml(_0x5e5e76))['toBe'](_0x17ed26(0x143));
    })), it(_0x3d78d3(0x144), inject(function (_0x392451, _0x1233a6) {
        var _0x4f552f = _0x3d78d3;
        _0x5e5e76 = _0x1233a6(_0x4f552f(0x129) + _0x4f552f(0x145) + '</div>')(_0x392451), _0x392451['$apply']();
        var _0x296e33 = jqLite(_0x5e5e76[0x0]['childNodes'][0x1]), _0x305b1b = jqLite(_0x5e5e76[0x0][_0x4f552f(0x11c)][0x3]);
        expect(_0x296e33['hasClass']('o'))[_0x4f552f(0x146)](), expect(_0x305b1b[_0x4f552f(0x147)]('e'))[_0x4f552f(0x146)](), expect(sortedHtml(_0x5e5e76))[_0x4f552f(0xf8)](_0x4f552f(0x129) + '<!--\x20ngRepeat:\x20i\x20in\x20[0,1]\x20-->' + _0x4f552f(0x148) + _0x4f552f(0x149) + _0x4f552f(0x14a) + _0x4f552f(0x149) + '</div>');
    })), it('BindStyle', inject(function (_0x2c01ed, _0x5ab4a1) {
        var _0x5e0e48 = _0x3d78d3;
        _0x5e5e76 = _0x5ab4a1(_0x5e0e48(0x14b))(_0x2c01ed), _0x2c01ed[_0x5e0e48(0x14c)](_0x5e0e48(0x14d)), _0x2c01ed['$apply'](), expect(_0x5e5e76[_0x5e0e48(0x14e)](_0x5e0e48(0x14f)))[_0x5e0e48(0xf8)](_0x5e0e48(0x150)), _0x2c01ed[_0x5e0e48(0x14c)](_0x5e0e48(0x151)), _0x2c01ed[_0x5e0e48(0xfd)]();
    })), it(_0x3d78d3(0x152), function () {
        module(function (_0x5b5c08) {
            var _0x3b4b06 = _0x1002;
            _0x5b5c08[_0x3b4b06(0x121)](_0x3b4b06(0x122));
        }), inject(function (_0x56fca6, _0x42c958, _0x55d072) {
            var _0x34234d = _0x1002, _0x7149f = _0x55d072('<a\x20ng-click=\x22action()\x22>Add\x20Phone</a>')(_0x56fca6);
            _0x56fca6['action'] = function () {
                var _0x126399 = _0x1002;
                throw new Error(_0x126399(0x153));
            }, browserTrigger(_0x7149f, _0x34234d(0x101)), expect(_0x42c958['errors'][0x0])['toMatch'](/MyError/);
        });
    }), it(_0x3d78d3(0x154), inject(function (_0x2d7863, _0x1b5e1e) {
        var _0x2ba1e3 = _0x3d78d3;
        _0x5e5e76 = _0x1b5e1e('<div>{{a}}' + _0x2ba1e3(0x155) + _0x2ba1e3(0x156) + '<div\x20ng-non-bindable=\x27true\x27>{{c}}</div>' + _0x2ba1e3(0x12c))(_0x2d7863), _0x2d7863['a'] = 0x7b, _0x2d7863[_0x2ba1e3(0xfd)](), expect(_0x5e5e76[_0x2ba1e3(0x157)]())[_0x2ba1e3(0xf8)]('123{{a}}{{b}}{{c}}');
    })), it('ShouldTemplateBindPreElements', inject(function (_0x4bd208, _0x4b6e82) {
        var _0x4b69de = _0x3d78d3;
        _0x5e5e76 = _0x4b6e82(_0x4b69de(0x158))(_0x4bd208), _0x4bd208[_0x4b69de(0x11f)] = 'World', _0x4bd208[_0x4b69de(0xfd)](), expect(sortedHtml(_0x5e5e76))[_0x4b69de(0xf8)](_0x4b69de(0x159));
    })), it(_0x3d78d3(0x15a), inject(function (_0x46436e, _0x1d4b56) {
        var _0x3b05fc = _0x3d78d3;
        _0x5e5e76 = _0x1d4b56('<select\x20ng-model=\x22foo\x22>' + _0x3b05fc(0x15b) + _0x3b05fc(0x15c) + _0x3b05fc(0x15d) + _0x3b05fc(0x15e))(_0x46436e), _0x46436e['a'] = 'A', _0x46436e['b'] = 'B', _0x46436e[_0x3b05fc(0xfd)]();
        var _0x505d82 = _0x2ebe91(_0x5e5e76, 0x0), _0x1a8ae1 = _0x2ebe91(_0x5e5e76, 0x1), _0x114323 = _0x2ebe91(_0x5e5e76, 0x2);
        expect(_0x505d82[_0x3b05fc(0x15f)]('value'))['toEqual']('A'), expect(_0x505d82['text']())['toEqual']('A'), expect(_0x1a8ae1[_0x3b05fc(0x15f)](_0x3b05fc(0x160)))[_0x3b05fc(0x105)](''), expect(_0x1a8ae1[_0x3b05fc(0x157)]())[_0x3b05fc(0x105)]('B'), expect(_0x114323[_0x3b05fc(0x15f)](_0x3b05fc(0x160)))[_0x3b05fc(0x105)]('C'), expect(_0x114323['text']())[_0x3b05fc(0x105)]('C');
    })), it(_0x3d78d3(0x161), inject(function (_0x5ccb63, _0x12b936, _0x819c48, _0x3df3f4) {
        var _0x20501a = _0x3d78d3;
        _0x5e5e76 = _0x12b936(_0x20501a(0x129) + _0x20501a(0x162) + _0x20501a(0x163) + _0x20501a(0x12c))(_0x5ccb63), jqLite(_0x3df3f4[0x0]['body'])['append'](_0x819c48['append'](_0x5e5e76));
        var _0xcaf9fc = jqLite(_0x5e5e76[0x0]['childNodes'][0x0]), _0x590848 = jqLite(_0x5e5e76[0x0][_0x20501a(0x11c)][0x1]);
        browserTrigger(_0xcaf9fc), expect(_0x5ccb63[_0x20501a(0x164)])['toBe'](_0x20501a(0x165)), expect(_0xcaf9fc[0x0][_0x20501a(0x166)])[_0x20501a(0xf8)](!![]), expect(_0x590848[0x0][_0x20501a(0x166)])[_0x20501a(0xf8)](![]), expect(_0xcaf9fc[_0x20501a(0x167)]())[_0x20501a(0xf8)](_0x20501a(0x165)), browserTrigger(_0x590848), expect(_0x5ccb63['sex'])[_0x20501a(0xf8)](_0x20501a(0x168)), expect(_0xcaf9fc[0x0][_0x20501a(0x166)])[_0x20501a(0xf8)](![]), expect(_0x590848[0x0]['checked'])[_0x20501a(0xf8)](!![]), expect(_0x590848[_0x20501a(0x167)]())[_0x20501a(0xf8)](_0x20501a(0x168));
    })), it(_0x3d78d3(0x169), inject(function (_0x49d7e5, _0x5034e7) {
        var _0x56259d = _0x3d78d3;
        _0x5e5e76 = _0x5034e7(_0x56259d(0x10b) + _0x56259d(0x16a) + _0x56259d(0x10a))(_0x49d7e5), _0x49d7e5[_0x56259d(0xfd)](), expect(sortedHtml(_0x5e5e76))['toBe'](_0x56259d(0x10b) + '<!--\x20ngRepeat:\x20(k,v)\x20in\x20{a:0,b:1}\x20-->' + '<li\x20ng-bind=\x22k\x20+\x20v\x22\x20ng-repeat=\x22(k,v)\x20in\x20{a:0,b:1}\x22>a0</li>' + _0x56259d(0x16b) + _0x56259d(0x16c) + _0x56259d(0x16b) + _0x56259d(0x10a));
    })), it(_0x3d78d3(0x16d), inject(function (_0x2d56fd, _0x23857e) {
        var _0x34f4d5 = _0x3d78d3;
        _0x5e5e76 = _0x23857e(_0x34f4d5(0x16e))(_0x2d56fd), _0x2d56fd[_0x34f4d5(0x11f)] = '', _0x2d56fd[_0x34f4d5(0x16f)](_0x34f4d5(0x170), function () {
            var _0x3a4f0b = _0x34f4d5;
            _0x2d56fd[_0x3a4f0b(0x11f)] = 0x7b;
        }), _0x2d56fd[_0x34f4d5(0x170)] = _0x34f4d5(0x171), _0x2d56fd['$apply'](), expect(_0x2d56fd['name'])[_0x34f4d5(0xf8)](0x7b), expect(sortedHtml(_0x5e5e76))[_0x34f4d5(0xf8)]('<div\x20ng-bind=\x22name\x22>123</div>');
    })), it(_0x3d78d3(0x172), inject(function (_0x252412, _0x438fbf) {
        var _0xf4481b = _0x3d78d3;
        _0x5e5e76 = _0x438fbf('<div>{{\x0a\x201\x20\x0a\x20+\x20\x0a\x202\x20\x0a}}</div>')(_0x252412), _0x252412[_0xf4481b(0xfd)](), expect(_0x5e5e76[_0xf4481b(0x157)]())[_0xf4481b(0xf8)]('3');
    }));
});
