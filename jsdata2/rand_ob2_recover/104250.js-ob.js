function _0x4aae(_0xa3e95b, _0x47c053) {
    return _0x4aae = function (_0x4bd57a, _0x4aae27) {
        _0x4bd57a = _0x4bd57a - 275;
        let _0x586a82 = _0x4bd5[_0x4bd57a];
        return _0x586a82;
    }, _0x4aae(_0xa3e95b, _0x47c053);
}
const {isBlockComment} = require('./utils.js'), ignoredProperties = new Set([
        _0x44212e(286),
        'raw',
        'comments',
        'leadingComments',
        _0x44212e(287),
        _0x44212e(288),
        _0x44212e(289),
        _0x44212e(290),
        _0x44212e(291),
        _0x44212e(292),
        'flags',
        _0x44212e(293),
        _0x44212e(294)
    ]), removeTemplateElementsValue = _0x2f4e94 => {
        const _0x602bad = _0x44212e;
        for (const _0x424a06 of _0x2f4e94[_0x602bad(295)]) {
            delete _0x424a06[_0x602bad(296)];
        }
    };
function clean(_0x165dbb, _0x5bfa89, _0x5641b6) {
    const _0x4c4ce9 = _0x44212e;
    _0x165dbb['type'] === _0x4c4ce9(297) && delete _0x5bfa89[_0x4c4ce9(298)];
    (_0x165dbb[_0x4c4ce9(299)] === 'BigIntLiteral' || _0x165dbb['type'] === _0x4c4ce9(300)) && (_0x5bfa89[_0x4c4ce9(296)] && (_0x5bfa89['value'] = _0x5bfa89[_0x4c4ce9(296)]['toLowerCase']()));
    (_0x165dbb['type'] === _0x4c4ce9(301) || _0x165dbb[_0x4c4ce9(299)] === _0x4c4ce9(302)) && (_0x5bfa89[_0x4c4ce9(303)] && (_0x5bfa89['bigint'] = _0x5bfa89['bigint'][_0x4c4ce9(304)]()));
    _0x165dbb[_0x4c4ce9(299)] === _0x4c4ce9(305) && (_0x5bfa89[_0x4c4ce9(296)] = Number(_0x5bfa89[_0x4c4ce9(296)]));
    _0x165dbb['type'] === _0x4c4ce9(302) && _0x5bfa89[_0x4c4ce9(306)] && (_0x5bfa89[_0x4c4ce9(306)] = Number(_0x5bfa89['decimal']));
    if (_0x165dbb['type'] === 'EmptyStatement')
        return null;
    if (_0x165dbb[_0x4c4ce9(299)] === _0x4c4ce9(307))
        return null;
    if (_0x165dbb[_0x4c4ce9(299)] === _0x4c4ce9(308) && (_0x165dbb['expression'][_0x4c4ce9(299)] === _0x4c4ce9(302) || _0x165dbb[_0x4c4ce9(309)][_0x4c4ce9(299)] === _0x4c4ce9(310)) && _0x165dbb[_0x4c4ce9(309)][_0x4c4ce9(296)] === ' ')
        return null;
    (_0x165dbb[_0x4c4ce9(299)] === _0x4c4ce9(311) || _0x165dbb[_0x4c4ce9(299)] === 'ObjectProperty' || _0x165dbb[_0x4c4ce9(299)] === _0x4c4ce9(312) || _0x165dbb['type'] === 'ClassProperty' || _0x165dbb[_0x4c4ce9(299)] === _0x4c4ce9(313) || _0x165dbb['type'] === 'PropertyDefinition' || _0x165dbb[_0x4c4ce9(299)] === _0x4c4ce9(314) || _0x165dbb[_0x4c4ce9(299)] === _0x4c4ce9(315) || _0x165dbb[_0x4c4ce9(299)] === _0x4c4ce9(316)) && typeof _0x165dbb[_0x4c4ce9(317)] === _0x4c4ce9(318) && _0x165dbb[_0x4c4ce9(317)] && (_0x165dbb['key'][_0x4c4ce9(299)] === _0x4c4ce9(302) || _0x165dbb[_0x4c4ce9(317)]['type'] === 'NumericLiteral' || _0x165dbb[_0x4c4ce9(317)][_0x4c4ce9(299)] === _0x4c4ce9(310) || _0x165dbb[_0x4c4ce9(317)][_0x4c4ce9(299)] === _0x4c4ce9(319)) && delete _0x5bfa89[_0x4c4ce9(317)];
    if (_0x165dbb[_0x4c4ce9(299)] === _0x4c4ce9(320) && _0x165dbb[_0x4c4ce9(321)][_0x4c4ce9(322)][_0x4c4ce9(322)] === _0x4c4ce9(323) && _0x165dbb['openingElement'][_0x4c4ce9(324)][_0x4c4ce9(325)](_0x3f6252 => _0x3f6252[_0x4c4ce9(322)]['name'] === _0x4c4ce9(326)))
        for (const {
                    type: _0x1090d5,
                    expression: _0x2d9589
                } of _0x5bfa89['children']) {
            _0x1090d5 === _0x4c4ce9(308) && _0x2d9589[_0x4c4ce9(299)] === _0x4c4ce9(327) && removeTemplateElementsValue(_0x2d9589);
        }
    _0x165dbb[_0x4c4ce9(299)] === _0x4c4ce9(328) && _0x165dbb['name'][_0x4c4ce9(322)] === _0x4c4ce9(329) && _0x165dbb['value'][_0x4c4ce9(299)] === _0x4c4ce9(308) && _0x165dbb[_0x4c4ce9(296)][_0x4c4ce9(309)][_0x4c4ce9(299)] === _0x4c4ce9(327) && removeTemplateElementsValue(_0x5bfa89[_0x4c4ce9(296)]['expression']);
    _0x165dbb[_0x4c4ce9(299)] === _0x4c4ce9(328) && _0x165dbb[_0x4c4ce9(296)] && _0x165dbb[_0x4c4ce9(296)][_0x4c4ce9(299)] === _0x4c4ce9(302) && /["']|&quot;|&apos;/[_0x4c4ce9(330)](_0x165dbb['value'][_0x4c4ce9(296)]) && (_0x5bfa89['value'][_0x4c4ce9(296)] = _0x5bfa89[_0x4c4ce9(296)]['value'][_0x4c4ce9(331)](/["']|&quot;|&apos;/g, '"'));
    const _0x98922f = _0x165dbb[_0x4c4ce9(309)] || _0x165dbb[_0x4c4ce9(332)];
    if (_0x165dbb[_0x4c4ce9(299)] === _0x4c4ce9(333) && _0x98922f['type'] === _0x4c4ce9(334) && _0x98922f[_0x4c4ce9(332)][_0x4c4ce9(322)] === _0x4c4ce9(335) && _0x98922f[_0x4c4ce9(336)][_0x4c4ce9(337)] === 1) {
        const _0x2ce8be = _0x165dbb['expression'][_0x4c4ce9(336)][0][_0x4c4ce9(338)];
        for (const [_0x57781a, _0x1f189e] of _0x5bfa89[_0x4c4ce9(309)]['arguments'][0][_0x4c4ce9(338)][_0x4c4ce9(339)]()) {
            switch (_0x2ce8be[_0x57781a][_0x4c4ce9(317)]['name']) {
            case _0x4c4ce9(340):
                _0x1f189e['value'][_0x4c4ce9(299)] === _0x4c4ce9(341) && removeTemplateElementsValue(_0x1f189e['value'][_0x4c4ce9(342)][0]);
                break;
            case 'template':
                _0x1f189e['value']['type'] === _0x4c4ce9(327) && removeTemplateElementsValue(_0x1f189e[_0x4c4ce9(296)]);
                break;
            }
        }
    }
    _0x165dbb['type'] === 'TaggedTemplateExpression' && (_0x165dbb['tag']['type'] === _0x4c4ce9(343) || _0x165dbb[_0x4c4ce9(344)]['type'] === _0x4c4ce9(319) && (_0x165dbb[_0x4c4ce9(344)][_0x4c4ce9(322)] === 'gql' || _0x165dbb['tag']['name'] === 'graphql' || _0x165dbb[_0x4c4ce9(344)]['name'] === 'css' || _0x165dbb[_0x4c4ce9(344)][_0x4c4ce9(322)] === 'md' || _0x165dbb[_0x4c4ce9(344)][_0x4c4ce9(322)] === _0x4c4ce9(345) || _0x165dbb[_0x4c4ce9(344)][_0x4c4ce9(322)] === 'html') || _0x165dbb[_0x4c4ce9(344)][_0x4c4ce9(299)] === _0x4c4ce9(334)) && removeTemplateElementsValue(_0x5bfa89[_0x4c4ce9(346)]);
    if (_0x165dbb[_0x4c4ce9(299)] === 'TemplateLiteral') {
        const _0x1f1ffd = _0x165dbb[_0x4c4ce9(347)] && _0x165dbb[_0x4c4ce9(347)][_0x4c4ce9(325)](_0x1aad36 => isBlockComment(_0x1aad36) && [
            _0x4c4ce9(348),
            _0x4c4ce9(349)
        ][_0x4c4ce9(325)](_0x1623a5 => _0x1aad36[_0x4c4ce9(296)] === ' ' + _0x1623a5 + ' '));
        (_0x1f1ffd || _0x5641b6[_0x4c4ce9(299)] === _0x4c4ce9(334) && _0x5641b6['callee'][_0x4c4ce9(322)] === _0x4c4ce9(350) || !_0x165dbb[_0x4c4ce9(347)]) && removeTemplateElementsValue(_0x5bfa89);
    }
    _0x165dbb['type'] === 'InterpreterDirective' && (_0x5bfa89[_0x4c4ce9(296)] = _0x5bfa89['value'][_0x4c4ce9(351)]());
    if ((_0x165dbb[_0x4c4ce9(299)] === _0x4c4ce9(352) || _0x165dbb[_0x4c4ce9(299)] === _0x4c4ce9(353)) && _0x165dbb[_0x4c4ce9(354)][_0x4c4ce9(337)] === 1)
        return _0x5bfa89['types'][0];
}
clean['ignoredProperties'] = ignoredProperties, module[_0x44212e(355)] = clean;