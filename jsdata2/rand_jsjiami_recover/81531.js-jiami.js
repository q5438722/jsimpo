const errors = require('@tryghost/errors');
const i18n = require('../../../../../shared/i18n');
const auth = require('../../../../services/auth');
const shared = require('../../../shared');
const apiMw = require('../../middleware');
const notImplemented = function (_0x56ea6d, _0x2cb0a3, _0x57f9aa) {
    if (!_0x56ea6d['api_key']) {
        return _0x57f9aa();
    }
    const _0x10f5f9 = {
        'site': ['GET'],
        'posts': [
            'GET',
            'PUT',
            'DELETE',
            'POST'
        ],
        'pages': [
            'GET',
            'PUT',
            'DELETE',
            'POST'
        ],
        'images': ['POST'],
        'webhooks': [
            'POST',
            'PUT',
            'DELETE'
        ],
        'actions': ['GET'],
        'tags': [
            'GET',
            'PUT',
            'DELETE',
            'POST'
        ],
        'labels': [
            'GET',
            'PUT',
            'DELETE',
            'POST'
        ],
        'users': ['GET'],
        'themes': [
            'POST',
            'PUT'
        ],
        'members': [
            'GET',
            'PUT',
            'DELETE',
            'POST'
        ],
        'config': ['GET'],
        'schedules': ['PUT'],
        'db': ['POST']
    };
    const _0x564561 = _0x56ea6d['url']['match'](/^\/(\w+)\/?/);
    if (_0x564561) {
        const _0xf1679a = _0x564561[1];
        if (_0x10f5f9[_0xf1679a] && _0x10f5f9[_0xf1679a]['includes'](_0x56ea6d['method'])) {
            return _0x57f9aa();
        }
    }
    _0x57f9aa(new errors['GhostError']({
        'errorType': 'NotImplementedError',
        'message': i18n['t']('errors.api.common.notImplemented'),
        'statusCode': '501'
    }));
};
module['exports']['authAdminApi'] = [
    auth['authenticate']['authenticateAdminApi'],
    auth['authorize']['authorizeAdminApi'],
    apiMw['updateUserLastSeen'],
    apiMw['cors'],
    shared['middlewares']['urlRedirects']['adminSSLAndHostRedirect'],
    shared['middlewares']['prettyUrls'],
    notImplemented
];
module['exports']['authAdminApiWithUrl'] = [
    auth['authenticate']['authenticateAdminApiWithUrl'],
    auth['authorize']['authorizeAdminApi'],
    apiMw['updateUserLastSeen'],
    apiMw['cors'],
    shared['middlewares']['urlRedirects']['adminSSLAndHostRedirect'],
    shared['middlewares']['prettyUrls'],
    notImplemented
];
module['exports']['publicAdminApi'] = [
    apiMw['cors'],
    shared['middlewares']['urlRedirects']['adminSSLAndHostRedirect'],
    shared['middlewares']['prettyUrls'],
    notImplemented
];