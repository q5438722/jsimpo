const path = require(_0xb02ab9(484)), hash = require('hash-sum'), qs = require('querystring'), plugin = require(_0xb02ab9(485)), selectBlock = require(_0xb02ab9(486)), loaderUtils = require(_0xb02ab9(487)), {attrsToQuery} = require(_0xb02ab9(488)), {parse} = require('@vue/component-compiler-utils'), genStylesCode = require(_0xb02ab9(489)), {genHotReloadCode} = require(_0xb02ab9(490)), genCustomBlocksCode = require('./codegen/customBlocks'), componentNormalizerPath = require[_0xb02ab9(491)](_0xb02ab9(492)), {NS} = require(_0xb02ab9(485));
let errorEmitted = ![], modules;
function loadTemplateCompiler(_0x2db484) {
    const _0x5743ae = _0xb02ab9;
    try {
        return require(_0x5743ae(493));
    } catch (_0x5ac71a) {
        /version mismatch/[_0x5743ae(494)](_0x5ac71a[_0x5743ae(495)]()) ? _0x2db484[_0x5743ae(496)](_0x5ac71a) : _0x2db484[_0x5743ae(496)](new Error(_0x5743ae(497) + _0x5743ae(498)));
    }
}
module[_0xb02ab9(499)] = function (_0x112d93) {
    const _0x299899 = _0xb02ab9, _0x5e79fd = this;
    !errorEmitted && !_0x5e79fd['thread-loader'] && !_0x5e79fd[NS] && (_0x5e79fd[_0x299899(496)](new Error(_0x299899(500) + _0x299899(501))), errorEmitted = !![]);
    const _0x55bc36 = _0x52093b => loaderUtils[_0x299899(502)](_0x5e79fd, _0x52093b), {
            target: _0x29c94b,
            request: _0xba6d2f,
            minimize: _0x3329bf,
            sourceMap: _0x36c678,
            rootContext: _0x140ce5,
            resourcePath: _0x4146fc,
            resourceQuery: _0x592671
        } = _0x5e79fd, _0x2a3854 = _0x592671[_0x299899(503)](1), _0x28bd11 = '&' + _0x2a3854, _0x236638 = qs[_0x299899(504)](_0x2a3854), _0x53b170 = loaderUtils[_0x299899(505)](_0x5e79fd) || {}, _0x1d70eb = _0x29c94b === 'node', _0x531967 = !!_0x53b170[_0x299899(506)], _0x1017a5 = _0x53b170[_0x299899(507)] || _0x3329bf || process[_0x299899(508)]['NODE_ENV'] === _0x299899(509), _0xd9e33c = path['basename'](_0x4146fc), _0x26d471 = _0x140ce5 || process[_0x299899(510)](), _0x233e3d = path[_0x299899(511)](path[_0x299899(512)](_0x26d471, _0x4146fc)), _0x7f68cc = parse({
            'source': _0x112d93,
            'compiler': _0x53b170[_0x299899(513)] || loadTemplateCompiler(_0x5e79fd),
            'filename': _0xd9e33c,
            'sourceRoot': _0x233e3d,
            'needMap': _0x36c678,
            'isAppService': _0x53b170[_0x299899(514)],
            'isAppView': _0x53b170[_0x299899(515)],
            'isAppNVue': _0x53b170[_0x299899(516)]
        });
    if (_0x53b170['isH5TreeShaking']) {
        const _0x33f4a2 = /^win/[_0x299899(494)](process[_0x299899(517)]), _0x1f9145 = _0x3e9216 => _0x33f4a2 ? _0x3e9216['replace'](/\\/g, '/') : _0x3e9216;
        !_0x53b170['compilerOptions'] && (_0x53b170['compilerOptions'] = {});
        _0x53b170[_0x299899(518)][_0x299899(519)] = _0x1f9145(_0x4146fc);
        !modules && _0x53b170[_0x299899(518)] && _0x53b170[_0x299899(518)]['modules'] && (modules = _0x53b170['compilerOptions'][_0x299899(520)]);
        const _0x2dec43 = _0x1f9145(require(_0x299899(521))[_0x299899(522)]);
        if (_0x1f9145(this[_0x299899(523)])[_0x299899(524)](_0x2dec43) === 0)
            _0x7f68cc[_0x299899(525)][_0x299899(526)] = 0, _0x53b170[_0x299899(518)] && delete _0x53b170['compilerOptions'][_0x299899(520)];
        else
            _0x53b170['compilerOptions'] && (_0x53b170[_0x299899(518)][_0x299899(520)] = modules);
    }
    if (_0x236638['type'])
        return selectBlock(_0x7f68cc, _0x5e79fd, _0x236638, !!_0x53b170[_0x299899(527)]);
    const _0x904db6 = path['relative'](process[_0x299899(508)][_0x299899(528)] || _0x26d471, _0x4146fc)[_0x299899(529)](/^(\.\.[\/\\])+/, ''), _0x357c64 = _0x904db6['replace'](/\\/g, '/') + _0x592671, _0x2ea391 = hash(_0x1017a5 ? _0x357c64 + '\n' + _0x112d93 : _0x357c64), _0x1fb1b8 = _0x7f68cc[_0x299899(525)]['some'](_0x19b862 => _0x19b862['scoped']), _0x38dc60 = _0x7f68cc[_0x299899(530)] && _0x7f68cc[_0x299899(530)]['attrs'][_0x299899(531)], _0x33680d = !_0x1d70eb && !_0x1017a5 && (_0x7f68cc[_0x299899(532)] || _0x7f68cc[_0x299899(530)]) && _0x53b170[_0x299899(533)] !== ![];
    let _0x274cd2, _0xf1b943 = _0x299899(534), _0x260554;
    if (_0x7f68cc[_0x299899(530)]) {
        _0x274cd2 = _0x53b170[_0x299899(516)] && !!(_0x7f68cc['template'][_0x299899(535)] && _0x7f68cc[_0x299899(530)][_0x299899(535)]['recyclable']);
        const _0x19a74f = _0x7f68cc[_0x299899(530)][_0x299899(522)] || _0x4146fc, _0x2e8e6c = _0x299899(536) + _0x2ea391, _0x2ce6df = _0x1fb1b8 ? '&scoped=true' : '', _0x1c698b = attrsToQuery(_0x7f68cc[_0x299899(530)]['attrs']), _0x5b7a33 = _0x299899(537) + _0x2e8e6c + _0x2ce6df + _0x1c698b + _0x28bd11, _0x459982 = _0x260554 = _0x55bc36(_0x19a74f + _0x5b7a33);
        _0xf1b943 = _0x299899(538) + _0x459982;
    }
    let _0x1bc683 = _0x299899(539);
    if (_0x7f68cc[_0x299899(532)]) {
        const _0x38ecd6 = _0x7f68cc[_0x299899(532)]['src'] || _0x4146fc, _0x11e460 = attrsToQuery(_0x7f68cc['script'][_0x299899(535)], 'js'), _0x265a69 = '?vue&type=script' + _0x11e460 + _0x28bd11, _0xc507f6 = _0x55bc36(_0x38ecd6 + _0x265a69);
        _0x1bc683 = _0x299899(540) + _0xc507f6 + '\n' + ('export * from ' + _0xc507f6);
    }
    let _0x27fd7e = 'var renderjs';
    if ((_0x53b170['isAppView'] || _0x53b170[_0x299899(541)]) && _0x7f68cc[_0x299899(542)]) {
        const _0x512da7 = _0x7f68cc[_0x299899(542)]['src'] || _0x4146fc, _0x4755e7 = attrsToQuery(_0x7f68cc[_0x299899(542)][_0x299899(535)], 'js'), _0x4c4fad = _0x299899(543) + _0x4755e7 + _0x28bd11, _0x55859e = _0x55bc36(_0x512da7 + _0x4c4fad);
        _0x27fd7e = _0x299899(544) + _0x55859e + '\n' + ('renderjs.__module = \'' + _0x7f68cc[_0x299899(542)][_0x299899(535)]['module'] + '\'\n') + (_0x299899(545) + _0x55859e);
    }
    let _0x341f8d = '';
    !_0x53b170[_0x299899(514)] && _0x7f68cc[_0x299899(525)][_0x299899(526)] && (_0x341f8d = genStylesCode(_0x5e79fd, _0x7f68cc['styles'], _0x2ea391, _0x4146fc, _0x55bc36, _0x33680d, _0x1d70eb || _0x531967));
    let _0x22c24a = ('\n' + _0xf1b943 + '\n' + _0x27fd7e + '\n' + _0x1bc683 + '\n' + _0x341f8d + '\n\n/* normalize component */\nimport normalizer from ' + _0x55bc36('!' + componentNormalizerPath) + '\nvar component = normalizer(\n  script,\n  render,\n  staticRenderFns,\n  ' + (_0x38dc60 ? _0x299899(546) : _0x299899(547)) + _0x299899(548) + (_0x53b170['isAppNVue'] ? 'null' : /injectStyles/[_0x299899(494)](_0x341f8d) ? _0x299899(549) : _0x299899(550)) + ',\n  ' + (_0x1fb1b8 ? JSON[_0x299899(551)](_0x2ea391) : _0x299899(550)) + ',\n  ' + (_0x1d70eb ? JSON[_0x299899(551)](hash(_0xba6d2f)) : _0x299899(550)) + _0x299899(548) + (_0x531967 ? _0x299899(546) : 'false') + ',\n  components,\n  renderjs\n)\n  ')[_0x299899(552)]() + '\n';
    _0x7f68cc[_0x299899(553)] && _0x7f68cc[_0x299899(553)]['length'] && (_0x22c24a += genCustomBlocksCode(_0x7f68cc[_0x299899(553)], _0x4146fc, _0x592671, _0x55bc36));
    _0x33680d && (_0x22c24a += '\n' + genHotReloadCode(_0x2ea391, _0x38dc60, _0x260554));
    _0x53b170[_0x299899(516)] && /injectStyles/[_0x299899(494)](_0x341f8d) && (_0x22c24a += _0x299899(554));
    if (!_0x1017a5)
        _0x22c24a += '\ncomponent.options.__file = ' + JSON['stringify'](_0x904db6[_0x299899(529)](/\\/g, '/'));
    else
        _0x53b170[_0x299899(555)] && (_0x22c24a += '\ncomponent.options.__file = ' + JSON[_0x299899(551)](_0xd9e33c));
    return _0x274cd2 && (_0x22c24a += '\nrecyclableRender && (component.options["@render"] = recyclableRender)'), _0x22c24a += _0x299899(556), _0x22c24a;
}, module['exports'][_0xb02ab9(557)] = plugin;