'use strict';
const cliCommandsSchema = require('../cli/commands-schema');
class Metrics {
    constructor(_0x2227c8, _0x52946f) {
        this['serverless'] = _0x2227c8, this['options'] = _0x52946f, this['commands'] = { 'metrics': { ...cliCommandsSchema['get']('metrics') } };
    }
}
module['exports'] = Metrics;
