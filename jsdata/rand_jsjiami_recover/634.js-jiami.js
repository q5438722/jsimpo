function treeEqual(_0x46668a, _0x52d93c) {
    if (!_0x46668a && !_0x52d93c) {
        return !![];
    }
    if (!_0x46668a || !_0x52d93c) {
        return ![];
    }
    return _0x46668a['val'] == _0x52d93c['val'] && treeEqual(_0x46668a['left'], _0x52d93c['left']) && treeEqual(_0x46668a['right'], _0x52d93c['right']);
}