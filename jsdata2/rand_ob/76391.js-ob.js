const _0x1cd0 = [
    'onLogout',
    'userPresence',
    'onRendered',
    'data',
    'uid',
    'firstNode',
    '257007sksUTb',
    '40177pHwYLd',
    '194061PfnnYC',
    '1SVnxbN',
    '42vvoqqK',
    '4542VErSKL',
    '151214NXbFuL',
    '62939tkRSes',
    '1VEYPGs',
    '42599cRHXwi',
    '4OMnugg',
    'debounce',
    'users.presence',
    'from',
    'keys',
    'get',
    'MInEx',
    'forEach',
    'set',
    'filter',
    'gKTpn',
    'delete',
    'IntersectionObserver',
    'status',
    'connected',
    'userId',
    'reset',
    'users',
    'update',
    'clear',
    'restart',
    'observe'
];
const _0x4d4d6f = _0x176d;
(function (_0x1fd0ce, _0x5902a2) {
    const _0x18dce6 = _0x176d;
    while (!![]) {
        try {
            const _0xf14b92 = -parseInt(_0x18dce6(0x8d)) + -parseInt(_0x18dce6(0x8e)) + -parseInt(_0x18dce6(0x8f)) * -parseInt(_0x18dce6(0x90)) + -parseInt(_0x18dce6(0x91)) * -parseInt(_0x18dce6(0x92)) + parseInt(_0x18dce6(0x93)) + -parseInt(_0x18dce6(0x94)) * -parseInt(_0x18dce6(0x95)) + -parseInt(_0x18dce6(0x96)) * parseInt(_0x18dce6(0x97));
            if (_0xf14b92 === _0x5902a2)
                break;
            else
                _0x1fd0ce['push'](_0x1fd0ce['shift']());
        } catch (_0x5e04cd) {
            _0x1fd0ce['push'](_0x1fd0ce['shift']());
        }
    }
}(_0x1cd0, 0x2cd1 * -0x12 + 0x1266d + 0x4018b * 0x1));
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Template } from 'meteor/templating';
import { Tracker } from 'meteor/tracker';
import _0x59dfec from 'underscore';
import _0x388fa6 from 'mem';
function _0x176d(_0x21d7db, _0x1572cf) {
    return _0x176d = function (_0x3ed0e9, _0x9b73cc) {
        _0x3ed0e9 = _0x3ed0e9 - (-0xf06 + -0x16e6 + 0x1d5 * 0x15);
        let _0x218afe = _0x1cd0[_0x3ed0e9];
        return _0x218afe;
    }, _0x176d(_0x21d7db, _0x1572cf);
}
import { APIClient } from '../../utils/client';
import {
    saveUser,
    interestedUserIds
} from '../../../client/startup/listenActiveUsers';
import { Presence } from '../../../client/lib/presence';
import './userPresence.html';
const data = new Map(), promises = new Map(), pending = new Map(), getAll = _0x59dfec[_0x4d4d6f(0x98)](async function getAll() {
        const _0x1f7e12 = _0x4d4d6f, _0x101dfc = {
                'WLLRz': function (_0x140b8f) {
                    return _0x140b8f();
                },
                'MInEx': _0x1f7e12(0x99)
            }, _0x5d59ae = Array[_0x1f7e12(0x9a)](pending[_0x1f7e12(0x9b)]());
        if (_0x5d59ae['length'] === 0x1ec5 + 0x7 * 0x85 + -0x5bc * 0x6)
            return;
        const _0x59e83f = { 'ids': _0x5d59ae };
        try {
            const {users: _0x1cb455} = await APIClient['v1'][_0x1f7e12(0x9c)](_0x101dfc[_0x1f7e12(0x9d)], _0x59e83f);
            _0x1cb455[_0x1f7e12(0x9e)](_0x416f39 => saveUser(_0x416f39, !![])), _0x5d59ae[_0x1f7e12(0x9e)](_0x3b8bec => {
                const _0x3ca3b0 = _0x1f7e12, {resolve: _0x2ba797} = promises[_0x3ca3b0(0x9c)](_0x3b8bec);
                _0x101dfc['WLLRz'](_0x2ba797);
            });
        } catch (_0x5bdbfa) {
            _0x5d59ae[_0x1f7e12(0x9e)](_0x2300d4 => {
                const _0xc816cd = _0x1f7e12, {reject: _0x51f636} = promises[_0xc816cd(0x9c)](_0x2300d4);
                _0x51f636();
            });
        }
    }, -0x2343 + 0x71f + -0x2 * -0xe44);
