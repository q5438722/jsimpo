const getBabelWebpackConfig = require('./getBabelWebpackConfig');
const {startDevServer} = require('@cypress/webpack-dev-server');
module['exports'] = (_0x34831f, _0x5a43fb, _0x24eef1) => {
    _0x34831f('dev-server:start', async _0x5c066c => {
        return startDevServer({
            'options': _0x5c066c,
            'webpackConfig': getBabelWebpackConfig(_0x34831f, _0x5a43fb, _0x24eef1)
        });
    });
    _0x5a43fb['env']['reactDevtools'] = !![];
    return _0x5a43fb;
};