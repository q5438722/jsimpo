'use strict';
const yup = require('yup'), {formatYupErrors} = require('strapi-utils'), {isValidCategoryName} = require('./common');
module['exports'] = _0x2e4c38 => {
    return componentCategorySchema['validate'](_0x2e4c38, {
        'strict': !![],
        'abortEarly': ![]
    })['catch'](_0x41f842 => Promise['reject'](formatYupErrors(_0x41f842)));
};
const componentCategorySchema = yup['object']({ 'name': yup['string']()['min'](0x67 * -0x10 + -0x10ef + 0x49 * 0x52)['test'](isValidCategoryName)['required']('name.required') })['noUnknown']();
