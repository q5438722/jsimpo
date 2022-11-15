'use strict';
function hasPragma(_0x4750d0) {
    return /^\s*#[^\S\n]*@(format|prettier)\s*(\n|$)/['test'](_0x4750d0);
}
function insertPragma(_0x59546a) {
    return '# @format\n\n' + _0x59546a;
}
module['exports'] = {
    'hasPragma': hasPragma,
    'insertPragma': insertPragma
};