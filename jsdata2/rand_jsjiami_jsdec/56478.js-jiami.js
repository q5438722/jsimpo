'use strict';const common=require('../../common');const assert=require('assert');const test_number=require('./build/'+common['buildType']+'/test_number');function testNumber(_0x116653){assert['strictEqual'](_0x116653,test_number['Test'](_0x116653));}testNumber(0x0);testNumber(-0x0);testNumber(0x1);testNumber(-0x1);testNumber(0x64);testNumber(0x849);testNumber(-0x4d1);testNumber(0xf0dd7);testNumber(-0xee723);testNumber(0xf015e11daa0a400000000000000000000000000000000000000000);testNumber(-0xa93a03bb9aa5e0000000000000000000000000000000000000000);testNumber(Number['MIN_SAFE_INTEGER']);testNumber(Number['MAX_SAFE_INTEGER']);testNumber(Number['MAX_SAFE_INTEGER']+0xa);testNumber(Number['MIN_VALUE']);testNumber(Number['MAX_VALUE']);testNumber(Number['MAX_VALUE']+0xa);testNumber(Number['POSITIVE_INFINITY']);testNumber(Number['NEGATIVE_INFINITY']);testNumber(Number['NaN']);function testUint32(_0x585d7f,_0x2a5f19=_0x585d7f){assert['strictEqual'](_0x2a5f19,test_number['TestUint32Truncation'](_0x585d7f));}testUint32(0x0,0x0);testUint32(-0x0,0x0);testUint32(0xffffffff);testUint32(0x100000000,0x0);testUint32(0x100000001,0x1);testUint32(0x11*0x100000000+0x1,0x1);testUint32(-0x1,0xffffffff);function testInt32(_0x200e0c,_0x254094=_0x200e0c){assert['strictEqual'](_0x254094,test_number['TestInt32Truncation'](_0x200e0c));}testInt32(0x0,0x0);testInt32(-0x0,0x0);testInt32(-Math['pow'](0x2,0x1f));testInt32(Math['pow'](0x2,0x1f)-0x1);testInt32(0x100000001,0x1);testInt32(0x100000000,0x0);testInt32(0xffffffff,-0x1);testInt32(0x100000000*0x5+0x3,0x3);testInt32(Number['MIN_SAFE_INTEGER'],0x1);testInt32(Number['MAX_SAFE_INTEGER'],-0x1);testInt32(-Math['pow'](0x2,0x3f)+(Math['pow'](0x2,0x9)+0x1),0x400);testInt32(Math['pow'](0x2,0x3f)-(Math['pow'](0x2,0x9)+0x1),-0x400);testInt32(-Number['MIN_VALUE'],0x0);testInt32(Number['MIN_VALUE'],0x0);testInt32(-Number['MAX_VALUE'],0x0);testInt32(Number['MAX_VALUE'],0x0);testInt32(-Math['pow'](0x2,0x3f)+Math['pow'](0x2,0x9),0x0);testInt32(Math['pow'](0x2,0x3f)-Math['pow'](0x2,0x9),0x0);testInt32(Number['POSITIVE_INFINITY'],0x0);testInt32(Number['NEGATIVE_INFINITY'],0x0);testInt32(Number['NaN'],0x0);function testInt64(_0x140886,_0x4f0084=_0x140886){assert['strictEqual'](_0x4f0084,test_number['TestInt64Truncation'](_0x140886));}const RANGEERROR_POSITIVE=Math['pow'](0x2,0x3f);const RANGEERROR_NEGATIVE=-Math['pow'](0x2,0x3f);testInt64(0x0,0x0);testInt64(-0x0,0x0);testInt64(Number['MIN_SAFE_INTEGER']);testInt64(Number['MAX_SAFE_INTEGER']);testInt64(-Math['pow'](0x2,0x3f)+(Math['pow'](0x2,0x9)+0x1));testInt64(Math['pow'](0x2,0x3f)-(Math['pow'](0x2,0x9)+0x1));testInt64(-Number['MIN_VALUE'],0x0);testInt64(Number['MIN_VALUE'],0x0);testInt64(-Number['MAX_VALUE'],RANGEERROR_NEGATIVE);testInt64(Number['MAX_VALUE'],RANGEERROR_POSITIVE);testInt64(-Math['pow'](0x2,0x3f)+Math['pow'](0x2,0x9),RANGEERROR_NEGATIVE);testInt64(Math['pow'](0x2,0x3f)-Math['pow'](0x2,0x9),RANGEERROR_POSITIVE);testInt64(Number['POSITIVE_INFINITY'],0x0);testInt64(Number['NEGATIVE_INFINITY'],0x0);testInt64(Number['NaN'],0x0);