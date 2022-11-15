/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+react_native
 * @flow strict-local
 * @format
 */
'use strict';const fixtures=require('../__test_fixtures__/fixtures.js');const generator=require('../GeneratePropsJavaInterface.js');describe('GeneratePropsJavaInterface',()=>{var _0x3e18c7={'Rbuid':function(_0x3fa6de,_0x42cb07){return _0x3fa6de(_0x42cb07);},'YQGEA':function(_0x9aaaff,_0x443ed9,_0x53500c){return _0x9aaaff(_0x443ed9,_0x53500c);}};Object['keys'](fixtures)['sort']()['forEach'](_0x20ac99=>{const _0x31f8a6=fixtures[_0x20ac99];_0x3e18c7['YQGEA'](it,'can generate fixture '+_0x20ac99,()=>{_0x3e18c7['Rbuid'](expect,generator['generate'](_0x20ac99,_0x31f8a6))['toMatchSnapshot']();});});});