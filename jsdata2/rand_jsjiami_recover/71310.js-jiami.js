module['exports'] = function (_0x357388) {
    var _0x741c3b = '7|0|6|2|4|3|1|5|8'['split']('|'), _0x4cc890 = 0;
    while (!![]) {
        switch (_0x741c3b[_0x4cc890++]) {
        case '0':
            this['addDependency']('../**/dir/*.js');
            continue;
        case '1':
            this['addMissingDependency']('missing3.js');
            continue;
        case '2':
            this['addContextDependency']('.');
            continue;
        case '3':
            this['addMissingDependency']('missing2.js');
            continue;
        case '4':
            this['addMissingDependency']('./missing1.js');
            continue;
        case '5':
            this['addMissingDependency']('missing4.js');
            continue;
        case '6':
            this['addDependency']('../**/file.js');
            continue;
        case '7':
            this['addDependency']('loader.js');
            continue;
        case '8':
            return _0x357388;
        }
        break;
    }
};