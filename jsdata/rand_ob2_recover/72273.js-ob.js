function _0x1c16(_0x37e014, _0xca6db6) {
    return _0x1c16 = function (_0x31fc21, _0x1c16f1) {
        _0x31fc21 = _0x31fc21 - 377;
        let _0x5e90a3 = _0x31fc[_0x31fc21];
        return _0x5e90a3;
    }, _0x1c16(_0x37e014, _0xca6db6);
}
const {basename, extname} = require(_0x262054(388)), util = require('util'), Chunk = require(_0x262054(389)), Module = require(_0x262054(390)), {parseResource} = require(_0x262054(391)), REGEXP = /\[\\*([\w:]+)\\*\]/gi, prepareId = _0x45f232 => {
        const _0x380212 = _0x262054;
        if (typeof _0x45f232 !== _0x380212(392))
            return _0x45f232;
        if (/^"\s\+*.*\+\s*"$/[_0x380212(393)](_0x45f232)) {
            const _0x2f2ae7 = /^"\s\+*\s*(.*)\s*\+\s*"$/['exec'](_0x45f232);
            return _0x380212(394) + _0x2f2ae7[1] + _0x380212(395);
        }
        return _0x45f232[_0x380212(396)](/(^[.-]|[^a-zA-Z0-9_-])+/g, '_');
    }, hashLength = (_0x10d3d9, _0x298948, _0x493a60, _0x46f6a8) => {
        const _0x3ef41f = (_0x6d3d89, _0x3ae75d, _0x5df0f5) => {
            const _0xa4dd4d = _0x1c16;
            let _0x265c3f;
            const _0x51e11d = _0x3ae75d && parseInt(_0x3ae75d, 10);
            if (_0x51e11d && _0x298948)
                _0x265c3f = _0x298948(_0x51e11d);
            else {
                const _0x255ac0 = _0x10d3d9(_0x6d3d89, _0x3ae75d, _0x5df0f5);
                _0x265c3f = _0x51e11d ? _0x255ac0[_0xa4dd4d(397)](0, _0x51e11d) : _0x255ac0;
            }
            if (_0x493a60) {
                _0x493a60[_0xa4dd4d(398)] = !![];
                if (Array[_0xa4dd4d(399)](_0x493a60[_0x46f6a8]))
                    _0x493a60[_0x46f6a8] = [
                        ..._0x493a60[_0x46f6a8],
                        _0x265c3f
                    ];
                else
                    _0x493a60[_0x46f6a8] ? _0x493a60[_0x46f6a8] = [
                        _0x493a60[_0x46f6a8],
                        _0x265c3f
                    ] : _0x493a60[_0x46f6a8] = _0x265c3f;
            }
            return _0x265c3f;
        };
        return _0x3ef41f;
    }, replacer = (_0x507a05, _0x2d0305) => {
        const _0x22a6e3 = (_0x21f1e8, _0x19af6a, _0x27455a) => {
            const _0x2dd38b = _0x1c16;
            typeof _0x507a05 === _0x2dd38b(400) && (_0x507a05 = _0x507a05());
            if (_0x507a05 === null || _0x507a05 === undefined) {
                if (!_0x2d0305)
                    throw new Error(_0x2dd38b(401) + _0x21f1e8 + _0x2dd38b(402) + _0x27455a);
                return '';
            } else
                return '' + _0x507a05;
        };
        return _0x22a6e3;
    }, deprecationCache = new Map(), deprecatedFunction = (() => () => {
    })(), deprecated = (_0x36ba6a, _0x2f1b67, _0x13254a) => {
        const _0x69c5aa = _0x262054;
        let _0x586626 = deprecationCache['get'](_0x2f1b67);
        return _0x586626 === undefined && (_0x586626 = util['deprecate'](deprecatedFunction, _0x2f1b67, _0x13254a), deprecationCache[_0x69c5aa(403)](_0x2f1b67, _0x586626)), (..._0xced2e1) => {
            return _0x586626(), _0x36ba6a(..._0xced2e1);
        };
    }, replacePathVariables = (_0x1157c1, _0x5d3783, _0x26437c) => {
        const _0x45c641 = _0x262054, _0x3d030a = _0x5d3783[_0x45c641(404)], _0x503ade = new Map();
        if (typeof _0x5d3783[_0x45c641(405)] === 'string') {
            const {
                    path: _0x24c05a,
                    query: _0x8fce76,
                    fragment: _0x270596
                } = parseResource(_0x5d3783['filename']), _0x5cfbb4 = extname(_0x24c05a), _0x5b85fd = basename(_0x24c05a), _0x163bb4 = _0x5b85fd[_0x45c641(397)](0, _0x5b85fd[_0x45c641(406)] - _0x5cfbb4[_0x45c641(406)]), _0x43d4b9 = _0x24c05a[_0x45c641(397)](0, _0x24c05a[_0x45c641(406)] - _0x5b85fd['length']);
            _0x503ade[_0x45c641(403)](_0x45c641(407), replacer(_0x24c05a)), _0x503ade[_0x45c641(403)]('query', replacer(_0x8fce76, !![])), _0x503ade[_0x45c641(403)](_0x45c641(408), replacer(_0x270596, !![])), _0x503ade['set'](_0x45c641(388), replacer(_0x43d4b9, !![])), _0x503ade[_0x45c641(403)](_0x45c641(409), replacer(_0x5b85fd)), _0x503ade[_0x45c641(403)]('name', replacer(_0x163bb4)), _0x503ade[_0x45c641(403)](_0x45c641(410), replacer(_0x5cfbb4, !![])), _0x503ade[_0x45c641(403)](_0x45c641(411), deprecated(replacer(_0x5b85fd), _0x45c641(412), _0x45c641(413)));
        }
        if (_0x5d3783[_0x45c641(414)]) {
            const _0x41e1a1 = hashLength(replacer(_0x5d3783[_0x45c641(414)]), _0x5d3783[_0x45c641(415)], _0x26437c, _0x45c641(416));
            _0x503ade[_0x45c641(403)](_0x45c641(416), _0x41e1a1), _0x503ade[_0x45c641(403)](_0x45c641(414), deprecated(_0x41e1a1, _0x45c641(417), _0x45c641(418)));
        }
        if (_0x5d3783['chunk']) {
            const _0x225331 = _0x5d3783['chunk'], _0x454597 = _0x5d3783['contentHashType'], _0x27d32a = replacer(_0x225331['id']), _0x239308 = replacer(_0x225331[_0x45c641(419)] || _0x225331['id']), _0x2487aa = hashLength(replacer(_0x225331 instanceof Chunk ? _0x225331[_0x45c641(420)] : _0x225331[_0x45c641(414)]), _0x45c641(415) in _0x225331 ? _0x225331[_0x45c641(415)] : undefined, _0x26437c, _0x45c641(421)), _0x16e6b4 = hashLength(replacer(_0x5d3783[_0x45c641(422)] || _0x454597 && _0x225331[_0x45c641(422)] && _0x225331[_0x45c641(422)][_0x454597]), _0x5d3783[_0x45c641(423)] || (_0x45c641(423) in _0x225331 && _0x225331[_0x45c641(423)] ? _0x225331[_0x45c641(423)][_0x454597] : undefined), _0x26437c, _0x45c641(424));
            _0x503ade['set']('id', _0x27d32a), _0x503ade[_0x45c641(403)](_0x45c641(419), _0x239308), _0x503ade[_0x45c641(403)](_0x45c641(421), _0x2487aa), _0x503ade[_0x45c641(403)](_0x45c641(424), _0x16e6b4);
        }
        if (_0x5d3783[_0x45c641(425)]) {
            const _0xa35c32 = _0x5d3783[_0x45c641(425)], _0x43a492 = replacer(() => prepareId(_0xa35c32 instanceof Module ? _0x3d030a['getModuleId'](_0xa35c32) : _0xa35c32['id'])), _0x2df121 = hashLength(replacer(() => _0xa35c32 instanceof Module ? _0x3d030a[_0x45c641(426)](_0xa35c32, _0x5d3783[_0x45c641(427)]) : _0xa35c32['hash']), _0x45c641(415) in _0xa35c32 ? _0xa35c32[_0x45c641(415)] : undefined, _0x26437c, 'modulehash'), _0x390704 = hashLength(replacer(_0x5d3783[_0x45c641(422)]), undefined, _0x26437c, _0x45c641(424));
            _0x503ade[_0x45c641(403)]('id', _0x43a492), _0x503ade[_0x45c641(403)]('modulehash', _0x2df121), _0x503ade['set']('contenthash', _0x390704), _0x503ade['set'](_0x45c641(414), _0x5d3783['contentHash'] ? _0x390704 : _0x2df121), _0x503ade[_0x45c641(403)]('moduleid', deprecated(_0x43a492, _0x45c641(428), 'DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_MODULE_ID'));
        }
        return _0x5d3783[_0x45c641(429)] && _0x503ade['set'](_0x45c641(429), replacer(_0x5d3783['url'])), typeof _0x5d3783[_0x45c641(427)] === 'string' ? _0x503ade['set'](_0x45c641(427), replacer(() => prepareId(_0x5d3783[_0x45c641(427)]))) : _0x503ade[_0x45c641(403)]('runtime', replacer('_')), typeof _0x1157c1 === _0x45c641(400) && (_0x1157c1 = _0x1157c1(_0x5d3783, _0x26437c)), _0x1157c1 = _0x1157c1[_0x45c641(396)](REGEXP, (_0x19250e, _0x1e3ab1) => {
            const _0x281abb = _0x45c641;
            if (_0x1e3ab1[_0x281abb(406)] + 2 === _0x19250e['length']) {
                const _0x528319 = /^(\w+)(?::(\w+))?$/['exec'](_0x1e3ab1);
                if (!_0x528319)
                    return _0x19250e;
                const [, _0x8c537a, _0x5e751d] = _0x528319, _0x1531c9 = _0x503ade[_0x281abb(430)](_0x8c537a);
                if (_0x1531c9 !== undefined)
                    return _0x1531c9(_0x19250e, _0x5e751d, _0x1157c1);
            } else {
                if (_0x19250e[_0x281abb(431)]('[\\') && _0x19250e[_0x281abb(432)]('\\]'))
                    return '[' + _0x19250e[_0x281abb(397)](2, -2) + ']';
            }
            return _0x19250e;
        }), _0x1157c1;
    }, plugin = _0x262054(433);
class TemplatedPathPlugin {
    ['apply'](_0x16c89d) {
        const _0x272fd7 = _0x262054;
        _0x16c89d[_0x272fd7(434)][_0x272fd7(435)][_0x272fd7(436)](plugin, _0x1be4dd => {
            const _0x20e72f = _0x272fd7;
            _0x1be4dd[_0x20e72f(434)][_0x20e72f(437)][_0x20e72f(436)](plugin, replacePathVariables);
        });
    }
}
module[_0x262054(438)] = TemplatedPathPlugin;