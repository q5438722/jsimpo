const t = require('tap'), glob = require('glob'), {resolve} = require('path'), {real: mockNpm} = require('../fixtures/mock-npm'), full = process['env']['npm_lifecycle_event'] === 'check-coverage';
if (!full)
    t['pass']('nothing\x20to\x20do\x20here,\x20not\x20checking\x20for\x20full\x20coverage');
else {
    const {npm} = mockNpm(t);
    t['teardown'](() => {
        const _0x1e9246 = require('../../lib/utils/exit-handler.js');
        _0x1e9246['setNpm'](npm), _0x1e9246();
    }), t['test']('load\x20npm\x20first', async _0x550378 => {
        await npm['load']();
    }), t['test']('load\x20all\x20the\x20files', _0xcdb422 => {
        const _0x17bbcc = resolve(__dirname, '../../lib');
        for (const _0x27e7a3 of glob['sync'](_0x17bbcc + '/**/*.js')) {
            require(_0x27e7a3), _0xcdb422['pass']('loaded\x20' + _0x27e7a3);
        }
        _0xcdb422['pass']('loaded\x20all\x20files'), _0xcdb422['end']();
    });
}
