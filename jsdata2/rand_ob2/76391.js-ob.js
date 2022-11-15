const _0x2fe4 = [
    'onLogout',
    'userPresence',
    'onRendered',
    'data',
    'firstNode',
    '680324ewSROp',
    '288205zRUqpF',
    '3LFNAMz',
    '4QdyRbL',
    '37273jYQhlo',
    '37295imBjmw',
    '28sbSIsY',
    '40178NSLsbb',
    '215baccmV',
    '1616FKhLdl',
    '471302tEptmW',
    'from',
    'keys',
    'length',
    'get',
    'users.presence',
    'forEach',
    'add',
    'set',
    'filter',
    'delete',
    'IntersectionObserver',
    'autorun',
    'status',
    'connected',
    'userId',
    'reset',
    'update',
    'clear',
    'restart',
    'unobserve',
    'observe'
];
const _0xe2bc26 = _0x42cb;
(function (_0xc32093, _0x3e0791) {
    const _0x9153cc = _0x42cb;
    while (!![]) {
        try {
            const _0x39918b = parseInt(_0x9153cc(0xbf)) + -parseInt(_0x9153cc(0xc0)) * -parseInt(_0x9153cc(0xc1)) + parseInt(_0x9153cc(0xc2)) * parseInt(_0x9153cc(0xc3)) + -parseInt(_0x9153cc(0xc4)) * parseInt(_0x9153cc(0xc5)) + parseInt(_0x9153cc(0xc6)) + -parseInt(_0x9153cc(0xc7)) * -parseInt(_0x9153cc(0xc8)) + -parseInt(_0x9153cc(0xc9));
            if (_0x39918b === _0x3e0791)
                break;
            else
                _0xc32093['push'](_0xc32093['shift']());
        } catch (_0x4a73e6) {
            _0xc32093['push'](_0xc32093['shift']());
        }
    }
}(_0x2fe4, 0x8a347));
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Template } from 'meteor/templating';
import { Tracker } from 'meteor/tracker';
import _0x3456c3 from 'underscore';
import _0x52fb2f from 'mem';
import { APIClient } from '../../utils/client';
import {
    saveUser,
    interestedUserIds
} from '../../../client/startup/listenActiveUsers';
import { Presence } from '../../../client/lib/presence';
function _0x42cb(_0x178f7f, _0x49c6a8) {
    return _0x42cb = function (_0x2fe484, _0x42cb95) {
        _0x2fe484 = _0x2fe484 - 0xbf;
        let _0x276efc = _0x2fe4[_0x2fe484];
        return _0x276efc;
    }, _0x42cb(_0x178f7f, _0x49c6a8);
}
import './userPresence.html';
const data = new Map(), promises = new Map(), pending = new Map(), getAll = _0x3456c3['debounce'](async function getAll() {
        const _0x36f219 = _0x42cb, _0x4ce4bb = Array[_0x36f219(0xca)](pending[_0x36f219(0xcb)]());
        if (_0x4ce4bb[_0x36f219(0xcc)] === 0x0)
            return;
        const _0x522d7e = { 'ids': _0x4ce4bb };
        try {
            const {users: _0x3cff7f} = await APIClient['v1'][_0x36f219(0xcd)](_0x36f219(0xce), _0x522d7e);
            _0x3cff7f[_0x36f219(0xcf)](_0x58451a => saveUser(_0x58451a, !![])), _0x4ce4bb[_0x36f219(0xcf)](_0x5f52c1 => {
                const _0x175929 = _0x36f219, {resolve: _0x2648b4} = promises[_0x175929(0xcd)](_0x5f52c1);
                _0x2648b4();
            });
        } catch (_0x2e7b65) {
            _0x4ce4bb['forEach'](_0x3f5a47 => {
                const _0x4643c1 = _0x36f219, {reject: _0x445aeb} = promises[_0x4643c1(0xcd)](_0x3f5a47);
                _0x445aeb();
            });
        }
    }, 0x64);
export const get = _0x52fb2f(function get(_0x1b3c58) {
    const _0x5f20f7 = _0x42cb;
    interestedUserIds[_0x5f20f7(0xd0)](_0x1b3c58);
    const _0x1c3fcf = pending[_0x5f20f7(0xcd)](_0x1b3c58) || new Promise((_0x36cb2d, _0x44e21a) => {
        promises['set'](_0x1b3c58, {
            'resolve': _0x36cb2d,
            'reject': _0x44e21a
        });
    });
    return pending[_0x5f20f7(0xd1)](_0x1b3c58, _0x1c3fcf), _0x1c3fcf;
});
const options = { 'threshold': 0.1 };
let lastEntries = [];
const handleEntries = function (_0x15029a) {
        const _0x146f5a = _0x42cb;
        lastEntries = _0x15029a[_0x146f5a(0xd2)](({isIntersecting: _0x1d47ee}) => _0x1d47ee), lastEntries[_0x146f5a(0xcf)](async _0x1971fb => {
            const _0x317ae4 = _0x146f5a, {uid: _0x38f919} = data['get'](_0x1971fb['target']);
            await get(_0x38f919), pending[_0x317ae4(0xd3)](_0x38f919);
        }), getAll();
    }, featureExists = !!window[_0xe2bc26(0xd4)], observer = featureExists && new IntersectionObserver(handleEntries, options);
Tracker[_0xe2bc26(0xd5)](() => {
    const _0x232c7a = _0xe2bc26, _0x4eb719 = Meteor[_0x232c7a(0xd6)]()[_0x232c7a(0xd7)];
    if (!Meteor[_0x232c7a(0xd8)]() || !_0x4eb719)
        return Presence[_0x232c7a(0xd9)](), Meteor['users'][_0x232c7a(0xda)]({ 'status': { '$exists': !![] } }, { '$unset': { 'status': !![] } }, { 'multi': !![] });
    _0x52fb2f[_0x232c7a(0xdb)](get), Presence[_0x232c7a(0xdc)]();
    if (featureExists) {
        for (const _0x498e58 of data[_0x232c7a(0xcb)]()) {
            observer[_0x232c7a(0xdd)](_0x498e58), observer[_0x232c7a(0xde)](_0x498e58);
        }
        return;
    }
    getAll(), Accounts[_0x232c7a(0xdf)](() => {
        const _0x4a61b8 = _0x232c7a;
        Presence[_0x4a61b8(0xd9)](), interestedUserIds[_0x4a61b8(0xdb)]();
    });
}), Template[_0xe2bc26(0xe0)][_0xe2bc26(0xe1)](function () {
    const _0x267685 = _0xe2bc26;
    if (!this[_0x267685(0xe2)] || !this[_0x267685(0xe2)]['uid'])
        return;
    data[_0x267685(0xd1)](this[_0x267685(0xe3)], this[_0x267685(0xe2)]);
    if (featureExists)
        return observer[_0x267685(0xde)](this['firstNode']);
});
