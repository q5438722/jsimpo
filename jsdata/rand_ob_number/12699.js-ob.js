const formatFilters = _0x199198 => {
    const _0x59548a = _0x199198['indexOf']('mime_contains=file'), _0x44fab8 = _0x199198['indexOf']('mime_ncontains=file');
    let _0x1acbba = _0x199198;
    return _0x59548a !== -(0x2 * -0x287 + 0xe5d * -0x2 + -0x5d * -0x5d) && (_0x1acbba = _0x1acbba['replace']('mime_contains=file', 'mime_ncontains=image&mime_ncontains=video')), _0x44fab8 !== -(-0x1 * 0x204d + 0xfd * 0x1 + 0x1f51) && (_0x1acbba = _0x1acbba['replace']('mime_ncontains=file', 'mime_contains=image&mime_contains=video')), _0x1acbba;
};
export default formatFilters;
