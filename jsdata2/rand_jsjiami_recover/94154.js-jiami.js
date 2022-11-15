const debug = require('debug')('cypress:e2e');
module['exports'] = function (_0x24be36, _0x19ecd6) {
    debug('plugin file %s', __filename);
    debug('received config with browsers %o', _0x19ecd6['browsers']);
    if (!Array['isArray'](_0x19ecd6['browsers'])) {
        throw new Error('Expected list of browsers in the config');
    }
    if (_0x19ecd6['browsers']['length'] === 0) {
        throw new Error('Expected at least 1 browser in the config');
    }
    const _0x3eade2 = _0x19ecd6['browsers']['find'](_0x205077 => {
        return _0x205077['name'] === 'electron';
    });
    if (!_0x3eade2) {
        throw new Error('List of browsers passed into plugins does not include Electron browser');
    }
    const _0x3e9e78 = { 'browsers': [_0x3eade2] };
    debug('returning only Electron browser from plugins %o', _0x3e9e78);
    return _0x3e9e78;
};