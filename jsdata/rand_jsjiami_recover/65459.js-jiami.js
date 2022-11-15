const t = require('tap');
const glob = require('glob');
const {resolve} = require('path');
const {real: mockNpm} = require('../fixtures/mock-npm');
const full = process['env']['npm_lifecycle_event'] === 'check-coverage';
if (!full)
    t['pass']('nothing to do here, not checking for full coverage');
else {
    const {npm} = mockNpm(t);
    t['teardown'](() => {
        const _0x16add6 = require('../../lib/utils/exit-handler.js');
        _0x16add6['setNpm'](npm);
        _0x16add6();
    });
    t['test']('load npm first', async _0x30f0fd => {
        await npm['load']();
    });
    t['test']('load all the files', _0x36de0b => {
        const _0x2c11d5 = resolve(__dirname, '../../lib');
        for (const _0x433834 of glob['sync'](_0x2c11d5 + '/**/*.js')) {
            require(_0x433834);
            _0x36de0b['pass']('loaded ' + _0x433834);
        }
        _0x36de0b['pass']('loaded all files');
        _0x36de0b['end']();
    });
}