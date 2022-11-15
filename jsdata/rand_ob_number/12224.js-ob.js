'use strict';
const _ = require('lodash'), pluralize = require('pluralize'), toPlural = _0x23ff8d => pluralize(_['camelCase'](_0x23ff8d)), toSingular = _0x3ea04e => _['camelCase'](pluralize['singular'](_0x3ea04e)), toInputName = _0x11a0f1 => _['upperFirst'](toSingular(_0x11a0f1)) + 'Input';
module['exports'] = {
    'toSingular': toSingular,
    'toPlural': toPlural,
    'toInputName': toInputName
};
