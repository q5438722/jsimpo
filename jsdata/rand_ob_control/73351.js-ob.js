import _0x30a439 from 'normalize-url';
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
export function formatUrlValues(_0x6c971b, _0x434af6) {
    const _0x22b0ea = {
            'CNxGC': function (_0x1f0cf8, _0x55b963, _0x1d5dc7, _0x2d8197, _0x1e231f) {
                return _0x1f0cf8(_0x55b963, _0x1d5dc7, _0x2d8197, _0x1e231f);
            },
            'Bxjmm': function (_0x44682c, _0x112660) {
                return _0x44682c === _0x112660;
            },
            'wDNES': 'githubLink',
            'KAJjM': function (_0x3603ac, _0x35ac3d) {
                return _0x3603ac === _0x35ac3d;
            },
            'ksMRg': 'url',
            'hddtN': function (_0x1f5823, _0x17eb2f, _0x2e8742) {
                return _0x1f5823(_0x17eb2f, _0x2e8742);
            }
        }, {
            isEditorLinkAllowed: _0x4d8513,
            isLocalLinkAllowed: _0x103de4,
            types: _0x26bd57
        } = _0x434af6, _0x4ba3fc = {
            'values': {},
            'errors': [],
            'invalidValues': []
        }, _0x1743e1 = Object['keys'](_0x6c971b)['reduce']((_0x3fe7f4, _0x5b8dcc) => {
            let _0x175cfe = _0x6c971b[_0x5b8dcc];
            const _0x442bdd = _0x22b0ea['CNxGC'](composeValidators, fCCValidator, httpValidator, _0x103de4 ? null : localhostValidator, _0x22b0ea['Bxjmm'](_0x5b8dcc, _0x22b0ea['wDNES']) || _0x4d8513 ? null : editorValidator)(_0x175cfe);
            _0x442bdd && _0x4ba3fc['invalidValues']['push'](_0x442bdd);
            if (_0x175cfe && _0x22b0ea['KAJjM'](_0x26bd57[_0x5b8dcc], _0x22b0ea['ksMRg']))
                try {
                    _0x175cfe = _0x22b0ea['hddtN'](_0x30a439, _0x175cfe, normalizeOptions);
                } catch (_0x46f336) {
                    _0x4ba3fc['errors']['push']({
                        'error': _0x46f336,
                        'value': _0x175cfe
                    });
                }
            return {
                ..._0x3fe7f4,
                [_0x5b8dcc]: _0x175cfe
            };
        }, {});
    return _0x4ba3fc['values'] = _0x1743e1, _0x4ba3fc;
}
