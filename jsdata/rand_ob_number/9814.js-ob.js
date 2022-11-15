module['exports'] = function insertEnv(_0x35b77f) {
    const _0x5731a8 = _0x35b77f['template']('import\x20foo\x20from\x20\x27./foo\x27;');
    return {
        'visitor': {
            'Program'(_0x48724a) {
                _0x48724a['node']['body']['unshift'](_0x5731a8());
            }
        }
    };
};
