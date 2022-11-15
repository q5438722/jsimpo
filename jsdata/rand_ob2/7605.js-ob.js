const _0x49da = [
    '<div\x20v-bind:style=\x22[a,\x20b,\x20c]\x22></div>',
    'style:[a,\x20b,\x20c]',
    'should\x20compile\x20style\x20binding\x20of\x20map',
    'style:{\x20a:\x20x,\x20b:\x20\x27y\x27\x20+\x20z\x20}',
    'should\x20compile\x20style\x20binding\x20of\x20a\x20variable',
    'style:x',
    '<div\x20:style=\x22[a,\x20b,\x20c]\x22></div>',
    '1817661MCAewH',
    '479422UFryFR',
    '1545799LgYAWc',
    '94211ygRmNk',
    '5lhIUFm',
    '43869bmBdjb',
    '12OGVQiv',
    '818543VUGKJe',
    '37048wtHXOG',
    'compile\x20style',
    'should\x20be\x20compiled',
    '<div\x20style=\x22a:\x20x;\x20b:\x20y\x22></div>',
    'not',
    'toBeUndefined',
    'length',
    'toEqual',
    'toMatch',
    'staticStyle:{a:\x22x\x22,b:\x22y\x22}',
    '<div\x20style=\x22\x22></div>',
    'should\x20compile\x20style\x20value\x20with\x20trailing\x20semicolon',
    '<div\x20style=\x22a:\x20x;\x20b:\x20y;\x22></div>',
    'staticStyle:{AbcDef:\x22x-y\x22,abcDef:\x22x-y\x22}',
    'should\x20compile\x20dynamic\x20style',
    '<div\x20style=\x22a:\x20x;\x20b:\x20{{y}}\x22></div>',
    'b:\x20{{y}}',
    'v-bind',
    'should\x20compile\x20style\x20binding\x20of\x20array'
];
const _0x1657b0 = _0x50fd;
(function (_0x5bc548, _0x289878) {
    const _0xa0e8a1 = _0x50fd;
    while (!![]) {
        try {
            const _0x59a127 = -parseInt(_0xa0e8a1(0x79)) + parseInt(_0xa0e8a1(0x7a)) + parseInt(_0xa0e8a1(0x7b)) + parseInt(_0xa0e8a1(0x7c)) * parseInt(_0xa0e8a1(0x7d)) + -parseInt(_0xa0e8a1(0x7e)) * parseInt(_0xa0e8a1(0x7f)) + parseInt(_0xa0e8a1(0x80)) + -parseInt(_0xa0e8a1(0x81));
            if (_0x59a127 === _0x289878)
                break;
            else
                _0x5bc548['push'](_0x5bc548['shift']());
        } catch (_0x35522a) {
            _0x5bc548['push'](_0x5bc548['shift']());
        }
    }
}(_0x49da, 0xe3f32));
import { compile } from '../../../packages/weex-template-compiler';
function _0x50fd(_0x1f9288, _0x361cee) {
    return _0x50fd = function (_0x49da6c, _0x50fdcd) {
        _0x49da6c = _0x49da6c - 0x79;
        let _0x22a7c9 = _0x49da[_0x49da6c];
        return _0x22a7c9;
    }, _0x50fd(_0x1f9288, _0x361cee);
}
import { strToRegExp } from '../helpers/index';
describe(_0x1657b0(0x82), () => {
    const _0xde860c = _0x1657b0;
    it(_0xde860c(0x83), () => {
        const _0x1fc8f7 = _0xde860c, {
                render: _0x55310f,
                staticRenderFns: _0x39c3ab,
                errors: _0x2bd1de
            } = compile(_0x1fc8f7(0x84));
        expect(_0x55310f)[_0x1fc8f7(0x85)][_0x1fc8f7(0x86)](), expect(_0x39c3ab)[_0x1fc8f7(0x85)][_0x1fc8f7(0x86)](), expect(_0x39c3ab[_0x1fc8f7(0x87)])[_0x1fc8f7(0x88)](0x0), expect(_0x55310f)[_0x1fc8f7(0x89)](strToRegExp(_0x1fc8f7(0x8a))), expect(_0x2bd1de)[_0x1fc8f7(0x88)]([]);
    }), it('should\x20compile\x20empty\x20style\x20value', () => {
        const _0x68ed63 = _0xde860c, {
                render: _0x14cead,
                staticRenderFns: _0x1ed438,
                errors: _0x1fc261
            } = compile(_0x68ed63(0x8b));
        expect(_0x14cead)[_0x68ed63(0x85)][_0x68ed63(0x86)](), expect(_0x1ed438)[_0x68ed63(0x85)][_0x68ed63(0x86)](), expect(_0x1ed438[_0x68ed63(0x87)])['toEqual'](0x0), expect(_0x14cead)[_0x68ed63(0x89)](/[(^style|^staticStyle)]/), expect(_0x1fc261)[_0x68ed63(0x88)]([]);
    }), it(_0xde860c(0x8c), () => {
        const _0x5ca182 = _0xde860c, {
                render: _0x4adf91,
                staticRenderFns: _0x461e1a,
                errors: _0x386510
            } = compile(_0x5ca182(0x8d));
        expect(_0x4adf91)[_0x5ca182(0x85)][_0x5ca182(0x86)](), expect(_0x461e1a)[_0x5ca182(0x85)][_0x5ca182(0x86)](), expect(_0x461e1a['length'])[_0x5ca182(0x88)](0x0), expect(_0x4adf91)[_0x5ca182(0x89)](strToRegExp(_0x5ca182(0x8a))), expect(_0x386510)[_0x5ca182(0x88)]([]);
    }), it('should\x20compile\x20hyphenated\x20style\x20name\x20&\x20value', () => {
        const _0x187fd1 = _0xde860c, {
                render: _0xa0b75c,
                staticRenderFns: _0x47f17e,
                errors: _0x3a036f
            } = compile('<div\x20style=\x22-abc-def:\x20x-y;\x20abc-def:\x20x-y\x22></div>');
        expect(_0xa0b75c)[_0x187fd1(0x85)][_0x187fd1(0x86)](), expect(_0x47f17e)['not']['toBeUndefined'](), expect(_0x47f17e[_0x187fd1(0x87)])[_0x187fd1(0x88)](0x0), expect(_0xa0b75c)[_0x187fd1(0x89)](strToRegExp(_0x187fd1(0x8e))), expect(_0x3a036f)[_0x187fd1(0x88)]([]);
    }), it(_0xde860c(0x8f), () => {
        const _0x1475a9 = _0xde860c, {
                render: _0x4daba5,
                staticRenderFns: _0x42e534,
                errors: _0x753c0e
            } = compile(_0x1475a9(0x90));
        expect(_0x4daba5)[_0x1475a9(0x85)][_0x1475a9(0x86)](), expect(_0x42e534)['toEqual']([]), expect(_0x4daba5)[_0x1475a9(0x89)](strToRegExp('style:{a:\x22x\x22,b:_s(y)}')), expect(_0x753c0e)[_0x1475a9(0x85)][_0x1475a9(0x86)](), expect(_0x753c0e['length'])[_0x1475a9(0x88)](0x1), expect(_0x753c0e[0x0])[_0x1475a9(0x89)](strToRegExp(_0x1475a9(0x91))), expect(_0x753c0e[0x0])['toMatch'](strToRegExp(_0x1475a9(0x92)));
    }), it(_0xde860c(0x93), () => {
        const _0x117e2e = _0xde860c, {
                render: _0x4ff6cb,
                staticRenderFns: _0x3e58fd,
                errors: _0x3853d2
            } = compile(_0x117e2e(0x94));
        expect(_0x4ff6cb)['not'][_0x117e2e(0x86)](), expect(_0x3e58fd)[_0x117e2e(0x88)]([]), expect(_0x4ff6cb)[_0x117e2e(0x89)](strToRegExp(_0x117e2e(0x95))), expect(_0x3853d2)[_0x117e2e(0x88)]([]);
    }), it(_0xde860c(0x96), () => {
        const _0x291849 = _0xde860c, {
                render: _0x1f0858,
                staticRenderFns: _0x46645f,
                errors: _0x2540b6
            } = compile('<div\x20v-bind:style=\x22{\x20a:\x20x,\x20b:\x20\x27y\x27\x20+\x20z\x20}\x22></div>');
        expect(_0x1f0858)[_0x291849(0x85)][_0x291849(0x86)](), expect(_0x46645f)[_0x291849(0x88)]([]), expect(_0x1f0858)['toMatch'](strToRegExp(_0x291849(0x97))), expect(_0x2540b6)['toEqual']([]);
    }), it(_0xde860c(0x98), () => {
        const _0x55c056 = _0xde860c, {
                render: _0x3ca8f3,
                staticRenderFns: _0x5b0cc4,
                errors: _0x180522
            } = compile('<div\x20v-bind:style=\x22x\x22></div>');
        expect(_0x3ca8f3)[_0x55c056(0x85)][_0x55c056(0x86)](), expect(_0x5b0cc4)['toEqual']([]), expect(_0x3ca8f3)[_0x55c056(0x89)](strToRegExp(_0x55c056(0x99))), expect(_0x180522)[_0x55c056(0x88)]([]);
    }), it('should\x20compile\x20style\x20binding\x20by\x20shorthand', () => {
        const _0x3a3d41 = _0xde860c, {
                render: _0x85f1a4,
                staticRenderFns: _0x7354a3,
                errors: _0x1123d1
            } = compile(_0x3a3d41(0x9a));
        expect(_0x85f1a4)[_0x3a3d41(0x85)][_0x3a3d41(0x86)](), expect(_0x7354a3)[_0x3a3d41(0x88)]([]), expect(_0x85f1a4)[_0x3a3d41(0x89)](strToRegExp(_0x3a3d41(0x95))), expect(_0x1123d1)[_0x3a3d41(0x88)]([]);
    });
});
