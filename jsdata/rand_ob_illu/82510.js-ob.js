const _0x15a6 = ['{{authors}} helper', 'getUrlByResourceId', 'Michael', 'Michael, Thomas', 'AB=CD`EF', 'John O&#x27;Nolan, AB&#x3D;CD&#x60;EF', 'haunted', 'haunted, ghost forever', 'on haunted, ghost forever', ' &bull;', 'on ', 'bar', '<a href="author url 1">foo</a>, <a href="author url 2">bar</a>', '<a href="author url 2">bar</a>', 'author url', '<a href="author url 2">bar</a>, <a href="author url 3">baz</a>', 'author url x', '<a href="author url x">bar</a>', 'author url a', 'author url c', '<a href="author url a">foo</a>, <a href="author url b">bar</a>, <a href="author url c">baz</a>', 'can return string with authors', 'can use a different separator', 'does not add prefix or suffix if no authors exist', 'can list authors from a specified no.', 'can limit no. authors and output from 2', 'can list authors in a range (ignore limit)', 'stub', 'mUdhb', 'hlbNm', 'Coylu', 'uZQFZ', 'forKnex', 'createUser', 'DataGenerator', 'wycXS', 'exist', 'DDYHF', 'should', 'can return string with authors with special chars', 'John O\'Nolan', 'authors', 'MyCmS', 'equal', 'xRUKo', 'muSRq', 'fCTOW', 'haunted|ghost', 'YGlJK', 'call', 'UvLeC', 'can add a single suffix to multiple authors', 'JYoxn', 'BKdFT', 'JdSLS', 'TonGR', 'XtcTb', 'ghost', ' forever', 'DGiRw', 'GTAvb', 'JVxiM', 'DXuRQ', 'lGpZd', 'FbvYI', 'TORhJ', 'withArgs', 'returns', 'qObpx', 'JkTqP', 'INsqv', 'can limit no. authors output to 1', 'THMIW', 'ILrSO', 'uJDZD', 'zbHqf', 'kqwwr', 'foo-bar', 'hAZcq', 'TRJhf', 'can list authors in a range', 'xPPye', 'author url 3', 'OmiMF', 'GlmbR', 'foo', 'nBgUZ', 'BMAlQ', 'hNkmQ', 'LKLBm', 'DrFDL', 'IITep', 'MOfQU', 'mPIQi', '373020LWZPyZ', '350564ykOVXO', '409679ZbiqYv', '249311HBkGyG', '301211ldZWQT', '1DuPFET', '86AzVema', '2213TErytB', '414287UGQqET', 'sinon', '../../../core/frontend/services/url', '../../../core/frontend/helpers', '../../../core/server/models'];

function _0x35d5(_0xae56f1, _0x134092) {
    return _0x35d5 = function (_0x266ce3, _0x392949) {
        _0x266ce3 = _0x266ce3 - 443;
        const _0x376784 = _0x15a6[_0x266ce3];

        return _0x376784;
    }, _0x35d5(_0xae56f1, _0x134092);
}
const _0x30a0f9 = _0x35d5;

(function (_0x2dd48e, _0x45883d) {
    const _0x40de0f = _0x35d5;

    while (true) {
        try {
            const _0x10aed9 = parseInt(_0x40de0f(0x1bb)) + parseInt(_0x40de0f(0x1bc)) + -parseInt(_0x40de0f(0x1bd)) + parseInt(_0x40de0f(0x1be)) + -parseInt(_0x40de0f(0x1bf)) * -parseInt(_0x40de0f(0x1c0)) + -parseInt(_0x40de0f(0x1c1)) * parseInt(_0x40de0f(0x1c2)) + -parseInt(_0x40de0f(0x1c3));

            if (_0x10aed9 === _0x45883d) break;else _0x2dd48e.push(_0x2dd48e.shift());
        } catch (_0xb06fa) {
            _0x2dd48e.push(_0x2dd48e.shift());
        }
    }
})(_0x15a6, 259822);

const should = require('should');

const sinon = require(_0x30a0f9(0x1c4));

const urlService = require(_0x30a0f9(0x1c5));

const helpers = require(_0x30a0f9(0x1c6));

const models = require(_0x30a0f9(0x1c7));

const testUtils = require('../../utils');

