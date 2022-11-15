const _0xdbd3 = [
    '848840uAwRqU',
    '129187qqXKxq',
    '3jtFgId',
    '69934fOkpiw',
    'keys',
    'syAIB',
    'KLqru',
    'CmCIp',
    'errors',
    'push',
    'values',
    '850083UeRFup',
    '125687NQSXfO',
    '1ukKVcs',
    '96523QkvBxy',
    '5rvhojB',
    '184741DiMzXN',
    '1zEvenC'
];
(function (_0x269a61, _0x2abe62) {
    const _0x53b40b = _0x3ca8;
    while (!![]) {
        try {
            const _0x128c30 = -parseInt(_0x53b40b(0x117)) + parseInt(_0x53b40b(0x118)) * -parseInt(_0x53b40b(0x119)) + parseInt(_0x53b40b(0x11a)) * parseInt(_0x53b40b(0x11b)) + -parseInt(_0x53b40b(0x11c)) * -parseInt(_0x53b40b(0x11d)) + parseInt(_0x53b40b(0x11e)) + parseInt(_0x53b40b(0x11f)) + -parseInt(_0x53b40b(0x120)) * parseInt(_0x53b40b(0x121));
            if (_0x128c30 === _0x2abe62)
                break;
            else
                _0x269a61['push'](_0x269a61['shift']());
        } catch (_0x49cad9) {
            _0x269a61['push'](_0x269a61['shift']());
        }
    }
}(_0xdbd3, 0xd68e9 * -0x1 + -0x7879 * 0xf + 0x3 * 0x92961));
function _0x3ca8(_0x1b6304, _0x22d9f1) {
    return _0x3ca8 = function (_0xa3094e, _0x4f73f6) {
        _0xa3094e = _0xa3094e - (-0x20c9 + -0x1 * 0xb0d + -0x173 * -0x1f);
        let _0x460942 = _0xdbd3[_0xa3094e];
        return _0x460942;
    }, _0x3ca8(_0x1b6304, _0x22d9f1);
}
import _0x27f908 from 'normalize-url';
import {
    localhostValidator,
    editorValidator,
    composeValidators,
    fCCValidator,
    httpValidator
} from './FormValidators';
export {
    default as BlockSaveButton
} from './block-save-button';
export {
    default as BlockSaveWrapper
} from './block-save-wrapper';
export {
    default as Form
} from './Form.js';
export {
    default as FormFields
} from './FormFields.js';
const normalizeOptions = { 'stripWWW': ![] };
export function formatUrlValues(_0x4d2a20, _0x4d42c8) {
    const _0x41c37b = _0x3ca8, _0x202ad3 = {
            'syAIB': function (_0x46636c, _0x4dbb5e) {
                return _0x46636c === _0x4dbb5e;
            },
            'TXqla': 'githubLink',
            'KLqru': function (_0x3581b2, _0x2e0e8d) {
                return _0x3581b2 === _0x2e0e8d;
            },
            'CmCIp': 'url',
            'NQwhM': function (_0x309735, _0x18b529, _0x12c812) {
                return _0x309735(_0x18b529, _0x12c812);
            }
        }, {
            isEditorLinkAllowed: _0x5156f3,
            isLocalLinkAllowed: _0x1f880d,
            types: _0x11af8f
        } = _0x4d42c8, _0x2e2e09 = {
            'values': {},
            'errors': [],
            'invalidValues': []
        }, _0x1a3917 = Object[_0x41c37b(0x122)](_0x4d2a20)['reduce']((_0x568a9a, _0x2006fa) => {
            const _0x14f373 = _0x41c37b;
            let _0x110a7a = _0x4d2a20[_0x2006fa];
            const _0x1e2dd8 = composeValidators(fCCValidator, httpValidator, _0x1f880d ? null : localhostValidator, _0x202ad3[_0x14f373(0x123)](_0x2006fa, _0x202ad3['TXqla']) || _0x5156f3 ? null : editorValidator)(_0x110a7a);
            _0x1e2dd8 && _0x2e2e09['invalidValues']['push'](_0x1e2dd8);
            if (_0x110a7a && _0x202ad3[_0x14f373(0x124)](_0x11af8f[_0x2006fa], _0x202ad3[_0x14f373(0x125)]))
                try {
                    _0x110a7a = _0x202ad3['NQwhM'](_0x27f908, _0x110a7a, normalizeOptions);
                } catch (_0x213d07) {
                    _0x2e2e09[_0x14f373(0x126)][_0x14f373(0x127)]({
                        'error': _0x213d07,
                        'value': _0x110a7a
                    });
                }
            return {
                ..._0x568a9a,
                [_0x2006fa]: _0x110a7a
            };
        }, {});
    return _0x2e2e09[_0x41c37b(0x128)] = _0x1a3917, _0x2e2e09;
}
