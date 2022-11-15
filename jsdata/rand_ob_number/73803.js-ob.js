import _0x151759 from 'assert';
import _0x1d9a6c from 'lodash';
import {
    args,
    toArgs
} from './utils.js';
import _0x26f3a5 from '../pick.js';
describe('pick', function () {
    var _0x358c98 = toArgs([
            'a',
            'c'
        ]), _0x161da7 = {
            'a': 0x1,
            'b': 0x2,
            'c': 0x3,
            'd': 0x4
        }, _0xbdec2 = {
            'a': 0x1,
            'b': {
                'c': 0x2,
                'd': 0x3
            }
        };
    it('should\x20flatten\x20`paths`', function () {
        _0x151759['deepStrictEqual'](_0x26f3a5(_0x161da7, 'a', 'c'), {
            'a': 0x1,
            'c': 0x3
        }), _0x151759['deepStrictEqual'](_0x26f3a5(_0x161da7, [
            'a',
            'd'
        ], 'c'), {
            'a': 0x1,
            'c': 0x3,
            'd': 0x4
        });
    }), it('should\x20support\x20deep\x20paths', function () {
        _0x151759['deepStrictEqual'](_0x26f3a5(_0xbdec2, 'b.c'), { 'b': { 'c': 0x2 } });
    }), it('should\x20support\x20path\x20arrays', function () {
        var _0x180e95 = {
                'a.b': 0x1,
                'a': { 'b': 0x2 }
            }, _0x20a7c6 = _0x26f3a5(_0x180e95, [['a.b']]);
        _0x151759['deepStrictEqual'](_0x20a7c6, { 'a.b': 0x1 });
    }), it('should\x20pick\x20a\x20key\x20over\x20a\x20path', function () {
        var _0x352627 = {
            'a.b': 0x1,
            'a': { 'b': 0x2 }
        };
        _0x1d9a6c['each']([
            'a.b',
            ['a.b']
        ], function (_0x397f0d) {
            _0x151759['deepStrictEqual'](_0x26f3a5(_0x352627, _0x397f0d), { 'a.b': 0x1 });
        });
    }), it('should\x20coerce\x20`paths`\x20to\x20strings', function () {
        _0x151759['deepStrictEqual'](_0x26f3a5({
            '0': 'a',
            '1': 'b'
        }, 0x1 * -0x1311 + -0x3d * 0x3a + 0x20e3), { '0': 'a' });
    }), it('should\x20return\x20an\x20empty\x20object\x20when\x20`object`\x20is\x20nullish', function () {
        _0x1d9a6c['each']([
            null,
            undefined
        ], function (_0x33e0c5) {
            _0x151759['deepStrictEqual'](_0x26f3a5(_0x33e0c5, 'valueOf'), {});
        });
    }), it('should\x20work\x20with\x20a\x20primitive\x20`object`', function () {
        _0x151759['deepStrictEqual'](_0x26f3a5('', 'slice'), { 'slice': ''['slice'] });
    }), it('should\x20work\x20with\x20`arguments`\x20object\x20`paths`', function () {
        _0x151759['deepStrictEqual'](_0x26f3a5(_0x161da7, _0x358c98), {
            'a': 0x1,
            'c': 0x3
        });
    });
});
