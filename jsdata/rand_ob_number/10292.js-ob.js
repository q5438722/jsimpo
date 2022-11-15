import _0x572877 from './commonTrads.json';
const formatMessagesWithPluginId = (_0x2ee711, _0x21f514) => {
    return Object['keys'](_0x21f514)['reduce']((_0x44caf3, _0x5ccb7f) => {
        return _0x44caf3[_0x2ee711 + '.' + _0x5ccb7f] = _0x21f514[_0x5ccb7f], _0x44caf3;
    }, _0x572877);
};
export default formatMessagesWithPluginId;
