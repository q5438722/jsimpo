const _0x1ce0 = [
    '1vUrJRL',
    'keys',
    'reduce',
    'githubLink',
    'invalidValues',
    'push',
    'url',
    'errors',
    '72710lLzHDZ',
    '116193OcZRAO',
    '8863wwhTAK',
    '31Mhiidj',
    '58100lRGSDN',
    '69563lvhgju',
    '125364qLSwbF',
    '272213XfsEqB'
];
(function (_0x124bc6, _0x523e19) {
    const _0x331862 = _0x5284;
    while (!![]) {
        try {
            const _0x1a2d7f = parseInt(_0x331862(0x122)) + parseInt(_0x331862(0x123)) + -parseInt(_0x331862(0x124)) * -parseInt(_0x331862(0x125)) + -parseInt(_0x331862(0x126)) + -parseInt(_0x331862(0x127)) + parseInt(_0x331862(0x128)) + parseInt(_0x331862(0x129)) * -parseInt(_0x331862(0x12a));
            if (_0x1a2d7f === _0x523e19)
                break;
            else
                _0x124bc6['push'](_0x124bc6['shift']());
        } catch (_0x528550) {
            _0x124bc6['push'](_0x124bc6['shift']());
        }
    }
}(_0x1ce0, 0x2e2d8));
function _0x5284(_0x14ec8b, _0x134cac) {
    return _0x5284 = function (_0x1ce007, _0x528468) {
        _0x1ce007 = _0x1ce007 - 0x122;
        let _0xc2a516 = _0x1ce0[_0x1ce007];
        return _0xc2a516;
    }, _0x5284(_0x14ec8b, _0x134cac);
}
import _0x15ca82 from 'normalize-url';
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
export function formatUrlValues(_0x39957f, _0x2ec5ba) {
    const _0x43af0f = _0x5284, {
            isEditorLinkAllowed: _0x21a50b,
            isLocalLinkAllowed: _0x20c61a,
            types: _0x46805f
        } = _0x2ec5ba, _0x194ae5 = {
            'values': {},
            'errors': [],
            'invalidValues': []
        }, _0x431263 = Object[_0x43af0f(0x12b)](_0x39957f)[_0x43af0f(0x12c)]((_0x5d6c8b, _0x2d4371) => {
            const _0x1a7964 = _0x43af0f;
            let _0x5404ee = _0x39957f[_0x2d4371];
            const _0x510d9b = composeValidators(fCCValidator, httpValidator, _0x20c61a ? null : localhostValidator, _0x2d4371 === _0x1a7964(0x12d) || _0x21a50b ? null : editorValidator)(_0x5404ee);
            _0x510d9b && _0x194ae5[_0x1a7964(0x12e)][_0x1a7964(0x12f)](_0x510d9b);
            if (_0x5404ee && _0x46805f[_0x2d4371] === _0x1a7964(0x130))
                try {
                    _0x5404ee = _0x15ca82(_0x5404ee, normalizeOptions);
                } catch (_0x1a9013) {
                    _0x194ae5[_0x1a7964(0x131)][_0x1a7964(0x12f)]({
                        'error': _0x1a9013,
                        'value': _0x5404ee
                    });
                }
            return {
                ..._0x5d6c8b,
                [_0x2d4371]: _0x5404ee
            };
        }, {});
    return _0x194ae5['values'] = _0x431263, _0x194ae5;
}
