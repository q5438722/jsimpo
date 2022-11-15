const _0x14ed = [
    '617927MSufjg',
    'githubLink',
    'keys',
    'reduce',
    'nTjJL',
    'mexKU',
    'invalidValues',
    'push',
    'WZAWt',
    '669259aOhEua',
    '1qzEiIe',
    '2215LlkqNt',
    '322pCzDPF',
    '106083Wmzjob',
    '7cXKbgN',
    '477973WEFARV',
    '1283059kXZddg',
    '264BsITWT',
    '422JDIAzT'
];
(function (_0x5423a0, _0x3bdea6) {
    const _0x18a939 = _0x447b;
    while (!![]) {
        try {
            const _0x418dbd = parseInt(_0x18a939(0x10f)) * -parseInt(_0x18a939(0x110)) + parseInt(_0x18a939(0x111)) * parseInt(_0x18a939(0x112)) + -parseInt(_0x18a939(0x113)) * parseInt(_0x18a939(0x114)) + -parseInt(_0x18a939(0x115)) + parseInt(_0x18a939(0x116)) + -parseInt(_0x18a939(0x117)) * -parseInt(_0x18a939(0x118)) + parseInt(_0x18a939(0x119));
            if (_0x418dbd === _0x3bdea6)
                break;
            else
                _0x5423a0['push'](_0x5423a0['shift']());
        } catch (_0x256806) {
            _0x5423a0['push'](_0x5423a0['shift']());
        }
    }
}(_0x14ed, 0x11bb42 + -0x106ab + 0xe2 * -0x47a));
import _0x3351c3 from 'normalize-url';
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
function _0x447b(_0x55a621, _0x5f5b23) {
    return _0x447b = function (_0x5d1a94, _0x1ebc31) {
        _0x5d1a94 = _0x5d1a94 - (-0x9c3 + -0x1d5 * 0x3 + 0x1051 * 0x1);
        let _0x313e84 = _0x14ed[_0x5d1a94];
        return _0x313e84;
    }, _0x447b(_0x55a621, _0x5f5b23);
}
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
export function formatUrlValues(_0x5de91c, _0x47eade) {
    const _0x571e94 = _0x447b, _0x76c9cb = {
            'nTjJL': function (_0x39f925, _0x168947, _0x535509, _0x20fe79, _0x3da6b5) {
                return _0x39f925(_0x168947, _0x535509, _0x20fe79, _0x3da6b5);
            },
            'mexKU': _0x571e94(0x11a),
            'WZAWt': function (_0x3f2893, _0x2c7fe3) {
                return _0x3f2893 === _0x2c7fe3;
            },
            'SpRDR': 'url'
        }, {
            isEditorLinkAllowed: _0x265d96,
            isLocalLinkAllowed: _0x5c6717,
            types: _0xfad2c6
        } = _0x47eade, _0x343af0 = {
            'values': {},
            'errors': [],
            'invalidValues': []
        }, _0x4e5ca8 = Object[_0x571e94(0x11b)](_0x5de91c)[_0x571e94(0x11c)]((_0x5ed5f4, _0x42ae50) => {
            const _0x424f6d = _0x571e94;
            let _0xa8885 = _0x5de91c[_0x42ae50];
            const _0x19f609 = _0x76c9cb[_0x424f6d(0x11d)](composeValidators, fCCValidator, httpValidator, _0x5c6717 ? null : localhostValidator, _0x42ae50 === _0x76c9cb[_0x424f6d(0x11e)] || _0x265d96 ? null : editorValidator)(_0xa8885);
            _0x19f609 && _0x343af0[_0x424f6d(0x11f)][_0x424f6d(0x120)](_0x19f609);
            if (_0xa8885 && _0x76c9cb[_0x424f6d(0x121)](_0xfad2c6[_0x42ae50], _0x76c9cb['SpRDR']))
                try {
                    _0xa8885 = _0x3351c3(_0xa8885, normalizeOptions);
                } catch (_0x50b95c) {
                    _0x343af0['errors'][_0x424f6d(0x120)]({
                        'error': _0x50b95c,
                        'value': _0xa8885
                    });
                }
            return {
                ..._0x5ed5f4,
                [_0x42ae50]: _0xa8885
            };
        }, {});
    return _0x343af0['values'] = _0x4e5ca8, _0x343af0;
}
