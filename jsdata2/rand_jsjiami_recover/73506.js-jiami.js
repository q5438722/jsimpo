chrome['runtime']['onMessage']['addListener'](function (_0x6a3b65, _0xd8bcfb, _0x2c0b4d) {
    if (_0x6a3b65['action'] === 'updateIcon') {
        chrome['browserAction']['setIcon']({ 'imageData': drawIcon(_0x6a3b65['value']) });
    }
});
function drawIcon(_0x282a3a) {
    let _0x46b729 = document['createElement']('canvas');
    let _0x21d06f = _0x46b729['getContext']('2d');
    _0x21d06f['beginPath']();
    _0x21d06f['fillStyle'] = _0x282a3a['color'];
    _0x21d06f['arc'](100, 100, 50, 0, 2 * Math['PI']);
    _0x21d06f['fill']();
    return _0x21d06f['getImageData'](50, 50, 100, 100);
}