'use strict';const assert=require('assert');const request=require('../../test-helpers/context')['request'];describe('req.header',()=>{var _0x388fab={'ICEAQ':function(_0x109908){return _0x109908();},'AVWat':'Its one header, with headerfields','hlwgo':'should\x20return\x20the\x20request\x20header\x20object','kSmbt':function(_0x12f888,_0x12ef77,_0x50aea1){return _0x12f888(_0x12ef77,_0x50aea1);}};it(_0x388fab['hlwgo'],()=>{const _0x8e2b97=request();assert['deepStrictEqual'](_0x8e2b97['header'],_0x8e2b97['req']['headers']);});_0x388fab['kSmbt'](it,'should set the request header object',()=>{const _0x537898=_0x388fab['ICEAQ'](request);_0x537898['header']={'X-Custom-Headerfield':_0x388fab['AVWat']};assert['deepStrictEqual'](_0x537898['header'],_0x537898['req']['headers']);});});