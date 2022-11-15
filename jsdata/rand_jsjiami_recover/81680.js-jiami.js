const moment = require('moment-timezone');
const settingsCache = require('../../../../../../../shared/settings-cache');
const format = _0x426206 => {
    return moment(_0x426206)['tz'](settingsCache['get']('timezone'))['toISOString'](!![]);
};
const forPost = _0x1abf2e => {
    [
        'created_at',
        'updated_at',
        'published_at'
    ]['forEach'](_0x28a93e => {
        if (_0x1abf2e[_0x28a93e]) {
            _0x1abf2e[_0x28a93e] = format(_0x1abf2e[_0x28a93e]);
        }
    });
    return _0x1abf2e;
};
module['exports']['format'] = format;
module['exports']['forPost'] = forPost;