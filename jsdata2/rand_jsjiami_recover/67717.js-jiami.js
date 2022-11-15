module['exports'] = function () {
    const _0x59de32 = this['getOptions']();
    return 'import thing from "./module";\nexport default [' + Array['from']({ 'length': +_0x59de32['count'] }, () => 'thing')['join'](', ') + '].reduce((a, b) => a + b);';
};