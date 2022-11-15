const _0x5aa9 = [
    '1078645DOZkBD',
    '2699noVkNp',
    '1164itzhJX',
    'Global\x20API:\x20mixin',
    'options',
    'createSpy',
    'global\x20mixin',
    'mixin',
    '$options',
    'myOption',
    'toHaveBeenCalledWith',
    'hello',
    'should\x20work\x20for\x20constructors\x20created\x20before\x20mixin\x20is\x20applied',
    'extend',
    'test',
    'push',
    '\x20local',
    '\x20global',
    'name',
    'toBe',
    'toEqual',
    'hello\x20local',
    'should\x20work\x20for\x20global\x20props',
    '<div>{{\x20prop\x20}}</div>',
    'prop',
    '$mount',
    '$el',
    'textContent',
    'render',
    'div',
    'should\x20not\x20drop\x20scopedId',
    'foo',
    '<div><p>hi</p></div>',
    'children',
    'should\x20not\x20drop\x20late-attached\x20custom\x20options\x20on\x20existing\x20constructors',
    'base',
    'computed',
    'late\x20attached',
    'beforeCreate',
    'calls',
    'count',
    '$style',
    'should\x20work\x20for\x20a\x20constructor\x20mixin',
    'should\x20not\x20drop\x20original\x20lifecycle\x20hooks',
    'concat',
    'toHaveBeenCalled',
    'should\x20not\x20mix\x20global\x20mixin\x20lifecycle\x20hook\x20twice',
    'methods',
    '731208KzUdgn',
    '870499OVPbGH',
    '21946jvkNdj',
    '19SIMfIL',
    '450419sdAZBh',
    '1059185EBJgAg'
];
const _0x25a25b = _0x518a;
(function (_0x2e8c9e, _0x1c4052) {
    const _0x3da96c = _0x518a;
    while (!![]) {
        try {
            const _0x261473 = parseInt(_0x3da96c(0x8b)) + parseInt(_0x3da96c(0x8c)) + -parseInt(_0x3da96c(0x8d)) * parseInt(_0x3da96c(0x8e)) + parseInt(_0x3da96c(0x8f)) + parseInt(_0x3da96c(0x90)) + parseInt(_0x3da96c(0x91)) + -parseInt(_0x3da96c(0x92)) * parseInt(_0x3da96c(0x93));
            if (_0x261473 === _0x1c4052)
                break;
            else
                _0x2e8c9e['push'](_0x2e8c9e['shift']());
        } catch (_0xcbcd4f) {
            _0x2e8c9e['push'](_0x2e8c9e['shift']());
        }
    }
}(_0x5aa9, 0x9a232));
import _0x4fc0ab from 'vue';
function _0x518a(_0x1096d8, _0x950c47) {
    return _0x518a = function (_0x5aa96d, _0x518a11) {
        _0x5aa96d = _0x5aa96d - 0x8b;
        let _0x1c6109 = _0x5aa9[_0x5aa96d];
        return _0x1c6109;
    }, _0x518a(_0x1096d8, _0x950c47);
}
describe(_0x25a25b(0x94), () => {
    const _0x3cbfd1 = _0x25a25b;
    let _0x3fc480;
    beforeEach(() => {
        _0x3fc480 = _0x4fc0ab['options'];
    }), afterEach(() => {
        const _0x1e97e7 = _0x518a;
        _0x4fc0ab[_0x1e97e7(0x95)] = _0x3fc480;
    }), it('should\x20work', () => {
        const _0x4af65a = _0x518a, _0x3dfbf8 = jasmine[_0x4af65a(0x96)](_0x4af65a(0x97));
        _0x4fc0ab[_0x4af65a(0x98)]({
            'created'() {
                const _0x94c669 = _0x4af65a;
                _0x3dfbf8(this[_0x94c669(0x99)][_0x94c669(0x9a)]);
            }
        }), new _0x4fc0ab({ 'myOption': 'hello' }), expect(_0x3dfbf8)[_0x4af65a(0x9b)](_0x4af65a(0x9c));
    }), it(_0x3cbfd1(0x9d), () => {
        const _0xc545ef = _0x3cbfd1, _0xe0d85f = [], _0x3627ae = _0x4fc0ab[_0xc545ef(0x9e)]({
                'name': _0xc545ef(0x9f),
                'beforeCreate'() {
                    const _0x10bb19 = _0xc545ef;
                    _0xe0d85f[_0x10bb19(0xa0)](this[_0x10bb19(0x99)][_0x10bb19(0x9a)] + _0x10bb19(0xa1));
                }
            });
        _0x4fc0ab['mixin']({
            'beforeCreate'() {
                const _0x46fd40 = _0xc545ef;
                _0xe0d85f[_0x46fd40(0xa0)](this[_0x46fd40(0x99)][_0x46fd40(0x9a)] + _0x46fd40(0xa2));
            }
        }), expect(_0x3627ae[_0xc545ef(0x95)][_0xc545ef(0xa3)])[_0xc545ef(0xa4)](_0xc545ef(0x9f)), new _0x3627ae({ 'myOption': 'hello' }), expect(_0xe0d85f)[_0xc545ef(0xa5)]([
            'hello\x20global',
            _0xc545ef(0xa6)
        ]);
    }), it(_0x3cbfd1(0xa7), () => {
        const _0x2ae945 = _0x3cbfd1, _0x23fe0f = _0x4fc0ab['extend']({ 'template': _0x2ae945(0xa8) });
        _0x4fc0ab[_0x2ae945(0x98)]({ 'props': [_0x2ae945(0xa9)] });
        const _0x48f929 = new _0x4fc0ab({
            'template': '<test\x20prop=\x22hi\x22></test>',
            'components': { 'Test': _0x23fe0f }
        })[_0x2ae945(0xaa)]();
        expect(_0x48f929[_0x2ae945(0xab)][_0x2ae945(0xac)])[_0x2ae945(0xa4)]('hi');
    }), it('should\x20not\x20drop\x20late-set\x20render\x20functions', () => {
        const _0x47d9cb = _0x3cbfd1, _0x2285fc = _0x4fc0ab[_0x47d9cb(0x9e)]({});
        _0x2285fc[_0x47d9cb(0x95)][_0x47d9cb(0xad)] = _0x4c18e6 => _0x4c18e6(_0x47d9cb(0xae), _0x47d9cb(0x9c)), _0x4fc0ab[_0x47d9cb(0x98)]({});
        const _0x24cd54 = new _0x4fc0ab({ 'render': _0x186b55 => _0x186b55(_0x2285fc) })['$mount']();
        expect(_0x24cd54[_0x47d9cb(0xab)]['textContent'])[_0x47d9cb(0xa4)](_0x47d9cb(0x9c));
    }), it(_0x3cbfd1(0xaf), () => {
        const _0x312b27 = _0x3cbfd1, _0xa12d5a = _0x4fc0ab[_0x312b27(0x9e)]({});
        _0xa12d5a[_0x312b27(0x95)]['_scopeId'] = _0x312b27(0xb0), _0x4fc0ab[_0x312b27(0x98)]({});
        const _0x17062d = new _0xa12d5a({ 'template': _0x312b27(0xb1) })[_0x312b27(0xaa)]();
        expect(_0x17062d[_0x312b27(0xab)][_0x312b27(0xb2)][0x0]['hasAttribute'](_0x312b27(0xb0)))[_0x312b27(0xa4)](!![]);
    }), it(_0x3cbfd1(0xb3), () => {
        const _0x513e5f = _0x3cbfd1, _0x15ffa9 = jasmine[_0x513e5f(0x96)](_0x513e5f(0xb4)), _0x5ac2b6 = _0x4fc0ab[_0x513e5f(0x9e)]({ 'beforeCreate': _0x15ffa9 }), _0x360d43 = _0x5ac2b6[_0x513e5f(0x9e)]({});
        _0x360d43['options'][_0x513e5f(0xb5)] = { '$style': () => 0x7b };
        const _0x12325f = jasmine['createSpy'](_0x513e5f(0xb6));
        _0x360d43[_0x513e5f(0x95)]['beforeCreate'] = _0x360d43['options'][_0x513e5f(0xb7)]['concat'](_0x12325f);
        const _0x23a10d = jasmine['createSpy'](_0x513e5f(0x98));
        _0x4fc0ab[_0x513e5f(0x98)]({ 'beforeCreate': _0x23a10d });
        const _0x1f8f96 = new _0x360d43({ 'template': '<div>{{\x20$style\x20}}</div>' })[_0x513e5f(0xaa)]();
        expect(_0x12325f[_0x513e5f(0xb8)]['count']())[_0x513e5f(0xa4)](0x1), expect(_0x15ffa9[_0x513e5f(0xb8)]['count']())['toBe'](0x1), expect(_0x23a10d[_0x513e5f(0xb8)][_0x513e5f(0xb9)]())[_0x513e5f(0xa4)](0x1), expect(_0x1f8f96['$el']['textContent'])['toBe']('123'), expect(_0x1f8f96[_0x513e5f(0xba)])['toBe'](0x7b), expect(_0x360d43[_0x513e5f(0x95)][_0x513e5f(0xb5)][_0x513e5f(0xba)]())['toBe'](0x7b), expect(_0x360d43[_0x513e5f(0x95)][_0x513e5f(0xb7)])[_0x513e5f(0xa5)]([
            _0x23a10d,
            _0x15ffa9,
            _0x12325f
        ]);
    }), it(_0x3cbfd1(0xbb), () => {
        const _0x390a2e = _0x3cbfd1, _0x56832e = jasmine[_0x390a2e(0x96)](_0x390a2e(0x97)), _0x92b3b7 = _0x4fc0ab[_0x390a2e(0x9e)]({
                'created'() {
                    const _0x4eeb13 = _0x390a2e;
                    _0x56832e(this[_0x4eeb13(0x99)][_0x4eeb13(0x9a)]);
                }
            });
        _0x4fc0ab['mixin'](_0x92b3b7), new _0x4fc0ab({ 'myOption': _0x390a2e(0x9c) }), expect(_0x56832e)['toHaveBeenCalledWith'](_0x390a2e(0x9c));
    }), it(_0x3cbfd1(0xbc), () => {
        const _0xb10d40 = _0x3cbfd1, _0x322bc8 = jasmine['createSpy'](_0xb10d40(0xb4)), _0x1ea35a = _0x4fc0ab[_0xb10d40(0x9e)]({ 'beforeCreate': _0x322bc8 }), _0x5d9ece = jasmine[_0xb10d40(0x96)]('injected');
        _0x1ea35a['options'][_0xb10d40(0xb7)] = _0x1ea35a[_0xb10d40(0x95)][_0xb10d40(0xb7)][_0xb10d40(0xbd)](_0x5d9ece), _0x4fc0ab[_0xb10d40(0x98)]({}), new _0x1ea35a({}), expect(_0x322bc8)[_0xb10d40(0xbe)](), expect(_0x5d9ece)[_0xb10d40(0xbe)]();
    }), it('chain\x20call', () => {
        const _0x4cd762 = _0x3cbfd1;
        expect(_0x4fc0ab[_0x4cd762(0x98)]({}))[_0x4cd762(0xa4)](_0x4fc0ab);
    }), it(_0x3cbfd1(0xbf), () => {
        const _0x45b78d = _0x3cbfd1, _0x143ac0 = jasmine['createSpy']('global\x20mixed\x20in\x20lifecycle\x20hook');
        _0x4fc0ab[_0x45b78d(0x98)]({ 'created': _0x143ac0 });
        const _0x4f9752 = _0x4fc0ab[_0x45b78d(0x9e)]({
                'methods': {
                    'a'() {
                    }
                }
            }), _0xa5ec68 = _0x4fc0ab['extend']({ 'mixins': [_0x4f9752] }), _0x6c430d = _0x4fc0ab[_0x45b78d(0x9e)]({ 'mixins': [_0xa5ec68] }), _0x50fb5a = new _0x6c430d();
        expect(typeof _0x50fb5a[_0x45b78d(0x99)][_0x45b78d(0xc0)]['a'])['toBe']('function'), expect(_0x143ac0[_0x45b78d(0xb8)][_0x45b78d(0xb9)]())['toBe'](0x1);
    });
});