export const get = _0x388fa6(function get(_0x1c91a6) {
    const _0xd694fa = _0x4d4d6f;
    interestedUserIds['add'](_0x1c91a6);
    const _0x2c821e = pending[_0xd694fa(0x9c)](_0x1c91a6) || new Promise((_0x29c3b2, _0xf2a616) => {
        const _0x1f1232 = _0xd694fa;
        promises[_0x1f1232(0x9f)](_0x1c91a6, {
            'resolve': _0x29c3b2,
            'reject': _0xf2a616
        });
    });
    return pending['set'](_0x1c91a6, _0x2c821e), _0x2c821e;
});
const options = { 'threshold': 0.1 };
let lastEntries = [];
const handleEntries = function (_0x59d546) {
        const _0x2ee8d8 = _0x4d4d6f, _0x32e035 = {
                'gKTpn': function (_0x500e2d, _0x2339de) {
                    return _0x500e2d(_0x2339de);
                }
            };
        lastEntries = _0x59d546[_0x2ee8d8(0xa0)](({isIntersecting: _0xba57c5}) => _0xba57c5), lastEntries['forEach'](async _0xa0f033 => {
            const _0x2aa845 = _0x2ee8d8, {uid: _0x38784f} = data[_0x2aa845(0x9c)](_0xa0f033['target']);
            await _0x32e035[_0x2aa845(0xa1)](get, _0x38784f), pending[_0x2aa845(0xa2)](_0x38784f);
        }), getAll();
    }, featureExists = !!window[_0x4d4d6f(0xa3)], observer = featureExists && new IntersectionObserver(handleEntries, options);
Tracker['autorun'](() => {
    const _0x3da0d5 = _0x4d4d6f, _0x5a5109 = Meteor[_0x3da0d5(0xa4)]()[_0x3da0d5(0xa5)];
    if (!Meteor[_0x3da0d5(0xa6)]() || !_0x5a5109)
        return Presence[_0x3da0d5(0xa7)](), Meteor[_0x3da0d5(0xa8)][_0x3da0d5(0xa9)]({ 'status': { '$exists': !![] } }, { '$unset': { 'status': !![] } }, { 'multi': !![] });
    _0x388fa6[_0x3da0d5(0xaa)](get), Presence[_0x3da0d5(0xab)]();
    if (featureExists) {
        for (const _0x3c6b7c of data[_0x3da0d5(0x9b)]()) {
            observer['unobserve'](_0x3c6b7c), observer[_0x3da0d5(0xac)](_0x3c6b7c);
        }
        return;
    }
    getAll(), Accounts[_0x3da0d5(0xad)](() => {
        const _0x5cb65f = _0x3da0d5;
        Presence[_0x5cb65f(0xa7)](), interestedUserIds['clear']();
    });
}), Template[_0x4d4d6f(0xae)][_0x4d4d6f(0xaf)](function () {
    const _0x4231c0 = _0x4d4d6f;
    if (!this[_0x4231c0(0xb0)] || !this[_0x4231c0(0xb0)][_0x4231c0(0xb1)])
        return;
    data[_0x4231c0(0x9f)](this[_0x4231c0(0xb2)], this[_0x4231c0(0xb0)]);
    if (featureExists)
        return observer[_0x4231c0(0xac)](this[_0x4231c0(0xb2)]);
});
