'use strict';
describe('Binder', function () {
    var _0x4dbce0;
    function _0x500ce4(_0x3bb4c9, _0x5a13c8) {
        return jqLite(_0x3bb4c9[0x35d * -0xa + -0x34 * 0x9d + 0x2 * 0x20c3]['childNodes'][_0x5a13c8]);
    }
    beforeEach(function () {
        this['compileToHtml'] = function (_0x4a9dc9) {
            var _0x2473e0;
            return inject(function (_0x37f8fb, _0xb1227) {
                _0x4a9dc9 = jqLite(_0x4a9dc9), _0xb1227(_0x4a9dc9)(_0x37f8fb), _0x2473e0 = sortedHtml(_0x4a9dc9);
            }), _0x2473e0;
        };
    }), afterEach(function () {
        dealoc(_0x4dbce0), dealoc(this['element']);
    }), it('BindUpdate', inject(function (_0x33c3bb, _0x3599f0) {
        _0x3599f0('<div\x20ng-init=\x22a=123\x22/>')(_0x33c3bb), _0x33c3bb['$digest'](), expect(_0x33c3bb['a'])['toBe'](-0x1924 + 0x4 * 0x75a + -0x3c9);
    })), it('ExecuteInitialization', inject(function (_0x1f715f, _0x93ee6c) {
        _0x93ee6c('<div\x20ng-init=\x22a=123\x22>')(_0x1f715f), expect(_0x1f715f['a'])['toBe'](-0xe3 * 0x1f + 0xbf9 + 0xfff);
    })), it('ExecuteInitializationStatements', inject(function (_0x36bc30, _0x2161c6) {
        _0x2161c6('<div\x20ng-init=\x22a=123;b=345\x22>')(_0x36bc30), expect(_0x36bc30['a'])['toBe'](-0x15c6 + -0x3 * -0x4dd + 0x7aa), expect(_0x36bc30['b'])['toBe'](-0x2c4 + 0x120 + -0x5 * -0x99);
    })), it('ApplyTextBindings', inject(function (_0x50358f, _0x291a7e) {
        _0x4dbce0 = _0x291a7e('<div\x20ng-bind=\x22model.a\x22>x</div>')(_0x50358f), _0x50358f['model'] = { 'a': 0x7b }, _0x50358f['$apply'](), expect(_0x4dbce0['text']())['toBe']('123');
    })), it('InputTypeButtonActionExecutesInScope', inject(function (_0x4debf4, _0x3cbdb4) {
        var _0x54b120 = ![];
        _0x4dbce0 = _0x3cbdb4('<input\x20type=\x22button\x22\x20ng-click=\x22person.save()\x22\x20value=\x22Apply\x22>')(_0x4debf4), _0x4debf4['person'] = {}, _0x4debf4['person']['save'] = function () {
            _0x54b120 = !![];
        }, browserTrigger(_0x4dbce0, 'click'), expect(_0x54b120)['toBe'](!![]);
    })), it('InputTypeButtonActionExecutesInScope2', inject(function (_0x41fe44, _0x443523) {
        var _0x8b175c = '';
        _0x4dbce0 = _0x443523('<input\x20type=\x22image\x22\x20ng-click=\x22action()\x22>')(_0x41fe44), _0x41fe44['action'] = function () {
            _0x8b175c += 'click;';
        }, expect(_0x8b175c)['toEqual'](''), browserTrigger(_0x4dbce0, 'click'), expect(_0x8b175c)['toEqual']('click;');
    })), it('ButtonElementActionExecutesInScope', inject(function (_0x1b916f, _0x6f22d5) {
        var _0x2ede7e = ![];
        _0x4dbce0 = _0x6f22d5('<button\x20ng-click=\x22person.save()\x22>Apply</button>')(_0x1b916f), _0x1b916f['person'] = {}, _0x1b916f['person']['save'] = function () {
            _0x2ede7e = !![];
        }, browserTrigger(_0x4dbce0, 'click'), expect(_0x2ede7e)['toBe'](!![]);
    })), it('RepeaterUpdateBindings', inject(function (_0x5eac04, _0x4bbebd) {
        var _0x17da1f = _0x4bbebd('<ul>' + '<LI\x20ng-repeat=\x22item\x20in\x20model.items\x22\x20ng-bind=\x22item.a\x22></LI>' + '</ul>')(_0x5eac04), _0x56145d = [
                { 'a': 'A' },
                { 'a': 'B' }
            ];
        _0x5eac04['model'] = { 'items': _0x56145d }, _0x5eac04['$apply'](), expect(sortedHtml(_0x17da1f))['toBe']('<ul>' + '<!--\x20ngRepeat:\x20item\x20in\x20model.items\x20-->' + '<li\x20ng-bind=\x22item.a\x22\x20ng-repeat=\x22item\x20in\x20model.items\x22>A</li>' + '<!--\x20end\x20ngRepeat:\x20item\x20in\x20model.items\x20-->' + '<li\x20ng-bind=\x22item.a\x22\x20ng-repeat=\x22item\x20in\x20model.items\x22>B</li>' + '<!--\x20end\x20ngRepeat:\x20item\x20in\x20model.items\x20-->' + '</ul>'), _0x56145d['unshift']({ 'a': 'C' }), _0x5eac04['$apply'](), expect(sortedHtml(_0x17da1f))['toBe']('<ul>' + '<!--\x20ngRepeat:\x20item\x20in\x20model.items\x20-->' + '<li\x20ng-bind=\x22item.a\x22\x20ng-repeat=\x22item\x20in\x20model.items\x22>C</li>' + '<!--\x20end\x20ngRepeat:\x20item\x20in\x20model.items\x20-->' + '<li\x20ng-bind=\x22item.a\x22\x20ng-repeat=\x22item\x20in\x20model.items\x22>A</li>' + '<!--\x20end\x20ngRepeat:\x20item\x20in\x20model.items\x20-->' + '<li\x20ng-bind=\x22item.a\x22\x20ng-repeat=\x22item\x20in\x20model.items\x22>B</li>' + '<!--\x20end\x20ngRepeat:\x20item\x20in\x20model.items\x20-->' + '</ul>'), _0x56145d['shift'](), _0x5eac04['$apply'](), expect(sortedHtml(_0x17da1f))['toBe']('<ul>' + '<!--\x20ngRepeat:\x20item\x20in\x20model.items\x20-->' + '<li\x20ng-bind=\x22item.a\x22\x20ng-repeat=\x22item\x20in\x20model.items\x22>A</li>' + '<!--\x20end\x20ngRepeat:\x20item\x20in\x20model.items\x20-->' + '<li\x20ng-bind=\x22item.a\x22\x20ng-repeat=\x22item\x20in\x20model.items\x22>B</li>' + '<!--\x20end\x20ngRepeat:\x20item\x20in\x20model.items\x20-->' + '</ul>'), _0x56145d['shift'](), _0x56145d['shift'](), _0x5eac04['$apply']();
    })), it('RepeaterContentDoesNotBind', inject(function (_0x396a27, _0xffcc35) {
        _0x4dbce0 = _0xffcc35('<ul>' + '<LI\x20ng-repeat=\x22item\x20in\x20model.items\x22><span\x20ng-bind=\x22item.a\x22></span></li>' + '</ul>')(_0x396a27), _0x396a27['model'] = { 'items': [{ 'a': 'A' }] }, _0x396a27['$apply'](), expect(sortedHtml(_0x4dbce0))['toBe']('<ul>' + '<!--\x20ngRepeat:\x20item\x20in\x20model.items\x20-->' + '<li\x20ng-repeat=\x22item\x20in\x20model.items\x22><span\x20ng-bind=\x22item.a\x22>A</span></li>' + '<!--\x20end\x20ngRepeat:\x20item\x20in\x20model.items\x20-->' + '</ul>');
    })), it('DoNotOverwriteCustomAction', function () {
        var _0x3e0268 = this['compileToHtml']('<input\x20type=\x22submit\x22\x20value=\x22Save\x22\x20action=\x22foo();\x22>');
        expect(_0x3e0268['indexOf']('action=\x22foo();\x22'))['toBeGreaterThan'](-0xffa * 0x2 + 0x3ef * -0x1 + -0x1 * -0x23e3);
    }), it('ItShouldRemoveExtraChildrenWhenIteratingOverHash', inject(function (_0x4c97dc, _0x50677c) {
        _0x4dbce0 = _0x50677c('<div><div\x20ng-repeat=\x22i\x20in\x20items\x22>{{i}}</div></div>')(_0x4c97dc);
        var _0x41dc33 = {};
        _0x4c97dc['items'] = _0x41dc33, _0x4c97dc['$apply'](), expect(_0x4dbce0[0x2b3 * 0x6 + 0x1b48 + 0x15 * -0x212]['childNodes']['length'])['toEqual'](0x1 * -0x1714 + -0xcd1 + 0x23e6), _0x41dc33['name'] = 'misko', _0x4c97dc['$apply'](), expect(_0x4dbce0[-0xd10 + -0x107e + 0x3 * 0x9da]['childNodes']['length'])['toEqual'](0x259 + 0xc9f + 0x1 * -0xef5), delete _0x41dc33['name'], _0x4c97dc['$apply'](), expect(_0x4dbce0[0x3 * -0x3d3 + 0x1 * -0xac4 + 0x163d]['childNodes']['length'])['toEqual'](-0x19f6 + 0x1490 + 0x567);
    })), it('IfAttrBindingThrowsErrorDecorateTheAttribute', function () {
        module(function (_0x2c4cae) {
            _0x2c4cae['mode']('log');
        }), inject(function (_0x2cf357, _0x4f0c79, _0xbbfd3f) {
            _0xbbfd3f('<div\x20attr=\x22before\x20{{error.throw()}}\x20after\x22></div>', null, !![])(_0x2cf357);
            var _0x345f3d = _0x4f0c79['errors'], _0x1d5a59 = -0xa * -0x38c + 0x16cd + -0x3a45;
            _0x2cf357['error'] = {
                'throw': function () {
                    throw new Error('ErrorMsg' + ++_0x1d5a59);
                }
            }, _0x2cf357['$apply'](), expect(_0x345f3d['length'])['not']['toEqual'](0xf4e * 0x2 + -0x2 * 0xc4c + -0x604), expect(_0x345f3d['shift']())['toMatch'](/ErrorMsg1/), _0x345f3d['length'] = 0x24db + 0x11a9 + -0x2 * 0x1b42, _0x2cf357['error']['throw'] = function () {
                return 'X';
            }, _0x2cf357['$apply'](), expect(_0x345f3d['length'])['toMatch']('0');
        });
    }), it('NestedRepeater', inject(function (_0x5322bd, _0x3a42e4) {
        _0x4dbce0 = _0x3a42e4('<div>' + '<div\x20ng-repeat=\x22m\x20in\x20model\x22\x20name=\x22{{m.name}}\x22>' + '<ul\x20name=\x22{{i}}\x22\x20ng-repeat=\x22i\x20in\x20m.item\x22></ul>' + '</div>' + '</div>')(_0x5322bd), _0x5322bd['model'] = [
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
        ], _0x5322bd['$apply'](), expect(sortedHtml(_0x4dbce0))['toBe']('<div>' + '<!--\x20ngRepeat:\x20m\x20in\x20model\x20-->' + '<div\x20name=\x22a\x22\x20ng-repeat=\x22m\x20in\x20model\x22>' + '<!--\x20ngRepeat:\x20i\x20in\x20m.item\x20-->' + '<ul\x20name=\x22a1\x22\x20ng-repeat=\x22i\x20in\x20m.item\x22></ul>' + '<!--\x20end\x20ngRepeat:\x20i\x20in\x20m.item\x20-->' + '<ul\x20name=\x22a2\x22\x20ng-repeat=\x22i\x20in\x20m.item\x22></ul>' + '<!--\x20end\x20ngRepeat:\x20i\x20in\x20m.item\x20-->' + '</div>' + '<!--\x20end\x20ngRepeat:\x20m\x20in\x20model\x20-->' + '<div\x20name=\x22b\x22\x20ng-repeat=\x22m\x20in\x20model\x22>' + '<!--\x20ngRepeat:\x20i\x20in\x20m.item\x20-->' + '<ul\x20name=\x22b1\x22\x20ng-repeat=\x22i\x20in\x20m.item\x22></ul>' + '<!--\x20end\x20ngRepeat:\x20i\x20in\x20m.item\x20-->' + '<ul\x20name=\x22b2\x22\x20ng-repeat=\x22i\x20in\x20m.item\x22></ul>' + '<!--\x20end\x20ngRepeat:\x20i\x20in\x20m.item\x20-->' + '</div>' + '<!--\x20end\x20ngRepeat:\x20m\x20in\x20model\x20-->' + '</div>');
    })), it('HideBindingExpression', inject(function (_0x43eac7, _0x274414) {
        _0x4dbce0 = _0x274414('<div\x20ng-hide=\x22hidden\x20===\x203\x22/>')(_0x43eac7), _0x43eac7['hidden'] = -0x1d9 + 0x9cc + 0x4 * -0x1fc, _0x43eac7['$apply'](), assertHidden(_0x4dbce0), _0x43eac7['hidden'] = -0x1349 * -0x2 + 0x6b9 * -0x4 + 0x53 * -0x24, _0x43eac7['$apply'](), assertVisible(_0x4dbce0);
    })), it('HideBinding', inject(function (_0x45cdc6, _0x2ceb92) {
        _0x4dbce0 = _0x2ceb92('<div\x20ng-hide=\x22hidden\x22/>')(_0x45cdc6), _0x45cdc6['hidden'] = 'true', _0x45cdc6['$apply'](), assertHidden(_0x4dbce0), _0x45cdc6['hidden'] = 'false', _0x45cdc6['$apply'](), assertHidden(_0x4dbce0), _0x45cdc6['hidden'] = -0x70e + 0x1f3 + -0x1 * -0x51b, _0x45cdc6['$apply'](), assertVisible(_0x4dbce0), _0x45cdc6['hidden'] = ![], _0x45cdc6['$apply'](), assertVisible(_0x4dbce0), _0x45cdc6['hidden'] = '', _0x45cdc6['$apply'](), assertVisible(_0x4dbce0);
    })), it('ShowBinding', inject(function (_0x48949a, _0x5f4ee7) {
        _0x4dbce0 = _0x5f4ee7('<div\x20ng-show=\x22show\x22/>')(_0x48949a), _0x48949a['show'] = 'true', _0x48949a['$apply'](), assertVisible(_0x4dbce0), _0x48949a['show'] = 'false', _0x48949a['$apply'](), assertVisible(_0x4dbce0), _0x48949a['show'] = ![], _0x48949a['$apply'](), assertHidden(_0x4dbce0), _0x48949a['show'] = ![], _0x48949a['$apply'](), assertHidden(_0x4dbce0), _0x48949a['show'] = '', _0x48949a['$apply'](), assertHidden(_0x4dbce0);
    })), it('BindClass', inject(function (_0x2a9e6e, _0x3e8209) {
        _0x4dbce0 = _0x3e8209('<div\x20ng-class=\x22clazz\x22/>')(_0x2a9e6e), _0x2a9e6e['clazz'] = 'testClass', _0x2a9e6e['$apply'](), expect(sortedHtml(_0x4dbce0))['toBe']('<div\x20class=\x22testClass\x22\x20ng-class=\x22clazz\x22></div>'), _0x2a9e6e['clazz'] = [
            'a',
            'b'
        ], _0x2a9e6e['$apply'](), expect(sortedHtml(_0x4dbce0))['toBe']('<div\x20class=\x22a\x20b\x22\x20ng-class=\x22clazz\x22></div>');
    })), it('BindClassEvenOdd', inject(function (_0x2b7cca, _0x5a3550) {
        _0x4dbce0 = _0x5a3550('<div>' + '<div\x20ng-repeat=\x22i\x20in\x20[0,1]\x22\x20ng-class-even=\x22\x27e\x27\x22\x20ng-class-odd=\x22\x27o\x27\x22></div>' + '</div>')(_0x2b7cca), _0x2b7cca['$apply']();
        var _0x877c49 = jqLite(_0x4dbce0[-0x1f82 * 0x1 + 0xb3 * -0x5 + 0x2301]['childNodes'][0x183d + -0x1 * 0xc23 + -0xc19]), _0x400e38 = jqLite(_0x4dbce0[-0x1fe6 + 0xbb * 0x2 + 0x1e7 * 0x10]['childNodes'][-0x907 + 0x12cb + -0x9c1]);
        expect(_0x877c49['hasClass']('o'))['toBeTruthy'](), expect(_0x400e38['hasClass']('e'))['toBeTruthy'](), expect(sortedHtml(_0x4dbce0))['toBe']('<div>' + '<!--\x20ngRepeat:\x20i\x20in\x20[0,1]\x20-->' + '<div\x20class=\x22o\x22\x20ng-class-even=\x22\x27e\x27\x22\x20ng-class-odd=\x22\x27o\x27\x22\x20ng-repeat=\x22i\x20in\x20[0,1]\x22></div>' + '<!--\x20end\x20ngRepeat:\x20i\x20in\x20[0,1]\x20-->' + '<div\x20class=\x22e\x22\x20ng-class-even=\x22\x27e\x27\x22\x20ng-class-odd=\x22\x27o\x27\x22\x20ng-repeat=\x22i\x20in\x20[0,1]\x22></div>' + '<!--\x20end\x20ngRepeat:\x20i\x20in\x20[0,1]\x20-->' + '</div>');
    })), it('BindStyle', inject(function (_0x5e3f6d, _0x33013a) {
        _0x4dbce0 = _0x33013a('<div\x20ng-style=\x22style\x22/>')(_0x5e3f6d), _0x5e3f6d['$eval']('style={height:\x20\x2210px\x22}'), _0x5e3f6d['$apply'](), expect(_0x4dbce0['css']('height'))['toBe']('10px'), _0x5e3f6d['$eval']('style={}'), _0x5e3f6d['$apply']();
    })), it('ActionOnAHrefThrowsError', function () {
        module(function (_0x5e31cd) {
            _0x5e31cd['mode']('log');
        }), inject(function (_0x2ae45e, _0x15047c, _0x5dca64) {
            var _0x59af02 = _0x5dca64('<a\x20ng-click=\x22action()\x22>Add\x20Phone</a>')(_0x2ae45e);
            _0x2ae45e['action'] = function () {
                throw new Error('MyError');
            }, browserTrigger(_0x59af02, 'click'), expect(_0x15047c['errors'][-0x6ef + -0x2665 * 0x1 + 0x2d54])['toMatch'](/MyError/);
        });
    }), it('ShouldIgnoreVbNonBindable', inject(function (_0x5d22db, _0x678ff3) {
        _0x4dbce0 = _0x678ff3('<div>{{a}}' + '<div\x20ng-non-bindable>{{a}}</div>' + '<div\x20ng-non-bindable=\x27\x27>{{b}}</div>' + '<div\x20ng-non-bindable=\x27true\x27>{{c}}</div>' + '</div>')(_0x5d22db), _0x5d22db['a'] = 0x21a * 0x3 + 0x11f5 * -0x1 + 0xc22, _0x5d22db['$apply'](), expect(_0x4dbce0['text']())['toBe']('123{{a}}{{b}}{{c}}');
    })), it('ShouldTemplateBindPreElements', inject(function (_0x1414e6, _0x430389) {
        _0x4dbce0 = _0x430389('<pre>Hello\x20{{name}}!</pre>')(_0x1414e6), _0x1414e6['name'] = 'World', _0x1414e6['$apply'](), expect(sortedHtml(_0x4dbce0))['toBe']('<pre>Hello\x20World!</pre>');
    })), it('FillInOptionValueWhenMissing', inject(function (_0xaac952, _0x39343e) {
        _0x4dbce0 = _0x39343e('<select\x20ng-model=\x22foo\x22>' + '<option\x20selected=\x22true\x22>{{a}}</option>' + '<option\x20value=\x22\x22>{{b}}</option>' + '<option>C</option>' + '</select>')(_0xaac952), _0xaac952['a'] = 'A', _0xaac952['b'] = 'B', _0xaac952['$apply']();
        var _0x13172d = _0x500ce4(_0x4dbce0, 0x2fc + 0x3 * 0x42c + -0xf80), _0x422492 = _0x500ce4(_0x4dbce0, -0x48c * 0x3 + -0x187d + 0x65b * 0x6), _0x1e5bc5 = _0x500ce4(_0x4dbce0, 0x3c * -0x4c + 0x1 * -0xd88 + 0x1f5a * 0x1);
        expect(_0x13172d['attr']('value'))['toEqual']('A'), expect(_0x13172d['text']())['toEqual']('A'), expect(_0x422492['attr']('value'))['toEqual'](''), expect(_0x422492['text']())['toEqual']('B'), expect(_0x1e5bc5['attr']('value'))['toEqual']('C'), expect(_0x1e5bc5['text']())['toEqual']('C');
    })), it('ItShouldSelectTheCorrectRadioBox', inject(function (_0x47c48b, _0x195011, _0x37e16b, _0x12070f) {
        _0x4dbce0 = _0x195011('<div>' + '<input\x20type=\x22radio\x22\x20ng-model=\x22sex\x22\x20value=\x22female\x22>' + '<input\x20type=\x22radio\x22\x20ng-model=\x22sex\x22\x20value=\x22male\x22>' + '</div>')(_0x47c48b), jqLite(_0x12070f[0x1193 + -0x53e + -0xc55]['body'])['append'](_0x37e16b['append'](_0x4dbce0));
        var _0x250062 = jqLite(_0x4dbce0[0x1a76 + -0x1 * -0x4d2 + -0x1f48]['childNodes'][0x71 * -0x4d + 0xa99 * -0x3 + 0x41c8]), _0xc8489f = jqLite(_0x4dbce0[0x11f0 + -0x2 * -0x1154 + -0x3498]['childNodes'][-0x101f + -0x895 + 0x18b5]);
        browserTrigger(_0x250062), expect(_0x47c48b['sex'])['toBe']('female'), expect(_0x250062[0x1568 + -0xd59 + 0x1 * -0x80f]['checked'])['toBe'](!![]), expect(_0xc8489f[0x310 + -0xdc6 + -0x6 * -0x1c9]['checked'])['toBe'](![]), expect(_0x250062['val']())['toBe']('female'), browserTrigger(_0xc8489f), expect(_0x47c48b['sex'])['toBe']('male'), expect(_0x250062[0x15ac + 0x859 + 0x1d * -0x109]['checked'])['toBe'](![]), expect(_0xc8489f[0x1e77 + -0x1 * -0x2596 + -0x16af * 0x3]['checked'])['toBe'](!![]), expect(_0xc8489f['val']())['toBe']('male');
    })), it('ItShouldRepeatOnHashes', inject(function (_0x3c3ddc, _0x3eb08a) {
        _0x4dbce0 = _0x3eb08a('<ul>' + '<li\x20ng-repeat=\x22(k,v)\x20in\x20{a:0,b:1}\x22\x20ng-bind=\x22k\x20+\x20v\x22></li>' + '</ul>')(_0x3c3ddc), _0x3c3ddc['$apply'](), expect(sortedHtml(_0x4dbce0))['toBe']('<ul>' + '<!--\x20ngRepeat:\x20(k,v)\x20in\x20{a:0,b:1}\x20-->' + '<li\x20ng-bind=\x22k\x20+\x20v\x22\x20ng-repeat=\x22(k,v)\x20in\x20{a:0,b:1}\x22>a0</li>' + '<!--\x20end\x20ngRepeat:\x20(k,v)\x20in\x20{a:0,b:1}\x20-->' + '<li\x20ng-bind=\x22k\x20+\x20v\x22\x20ng-repeat=\x22(k,v)\x20in\x20{a:0,b:1}\x22>b1</li>' + '<!--\x20end\x20ngRepeat:\x20(k,v)\x20in\x20{a:0,b:1}\x20-->' + '</ul>');
    })), it('ItShouldFireChangeListenersBeforeUpdate', inject(function (_0x30d6ed, _0x43f054) {
        _0x4dbce0 = _0x43f054('<div\x20ng-bind=\x22name\x22></div>')(_0x30d6ed), _0x30d6ed['name'] = '', _0x30d6ed['$watch']('watched', function () {
            _0x30d6ed['name'] = 0x5a4 + 0x20e7 + -0x1d0 * 0x15;
        }), _0x30d6ed['watched'] = 'change', _0x30d6ed['$apply'](), expect(_0x30d6ed['name'])['toBe'](0x106 * 0x22 + 0x16a9 * 0x1 + -0x38fa), expect(sortedHtml(_0x4dbce0))['toBe']('<div\x20ng-bind=\x22name\x22>123</div>');
    })), it('ItShouldHandleMultilineBindings', inject(function (_0x1e58ac, _0x1d4843) {
        _0x4dbce0 = _0x1d4843('<div>{{\x0a\x201\x20\x0a\x20+\x20\x0a\x202\x20\x0a}}</div>')(_0x1e58ac), _0x1e58ac['$apply'](), expect(_0x4dbce0['text']())['toBe']('3');
    }));
});
