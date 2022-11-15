'use strict';
const yup = require('yup');
const {formatYupErrors} = require('strapi-utils');
const {isValidCategoryName} = require('./common');
module['exports'] = _0x2dc540 => {
    return componentCategorySchema['validate'](_0x2dc540, {
        'strict': !![],
        'abortEarly': ![]
    })['catch'](_0x3a9a9c => Promise['reject'](formatYupErrors(_0x3a9a9c)));
};
const componentCategorySchema = yup['object']({ 'name': yup['string']()['min'](3)['test'](isValidCategoryName)['required']('name.required') })['noUnknown']();