describe(_0x30a0f9(0x1c8), function () {
    const _0xc73197 = _0x30a0f9;
    const _0xe224ba = {
        'mUdhb': _0xc73197(0x1c9),
        'CwcCQ': _0xc73197(0x1ca),
        'wycXS': 'Thomas',
        'MyCmS': 'false',
        'DDYHF': function (_0x3088b3, _0x2a6b24) {
            return _0x3088b3(_0x2a6b24);
        },
        'fWWyU': _0xc73197(0x1cb),
        'sXCWN': _0xc73197(0x1cc),
        'xRUKo': _0xc73197(0x1cd),
        'fCTOW': _0xc73197(0x1ce),
        'JYoxn': 'ghost',
        'BKdFT': ' forever',
        'JdSLS': function (_0x4653b2, _0x5f266d) {
            return _0x4653b2(_0x5f266d);
        },
        'TonGR': _0xc73197(0x1cf),
        'hOzbH': _0xc73197(0x1d0),
        'JVxiM': _0xc73197(0x1d1),
        'DXuRQ': '&hellip; ',
        'lGpZd': _0xc73197(0x1d2),
        'THMIW': 'foo',
        'FbvYI': 'foo-bar',
        'TORhJ': _0xc73197(0x1d3),
        'qObpx': 'author url 1',
        'JkTqP': 'author url 2',
        'INsqv': _0xc73197(0x1d4),
        'ILrSO': function (_0x21673a, _0xc67fc3) {
            return _0x21673a(_0xc67fc3);
        },
        'zbHqf': _0xc73197(0x1d5),
        'hAZcq': _0xc73197(0x1d6),
        'xPPye': 'baz',
        'OmiMF': _0xc73197(0x1d7),
        'nBgUZ': _0xc73197(0x1d8),
        'BMAlQ': _0xc73197(0x1d9),
        'LKLBm': _0xc73197(0x1da),
        'DrFDL': 'author url b',
        'IITep': _0xc73197(0x1db),
        'MOfQU': function (_0x172872, _0x2a62bb) {
            return _0x172872(_0x2a62bb);
        },
        'mPIQi': _0xc73197(0x1dc),
        'hlbNm': function (_0x5996ee, _0x1bb6be) {
            return _0x5996ee(_0x1bb6be);
        },
        'Coylu': function (_0x157b46, _0x5aef1f, _0x212a12) {
            return _0x157b46(_0x5aef1f, _0x212a12);
        },
        'uZQFZ': _0xc73197(0x1dd),
        'muSRq': _0xc73197(0x1de),
        'YGlJK': 'can add a single prefix to multiple authors',
        'UvLeC': function (_0x532f19, _0x12c62f, _0x342adb) {
            return _0x532f19(_0x12c62f, _0x342adb);
        },
        'XtcTb': 'can add a prefix and suffix to multiple authors',
        'DGiRw': function (_0x1e67a0, _0x5a51d9, _0x35e093) {
            return _0x1e67a0(_0x5a51d9, _0x35e093);
        },
        'GTAvb': 'can add a prefix and suffix with HTML',
        'FZwZc': _0xc73197(0x1df),
        'jxTgL': 'can autolink authors to author pages',
        'uJDZD': _0xc73197(0x1e0),
        'kqwwr': 'can list authors to a specified no.',
        'TRJhf': function (_0x1ab087, _0x19d058, _0x106ee9) {
            return _0x1ab087(_0x19d058, _0x106ee9);
        },
        'GlmbR': _0xc73197(0x1e1),
        'hNkmQ': _0xc73197(0x1e2)
    };

    before(function () {
        models.init();
    }), beforeEach(function () {
        const _0x4f09c6 = _0xc73197;

        sinon[_0x4f09c6(0x1e3)](urlService, _0xe224ba[_0x4f09c6(0x1e4)]);
    }), _0xe224ba[_0xc73197(0x1e5)](afterEach, function () {
        sinon.restore();
    }), _0xe224ba[_0xc73197(0x1e6)](it, _0xe224ba[_0xc73197(0x1e7)], function () {
        const _0x3b231c = _0xc73197;
        const _0x2b84be = [testUtils.DataGenerator[_0x3b231c(0x1e8)][_0x3b231c(0x1e9)]({ 'name': _0xe224ba.CwcCQ }), testUtils[_0x3b231c(0x1ea)].forKnex.createUser({ 'name': _0xe224ba[_0x3b231c(0x1eb)] })];

        const _0x5ae449 = helpers.authors.call({ 'authors': _0x2b84be }, { 'hash': { 'autolink': _0xe224ba.MyCmS } });

        should[_0x3b231c(0x1ec)](_0x5ae449), _0xe224ba[_0x3b231c(0x1ed)](String, _0x5ae449)[_0x3b231c(0x1ee)].equal(_0xe224ba.fWWyU);
    }), it(_0xc73197(0x1ef), function () {
        const _0x199609 = _0xc73197;
        const _0x160a4e = [testUtils[_0x199609(0x1ea)][_0x199609(0x1e8)][_0x199609(0x1e9)]({ 'name': _0x199609(0x1f0) }), testUtils.DataGenerator[_0x199609(0x1e8)][_0x199609(0x1e9)]({ 'name': _0xe224ba.sXCWN })];

        const _0x3d7c34 = helpers[_0x199609(0x1f1)].call({ 'authors': _0x160a4e }, { 'hash': { 'autolink': _0xe224ba[_0x199609(0x1f2)] } });

        should.exist(_0x3d7c34), String(_0x3d7c34).should[_0x199609(0x1f3)](_0xe224ba[_0x199609(0x1f4)]);
    }), _0xe224ba[_0xc73197(0x1e6)](it, _0xe224ba[_0xc73197(0x1f5)], function () {
        const _0x3c7c74 = _0xc73197;
        const _0x137b8f = [testUtils[_0x3c7c74(0x1ea)][_0x3c7c74(0x1e8)][_0x3c7c74(0x1e9)]({ 'name': _0xe224ba[_0x3c7c74(0x1f6)] }), testUtils.DataGenerator[_0x3c7c74(0x1e8)][_0x3c7c74(0x1e9)]({ 'name': _0xe224ba.JYoxn })];

        const _0x307166 = helpers[_0x3c7c74(0x1f1)].call({ 'authors': _0x137b8f }, {
            'hash': {
                'separator': '|',
                'autolink': _0xe224ba[_0x3c7c74(0x1f2)]
            }
        });

        should[_0x3c7c74(0x1ec)](_0x307166), _0xe224ba[_0x3c7c74(0x1ed)](String, _0x307166)[_0x3c7c74(0x1ee)].equal(_0x3c7c74(0x1f7));
    }), _0xe224ba.Coylu(it, _0xe224ba[_0xc73197(0x1f8)], function () {
        const _0x49e3da = _0xc73197;
        const _0x162de1 = [testUtils[_0x49e3da(0x1ea)][_0x49e3da(0x1e8)][_0x49e3da(0x1e9)]({ 'name': _0x49e3da(0x1ce) }), testUtils.DataGenerator.forKnex[_0x49e3da(0x1e9)]({ 'name': _0xe224ba.JYoxn })];

        const _0x5d4b49 = helpers[_0x49e3da(0x1f1)][_0x49e3da(0x1f9)]({ 'authors': _0x162de1 }, {
            'hash': {
                'prefix': _0x49e3da(0x1d2),
                'autolink': _0xe224ba[_0x49e3da(0x1f2)]
            }
        });

        should[_0x49e3da(0x1ec)](_0x5d4b49), _0xe224ba[_0x49e3da(0x1ed)](String, _0x5d4b49)[_0x49e3da(0x1ee)][_0x49e3da(0x1f3)]('on haunted, ghost');
    }), _0xe224ba[_0xc73197(0x1fa)](it, _0xc73197(0x1fb), function () {
        const _0x213a38 = _0xc73197;
        const _0x3a8cd6 = [testUtils[_0x213a38(0x1ea)][_0x213a38(0x1e8)].createUser({ 'name': _0xe224ba.fCTOW }), testUtils.DataGenerator.forKnex.createUser({ 'name': _0xe224ba[_0x213a38(0x1fc)] })];

        const _0x6f3717 = helpers[_0x213a38(0x1f1)][_0x213a38(0x1f9)]({ 'authors': _0x3a8cd6 }, {
            'hash': {
                'suffix': _0xe224ba[_0x213a38(0x1fd)],
                'autolink': _0xe224ba[_0x213a38(0x1f2)]
            }
        });

        should[_0x213a38(0x1ec)](_0x6f3717), _0xe224ba[_0x213a38(0x1fe)](String, _0x6f3717).should[_0x213a38(0x1f3)](_0xe224ba[_0x213a38(0x1ff)]);
    }), _0xe224ba.UvLeC(it, _0xe224ba[_0xc73197(0x200)], function () {
        const _0x277bdb = _0xc73197;
        const _0x19a9e5 = [testUtils[_0x277bdb(0x1ea)][_0x277bdb(0x1e8)][_0x277bdb(0x1e9)]({ 'name': _0xe224ba[_0x277bdb(0x1f6)] }), testUtils[_0x277bdb(0x1ea)].forKnex[_0x277bdb(0x1e9)]({ 'name': _0x277bdb(0x201) })];

        const _0x65a625 = helpers[_0x277bdb(0x1f1)][_0x277bdb(0x1f9)]({ 'authors': _0x19a9e5 }, {
            'hash': {
                'suffix': _0x277bdb(0x202),
                'prefix': 'on ',
                'autolink': 'false'
            }
        });

        should[_0x277bdb(0x1ec)](_0x65a625), String(_0x65a625)[_0x277bdb(0x1ee)].equal(_0xe224ba.hOzbH);
    }), _0xe224ba[_0xc73197(0x203)](it, _0xe224ba[_0xc73197(0x204)], function () {
        const _0x4b7585 = _0xc73197;
        const _0x2855cb = [testUtils[_0x4b7585(0x1ea)].forKnex.createUser({ 'name': _0xe224ba.fCTOW }), testUtils[_0x4b7585(0x1ea)][_0x4b7585(0x1e8)][_0x4b7585(0x1e9)]({ 'name': _0xe224ba[_0x4b7585(0x1fc)] })];

        const _0x442300 = helpers.authors.call({ 'authors': _0x2855cb }, {
            'hash': {
                'suffix': _0xe224ba[_0x4b7585(0x205)],
                'prefix': _0xe224ba[_0x4b7585(0x206)],
                'autolink': _0xe224ba[_0x4b7585(0x1f2)]
            }
        });

        should[_0x4b7585(0x1ec)](_0x442300), _0xe224ba.JdSLS(String, _0x442300).should[_0x4b7585(0x1f3)]('&hellip; haunted, ghost &bull;');
    }), _0xe224ba[_0xc73197(0x203)](it, _0xe224ba.FZwZc, function () {
        const _0x334acb = _0xc73197;

        const _0x270ce4 = helpers.authors[_0x334acb(0x1f9)]({}, {
            'hash': {
                'prefix': _0xe224ba[_0x334acb(0x207)],
                'suffix': _0xe224ba[_0x334acb(0x1fd)],
                'autolink': _0xe224ba.MyCmS
            }
        });

        should[_0x334acb(0x1ec)](_0x270ce4), String(_0x270ce4)[_0x334acb(0x1ee)][_0x334acb(0x1f3)]('');
    }), _0xe224ba.DGiRw(it, _0xe224ba.jxTgL, function () {
        const _0x3d6b89 = _0xc73197;
        const _0x1d9531 = [testUtils.DataGenerator.forKnex.createUser({
            'name': _0xe224ba.THMIW,
            'slug': _0xe224ba[_0x3d6b89(0x208)]
        }), testUtils[_0x3d6b89(0x1ea)][_0x3d6b89(0x1e8)][_0x3d6b89(0x1e9)]({
            'name': _0xe224ba[_0x3d6b89(0x209)],
            'slug': _0xe224ba[_0x3d6b89(0x209)]
        })];

        urlService[_0x3d6b89(0x1c9)][_0x3d6b89(0x20a)](_0x1d9531[0].id)[_0x3d6b89(0x20b)](_0xe224ba[_0x3d6b89(0x20c)]), urlService[_0x3d6b89(0x1c9)][_0x3d6b89(0x20a)](_0x1d9531[1].id)[_0x3d6b89(0x20b)](_0xe224ba[_0x3d6b89(0x20d)]);

        const _0x429fdd = helpers[_0x3d6b89(0x1f1)][_0x3d6b89(0x1f9)]({ 'authors': _0x1d9531 });

        should.exist(_0x429fdd), String(_0x429fdd)[_0x3d6b89(0x1ee)][_0x3d6b89(0x1f3)](_0xe224ba[_0x3d6b89(0x20e)]);
    }), _0xe224ba[_0xc73197(0x203)](it, _0xc73197(0x20f), function () {
        const _0x333f2a = _0xc73197;
        const _0x240b46 = [testUtils.DataGenerator[_0x333f2a(0x1e8)][_0x333f2a(0x1e9)]({
            'name': _0xe224ba[_0x333f2a(0x210)],
            'slug': _0xe224ba.FbvYI
        }), testUtils.DataGenerator.forKnex.createUser({
            'name': _0xe224ba.TORhJ,
            'slug': _0xe224ba[_0x333f2a(0x209)]
        })];

        urlService[_0x333f2a(0x1c9)][_0x333f2a(0x20a)](_0x240b46[0].id)[_0x333f2a(0x20b)](_0xe224ba[_0x333f2a(0x20c)]);

        const _0xff39f0 = helpers[_0x333f2a(0x1f1)].call({ 'authors': _0x240b46 }, { 'hash': { 'limit': '1' } });

        should.exist(_0xff39f0), _0xe224ba[_0x333f2a(0x211)](String, _0xff39f0)[_0x333f2a(0x1ee)][_0x333f2a(0x1f3)]('<a href="author url 1">foo</a>');
    }), it(_0xe224ba[_0xc73197(0x212)], function () {
        const _0x36766e = _0xc73197;
        const _0x2119e0 = [testUtils[_0x36766e(0x1ea)][_0x36766e(0x1e8)][_0x36766e(0x1e9)]({
            'name': _0xe224ba[_0x36766e(0x210)],
            'slug': _0xe224ba[_0x36766e(0x208)]
        }), testUtils[_0x36766e(0x1ea)].forKnex[_0x36766e(0x1e9)]({
            'name': _0x36766e(0x1d3),
            'slug': _0x36766e(0x1d3)
        })];

        urlService[_0x36766e(0x1c9)][_0x36766e(0x20a)](_0x2119e0[1].id)[_0x36766e(0x20b)]('author url 2');

        const _0x38571e = helpers.authors[_0x36766e(0x1f9)]({ 'authors': _0x2119e0 }, { 'hash': { 'from': '2' } });

        should[_0x36766e(0x1ec)](_0x38571e), String(_0x38571e)[_0x36766e(0x1ee)][_0x36766e(0x1f3)](_0xe224ba[_0x36766e(0x213)]);
    }), _0xe224ba[_0xc73197(0x203)](it, _0xe224ba[_0xc73197(0x214)], function () {
        const _0x531b6e = _0xc73197;
        const _0x4bbb9 = [testUtils[_0x531b6e(0x1ea)][_0x531b6e(0x1e8)][_0x531b6e(0x1e9)]({
            'name': _0xe224ba[_0x531b6e(0x210)],
            'slug': _0x531b6e(0x215)
        }), testUtils[_0x531b6e(0x1ea)][_0x531b6e(0x1e8)][_0x531b6e(0x1e9)]({
            'name': _0xe224ba.TORhJ,
            'slug': _0xe224ba.TORhJ
        })];

        urlService.getUrlByResourceId[_0x531b6e(0x20a)](_0x4bbb9[0].id)[_0x531b6e(0x20b)](_0xe224ba[_0x531b6e(0x216)]);

        const _0x32201d = helpers[_0x531b6e(0x1f1)].call({ 'authors': _0x4bbb9 }, { 'hash': { 'to': '1' } });

        should.exist(_0x32201d), String(_0x32201d)[_0x531b6e(0x1ee)][_0x531b6e(0x1f3)]('<a href="author url">foo</a>');
    }), _0xe224ba[_0xc73197(0x217)](it, _0xc73197(0x218), function () {
        const _0x4ed1c5 = _0xc73197;
        const _0x97357d = [testUtils[_0x4ed1c5(0x1ea)][_0x4ed1c5(0x1e8)][_0x4ed1c5(0x1e9)]({
            'name': 'foo',
            'slug': _0xe224ba[_0x4ed1c5(0x208)]
        }), testUtils[_0x4ed1c5(0x1ea)][_0x4ed1c5(0x1e8)].createUser({
            'name': _0xe224ba[_0x4ed1c5(0x209)],
            'slug': _0x4ed1c5(0x1d3)
        }), testUtils[_0x4ed1c5(0x1ea)][_0x4ed1c5(0x1e8)][_0x4ed1c5(0x1e9)]({
            'name': _0xe224ba[_0x4ed1c5(0x219)],
            'slug': _0xe224ba.xPPye
        })];

        urlService[_0x4ed1c5(0x1c9)][_0x4ed1c5(0x20a)](_0x97357d[1].id)[_0x4ed1c5(0x20b)](_0xe224ba.JkTqP), urlService[_0x4ed1c5(0x1c9)][_0x4ed1c5(0x20a)](_0x97357d[2].id).returns(_0x4ed1c5(0x21a));

        const _0x76e2b0 = helpers[_0x4ed1c5(0x1f1)][_0x4ed1c5(0x1f9)]({ 'authors': _0x97357d }, {
            'hash': {
                'from': '2',
                'to': '3'
            }
        });

        should[_0x4ed1c5(0x1ec)](_0x76e2b0), String(_0x76e2b0)[_0x4ed1c5(0x1ee)][_0x4ed1c5(0x1f3)](_0xe224ba[_0x4ed1c5(0x21b)]);
    }), it(_0xe224ba[_0xc73197(0x21c)], function () {
        const _0x39c45c = _0xc73197;
        const _0xa19eb5 = [testUtils.DataGenerator[_0x39c45c(0x1e8)].createUser({
            'name': _0x39c45c(0x21d),
            'slug': _0xe224ba.FbvYI
        }), testUtils.DataGenerator[_0x39c45c(0x1e8)][_0x39c45c(0x1e9)]({
            'name': _0xe224ba[_0x39c45c(0x209)],
            'slug': _0xe224ba.TORhJ
        }), testUtils[_0x39c45c(0x1ea)][_0x39c45c(0x1e8)][_0x39c45c(0x1e9)]({
            'name': _0xe224ba.xPPye,
            'slug': _0xe224ba.xPPye
        })];

        urlService[_0x39c45c(0x1c9)][_0x39c45c(0x20a)](_0xa19eb5[1].id)[_0x39c45c(0x20b)](_0xe224ba[_0x39c45c(0x21e)]);

        const _0x12200e = helpers[_0x39c45c(0x1f1)][_0x39c45c(0x1f9)]({ 'authors': _0xa19eb5 }, {
            'hash': {
                'from': '2',
                'limit': '1'
            }
        });

        should[_0x39c45c(0x1ec)](_0x12200e), _0xe224ba[_0x39c45c(0x211)](String, _0x12200e)[_0x39c45c(0x1ee)][_0x39c45c(0x1f3)](_0xe224ba[_0x39c45c(0x21f)]);
    }), it(_0xe224ba[_0xc73197(0x220)], function () {
        const _0x3ae255 = _0xc73197;
        const _0xa29a47 = [testUtils[_0x3ae255(0x1ea)][_0x3ae255(0x1e8)].createUser({
            'name': _0x3ae255(0x21d),
            'slug': _0xe224ba[_0x3ae255(0x208)]
        }), testUtils[_0x3ae255(0x1ea)][_0x3ae255(0x1e8)][_0x3ae255(0x1e9)]({
            'name': _0xe224ba.TORhJ,
            'slug': _0xe224ba[_0x3ae255(0x209)]
        }), testUtils.DataGenerator[_0x3ae255(0x1e8)].createUser({
            'name': _0xe224ba[_0x3ae255(0x219)],
            'slug': _0xe224ba[_0x3ae255(0x219)]
        })];

        urlService[_0x3ae255(0x1c9)][_0x3ae255(0x20a)](_0xa29a47[0].id)[_0x3ae255(0x20b)](_0xe224ba[_0x3ae255(0x221)]), urlService[_0x3ae255(0x1c9)][_0x3ae255(0x20a)](_0xa29a47[1].id)[_0x3ae255(0x20b)](_0xe224ba[_0x3ae255(0x222)]), urlService.getUrlByResourceId[_0x3ae255(0x20a)](_0xa29a47[2].id)[_0x3ae255(0x20b)](_0xe224ba[_0x3ae255(0x223)]);

        const _0x2fabcd = helpers.authors[_0x3ae255(0x1f9)]({ 'authors': _0xa29a47 }, {
            'hash': {
                'from': '1',
                'to': '3',
                'limit': '2'
            }
        });

        should[_0x3ae255(0x1ec)](_0x2fabcd), _0xe224ba[_0x3ae255(0x224)](String, _0x2fabcd)[_0x3ae255(0x1ee)][_0x3ae255(0x1f3)](_0xe224ba[_0x3ae255(0x225)]);
    });
});
