let forcedTheme = null;
{
    const result = /\?theme=(\w+)/['exec'](window['location']['href']);
    if (result)
        forcedTheme = result[0x1779 * 0x1 + 0x7 * -0x57f + -0x1 * -0xf01];
}
console['log']('forced\x20theme', forcedTheme);
export function getForcedTheme() {
    return forcedTheme;
}
