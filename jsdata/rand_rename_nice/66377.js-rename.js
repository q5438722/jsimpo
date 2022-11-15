'use strict';
var __importDefault = this && this.__importDefault || function(obj) {
  return obj && obj.__esModule ? obj : {
    default : obj
  };
};
const agent_1 = __importDefault(require("./agent"));
function createHttpProxyAgent(host) {
  return new agent_1.default(host);
}
(function(RequestHandler) {
  RequestHandler.HttpProxyAgent = agent_1.default;
  RequestHandler.prototype = agent_1.default.prototype;
})(createHttpProxyAgent || (createHttpProxyAgent = {}));
module.exports = createHttpProxyAgent;

