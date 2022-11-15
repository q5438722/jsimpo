var test = require('tap')[_0x55d71a(445)], generator = require(_0x55d71a(446)), convert = require('..'), gen = generator()[_0x55d71a(447)]('foo.js', [{
            'original': {
                'line': 2,
                'column': 3
            },
            'generated': {
                'line': 5,
                'column': 10
            }
        }], { 'line': 5 })[_0x55d71a(448)]('bar.js', _0x55d71a(449), {
        'line': 23,
        'column': 22
    }), base64 = gen[_0x55d71a(450)](), comment = gen[_0x55d71a(451)](), json = gen[_0x55d71a(452)](), obj = JSON['parse'](json);
test(_0x55d71a(453), function (_0x35dd9f) {
    var _0x416dbb = _0x55d71a, _0x1f6586 = {
            'ruiaa': _0x416dbb(454),
            'HhXHZ': _0x416dbb(455),
            'sFlWP': _0x416dbb(456),
            'sxPQQ': _0x416dbb(457),
            'OGATw': 'comment -> object',
            'LeRba': _0x416dbb(458),
            'ZGsQB': _0x416dbb(459),
            'DTeVM': _0x416dbb(460),
            'BTZhE': 'json -> base64'
        }, _0x54c1f3 = '8|10|2|5|6|3|9|0|4|12|11|1|7'[_0x416dbb(461)]('|'), _0x472a98 = 8629 * -1 + -16 * -593 + -859;
    while (!![]) {
        switch (_0x54c1f3[_0x472a98++]) {
        case '0':
            _0x35dd9f['deepEqual'](convert[_0x416dbb(462)](base64)[_0x416dbb(463)](), obj, 'base64 -> object');
            continue;
        case '1':
            _0x35dd9f[_0x416dbb(464)](convert['fromJSON'](json)[_0x416dbb(463)](), obj, _0x1f6586['ruiaa']);
            continue;
        case '2':
            _0x35dd9f[_0x416dbb(465)](convert[_0x416dbb(466)](comment)[_0x416dbb(467)](), json, _0x1f6586[_0x416dbb(468)]);
            continue;
        case '3':
            _0x35dd9f[_0x416dbb(465)](convert[_0x416dbb(462)](base64)[_0x416dbb(469)](), comment, _0x1f6586[_0x416dbb(470)]);
            continue;
        case '4':
            _0x35dd9f[_0x416dbb(465)](convert[_0x416dbb(471)](json)[_0x416dbb(467)](), json, _0x1f6586[_0x416dbb(472)]);
            continue;
        case '5':
            _0x35dd9f['deepEqual'](convert[_0x416dbb(466)](comment)[_0x416dbb(463)](), obj, _0x1f6586[_0x416dbb(473)]);
            continue;
        case '6':
            _0x35dd9f['equal'](convert[_0x416dbb(462)](base64)['toBase64'](), base64, _0x1f6586['LeRba']);
            continue;
        case '7':
            _0x35dd9f['end']();
            continue;
        case '8':
            _0x35dd9f[_0x416dbb(465)](convert[_0x416dbb(466)](comment)['toComment'](), comment, _0x416dbb(474));
            continue;
        case '9':
            _0x35dd9f[_0x416dbb(465)](convert[_0x416dbb(462)](base64)[_0x416dbb(467)](), json, _0x1f6586[_0x416dbb(475)]);
            continue;
        case '10':
            _0x35dd9f[_0x416dbb(465)](convert[_0x416dbb(466)](comment)['toBase64'](), base64, _0x1f6586[_0x416dbb(476)]);
            continue;
        case '11':
            _0x35dd9f[_0x416dbb(465)](convert[_0x416dbb(471)](json)[_0x416dbb(469)](), comment, _0x416dbb(477));
            continue;
        case '12':
            _0x35dd9f[_0x416dbb(465)](convert['fromJSON'](json)[_0x416dbb(478)](), base64, _0x1f6586['BTZhE']);
            continue;
        }
        break;
    }
}), test('to object returns a copy', function (_0x4f7feb) {
    var _0x3fe267 = _0x55d71a, _0x29b56d = {
            'touqy': _0x3fe267(479),
            'yPcof': _0x3fe267(480)
        }, _0x5856ec = _0x29b56d[_0x3fe267(481)][_0x3fe267(461)]('|'), _0x35caf0 = -259 + 5492 + 5233 * -1;
    while (!![]) {
        switch (_0x5856ec[_0x35caf0++]) {
        case '0':
            _0x4f7feb[_0x3fe267(482)]();
            continue;
        case '1':
            var _0x2160cf = _0x2c65b8['toObject']();
            continue;
        case '2':
            var _0x2c65b8 = convert[_0x3fe267(471)](json);
            continue;
        case '3':
            _0x2160cf[_0x3fe267(483)] = '99';
            continue;
        case '4':
            _0x4f7feb[_0x3fe267(465)](_0x2c65b8[_0x3fe267(463)]()[_0x3fe267(483)], 2614 * -1 + -3 * -26 + 2539, _0x29b56d[_0x3fe267(484)]);
            continue;
        }
        break;
    }
}), test(_0x55d71a(485), function (_0x3b8948) {
    var _0x136200 = _0x55d71a, _0x3ae67f = convert[_0x136200(486)](obj), _0xa822e9 = _0x3ae67f['toComment']({ 'multiline': !![] });
    _0x3b8948[_0x136200(487)](_0xa822e9, /^\/\*# sourceMappingURL=.+ \*\/$/), _0x3b8948[_0x136200(482)]();
}), test(_0x55d71a(488), function (_0x4fef78) {
    var _0x521916 = _0x55d71a, _0x549543 = {
            'CVXxP': 'function foo() {',
            'EhchA': _0x521916(489),
            'FXCKw': _0x521916(490),
            'ooiPr': _0x521916(491),
            'McqCB': _0x521916(492),
            'KRCeF': function (_0x560287, _0x1b3203) {
                return _0x560287(_0x1b3203);
            },
            'NVCzX': function (_0x46497d, _0x1486a0) {
                return _0x46497d(_0x1486a0);
            },
            'iNcmY': function (_0x10035d, _0x59af23) {
                return _0x10035d + _0x59af23;
            },
            'rFZHS': function (_0x1ef87e, _0x14b879) {
                return _0x1ef87e + _0x14b879;
            },
            'Utyos': _0x521916(493),
            'Byozz': function (_0x34ba7c, _0x5e4ad9) {
                return _0x34ba7c + _0x5e4ad9;
            },
            'QNMcA': function (_0xfb7ef2, _0x16c721) {
                return _0xfb7ef2 + _0x16c721;
            },
            'bbGDm': function (_0x44c419, _0x502118) {
                return _0x44c419 + _0x502118;
            },
            'Vmobf': _0x521916(494),
            'nWILm': function (_0x1c2cb9, _0x794c6f) {
                return _0x1c2cb9(_0x794c6f);
            },
            'vTisL': function (_0x4017e3, _0x1f2515) {
                return _0x4017e3 + _0x1f2515;
            },
            'AntSh': _0x521916(495)
        }, _0x3ec49c = [
            _0x549543[_0x521916(496)],
            _0x549543[_0x521916(497)],
            _0x549543['FXCKw'],
            '}',
            '',
            'foo();',
            ''
        ][_0x521916(498)]('\n'), _0x205340 = _0x549543[_0x521916(499)], _0x4d2046 = _0x549543[_0x521916(500)];
    function _0x3a20df(_0x3c1058) {
        var _0x2aac22 = _0x521916, _0x36147f = convert[_0x2aac22(501)](_0x3c1058);
        return _0x36147f ? _0x36147f[_0x2aac22(469)]() : null;
    }
    _0x4fef78['equal'](_0x549543[_0x521916(502)](_0x3a20df, _0x3ec49c), null, _0x521916(503)), _0x4fef78[_0x521916(465)](_0x549543[_0x521916(504)](_0x3a20df, _0x549543[_0x521916(505)](_0x3ec49c, _0x205340)), _0x205340, _0x521916(506)), _0x4fef78['equal'](_0x549543['NVCzX'](_0x3a20df, _0x549543[_0x521916(505)](_0x549543[_0x521916(507)](_0x3ec49c, _0x521916(508)), _0x205340)), _0x205340, _0x549543['Utyos']), _0x4fef78['equal'](_0x549543[_0x521916(504)](_0x3a20df, _0x549543['Byozz'](_0x549543['Byozz'](_0x549543[_0x521916(509)](_0x3ec49c, _0x521916(510)), _0x205340), '\n\n')), _0x205340, 'indented on last non empty line'), _0x4fef78[_0x521916(465)](_0x3a20df(_0x549543[_0x521916(511)](_0x549543[_0x521916(511)](_0x3ec49c, _0x205340), _0x549543[_0x521916(512)])), _0x205340, _0x521916(513)), _0x4fef78[_0x521916(465)](_0x549543[_0x521916(514)](_0x3a20df, _0x549543[_0x521916(511)](_0x549543[_0x521916(511)](_0x549543[_0x521916(515)](_0x3ec49c, _0x4d2046), '\n'), _0x205340)), _0x205340, _0x549543[_0x521916(516)]), _0x4fef78[_0x521916(482)]();
}), test(_0x55d71a(517), function (_0x1cd786) {
    var _0x3d3f66 = _0x55d71a, _0x340e11 = {
            'OxZgW': _0x3d3f66(518),
            'fRKOC': ' console.log("who are you");',
            'HEnFv': _0x3d3f66(519),
            'wkiAF': _0x3d3f66(491),
            'lnQnI': '//# sourceMappingURL=data:application/json;base64,otherZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmdW5jdGlvbiBmb28oKSB7XG4gY29uc29sZS5sb2coXCJoZWxsbyBJIGFtIGZvb1wiKTtcbiBjb25zb2xlLmxvZyhcIndobyBhcmUgeW91XCIpO1xufVxuXG5mb28oKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSJ9',
            'PWpGY': function (_0x63dc22, _0x461e91) {
                return _0x63dc22(_0x461e91);
            },
            'tpeeB': _0x3d3f66(503),
            'LKHcU': function (_0x5779d6, _0x34725c) {
                return _0x5779d6 + _0x34725c;
            },
            'Pbnei': _0x3d3f66(506),
            'pAmCO': _0x3d3f66(508),
            'ORfIg': function (_0x45b544, _0x5a025c) {
                return _0x45b544 + _0x5a025c;
            },
            'SOwRW': function (_0xb583b5, _0x8d0fc8) {
                return _0xb583b5 + _0x8d0fc8;
            },
            'UYfGO': _0x3d3f66(510),
            'tbSXV': _0x3d3f66(520),
            'eFuRq': '\nconsole.log("more code");\nfoo()\n',
            'oOGSa': 'in the middle of code',
            'hGPhS': function (_0x5620c9, _0x13c7b0) {
                return _0x5620c9(_0x13c7b0);
            },
            'OBjlQ': function (_0x5b4919, _0x39c811) {
                return _0x5b4919 + _0x39c811;
            },
            'lrcvC': function (_0x18fdd3, _0x3afc37) {
                return _0x18fdd3 + _0x3afc37;
            },
            'yOnuZ': _0x3d3f66(495)
        }, _0x28ee88 = [
            _0x340e11['OxZgW'],
            ' console.log("hello I am foo");',
            _0x340e11['fRKOC'],
            '}',
            '',
            _0x340e11[_0x3d3f66(521)],
            ''
        ][_0x3d3f66(498)]('\n'), _0x53cf69 = _0x340e11[_0x3d3f66(522)], _0x3c6a42 = _0x340e11['lnQnI'];
    function _0x24b8db(_0x2d46ca) {
        var _0x1f0ff4 = _0x3d3f66, _0x1d23ea = convert['fromSource'](_0x2d46ca, !![]);
        return _0x1d23ea ? _0x1d23ea[_0x1f0ff4(469)]() : null;
    }
    _0x1cd786[_0x3d3f66(465)](_0x340e11[_0x3d3f66(523)](_0x24b8db, _0x28ee88), null, _0x340e11[_0x3d3f66(524)]), _0x1cd786[_0x3d3f66(465)](_0x24b8db(_0x340e11['LKHcU'](_0x28ee88, _0x53cf69)), _0x53cf69, _0x340e11[_0x3d3f66(525)]), _0x1cd786[_0x3d3f66(465)](_0x340e11[_0x3d3f66(523)](_0x24b8db, _0x340e11[_0x3d3f66(526)](_0x28ee88 + _0x340e11[_0x3d3f66(527)], _0x53cf69)), _0x53cf69, _0x3d3f66(493)), _0x1cd786[_0x3d3f66(465)](_0x340e11[_0x3d3f66(523)](_0x24b8db, _0x340e11[_0x3d3f66(526)](_0x340e11[_0x3d3f66(528)](_0x340e11[_0x3d3f66(529)](_0x28ee88, _0x340e11[_0x3d3f66(530)]), _0x53cf69), '\n\n')), _0x53cf69, _0x340e11['tbSXV']), _0x1cd786[_0x3d3f66(465)](_0x24b8db(_0x340e11['SOwRW'](_0x340e11['SOwRW'](_0x28ee88, _0x53cf69), _0x340e11['eFuRq'])), _0x53cf69, _0x340e11['oOGSa']), _0x1cd786[_0x3d3f66(465)](_0x340e11['hGPhS'](_0x24b8db, _0x340e11[_0x3d3f66(531)](_0x340e11[_0x3d3f66(532)](_0x340e11[_0x3d3f66(532)](_0x28ee88, _0x3c6a42), '\n'), _0x53cf69)), _0x53cf69, _0x340e11[_0x3d3f66(533)]), _0x1cd786[_0x3d3f66(482)]();
}), test(_0x55d71a(534), function (_0x1de895) {
    var _0x400697 = _0x55d71a, _0x4aa87b = {
            'JGGwd': 'function foo() {',
            'NhOaf': _0x400697(490),
            'AtGsH': _0x400697(519),
            'dDGSs': '//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmdW5jdGlvbiBmb28oKSB7XG4gY29uc29sZS5sb2coXCJoZWxsbyBJIGFtIGZvb1wiKTtcbiBjb25zb2xlLmxvZyhcIndobyBhcmUgeW91XCIpO1xufVxuXG5mb28oKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSJ9',
            'PeAUU': '//# sourceMappingURL=data:application/json;base64,ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmdW5jdGlvbiBmb28oKSB7XG4gY29uc29sZS5sb2coXCJoZWxsbyBJIGFtIGZvb1wiKTtcbiBjb25zb2xlLmxvZyhcIndobyBhcmUgeW91XCIpO1xufVxuXG5mb28oKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSJ9',
            'uXJpe': _0x400697(494),
            'wMCou': function (_0x3505d0, _0x16a560) {
                return _0x3505d0 + _0x16a560;
            },
            'XcOeO': function (_0x438904, _0x2f5ec4) {
                return _0x438904 + _0x2f5ec4;
            },
            'RrLQf': _0x400697(535),
            'BSLdu': function (_0x17d36c, _0x3a8e22) {
                return _0x17d36c + _0x3a8e22;
            },
            'HftNl': function (_0x20da71, _0x1086c8) {
                return _0x20da71 + _0x1086c8;
            },
            'obnsI': function (_0x8574a, _0x1cb63a) {
                return _0x8574a + _0x1cb63a;
            },
            'Ffyvk': _0x400697(536)
        }, _0x57d398 = [
            _0x4aa87b['JGGwd'],
            _0x400697(489),
            _0x4aa87b['NhOaf'],
            '}',
            '',
            _0x4aa87b[_0x400697(537)],
            ''
        ][_0x400697(498)]('\n'), _0x4d00d8 = _0x4aa87b['dDGSs'], _0x27217c = _0x4aa87b[_0x400697(538)], _0x55ecb2 = _0x4aa87b[_0x400697(539)];
    _0x1de895[_0x400697(465)](convert['removeComments'](_0x4aa87b[_0x400697(540)](_0x57d398, _0x4d00d8)), _0x57d398, 'from last line'), _0x1de895['equal'](convert['removeComments'](_0x4aa87b['wMCou'](_0x4aa87b[_0x400697(540)](_0x57d398, _0x4d00d8), _0x55ecb2)), _0x4aa87b[_0x400697(541)](_0x57d398, _0x55ecb2), _0x4aa87b[_0x400697(542)]), _0x1de895[_0x400697(465)](convert[_0x400697(543)](_0x4aa87b[_0x400697(544)](_0x4aa87b[_0x400697(545)](_0x4aa87b[_0x400697(545)](_0x57d398, _0x27217c), _0x55ecb2), _0x4d00d8)), _0x4aa87b['obnsI'](_0x57d398, _0x55ecb2), _0x4aa87b[_0x400697(546)]), _0x1de895[_0x400697(482)]();
}), test(_0x55d71a(547), function (_0x40390b) {
    var _0x1a1065 = _0x55d71a, _0x217fa3 = {
            'QuBor': _0x1a1065(518),
            'DeANb': ' console.log("who are you");',
            'ioNzC': 'foo();',
            'BZrow': _0x1a1065(548),
            'ZPKtB': _0x1a1065(549),
            'FNNWd': function (_0xe008e7, _0x3280f7) {
                return _0xe008e7 + _0x3280f7;
            },
            'PCdDy': _0x1a1065(550),
            'tmEQg': '/* */ style filemap comment'
        }, _0x3852b0 = [
            _0x217fa3[_0x1a1065(551)],
            ' console.log("hello I am foo");',
            _0x217fa3['DeANb'],
            '}',
            '',
            _0x217fa3[_0x1a1065(552)],
            ''
        ][_0x1a1065(498)]('\n'), _0x4053c5 = _0x217fa3[_0x1a1065(553)], _0x30713c = _0x217fa3[_0x1a1065(554)];
    _0x40390b[_0x1a1065(465)](convert[_0x1a1065(555)](_0x217fa3[_0x1a1065(556)](_0x3852b0, _0x4053c5)), _0x3852b0, _0x217fa3[_0x1a1065(557)]), _0x40390b[_0x1a1065(465)](convert[_0x1a1065(555)](_0x3852b0 + _0x30713c), _0x3852b0, _0x217fa3['tmEQg']), _0x40390b[_0x1a1065(482)]();
}), test(_0x55d71a(558), function (_0x222c91) {
    var _0x35fa66 = _0x55d71a, _0x3211c0 = { 'vXJEq': _0x35fa66(559) }, _0x133a88 = convert[_0x35fa66(471)](json)[_0x35fa66(467)](1 * -3429 + 47 * 23 + 2350), _0x53b419 = JSON['stringify'](obj, null, 4519 + 1 * 4372 + -8889);
    _0x222c91[_0x35fa66(465)](_0x133a88, _0x53b419, _0x3211c0[_0x35fa66(560)]), _0x222c91[_0x35fa66(482)]();
}), test(_0x55d71a(561), function (_0x3d1a65) {
    var _0x34634b = _0x55d71a, _0x3dcf4f = {
            'NtgZs': _0x34634b(562),
            'xhqRi': _0x34634b(563)
        }, _0x3dc67c = convert['fromJSON'](json)[_0x34634b(564)](_0x34634b(565), _0x3dcf4f[_0x34634b(566)])[_0x34634b(467)](), _0x336fcd = JSON[_0x34634b(567)](json);
    _0x336fcd['foo'] = _0x3dcf4f['NtgZs'], _0x3d1a65['equal'](_0x3dc67c, JSON[_0x34634b(568)](_0x336fcd), _0x3dcf4f['xhqRi']), _0x3d1a65['end']();
}), test('setting properties', function (_0x4d10f2) {
    var _0x4b2760 = _0x55d71a, _0x4ab3fe = {
            'LGdGh': _0x4b2760(569),
            'gIVPC': _0x4b2760(570),
            'Rracf': _0x4b2760(571),
            'Wmwmy': _0x4b2760(483),
            'qLMJx': _0x4b2760(572)
        }, _0xdd292d = _0x4ab3fe[_0x4b2760(573)]['split']('|'), _0x306aa8 = 33 * 247 + -6 * 1301 + 23 * -15;
    while (!![]) {
        switch (_0xdd292d[_0x306aa8++]) {
        case '0':
            _0x2b5b5a[_0x4ab3fe['gIVPC']] = 'this';
            continue;
        case '1':
            _0x2b5b5a[_0x4b2760(574)] = _0x4ab3fe['Rracf'];
            continue;
        case '2':
            _0x2b5b5a[_0x4b2760(483)] = '2';
            continue;
        case '3':
            _0x4d10f2[_0x4b2760(482)]();
            continue;
        case '4':
            _0x4d10f2[_0x4b2760(465)](_0x7a3111, JSON[_0x4b2760(568)](_0x2b5b5a), _0x4b2760(575));
            continue;
        case '5':
            var _0x7a3111 = convert[_0x4b2760(471)](json)['setProperty'](_0x4ab3fe[_0x4b2760(576)], '2')[_0x4b2760(577)](_0x4b2760(574), _0x4b2760(571))[_0x4b2760(577)]('should add', _0x4ab3fe[_0x4b2760(578)])[_0x4b2760(467)](), _0x2b5b5a = JSON['parse'](json);
            continue;
        }
        break;
    }
}), test('getting properties', function (_0x62a2c7) {
    var _0x1c406a = _0x55d71a, _0x5aa42c = {
            'ebHjR': _0x1c406a(483),
            'VKAhC': _0x1c406a(579),
            'gbFNE': 'foo.js',
            'KkuBf': _0x1c406a(580)
        }, _0x41e8cc = convert[_0x1c406a(471)](json);
    _0x62a2c7[_0x1c406a(465)](_0x41e8cc[_0x1c406a(581)](_0x5aa42c['ebHjR']), 3972 + -5042 * 1 + 1073, _0x5aa42c[_0x1c406a(582)]), _0x62a2c7[_0x1c406a(464)](_0x41e8cc[_0x1c406a(581)]('sources'), [
        _0x5aa42c[_0x1c406a(583)],
        _0x1c406a(584)
    ], _0x5aa42c[_0x1c406a(585)]), _0x62a2c7[_0x1c406a(482)]();
}), test(_0x55d71a(586), function (_0x5a7653) {
    var _0x4e713e = _0x55d71a, _0x9e413a = { 'gOkLt': _0x4e713e(587) }, _0x2d1fd1 = convert[_0x4e713e(501)]('', !![]), _0x440170 = null;
    _0x5a7653[_0x4e713e(465)](_0x2d1fd1, _0x440170, _0x9e413a['gOkLt']), _0x5a7653[_0x4e713e(482)]();
});