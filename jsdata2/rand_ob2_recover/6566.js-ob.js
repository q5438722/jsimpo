(function () {
    'use strict';
    var _0x572802 = _0x41e8;
    var _0x5d3832 = function (_0x2683a8) {
        var _0xbc4fa1 = _0x41e8;
        _0x2683a8[_0xbc4fa1(494)] = function (_0xb397a7) {
            var _0x3d4c41 = _0xbc4fa1;
            if (!_0xb397a7)
                return _0xb397a7;
            for (var _0x1584d2 = 1, _0x4da70d = arguments[_0x3d4c41(495)]; _0x1584d2 < _0x4da70d; _0x1584d2++) {
                var _0x544162 = arguments[_0x1584d2];
                if (_0x544162)
                    for (var _0x36d40d in _0x544162) {
                        _0xb397a7[_0x36d40d] == null && (_0xb397a7[_0x36d40d] = _0x544162[_0x36d40d]);
                    }
            }
            return _0xb397a7;
        }, _0x2683a8[_0xbc4fa1(496)] = {
            'evaluate': /<%([\s\S]+?)%>/g,
            'interpolate': /<%=([\s\S]+?)%>/g,
            'escape': /<%-([\s\S]+?)%>/g
        };
        var _0x5d851d = /(.)^/, _0x504c26 = {
                '\'': '\'',
                '\\': '\\',
                '\r': 'r',
                '\n': 'n',
                '\t': 't',
                '\u2028': _0xbc4fa1(497),
                '\u2029': _0xbc4fa1(498)
            }, _0x41061f = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        return _0x2683a8[_0xbc4fa1(499)] = function (_0x5c57ce, _0x35763a, _0x30a343) {
            var _0x3235a5 = _0xbc4fa1, _0x3396da;
            _0x30a343 = _0x2683a8['defaults']({}, _0x30a343, _0x2683a8[_0x3235a5(496)]);
            var _0x240e52 = new RegExp([
                    (_0x30a343[_0x3235a5(500)] || _0x5d851d)[_0x3235a5(501)],
                    (_0x30a343[_0x3235a5(502)] || _0x5d851d)[_0x3235a5(501)],
                    (_0x30a343[_0x3235a5(503)] || _0x5d851d)[_0x3235a5(501)]
                ][_0x3235a5(504)]('|') + '|$', 'g'), _0x4f7152 = 0, _0x58f49b = _0x3235a5(505);
            _0x5c57ce['replace'](_0x240e52, function (_0x5db472, _0x5bd010, _0x4b9526, _0x3c4cd3, _0x789dc9) {
                var _0x528ed0 = _0x3235a5;
                return _0x58f49b += _0x5c57ce[_0x528ed0(506)](_0x4f7152, _0x789dc9)['replace'](_0x41061f, function (_0x3a044e) {
                    return '\\' + _0x504c26[_0x3a044e];
                }), _0x5bd010 && (_0x58f49b += _0x528ed0(507) + _0x5bd010 + _0x528ed0(508)), _0x4b9526 && (_0x58f49b += _0x528ed0(507) + _0x4b9526 + _0x528ed0(509)), _0x3c4cd3 && (_0x58f49b += _0x528ed0(510) + _0x3c4cd3 + _0x528ed0(511)), _0x4f7152 = _0x789dc9 + _0x5db472['length'], _0x5db472;
            }), _0x58f49b += '\';\n';
            if (!_0x30a343[_0x3235a5(512)])
                _0x58f49b = 'with(obj||{}){\n' + _0x58f49b + '}\n';
            _0x58f49b = _0x3235a5(513) + 'print=function(){__p+=__j.call(arguments,\'\');};\n' + _0x58f49b + _0x3235a5(514);
            try {
                _0x3396da = new Function(_0x30a343[_0x3235a5(512)] || _0x3235a5(515), '_', _0x58f49b);
            } catch (_0x13ea66) {
                _0x13ea66[_0x3235a5(501)] = _0x58f49b;
                throw _0x13ea66;
            }
            if (_0x35763a)
                return _0x3396da(_0x35763a, _0x2683a8);
            var _0x2136a6 = function (_0x11a15d) {
                var _0x17a892 = _0x3235a5;
                return _0x3396da[_0x17a892(516)](this, _0x11a15d, _0x2683a8);
            };
            return _0x2136a6[_0x3235a5(501)] = _0x3235a5(517) + (_0x30a343['variable'] || _0x3235a5(515)) + _0x3235a5(518) + _0x58f49b + '}', _0x2136a6;
        }, _0x2683a8;
    }({});
    location[_0x572802(519)] === _0x572802(520) && (window[_0x572802(521)] = [
        [
            _0x572802(522),
            'UA-31081062-1'
        ],
        ['_trackPageview']
    ], function (_0x54fe05, _0x3f4ffe) {
        var _0x3cbd7f = _0x572802, _0x2353eb = _0x54fe05[_0x3cbd7f(523)](_0x3f4ffe), _0x272c4e = _0x54fe05['getElementsByTagName'](_0x3f4ffe)[0];
        _0x2353eb[_0x3cbd7f(524)] = '//www.google-analytics.com/ga.js', _0x272c4e[_0x3cbd7f(525)]['insertBefore'](_0x2353eb, _0x272c4e);
    }(document, _0x572802(526)));
    function _0x2d3901() {
        var _0x3f1acf = _0x572802;
        location[_0x3f1acf(519)] === 'tastejs.github.io' && (location['href'] = location[_0x3f1acf(527)][_0x3f1acf(528)]('tastejs.github.io/todomvc', _0x3f1acf(520)));
    }
    function _0x5b5be4() {
        var _0x492c38 = _0x572802, _0x3b77b9 = location['href'][_0x492c38(529)](_0x492c38(530));
        return location[_0x492c38(527)]['substr'](0, _0x3b77b9);
    }
    function _0x4e733b(_0x9932e1, _0x3669e1) {
        var _0x3388ef = _0x572802;
        if (!location[_0x3388ef(531)])
            return console['info'](_0x3388ef(532));
        var _0x21fd12 = new XMLHttpRequest();
        _0x21fd12[_0x3388ef(533)](_0x3388ef(534), _0x5b5be4() + _0x9932e1, !![]), _0x21fd12[_0x3388ef(535)](), _0x21fd12['onload'] = function () {
            var _0x49faf9 = _0x3388ef;
            _0x21fd12[_0x49faf9(536)] === 200 && _0x3669e1 && _0x3669e1(_0x21fd12[_0x49faf9(537)]);
        };
    }
    function _0x4a04d5(_0x77e024, _0x1e0182) {
        var _0x2bd84a = _0x572802;
        if (!(this instanceof _0x4a04d5))
            return new _0x4a04d5(_0x77e024, _0x1e0182);
        var _0x2ca5ee, _0x158193;
        if (typeof _0x77e024 !== _0x2bd84a(538))
            try {
                _0x77e024 = JSON[_0x2bd84a(539)](_0x77e024);
            } catch (_0x1b4518) {
                return;
            }
        _0x1e0182 && (_0x2ca5ee = _0x1e0182['template'], _0x158193 = _0x1e0182[_0x2bd84a(540)]);
        !_0x2ca5ee && _0x77e024[_0x2bd84a(541)] && (_0x2ca5ee = _0x77e024['templates'][_0x2bd84a(542)]);
        !_0x158193 && document[_0x2bd84a(543)](_0x2bd84a(544)) && (_0x158193 = document['querySelector'](_0x2bd84a(544))[_0x2bd84a(545)][_0x2bd84a(540)]);
        this[_0x2bd84a(499)] = _0x2ca5ee;
        if (_0x77e024[_0x2bd84a(546)])
            this['frameworkJSON'] = _0x77e024[_0x2bd84a(546)], this[_0x2bd84a(547)]['issueLabel'] = _0x158193, this[_0x2bd84a(548)]({ 'backend': !![] });
        else
            _0x77e024[_0x158193] && (this[_0x2bd84a(547)] = _0x77e024[_0x158193], this[_0x2bd84a(547)][_0x2bd84a(549)] = _0x158193, this[_0x2bd84a(548)]());
        this[_0x2bd84a(550)]();
    }
    _0x4a04d5[_0x572802(551)][_0x572802(548)] = function (_0x49b421) {
        var _0x14111c = _0x572802, _0x29d3e3 = document[_0x14111c(523)](_0x14111c(552));
        _0x29d3e3[_0x14111c(553)] = _0x5d3832['template'](this[_0x14111c(499)], this['frameworkJSON']), _0x29d3e3['className'] = _0x14111c(554);
        if (_0x49b421 && _0x49b421[_0x14111c(546)]) {
            var _0x4f8c4f = _0x29d3e3[_0x14111c(543)](_0x14111c(555)), _0x3c32ba = _0x4f8c4f[_0x14111c(556)], _0x4ddf53 = _0x4f8c4f[_0x14111c(557)], _0x34f56e = _0x4ddf53[_0x14111c(558)]('href');
            _0x4ddf53['setAttribute'](_0x14111c(527), _0x34f56e[_0x14111c(559)](_0x34f56e[_0x14111c(560)](_0x14111c(561)))), _0x4f8c4f['innerHTML'] = _0x3c32ba['outerHTML'] + _0x4ddf53[_0x14111c(562)];
        } else {
            var _0x50c849 = _0x29d3e3[_0x14111c(563)](_0x14111c(564));
            Array[_0x14111c(551)][_0x14111c(565)]['call'](_0x50c849, function (_0x4cc350) {
                var _0x3a2557 = _0x14111c;
                _0x4cc350[_0x3a2557(558)](_0x3a2557(527))[_0x3a2557(559)](0, 4) !== _0x3a2557(561) && _0x4cc350[_0x3a2557(566)](_0x3a2557(527), _0x5b5be4() + _0x4cc350[_0x3a2557(558)](_0x3a2557(527)));
            });
        }
        document[_0x14111c(567)][_0x14111c(568)] = (document[_0x14111c(567)][_0x14111c(568)] + _0x14111c(569))[_0x14111c(570)](), document[_0x14111c(567)][_0x14111c(571)](_0x14111c(572), _0x29d3e3[_0x14111c(562)]);
    }, _0x4a04d5[_0x572802(551)][_0x572802(550)] = function () {
        var _0x22b3fb = _0x572802, _0xcdfff7 = document['getElementById']('issue-count-link');
        if (_0xcdfff7) {
            var _0x4c92d3 = _0xcdfff7[_0x22b3fb(527)][_0x22b3fb(528)](_0x22b3fb(573), 'https://api.github.com/repos'), _0x149612 = new XMLHttpRequest();
            _0x149612[_0x22b3fb(533)](_0x22b3fb(534), _0x4c92d3, !![]), _0x149612['onload'] = function (_0x3ccfb2) {
                var _0x3a0a31 = _0x22b3fb, _0x19b88b = JSON[_0x3a0a31(539)](_0x3ccfb2[_0x3a0a31(574)][_0x3a0a31(537)]);
                if (_0x19b88b instanceof Array) {
                    var _0xc6a505 = _0x19b88b['length'];
                    _0xc6a505 !== 0 && (_0xcdfff7[_0x3a0a31(553)] = _0x3a0a31(575) + _0xc6a505 + _0x3a0a31(576), document[_0x3a0a31(577)](_0x3a0a31(578))['style'][_0x3a0a31(579)] = _0x3a0a31(580));
                }
            }, _0x149612[_0x22b3fb(535)]();
        }
    }, _0x2d3901(), _0x4e733b('learn.json', _0x4a04d5);
}());