const _0x35b7 = [
    'values',
    '170265TqLcnc',
    '258596gLfbzk',
    '281983yfwfND',
    '526178lkZaaI',
    '1OSOOBg',
    '537427hOizTZ',
    '1wpSuei',
    '567935EfbJfG',
    '8rDInJp',
    '164555ERYyxx',
    'reduce',
    'githubLink',
    'invalidValues',
    'push',
    'url',
    'errors'
];
(function (_0xaf7b34, _0x199cc8) {
    const _0x6afd03 = _0x1fb3;
    while (!![]) {
        try {
            const _0x1e9647 = parseInt(_0x6afd03(0x77)) + -parseInt(_0x6afd03(0x78)) + -parseInt(_0x6afd03(0x79)) + parseInt(_0x6afd03(0x7a)) + parseInt(_0x6afd03(0x7b)) * -parseInt(_0x6afd03(0x7c)) + parseInt(_0x6afd03(0x7d)) * -parseInt(_0x6afd03(0x7e)) + -parseInt(_0x6afd03(0x7f)) * -parseInt(_0x6afd03(0x80));
            if (_0x1e9647 === _0x199cc8)
                break;
            else
                _0xaf7b34['push'](_0xaf7b34['shift']());
        } catch (_0x5e1435) {
            _0xaf7b34['push'](_0xaf7b34['shift']());
        }
    }
}(_0x35b7, 0x5995e));
import _0x29165c from 'normalize-url';
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
function _0x1fb3(_0x5af39a, _0x1def23) {
    return _0x1fb3 = function (_0x35b78b, _0x1fb39f) {
        _0x35b78b = _0x35b78b - 0x77;
        let _0x4213f0 = _0x35b7[_0x35b78b];
        return _0x4213f0;
    }, _0x1fb3(_0x5af39a, _0x1def23);
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
export function formatUrlValues(_0x4a0b4b, _0x5a4984) {
    const _0x3dea02 = _0x1fb3, {
            isEditorLinkAllowed: _0x4be49e,
            isLocalLinkAllowed: _0x5c7c7a,
            types: _0x12d9f8
        } = _0x5a4984, _0xf3e25f = {
            'values': {},
            'errors': [],
            'invalidValues': []
        }, _0x4cc192 = Object['keys'](_0x4a0b4b)[_0x3dea02(0x81)]((_0x31d7f1, _0xd66cd5) => {
            const _0x1dfcdf = _0x3dea02;
            let _0x344f96 = _0x4a0b4b[_0xd66cd5];
            const _0x4360e9 = composeValidators(fCCValidator, httpValidator, _0x5c7c7a ? null : localhostValidator, _0xd66cd5 === _0x1dfcdf(0x82) || _0x4be49e ? null : editorValidator)(_0x344f96);
            _0x4360e9 && _0xf3e25f[_0x1dfcdf(0x83)][_0x1dfcdf(0x84)](_0x4360e9);
            if (_0x344f96 && _0x12d9f8[_0xd66cd5] === _0x1dfcdf(0x85))
                try {
                    _0x344f96 = _0x29165c(_0x344f96, normalizeOptions);
                } catch (_0x5ae5c0) {
                    _0xf3e25f[_0x1dfcdf(0x86)][_0x1dfcdf(0x84)]({
                        'error': _0x5ae5c0,
                        'value': _0x344f96
                    });
                }
            return {
                ..._0x31d7f1,
                [_0xd66cd5]: _0x344f96
            };
        }, {});
    return _0xf3e25f[_0x3dea02(0x87)] = _0x4cc192, _0xf3e25f;
}
