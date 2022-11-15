const moment = require('moment-timezone'), settingsCache = require('../../../../../../../shared/settings-cache'), format = _0x5efcf6 => {
        return moment(_0x5efcf6)['tz'](settingsCache['get']('timezone'))['toISOString'](!![]);
    }, forPost = _0x26303b => {
        return [
            'created_at',
            'updated_at',
            'published_at'
        ]['forEach'](_0x479059 => {
            _0x26303b[_0x479059] && (_0x26303b[_0x479059] = format(_0x26303b[_0x479059]));
        }), _0x26303b;
    };
module['exports']['format'] = format, module['exports']['forPost'] = forPost;
