var cluster = require(_0x52f3a4(356)), numCPUs = require('os')[_0x52f3a4(357)]() ? require('os')[_0x52f3a4(357)]()['length'] : 1, path = require(_0x52f3a4(358)), EventEmitter2 = require(_0x52f3a4(359))['EventEmitter2'], fs = require('fs'), vizion = require(_0x52f3a4(360)), debug = require(_0x52f3a4(361))('pm2:god'), Utility = require(_0x52f3a4(362)), cst = require(_0x52f3a4(363)), timesLimit = require(_0x52f3a4(364)), Configuration = require(_0x52f3a4(365)), semver = require('semver');
semver['lt'](process[_0x52f3a4(366)], _0x52f3a4(367)) ? cluster[_0x52f3a4(368)]({
    'windowsHide': !![],
    'exec': path[_0x52f3a4(369)](path[_0x52f3a4(370)](module['filename']), _0x52f3a4(371))
}) : cluster['setupMaster']({
    'windowsHide': !![],
    'exec': path[_0x52f3a4(369)](path[_0x52f3a4(370)](module[_0x52f3a4(372)]), _0x52f3a4(373))
});
var God = module['exports'] = {
    'next_id': 0,
    'clusters_db': {},
    'configuration': {},
    'started_at': Date['now'](),
    'system_infos_proc': null,
    'system_infos': null,
    'bus': new EventEmitter2({
        'wildcard': !![],
        'delimiter': ':',
        'maxListeners': 1000
    })
};
function _0x5e49(_0x2d6988, _0x21cd9f) {
    return _0x5e49 = function (_0x441b22, _0x5e49a8) {
        _0x441b22 = _0x441b22 - 344;
        var _0x5158c9 = _0x441b[_0x441b22];
        return _0x5158c9;
    }, _0x5e49(_0x2d6988, _0x21cd9f);
}
Utility[_0x52f3a4(374)](God[_0x52f3a4(375)]), require(_0x52f3a4(376))(God), require(_0x52f3a4(377))(God), require(_0x52f3a4(378))(God), require(_0x52f3a4(379))(God), require(_0x52f3a4(380))(God), require(_0x52f3a4(381))(God), require(_0x52f3a4(382))(God), God[_0x52f3a4(383)] = function () {
    var _0x24a396 = _0x52f3a4;
    require(_0x24a396(384))(this), God['system_infos_proc'] = null, this[_0x24a396(385)] = Configuration['getSync'](_0x24a396(386)), setTimeout(function () {
        var _0x1b83cb = _0x24a396;
        God[_0x1b83cb(387)]['start']();
    }, 500);
}, God[_0x52f3a4(388)] = function (_0x36a772, _0x17c047, _0x22d2ef) {
    var _0xefe0c4 = _0x52f3a4;
    try {
        var _0x20f352 = _0xefe0c4(389) + new Date()[_0xefe0c4(390)]() + '] app exited';
        if (_0x17c047)
            _0x20f352 += _0xefe0c4(391) + _0x17c047;
        if (_0x22d2ef)
            _0x20f352 += _0xefe0c4(392) + _0x22d2ef;
        _0x20f352 += '\n';
        if (_0x36a772['pm_out_log_path'])
            fs['writeFileSync'](_0x36a772[_0xefe0c4(393)], _0x20f352);
        if (_0x36a772[_0xefe0c4(394)])
            fs[_0xefe0c4(395)](_0x36a772[_0xefe0c4(394)], _0x20f352);
        if (_0x36a772[_0xefe0c4(396)])
            fs['writeFileSync'](_0x36a772[_0xefe0c4(396)], _0x20f352);
    } catch (_0xb0721e) {
    }
}, God[_0x52f3a4(397)] = function prepare(_0x535dc2, _0x3d16dc) {
    var _0x5bde58 = _0x52f3a4;
    _0x535dc2[_0x5bde58(398)][_0x5bde58(399)] = Utility['generateUUID']();
    if (typeof _0x535dc2[_0x5bde58(400)] === _0x5bde58(401)) {
        _0x535dc2['vizion_running'] = ![];
        if (_0x535dc2[_0x5bde58(398)] && _0x535dc2['env'][_0x5bde58(402)])
            _0x535dc2[_0x5bde58(398)][_0x5bde58(402)] = ![];
        if (_0x535dc2['status'] == cst[_0x5bde58(403)]) {
            _0x535dc2[_0x5bde58(404)] = God[_0x5bde58(405)]();
            var _0x466cfa = {
                'pm2_env': _0x535dc2,
                'process': {}
            };
            return God[_0x5bde58(406)][_0x535dc2['pm_id']] = _0x466cfa, _0x3d16dc(null, [God[_0x5bde58(406)][_0x535dc2[_0x5bde58(404)]]]);
        }
        return God[_0x5bde58(407)](_0x535dc2, function (_0x51f789, _0x35201e) {
            var _0x2d033d = _0x5bde58;
            if (_0x51f789)
                return _0x3d16dc(_0x51f789);
            return God[_0x2d033d(408)](_0x2d033d(409), _0x35201e, !![]), _0x3d16dc(null, [Utility['clone'](_0x35201e)]);
        });
    }
    _0x535dc2[_0x5bde58(400)] = parseInt(_0x535dc2['instances']);
    if (_0x535dc2[_0x5bde58(400)] === 0)
        _0x535dc2[_0x5bde58(400)] = numCPUs;
    else
        _0x535dc2[_0x5bde58(400)] < 0 && (_0x535dc2['instances'] += numCPUs);
    _0x535dc2[_0x5bde58(400)] <= 0 && (_0x535dc2['instances'] = 1), timesLimit(_0x535dc2['instances'], 1, function (_0x1bba0e, _0x1b9ee7) {
        var _0x5e4654 = _0x5bde58;
        _0x535dc2['vizion_running'] = ![], _0x535dc2[_0x5e4654(398)] && _0x535dc2['env']['vizion_running'] && (_0x535dc2[_0x5e4654(398)]['vizion_running'] = ![]), God[_0x5e4654(410)](_0x535dc2, function _0x4e946a(_0x5e22ef, _0x48d7e2) {
            var _0x5a8054 = _0x5e4654;
            if (_0x5e22ef)
                return _0x1b9ee7(_0x5e22ef);
            return God[_0x5a8054(407)](Utility[_0x5a8054(411)](_0x48d7e2), function (_0x2eb0fc, _0x186743) {
                var _0x534432 = _0x5a8054;
                if (_0x2eb0fc)
                    return _0x1b9ee7(_0x2eb0fc);
                return God['notify'](_0x534432(409), _0x186743, !![]), _0x1b9ee7(null, Utility[_0x534432(411)](_0x186743));
            });
        });
    }, _0x3d16dc);
}, God[_0x52f3a4(407)] = function executeApp(_0x52b910, _0x5b5c6c) {
    var _0x5002a5 = _0x52f3a4, _0x521821 = Utility['clone'](_0x52b910);
    Utility[_0x5002a5(412)](_0x521821, _0x521821[_0x5002a5(398)]), _0x521821[_0x5002a5(413)] = cst[_0x5002a5(414)], _0x521821[_0x5002a5(415)] = Date[_0x5002a5(416)](), _0x521821[_0x5002a5(417)] = [], _0x521821['axm_monitor'] = {}, _0x521821[_0x5002a5(418)] = {}, _0x521821[_0x5002a5(419)] = {}, _0x521821['vizion_running'] = _0x521821[_0x5002a5(402)] !== undefined ? _0x521821[_0x5002a5(402)] : ![];
    if (!_0x521821[_0x5002a5(420)])
        _0x521821[_0x5002a5(420)] = Date[_0x5002a5(416)]();
    _0x521821[_0x5002a5(404)] === undefined && (_0x521821[_0x5002a5(404)] = God[_0x5002a5(405)](), _0x521821['restart_time'] = 0, _0x521821['unstable_restarts'] = 0, _0x521821[_0x5002a5(421)] = _0x521821[_0x5002a5(421)][_0x5002a5(422)](/-[0-9]+\.pid$|\.pid$/g, '-' + _0x521821['pm_id'] + _0x5002a5(423)), !_0x521821[_0x5002a5(424)] && [
        '',
        _0x5002a5(425),
        '_err'
    ][_0x5002a5(426)](function (_0x2552be) {
        var _0x4a33a6 = _0x5002a5, _0x2960c4 = 'pm' + _0x2552be + _0x4a33a6(427);
        _0x521821[_0x2960c4] && (_0x521821[_0x2960c4] = _0x521821[_0x2960c4][_0x4a33a6(422)](/-[0-9]+\.log$|\.log$/g, '-' + _0x521821['pm_id'] + '.log'));
    }), _0x521821[_0x5002a5(428)] && God[_0x5002a5(428)][_0x5002a5(429)](_0x521821));
    God[_0x5002a5(430)](_0x521821);
    var _0x53180b = function _0x262651(_0x310daf) {
        var _0x5591fb = _0x5002a5;
        if (_0x310daf[_0x5591fb(431)][_0x5591fb(360)] !== ![] && _0x310daf[_0x5591fb(431)][_0x5591fb(360)] !== _0x5591fb(432))
            God[_0x5591fb(433)](_0x310daf);
        else
            God['notify'](_0x5591fb(434), _0x310daf);
        if (_0x310daf[_0x5591fb(431)][_0x5591fb(413)] !== cst['ERRORED_STATUS'])
            _0x310daf[_0x5591fb(431)][_0x5591fb(413)] = cst[_0x5591fb(435)];
        console[_0x5591fb(436)]('App [' + _0x310daf[_0x5591fb(431)][_0x5591fb(437)] + ':' + _0x310daf[_0x5591fb(431)][_0x5591fb(404)] + _0x5591fb(438));
        if (_0x5b5c6c)
            _0x5b5c6c(null, _0x310daf);
    };
    return _0x521821[_0x5002a5(439)] === _0x5002a5(440) ? God[_0x5002a5(441)](_0x521821, function _0x453ad9(_0x1ce399, _0x7de232) {
        var _0x45a6bc = _0x5002a5;
        if (_0x5b5c6c && _0x1ce399)
            return _0x5b5c6c(_0x1ce399);
        if (_0x1ce399)
            return ![];
        var _0x6f2c8d = God[_0x45a6bc(406)][_0x7de232['pm2_env'][_0x45a6bc(404)]];
        return _0x6f2c8d && (_0x6f2c8d = null, God[_0x45a6bc(406)][_0x7de232['pm2_env']['pm_id']] = null), God[_0x45a6bc(406)][_0x7de232['pm2_env'][_0x45a6bc(404)]] = _0x7de232, _0x7de232[_0x45a6bc(442)](_0x45a6bc(443), function (_0xe3bbb1) {
            var _0x5373c2 = _0x45a6bc;
            console['error'](_0xe3bbb1[_0x5373c2(444)] || _0xe3bbb1), _0x7de232[_0x5373c2(431)][_0x5373c2(413)] = cst['ERRORED_STATUS'];
            try {
                _0x7de232[_0x5373c2(445)] && _0x7de232[_0x5373c2(445)]();
            } catch (_0xa9bf3e) {
                console[_0x5373c2(443)](_0xa9bf3e[_0x5373c2(444)] || _0xa9bf3e), God['handleExit'](_0x7de232, cst[_0x5373c2(446)]);
            }
        }), _0x7de232[_0x45a6bc(442)](_0x45a6bc(447), function () {
            var _0x3d90dd = _0x45a6bc;
            console[_0x3d90dd(436)](_0x3d90dd(448), _0x7de232[_0x3d90dd(431)]['name'], _0x7de232[_0x3d90dd(431)][_0x3d90dd(404)]);
        }), _0x7de232[_0x45a6bc(442)]('exit', function _0x116153(_0xa18526, _0x4b1bfa) {
            var _0x349baf = _0x45a6bc;
            God[_0x349baf(449)](_0x7de232, _0xa18526 || 0, _0x4b1bfa || _0x349baf(450));
        }), _0x7de232[_0x45a6bc(442)]('online', function () {
            var _0x377ff8 = _0x45a6bc;
            if (!_0x7de232[_0x377ff8(431)][_0x377ff8(451)])
                return _0x53180b(_0x7de232);
            var _0x533c36 = setTimeout(function () {
                    var _0x269268 = _0x377ff8;
                    return God[_0x269268(375)][_0x269268(452)](_0x269268(453), _0x137c8a), _0x53180b(_0x7de232);
                }, _0x7de232[_0x377ff8(431)][_0x377ff8(454)] || cst[_0x377ff8(455)]), _0x137c8a = function (_0xdebf7) {
                    var _0x4bfeba = _0x377ff8;
                    if (_0xdebf7[_0x4bfeba(456)] === 'ready' && _0xdebf7[_0x4bfeba(457)]['name'] === _0x7de232[_0x4bfeba(431)][_0x4bfeba(437)] && _0xdebf7['process'][_0x4bfeba(404)] === _0x7de232[_0x4bfeba(431)][_0x4bfeba(404)])
                        return clearTimeout(_0x533c36), God[_0x4bfeba(375)]['removeListener'](_0x4bfeba(453), _0x137c8a), _0x53180b(_0x7de232);
                };
            God[_0x377ff8(375)]['on']('process:msg', _0x137c8a);
        });
    }) : God['forkMode'](_0x521821, function _0xeebfbc(_0x5ebb00, _0x1fd635) {
        var _0x6c4fea = _0x5002a5;
        if (_0x5b5c6c && _0x5ebb00)
            return _0x5b5c6c(_0x5ebb00);
        if (_0x5ebb00)
            return ![];
        var _0x220ce5 = God[_0x6c4fea(406)][_0x1fd635[_0x6c4fea(431)]['pm_id']];
        if (_0x220ce5)
            _0x220ce5 = null;
        God['clusters_db'][_0x521821[_0x6c4fea(404)]] = _0x1fd635, _0x1fd635['once'](_0x6c4fea(443), function _0x542ff3(_0x11327b) {
            var _0x411385 = _0x6c4fea;
            console[_0x411385(443)](_0x11327b[_0x411385(444)] || _0x11327b), _0x1fd635[_0x411385(431)]['status'] = cst[_0x411385(458)];
            try {
                _0x1fd635[_0x411385(459)] && _0x1fd635[_0x411385(459)]();
            } catch (_0x6a4803) {
                console[_0x411385(443)](_0x6a4803[_0x411385(444)] || _0x6a4803), God['handleExit'](_0x1fd635, cst[_0x411385(446)]);
            }
        }), _0x1fd635[_0x6c4fea(442)](_0x6c4fea(460), function _0xde462e(_0x32f1be, _0x3a3c2a) {
            var _0xf8c6da = _0x6c4fea;
            if (_0x1fd635[_0xf8c6da(461)] === !![])
                _0x1fd635['disconnect'] && _0x1fd635[_0xf8c6da(447)]();
            return _0x1fd635[_0xf8c6da(462)] = null, God[_0xf8c6da(449)](_0x1fd635, _0x32f1be || 0, _0x3a3c2a);
        });
        if (!_0x1fd635[_0x6c4fea(431)][_0x6c4fea(451)])
            return _0x53180b(_0x1fd635);
        var _0x462e04 = setTimeout(function () {
                var _0x185abe = _0x6c4fea;
                return God[_0x185abe(375)]['removeListener'](_0x185abe(453), _0x15ddaa), _0x53180b(_0x1fd635);
            }, _0x1fd635[_0x6c4fea(431)][_0x6c4fea(454)] || cst['GRACEFUL_LISTEN_TIMEOUT']), _0x15ddaa = function (_0x1e2404) {
                var _0x2c5341 = _0x6c4fea;
                if (_0x1e2404[_0x2c5341(456)] === _0x2c5341(463) && _0x1e2404[_0x2c5341(457)][_0x2c5341(437)] === _0x1fd635['pm2_env'][_0x2c5341(437)] && _0x1e2404[_0x2c5341(457)][_0x2c5341(404)] === _0x1fd635[_0x2c5341(431)][_0x2c5341(404)])
                    return clearTimeout(_0x462e04), God[_0x2c5341(375)][_0x2c5341(452)](_0x2c5341(453), _0x15ddaa), _0x53180b(_0x1fd635);
            };
        God['bus']['on'](_0x6c4fea(453), _0x15ddaa);
    }), ![];
}, God[_0x52f3a4(449)] = function handleExit(_0x4c6337, _0x4720d0, _0x5df361) {
    var _0x4cb17a = _0x52f3a4;
    console[_0x4cb17a(436)]('App [' + _0x4c6337[_0x4cb17a(431)][_0x4cb17a(437)] + ':' + _0x4c6337[_0x4cb17a(431)][_0x4cb17a(404)] + _0x4cb17a(464) + _0x4720d0 + _0x4cb17a(465) + (_0x5df361 || _0x4cb17a(450)) + ']');
    var _0x555f0b = this[_0x4cb17a(406)][_0x4c6337[_0x4cb17a(431)][_0x4cb17a(404)]];
    if (!_0x555f0b)
        return console['error'](_0x4cb17a(466), _0x4c6337['pm2_env'][_0x4cb17a(404)]), ![];
    var _0x1c9a9e = _0x555f0b[_0x4cb17a(431)]['status'] == cst[_0x4cb17a(467)] || _0x555f0b[_0x4cb17a(431)][_0x4cb17a(413)] == cst[_0x4cb17a(403)] || _0x555f0b[_0x4cb17a(431)][_0x4cb17a(413)] == cst[_0x4cb17a(458)] || (_0x555f0b[_0x4cb17a(431)]['autorestart'] === ![] || _0x555f0b[_0x4cb17a(431)]['autorestart'] === _0x4cb17a(432)), _0x125c4e = ![];
    if (_0x1c9a9e)
        _0x555f0b[_0x4cb17a(457)]['pid'] = 0;
    if (_0x555f0b['pm2_env']['axm_actions'])
        _0x555f0b[_0x4cb17a(431)][_0x4cb17a(417)] = [];
    if (_0x555f0b['pm2_env']['axm_monitor'])
        _0x555f0b[_0x4cb17a(431)][_0x4cb17a(468)] = {};
    if (_0x555f0b[_0x4cb17a(431)][_0x4cb17a(413)] != cst['ERRORED_STATUS'] && _0x555f0b[_0x4cb17a(431)][_0x4cb17a(413)] != cst[_0x4cb17a(467)])
        _0x555f0b[_0x4cb17a(431)][_0x4cb17a(413)] = cst[_0x4cb17a(403)];
    if (_0x555f0b['pm2_env']['pm_id'][_0x4cb17a(469)]()[_0x4cb17a(470)](_0x4cb17a(471)) !== 0)
        try {
            fs[_0x4cb17a(472)](_0x555f0b[_0x4cb17a(431)][_0x4cb17a(421)]);
        } catch (_0x202aa8) {
            debug(_0x4cb17a(473), _0x202aa8);
        }
    var _0x7e8e5d = typeof _0x555f0b[_0x4cb17a(431)]['min_uptime'] !== _0x4cb17a(401) ? _0x555f0b[_0x4cb17a(431)][_0x4cb17a(474)] : 1000, _0x51e697 = typeof _0x555f0b[_0x4cb17a(431)]['max_restarts'] !== _0x4cb17a(401) ? _0x555f0b[_0x4cb17a(431)]['max_restarts'] : 16;
    Date[_0x4cb17a(416)]() - _0x555f0b['pm2_env']['created_at'] < _0x7e8e5d * _0x51e697 && (Date[_0x4cb17a(416)]() - _0x555f0b[_0x4cb17a(431)][_0x4cb17a(415)] < _0x7e8e5d && (_0x555f0b['pm2_env'][_0x4cb17a(475)] += 1));
    _0x555f0b[_0x4cb17a(431)]['unstable_restarts'] >= _0x51e697 && (_0x555f0b['pm2_env'][_0x4cb17a(413)] = cst['ERRORED_STATUS'], _0x555f0b[_0x4cb17a(457)][_0x4cb17a(476)] = 0, console[_0x4cb17a(436)](_0x4cb17a(477), _0x555f0b[_0x4cb17a(431)][_0x4cb17a(478)], _0x555f0b[_0x4cb17a(431)][_0x4cb17a(475)], _0x555f0b[_0x4cb17a(431)][_0x4cb17a(413)]), God['notify'](_0x4cb17a(479), _0x555f0b), _0x555f0b[_0x4cb17a(431)][_0x4cb17a(475)] = 0, _0x555f0b[_0x4cb17a(431)][_0x4cb17a(420)] = null, _0x125c4e = !![]);
    if (typeof _0x4720d0 !== _0x4cb17a(401))
        _0x555f0b[_0x4cb17a(431)][_0x4cb17a(480)] = _0x4720d0;
    God[_0x4cb17a(408)]('exit', _0x555f0b);
    if (God[_0x4cb17a(481)])
        return ![];
    var _0x157774 = 0;
    return _0x555f0b[_0x4cb17a(431)][_0x4cb17a(482)] !== undefined && !isNaN(parseInt(_0x555f0b[_0x4cb17a(431)]['restart_delay'])) && (_0x555f0b['pm2_env']['status'] = cst[_0x4cb17a(483)], _0x157774 = parseInt(_0x555f0b[_0x4cb17a(431)]['restart_delay'])), _0x555f0b['pm2_env'][_0x4cb17a(484)] !== undefined && !isNaN(parseInt(_0x555f0b[_0x4cb17a(431)]['exp_backoff_restart_delay'])) && (_0x555f0b[_0x4cb17a(431)][_0x4cb17a(413)] = cst['WAITING_RESTART'], !_0x555f0b[_0x4cb17a(431)][_0x4cb17a(485)] ? (_0x555f0b[_0x4cb17a(431)][_0x4cb17a(485)] = _0x555f0b[_0x4cb17a(431)]['exp_backoff_restart_delay'], _0x157774 = _0x555f0b[_0x4cb17a(431)][_0x4cb17a(484)]) : (_0x555f0b[_0x4cb17a(431)]['prev_restart_delay'] = Math['floor'](Math[_0x4cb17a(486)](15000, _0x555f0b[_0x4cb17a(431)][_0x4cb17a(485)] * 1.5)), _0x157774 = _0x555f0b['pm2_env'][_0x4cb17a(485)]), console[_0x4cb17a(436)](_0x4cb17a(487) + _0x4c6337['pm2_env'][_0x4cb17a(437)] + ':' + _0x4c6337[_0x4cb17a(431)][_0x4cb17a(404)] + _0x4cb17a(488) + _0x157774 + 'ms')), !_0x1c9a9e && !_0x125c4e && (Object[_0x4cb17a(489)](_0x555f0b[_0x4cb17a(431)], _0x4cb17a(490), {
        'configurable': !![],
        'writable': !![]
    }), _0x555f0b[_0x4cb17a(431)][_0x4cb17a(490)] = setTimeout(function () {
        var _0x17d54c = _0x4cb17a;
        _0x555f0b['pm2_env']['restart_time'] += 1, God[_0x17d54c(407)](_0x555f0b[_0x17d54c(431)]);
    }, _0x157774)), ![];
}, God[_0x52f3a4(433)] = function finalizeProcedure(_0x2a2bbb) {
    var _0x5ad31f = _0x52f3a4, _0x3bd80a = '', _0x4e6add = _0x2a2bbb[_0x5ad31f(431)][_0x5ad31f(491)] || path['dirname'](_0x2a2bbb[_0x5ad31f(431)][_0x5ad31f(478)]), _0x15a1d7 = _0x2a2bbb[_0x5ad31f(431)][_0x5ad31f(404)];
    _0x2a2bbb[_0x5ad31f(431)][_0x5ad31f(366)] = Utility[_0x5ad31f(492)](_0x2a2bbb[_0x5ad31f(431)][_0x5ad31f(478)] || _0x2a2bbb['pm2_env']['cwd']);
    if (_0x2a2bbb[_0x5ad31f(431)]['vizion_running'] === !![])
        return debug(_0x5ad31f(493), _0x15a1d7), God[_0x5ad31f(408)](_0x5ad31f(434), _0x2a2bbb);
    _0x2a2bbb[_0x5ad31f(431)]['vizion_running'] = !![], vizion[_0x5ad31f(494)]({ 'folder': _0x4e6add }, function _0xe2ecdf(_0x384807, _0x1f250c) {
        var _0x3f8670 = _0x5ad31f, _0x507bcf = God['clusters_db'][_0x15a1d7];
        if (_0x384807)
            debug(_0x384807[_0x3f8670(444)] || _0x384807);
        if (!_0x507bcf || !_0x507bcf[_0x3f8670(431)] || _0x507bcf[_0x3f8670(431)][_0x3f8670(413)] == cst[_0x3f8670(403)] || _0x507bcf[_0x3f8670(431)][_0x3f8670(413)] == cst[_0x3f8670(467)] || _0x507bcf[_0x3f8670(431)][_0x3f8670(413)] == cst[_0x3f8670(458)])
            return console[_0x3f8670(443)]('Cancelling versioning data parsing');
        _0x507bcf['pm2_env'][_0x3f8670(402)] = ![];
        if (!_0x384807)
            _0x507bcf[_0x3f8670(431)][_0x3f8670(495)] = _0x1f250c, _0x507bcf['pm2_env'][_0x3f8670(495)][_0x3f8670(496)] = _0x4e6add, God[_0x3f8670(408)](_0x3f8670(434), _0x507bcf);
        else
            _0x384807 && _0x4e6add === _0x3bd80a ? (_0x507bcf[_0x3f8670(431)]['versioning'] = null, God[_0x3f8670(408)](_0x3f8670(434), _0x507bcf)) : (_0x3bd80a = _0x4e6add, _0x4e6add = path[_0x3f8670(370)](_0x4e6add), _0x507bcf[_0x3f8670(431)][_0x3f8670(402)] = !![], vizion[_0x3f8670(494)]({ 'folder': _0x4e6add }, _0xe2ecdf));
        return ![];
    });
}, God['injectVariables'] = function injectVariables(_0x3dfa9d, _0x374a65) {
    var _0x10e43d = _0x52f3a4, _0x40ab72 = process[_0x10e43d(398)][_0x10e43d(497)] || _0x3dfa9d[_0x10e43d(498)], _0x550472 = Object['keys'](God[_0x10e43d(406)])[_0x10e43d(499)](function (_0x22a0d7) {
            var _0x4c2f83 = _0x10e43d;
            return God[_0x4c2f83(406)][_0x22a0d7];
        })[_0x10e43d(500)](function (_0x5dd2b7) {
            var _0x21b558 = _0x10e43d;
            return _0x5dd2b7[_0x21b558(431)][_0x21b558(437)] === _0x3dfa9d[_0x21b558(437)] && typeof _0x5dd2b7[_0x21b558(431)][_0x40ab72] !== _0x21b558(401);
        })[_0x10e43d(499)](function (_0x5a58af) {
            var _0x5a3cec = _0x10e43d;
            return _0x5a58af[_0x5a3cec(431)][_0x40ab72];
        })[_0x10e43d(501)](function (_0x283de8, _0x4d76cf) {
            return _0x4d76cf - _0x283de8;
        }), _0x161cb1 = typeof _0x550472[0] === 'undefined' ? 0 : _0x550472[0] + 1;
    for (var _0x21191c = 0; _0x21191c < _0x550472[_0x10e43d(502)]; _0x21191c++) {
        if (_0x550472[_0x10e43d(470)](_0x21191c) === -1) {
            _0x161cb1 = _0x21191c;
            break;
        }
    }
    _0x3dfa9d[_0x40ab72] = _0x161cb1;
    if (_0x3dfa9d[_0x10e43d(503)]) {
        var _0x4d406a = Object[_0x10e43d(504)](God['clusters_db'])['map'](function (_0x158838) {
                var _0x1736e2 = _0x10e43d;
                return God[_0x1736e2(406)][_0x158838];
            })[_0x10e43d(500)](function (_0x929c5d) {
                var _0x386a3f = _0x10e43d;
                return _0x929c5d[_0x386a3f(431)][_0x386a3f(437)] === _0x3dfa9d[_0x386a3f(437)] && typeof _0x929c5d[_0x386a3f(431)][_0x3dfa9d[_0x386a3f(503)]] !== 'undefined';
            })[_0x10e43d(499)](function (_0x298c4a) {
                var _0x1473c0 = _0x10e43d;
                return _0x298c4a[_0x1473c0(431)][_0x3dfa9d[_0x1473c0(503)]];
            })['sort'](function (_0x513ca3, _0x5e4cb0) {
                return _0x5e4cb0 - _0x513ca3;
            })[0], _0xe969ba = _0x3dfa9d[_0x10e43d(398)][_0x3dfa9d[_0x10e43d(503)]] || 0;
        _0x3dfa9d[_0x3dfa9d['increment_var']] = typeof _0x4d406a === _0x10e43d(401) ? _0xe969ba : _0x4d406a + 1, _0x3dfa9d['env'][_0x3dfa9d[_0x10e43d(503)]] = _0x3dfa9d[_0x3dfa9d[_0x10e43d(503)]];
    }
    return _0x374a65(null, _0x3dfa9d);
}, God[_0x52f3a4(383)]();