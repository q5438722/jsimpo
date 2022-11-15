const errors = require('@tryghost/errors');
const tpl = require('@tryghost/tpl');
const messages = {};
module['exports'] = function (_0x30fca9) {
    _0x30fca9['Model'] = _0x30fca9['Model']['extend']({
        'getActor'(_0x4d234d = { 'context': {} }) {
            if (_0x4d234d['context'] && _0x4d234d['context']['integration']) {
                return {
                    'id': _0x4d234d['context']['integration']['id'],
                    'type': 'integration'
                };
            }
            if (_0x4d234d['context'] && _0x4d234d['context']['user']) {
                return {
                    'id': _0x4d234d['context']['user'],
                    'type': 'user'
                };
            }
            return null;
        },
        'contextUser': function contextUser(_0x450088) {
            _0x450088 = _0x450088 || {};
            _0x450088['context'] = _0x450088['context'] || {};
            if (_0x450088['context']['user'] || _0x30fca9['Model']['isExternalUser'](_0x450088['context']['user'])) {
                return _0x450088['context']['user'];
            } else if (_0x450088['context']['integration']) {
                return _0x30fca9['Model']['internalUser'];
            } else if (_0x450088['context']['internal']) {
                return _0x30fca9['Model']['internalUser'];
            } else if (this['get']('id')) {
                return this['get']('id');
            } else if (_0x450088['context']['external']) {
                return _0x30fca9['Model']['externalUser'];
            } else {
                throw new errors['NotFoundError']({
                    'message': tpl(messages['missingContext']),
                    'level': 'critical'
                });
            }
        }
    }, {
        'internalUser': 1,
        'externalUser': 0,
        'isInternalUser': function isInternalUser(_0x651bba) {
            return _0x651bba === _0x30fca9['Model']['internalUser'] || _0x651bba === _0x30fca9['Model']['internalUser']['toString']();
        },
        'isExternalUser': function isExternalUser(_0x43fb4e) {
            if ('MRawq' !== 'jixvh') {
                return _0x43fb4e === _0x30fca9['Model']['externalUser'] || _0x43fb4e === _0x30fca9['Model']['externalUser']['toString']();
            } else {
                return this['get']('id');
            }
        }
    });
};