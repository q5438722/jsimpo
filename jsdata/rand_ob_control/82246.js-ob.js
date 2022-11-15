const errors = require('@tryghost/errors'), i18n = require('../../../shared/i18n'), authorize = {
        'authorizeContentApi'(_0x31332e, _0x16e5ac, _0x2a9146) {
            const _0xb8d81e = {
                    'kiOqb': function (_0x12df74) {
                        return _0x12df74();
                    },
                    'CoTAI': function (_0x560767, _0x453b11) {
                        return _0x560767(_0x453b11);
                    },
                    'rzaUL': 'errors.middleware.auth.authorizationFailed',
                    'DXytm': 'errors.middleware.auth.missingContentMemberOrIntegration'
                }, _0x3ecb0f = _0x31332e['api_key'] && _0x31332e['api_key']['id'], _0x4c957b = _0x31332e['member'];
            if (_0x3ecb0f)
                return _0xb8d81e['kiOqb'](_0x2a9146);
            if (_0x4c957b)
                return _0xb8d81e['kiOqb'](_0x2a9146);
            return _0xb8d81e['CoTAI'](_0x2a9146, new errors['NoPermissionError']({
                'message': i18n['t'](_0xb8d81e['rzaUL']),
                'context': i18n['t'](_0xb8d81e['DXytm'])
            }));
        },
        'authorizeAdminApi'(_0x4bf1f2, _0x23a89f, _0x3f29ac) {
            const _0x59aef6 = {
                    'QtHYO': function (_0x41947c, _0x43de4a) {
                        return _0x41947c || _0x43de4a;
                    },
                    'bvMKv': function (_0x1ef305) {
                        return _0x1ef305();
                    },
                    'zxqcV': function (_0xe6905e, _0x4ad950) {
                        return _0xe6905e(_0x4ad950);
                    },
                    'DKqFr': 'errors.middleware.auth.authorizationFailed',
                    'UpVBB': 'errors.middleware.auth.missingAdminUserOrIntegration'
                }, _0x246f3d = _0x4bf1f2['user'] && _0x4bf1f2['user']['id'], _0x31468e = _0x4bf1f2['api_key'] && _0x4bf1f2['api_key']['id'];
            return _0x59aef6['QtHYO'](_0x246f3d, _0x31468e) ? _0x59aef6['bvMKv'](_0x3f29ac) : _0x59aef6['zxqcV'](_0x3f29ac, new errors['NoPermissionError']({
                'message': i18n['t'](_0x59aef6['DKqFr']),
                'context': i18n['t'](_0x59aef6['UpVBB'])
            }));
        }
    };
module['exports'] = authorize;
