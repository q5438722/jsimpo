__v_12 = new Proxy({}, {});
function f() {
    var _0xe91aa4 = _0x17d7, _0x4c445d = new Proxy({}, __v_2);
    __v_9[_0xe91aa4(233)] = _0x4c445d, __v_2[_0xe91aa4(234)] = function () {
        return __v_9;
    }, Object[_0xe91aa4(235)][_0xe91aa4(236)]['call'](__v_0, _0x4c445d);
}
;
assertThrows(f, RangeError);