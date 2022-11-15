'use strict';
var __importDefault = this && this['__importDefault'] || function (_0x3b401c) {
    return _0x3b401c && _0x3b401c['__esModule'] ? _0x3b401c : { 'default': _0x3b401c };
};
const agent_1 = __importDefault(require('./agent'));
function createHttpProxyAgent(_0x4faea3) {
    return new agent_1['default'](_0x4faea3);
}
(function (_0x2a793f) {
    _0x2a793f['HttpProxyAgent'] = agent_1['default'], _0x2a793f['prototype'] = agent_1['default']['prototype'];
}(createHttpProxyAgent || (createHttpProxyAgent = {})), module['exports'] = createHttpProxyAgent);
