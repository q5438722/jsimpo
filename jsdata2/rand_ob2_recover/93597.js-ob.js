describe(_0x275b23(317), function () {
    const _0x1b5c62 = _0x275b23;
    beforeEach(function () {
        const _0x425e0e = _0x15f8;
        cy['fixture'](_0x425e0e(318))['as'](_0x425e0e(318)), cy[_0x425e0e(319)]('config')['as']('config'), cy[_0x425e0e(319)](_0x425e0e(320))['as'](_0x425e0e(320)), cy[_0x425e0e(319)](_0x425e0e(321))['as'](_0x425e0e(321)), cy['fixture']('runs')['as'](_0x425e0e(322)), cy[_0x425e0e(319)](_0x425e0e(323))['as'](_0x425e0e(324)), cy[_0x425e0e(319)]('dashboard_projects')['as'](_0x425e0e(325)), this[_0x425e0e(326)] = () => {
            const _0x58facf = _0x425e0e;
            return cy[_0x58facf(327)](_0x58facf(328))[_0x58facf(329)](_0x58facf(330))[_0x58facf(331)]();
        }, this[_0x425e0e(332)] = {
            'id': _0x425e0e(333),
            'public': !![],
            'orgId': _0x425e0e(334)
        }, cy[_0x425e0e(335)]()[_0x425e0e(336)](function (_0x379724) {
            const _0x5ccd80 = _0x425e0e;
            let _0x14e144 = _0x379724[_0x5ccd80(337)][_0x5ccd80(338)];
            this[_0x5ccd80(339)] = _0x379724, this[_0x5ccd80(340)] = _0x379724['App'][_0x5ccd80(340)], cy[_0x5ccd80(341)](this[_0x5ccd80(340)], _0x5ccd80(342))[_0x5ccd80(343)]({ 'projectRoot': _0x5ccd80(344) }), cy[_0x5ccd80(341)](this['ipc'], _0x5ccd80(345))[_0x5ccd80(343)](![]), cy[_0x5ccd80(341)](this[_0x5ccd80(340)], 'closeBrowser')[_0x5ccd80(343)](null), cy[_0x5ccd80(341)](this[_0x5ccd80(340)], _0x5ccd80(346))[_0x5ccd80(347)](null, this[_0x5ccd80(321)]), cy[_0x5ccd80(341)](this[_0x5ccd80(340)], _0x5ccd80(348))[_0x5ccd80(343)](this[_0x5ccd80(324)]), cy[_0x5ccd80(341)](this['ipc'], _0x5ccd80(349))['resolves'](this[_0x5ccd80(325)]), cy[_0x5ccd80(341)](this[_0x5ccd80(340)], 'requestAccess'), cy[_0x5ccd80(341)](this['ipc'], 'setupDashboardProject'), cy[_0x5ccd80(341)](this[_0x5ccd80(340)], _0x5ccd80(350)), cy[_0x5ccd80(341)](this[_0x5ccd80(340)], _0x5ccd80(351))[_0x5ccd80(343)](), cy['stub'](this[_0x5ccd80(340)], _0x5ccd80(352)), this[_0x5ccd80(353)] = this[_0x5ccd80(354)][_0x5ccd80(355)](), cy[_0x5ccd80(341)](this['ipc'], _0x5ccd80(353))[_0x5ccd80(356)](this[_0x5ccd80(353)]['promise']), this[_0x5ccd80(357)] = this[_0x5ccd80(354)][_0x5ccd80(355)](), cy[_0x5ccd80(341)](this[_0x5ccd80(340)], 'getCurrentUser')[_0x5ccd80(356)](this['getCurrentUser'][_0x5ccd80(358)]), this['pingApiServer'] = this[_0x5ccd80(354)]['deferred'](), cy[_0x5ccd80(341)](this[_0x5ccd80(340)], 'pingApiServer')[_0x5ccd80(356)](this[_0x5ccd80(359)][_0x5ccd80(358)]), this['getProjectStatus'] = this[_0x5ccd80(354)][_0x5ccd80(355)](), cy['stub'](this[_0x5ccd80(340)], _0x5ccd80(360))[_0x5ccd80(356)](this[_0x5ccd80(360)]['promise']), this['getRuns'] = this[_0x5ccd80(354)][_0x5ccd80(355)](), cy[_0x5ccd80(341)](this[_0x5ccd80(340)], _0x5ccd80(361))[_0x5ccd80(356)](this['getRuns'][_0x5ccd80(358)]), _0x14e144();
        });
    }), context('page display', function () {
        const _0x5a4a05 = _0x15f8;
        beforeEach(function () {
            const _0x2ba776 = _0x15f8;
            this['getCurrentUser'][_0x2ba776(362)](this[_0x2ba776(318)]), this[_0x2ba776(353)][_0x2ba776(362)](this[_0x2ba776(363)]), this[_0x2ba776(361)]['resolve'](this[_0x2ba776(322)]), this[_0x2ba776(326)]();
        }), it(_0x5a4a05(364), () => {
            const _0xbadb15 = _0x5a4a05;
            cy['get'](_0xbadb15(328))[_0xbadb15(329)]('Runs')[_0xbadb15(365)](_0xbadb15(366), _0xbadb15(367));
        });
    }), context(_0x1b5c62(368), function () {
        const _0x4960d7 = _0x1b5c62;
        beforeEach(function () {
            const _0x242813 = _0x15f8, _0x4e30dc = new Date(2016, 11, 19, 10, 0, 0)[_0x242813(369)]();
            cy[_0x242813(370)](_0x4e30dc), this[_0x242813(357)]['resolve'](this[_0x242813(318)]), this['openProject'][_0x242813(362)](this['config']), this[_0x242813(361)][_0x242813(362)](this[_0x242813(322)]), this[_0x242813(326)]();
        }), it(_0x4960d7(371), function () {
            const _0x1779c9 = _0x4960d7;
            expect(this['ipc'][_0x1779c9(359)])['to']['be'][_0x1779c9(372)], cy[_0x1779c9(327)]('.loader');
        }), describe(_0x4960d7(373), function () {
            const _0x55f29d = _0x4960d7;
            beforeEach(function () {
                const _0x52994e = _0x15f8;
                this['pingApiServer'][_0x52994e(362)]();
            }), it(_0x55f29d(374), () => {
                const _0x2afc5d = _0x55f29d;
                cy[_0x2afc5d(329)]('h5', _0x2afc5d(330));
            }), context(_0x55f29d(375), function () {
                const _0x3ed8fb = _0x55f29d;
                beforeEach(function () {
                    const _0x1907e9 = _0x15f8;
                    cy[_0x1907e9(327)](_0x1907e9(376))[_0x1907e9(377)]()['as'](_0x1907e9(378)), cy['get']('.runs-container li')['eq'](1)['as']('secondRunRow'), cy[_0x1907e9(327)](_0x1907e9(376))['eq'](3)['as'](_0x1907e9(379));
                }), it('displays build num', function () {
                    const _0x19c1b2 = _0x15f8;
                    cy[_0x19c1b2(327)](_0x19c1b2(380))['contains']('#' + this[_0x19c1b2(322)][1][_0x19c1b2(381)]), cy['percySnapshot']();
                }), it(_0x3ed8fb(382), function () {
                    const _0xd6c990 = _0x3ed8fb;
                    cy[_0xd6c990(327)](_0xd6c990(383))[_0xd6c990(329)](this[_0xd6c990(322)][0][_0xd6c990(384)][_0xd6c990(385)]), cy['get'](_0xd6c990(383))[_0xd6c990(329)](this[_0xd6c990(322)][0][_0xd6c990(384)][_0xd6c990(386)]);
                }), it(_0x3ed8fb(387), () => {
                    const _0x215eef = _0x3ed8fb;
                    cy[_0x215eef(327)]('@secondRunRow')[_0x215eef(388)](function () {
                        const _0x2cd6e7 = _0x215eef;
                        cy[_0x2cd6e7(327)](_0x2cd6e7(389))['should']('not.exist'), cy[_0x2cd6e7(329)](_0x2cd6e7(390));
                    });
                }), it(_0x3ed8fb(391), () => {
                    const _0x4d9c88 = _0x3ed8fb;
                    cy[_0x4d9c88(327)](_0x4d9c88(380))[_0x4d9c88(388)](function () {
                        const _0x254eac = _0x4d9c88;
                        cy[_0x254eac(329)](this['runs'][1][_0x254eac(392)][0][_0x254eac(393)]['osVersionFormatted']), cy[_0x254eac(329)](this[_0x254eac(322)][1][_0x254eac(392)][0][_0x254eac(393)][_0x254eac(394)]), cy[_0x254eac(327)](_0x254eac(395)), cy[_0x254eac(327)](_0x254eac(396))[_0x254eac(365)]('have.attr', _0x254eac(397))['and'](_0x254eac(398), _0x254eac(399));
                    });
                }), it(_0x3ed8fb(400), () => {
                    const _0x59212f = _0x3ed8fb;
                    cy[_0x59212f(327)]('@firstRunRow')[_0x59212f(388)](function () {
                        const _0xb7e252 = _0x59212f;
                        cy['contains'](this[_0xb7e252(322)][0][_0xb7e252(392)][0][_0xb7e252(393)][_0xb7e252(401)]), cy[_0xb7e252(327)](_0xb7e252(396))[_0xb7e252(365)](_0xb7e252(402));
                    });
                }), it(_0x3ed8fb(403), function () {
                    const _0x25bb37 = _0x3ed8fb;
                    cy[_0x25bb37(327)](_0x25bb37(380))[_0x25bb37(329)](this[_0x25bb37(322)][1][_0x25bb37(404)]), cy['get'](_0x25bb37(380))[_0x25bb37(329)](this[_0x25bb37(322)][1][_0x25bb37(405)]);
                }), it(_0x3ed8fb(406), function () {
                    const _0x2a2d01 = _0x3ed8fb;
                    cy['get'](_0x2a2d01(380))[_0x2a2d01(329)](_0x2a2d01(407)), cy[_0x2a2d01(327)](_0x2a2d01(380))[_0x2a2d01(329)]('00:16');
                }), it(_0x3ed8fb(408), function () {
                    const _0x5e7386 = _0x3ed8fb;
                    cy[_0x5e7386(327)](_0x5e7386(383))[_0x5e7386(329)]('12:24:47'), cy[_0x5e7386(327)](_0x5e7386(409))[_0x5e7386(329)](_0x5e7386(410))[_0x5e7386(336)](() => {
                        const _0xe2c804 = _0x5e7386;
                        cy[_0xe2c804(411)](1000);
                    }), cy[_0x5e7386(327)](_0x5e7386(383))[_0x5e7386(329)]('12:24:48'), cy[_0x5e7386(327)]('@fourthRunRow')['contains']('12:45:48');
                }), context('spec display', function () {
                    const _0x473e30 = _0x3ed8fb;
                    it('displays spec if defined when 1 instance', function () {
                        const _0x47279f = _0x15f8;
                        cy[_0x47279f(327)](_0x47279f(383))[_0x47279f(329)](this[_0x47279f(322)][1][_0x47279f(392)][0][_0x47279f(412)]);
                    }), it(_0x473e30(413), () => {
                        const _0x1a4a87 = _0x473e30;
                        cy[_0x1a4a87(327)](_0x1a4a87(376))['eq'](2)['contains'](_0x1a4a87(412))['should'](_0x1a4a87(402));
                    }), it(_0x473e30(414), () => {
                        const _0x8bcafc = _0x473e30;
                        cy['get'](_0x8bcafc(376))['eq'](2)[_0x8bcafc(329)](_0x8bcafc(412))['should']('not.exist');
                    });
                }), context('parallelization disabled', () => {
                    const _0x29e4e0 = _0x3ed8fb;
                    it(_0x29e4e0(415), function () {
                        const _0x4610ec = _0x29e4e0;
                        cy[_0x4610ec(327)](_0x4610ec(416))[_0x4610ec(365)](_0x4610ec(417))[_0x4610ec(418)]('mouseover'), cy[_0x4610ec(327)](_0x4610ec(419))['contains']('Parallelization was disabled for this run'), cy[_0x4610ec(420)]();
                    });
                });
            });
        }), describe('failure', function () {
            const _0x4ae67c = _0x4960d7;
            beforeEach(function () {
                const _0x394717 = _0x15f8;
                this[_0x394717(421)] = this[_0x394717(354)][_0x394717(355)](), this[_0x394717(340)]['pingApiServer']['onCall'](1)[_0x394717(356)](this['pingApiServerAgain'][_0x394717(358)]), this['pingApiServer'][_0x394717(422)]({
                    'apiUrl': _0x394717(423),
                    'message': _0x394717(424)
                });
            }), it(_0x4ae67c(425), function () {
                const _0x28d558 = _0x4ae67c;
                cy['contains'](_0x28d558(426)), cy['contains'](_0x28d558(423)), cy[_0x28d558(329)](_0x28d558(424)), cy[_0x28d558(420)]();
            }), describe(_0x4ae67c(427), function () {
                const _0x85261a = _0x4ae67c;
                beforeEach(() => {
                    const _0x5a3464 = _0x15f8;
                    cy[_0x5a3464(329)]('Try again')[_0x5a3464(331)]();
                }), it(_0x85261a(428), () => {
                    const _0x6908c2 = _0x85261a;
                    cy[_0x6908c2(327)](_0x6908c2(429))[_0x6908c2(336)](function () {
                        const _0x4b3caf = _0x6908c2;
                        expect(this[_0x4b3caf(340)][_0x4b3caf(359)])['to']['be'][_0x4b3caf(430)];
                    });
                }), it(_0x85261a(431), function () {
                    const _0x72ec31 = _0x85261a;
                    this[_0x72ec31(421)]['reject']({
                        'apiUrl': _0x72ec31(423),
                        'message': 'WHADJAEXPECT'
                    }), cy[_0x72ec31(329)](_0x72ec31(426)), cy[_0x72ec31(329)]('http://api.server'), cy['contains'](_0x72ec31(432));
                }), it(_0x85261a(374), function () {
                    const _0x38c277 = _0x85261a;
                    this[_0x38c277(421)][_0x38c277(362)](), cy[_0x38c277(329)]('h5', _0x38c277(330));
                });
            }), describe(_0x4ae67c(433), () => {
                const _0x543ca6 = _0x4ae67c;
                it(_0x543ca6(434), () => {
                    const _0x3a640b = _0x543ca6;
                    cy['contains'](_0x3a640b(435))[_0x3a640b(331)]()[_0x3a640b(336)](function () {
                        const _0xc6a228 = _0x3a640b;
                        expect(this[_0xc6a228(340)][_0xc6a228(350)])['to']['be'][_0xc6a228(436)](_0xc6a228(437));
                    });
                });
            });
        });
    }), context(_0x1b5c62(438), function () {
        const _0x8108f8 = _0x1b5c62;
        beforeEach(function () {
            const _0xde1dd8 = _0x15f8;
            this[_0xde1dd8(357)][_0xde1dd8(362)](this[_0xde1dd8(318)]), this[_0xde1dd8(363)][_0xde1dd8(439)] = this[_0xde1dd8(320)][0]['id'], this[_0xde1dd8(353)][_0xde1dd8(362)](this[_0xde1dd8(363)]), this[_0xde1dd8(359)][_0xde1dd8(362)]();
            const _0x4fcbc0 = new Date(2016, 11, 19, 10, 0, 0)[_0xde1dd8(369)]();
            cy[_0xde1dd8(370)](_0x4fcbc0)[_0xde1dd8(336)](() => {
                const _0x1476d2 = _0xde1dd8;
                return this[_0x1476d2(326)]();
            })['then'](() => {
                const _0x32f3b7 = _0xde1dd8;
                return this[_0x32f3b7(361)][_0x32f3b7(362)](this[_0x32f3b7(322)]);
            });
        }), it(_0x8108f8(440), function () {
            const _0x5ba2af = _0x8108f8;
            expect(this['ipc'][_0x5ba2af(361)])['to']['be'][_0x5ba2af(372)];
        }), it(_0x8108f8(441), function () {
            const _0x3ac380 = _0x8108f8;
            cy[_0x3ac380(327)]('.runs-container li')[_0x3ac380(365)](_0x3ac380(442), this[_0x3ac380(322)][_0x3ac380(443)]);
        }), it(_0x8108f8(444), () => {
            const _0x3c77eb = _0x8108f8;
            cy['contains'](_0x3c77eb(445))[_0x3c77eb(331)]()[_0x3c77eb(336)](function () {
                const _0xb88e53 = _0x3c77eb;
                expect(this['ipc'][_0xb88e53(350)])['to']['be'][_0xb88e53(436)](_0xb88e53(446) + this[_0xb88e53(320)][0]['id'] + '/runs');
            });
        }), it(_0x8108f8(447), () => {
            const _0x6dbabb = _0x8108f8;
            cy[_0x6dbabb(327)](_0x6dbabb(376))[_0x6dbabb(377)]()[_0x6dbabb(448)](_0x6dbabb(449))['should'](_0x6dbabb(366), _0x6dbabb(450));
        }), it('displays last updated', () => {
            const _0x233fc4 = _0x8108f8;
            cy[_0x233fc4(329)]('Last updated: 10:00:00am');
        }), it('clicking run opens admin', function () {
            const _0x1a1b87 = _0x8108f8;
            cy[_0x1a1b87(327)](_0x1a1b87(376))['first']()[_0x1a1b87(331)]()[_0x1a1b87(336)](() => {
                const _0x140613 = _0x1a1b87;
                expect(this['ipc'][_0x140613(350)])['to']['be'][_0x140613(436)](_0x140613(446) + this[_0x140613(320)][0]['id'] + _0x140613(451) + this[_0x140613(322)][0][_0x140613(381)]);
            });
        });
    }), context(_0x1b5c62(452), function () {
        const _0x227c98 = _0x1b5c62;
        beforeEach(function () {
            const _0x594bc6 = _0x15f8;
            this[_0x594bc6(357)]['resolve'](null), this[_0x594bc6(353)][_0x594bc6(362)](this['config']), this[_0x594bc6(359)][_0x594bc6(362)](), this['goToRuns']();
        }), it(_0x227c98(453), function () {
            const _0x3a0ab8 = _0x227c98;
            expect(this['ipc']['getRuns'])[_0x3a0ab8(454)]['to']['be'][_0x3a0ab8(372)];
        }), it(_0x227c98(455), function () {
            const _0x44b6cb = _0x227c98;
            cy['contains'](_0x44b6cb(456)), cy[_0x44b6cb(420)]();
        }), it(_0x227c98(457), () => {
            const _0x28e954 = _0x227c98;
            cy['contains']('button', _0x28e954(458))[_0x28e954(331)]()[_0x28e954(336)](function () {
                const _0x29645f = _0x28e954;
                expect(this[_0x29645f(340)][_0x29645f(351)])['to']['be'][_0x29645f(459)](_0x29645f(460));
            });
        });
    }), context(_0x1b5c62(461), function () {
        const _0x348969 = _0x1b5c62;
        beforeEach(function () {
            const _0x58fe18 = _0x15f8;
            this[_0x58fe18(357)][_0x58fe18(362)](this[_0x58fe18(318)]), this[_0x58fe18(363)]['projectId'] = undefined, this['openProject']['resolve'](this['config']), this['pingApiServer'][_0x58fe18(362)](), this[_0x58fe18(326)]();
        }), it(_0x348969(462), () => {
            const _0x341fda = _0x348969;
            cy['contains'](_0x341fda(463)), cy[_0x341fda(420)]();
        });
    }), context(_0x1b5c62(464), function () {
        const _0x343bba = _0x1b5c62;
        beforeEach(function () {
            const _0x5c154e = _0x15f8;
            this[_0x5c154e(357)][_0x5c154e(362)](null), this[_0x5c154e(363)][_0x5c154e(439)] = undefined, this[_0x5c154e(353)][_0x5c154e(362)](this[_0x5c154e(363)]), this['pingApiServer']['resolve'](), this[_0x5c154e(326)]();
        }), it(_0x343bba(455), function () {
            const _0x5e5d9d = _0x343bba;
            cy[_0x5e5d9d(329)]('Log in to the Dashboard to see your recorded test results here'), cy[_0x5e5d9d(420)]();
        }), it(_0x343bba(457), () => {
            const _0x2bb8fe = _0x343bba;
            cy['contains'](_0x2bb8fe(465), _0x2bb8fe(458))[_0x2bb8fe(331)]()[_0x2bb8fe(336)](function () {
                const _0x29f328 = _0x2bb8fe;
                expect(this['ipc'][_0x29f328(351)])['to']['be'][_0x29f328(459)]('Runs Tab without projectId');
            });
        }), it('shows setup when login succeeds', function () {
            const _0x493cdf = _0x343bba;
            this[_0x493cdf(340)][_0x493cdf(351)]['resolves'](this['user']), cy[_0x493cdf(329)](_0x493cdf(465), _0x493cdf(458))['click'](), cy[_0x493cdf(329)]('h4', 'Set up project');
        });
    }), describe('polling runs', function () {
        const _0x27f8f0 = _0x1b5c62;
        beforeEach(function () {
            const _0x48db43 = _0x15f8;
            this['getCurrentUser']['resolve'](this[_0x48db43(318)]), this['openProject'][_0x48db43(362)](this['config']), this[_0x48db43(359)]['resolve'](), this['getRunsAgain'] = this[_0x48db43(354)][_0x48db43(355)](), this[_0x48db43(340)][_0x48db43(361)]['onCall'](1)[_0x48db43(356)](this[_0x48db43(466)]['promise']), cy[_0x48db43(370)]()[_0x48db43(336)](() => {
                const _0x26933f = _0x48db43;
                return this[_0x26933f(326)]();
            })['then'](() => {
                const _0xb56577 = _0x48db43;
                return this['getRuns'][_0xb56577(362)](this[_0xb56577(322)]);
            }), cy[_0x48db43(327)](_0x48db43(467)), cy['clock']()['then'](() => {
                const _0x2eb5fc = _0x48db43;
                this[_0x2eb5fc(466)] = this['util']['deferred'](), this['ipc'][_0x2eb5fc(361)][_0x2eb5fc(468)](1)['returns'](this[_0x2eb5fc(466)]['promise']);
            }), cy[_0x48db43(411)](10000);
        }), it(_0x27f8f0(469), () => {
            const _0x44b282 = _0x27f8f0;
            cy[_0x44b282(327)](_0x44b282(376))[_0x44b282(377)]()['find'](_0x44b282(449))[_0x44b282(365)]('have.class', 'running');
        }), it(_0x27f8f0(470), function () {
            const _0x58dec0 = _0x27f8f0;
            expect(this[_0x58dec0(340)][_0x58dec0(361)])['to']['be'][_0x58dec0(430)];
        }), it(_0x27f8f0(471), () => {
            const _0x393ec8 = _0x27f8f0;
            cy['get'](_0x393ec8(472))['should'](_0x393ec8(473));
        }), it(_0x27f8f0(474), () => {
            const _0x37b98d = _0x27f8f0;
            cy[_0x37b98d(327)](_0x37b98d(475))[_0x37b98d(365)](_0x37b98d(366), _0x37b98d(476));
        }), context(_0x27f8f0(373), function () {
            const _0x52e524 = _0x27f8f0;
            beforeEach(function () {
                const _0x1072ee = _0x15f8;
                this[_0x1072ee(322)][0]['status'] = _0x1072ee(477), this[_0x1072ee(466)]['resolve'](this[_0x1072ee(322)]);
            }), it('updates the runs', () => {
                const _0x4e45ec = _0x15f8;
                cy[_0x4e45ec(327)](_0x4e45ec(376))[_0x4e45ec(377)]()[_0x4e45ec(448)](_0x4e45ec(449))[_0x4e45ec(365)]('have.class', _0x4e45ec(477));
            }), it(_0x52e524(478), () => {
                const _0x5dcc84 = _0x52e524;
                cy[_0x5dcc84(327)]('.runs header button')[_0x5dcc84(365)](_0x5dcc84(479));
            }), it(_0x52e524(480), () => {
                const _0x13ef1e = _0x52e524;
                cy[_0x13ef1e(327)](_0x13ef1e(475))[_0x13ef1e(365)](_0x13ef1e(481), _0x13ef1e(476));
            });
        }), context(_0x27f8f0(482), function () {
            const _0x39acf1 = _0x27f8f0;
            beforeEach(function () {
                const _0x27cc8e = _0x15f8;
                this[_0x27cc8e(483)] = _0x17be28 => {
                    const _0x1d42c0 = _0x27cc8e, _0x17d051 = Object['assign'](_0x17be28, {
                            'name': _0x1d42c0(484),
                            'message': _0x1d42c0(485)
                        });
                    this[_0x1d42c0(466)][_0x1d42c0(422)](_0x17d051);
                };
            }), it(_0x39acf1(486), function () {
                const _0x58a660 = _0x39acf1;
                this['ipcError']({ 'statusCode': 403 }), cy['contains']('Request access'), cy[_0x58a660(420)]();
            }), it('displays "need to set up" message', function () {
                const _0x5810d6 = _0x39acf1;
                this[_0x5810d6(483)]({ 'type': _0x5810d6(487) }), cy[_0x5810d6(329)](_0x5810d6(463));
            }), it(_0x39acf1(488), function () {
                const _0x4da014 = _0x39acf1;
                this[_0x4da014(483)]({ 'type': _0x4da014(489) }), cy[_0x4da014(327)]('.runs-container li')[_0x4da014(365)](_0x4da014(442), this[_0x4da014(322)][_0x4da014(443)]);
            });
        });
    }), describe('manually refreshing runs', function () {
        const _0x41c15e = _0x1b5c62;
        beforeEach(function () {
            const _0x1e0e84 = _0x15f8;
            this[_0x1e0e84(357)][_0x1e0e84(362)](this[_0x1e0e84(318)]), this[_0x1e0e84(353)][_0x1e0e84(362)](this[_0x1e0e84(363)]), this[_0x1e0e84(359)][_0x1e0e84(362)](), this['getRunsAgain'] = this[_0x1e0e84(354)][_0x1e0e84(355)](), this[_0x1e0e84(340)][_0x1e0e84(361)][_0x1e0e84(468)](1)[_0x1e0e84(356)](this[_0x1e0e84(466)][_0x1e0e84(358)]), this[_0x1e0e84(361)]['resolve'](this['runs']), this[_0x1e0e84(326)]()['then'](() => {
                const _0xacae99 = _0x1e0e84;
                cy[_0xacae99(327)]('.runs header button')[_0xacae99(331)]();
            });
        }), it('sends get:runs ipc event', function () {
            const _0x54eaac = _0x15f8;
            expect(this[_0x54eaac(340)]['getRuns'])['to']['be']['calledTwice'];
        }), it(_0x41c15e(490), function () {
            const _0x1de981 = _0x41c15e;
            cy[_0x1de981(327)](_0x1de981(376))[_0x1de981(365)]('have.length', this[_0x1de981(322)][_0x1de981(443)]);
        }), it(_0x41c15e(471), () => {
            const _0x4bdec5 = _0x41c15e;
            cy[_0x4bdec5(327)](_0x4bdec5(472))['should'](_0x4bdec5(473));
        }), it('spins the refresh button', () => {
            const _0x409a62 = _0x41c15e;
            cy['get'](_0x409a62(475))[_0x409a62(365)]('have.class', _0x409a62(476));
        }), describe(_0x41c15e(491), function () {
            beforeEach(function () {
                const _0x2ce7b8 = _0x15f8;
                this[_0x2ce7b8(466)]['resolve'](this['runs']);
            }), it('enables refresh button', () => {
                const _0x538803 = _0x15f8;
                cy[_0x538803(327)]('.runs header button')['should']('not.be.disabled');
            }), it('stops spinning the refresh button', () => {
                const _0x1a7f5e = _0x15f8;
                cy[_0x1a7f5e(327)]('.runs header button i')[_0x1a7f5e(365)](_0x1a7f5e(481), _0x1a7f5e(476));
            });
        });
    }), context(_0x1b5c62(492), function () {
        const _0x5e46ed = _0x1b5c62;
        beforeEach(function () {
            const _0xbf8ccf = _0x15f8;
            this[_0xbf8ccf(357)]['resolve'](this[_0xbf8ccf(318)]), this[_0xbf8ccf(359)]['resolve']();
        }), describe(_0x5e46ed(493), function () {
            const _0x564fef = _0x5e46ed;
            beforeEach(function () {
                const _0x439591 = _0x15f8;
                this['openProject']['resolve'](this['config']), this[_0x439591(326)]();
            }), context(_0x564fef(494), function () {
                const _0x168eb8 = _0x564fef;
                beforeEach(function () {
                    const _0x244e6e = _0x15f8;
                    this[_0x244e6e(361)][_0x244e6e(422)]({
                        'name': 'foo',
                        'message': _0x244e6e(485),
                        'statusCode': 403
                    });
                }), it(_0x168eb8(495), () => {
                    const _0x18b5c6 = _0x168eb8;
                    cy[_0x18b5c6(329)](_0x18b5c6(496));
                });
            }), context('any case', function () {
                const _0x37082d = _0x564fef;
                beforeEach(function () {
                    const _0x471ed5 = _0x15f8;
                    this[_0x471ed5(497)] = this[_0x471ed5(354)][_0x471ed5(355)](), this[_0x471ed5(340)]['requestAccess'][_0x471ed5(356)](this[_0x471ed5(497)][_0x471ed5(358)]), this['getRuns']['reject']({
                        'name': 'foo',
                        'message': _0x471ed5(485),
                        'statusCode': 403
                    });
                }), context(_0x37082d(498), function () {
                    const _0x346e28 = _0x37082d;
                    beforeEach(() => {
                        const _0x483f1e = _0x15f8;
                        cy[_0x483f1e(329)](_0x483f1e(465), _0x483f1e(496))['as'](_0x483f1e(499))['click']();
                    }), it('sends requests access with project id', function () {
                        const _0x1d2627 = _0x15f8;
                        expect(this[_0x1d2627(340)][_0x1d2627(497)])['to']['be'][_0x1d2627(436)](this[_0x1d2627(363)]['projectId']);
                    }), it(_0x346e28(500), () => {
                        const _0x3ea881 = _0x346e28;
                        cy[_0x3ea881(327)](_0x3ea881(501))['should'](_0x3ea881(473));
                    }), it('hides "Request access" text', () => {
                        const _0x357725 = _0x346e28;
                        cy[_0x357725(327)](_0x357725(501))['find'](_0x357725(502))[_0x357725(365)](_0x357725(503));
                    }), it(_0x346e28(504), () => {
                        const _0x2fbf25 = _0x346e28;
                        cy['get'](_0x2fbf25(501))[_0x2fbf25(448)]('> i')['should'](_0x2fbf25(505));
                    }), describe(_0x346e28(506), function () {
                        const _0xe9bd06 = _0x346e28;
                        beforeEach(function () {
                            const _0x2aef38 = _0x15f8;
                            this[_0x2aef38(497)][_0x2aef38(362)]();
                        }), it(_0xe9bd06(507), () => {
                            const _0x70a155 = _0xe9bd06;
                            cy[_0x70a155(329)](_0x70a155(508)), cy[_0x70a155(420)]();
                        }), it('persists request state (until app is reloaded at least)', function () {
                            const _0x5c5f40 = _0xe9bd06;
                            this[_0x5c5f40(340)][_0x5c5f40(361)][_0x5c5f40(468)](1)[_0x5c5f40(509)]({
                                'name': 'foo',
                                'message': _0x5c5f40(485),
                                'statusCode': 403
                            }), cy['get']('.navbar-default a')[_0x5c5f40(329)](_0x5c5f40(510))['click'](), cy[_0x5c5f40(327)]('.navbar-default a')[_0x5c5f40(329)](_0x5c5f40(330))[_0x5c5f40(331)](), cy['contains']('Request sent');
                        });
                    }), describe(_0x346e28(511), function () {
                        const _0x57edc1 = _0x346e28;
                        beforeEach(function () {
                            const _0x54dec2 = _0x15f8;
                            this[_0x54dec2(497)]['reject']({
                                'name': _0x54dec2(484),
                                'message': 'There\'s an error',
                                'type': 'ALREADY_MEMBER'
                            }), this[_0x54dec2(361)] = this[_0x54dec2(354)][_0x54dec2(355)](), this['ipc'][_0x54dec2(361)]['onCall'](1)[_0x54dec2(356)](this[_0x54dec2(361)][_0x54dec2(358)]), this['ipc'][_0x54dec2(361)]['onCall'](2)[_0x54dec2(356)](this[_0x54dec2(361)]['promise']);
                        }), it(_0x57edc1(512), function () {
                            const _0x4bb1f7 = _0x57edc1;
                            cy[_0x4bb1f7(513)](this['ipc'][_0x4bb1f7(361)])[_0x4bb1f7(514)](_0x4bb1f7(515))[_0x4bb1f7(365)](_0x4bb1f7(516), 1);
                        }), it(_0x57edc1(517), () => {
                            const _0x4e2546 = _0x57edc1;
                            cy[_0x4e2546(327)](_0x4e2546(429));
                        }), it('shows runs when getting runs succeeds', function () {
                            const _0x10e2f0 = _0x57edc1;
                            this[_0x10e2f0(361)][_0x10e2f0(362)](this[_0x10e2f0(322)]), cy[_0x10e2f0(327)](_0x10e2f0(376))[_0x10e2f0(365)](_0x10e2f0(442), this[_0x10e2f0(322)]['length']);
                        });
                    }), describe(_0x346e28(518), function () {
                        const _0x1a3941 = _0x346e28;
                        describe(_0x1a3941(519), function () {
                            const _0x49b6df = _0x1a3941;
                            beforeEach(function () {
                                const _0x5bfc4c = _0x15f8;
                                this[_0x5bfc4c(497)][_0x5bfc4c(422)]({
                                    'name': _0x5bfc4c(484),
                                    'message': _0x5bfc4c(520)
                                }), cy[_0x5bfc4c(329)](_0x5bfc4c(521)), cy[_0x5bfc4c(329)]('off the cracker'), cy[_0x5bfc4c(329)](_0x5bfc4c(465), 'Request access')['as']('requestAccessBtn');
                            }), it(_0x49b6df(522), () => {
                                const _0x48f5a5 = _0x49b6df;
                                cy[_0x48f5a5(327)](_0x48f5a5(501))[_0x48f5a5(365)](_0x48f5a5(479)), cy[_0x48f5a5(420)]();
                            }), it('shows "Request access" text', () => {
                                const _0x242b4a = _0x49b6df;
                                cy[_0x242b4a(327)](_0x242b4a(501))[_0x242b4a(448)]('span')['should'](_0x242b4a(505));
                            }), it(_0x49b6df(523), () => {
                                const _0x1e3f82 = _0x49b6df;
                                cy['get'](_0x1e3f82(501))[_0x1e3f82(448)]('> i')[_0x1e3f82(365)]('not.be.visible');
                            });
                        }), describe(_0x1a3941(524), function () {
                            const _0x1ba24b = _0x1a3941;
                            beforeEach(function () {
                                const _0x54d98f = _0x15f8;
                                this[_0x54d98f(497)]['reject']({
                                    'type': _0x54d98f(525),
                                    'name': 'foo',
                                    'message': _0x54d98f(485)
                                });
                            }), it(_0x1ba24b(526), () => {
                                const _0x174637 = _0x1ba24b;
                                cy[_0x174637(329)](_0x174637(508));
                            });
                        }), describe(_0x1a3941(527), function () {
                            const _0x114fb6 = _0x1a3941;
                            beforeEach(function () {
                                const _0x18bb79 = _0x15f8;
                                this['requestAccess'][_0x18bb79(422)]({
                                    'type': 'ALREADY_REQUESTED',
                                    'name': 'foo',
                                    'message': _0x18bb79(485)
                                });
                            }), it(_0x114fb6(526), () => {
                                const _0x50533b = _0x114fb6;
                                cy[_0x50533b(329)](_0x50533b(508));
                            });
                        }), describe(_0x1a3941(528), function () {
                            const _0xa4e86c = _0x1a3941;
                            beforeEach(function () {
                                const _0x39b734 = _0x15f8;
                                this['requestAccess'][_0x39b734(422)]({
                                    'name': '',
                                    'message': '',
                                    'statusCode': 401
                                });
                            }), it('logs user out', () => {
                                cy['shouldBeLoggedOut']();
                            }), it(_0xa4e86c(529), () => {
                                const _0x217e51 = _0xa4e86c;
                                cy[_0x217e51(327)](_0x217e51(530))[_0x217e51(365)](_0x217e51(531), _0x217e51(532)), cy['percySnapshot']();
                            }), it(_0xa4e86c(533), () => {
                                const _0x2442f7 = _0xa4e86c;
                                cy[_0x2442f7(329)]('button', _0x2442f7(458))[_0x2442f7(331)]()[_0x2442f7(336)](function () {
                                    const _0x578717 = _0x2442f7;
                                    expect(this[_0x578717(340)][_0x578717(351)])['to']['be'][_0x578717(372)];
                                });
                            });
                        });
                    });
                });
            });
        }), describe(_0x5e46ed(534), function () {
            const _0x274860 = _0x5e46ed;
            beforeEach(function () {
                const _0x2a3a36 = _0x15f8;
                this[_0x2a3a36(353)][_0x2a3a36(362)](this[_0x2a3a36(363)]), this[_0x2a3a36(326)]()['then'](() => {
                    const _0x2ccfa5 = _0x2a3a36;
                    this[_0x2ccfa5(361)][_0x2ccfa5(422)]({
                        'name': _0x2ccfa5(484),
                        'message': _0x2ccfa5(485),
                        'type': 'TIMED_OUT'
                    });
                });
            }), it(_0x274860(535), () => {
                const _0x340821 = _0x274860;
                cy[_0x340821(329)]('timed out'), cy[_0x340821(420)]();
            });
        }), describe(_0x5e46ed(536), function () {
            beforeEach(function () {
                const _0x57a75e = _0x15f8;
                this[_0x57a75e(353)][_0x57a75e(362)](this[_0x57a75e(363)]), this['goToRuns']()[_0x57a75e(336)](() => {
                    const _0x587d9b = _0x57a75e;
                    this[_0x587d9b(361)][_0x587d9b(422)]({
                        'name': _0x587d9b(484),
                        'message': _0x587d9b(485),
                        'type': _0x587d9b(537)
                    });
                });
            }), it('displays empty message', () => {
                const _0x1950ea = _0x15f8;
                cy[_0x1950ea(329)](_0x1950ea(538)), cy['percySnapshot']();
            });
        }), describe(_0x5e46ed(539), function () {
            const _0x3ede71 = _0x5e46ed;
            beforeEach(function () {
                const _0x4fc77c = _0x15f8;
                this[_0x4fc77c(353)]['resolve'](this[_0x4fc77c(363)]), this[_0x4fc77c(326)]()['then'](() => {
                    const _0x494b22 = _0x4fc77c;
                    this[_0x494b22(361)]['reject']({
                        'name': '',
                        'message': '',
                        'statusCode': 401
                    });
                });
            }), it(_0x3ede71(540), () => {
                const _0x51b097 = _0x3ede71;
                cy[_0x51b097(541)]();
            }), it(_0x3ede71(529), () => {
                const _0x3691b3 = _0x3ede71;
                cy[_0x3691b3(327)]('.empty h4')[_0x3691b3(365)](_0x3691b3(531), _0x3691b3(532));
            });
        }), describe(_0x5e46ed(542), function () {
            const _0x518276 = _0x5e46ed;
            beforeEach(function () {
                const _0x5f3103 = _0x15f8;
                this['openProject'][_0x5f3103(362)](this[_0x5f3103(363)]), this['ipc'][_0x5f3103(543)]['resolves'](this[_0x5f3103(332)]), this[_0x5f3103(340)][_0x5f3103(361)]['onCall'](1)[_0x5f3103(343)]([]), this[_0x5f3103(326)]()[_0x5f3103(336)](() => {
                    const _0x45a522 = _0x5f3103;
                    this['getRuns'][_0x45a522(422)]({
                        'name': _0x45a522(484),
                        'message': _0x45a522(485),
                        'type': _0x45a522(487)
                    });
                });
            }), it(_0x518276(544), () => {
                const _0x2627fd = _0x518276;
                cy[_0x2627fd(329)](_0x2627fd(463)), cy[_0x2627fd(420)]();
            }), it(_0x518276(545), () => {
                const _0x4c01ab = _0x518276;
                cy[_0x4c01ab(329)](_0x4c01ab(546), 'Connect to Dashboard')[_0x4c01ab(331)](), cy[_0x4c01ab(327)](_0x4c01ab(547))[_0x4c01ab(331)](), cy[_0x4c01ab(327)](_0x4c01ab(548))['should']('be.visible'), cy[_0x4c01ab(327)](_0x4c01ab(549))[_0x4c01ab(329)](_0x4c01ab(550))['click'](), cy[_0x4c01ab(327)](_0x4c01ab(551))[_0x4c01ab(329)](_0x4c01ab(546), _0x4c01ab(552))[_0x4c01ab(331)](), cy[_0x4c01ab(329)](_0x4c01ab(553)), cy[_0x4c01ab(420)]();
            });
        }), describe(_0x5e46ed(554), function () {
            const _0x3352ca = _0x5e46ed;
            beforeEach(function () {
                const _0xa58493 = _0x15f8;
                this[_0xa58493(353)]['resolve'](this[_0xa58493(363)]), this[_0xa58493(326)]()['then'](() => {
                    const _0x244738 = _0xa58493;
                    this['getRuns'][_0x244738(422)]({
                        'name': _0x244738(484),
                        'message': _0x244738(555),
                        'type': _0x244738(556)
                    });
                });
            }), it(_0x3352ca(557), function () {
                const _0x11f072 = _0x3352ca;
                cy[_0x11f072(329)](_0x11f072(554)), cy[_0x11f072(329)](_0x11f072(558)), cy[_0x11f072(420)]();
            });
        }), describe(_0x5e46ed(559), function () {
            const _0x5a5a6b = _0x5e46ed;
            beforeEach(function () {
                const _0x2e9933 = _0x15f8;
                this[_0x2e9933(353)][_0x2e9933(362)](this['config']), this[_0x2e9933(360)][_0x2e9933(362)]({ 'state': 'UNAUTHORIZED' }), this[_0x2e9933(326)]();
            }), it(_0x5a5a6b(495), () => {
                const _0xe921d4 = _0x5a5a6b;
                cy[_0xe921d4(329)](_0xe921d4(496));
            });
        }), describe(_0x5e46ed(560), function () {
            const _0x17efbd = _0x5e46ed;
            beforeEach(function () {
                const _0x2c54f3 = _0x15f8;
                this[_0x2c54f3(353)][_0x2c54f3(362)](this['config']), this[_0x2c54f3(340)][_0x2c54f3(543)]['resolves'](this[_0x2c54f3(332)]), this['getProjectStatus'][_0x2c54f3(362)]({ 'state': _0x2c54f3(561) }), this[_0x2c54f3(326)]();
            }), it(_0x17efbd(562), () => {
                const _0x315f93 = _0x17efbd;
                cy[_0x315f93(329)](_0x315f93(538));
            }), it(_0x17efbd(563), function () {
                const _0x1ed489 = _0x17efbd;
                cy[_0x1ed489(329)]('.btn', _0x1ed489(564))[_0x1ed489(331)](), cy['get']('.setup-project')['should'](_0x1ed489(505));
            }), it(_0x17efbd(565), function () {
                const _0x502d53 = _0x17efbd;
                cy[_0x502d53(329)](_0x502d53(546), _0x502d53(564))[_0x502d53(331)](), cy[_0x502d53(327)](_0x502d53(547))[_0x502d53(331)](), cy[_0x502d53(327)](_0x502d53(548))['should'](_0x502d53(505)), cy['get'](_0x502d53(549))[_0x502d53(329)](_0x502d53(550))[_0x502d53(331)](), cy[_0x502d53(327)](_0x502d53(551))[_0x502d53(329)](_0x502d53(546), _0x502d53(552))['click'](), cy[_0x502d53(329)](_0x502d53(553));
            });
        }), describe(_0x5e46ed(566), () => {
            const _0x39425e = _0x5e46ed;
            context(_0x39425e(567), function () {
                const _0x48f8d4 = _0x39425e;
                beforeEach(function () {
                    const _0x215c0b = _0x15f8;
                    this[_0x215c0b(363)][_0x215c0b(439)] = null, this[_0x215c0b(353)][_0x215c0b(362)](this[_0x215c0b(363)]), this[_0x215c0b(326)]()[_0x215c0b(336)](() => {
                        const _0x5999da = _0x215c0b;
                        this[_0x5999da(361)][_0x5999da(362)]([]);
                    });
                }), it(_0x48f8d4(544), () => {
                    const _0x5e0fb2 = _0x48f8d4;
                    cy[_0x5e0fb2(329)](_0x5e0fb2(463));
                }), it(_0x48f8d4(568), () => {
                    const _0x37351e = _0x48f8d4;
                    cy[_0x37351e(329)](_0x37351e(569), _0x37351e(570))['click'](), cy['get'](_0x37351e(571))[_0x37351e(448)](_0x37351e(572))[_0x37351e(377)]()[_0x37351e(365)](_0x37351e(505)), cy['percySnapshot']();
                });
            });
        }), context(_0x5e46ed(573), function () {
            const _0x54f55d = _0x5e46ed;
            beforeEach(function () {
                const _0x7be292 = _0x15f8;
                this[_0x7be292(353)][_0x7be292(362)](this[_0x7be292(363)]), this[_0x7be292(326)]()[_0x7be292(336)](() => {
                    const _0x1cc498 = _0x7be292;
                    this[_0x1cc498(361)]['resolve']([]);
                });
            }), context(_0x54f55d(574), function () {
                const _0x35f088 = _0x54f55d;
                beforeEach(function () {
                    const _0x45b68d = _0x15f8;
                    this['getProjectStatus'][_0x45b68d(362)]({ 'orgId': '0' });
                }), it(_0x35f088(562), () => {
                    const _0x33b968 = _0x35f088;
                    cy[_0x33b968(329)](_0x33b968(575)), cy[_0x33b968(420)]();
                }), it(_0x35f088(576), () => {
                    const _0x40f758 = _0x35f088;
                    cy[_0x40f758(329)](_0x40f758(577))[_0x40f758(331)]()[_0x40f758(336)](function () {
                        const _0x390962 = _0x40f758;
                        expect(this[_0x390962(340)][_0x390962(350)])['to']['be']['calledWithMatch']({ 'url': 'https://on.cypress.io/what-is-a-project-id' });
                    });
                }), it(_0x35f088(578), () => {
                    const _0x11ed98 = _0x35f088;
                    cy[_0x11ed98(329)]('Cypress Dashboard')[_0x11ed98(331)]()[_0x11ed98(336)](function () {
                        const _0x41ef79 = _0x11ed98;
                        expect(this[_0x41ef79(340)][_0x41ef79(350)])['to']['be'][_0x41ef79(436)](_0x41ef79(446) + this[_0x41ef79(363)]['projectId'] + _0x41ef79(579));
                    });
                }), it('shows tooltip on hover of copy to clipboard', () => {
                    const _0x5c5177 = _0x35f088;
                    cy[_0x5c5177(327)](_0x5c5177(580))[_0x5c5177(448)](_0x5c5177(581))[_0x5c5177(418)](_0x5c5177(582)), cy[_0x5c5177(327)]('.cy-tooltip')['should'](_0x5c5177(531), _0x5c5177(583)), cy[_0x5c5177(327)]('#code-record-command')[_0x5c5177(448)](_0x5c5177(581))[_0x5c5177(418)](_0x5c5177(584));
                }), it(_0x35f088(585), () => {
                    const _0x372125 = _0x35f088;
                    cy[_0x372125(327)](_0x372125(580))[_0x372125(448)](_0x372125(581))[_0x372125(331)]()[_0x372125(336)](function () {
                        const _0x1ca178 = _0x372125;
                        expect(this[_0x1ca178(340)][_0x1ca178(352)])['to']['be'][_0x1ca178(436)](_0x1ca178(586));
                    });
                });
            }), context(_0x54f55d(587), function () {
                const _0x29ec84 = _0x54f55d;
                beforeEach(function () {
                    const _0x1140cf = _0x15f8;
                    this[_0x1140cf(360)][_0x1140cf(362)]({ 'orgId': '1' });
                }), it(_0x29ec84(562), () => {
                    const _0x16b88b = _0x29ec84;
                    cy[_0x16b88b(329)]('How to record your first run'), cy[_0x16b88b(420)]();
                }), it(_0x29ec84(588), () => {
                    const _0x1b4411 = _0x29ec84;
                    cy[_0x1b4411(327)](_0x1b4411(589))['eq'](0)[_0x1b4411(448)]('a')['trigger'](_0x1b4411(582)), cy[_0x1b4411(327)]('.cy-tooltip')[_0x1b4411(365)]('contain', _0x1b4411(590))[_0x1b4411(329)](_0x1b4411(435))[_0x1b4411(331)]()[_0x1b4411(336)](function () {
                        const _0x3dbd6f = _0x1b4411;
                        expect(this['ipc'][_0x3dbd6f(350)])['to']['be'][_0x3dbd6f(591)]({ 'url': 'https://on.cypress.io/what-is-a-project-id' });
                    });
                }), it(_0x29ec84(592), () => {
                    const _0x2a1849 = _0x29ec84;
                    cy[_0x2a1849(327)](_0x2a1849(589))['eq'](1)[_0x2a1849(448)]('a')['trigger'](_0x2a1849(582)), cy['get'](_0x2a1849(419))[_0x2a1849(365)](_0x2a1849(531), _0x2a1849(593))[_0x2a1849(329)]('Learn more')[_0x2a1849(331)]()[_0x2a1849(336)](function () {
                        const _0x12dbf0 = _0x2a1849;
                        expect(this['ipc']['externalOpen'])['to']['be'][_0x12dbf0(591)]({ 'url': _0x12dbf0(594) });
                    });
                }), it('shows tooltip on hover of copy to clipboard', () => {
                    const _0x8973d4 = _0x29ec84;
                    cy[_0x8973d4(327)](_0x8973d4(580))[_0x8973d4(448)](_0x8973d4(581))['trigger'](_0x8973d4(582)), cy[_0x8973d4(327)](_0x8973d4(419))['should']('contain', _0x8973d4(583)), cy['get']('#code-record-command')[_0x8973d4(448)](_0x8973d4(581))[_0x8973d4(418)](_0x8973d4(584));
                }), it(_0x29ec84(585), () => {
                    const _0x1e3673 = _0x29ec84;
                    cy[_0x1e3673(327)](_0x1e3673(580))[_0x1e3673(448)](_0x1e3673(581))[_0x1e3673(331)]()[_0x1e3673(336)](function () {
                        const _0x263d12 = _0x1e3673;
                        expect(this['ipc'][_0x263d12(352)])['to']['be'][_0x263d12(436)]('cypress run --record --key <record-key>');
                    });
                }), it(_0x29ec84(595), () => {
                    const _0x57143e = _0x29ec84;
                    cy[_0x57143e(329)](_0x57143e(596))['parents'](_0x57143e(597))[_0x57143e(329)](_0x57143e(598))['click']()[_0x57143e(336)](function () {
                        const _0xbd5b7f = _0x57143e;
                        expect(this['ipc'][_0xbd5b7f(350)])['to']['be']['calledWithMatch']({ 'url': 'https://on.cypress.io/ci' });
                    });
                }), it('displays sample project panel with link', () => {
                    const _0x4493d0 = _0x29ec84;
                    cy[_0x4493d0(329)](_0x4493d0(599))[_0x4493d0(600)](_0x4493d0(597))['contains'](_0x4493d0(601))[_0x4493d0(331)]()[_0x4493d0(336)](function () {
                        const _0x24c9c3 = _0x4493d0;
                        expect(this['ipc'][_0x24c9c3(350)])['to']['be'][_0x24c9c3(591)]({ 'url': 'https://on.cypress.io/rwa-dashboard' });
                    });
                });
            });
        });
    });
});