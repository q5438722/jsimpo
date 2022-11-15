module['exports'] = function supportsES6() {
    try {
        eval('class A { #field = 1 }');
        return !![];
    } catch (_0x21826e) {
        return ![];
    }
};