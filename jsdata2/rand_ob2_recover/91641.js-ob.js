const _ = require(_0x398223(319)), {onCreateNode} = require(_0x398223(320)), {graphql} = require(_0x398223(321)), {createContentDigest} = require(_0x398223(322));
let node, actions, createNodeId;
beforeEach(() => {
    const _0x4413e9 = _0x398223;
    node = {
        'id': _0x4413e9(323),
        'children': [],
        'internal': {
            'contentDigest': _0x4413e9(323),
            'mediaType': _0x4413e9(324)
        }
    }, actions = {
        'createNode': jest['fn'](),
        'createParentChildLink': jest['fn']()
    }, createNodeId = jest['fn']()[_0x4413e9(325)](_0x4413e9(326));
});
function _0x55bc(_0x237021, _0x17bfec) {
    return _0x55bc = function (_0x8d4e42, _0x55bc4d) {
        _0x8d4e42 = _0x8d4e42 - 308;
        let _0x1ba0b1 = _0x8d4e[_0x8d4e42];
        return _0x1ba0b1;
    }, _0x55bc(_0x237021, _0x17bfec);
}
const loadNodeContent = _0x45c8ce => Promise[_0x398223(327)](_0x45c8ce['content']);
describe(_0x398223(328), () => {
    const _0x2dd256 = _0x398223;
    describe(_0x2dd256(329), () => {
        const _0xd01c00 = _0x2dd256;
        it(_0xd01c00(330), async () => {
            const _0x3cc83d = _0xd01c00, _0x5d7e55 = _0x3cc83d(331);
            node[_0x3cc83d(332)] = _0x5d7e55, await onCreateNode({
                'node': node,
                'loadNodeContent': loadNodeContent,
                'actions': actions,
                'createNodeId': createNodeId,
                'createContentDigest': createContentDigest
            })['then'](() => {
                const _0x3e82d6 = _0x3cc83d;
                expect(actions[_0x3e82d6(333)][_0x3e82d6(334)]['calls'])[_0x3e82d6(335)](), expect(_[_0x3e82d6(336)](actions[_0x3e82d6(333)][_0x3e82d6(334)][_0x3e82d6(337)][0][0]['frontmatter'][_0x3e82d6(338)]))[_0x3e82d6(339)](), expect(actions[_0x3e82d6(340)]['mock']['calls'])['toMatchSnapshot'](), expect(actions['createNode'])[_0x3e82d6(341)](1), expect(actions[_0x3e82d6(340)])[_0x3e82d6(341)](1);
            });
        }), it(_0xd01c00(342), async () => {
            const _0x2caf4c = _0xd01c00, _0x3eb717 = '---\ntitle: "my little pony"\ndate: "2017-09-18T23:19:51.246Z"\n---\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor sit amet velit id facilisis. Nulla viverra, eros at efficitur pulvinar, lectus orci accumsan nisi, eu blandit elit nulla nec lectus. Integer porttitor imperdiet sapien. Quisque in orci sed nisi consequat aliquam. Aenean id mollis nisi. Sed auctor odio id erat facilisis venenatis. Quisque posuere faucibus libero vel fringilla.\n\nIn quis lectus sed eros efficitur luctus. Morbi tempor, nisl eget feugiat tincidunt, sem velit vulputate enim, nec interdum augue enim nec mauris. Nulla iaculis ante sed enim placerat pretium. Nulla metus odio, facilisis vestibulum lobortis vitae, bibendum at nunc. Donec sit amet efficitur metus, in bibendum nisi. Vivamus tempus vel turpis sit amet auctor. Maecenas luctus vestibulum velit, at sagittis leo volutpat quis. Praesent posuere nec augue eget sodales. Pellentesque vitae arcu ut est varius venenatis id maximus sem. Curabitur non consectetur turpis.\n\n<!-- end -->\n\nMaecenas sodales, arcu at dictum porta, sapien leo consectetur metus, nec rhoncus quam mauris vel odio. Vivamus sed sapien in massa pulvinar feugiat vel eu tellus. Nam rutrum sem nisi, vitae viverra erat varius ut. Praesent fringilla, metus in condimentum varius, ligula augue efficitur dolor, at tempus velit velit id arcu. Suspendisse urna est, blandit ac lacus id, efficitur semper purus. Etiam dignissim suscipit lorem accumsan ultricies. Duis lacinia tortor sapien, sed malesuada leo molestie nec. Sed lobortis varius ipsum, eu lobortis metus malesuada consequat. Sed purus nulla, tempor ac tincidunt et, blandit vel ex. Vestibulum id dolor non nulla posuere consectetur quis et turpis. Cras dolor metus, elementum a enim at, semper bibendum sapien. Sed lacus augue, laoreet in metus id, volutpat malesuada mauris.\n\nSed eu gravida mauris. Suspendisse potenti. Praesent sit amet egestas mi, sed hendrerit eros. Vestibulum congue scelerisque magna, id viverra justo congue nec. Duis id dapibus metus, et dictum erat. Nulla rhoncus a mauris nec tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec elementum molestie ullamcorper. Nulla pulvinar feugiat mauris, placerat malesuada ligula rutrum non. Integer venenatis ex at dignissim fermentum. Nunc bibendum nulla in purus pharetra, non sodales justo fringilla.\n\nSed bibendum sem iaculis, pellentesque leo sed, imperdiet ante. Sed consequat mattis dui nec pretium. Donec vel consectetur est. Nam sagittis, libero vitae pretium pharetra, velit est dignissim erat, at cursus quam massa vitae ligula. Suspendisse potenti. In hac habitasse platea dictumst. Donec sit amet finibus justo. Mauris ante dolor, pulvinar vitae feugiat eu, rhoncus nec diam. In ut accumsan diam, faucibus fringilla odio. Nunc id ultricies turpis. Quisque justo quam, tristique sit amet interdum quis, facilisis at mi. Fusce porttitor vel sem ut condimentum. Praesent at libero congue, vulputate elit ut, rhoncus erat.\n            ';
            node[_0x2caf4c(332)] = _0x3eb717, await onCreateNode({
                'node': node,
                'loadNodeContent': loadNodeContent,
                'actions': actions,
                'createNodeId': createNodeId,
                'createContentDigest': createContentDigest
            }, { 'excerpt_separator': _0x2caf4c(343) })[_0x2caf4c(344)](() => {
                const _0x387659 = _0x2caf4c;
                expect(actions[_0x387659(333)]['mock']['calls'])[_0x387659(335)](), expect(_[_0x387659(336)](actions[_0x387659(333)][_0x387659(334)][_0x387659(337)][0][0][_0x387659(345)]))[_0x387659(339)](), expect(actions[_0x387659(333)][_0x387659(334)][_0x387659(337)][0][0][_0x387659(345)])[_0x387659(346)][_0x387659(347)](0), expect(actions[_0x387659(340)][_0x387659(334)][_0x387659(337)])[_0x387659(335)](), expect(actions[_0x387659(333)])[_0x387659(341)](1), expect(actions[_0x387659(340)])[_0x387659(341)](1);
            });
        });
    }), describe('date formatting', () => {
        const _0x28f2f3 = _0x2dd256, _0x4b0c16 = _0x43b023 => _0x28f2f3(348) + _0x43b023 + _0x28f2f3(349);
        it(_0x28f2f3(350), async () => {
            const _0x318973 = _0x28f2f3, _0x486b27 = _0x318973(351);
            node[_0x318973(332)] = _0x4b0c16(_0x486b27);
            const _0x40077d = await onCreateNode({
                'node': node,
                'actions': actions,
                'createNodeId': createNodeId,
                'loadNodeContent': loadNodeContent,
                'createContentDigest': createContentDigest
            });
            expect(_0x40077d[_0x318973(352)]['date'])['toEqual'](new Date(_0x486b27)[_0x318973(353)]());
        });
    }), describe(_0x2dd256(354), () => {
        const _0x5a093f = _0x2dd256;
        async function _0x1b8073(_0x45d300, _0x1562de) {
            const _0x508f27 = _0x55bc, {createSchemaComposer: _0x309dc0} = require(_0x508f27(355)), {addInferredFields: _0x319720} = require(_0x508f27(356)), {addNodes: _0x4cdc4f} = require('../../../gatsby/src/schema/infer/inference-metadata'), {getExampleObject: _0x2cdca2} = require(_0x508f27(357)), _0x21177c = _0x309dc0(), _0x4bca85 = _0x508f27(358), _0x3ffcd8 = _0x21177c['createObjectTC'](_0x4bca85), _0x1deac2 = _0x4cdc4f({ 'typeName': _0x4bca85 }, _0x45d300);
            _0x319720({
                'schemaComposer': _0x21177c,
                'typeComposer': _0x3ffcd8,
                'exampleValue': _0x2cdca2(_0x1deac2)
            }), _0x21177c['Query'][_0x508f27(359)]({
                'listNode': {
                    'type': [_0x3ffcd8],
                    'resolve': () => _0x45d300
                }
            });
            const _0x131c75 = _0x21177c['buildSchema'](), _0x245e7b = await graphql(_0x131c75, _0x508f27(360) + _0x1562de + _0x508f27(361));
            return _0x245e7b;
        }
        it('Correctly queries an excerpt for a node with an excerpt separator', _0x4184b3 => {
            const _0x581cf2 = _0x55bc, _0x2d4155 = _0x581cf2(362);
            node['content'] = _0x2d4155;
            let _0x3f7fae;
            const _0x3b2f57 = _0x59f407 => _0x1b8073([_0x59f407], '\n                    excerpt\n                    frontmatter {\n                        title\n                    }\n                ')['then'](_0x1ccf25 => {
                    const _0x203329 = _0x581cf2;
                    try {
                        _0x3f7fae = _0x1ccf25['data'][_0x203329(363)][0], expect(_0x3f7fae)[_0x203329(335)](), expect(_0x3f7fae[_0x203329(345)])[_0x203329(364)](_0x203329(365)), _0x4184b3();
                    } catch (_0x287f84) {
                        _0x4184b3[_0x203329(366)](_0x287f84);
                    }
                }), _0x515c28 = jest['fn'](), _0x2f1f24 = {
                    'createNode': _0x3b2f57,
                    'createParentChildLink': _0x515c28
                }, _0x7e3afc = jest['fn']();
            _0x7e3afc['mockReturnValue']('uuid-from-gatsby'), onCreateNode({
                'node': node,
                'loadNodeContent': loadNodeContent,
                'actions': _0x2f1f24,
                'createNodeId': _0x7e3afc,
                'createContentDigest': createContentDigest
            }, { 'excerpt_separator': _0x581cf2(343) });
        }), it(_0x5a093f(367), _0x491a92 => {
            const _0x1461e6 = _0x5a093f, _0x4d861b = _0x1461e6(368);
            node[_0x1461e6(332)] = _0x4d861b;
            let _0x165063;
            const _0x50d9fd = _0x1a4fc0 => _0x1b8073([_0x1a4fc0], _0x1461e6(369))[_0x1461e6(344)](_0x337044 => {
                    const _0x302256 = _0x1461e6;
                    try {
                        _0x165063 = _0x337044['data'][_0x302256(363)][0], expect(_0x165063)[_0x302256(335)](), expect(_0x165063['excerpt'])['toMatch'](''), _0x491a92();
                    } catch (_0x207cea) {
                        _0x491a92['fail'](_0x207cea);
                    }
                }), _0x2d76e3 = jest['fn'](), _0x1b4cc2 = {
                    'createNode': _0x50d9fd,
                    'createParentChildLink': _0x2d76e3
                }, _0x2a96c0 = jest['fn']();
            _0x2a96c0[_0x1461e6(325)](_0x1461e6(326)), onCreateNode({
                'node': node,
                'loadNodeContent': loadNodeContent,
                'actions': _0x1b4cc2,
                'createNodeId': _0x2a96c0,
                'createContentDigest': createContentDigest
            });
        });
    });
});