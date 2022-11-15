const _0x5b34 = [
    '40UeAxEa',
    '297552zalbHE',
    '294075tYCGBD',
    '76810AXVniv',
    '17tcXkeV',
    '599063JYcGaD',
    '100365oXUgTF',
    '../../../shared/i18n',
    'api_key',
    'member',
    'errors.middleware.auth.authorizationFailed',
    'errors.middleware.auth.missingContentMemberOrIntegration',
    'user',
    'exports',
    '706616DAsSNA',
    '25150IbjLnD'
];
const _0x130d77 = _0x4a0a;
(function (_0x3e733e, _0x3884a6) {
    const _0x543dd7 = _0x4a0a;
    while (!![]) {
        try {
            const _0x4c9672 = -parseInt(_0x543dd7(0x94)) + parseInt(_0x543dd7(0x95)) * parseInt(_0x543dd7(0x96)) + -parseInt(_0x543dd7(0x97)) + parseInt(_0x543dd7(0x98)) + -parseInt(_0x543dd7(0x99)) * -parseInt(_0x543dd7(0x9a)) + -parseInt(_0x543dd7(0x9b)) + -parseInt(_0x543dd7(0x9c));
            if (_0x4c9672 === _0x3884a6)
                break;
            else
                _0x3e733e['push'](_0x3e733e['shift']());
        } catch (_0x834f06) {
            _0x3e733e['push'](_0x3e733e['shift']());
        }
    }
}(_0x5b34, 0xdc469));
function _0x4a0a(_0x3fa5ca, _0x26e5d5) {
    return _0x4a0a = function (_0x5b3458, _0x4a0a8a) {
        _0x5b3458 = _0x5b3458 - 0x94;
        let _0x17a315 = _0x5b34[_0x5b3458];
        return _0x17a315;
    }, _0x4a0a(_0x3fa5ca, _0x26e5d5);
}
const errors = require('@tryghost/errors'), i18n = require(_0x130d77(0x9d)), authorize = {
        'authorizeContentApi'(_0x196094, _0x34738a, _0x90d010) {
            const _0x593e1e = _0x130d77, _0x3f8cff = _0x196094['api_key'] && _0x196094[_0x593e1e(0x9e)]['id'], _0x4e883e = _0x196094[_0x593e1e(0x9f)];
            if (_0x3f8cff)
                return _0x90d010();
            if (_0x4e883e)
                return _0x90d010();
            return _0x90d010(new errors['NoPermissionError']({
                'message': i18n['t'](_0x593e1e(0xa0)),
                'context': i18n['t'](_0x593e1e(0xa1))
            }));
        },
        'authorizeAdminApi'(_0x3952b1, _0x19b006, _0x2571a0) {
            const _0x477fc1 = _0x130d77, _0x3eefa5 = _0x3952b1[_0x477fc1(0xa2)] && _0x3952b1[_0x477fc1(0xa2)]['id'], _0x1a6a86 = _0x3952b1[_0x477fc1(0x9e)] && _0x3952b1[_0x477fc1(0x9e)]['id'];
            return _0x3eefa5 || _0x1a6a86 ? _0x2571a0() : _0x2571a0(new errors['NoPermissionError']({
                'message': i18n['t'](_0x477fc1(0xa0)),
                'context': i18n['t']('errors.middleware.auth.missingAdminUserOrIntegration')
            }));
        }
    };
module[_0x130d77(0xa3)] = authorize;
