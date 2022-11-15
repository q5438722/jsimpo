function non_int32() {
    return 2600822924;
}
function hidden_smi() {
    return 46512102;
}
function hidden_int32() {
    return 1600822924;
}
function f() {
    var _0xcddf2d = '4|29|31|5|24|11|21|20|28|1|2|10|25|12|6|30|7|26|3|23|0|14|18|22|13|33|16|19|9|32|8|15|17|27'['split']('|'), _0x20070f = 0;
    while (!![]) {
        switch (_0xcddf2d[_0x20070f++]) {
        case '0':
            assertEquals(46512102 & 1600822924, _0x4901f3 & 46512102, '7rev');
            continue;
        case '1':
            assertEquals(46512102 & 1600822924, 46512102 & _0x4901f3, '7');
            continue;
        case '2':
            assertEquals(1600822924 & 1600822924, 1600822924 & _0x4901f3, '8');
            continue;
        case '3':
            assertEquals(1600822924 & 46512102, _0x54689d & 1600822924, '5rev');
            continue;
        case '4':
            var _0x2f98a4 = non_int32();
            continue;
        case '5':
            assertEquals(46512102 & 2600822924, 46512102 & _0x2f98a4, '1');
            continue;
        case '6':
            assertEquals(46512102 & 2600822924, _0x2f98a4 & 46512102, '1rev');
            continue;
        case '7':
            assertEquals(2600822924 & 2600822924, _0x2f98a4 & 2600822924, '3rev');
            continue;
        case '8':
            assertEquals(2600822924 & -538063958 | 1, -538063958 & _0x2f98a4 | 1, '14rev');
            continue;
        case '9':
            assertEquals(46512102 & -538063958 | 1, -538063958 & _0x54689d | 1, '12rev');
            continue;
        case '10':
            assertEquals(2600822924 & 1600822924, 2600822924 & _0x4901f3, '9');
            continue;
        case '11':
            assertEquals(2600822924 & 2600822924, 2600822924 & _0x2f98a4, '3');
            continue;
        case '12':
            assertEquals(1600822924 & 2600822924, _0x4901f3 & _0x2f98a4, '11');
            continue;
        case '13':
            assertEquals(1600822924 & 2600822924, _0x2f98a4 & _0x4901f3, '11rev');
            continue;
        case '14':
            assertEquals(1600822924 & 1600822924, _0x4901f3 & 1600822924, '8rev');
            continue;
        case '15':
            assertEquals(2600822924 & 2600822924, _0x2f98a4 & _0x2f98a4, 'xx');
            continue;
        case '16':
            assertEquals(1600822924 & -538063958 | 1, _0x4901f3 & -538063958 | 1, '13');
            continue;
        case '17':
            assertEquals(_0x54689d, _0x54689d & _0x54689d, 'yy');
            continue;
        case '18':
            assertEquals(2600822924 & 1600822924, _0x4901f3 & 2600822924, '9rev');
            continue;
        case '19':
            assertEquals(2600822924 & -538063958 | 1, _0x2f98a4 & -538063958 | 1, '14');
            continue;
        case '20':
            assertEquals(1600822924 & 46512102, 1600822924 & _0x54689d, '5');
            continue;
        case '21':
            assertEquals(46512102 & 46512102, 46512102 & _0x54689d, '4');
            continue;
        case '22':
            assertEquals(46512102 & 2600822924, _0x2f98a4 & _0x54689d, '10rev');
            continue;
        case '23':
            assertEquals(2600822924 & 46512102, _0x54689d & 2600822924, '6rev');
            continue;
        case '24':
            assertEquals(1600822924 & 2600822924, 1600822924 & _0x2f98a4, '2');
            continue;
        case '25':
            assertEquals(46512102 & 2600822924, _0x54689d & _0x2f98a4, '10');
            continue;
        case '26':
            assertEquals(46512102 & 46512102, _0x54689d & 46512102, '4rev');
            continue;
        case '27':
            assertEquals(_0x4901f3, _0x4901f3 & _0x4901f3, 'zz');
            continue;
        case '28':
            assertEquals(2600822924 & 46512102, 2600822924 & _0x54689d, '6');
            continue;
        case '29':
            var _0x54689d = hidden_smi();
            continue;
        case '30':
            assertEquals(1600822924 & 2600822924, _0x2f98a4 & 1600822924, '2rev');
            continue;
        case '31':
            var _0x4901f3 = hidden_int32();
            continue;
        case '32':
            assertEquals(1600822924 & -538063958 | 1, -538063958 & _0x4901f3 | 1, '13rev');
            continue;
        case '33':
            assertEquals(46512102 & -538063958 | 1, _0x54689d & -538063958 | 1, '12');
            continue;
        }
        break;
    }
}
for (var i = 0; i < 5; i++) {
    f();
}