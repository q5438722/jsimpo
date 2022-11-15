const spawn = require(_0x59cc83(484))[_0x59cc83(485)], path = require(_0x59cc83(486)), childPath = path[_0x59cc83(487)](__dirname, 'child-process-persistent.js');
function _0x4c74(_0x1c2508, _0x445dc0) {
    return _0x4c74 = function (_0x423b42, _0x4c7428) {
        _0x423b42 = _0x423b42 - 474;
        let _0x476a5a = _0x423b[_0x423b42];
        return _0x476a5a;
    }, _0x4c74(_0x1c2508, _0x445dc0);
}
var child = spawn(process[_0x59cc83(488)], [childPath], {
    'detached': !![],
    'stdio': _0x59cc83(489)
});
console[_0x59cc83(490)](child[_0x59cc83(491)]), child[_0x59cc83(492)]();