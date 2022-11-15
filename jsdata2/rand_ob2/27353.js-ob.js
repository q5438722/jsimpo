const _0x5f0c = [
    '1001891ioZOAa',
    '273173IoWjnG',
    '740310IuEzFs',
    'join',
    '@material-ui/codemod',
    'collapse-rename-collapsedheight',
    'transforms\x20props\x20as\x20needed',
    './collapse-rename-collapsedheight.test/actual.js',
    'resolve',
    './collapse-rename-collapsedheight.test/expected.js',
    'equal',
    'The\x20transformed\x20version\x20should\x20be\x20correct',
    'should\x20be\x20idempotent',
    '1mIRlwZ',
    '147164ayXxvT',
    '228278GlPrNB',
    '67493lwpocD',
    '1CdDKSo',
    '512302QZsuUS'
];
const _0x18a2b9 = _0x40f5;
(function (_0x14e64a, _0x2e6f3f) {
    const _0x26be87 = _0x40f5;
    while (!![]) {
        try {
            const _0x5e2b03 = -parseInt(_0x26be87(0xf3)) * parseInt(_0x26be87(0xf4)) + -parseInt(_0x26be87(0xf5)) + -parseInt(_0x26be87(0xf6)) * -parseInt(_0x26be87(0xf7)) + -parseInt(_0x26be87(0xf8)) + parseInt(_0x26be87(0xf9)) + -parseInt(_0x26be87(0xfa)) + parseInt(_0x26be87(0xfb));
            if (_0x5e2b03 === _0x2e6f3f)
                break;
            else
                _0x14e64a['push'](_0x14e64a['shift']());
        } catch (_0x4fabb2) {
            _0x14e64a['push'](_0x14e64a['shift']());
        }
    }
}(_0x5f0c, 0x9e649));
import _0xb0845a from 'path';
import { expect } from 'chai';
function _0x40f5(_0x27617d, _0x32dba5) {
    return _0x40f5 = function (_0x5f0c69, _0x40f572) {
        _0x5f0c69 = _0x5f0c69 - 0xf3;
        let _0x37a33c = _0x5f0c[_0x5f0c69];
        return _0x37a33c;
    }, _0x40f5(_0x27617d, _0x32dba5);
}
import _0x1c2b98 from 'jscodeshift';
import _0x43329f from './collapse-rename-collapsedheight';
import _0x3a52c4 from '../util/readFile';
function read(_0xb0a057) {
    const _0xabdc5b = _0x40f5;
    return _0x3a52c4(_0xb0845a[_0xabdc5b(0xfc)](__dirname, _0xb0a057));
}
describe(_0x18a2b9(0xfd), () => {
    describe('v5.0.0', () => {
        const _0x17da28 = _0x40f5;
        describe(_0x17da28(0xfe), () => {
            const _0xc592a2 = _0x17da28;
            it(_0xc592a2(0xff), () => {
                const _0x2d1c73 = _0xc592a2, _0x2750d3 = _0x43329f({
                        'source': read(_0x2d1c73(0x100)),
                        'path': require[_0x2d1c73(0x101)](_0x2d1c73(0x100))
                    }, { 'jscodeshift': _0x1c2b98 }, {}), _0xb843b0 = read(_0x2d1c73(0x102));
                expect(_0x2750d3)['to'][_0x2d1c73(0x103)](_0xb843b0, _0x2d1c73(0x104));
            }), it(_0xc592a2(0x105), () => {
                const _0x356bf0 = _0xc592a2, _0x446f96 = _0x43329f({
                        'source': read(_0x356bf0(0x102)),
                        'path': require[_0x356bf0(0x101)](_0x356bf0(0x102))
                    }, { 'jscodeshift': _0x1c2b98 }, {}), _0x12d80e = read(_0x356bf0(0x102));
                expect(_0x446f96)['to'][_0x356bf0(0x103)](_0x12d80e, _0x356bf0(0x104));
            });
        });
    });
});
