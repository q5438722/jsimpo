'use strict';
function hasPragma(_0x12ed66) {
    return /^\s*#[^\S\n]*@(format|prettier)\s*(\n|$)/['test'](_0x12ed66);
}
function insertPragma(_0x3ab951) {
    return '#\x20@format\x0a\x0a' + _0x3ab951;
}
module['exports'] = {
    'hasPragma': hasPragma,
    'insertPragma': insertPragma
};
