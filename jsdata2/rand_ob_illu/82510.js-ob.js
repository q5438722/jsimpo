const _0x4667 = ['4YaRTqt', '72283EtggvQ', '398374RAAKSO', '193785NHXfsF', '2olyXUk', '127121DMcLEh', '503469gDnMON', '402476BvzNhe', 'sinon', '../../../core/frontend/services/url', '../../../core/server/models', '../../utils', '{{authors}} helper', 'false', 'Michael, Thomas', 'AB=CD`EF', 'John O&#x27;Nolan, AB&#x3D;CD&#x60;EF', 'haunted', 'haunted|ghost', 'ghost', 'on ', 'on haunted, ghost', ' forever', 'haunted, ghost forever', ' &bull;', '&hellip; ', 'foo', 'bar', '<a href="author url 2">bar</a>', 'author url', 'baz', '<a href="author url 2">bar</a>, <a href="author url 3">baz</a>', '<a href="author url x">bar</a>', 'author url a', 'author url c', 'can return string with authors', 'can use a different separator', 'can add a prefix and suffix with HTML', 'can autolink authors to author pages', 'can limit no. authors output to 1', 'can list authors from a specified no.', 'can list authors in a range', 'can list authors in a range (ignore limit)', 'init', 'stub', 'fKGKR', 'mZOEj', 'restore', 'YcyQG', 'DataGenerator', 'forKnex', 'createUser', 'Michael', 'authors', 'call', 'BgpAI', 'exist', 'qiKtD', 'equal', 'haJml', 'gjRhY', 'should', 'qmxTx', 'qwJLH', 'can add a single prefix to multiple authors', 'OmJck', 'ZBiLa', 'HOBLe', 'nqhOb', 'can add a prefix and suffix to multiple authors', 'YBaLY', 'CeovO', 'qjrAM', 'rgDvl', 'hYeJz', 'KFSOT', 'does not add prefix or suffix if no authors exist', 'LjcDv', 'vJOvQ', 'tHkuN', 'PiaSP', 'SXqLu', 'getUrlByResourceId', 'returns', 'author url 1', 'withArgs', 'cMrly', 'JRRJz', '<a href="author url 1">foo</a>, <a href="author url 2">bar</a>', 'gJYwj', 'rsBVM', '<a href="author url 1">foo</a>', 'BkgTk', 'OAykB', 'OGRYy', 'lxPvz', 'can list authors to a specified no.', '<a href="author url">foo</a>', 'ankBL', 'pGlrY', 'cUrtD', 'AjvIV', 'hAwNI', 'foo-bar', 'author url x', 'cpVVJ', 'hBcZD', 'vroom', '635023tGrKDI', '1LiXzkT'];
const _0x340dad = _0x569a;

function _0x569a(_0x1adad7, _0x76915) {
    return _0x569a = function (_0x29e13b, _0x22ab58) {
        _0x29e13b = _0x29e13b - 139;
        const _0x41769c = _0x4667[_0x29e13b];

        return _0x41769c;
    }, _0x569a(_0x1adad7, _0x76915);
}
(function (_0x344e3b, _0x52eeec) {
    const _0x3916ca = _0x569a;

    while (true) {
        try {
            const _0x2ab72d = -parseInt(_0x3916ca(0x8b)) * -parseInt(_0x3916ca(0x8c)) + -parseInt(_0x3916ca(0x8d)) * -parseInt(_0x3916ca(0x8e)) + -parseInt(_0x3916ca(0x8f)) + -parseInt(_0x3916ca(0x90)) * parseInt(_0x3916ca(0x91)) + parseInt(_0x3916ca(0x92)) + parseInt(_0x3916ca(0x93)) + -parseInt(_0x3916ca(0x94));

            if (_0x2ab72d === _0x52eeec) break;else _0x344e3b.push(_0x344e3b.shift());
        } catch (_0x3f950f) {
            _0x344e3b.push(_0x344e3b.shift());
        }
    }
})(_0x4667, 366325);

const should = require('should');

const sinon = require(_0x340dad(0x95));

const urlService = require(_0x340dad(0x96));

const helpers = require('../../../core/frontend/helpers');

const models = require(_0x340dad(0x97));

const testUtils = require(_0x340dad(0x98));

