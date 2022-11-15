var isArray = Array['isArray'];
var str = Object['prototype']['toString'];
module['exports'] = isArray || function (_0x52cace) {
    return !!_0x52cace && '[object Array]' == str['call'](_0x52cace);
};