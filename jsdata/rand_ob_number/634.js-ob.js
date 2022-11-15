function treeEqual(_0x3641ec, _0x469da7) {
    if (!_0x3641ec && !_0x469da7)
        return !![];
    if (!_0x3641ec || !_0x469da7)
        return ![];
    return _0x3641ec['val'] == _0x469da7['val'] && treeEqual(_0x3641ec['left'], _0x469da7['left']) && treeEqual(_0x3641ec['right'], _0x469da7['right']);
}
