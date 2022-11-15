const getBabelWebpackConfig = require('./getBabelWebpackConfig'), {startDevServer} = require('@cypress/webpack-dev-server');
module['exports'] = (_0x514750, _0x5150e3, _0xa95fc6) => {
    return _0x514750('dev-server:start', async _0x16bd93 => {
        return startDevServer({
            'options': _0x16bd93,
            'webpackConfig': getBabelWebpackConfig(_0x514750, _0x5150e3, _0xa95fc6)
        });
    }), _0x5150e3['env']['reactDevtools'] = !![], _0x5150e3;
};