describe(_0x340dad(0x99), function () {
    const _0x4dd480 = _0x340dad;
    const _0x2d92f3 = {
        'fKGKR': 'getUrlByResourceId',
        'BgpAI': _0x4dd480(0x9a),
        'qiKtD': function (_0x3fcd66, _0x2b83a6) {
            return _0x3fcd66(_0x2b83a6);
        },
        'YhKdR': _0x4dd480(0x9b),
        'aacNG': 'John O\'Nolan',
        'gjRhY': _0x4dd480(0x9c),
        'qmxTx': _0x4dd480(0x9d),
        'qwJLH': _0x4dd480(0x9e),
        'iggCz': _0x4dd480(0x9f),
        'FEjjQ': _0x4dd480(0xa0),
        'OmJck': _0x4dd480(0xa1),
        'AglqX': _0x4dd480(0xa2),
        'enSyV': _0x4dd480(0xa3),
        'HOBLe': function (_0xab3a1a, _0x5c7310) {
            return _0xab3a1a(_0x5c7310);
        },
        'nqhOb': _0x4dd480(0xa4),
        'YBaLY': 'on haunted, ghost forever',
        'qjrAM': _0x4dd480(0xa5),
        'rgDvl': _0x4dd480(0xa6),
        'hYeJz': '&hellip; haunted, ghost &bull;',
        'LjcDv': function (_0x471c6d, _0x2876d4) {
            return _0x471c6d(_0x2876d4);
        },
        'PiaSP': _0x4dd480(0xa7),
        'SXqLu': 'foo-bar',
        'rsBVM': _0x4dd480(0xa8),
        'cMrly': 'author url 2',
        'JRRJz': function (_0x3e7656, _0x515f85) {
            return _0x3e7656(_0x515f85);
        },
        'OAykB': function (_0x39f997, _0x1376f3) {
            return _0x39f997(_0x1376f3);
        },
        'OGRYy': _0x4dd480(0xa9),
        'SDMiW': _0x4dd480(0xaa),
        'pGlrY': _0x4dd480(0xab),
        'cUrtD': 'author url 3',
        'mZOEj': function (_0x251799, _0x5f5443) {
            return _0x251799(_0x5f5443);
        },
        'AjvIV': _0x4dd480(0xac),
        'IyzfG': _0x4dd480(0xad),
        'cpVVJ': _0x4dd480(0xae),
        'hBcZD': 'author url b',
        'vroom': _0x4dd480(0xaf),
        'yLnmN': '<a href="author url a">foo</a>, <a href="author url b">bar</a>, <a href="author url c">baz</a>',
        'haJml': function (_0x464744, _0x5c5ad7, _0xc426c6) {
            return _0x464744(_0x5c5ad7, _0xc426c6);
        },
        'YcyQG': _0x4dd480(0xb0),
        'GsSIP': 'can return string with authors with special chars',
        'Echwc': _0x4dd480(0xb1),
        'ZBiLa': 'can add a single suffix to multiple authors',
        'CeovO': _0x4dd480(0xb2),
        'KFSOT': function (_0xdc1673, _0x265121, _0x26fc70) {
            return _0xdc1673(_0x265121, _0x26fc70);
        },
        'vJOvQ': function (_0x5dd114, _0x293a7c, _0x2821f2) {
            return _0x5dd114(_0x293a7c, _0x2821f2);
        },
        'tHkuN': _0x4dd480(0xb3),
        'gJYwj': _0x4dd480(0xb4),
        'BkgTk': _0x4dd480(0xb5),
        'lxPvz': function (_0x44124f, _0x4da71f, _0x10ab9d) {
            return _0x44124f(_0x4da71f, _0x10ab9d);
        },
        'ankBL': _0x4dd480(0xb6),
        'hAwNI': 'can limit no. authors and output from 2',
        'nOeBc': _0x4dd480(0xb7)
    };

    before(function () {
        const _0x3a7b83 = _0x4dd480;

        models[_0x3a7b83(0xb8)]();
    }), beforeEach(function () {
        const _0x1f580d = _0x4dd480;

        sinon[_0x1f580d(0xb9)](urlService, _0x2d92f3[_0x1f580d(0xba)]);
    }), _0x2d92f3[_0x4dd480(0xbb)](afterEach, function () {
        const _0x51142b = _0x4dd480;

        sinon[_0x51142b(0xbc)]();
    }), _0x2d92f3.haJml(it, _0x2d92f3[_0x4dd480(0xbd)], function () {
        const _0x4f4743 = _0x4dd480;
        const _0x2ba00f = [testUtils[_0x4f4743(0xbe)][_0x4f4743(0xbf)][_0x4f4743(0xc0)]({ 'name': _0x4f4743(0xc1) }), testUtils[_0x4f4743(0xbe)][_0x4f4743(0xbf)].createUser({ 'name': 'Thomas' })];

        const _0x727aa9 = helpers[_0x4f4743(0xc2)][_0x4f4743(0xc3)]({ 'authors': _0x2ba00f }, { 'hash': { 'autolink': _0x2d92f3[_0x4f4743(0xc4)] } });

        should[_0x4f4743(0xc5)](_0x727aa9), _0x2d92f3[_0x4f4743(0xc6)](String, _0x727aa9).should[_0x4f4743(0xc7)](_0x2d92f3.YhKdR);
    }), _0x2d92f3[_0x4dd480(0xc8)](it, _0x2d92f3.GsSIP, function () {
        const _0x14bcfe = _0x4dd480;
        const _0x50cefa = [testUtils[_0x14bcfe(0xbe)][_0x14bcfe(0xbf)][_0x14bcfe(0xc0)]({ 'name': _0x2d92f3.aacNG }), testUtils[_0x14bcfe(0xbe)][_0x14bcfe(0xbf)][_0x14bcfe(0xc0)]({ 'name': _0x2d92f3[_0x14bcfe(0xc9)] })];

        const _0x5e983a = helpers[_0x14bcfe(0xc2)][_0x14bcfe(0xc3)]({ 'authors': _0x50cefa }, { 'hash': { 'autolink': _0x2d92f3[_0x14bcfe(0xc4)] } });

        should[_0x14bcfe(0xc5)](_0x5e983a), String(_0x5e983a)[_0x14bcfe(0xca)].equal(_0x2d92f3[_0x14bcfe(0xcb)]);
    }), _0x2d92f3[_0x4dd480(0xc8)](it, _0x2d92f3.Echwc, function () {
        const _0x583bec = _0x4dd480;
        const _0x5a5bd8 = [testUtils[_0x583bec(0xbe)][_0x583bec(0xbf)][_0x583bec(0xc0)]({ 'name': _0x2d92f3[_0x583bec(0xcc)] }), testUtils[_0x583bec(0xbe)][_0x583bec(0xbf)].createUser({ 'name': _0x583bec(0xa0) })];

        const _0x4fc8c2 = helpers[_0x583bec(0xc2)].call({ 'authors': _0x5a5bd8 }, {
            'hash': {
                'separator': '|',
                'autolink': _0x2d92f3[_0x583bec(0xc4)]
            }
        });

        should[_0x583bec(0xc5)](_0x4fc8c2), _0x2d92f3[_0x583bec(0xc6)](String, _0x4fc8c2).should[_0x583bec(0xc7)](_0x2d92f3.iggCz);
    }), it(_0x4dd480(0xcd), function () {
        const _0x17e518 = _0x4dd480;
        const _0x2cc43c = [testUtils[_0x17e518(0xbe)][_0x17e518(0xbf)].createUser({ 'name': _0x17e518(0x9e) }), testUtils[_0x17e518(0xbe)][_0x17e518(0xbf)][_0x17e518(0xc0)]({ 'name': _0x2d92f3.FEjjQ })];

        const _0x44ddc4 = helpers[_0x17e518(0xc2)][_0x17e518(0xc3)]({ 'authors': _0x2cc43c }, {
            'hash': {
                'prefix': _0x2d92f3[_0x17e518(0xce)],
                'autolink': _0x2d92f3[_0x17e518(0xc4)]
            }
        });

        should[_0x17e518(0xc5)](_0x44ddc4), String(_0x44ddc4)[_0x17e518(0xca)][_0x17e518(0xc7)](_0x2d92f3.AglqX);
    }), _0x2d92f3.haJml(it, _0x2d92f3[_0x4dd480(0xcf)], function () {
        const _0x2bb8f3 = _0x4dd480;
        const _0x4a7664 = [testUtils.DataGenerator.forKnex[_0x2bb8f3(0xc0)]({ 'name': _0x2d92f3[_0x2bb8f3(0xcc)] }), testUtils[_0x2bb8f3(0xbe)][_0x2bb8f3(0xbf)][_0x2bb8f3(0xc0)]({ 'name': _0x2bb8f3(0xa0) })];

        const _0x591f19 = helpers.authors[_0x2bb8f3(0xc3)]({ 'authors': _0x4a7664 }, {
            'hash': {
                'suffix': _0x2d92f3.enSyV,
                'autolink': _0x2d92f3.BgpAI
            }
        });

        should[_0x2bb8f3(0xc5)](_0x591f19), _0x2d92f3[_0x2bb8f3(0xd0)](String, _0x591f19)[_0x2bb8f3(0xca)].equal(_0x2d92f3[_0x2bb8f3(0xd1)]);
    }), it(_0x4dd480(0xd2), function () {
        const _0x308324 = _0x4dd480;
        const _0x2fefe6 = [testUtils.DataGenerator[_0x308324(0xbf)][_0x308324(0xc0)]({ 'name': _0x2d92f3[_0x308324(0xcc)] }), testUtils.DataGenerator[_0x308324(0xbf)][_0x308324(0xc0)]({ 'name': _0x308324(0xa0) })];

        const _0x130e3b = helpers[_0x308324(0xc2)][_0x308324(0xc3)]({ 'authors': _0x2fefe6 }, {
            'hash': {
                'suffix': ' forever',
                'prefix': _0x2d92f3[_0x308324(0xce)],
                'autolink': _0x2d92f3[_0x308324(0xc4)]
            }
        });

        should[_0x308324(0xc5)](_0x130e3b), _0x2d92f3[_0x308324(0xd0)](String, _0x130e3b)[_0x308324(0xca)][_0x308324(0xc7)](_0x2d92f3[_0x308324(0xd3)]);
    }), _0x2d92f3[_0x4dd480(0xc8)](it, _0x2d92f3[_0x4dd480(0xd4)], function () {
        const _0x5231f7 = _0x4dd480;
        const _0x587703 = [testUtils[_0x5231f7(0xbe)][_0x5231f7(0xbf)][_0x5231f7(0xc0)]({ 'name': 'haunted' }), testUtils.DataGenerator.forKnex[_0x5231f7(0xc0)]({ 'name': _0x5231f7(0xa0) })];

        const _0x382447 = helpers[_0x5231f7(0xc2)][_0x5231f7(0xc3)]({ 'authors': _0x587703 }, {
            'hash': {
                'suffix': _0x2d92f3[_0x5231f7(0xd5)],
                'prefix': _0x2d92f3[_0x5231f7(0xd6)],
                'autolink': _0x5231f7(0x9a)
            }
        });

        should.exist(_0x382447), _0x2d92f3[_0x5231f7(0xd0)](String, _0x382447)[_0x5231f7(0xca)][_0x5231f7(0xc7)](_0x2d92f3[_0x5231f7(0xd7)]);
    }), _0x2d92f3[_0x4dd480(0xd8)](it, _0x4dd480(0xd9), function () {
        const _0x16c5b4 = _0x4dd480;

        const _0x2299fd = helpers[_0x16c5b4(0xc2)][_0x16c5b4(0xc3)]({}, {
            'hash': {
                'prefix': _0x2d92f3[_0x16c5b4(0xce)],
                'suffix': _0x2d92f3.enSyV,
                'autolink': 'false'
            }
        });

        should[_0x16c5b4(0xc5)](_0x2299fd), _0x2d92f3[_0x16c5b4(0xda)](String, _0x2299fd).should[_0x16c5b4(0xc7)]('');
    }), _0x2d92f3[_0x4dd480(0xdb)](it, _0x2d92f3[_0x4dd480(0xdc)], function () {
        const _0x22951e = _0x4dd480;
        const _0x334f56 = [testUtils[_0x22951e(0xbe)][_0x22951e(0xbf)].createUser({
            'name': _0x2d92f3[_0x22951e(0xdd)],
            'slug': _0x2d92f3[_0x22951e(0xde)]
        }), testUtils[_0x22951e(0xbe)][_0x22951e(0xbf)].createUser({
            'name': _0x2d92f3.rsBVM,
            'slug': 'bar'
        })];

        urlService[_0x22951e(0xdf)].withArgs(_0x334f56[0].id)[_0x22951e(0xe0)](_0x22951e(0xe1)), urlService.getUrlByResourceId[_0x22951e(0xe2)](_0x334f56[1].id).returns(_0x2d92f3[_0x22951e(0xe3)]);

        const _0x260ca3 = helpers[_0x22951e(0xc2)].call({ 'authors': _0x334f56 });

        should[_0x22951e(0xc5)](_0x260ca3), _0x2d92f3[_0x22951e(0xe4)](String, _0x260ca3)[_0x22951e(0xca)][_0x22951e(0xc7)](_0x22951e(0xe5));
    }), _0x2d92f3[_0x4dd480(0xdb)](it, _0x2d92f3[_0x4dd480(0xe6)], function () {
        const _0x38205d = _0x4dd480;
        const _0x4746f9 = [testUtils[_0x38205d(0xbe)][_0x38205d(0xbf)][_0x38205d(0xc0)]({
            'name': _0x2d92f3[_0x38205d(0xdd)],
            'slug': _0x2d92f3[_0x38205d(0xde)]
        }), testUtils[_0x38205d(0xbe)][_0x38205d(0xbf)][_0x38205d(0xc0)]({
            'name': _0x38205d(0xa8),
            'slug': _0x2d92f3[_0x38205d(0xe7)]
        })];

        urlService.getUrlByResourceId[_0x38205d(0xe2)](_0x4746f9[0].id).returns(_0x38205d(0xe1));

        const _0x948a0a = helpers.authors.call({ 'authors': _0x4746f9 }, { 'hash': { 'limit': '1' } });

        should[_0x38205d(0xc5)](_0x948a0a), String(_0x948a0a)[_0x38205d(0xca)][_0x38205d(0xc7)](_0x38205d(0xe8));
    }), _0x2d92f3[_0x4dd480(0xdb)](it, _0x2d92f3[_0x4dd480(0xe9)], function () {
        const _0x44eb07 = _0x4dd480;
        const _0x5b05a6 = [testUtils.DataGenerator.forKnex[_0x44eb07(0xc0)]({
            'name': _0x2d92f3[_0x44eb07(0xdd)],
            'slug': _0x2d92f3[_0x44eb07(0xde)]
        }), testUtils.DataGenerator[_0x44eb07(0xbf)][_0x44eb07(0xc0)]({
            'name': _0x44eb07(0xa8),
            'slug': _0x2d92f3[_0x44eb07(0xe7)]
        })];

        urlService[_0x44eb07(0xdf)][_0x44eb07(0xe2)](_0x5b05a6[1].id)[_0x44eb07(0xe0)](_0x2d92f3.cMrly);

        const _0x3cfd65 = helpers[_0x44eb07(0xc2)][_0x44eb07(0xc3)]({ 'authors': _0x5b05a6 }, { 'hash': { 'from': '2' } });

        should[_0x44eb07(0xc5)](_0x3cfd65), _0x2d92f3[_0x44eb07(0xea)](String, _0x3cfd65)[_0x44eb07(0xca)][_0x44eb07(0xc7)](_0x2d92f3[_0x44eb07(0xeb)]);
    }), _0x2d92f3[_0x4dd480(0xec)](it, _0x4dd480(0xed), function () {
        const _0x4d3b58 = _0x4dd480;
        const _0x13fc9e = [testUtils.DataGenerator[_0x4d3b58(0xbf)][_0x4d3b58(0xc0)]({
            'name': _0x2d92f3[_0x4d3b58(0xdd)],
            'slug': _0x2d92f3[_0x4d3b58(0xde)]
        }), testUtils[_0x4d3b58(0xbe)].forKnex[_0x4d3b58(0xc0)]({
            'name': _0x2d92f3[_0x4d3b58(0xe7)],
            'slug': _0x2d92f3[_0x4d3b58(0xe7)]
        })];

        urlService[_0x4d3b58(0xdf)][_0x4d3b58(0xe2)](_0x13fc9e[0].id)[_0x4d3b58(0xe0)](_0x2d92f3.SDMiW);

        const _0x137324 = helpers.authors[_0x4d3b58(0xc3)]({ 'authors': _0x13fc9e }, { 'hash': { 'to': '1' } });

        should.exist(_0x137324), _0x2d92f3[_0x4d3b58(0xea)](String, _0x137324).should[_0x4d3b58(0xc7)](_0x4d3b58(0xee));
    }), it(_0x2d92f3[_0x4dd480(0xef)], function () {
        const _0x1fb1f2 = _0x4dd480;
        const _0x740e73 = [testUtils[_0x1fb1f2(0xbe)][_0x1fb1f2(0xbf)][_0x1fb1f2(0xc0)]({
            'name': _0x2d92f3.PiaSP,
            'slug': _0x2d92f3[_0x1fb1f2(0xde)]
        }), testUtils[_0x1fb1f2(0xbe)][_0x1fb1f2(0xbf)][_0x1fb1f2(0xc0)]({
            'name': _0x2d92f3.rsBVM,
            'slug': _0x2d92f3[_0x1fb1f2(0xe7)]
        }), testUtils.DataGenerator[_0x1fb1f2(0xbf)][_0x1fb1f2(0xc0)]({
            'name': _0x2d92f3[_0x1fb1f2(0xf0)],
            'slug': _0x2d92f3[_0x1fb1f2(0xf0)]
        })];

        urlService.getUrlByResourceId[_0x1fb1f2(0xe2)](_0x740e73[1].id)[_0x1fb1f2(0xe0)](_0x2d92f3[_0x1fb1f2(0xe3)]), urlService[_0x1fb1f2(0xdf)][_0x1fb1f2(0xe2)](_0x740e73[2].id)[_0x1fb1f2(0xe0)](_0x2d92f3[_0x1fb1f2(0xf1)]);

        const _0x77202b = helpers.authors.call({ 'authors': _0x740e73 }, {
            'hash': {
                'from': '2',
                'to': '3'
            }
        });

        should[_0x1fb1f2(0xc5)](_0x77202b), _0x2d92f3[_0x1fb1f2(0xbb)](String, _0x77202b)[_0x1fb1f2(0xca)][_0x1fb1f2(0xc7)](_0x2d92f3[_0x1fb1f2(0xf2)]);
    }), it(_0x2d92f3[_0x4dd480(0xf3)], function () {
        const _0x18682b = _0x4dd480;
        const _0x2f1e6e = [testUtils.DataGenerator[_0x18682b(0xbf)].createUser({
            'name': _0x2d92f3.PiaSP,
            'slug': _0x18682b(0xf4)
        }), testUtils.DataGenerator[_0x18682b(0xbf)].createUser({
            'name': _0x2d92f3[_0x18682b(0xe7)],
            'slug': _0x18682b(0xa8)
        }), testUtils[_0x18682b(0xbe)][_0x18682b(0xbf)].createUser({
            'name': _0x2d92f3[_0x18682b(0xf0)],
            'slug': _0x18682b(0xab)
        })];

        urlService.getUrlByResourceId[_0x18682b(0xe2)](_0x2f1e6e[1].id)[_0x18682b(0xe0)](_0x18682b(0xf5));

        const _0x281fe8 = helpers.authors[_0x18682b(0xc3)]({ 'authors': _0x2f1e6e }, {
            'hash': {
                'from': '2',
                'limit': '1'
            }
        });

        should[_0x18682b(0xc5)](_0x281fe8), String(_0x281fe8)[_0x18682b(0xca)][_0x18682b(0xc7)](_0x2d92f3.IyzfG);
    }), _0x2d92f3[_0x4dd480(0xec)](it, _0x2d92f3.nOeBc, function () {
        const _0x28eca3 = _0x4dd480;
        const _0x2cc247 = [testUtils[_0x28eca3(0xbe)][_0x28eca3(0xbf)][_0x28eca3(0xc0)]({
            'name': _0x2d92f3[_0x28eca3(0xdd)],
            'slug': _0x28eca3(0xf4)
        }), testUtils[_0x28eca3(0xbe)].forKnex[_0x28eca3(0xc0)]({
            'name': _0x2d92f3[_0x28eca3(0xe7)],
            'slug': _0x2d92f3[_0x28eca3(0xe7)]
        }), testUtils.DataGenerator.forKnex.createUser({
            'name': _0x2d92f3[_0x28eca3(0xf0)],
            'slug': _0x2d92f3[_0x28eca3(0xf0)]
        })];

        urlService.getUrlByResourceId.withArgs(_0x2cc247[0].id)[_0x28eca3(0xe0)](_0x2d92f3[_0x28eca3(0xf6)]), urlService[_0x28eca3(0xdf)][_0x28eca3(0xe2)](_0x2cc247[1].id)[_0x28eca3(0xe0)](_0x2d92f3[_0x28eca3(0xf7)]), urlService[_0x28eca3(0xdf)][_0x28eca3(0xe2)](_0x2cc247[2].id)[_0x28eca3(0xe0)](_0x2d92f3[_0x28eca3(0xf8)]);

        const _0x1d2066 = helpers[_0x28eca3(0xc2)][_0x28eca3(0xc3)]({ 'authors': _0x2cc247 }, {
            'hash': {
                'from': '1',
                'to': '3',
                'limit': '2'
            }
        });

        should.exist(_0x1d2066), _0x2d92f3.mZOEj(String, _0x1d2066)[_0x28eca3(0xca)].equal(_0x2d92f3.yLnmN);
    });
});
