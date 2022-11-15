import _0x210098 from 'normalize-url';
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
export function formatUrlValues(_0x5d3bcd, _0x4a0a19) {
    const {
            isEditorLinkAllowed: _0x455d07,
            isLocalLinkAllowed: _0x43c4b0,
            types: _0xd95a71
        } = _0x4a0a19, _0x3626bd = {
            'values': {},
            'errors': [],
            'invalidValues': []
        }, _0x532212 = Object['keys'](_0x5d3bcd)['reduce']((_0x54042c, _0x1ce30f) => {
            let _0x4844fb = _0x5d3bcd[_0x1ce30f];
            const _0x3132f9 = composeValidators(fCCValidator, httpValidator, _0x43c4b0 ? null : localhostValidator, _0x1ce30f === 'githubLink' || _0x455d07 ? null : editorValidator)(_0x4844fb);
            _0x3132f9 && _0x3626bd['invalidValues']['push'](_0x3132f9);
            if (_0x4844fb && _0xd95a71[_0x1ce30f] === 'url')
                try {
                    _0x4844fb = _0x210098(_0x4844fb, normalizeOptions);
                } catch (_0x126d4c) {
                    _0x3626bd['errors']['push']({
                        'error': _0x126d4c,
                        'value': _0x4844fb
                    });
                }
            return {
                ..._0x54042c,
                [_0x1ce30f]: _0x4844fb
            };
        }, {});
    return _0x3626bd['values'] = _0x532212, _0x3626bd;
}
