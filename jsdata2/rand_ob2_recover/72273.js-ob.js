const {basename, extname} = require(_0x363b8f(357)), util = require(_0x363b8f(358)), Chunk = require(_0x363b8f(359)), Module = require(_0x363b8f(360)), {parseResource} = require(_0x363b8f(361)), REGEXP = /\[\\*([\w:]+)\\*\]/gi, prepareId = _0x1dfd36 => {
        const _0x248902 = _0x363b8f;
        if (typeof _0x1dfd36 !== _0x248902(362))
            return _0x1dfd36;
        if (/^"\s\+*.*\+\s*"$/['test'](_0x1dfd36)) {
            const _0x5c92c0 = /^"\s\+*\s*(.*)\s*\+\s*"$/[_0x248902(363)](_0x1dfd36);
            return _0x248902(364) + _0x5c92c0[1] + _0x248902(365);
        }
        return _0x1dfd36['replace'](/(^[.-]|[^a-zA-Z0-9_-])+/g, '_');
    }, hashLength = (_0x18c681, _0x58d19f, _0x508151, _0x2feb5f) => {
        const _0x1038e8 = (_0x19d32a, _0x271bdf, _0x36e40f) => {
            const _0x5b6a80 = _0x3cbe;
            let _0x5551c8;
            const _0x8ad811 = _0x271bdf && parseInt(_0x271bdf, 10);
            if (_0x8ad811 && _0x58d19f)
                _0x5551c8 = _0x58d19f(_0x8ad811);
            else {
                const _0x533d5c = _0x18c681(_0x19d32a, _0x271bdf, _0x36e40f);
                _0x5551c8 = _0x8ad811 ? _0x533d5c[_0x5b6a80(366)](0, _0x8ad811) : _0x533d5c;
            }
            if (_0x508151) {
                _0x508151['immutable'] = !![];
                if (Array[_0x5b6a80(367)](_0x508151[_0x2feb5f]))
                    _0x508151[_0x2feb5f] = [
                        ..._0x508151[_0x2feb5f],
                        _0x5551c8
                    ];
                else
                    _0x508151[_0x2feb5f] ? _0x508151[_0x2feb5f] = [
                        _0x508151[_0x2feb5f],
                        _0x5551c8
                    ] : _0x508151[_0x2feb5f] = _0x5551c8;
            }
            return _0x5551c8;
        };
        return _0x1038e8;
    }, replacer = (_0x356360, _0x21a4de) => {
        const _0x2da0d0 = (_0x236a90, _0x47b055, _0x1ed1f7) => {
            const _0x1acdf2 = _0x3cbe;
            typeof _0x356360 === _0x1acdf2(368) && (_0x356360 = _0x356360());
            if (_0x356360 === null || _0x356360 === undefined) {
                if (!_0x21a4de)
                    throw new Error(_0x1acdf2(369) + _0x236a90 + _0x1acdf2(370) + _0x1ed1f7);
                return '';
            } else
                return '' + _0x356360;
        };
        return _0x2da0d0;
    }, deprecationCache = new Map(), deprecatedFunction = (() => () => {
    })(), deprecated = (_0x4fb80e, _0x556010, _0x53cb2e) => {
        let _0x331ccd = deprecationCache['get'](_0x556010);
        return _0x331ccd === undefined && (_0x331ccd = util['deprecate'](deprecatedFunction, _0x556010, _0x53cb2e), deprecationCache['set'](_0x556010, _0x331ccd)), (..._0x2ffb03) => {
            return _0x331ccd(), _0x4fb80e(..._0x2ffb03);
        };
    }, replacePathVariables = (_0x4e9281, _0x539112, _0x539abf) => {
        const _0x1a0d85 = _0x363b8f, _0x1caa20 = _0x539112['chunkGraph'], _0x31c5d0 = new Map();
        if (typeof _0x539112[_0x1a0d85(371)] === 'string') {
            const {
                    path: _0xf8687c,
                    query: _0xfda20b,
                    fragment: _0x4e31d0
                } = parseResource(_0x539112[_0x1a0d85(371)]), _0x14438d = extname(_0xf8687c), _0x3a8525 = basename(_0xf8687c), _0x2916bc = _0x3a8525[_0x1a0d85(366)](0, _0x3a8525['length'] - _0x14438d[_0x1a0d85(372)]), _0x170c3d = _0xf8687c[_0x1a0d85(366)](0, _0xf8687c[_0x1a0d85(372)] - _0x3a8525[_0x1a0d85(372)]);
            _0x31c5d0[_0x1a0d85(373)](_0x1a0d85(374), replacer(_0xf8687c)), _0x31c5d0[_0x1a0d85(373)](_0x1a0d85(375), replacer(_0xfda20b, !![])), _0x31c5d0[_0x1a0d85(373)]('fragment', replacer(_0x4e31d0, !![])), _0x31c5d0[_0x1a0d85(373)](_0x1a0d85(357), replacer(_0x170c3d, !![])), _0x31c5d0['set'](_0x1a0d85(376), replacer(_0x3a8525)), _0x31c5d0[_0x1a0d85(373)](_0x1a0d85(377), replacer(_0x2916bc)), _0x31c5d0['set']('ext', replacer(_0x14438d, !![])), _0x31c5d0[_0x1a0d85(373)](_0x1a0d85(378), deprecated(replacer(_0x3a8525), _0x1a0d85(379), _0x1a0d85(380)));
        }
        if (_0x539112['hash']) {
            const _0x1ff030 = hashLength(replacer(_0x539112['hash']), _0x539112['hashWithLength'], _0x539abf, _0x1a0d85(381));
            _0x31c5d0[_0x1a0d85(373)]('fullhash', _0x1ff030), _0x31c5d0[_0x1a0d85(373)](_0x1a0d85(382), deprecated(_0x1ff030, _0x1a0d85(383), _0x1a0d85(384)));
        }
        if (_0x539112[_0x1a0d85(385)]) {
            const _0x5454ba = _0x539112[_0x1a0d85(385)], _0x58e2bf = _0x539112[_0x1a0d85(386)], _0x4bad6c = replacer(_0x5454ba['id']), _0x351c7e = replacer(_0x5454ba[_0x1a0d85(377)] || _0x5454ba['id']), _0x332af1 = hashLength(replacer(_0x5454ba instanceof Chunk ? _0x5454ba[_0x1a0d85(387)] : _0x5454ba[_0x1a0d85(382)]), 'hashWithLength' in _0x5454ba ? _0x5454ba[_0x1a0d85(388)] : undefined, _0x539abf, _0x1a0d85(389)), _0xbd07b4 = hashLength(replacer(_0x539112[_0x1a0d85(390)] || _0x58e2bf && _0x5454ba['contentHash'] && _0x5454ba[_0x1a0d85(390)][_0x58e2bf]), _0x539112[_0x1a0d85(391)] || (_0x1a0d85(391) in _0x5454ba && _0x5454ba[_0x1a0d85(391)] ? _0x5454ba[_0x1a0d85(391)][_0x58e2bf] : undefined), _0x539abf, _0x1a0d85(392));
            _0x31c5d0[_0x1a0d85(373)]('id', _0x4bad6c), _0x31c5d0[_0x1a0d85(373)](_0x1a0d85(377), _0x351c7e), _0x31c5d0[_0x1a0d85(373)](_0x1a0d85(389), _0x332af1), _0x31c5d0[_0x1a0d85(373)]('contenthash', _0xbd07b4);
        }
        if (_0x539112[_0x1a0d85(393)]) {
            const _0x5dddea = _0x539112[_0x1a0d85(393)], _0x318833 = replacer(() => prepareId(_0x5dddea instanceof Module ? _0x1caa20[_0x1a0d85(394)](_0x5dddea) : _0x5dddea['id'])), _0x28f77e = hashLength(replacer(() => _0x5dddea instanceof Module ? _0x1caa20['getRenderedModuleHash'](_0x5dddea, _0x539112[_0x1a0d85(395)]) : _0x5dddea[_0x1a0d85(382)]), _0x1a0d85(388) in _0x5dddea ? _0x5dddea[_0x1a0d85(388)] : undefined, _0x539abf, _0x1a0d85(396)), _0x2ba5ba = hashLength(replacer(_0x539112[_0x1a0d85(390)]), undefined, _0x539abf, _0x1a0d85(392));
            _0x31c5d0[_0x1a0d85(373)]('id', _0x318833), _0x31c5d0['set'](_0x1a0d85(396), _0x28f77e), _0x31c5d0['set'](_0x1a0d85(392), _0x2ba5ba), _0x31c5d0[_0x1a0d85(373)](_0x1a0d85(382), _0x539112[_0x1a0d85(390)] ? _0x2ba5ba : _0x28f77e), _0x31c5d0['set'](_0x1a0d85(397), deprecated(_0x318833, '[moduleid] is now [id]', 'DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_MODULE_ID'));
        }
        return _0x539112[_0x1a0d85(398)] && _0x31c5d0['set'](_0x1a0d85(398), replacer(_0x539112[_0x1a0d85(398)])), typeof _0x539112[_0x1a0d85(395)] === 'string' ? _0x31c5d0[_0x1a0d85(373)](_0x1a0d85(395), replacer(() => prepareId(_0x539112[_0x1a0d85(395)]))) : _0x31c5d0[_0x1a0d85(373)](_0x1a0d85(395), replacer('_')), typeof _0x4e9281 === 'function' && (_0x4e9281 = _0x4e9281(_0x539112, _0x539abf)), _0x4e9281 = _0x4e9281['replace'](REGEXP, (_0x4ec7e3, _0x1dbe5b) => {
            const _0x544f0e = _0x1a0d85;
            if (_0x1dbe5b[_0x544f0e(372)] + 2 === _0x4ec7e3[_0x544f0e(372)]) {
                const _0x29966d = /^(\w+)(?::(\w+))?$/[_0x544f0e(363)](_0x1dbe5b);
                if (!_0x29966d)
                    return _0x4ec7e3;
                const [, _0x13117f, _0x5c0add] = _0x29966d, _0x297f17 = _0x31c5d0[_0x544f0e(399)](_0x13117f);
                if (_0x297f17 !== undefined)
                    return _0x297f17(_0x4ec7e3, _0x5c0add, _0x4e9281);
            } else {
                if (_0x4ec7e3[_0x544f0e(400)]('[\\') && _0x4ec7e3[_0x544f0e(401)]('\\]'))
                    return '[' + _0x4ec7e3[_0x544f0e(366)](2, -2) + ']';
            }
            return _0x4ec7e3;
        }), _0x4e9281;
    }, plugin = 'TemplatedPathPlugin';
class TemplatedPathPlugin {
    [_0x363b8f(402)](_0x24f5c6) {
        const _0x4af494 = _0x363b8f;
        _0x24f5c6[_0x4af494(403)][_0x4af494(404)][_0x4af494(405)](plugin, _0x33175e => {
            const _0x5af3fa = _0x4af494;
            _0x33175e[_0x5af3fa(403)]['assetPath']['tap'](plugin, replacePathVariables);
        });
    }
}
module[_0x363b8f(406)] = TemplatedPathPlugin;