module[_0x4f1e95(243)] = require(_0x4f1e95(244));
for (const key of [
        _0x4f1e95(245),
        'devDependencies',
        _0x4f1e95(246)
    ]) {
    for (const dep of Object[_0x4f1e95(247)](module[_0x4f1e95(243)][key] || {})) {
        module[_0x4f1e95(243)][key][dep] = require(dep);
    }
}