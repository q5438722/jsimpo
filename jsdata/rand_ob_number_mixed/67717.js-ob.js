module['exports'] = function () {
    const _0x3b2717 = this['getOptions']();
    return 'import\x20thing\x20from\x20\x22./module\x22;\x0aexport\x20default\x20[' + Array['from']({ 'length': +_0x3b2717['count'] }, () => 'thing')['join'](',\x20') + '].reduce((a,\x20b)\x20=>\x20a\x20+\x20b);';
};
