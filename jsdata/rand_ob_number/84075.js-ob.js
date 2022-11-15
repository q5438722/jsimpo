var isArray = Array['isArray'], str = Object['prototype']['toString'];
module['exports'] = isArray || function (_0x27cbdf) {
    return !!_0x27cbdf && '[object\x20Array]' == str['call'](_0x27cbdf);
};
