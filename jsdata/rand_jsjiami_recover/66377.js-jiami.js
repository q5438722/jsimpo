'use strict';
var __importDefault = this && this['__importDefault'] || function (_0x472bf2) {
    return _0x472bf2 && _0x472bf2['__esModule'] ? _0x472bf2 : { 'default': _0x472bf2 };
};
const agent_1 = __importDefault(require('./agent'));
function createHttpProxyAgent(_0x5b1ac8) {
    return new agent_1['default'](_0x5b1ac8);
}
(function (_0x52c277) {
    _0x52c277['HttpProxyAgent'] = agent_1['default'];
    _0x52c277['prototype'] = agent_1['default']['prototype'];
}(createHttpProxyAgent || (createHttpProxyAgent = {})));
module['exports'] = createHttpProxyAgent;