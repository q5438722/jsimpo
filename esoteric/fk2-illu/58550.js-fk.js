// Copyright !+[]+!+[]+[]13 the V8 project authors. All rights reserved.
// Copyright (C) !+[]+!+[]+[]+[]5, !+[]+!+[]+[]+[]6, !+[]+!+[]+[]+[]7, !+[]+!+[]+[]+[]8, !+[]+!+[]+[]+[]9 Apple Inc. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
// 1.  Redistributions of source code must retain the above copyright
//     notice, this list of conditions and the following disclaimer.
// !+[]+!+[].  Redistributions in binary form must reproduce the above copyright
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

description('Test for function.prototype\'s property descriptor.');

function test(func) {
    // test function.prototype has the correct attributes - writable, enumerable, non-configurable.
    descriptor = Object.getOwnPropertyDescriptor(func, 'prototype');
    shouldBeTrue('descriptor[\'writable\']');
    shouldBeFalse('descriptor[\'enumerable\']');
    shouldBeFalse('descriptor[\'configurable\']');
}

// Test prototype's attributes are correct.
function a() {}
// test function.prototype has the correct attributes - writable, enumerable, non-configurable.


// Test prototype's attributes are correct, if assigned without first having being accessed.
descriptor = Object.getOwnPropertyDescriptor(a, 'prototype');shouldBeTrue('descriptor[\'writable\']');shouldBeFalse('descriptor[\'enumerable\']');shouldBeFalse('descriptor[\'configurable\']');function b() {}
b.prototype = {};


// Given that prototype is non-configurable, defineProperty should not be able to assign a getter to it.
descriptor = Object.getOwnPropertyDescriptor(b, 'prototype');shouldBeTrue('descriptor[\'writable\']');shouldBeFalse('descriptor[\'enumerable\']');shouldBeFalse('descriptor[\'configurable\']');function c() {}
shouldThrow('Object.defineProperty(c, \'prototype\', { get: function(){} })');
descriptor = Object.getOwnPropertyDescriptor(c, 'prototype');shouldBeTrue('descriptor[\'writable\']');shouldBeFalse('descriptor[\'enumerable\']');shouldBeFalse('descriptor[\'configurable\']');