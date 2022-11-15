'use strict';
const _ = require('lodash');
const pluralize = require('pluralize');
const toPlural = _0x4fbdec => pluralize(_['camelCase'](_0x4fbdec));
const toSingular = _0x238347 => _['camelCase'](pluralize['singular'](_0x238347));
const toInputName = _0x11f389 => _['upperFirst'](toSingular(_0x11f389)) + 'Input';
module['exports'] = {
    'toSingular': toSingular,
    'toPlural': toPlural,
    'toInputName': toInputName
};