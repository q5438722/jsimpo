require(_0x3bf5b7(462));
const path = require(_0x3bf5b7(463)), Promise = require(_0x3bf5b7(464)), config = require(root + 'lib/config'), fixture = require(root + _0x3bf5b7(465)), {fs} = require(root + 'lib/util/fs'), FixturesHelper = require(root + _0x3bf5b7(466)), os = require('os'), eol = require(_0x3bf5b7(467)), isWindows = () => {
        return os['platform']() === 'win32';
    };
describe(_0x3bf5b7(465), () => {
    const _0x978ab = _0x3bf5b7;
    beforeEach(function () {
        const _0x39774f = _0x96a3;
        return FixturesHelper[_0x39774f(468)](), this[_0x39774f(469)] = FixturesHelper[_0x39774f(470)](_0x39774f(471)), config['get'](this[_0x39774f(469)])[_0x39774f(472)](_0x55910a => {
            const _0x1c9d40 = _0x39774f;
            ({
                fixturesFolder: this[_0x1c9d40(473)]
            } = _0x55910a);
        });
    }), afterEach(() => {
        const _0x213f1b = _0x96a3;
        return FixturesHelper[_0x213f1b(474)]();
    }), context('file not found', () => {
        it('throws when file cannot be found', function () {
            const _0xfcbcaa = _0x96a3, _0x4fee6d = _0xfcbcaa(475);
            return fixture[_0xfcbcaa(476)](this[_0xfcbcaa(473)], _0x4fee6d)['then'](() => {
                throw new Error('should have failed but did not');
            })['catch'](_0x56c890 => {
                const _0x54415d = _0xfcbcaa;
                expect(_0x56c890[_0x54415d(477)])['to'][_0x54415d(478)](_0x54415d(479)), expect(_0x56c890[_0x54415d(477)])['to'][_0x54415d(478)](_0x4fee6d);
            });
        });
    }), context(_0x978ab(480), () => {
        const _0x4bbd65 = _0x978ab;
        it(_0x4bbd65(481), function () {
            const _0x10aa49 = _0x4bbd65;
            return fixture[_0x10aa49(476)](this[_0x10aa49(473)], _0x10aa49(482))[_0x10aa49(472)](_0x35741f => {
                const _0x3a7bc3 = _0x10aa49;
                expect(_0x35741f)['to'][_0x3a7bc3(483)]['eq']({ 'name': '\u2665' });
            });
        });
    }), context(_0x978ab(484), () => {
        it('can pass path to nested fixture', function () {
            const _0x2a4fd7 = _0x96a3;
            return fixture['get'](this[_0x2a4fd7(473)], _0x2a4fd7(485))[_0x2a4fd7(472)](_0x38f201 => {
                const _0x317623 = _0x2a4fd7;
                expect(_0x38f201)['to'][_0x317623(483)]['eq']({ 'nested': _0x317623(486) });
            });
        });
    }), context(_0x978ab(487), () => {
        const _0xb0100a = _0x978ab;
        it(_0xb0100a(488), function () {
            const _0x541848 = _0xb0100a, _0x108995 = _0x541848(489);
            return fixture[_0x541848(476)](this[_0x541848(473)], 'bad_json.json')[_0x541848(472)](() => {
                const _0x3232f4 = _0x541848;
                throw new Error(_0x3232f4(490));
            })[_0x541848(491)](_0x339d13 => {
                const _0x220145 = _0x541848;
                isWindows() ? (expect(_0x339d13[_0x220145(477)])['to'][_0x220145(478)](_0x220145(492)), expect(_0x339d13[_0x220145(477)])['to'][_0x220145(478)]('Parse error on line 2:'), expect(_0x339d13['message'])['to']['include'](_0x220145(493))) : expect(eol[_0x220145(494)](_0x339d13[_0x220145(477)]))['to']['eq'](eol[_0x220145(494)](_0x108995));
            });
        }), it(_0xb0100a(495), function () {
            const _0x45e47a = _0xb0100a;
            return fixture[_0x45e47a(476)](this['fixturesFolder'], _0x45e47a(496))[_0x45e47a(472)](() => {
                const _0x51da4f = _0x45e47a;
                throw new Error(_0x51da4f(490));
            })[_0x45e47a(491)](_0x26aa15 => {
                const _0x307779 = _0x45e47a;
                return fs[_0x307779(497)](this['fixturesFolder'] + _0x307779(498), 'utf8')[_0x307779(472)](_0x888bc2 => {
                    const _0x5dd394 = _0x307779;
                    expect(_0x888bc2)['to']['eq'](_0x5dd394(499));
                });
            });
        }), it(_0xb0100a(500), function () {
            const _0x5412a0 = _0xb0100a;
            return fixture['get'](this['fixturesFolder'], _0x5412a0(501))['then'](_0x4eb038 => {
                const _0x2ee55a = _0x5412a0;
                return fs[_0x2ee55a(497)](this[_0x2ee55a(473)] + _0x2ee55a(502), _0x2ee55a(503))[_0x2ee55a(472)](_0x432cc9 => {
                    const _0x446f51 = _0x2ee55a;
                    expect(_0x432cc9)['to']['eq'](_0x446f51(504));
                });
            });
        }), it(_0xb0100a(505), function () {
            const _0x4277b6 = _0xb0100a;
            return fixture[_0x4277b6(476)](this[_0x4277b6(473)], 'words.json')['then'](_0x4d6c89 => {
                const _0x3740bd = _0x4277b6;
                return fs[_0x3740bd(497)](this[_0x3740bd(473)] + _0x3740bd(506), 'utf8')[_0x3740bd(472)](_0x4205f2 => {
                    const _0x4f0c7e = _0x3740bd;
                    expect(_0x4205f2)['to']['eq'](_0x4f0c7e(507));
                });
            });
        }), it(_0xb0100a(508), function () {
            const _0x308335 = _0xb0100a;
            return fixture[_0x308335(476)](this[_0x308335(473)], _0x308335(509))[_0x308335(472)](_0x22b179 => {
                const _0x1347fe = _0x308335;
                expect(_0x22b179)['to']['deep']['eq']([
                    {
                        'id': 1,
                        'name': 'brian'
                    },
                    {
                        'id': 2,
                        'name': _0x1347fe(510)
                    }
                ]);
            });
        }), it(_0xb0100a(511), function () {
            const _0x2d4314 = _0xb0100a, _0x256e0b = () => {
                    const _0x5bb487 = _0x96a3;
                    return fixture['get'](this[_0x5bb487(473)], _0x5bb487(512));
                };
            return Promise[_0x2d4314(513)](Array(500), _0x256e0b, { 'concurrency': 5 })[_0x2d4314(472)](() => {
                const _0x468cd2 = _0x2d4314;
                return fs[_0x468cd2(497)](this[_0x468cd2(473)] + _0x468cd2(514), _0x468cd2(503))[_0x468cd2(472)](_0x344d53 => {
                    expect(_0x344d53)['to']['eq']('{\n  "empty": {\n    "object": {},\n    "array": [],\n    "object2": {\n\n    },\n    "array2": [\n\n    ]\n  }\n}');
                });
            });
        }), it(_0xb0100a(515), () => {
            const _0x895132 = _0xb0100a, _0x1f85e9 = FixturesHelper[_0x895132(470)](_0x895132(516));
            return config[_0x895132(476)](_0x1f85e9)['then'](_0x1eb4ca => {
                const _0x154237 = _0x895132;
                return fixture['get'](_0x1eb4ca[_0x154237(473)], _0x154237(517))[_0x154237(472)](_0x7364ab => {
                    const _0x3fa56e = _0x154237;
                    expect(_0x7364ab)['to'][_0x3fa56e(483)]['eq']({ 'bar': 'baz' });
                });
            });
        });
    }), context('js files', () => {
        it('returns valid JS object', function () {
            const _0x360002 = _0x96a3;
            return fixture[_0x360002(476)](this[_0x360002(473)], _0x360002(518))['then'](_0x3c5f24 => {
                const _0x249324 = _0x360002;
                expect(_0x3c5f24)['to'][_0x249324(483)]['eq']({
                    'id': 1,
                    'name': _0x249324(519),
                    'age': 29,
                    'posts': []
                });
            });
        }), it('does not rewrite file as a formated valid JS object', function () {
            const _0x3583bc = _0x96a3;
            return fixture[_0x3583bc(476)](this[_0x3583bc(473)], 'no_format.js')[_0x3583bc(472)](_0x588c97 => {
                const _0xff4d7a = _0x3583bc;
                return fs['readFileAsync'](this['fixturesFolder'] + '/no_format.js', _0xff4d7a(503))[_0xff4d7a(472)](_0x2b8819 => {
                    const _0x2b1de2 = _0xff4d7a;
                    expect(_0x2b8819)['to']['eq'](_0x2b1de2(520));
                });
            });
        }), it('throws on a bad JS object', function () {
            const _0x2d9c6e = _0x96a3, _0x237fe9 = _0x2d9c6e(521);
            return fixture[_0x2d9c6e(476)](this[_0x2d9c6e(473)], 'bad_js.js')[_0x2d9c6e(472)](() => {
                const _0x2a5ac3 = _0x2d9c6e;
                throw new Error(_0x2a5ac3(490));
            })[_0x2d9c6e(491)](_0x13c884 => {
                const _0x460344 = _0x2d9c6e;
                expect(_0x13c884['message'])['to']['eq'](_0x460344(522) + _0x237fe9);
            });
        });
    }), context('coffee files', () => {
        const _0x33451b = _0x978ab;
        it(_0x33451b(523), function () {
            const _0x2d1161 = _0x33451b;
            return fixture[_0x2d1161(476)](this['fixturesFolder'], _0x2d1161(524))['then'](_0x44cc9c => {
                const _0x39554d = _0x2d1161;
                expect(_0x44cc9c)['to'][_0x39554d(483)]['eq']({
                    'name': _0x39554d(525),
                    'users': []
                });
            });
        }), it(_0x33451b(526), function () {
            const _0x48352b = _0x33451b;
            return fixture[_0x48352b(476)](this[_0x48352b(473)], _0x48352b(527))['then'](() => {
                const _0x53499f = _0x48352b;
                return fs[_0x53499f(497)](this[_0x53499f(473)] + '/no_format_coffee.coffee', _0x53499f(503))['then'](_0x5abb1f => {
                    const _0x3ba4e9 = _0x53499f;
                    expect(_0x5abb1f)['to']['eq'](_0x3ba4e9(528));
                });
            });
        }), it(_0x33451b(529), function () {
            const _0x418681 = _0x33451b;
            return fixture['get'](this[_0x418681(473)], _0x418681(530))[_0x418681(472)](() => {
                throw new Error('should have failed but did not');
            })[_0x418681(491)](_0x4ae695 => {
                const _0x5942b7 = _0x418681;
                expect(_0x4ae695[_0x5942b7(477)])['to']['eq'](_0x5942b7(531));
            });
        });
    }), context(_0x978ab(532), () => {
        const _0x489e1b = _0x978ab;
        it('returns html as a string', function () {
            const _0xc99e9f = _0x96a3;
            return fixture[_0xc99e9f(476)](this[_0xc99e9f(473)], 'index.html')['then'](_0x207d11 => {
                const _0x2d1d6c = _0xc99e9f;
                expect(_0x207d11)['to']['eq'](_0x2d1d6c(533));
            });
        }), it(_0x489e1b(534), function () {
            const _0x2dea60 = _0x489e1b;
            return fixture[_0x2dea60(476)](this['fixturesFolder'], 'index.html')[_0x2dea60(472)](() => {
                const _0x4c89b7 = _0x2dea60;
                return fs[_0x4c89b7(497)](this[_0x4c89b7(473)] + '/index.html', 'utf8')['then'](_0x48476a => {
                    expect(_0x48476a)['to']['eq']('<!doctype html>\n<html>\n<head>\n<title>index.html</title>\n</head>\n<body>\nindex\n</body>\n</html>');
                });
            });
        });
    }), context(_0x978ab(535), () => {
        it('returns text as string', function () {
            const _0x4bc2d1 = _0x96a3;
            return fixture[_0x4bc2d1(476)](this[_0x4bc2d1(473)], _0x4bc2d1(536))[_0x4bc2d1(472)](_0x32f9b9 => {
                const _0x33a20c = _0x4bc2d1;
                expect(_0x32f9b9)['to']['eq'](_0x33a20c(537));
            });
        });
    }), context(_0x978ab(538), () => {
        const _0x2cccd1 = _0x978ab;
        it(_0x2cccd1(539), function () {
            const _0x2e4560 = _0x2cccd1;
            return fixture[_0x2e4560(476)](this[_0x2e4560(473)], 'data.csv')[_0x2e4560(472)](_0xa7a724 => {
                const _0x1ed174 = _0x2e4560;
                expect(_0xa7a724)['to']['eq'](_0x1ed174(540));
            });
        });
    }), context(_0x978ab(541), () => {
        const _0x42dd23 = _0x978ab;
        it(_0x42dd23(539), function () {
            const _0x340c57 = _0x42dd23;
            return fixture[_0x340c57(476)](this[_0x340c57(473)], _0x340c57(542))[_0x340c57(472)](_0x81845c => {
                const _0x5c84a4 = _0x340c57;
                expect(_0x81845c)['to']['eq'](_0x5c84a4(543));
            });
        });
    }), context(_0x978ab(544), () => {
        const _0xbd1680 = _0x978ab;
        it(_0xbd1680(545), function () {
            const _0x435746 = _0xbd1680;
            return fixture['get'](this[_0x435746(473)], _0x435746(546), { 'encoding': _0x435746(547) })[_0x435746(472)](_0x11672e => {
                expect(_0x11672e)['to']['eq']('o#?\n');
            });
        });
    }), context('image files', () => {
        const _0x396517 = _0x978ab;
        beforeEach(function () {
            this['read'] = (_0x35cc69, _0x3a25d5, _0x4a9b91) => {
                const _0x1c0626 = _0x96a3;
                return fs[_0x1c0626(497)](path[_0x1c0626(548)](_0x35cc69, _0x3a25d5), _0x4a9b91);
            };
        }), it(_0x396517(549), function () {
            const _0x2169cd = _0x396517;
            return this[_0x2169cd(550)](this[_0x2169cd(473)], _0x2169cd(551), _0x2169cd(552))['then'](_0x212b4d => {
                const _0x452b7a = _0x2169cd;
                return fixture['get'](this['fixturesFolder'], 'images/flower.png')[_0x452b7a(472)](_0x515c06 => {
                    expect(_0x515c06)['to']['eq'](_0x212b4d);
                });
            });
        }), it(_0x396517(553), function () {
            const _0x3a51cd = _0x396517;
            return this['read'](this[_0x3a51cd(473)], 'images/sample.jpg', 'base64')[_0x3a51cd(472)](_0x46fc44 => {
                const _0x343dbd = _0x3a51cd;
                return fixture['get'](this[_0x343dbd(473)], _0x343dbd(554))[_0x343dbd(472)](_0x3013b1 => {
                    expect(_0x3013b1)['to']['eq'](_0x46fc44);
                });
            });
        }), it(_0x396517(555), function () {
            const _0x4826a9 = _0x396517;
            return this[_0x4826a9(550)](this[_0x4826a9(473)], _0x4826a9(556), 'base64')[_0x4826a9(472)](_0x443066 => {
                const _0x4254bf = _0x4826a9;
                return fixture[_0x4254bf(476)](this[_0x4254bf(473)], _0x4254bf(556))['then'](_0x4be157 => {
                    expect(_0x4be157)['to']['eq'](_0x443066);
                });
            });
        }), it(_0x396517(557), function () {
            const _0x481bd9 = _0x396517;
            return this['read'](this[_0x481bd9(473)], _0x481bd9(558), _0x481bd9(552))[_0x481bd9(472)](_0x29d0cd => {
                const _0x236359 = _0x481bd9;
                return fixture[_0x236359(476)](this['fixturesFolder'], _0x236359(558))[_0x236359(472)](_0x5dfd14 => {
                    expect(_0x5dfd14)['to']['eq'](_0x29d0cd);
                });
            });
        }), it(_0x396517(559), function () {
            const _0x506b7d = _0x396517;
            return this['read'](this[_0x506b7d(473)], 'images/flower.png', _0x506b7d(560))[_0x506b7d(472)](_0x365b84 => {
                const _0x1d8dba = _0x506b7d;
                return fixture['get'](this[_0x1d8dba(473)], _0x1d8dba(551), { 'encoding': _0x1d8dba(560) })[_0x1d8dba(472)](_0x330d6f => {
                    expect(_0x365b84)['to']['eq'](_0x330d6f);
                });
            });
        });
    }), context(_0x978ab(561), () => {
        const _0xa3c1d0 = _0x978ab;
        it(_0xa3c1d0(562), function () {
            const _0x368878 = _0xa3c1d0;
            return fixture['get'](this[_0x368878(473)], _0x368878(563))['then'](_0x473de3 => {
                const _0x2f9bda = _0x368878, _0xf3768b = _0x2f9bda(564);
                expect(_0x473de3)['to']['eq'](_0xf3768b);
            });
        });
    }), context(_0x978ab(565), () => {
        const _0x4e4e93 = _0x978ab;
        it('#1 finds json', function () {
            const _0x10f91b = _0x96a3;
            return fixture[_0x10f91b(476)](this[_0x10f91b(473)], _0x10f91b(517))['then'](_0xe19759 => {
                const _0x20a33a = _0x10f91b;
                expect(_0xe19759)['to'][_0x20a33a(483)]['eq']([{ 'json': !![] }]);
            });
        }), it(_0x4e4e93(566), function () {
            const _0xc73ddd = _0x4e4e93;
            return fixture[_0xc73ddd(476)](this[_0xc73ddd(473)], _0xc73ddd(567))[_0xc73ddd(472)](_0x42e8ab => {
                const _0x2681d0 = _0xc73ddd;
                expect(_0x42e8ab)['to'][_0x2681d0(483)]['eq']({ 'js': !![] });
            });
        }), it('throws when no file by any extension can be found', function () {
            const _0x5696ea = _0x4e4e93;
            return fixture[_0x5696ea(476)](this[_0x5696ea(473)], _0x5696ea(568))[_0x5696ea(472)](() => {
                const _0x399e62 = _0x5696ea;
                throw new Error(_0x399e62(490));
            })[_0x5696ea(491)](_0x4aac8e => {
                const _0x165fd6 = _0x5696ea;
                expect(_0x4aac8e['message'])['to'][_0x165fd6(478)](_0x165fd6(479)), expect(_0x4aac8e[_0x165fd6(477)])['to'][_0x165fd6(478)](_0x165fd6(569));
            });
        });
    }), context(_0x978ab(570), () => {
        const _0x393c3c = _0x978ab;
        it(_0x393c3c(571), function () {
            const _0xe622a4 = _0x393c3c;
            return fixture[_0xe622a4(476)](this[_0xe622a4(473)], _0xe622a4(572))[_0xe622a4(472)](_0x489a73 => {
                const _0x1f1295 = _0xe622a4;
                return fs[_0x1f1295(497)](this['fixturesFolder'] + '/trailing_new_line.txt', _0x1f1295(503))['then'](_0x44eca0 => {
                    const _0x3b3c08 = _0x1f1295;
                    expect(_0x44eca0)['to']['eq'](_0x3b3c08(573));
                });
            });
        }), it(_0x393c3c(574), function () {
            const _0x55afa1 = _0x393c3c;
            return fixture['get'](this[_0x55afa1(473)], 'trailing_new_line.json')[_0x55afa1(472)](_0x1a5234 => {
                const _0x58a280 = _0x55afa1;
                return fs[_0x58a280(497)](this[_0x58a280(473)] + _0x58a280(575), _0x58a280(503))['then'](_0x2b726f => {
                    const _0x596f97 = _0x58a280;
                    expect(_0x2b726f)['to']['eq'](_0x596f97(576));
                });
            });
        }), it(_0x393c3c(577), function () {
            const _0x5f4b95 = _0x393c3c;
            return fixture['get'](this[_0x5f4b95(473)], _0x5f4b95(578))[_0x5f4b95(472)](_0x44f15a => {
                const _0x379786 = _0x5f4b95;
                return fs['readFileAsync'](this[_0x379786(473)] + _0x379786(579), _0x379786(503))[_0x379786(472)](_0x5faef5 => {
                    const _0x2de311 = _0x379786;
                    expect(_0x5faef5)['to']['eq'](_0x2de311(580));
                });
            });
        }), it(_0x393c3c(581), function () {
            const _0x560a7d = _0x393c3c;
            return fixture[_0x560a7d(476)](this[_0x560a7d(473)], _0x560a7d(582))[_0x560a7d(472)](_0x4fd5a4 => {
                const _0x3ff43f = _0x560a7d;
                return fs[_0x3ff43f(497)](this[_0x3ff43f(473)] + _0x3ff43f(583), 'utf8')[_0x3ff43f(472)](_0x3418f1 => {
                    const _0x4ce7e3 = _0x3ff43f;
                    expect(_0x3418f1)['to']['eq'](_0x4ce7e3(584));
                });
            });
        }), it(_0x393c3c(585), function () {
            const _0x5322c8 = _0x393c3c;
            return fixture[_0x5322c8(476)](this[_0x5322c8(473)], _0x5322c8(586))[_0x5322c8(472)](_0x47737b => {
                const _0x31722f = _0x5322c8;
                return fs[_0x31722f(497)](this[_0x31722f(473)] + _0x31722f(587), _0x31722f(503))[_0x31722f(472)](_0x3f4ba1 => {
                    expect(_0x3f4ba1)['to']['eq']('<html><body>foo</body></html>\n');
                });
            });
        });
    });
});