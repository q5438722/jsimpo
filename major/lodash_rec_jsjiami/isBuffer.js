import _0x3df48b from'./.internal/root.js';
;
const freeExports = typeof exports === 'object' && exports !== null && !exports['nodeType'] && exports;
const freeModule = freeExports && typeof module === 'object' && module !== null && !module['nodeType'] && module;
const moduleExports = freeModule && freeModule['exports'] === freeExports;
const Buffer = moduleExports ? _0x3df48b['Buffer'] : undefined;
const nativeIsBuffer = Buffer ? Buffer['isBuffer'] : undefined;
const isBuffer = nativeIsBuffer || (() => ![]);
export default isBuffer;