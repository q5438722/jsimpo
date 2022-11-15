// Copyright 2014 the V8 project authors. All rights reserved.
// Copyright (C) 2005, 2006, 2007, 2008, 2009 Apple Inc. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
// 1.  Redistributions of source code must retain the above copyright
//     notice, this list of conditions and the following disclaimer.
// 2.  Redistributions in binary form must reproduce the above copyright
//     notice, this list of conditions and the following disclaimer in the
//     documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY APPLE INC. AND ITS CONTRIBUTORS ``AS IS'' AND ANY
// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL APPLE INC. OR ITS CONTRIBUTORS BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
// ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// Flags: --harmony
'use strict';description('Test whether Promise treats thenable correctly.');var thisValue;var result;var value={'then':function(_0x1d6b9a,_0x3cb10c){var _0x29b513={'DukHN':function(_0x43e129,_0x22f8cd){return _0x43e129(_0x22f8cd);},'AyWww':'value.then is called.','zigJY':function(_0x302897,_0xced998,_0x2bc95b){return _0x302897(_0xced998,_0x2bc95b);},'fbWmw':'thisValue','pAQEM':'hello'};_0x29b513['DukHN'](testPassed,_0x29b513['AyWww']);thisValue=this;_0x29b513['zigJY'](shouldBe,_0x29b513['fbWmw'],'value');_0x29b513['DukHN'](_0x3cb10c,_0x29b513['pAQEM']);}};new Promise(function(_0x1ec9ce){var _0x79b144={'AJuAI':function(_0x18ac29,_0x2485f6){return _0x18ac29(_0x2485f6);}};_0x79b144['AJuAI'](_0x1ec9ce,value);})['then'](function(){var _0x50057d={'bcDDC':function(_0x5a27de,_0x309e82){return _0x5a27de(_0x309e82);},'nQmwO':'fulfilled','XgvaF':function(_0x4d6b41){return _0x4d6b41();}};_0x50057d['bcDDC'](testFailed,_0x50057d['nQmwO']);_0x50057d['XgvaF'](finishJSTest);},function(_0x3ce81b){var _0x3f9120={'RZKDC':function(_0x5c4e88,_0x57b83e){return _0x5c4e88(_0x57b83e);},'xxKXo':'rejected','tuhZs':function(_0x567cdf,_0x31dbf5,_0x103339){return _0x567cdf(_0x31dbf5,_0x103339);},'btwBI':'result','whOQk':'hello'};_0x3f9120['RZKDC'](testPassed,_0x3f9120['xxKXo']);result=_0x3ce81b;_0x3f9120['tuhZs'](shouldBeEqualToString,_0x3f9120['btwBI'],_0x3f9120['whOQk']);finishJSTest();});debug('The\x20promise\x20is\x20not\x20rejected\x20now.');