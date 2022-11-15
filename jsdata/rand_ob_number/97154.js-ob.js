'use strict';
module['exports'] = function shouldIgnoreConsoleError(_0x221136, _0x52c0af) {
    if (__DEV__) {
        if (typeof _0x221136 === 'string') {
            if (_0x221136['indexOf']('Error:\x20Uncaught\x20[') === 0xcc8 * 0x1 + 0x19ad + -0x2675)
                return !![];
            if (_0x221136['indexOf']('The\x20above\x20error\x20occurred') === -0x1 * 0xc79 + 0x1f39 + -0x12c0)
                return !![];
            if (_0x221136['indexOf']('ReactDOM.render\x20is\x20no\x20longer\x20supported\x20in\x20React\x2018') !== -(0x98d * 0x1 + -0x4 * -0x6a9 + -0x2430) || _0x221136['indexOf']('ReactDOM.hydrate\x20is\x20no\x20longer\x20supported\x20in\x20React\x2018') !== -(0x3 * -0xb71 + 0x3f9 + 0x1e5b))
                return !![];
        }
    } else {
        if (_0x221136 != null && typeof _0x221136['message'] === 'string' && typeof _0x221136['stack'] === 'string' && _0x52c0af['length'] === 0x1c14 * 0x1 + 0x1a5f + -0x3673)
            return !![];
    }
    return ![];
};
