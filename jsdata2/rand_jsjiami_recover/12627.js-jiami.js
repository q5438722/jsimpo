'use strict';
const strapiAdmin = require('strapi-admin');
const {getConfigUrls, getAbsoluteServerUrl} = require('strapi-utils');
const loadConfiguration = require('../core/app-configuration');
const ee = require('../utils/ee');
const addSlash = require('../utils/addSlash');
module['exports'] = async function ({browser}) {
    const _0x53e5d4 = process['cwd']();
    const _0x525b26 = loadConfiguration(_0x53e5d4);
    const {adminPath} = getConfigUrls(_0x525b26['get']('server'), !![]);
    const _0x3cf96b = _0x525b26['get']('server.admin.port', 8000);
    const _0x3e343b = _0x525b26['get']('server.admin.host', 'localhost');
    const _0x1da482 = _0x525b26['get']('server.admin.watchIgnoreFiles', []);
    ee({ 'dir': _0x53e5d4 });
    strapiAdmin['watchAdmin']({
        'dir': _0x53e5d4,
        'port': _0x3cf96b,
        'host': _0x3e343b,
        'browser': browser,
        'options': {
            'backend': getAbsoluteServerUrl(_0x525b26, !![]),
            'publicPath': addSlash(adminPath),
            'watchIgnoreFiles': _0x1da482,
            'features': ee['isEE'] ? ee['features']['getEnabled']() : []
        }
    });
};