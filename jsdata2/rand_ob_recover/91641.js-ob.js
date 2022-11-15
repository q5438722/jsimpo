const _ = require(_0x3a1d53(200)), {onCreateNode} = require(_0x3a1d53(201)), {graphql} = require('gatsby/graphql'), {createContentDigest} = require('gatsby-core-utils');
let node, actions, createNodeId;
function _0x41c9(_0x4be834, _0x27f0ec) {
    return _0x41c9 = function (_0x339339, _0x30adc9) {
        _0x339339 = _0x339339 - (307 + -7617 * -1 + -7732);
        let _0x35d8b3 = _0x2bca[_0x339339];
        return _0x35d8b3;
    }, _0x41c9(_0x4be834, _0x27f0ec);
}
beforeEach(() => {
    const _0x3e36bc = _0x3a1d53;
    node = {
        'id': _0x3e36bc(202),
        'children': [],
        'internal': {
            'contentDigest': 'whatever',
            'mediaType': 'text/markdown'
        }
    }, actions = {
        'createNode': jest['fn'](),
        'createParentChildLink': jest['fn']()
    }, createNodeId = jest['fn']()[_0x3e36bc(203)](_0x3e36bc(204));
});
const loadNodeContent = _0x450a00 => Promise[_0x3a1d53(205)](_0x450a00[_0x3a1d53(206)]);
describe(_0x3a1d53(207), () => {
    const _0x3be416 = _0x3a1d53, _0x30a9eb = {
            'YEsRt': function (_0x36e920, _0x46e9ef, _0x436bb4) {
                return _0x36e920(_0x46e9ef, _0x436bb4);
            },
            'lvUGr': function (_0x15026c, _0xc3057a) {
                return _0x15026c(_0xc3057a);
            },
            'CyhOq': _0x3be416(208),
            'tetcN': function (_0x5a4d7, _0x339433, _0x1abc58) {
                return _0x5a4d7(_0x339433, _0x1abc58);
            },
            'uJNtu': function (_0x32b56d) {
                return _0x32b56d();
            },
            'hFJST': function (_0x26bdd7, _0x4d0aee, _0x28107c) {
                return _0x26bdd7(_0x4d0aee, _0x28107c);
            },
            'ScBmk': function (_0x3528a5, _0x5c71cb, _0x5c4d80) {
                return _0x3528a5(_0x5c71cb, _0x5c4d80);
            },
            'aCvyG': function (_0x4e7dc7, _0x49e8e2) {
                return _0x4e7dc7(_0x49e8e2);
            },
            'xURgt': function (_0x5ee66c, _0x3d7cee) {
                return _0x5ee66c(_0x3d7cee);
            },
            'ZHytE': function (_0x73367a, _0x51722e, _0x1807d8) {
                return _0x73367a(_0x51722e, _0x1807d8);
            },
            'obLPf': function (_0x50aeeb, _0x27c649, _0x1eeed4) {
                return _0x50aeeb(_0x27c649, _0x1eeed4);
            },
            'ktzDF': function (_0xcbfd57, _0x5b1427, _0x49450a) {
                return _0xcbfd57(_0x5b1427, _0x49450a);
            }
        };
    describe('Process generated markdown node correctly', () => {
        const _0x5c9e53 = _0x3be416, _0x3acff2 = {
                'PyjFF': function (_0x41bae5, _0x53ab72) {
                    return _0x41bae5(_0x53ab72);
                },
                'WgkFR': function (_0x1eefe3, _0x3aaaf2) {
                    return _0x30a9eb['lvUGr'](_0x1eefe3, _0x3aaaf2);
                },
                'auaVy': function (_0x1208d6, _0x41d3d5) {
                    const _0x2ccaca = _0x41c9;
                    return _0x30a9eb[_0x2ccaca(209)](_0x1208d6, _0x41d3d5);
                },
                'leRAA': _0x30a9eb[_0x5c9e53(210)],
                'JuxPy': function (_0x338194, _0x2b4bb3) {
                    const _0x4e1ae1 = _0x5c9e53;
                    return _0x30a9eb[_0x4e1ae1(209)](_0x338194, _0x2b4bb3);
                },
                'FNECz': function (_0x52b335, _0x3a897a) {
                    return _0x30a9eb['lvUGr'](_0x52b335, _0x3a897a);
                },
                'dvHrm': function (_0x17c5d0, _0x5407a3) {
                    return _0x17c5d0(_0x5407a3);
                }
            };
        it(_0x5c9e53(211), async () => {
            const _0x3f51e9 = _0x5c9e53, _0x2ec1cd = _0x3f51e9(212);
            node['content'] = _0x2ec1cd, await _0x3acff2[_0x3f51e9(213)](onCreateNode, {
                'node': node,
                'loadNodeContent': loadNodeContent,
                'actions': actions,
                'createNodeId': createNodeId,
                'createContentDigest': createContentDigest
            })['then'](() => {
                const _0x461a5b = _0x3f51e9;
                _0x3acff2[_0x461a5b(214)](expect, actions[_0x461a5b(215)]['mock'][_0x461a5b(216)])[_0x461a5b(217)](), _0x3acff2[_0x461a5b(218)](expect, _['isString'](actions[_0x461a5b(215)][_0x461a5b(219)][_0x461a5b(216)][46 * 10 + -6202 + 5742][6638 + -8475 + 1837][_0x461a5b(220)][_0x461a5b(221)]))[_0x461a5b(222)](), expect(actions[_0x461a5b(223)]['mock']['calls'])[_0x461a5b(217)](), expect(actions[_0x461a5b(215)])[_0x461a5b(224)](199 * 11 + 6936 + -9124), _0x3acff2[_0x461a5b(218)](expect, actions['createParentChildLink'])[_0x461a5b(224)](1609 + 1 * -6217 + 419 * 11);
            });
        }), _0x30a9eb['tetcN'](it, _0x5c9e53(225), async () => {
            const _0x206919 = _0x5c9e53, _0x4e3eef = _0x206919(226);
            node[_0x206919(206)] = _0x4e3eef, await _0x30a9eb['YEsRt'](onCreateNode, {
                'node': node,
                'loadNodeContent': loadNodeContent,
                'actions': actions,
                'createNodeId': createNodeId,
                'createContentDigest': createContentDigest
            }, { 'excerpt_separator': '<!-- end -->' })['then'](() => {
                const _0xd76f2b = _0x206919, _0x277f85 = _0x3acff2['leRAA'][_0xd76f2b(227)]('|');
                let _0x5cf0f9 = -3921 + -321 * 31 + -136 * -102;
                while (!![]) {
                    switch (_0x277f85[_0x5cf0f9++]) {
                    case '0':
                        _0x3acff2[_0xd76f2b(228)](expect, actions[_0xd76f2b(215)]['mock'][_0xd76f2b(216)][11 * 641 + -661 * 1 + -3195 * 2][-7 * -517 + -4445 * -2 + -12509][_0xd76f2b(229)])[_0xd76f2b(230)][_0xd76f2b(231)](171 * 51 + -1 * -8306 + -17027);
                        continue;
                    case '1':
                        _0x3acff2[_0xd76f2b(228)](expect, actions[_0xd76f2b(215)][_0xd76f2b(219)][_0xd76f2b(216)])[_0xd76f2b(217)]();
                        continue;
                    case '2':
                        _0x3acff2[_0xd76f2b(232)](expect, actions[_0xd76f2b(223)])[_0xd76f2b(224)](3395 * -1 + 4989 + -1593);
                        continue;
                    case '3':
                        _0x3acff2[_0xd76f2b(232)](expect, actions[_0xd76f2b(223)]['mock'][_0xd76f2b(216)])[_0xd76f2b(217)]();
                        continue;
                    case '4':
                        _0x3acff2[_0xd76f2b(233)](expect, actions['createNode'])[_0xd76f2b(224)](6014 + -9836 + 3823);
                        continue;
                    case '5':
                        expect(_[_0xd76f2b(234)](actions[_0xd76f2b(215)][_0xd76f2b(219)][_0xd76f2b(216)][2567 * 1 + -2882 * -1 + -5449][-7364 + -1 * -4660 + 208 * 13][_0xd76f2b(229)]))['toBeTruthy']();
                        continue;
                    }
                    break;
                }
            });
        });
    }), _0x30a9eb['obLPf'](describe, _0x3be416(235), () => {
        const _0x49d50d = _0x3be416, _0x193677 = _0x3b4bf3 => _0x49d50d(236) + _0x3b4bf3 + '\n---\n\nyadda yadda\n      ';
        _0x30a9eb[_0x49d50d(237)](it, _0x49d50d(238), async () => {
            const _0x2a980a = _0x49d50d, _0xc554f = '2019-01-01';
            node[_0x2a980a(206)] = _0x193677(_0xc554f);
            const _0x239916 = await _0x30a9eb[_0x2a980a(209)](onCreateNode, {
                'node': node,
                'actions': actions,
                'createNodeId': createNodeId,
                'loadNodeContent': loadNodeContent,
                'createContentDigest': createContentDigest
            });
            _0x30a9eb[_0x2a980a(209)](expect, _0x239916[_0x2a980a(220)][_0x2a980a(221)])['toEqual'](new Date(_0xc554f)[_0x2a980a(239)]());
        });
    }), _0x30a9eb[_0x3be416(240)](describe, _0x3be416(241), () => {
        const _0x47f00a = _0x3be416, _0x374a70 = {
                'CNVfG': function (_0x25a83a, _0x3cafcb) {
                    return _0x30a9eb['aCvyG'](_0x25a83a, _0x3cafcb);
                },
                'pEpvN': function (_0x1fdda7, _0x227e7b) {
                    return _0x30a9eb['xURgt'](_0x1fdda7, _0x227e7b);
                },
                'ZdFxs': function (_0x2fbff4) {
                    return _0x2fbff4();
                },
                'JTJiH': function (_0x3f3a83, _0x46dd26) {
                    const _0x1aae01 = _0x41c9;
                    return _0x30a9eb[_0x1aae01(242)](_0x3f3a83, _0x46dd26);
                },
                'zLtPB': function (_0x174864) {
                    return _0x174864();
                }
            };
        async function _0x14f150(_0x1e9690, _0x167c7a) {
            const _0x428847 = _0x41c9, {createSchemaComposer: _0x7d2447} = _0x30a9eb[_0x428847(209)](require, _0x428847(243)), {addInferredFields: _0x2ba1c1} = _0x30a9eb[_0x428847(209)](require, '../../../gatsby/src/schema/infer/add-inferred-fields'), {addNodes: _0x413f32} = _0x30a9eb[_0x428847(209)](require, _0x428847(244)), {getExampleObject: _0x201295} = require(_0x428847(245)), _0x118922 = _0x30a9eb['uJNtu'](_0x7d2447), _0x216582 = _0x428847(246), _0x5dc389 = _0x118922['createObjectTC'](_0x216582), _0x9b6028 = _0x30a9eb[_0x428847(247)](_0x413f32, { 'typeName': _0x216582 }, _0x1e9690);
            _0x2ba1c1({
                'schemaComposer': _0x118922,
                'typeComposer': _0x5dc389,
                'exampleValue': _0x201295(_0x9b6028)
            }), _0x118922[_0x428847(248)][_0x428847(249)]({
                'listNode': {
                    'type': [_0x5dc389],
                    'resolve': () => _0x1e9690
                }
            });
            const _0x4bcaab = _0x118922[_0x428847(250)](), _0x2d225e = await _0x30a9eb[_0x428847(251)](graphql, _0x4bcaab, _0x428847(252) + _0x167c7a + _0x428847(253));
            return _0x2d225e;
        }
        _0x30a9eb[_0x47f00a(251)](it, _0x47f00a(254), _0x546a89 => {
            const _0x152b64 = _0x47f00a, _0x6f1f62 = '---\ntitle: "my little pony"\ndate: "2017-09-18T23:19:51.246Z"\n---\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor sit amet velit id facilisis. Nulla viverra, eros at efficitur pulvinar, lectus orci accumsan nisi, eu blandit elit nulla nec lectus. Integer porttitor imperdiet sapien. Quisque in orci sed nisi consequat aliquam. Aenean id mollis nisi. Sed auctor odio id erat facilisis venenatis. Quisque posuere faucibus libero vel fringilla.\n\nIn quis lectus sed eros efficitur luctus. Morbi tempor, nisl eget feugiat tincidunt, sem velit vulputate enim, nec interdum augue enim nec mauris. Nulla iaculis ante sed enim placerat pretium. Nulla metus odio, facilisis vestibulum lobortis vitae, bibendum at nunc. Donec sit amet efficitur metus, in bibendum nisi. Vivamus tempus vel turpis sit amet auctor. Maecenas luctus vestibulum velit, at sagittis leo volutpat quis. Praesent posuere nec augue eget sodales. Pellentesque vitae arcu ut est varius venenatis id maximus sem. Curabitur non consectetur turpis.\n\n<!-- end -->\n\nMaecenas sodales, arcu at dictum porta, sapien leo consectetur metus, nec rhoncus quam mauris vel odio. Vivamus sed sapien in massa pulvinar feugiat vel eu tellus. Nam rutrum sem nisi, vitae viverra erat varius ut. Praesent fringilla, metus in condimentum varius, ligula augue efficitur dolor, at tempus velit velit id arcu. Suspendisse urna est, blandit ac lacus id, efficitur semper purus. Etiam dignissim suscipit lorem accumsan ultricies. Duis lacinia tortor sapien, sed malesuada leo molestie nec. Sed lobortis varius ipsum, eu lobortis metus malesuada consequat. Sed purus nulla, tempor ac tincidunt et, blandit vel ex. Vestibulum id dolor non nulla posuere consectetur quis et turpis. Cras dolor metus, elementum a enim at, semper bibendum sapien. Sed lacus augue, laoreet in metus id, volutpat malesuada mauris.\n\nSed eu gravida mauris. Suspendisse potenti. Praesent sit amet egestas mi, sed hendrerit eros. Vestibulum congue scelerisque magna, id viverra justo congue nec. Duis id dapibus metus, et dictum erat. Nulla rhoncus a mauris nec tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec elementum molestie ullamcorper. Nulla pulvinar feugiat mauris, placerat malesuada ligula rutrum non. Integer venenatis ex at dignissim fermentum. Nunc bibendum nulla in purus pharetra, non sodales justo fringilla.\n\nSed bibendum sem iaculis, pellentesque leo sed, imperdiet ante. Sed consequat mattis dui nec pretium. Donec vel consectetur est. Nam sagittis, libero vitae pretium pharetra, velit est dignissim erat, at cursus quam massa vitae ligula. Suspendisse potenti. In hac habitasse platea dictumst. Donec sit amet finibus justo. Mauris ante dolor, pulvinar vitae feugiat eu, rhoncus nec diam. In ut accumsan diam, faucibus fringilla odio. Nunc id ultricies turpis. Quisque justo quam, tristique sit amet interdum quis, facilisis at mi. Fusce porttitor vel sem ut condimentum. Praesent at libero congue, vulputate elit ut, rhoncus erat.\n            ';
            node[_0x152b64(206)] = _0x6f1f62;
            let _0x427e40;
            const _0x59538a = _0xd576db => _0x14f150([_0xd576db], '\n                    excerpt\n                    frontmatter {\n                        title\n                    }\n                ')[_0x152b64(255)](_0x5f2d3f => {
                    const _0xc2eabe = _0x152b64;
                    try {
                        _0x427e40 = _0x5f2d3f[_0xc2eabe(256)][_0xc2eabe(257)][-555 + 7 * 379 + -1049 * 2], _0x374a70[_0xc2eabe(258)](expect, _0x427e40)[_0xc2eabe(217)](), _0x374a70[_0xc2eabe(259)](expect, _0x427e40[_0xc2eabe(229)])[_0xc2eabe(260)](_0xc2eabe(261)), _0x374a70[_0xc2eabe(262)](_0x546a89);
                    } catch (_0x3bc8a9) {
                        _0x546a89[_0xc2eabe(263)](_0x3bc8a9);
                    }
                }), _0x5db5bb = jest['fn'](), _0x2a4714 = {
                    'createNode': _0x59538a,
                    'createParentChildLink': _0x5db5bb
                }, _0x5ebf6b = jest['fn']();
            _0x5ebf6b['mockReturnValue'](_0x152b64(204)), _0x30a9eb['ScBmk'](onCreateNode, {
                'node': node,
                'loadNodeContent': loadNodeContent,
                'actions': _0x2a4714,
                'createNodeId': _0x5ebf6b,
                'createContentDigest': createContentDigest
            }, { 'excerpt_separator': _0x152b64(264) });
        }), _0x30a9eb[_0x47f00a(265)](it, 'Correctly queries an excerpt for a node without an excerpt separator', _0x175e93 => {
            const _0xbc1ff8 = _0x47f00a, _0x590318 = _0xbc1ff8(266);
            node[_0xbc1ff8(206)] = _0x590318;
            let _0x37ac15;
            const _0x2dbd54 = _0x273b79 => _0x14f150([_0x273b79], _0xbc1ff8(267))[_0xbc1ff8(255)](_0x3d297e => {
                    const _0x1f492a = _0xbc1ff8;
                    try {
                        _0x37ac15 = _0x3d297e['data']['listNode'][6865 * 1 + -5791 * 1 + -1074], expect(_0x37ac15)[_0x1f492a(217)](), _0x374a70[_0x1f492a(268)](expect, _0x37ac15['excerpt'])[_0x1f492a(260)](''), _0x374a70[_0x1f492a(269)](_0x175e93);
                    } catch (_0x50b0be) {
                        _0x175e93[_0x1f492a(263)](_0x50b0be);
                    }
                }), _0x1c9cce = jest['fn'](), _0x1037e7 = {
                    'createNode': _0x2dbd54,
                    'createParentChildLink': _0x1c9cce
                }, _0x5d36ea = jest['fn']();
            _0x5d36ea[_0xbc1ff8(203)](_0xbc1ff8(204)), onCreateNode({
                'node': node,
                'loadNodeContent': loadNodeContent,
                'actions': _0x1037e7,
                'createNodeId': _0x5d36ea,
                'createContentDigest': createContentDigest
            });
        });
    });
});