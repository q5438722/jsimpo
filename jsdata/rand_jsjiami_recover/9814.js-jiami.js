module['exports'] = function insertEnv(_0x4a34d9) {
    const _0x3a81e0 = _0x4a34d9['template']('import foo from \'./foo\';');
    return {
        'visitor': {
            'Program'(_0x895dd6) {
                _0x895dd6['node']['body']['unshift'](_0x3a81e0());
            }
        }
    };
};