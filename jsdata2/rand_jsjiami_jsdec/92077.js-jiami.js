/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @emails oncall+react_native
 */
'use strict';const NativeTiming={'createTimer':jest['fn'](),'deleteTimer':jest['fn'](),'setSendIdleEvents':jest['fn']()};jest['enableAutomock']()['mock']('../NativeTiming',()=>({'__esModule':!![],'default':NativeTiming}))['unmock']('../JSTimers');const JSTimers=require('../JSTimers');describe('JSTimers',function(){var _0x2c2588={'VLdEU':function(_0x3afc66,_0x3ab2e9){return _0x3afc66===_0x3ab2e9;},'xjtcc':'bBJtI','oyGTG':'warn','xGFGq':'OVCuE','uycpA':function(_0x28e1e9,_0x3f96a3){return _0x28e1e9(_0x3f96a3);},'zRcPM':'OBVBr','FAwLE':'DNVoO','OmFhX':function(_0x147dad,_0x58d0da){return _0x147dad(_0x58d0da);},'lBLdb':'lMPvW','cgXrK':function(_0x346e9d,_0x54e728){return _0x346e9d(_0x54e728);},'KbNYC':'efaku','hcKPK':function(_0x166ee4,_0x40e5a4){return _0x166ee4(_0x40e5a4);},'gvfZT':'vSteA','QcoXG':function(_0x44b4f9,_0x2e8b19){return _0x44b4f9(_0x2e8b19);},'YiQIO':function(_0x3abca3,_0x44ce58){return _0x3abca3===_0x44ce58;},'vOtne':'DzFfe','RLtxt':'fXHOk','TdMjm':'ajbWr','NyeCz':'RAKXo','UuUsI':'wujfc','pdzDh':function(_0x9d1a4a,_0x32382a){return _0x9d1a4a(_0x32382a);},'xLMnT':function(_0x3bc7af,_0x3bfd43){return _0x3bc7af!==_0x3bfd43;},'JfOeT':'uxZMs','hSjOv':function(_0x3a685b,_0x44f2e9){return _0x3a685b(_0x44f2e9);},'sjgAF':function(_0x4ab4eb,_0x54f370){return _0x4ab4eb(_0x54f370);},'tcjIO':'FvQuH','ampXW':'pGxAD','HYDxo':function(_0x438c5e,_0x5ce09d){return _0x438c5e(_0x5ce09d);},'DUlwJ':function(_0xdfcd5b,_0x20e069){return _0xdfcd5b!==_0x20e069;},'EmrdF':'ZxSPi','utqST':function(_0x49cf97,_0x493159){return _0x49cf97(_0x493159);},'xtJrX':function(_0x29c183,_0x87092){return _0x29c183===_0x87092;},'Lujjk':'OdCsO','NkkeL':'atPDB','XmnWp':'RmnUd','zxiaB':function(_0x3060ad,_0x25ba69){return _0x3060ad(_0x25ba69);},'nKdbP':'error within setTimeout','okZuA':function(_0xe47855,_0x42a6c9){return _0xe47855(_0x42a6c9);},'VJhRJ':'YEXbN','mEYCB':'bZuXp','xTDMj':function(_0x5a7163,_0x32e460){return _0x5a7163(_0x32e460);},'Ddnyr':'first\x20error','vMOTQ':'second error','MRThN':function(_0x480f16,_0x461448){return _0x480f16(_0x461448);},'HNjDC':function(_0x86602c,_0xc1e89b){return _0x86602c!==_0xc1e89b;},'quGPz':'HEcqh','yJWJX':function(_0x136015,_0x3588be){return _0x136015(_0x3588be);},'CgLEx':function(_0x2c0818,_0x574034){return _0x2c0818(_0x574034);},'hqDWn':'error','zYGNm':'lvved','ClBNH':'catMX','TDoKC':function(_0x38ecc3,_0x5cf00f){return _0x38ecc3(_0x5cf00f);},'LAXUo':function(_0x38b9ca,_0x383b26){return _0x38b9ca!==_0x383b26;},'eYYkU':'BlGin','Juhwr':function(_0x49989c,_0x342980){return _0x49989c(_0x342980);},'qDoeW':function(_0xce97a7,_0x22fc15){return _0xce97a7(_0x22fc15);},'UsbhO':function(_0xcb2536,_0x280853){return _0xcb2536(_0x280853);},'fYKNp':function(_0x55f6b8,_0x2a540d){return _0x55f6b8(_0x2a540d);},'IKYtP':function(_0x16ecfb,_0x15e328){return _0x16ecfb(_0x15e328);},'FvDnG':'error within queueReactNativeMicrotask','cVgml':function(_0x5d7cd7,_0x41e3bb){return _0x5d7cd7(_0x41e3bb);},'UYKZl':function(_0x191937,_0x412679){return _0x191937(_0x412679);},'FLZln':function(_0x282358,_0x14a5b2){return _0x282358===_0x14a5b2;},'QiCFX':'lulRo','YvXFG':'cBKrE','YTXCC':'error\x20within\x20setInterval','zEbGH':'should call function with setTimeout','nIniD':function(_0x32a3c9,_0x3240f9,_0x9855e0){return _0x32a3c9(_0x3240f9,_0x9855e0);},'tScvz':'should call nested setTimeout when cleared','DDtrI':function(_0x21dc8b,_0x1b6efd,_0x2d41ab){return _0x21dc8b(_0x1b6efd,_0x2d41ab);},'PODLo':'should call nested queueReactNativeMicrotask when cleared','xpkxK':'should call nested requestAnimationFrame when cleared','FPGXu':'should\x20call\x20nested\x20setInterval\x20when\x20cleared','ZqiPC':'should call function with setInterval','sGQCd':function(_0x1a6a64,_0x165d34,_0x1fd7f7){return _0x1a6a64(_0x165d34,_0x1fd7f7);},'wxYfT':'should\x20call\x20function\x20with\x20queueReactNativeMicrotask','giKoL':function(_0x258da3,_0x3a9934,_0x3167e3){return _0x258da3(_0x3a9934,_0x3167e3);},'DxjJr':'should call functions in the right order with queueReactNativeMicrotask','fYZLW':function(_0x400bce,_0x4b070b,_0x187817){return _0x400bce(_0x4b070b,_0x187817);},'rhLQU':'should call functions in the right order with nested queueReactNativeMicrotask','waZYX':'should call function with requestAnimationFrame','CEqIW':'should not call function if we don\'t callTimers','tUMzs':'should\x20call\x20setInterval\x20as\x20many\x20times\x20as\x20callTimers\x20is\x20called','JQRKh':function(_0xe9a678,_0xb1e5b3,_0xdf5a7d){return _0xe9a678(_0xb1e5b3,_0xdf5a7d);},'OoaKj':'should work with calling multiple timers','jIBPz':'should still execute all callbacks even if one throws','tlONF':'should\x20clear\x20timers\x20even\x20if\x20callback\x20throws','ScWhE':'should not warn if callback is called on cancelled timer','lOUfF':function(_0x42e8dc,_0x1a1135,_0x5d5414){return _0x42e8dc(_0x1a1135,_0x5d5414);},'qKjOX':'should\x20only\x20call\x20callback\x20once\x20for\x20setTimeout','fVNdp':'should only call callback once for requestAnimationFrame','fneyu':'should re-throw first exception','vqYpK':function(_0x496e6a,_0x157796,_0xf43ec4){return _0x496e6a(_0x157796,_0xf43ec4);},'QRWyn':'should pass along errors thrown from queueReactNativeMicrotask','rocDS':'should throw all errors from queueReactNativeMicrotask','CEhsm':function(_0x50eb2a,_0x46f4aa,_0x2a8db6){return _0x50eb2a(_0x46f4aa,_0x2a8db6);},'XxhsR':'should\x20throw\x20all\x20errors\x20from\x20setTimeout','AwUzg':function(_0x261cf0,_0x13c490,_0xf253b3){return _0x261cf0(_0x13c490,_0xf253b3);},'unacH':'should not call to native when clearing a null timer'};_0x2c2588['UYKZl'](beforeEach,function(){if(_0x2c2588['VLdEU'](_0x2c2588['xjtcc'],_0x2c2588['xjtcc'])){jest['spyOn'](console,_0x2c2588['oyGTG']);global['setTimeout']=JSTimers['setTimeout'];}else{let _0x57c952=![];const _0x2902f3=JSTimers['setTimeout'](function(){_0x57c952=!![];});JSTimers['callTimers']([_0x2902f3]);expect(_0x57c952)['toBe'](!![]);}});_0x2c2588['UYKZl'](afterEach,()=>{if('OVCuE'!==_0x2c2588['xGFGq']){JSTimers['clearReactNativeMicrotask'](id2);id3=JSTimers['queueReactNativeMicrotask'](function(){callCount+=0x1;});}else{console['warn']['mockRestore']();}});it(_0x2c2588['zEbGH'],function(){if('DHHab'===_0x2c2588['FAwLE']){let _0x32f029,_0x3d5605,_0x11f1b8;let _0x160dd2=0x0;_0x32f029=JSTimers['requestAnimationFrame'](function(){JSTimers['cancelAnimationFrame'](_0x32f029);_0x3d5605=JSTimers['requestAnimationFrame'](function(){JSTimers['cancelAnimationFrame'](_0x3d5605);_0x11f1b8=JSTimers['requestAnimationFrame'](function(){_0x160dd2+=0x1;});});});JSTimers['callTimers']([_0x32f029]);JSTimers['callTimers']([_0x3d5605]);JSTimers['callTimers']([_0x11f1b8]);_0x2c2588['uycpA'](expect,_0x160dd2)['toBe'](0x1);}else{let _0x3601c1=![];const _0x23e114=JSTimers['setTimeout'](function(){if(_0x2c2588['VLdEU'](_0x2c2588['zRcPM'],'tKAzz')){let _0x225244,_0x4b868c,_0x1b16ad;let _0x4b9c10=0x0;_0x225244=JSTimers['setTimeout'](function(){JSTimers['clearTimeout'](_0x225244);_0x4b868c=JSTimers['setTimeout'](function(){JSTimers['clearTimeout'](_0x4b868c);_0x1b16ad=JSTimers['setTimeout'](function(){_0x4b9c10+=0x1;});});});JSTimers['callTimers']([_0x225244]);JSTimers['callTimers']([_0x4b868c]);JSTimers['callTimers']([_0x1b16ad]);expect(_0x4b9c10)['toBe'](0x1);}else{_0x3601c1=!![];}});JSTimers['callTimers']([_0x23e114]);_0x2c2588['OmFhX'](expect,_0x3601c1)['toBe'](!![]);}});_0x2c2588['nIniD'](it,_0x2c2588['tScvz'],function(){var _0x4d70cc={'OZjEY':_0x2c2588['lBLdb']};let _0x534f99,_0x445aa9,_0xc7058d;let _0x342098=0x0;_0x534f99=JSTimers['setTimeout'](function(){var _0x53be7e={'iisEJ':'error'};if(_0x4d70cc['OZjEY']===_0x4d70cc['OZjEY']){JSTimers['clearTimeout'](_0x534f99);_0x445aa9=JSTimers['setTimeout'](function(){JSTimers['clearTimeout'](_0x445aa9);_0xc7058d=JSTimers['setTimeout'](function(){_0x342098+=0x1;});});}else{const _0x231bab=JSTimers['setTimeout'](function(){throw new Error(_0x53be7e['iisEJ']);},0xa);expect(JSTimers['callTimers']['bind'](null,[_0x231bab]))['toThrow']('error');JSTimers['callTimers']['bind'](null,[_0x231bab]);}});JSTimers['callTimers']([_0x534f99]);JSTimers['callTimers']([_0x445aa9]);JSTimers['callTimers']([_0xc7058d]);_0x2c2588['cgXrK'](expect,_0x342098)['toBe'](0x1);});_0x2c2588['DDtrI'](it,_0x2c2588['PODLo'],function(){let _0x589065,_0x22de4d,_0x5b9ee4;let _0x59ad72=0x0;_0x589065=JSTimers['queueReactNativeMicrotask'](function(){var _0x4c7169={'xgLRI':function(_0x343387,_0x4e6960){return _0x2c2588['VLdEU'](_0x343387,_0x4e6960);},'yApoK':_0x2c2588['KbNYC'],'qMxiu':function(_0x10cfb6,_0x8296b){return _0x2c2588['hcKPK'](_0x10cfb6,_0x8296b);},'IHRgG':function(_0x45d60b,_0xb59508){return _0x2c2588['hcKPK'](_0x45d60b,_0xb59508);}};if(_0x2c2588['gvfZT']===_0x2c2588['gvfZT']){JSTimers['clearReactNativeMicrotask'](_0x589065);_0x22de4d=JSTimers['queueReactNativeMicrotask'](function(){JSTimers['clearReactNativeMicrotask'](_0x22de4d);_0x5b9ee4=JSTimers['queueReactNativeMicrotask'](function(){if(_0x4c7169['xgLRI'](_0x4c7169['yApoK'],_0x4c7169['yApoK'])){_0x59ad72+=0x1;}else{JSTimers['clearTimeout'](_0x22de4d);_0x5b9ee4=JSTimers['setTimeout'](function(){_0x59ad72+=0x1;});}});});}else{let _0x447b7a=![];let _0x37127e=![];const _0x513441=JSTimers['setTimeout'](function(){_0x447b7a=!![];});const _0x1a37f5=JSTimers['setTimeout'](function(){_0x37127e=!![];});JSTimers['callTimers']([_0x513441,_0x1a37f5]);_0x4c7169['qMxiu'](expect,_0x447b7a)['toBe'](!![]);_0x4c7169['IHRgG'](expect,_0x37127e)['toBe'](!![]);}});JSTimers['callTimers']([_0x589065]);JSTimers['callTimers']([_0x22de4d]);JSTimers['callTimers']([_0x5b9ee4]);_0x2c2588['QcoXG'](expect,_0x59ad72)['toBe'](0x1);});_0x2c2588['DDtrI'](it,_0x2c2588['xpkxK'],function(){if(_0x2c2588['RLtxt']!==_0x2c2588['TdMjm']){let _0x349641,_0x2d6e43,_0x4ccda9;let _0x46eec3=0x0;_0x349641=JSTimers['requestAnimationFrame'](function(){if(_0x2c2588['YiQIO'](_0x2c2588['vOtne'],'DzFfe')){JSTimers['cancelAnimationFrame'](_0x349641);_0x2d6e43=JSTimers['requestAnimationFrame'](function(){JSTimers['cancelAnimationFrame'](_0x2d6e43);_0x4ccda9=JSTimers['requestAnimationFrame'](function(){_0x46eec3+=0x1;});});}else{throw new Error('second\x20error');}});JSTimers['callTimers']([_0x349641]);JSTimers['callTimers']([_0x2d6e43]);JSTimers['callTimers']([_0x4ccda9]);_0x2c2588['QcoXG'](expect,_0x46eec3)['toBe'](0x1);}else{const _0x4cf619=JSTimers['setInterval'](function(){throw new Error('error within setInterval');});expect(JSTimers['callTimers']['bind'](null,[_0x4cf619]))['toThrowError']('error\x20within\x20setInterval');}});it(_0x2c2588['FPGXu'],function(){var _0x625534={'hUZtP':function(_0x2bc3a3,_0x1cfad3){return _0x2c2588['YiQIO'](_0x2bc3a3,_0x1cfad3);},'khWRy':_0x2c2588['NyeCz'],'ldXEE':_0x2c2588['UuUsI']};let _0x45bf5e,_0x3b98f4,_0x4291da;let _0x5114c2=0x0;_0x45bf5e=JSTimers['setInterval'](function(){var _0x42bc96={'XsPdC':function(_0x3c6699,_0x2e6b08){return _0x2c2588['QcoXG'](_0x3c6699,_0x2e6b08);}};JSTimers['clearInterval'](_0x45bf5e);_0x3b98f4=JSTimers['setInterval'](function(){if(_0x625534['hUZtP'](_0x625534['khWRy'],_0x625534['ldXEE'])){throw new Error('first error');}else{JSTimers['clearInterval'](_0x3b98f4);_0x4291da=JSTimers['setInterval'](function(){var _0x4893b4={'xIBxh':function(_0x42b8d7,_0x5ac27e){return _0x42bc96['XsPdC'](_0x42b8d7,_0x5ac27e);}};if('UMQcd'==='UMQcd'){_0x5114c2+=0x1;}else{const _0xd5b623=jest['fn']();const _0x5e0969=JSTimers['setInterval'](_0xd5b623,0xa);JSTimers['callTimers']([_0x5e0969]);JSTimers['callTimers']([_0x5e0969]);JSTimers['callTimers']([_0x5e0969]);JSTimers['callTimers']([_0x5e0969]);_0x4893b4['xIBxh'](expect,_0xd5b623)['toBeCalledTimes'](0x4);}});}});});JSTimers['callTimers']([_0x45bf5e]);JSTimers['callTimers']([_0x3b98f4]);JSTimers['callTimers']([_0x4291da]);_0x2c2588['pdzDh'](expect,_0x5114c2)['toBe'](0x1);});_0x2c2588['DDtrI'](it,_0x2c2588['ZqiPC'],function(){if(_0x2c2588['xLMnT']('uxZMs',_0x2c2588['JfOeT'])){throw new Error('first\x20error');}else{const _0x11f847=jest['fn']();const _0x333010=JSTimers['setInterval'](_0x11f847);JSTimers['callTimers']([_0x333010]);_0x2c2588['hSjOv'](expect,_0x11f847)['toBeCalledTimes'](0x1);}});_0x2c2588['sGQCd'](it,_0x2c2588['wxYfT'],function(){const _0x359a8d=jest['fn']();JSTimers['queueReactNativeMicrotask'](_0x359a8d);JSTimers['callReactNativeMicrotasks']();_0x2c2588['sjgAF'](expect,_0x359a8d)['toBeCalledTimes'](0x1);});it('should not call function with clearReactNativeMicrotask',function(){if('nxtSx'!==_0x2c2588['tcjIO']){const _0x17b4a1=jest['fn']();const _0x531066=JSTimers['queueReactNativeMicrotask'](_0x17b4a1);JSTimers['clearReactNativeMicrotask'](_0x531066);JSTimers['callReactNativeMicrotasks']();_0x2c2588['sjgAF'](expect,_0x17b4a1)['not']['toBeCalled']();}else{JSTimers['clearTimeout'](id1);id2=JSTimers['setTimeout'](function(){JSTimers['clearTimeout'](id2);id3=JSTimers['setTimeout'](function(){callCount+=0x1;});});}});_0x2c2588['giKoL'](it,_0x2c2588['DxjJr'],function(){var _0x3531b5={'icjlV':function(_0x3fe34a,_0x5e2d4f){return _0x3fe34a!==_0x5e2d4f;},'gWako':_0x2c2588['ampXW'],'uqEfT':'gXSEj','MYKIV':function(_0x11efe2,_0x452b57){return _0x11efe2(_0x452b57);}};let _0x54d4ce=0x0;let _0x6f7a98=null;let _0x75837e=null;JSTimers['queueReactNativeMicrotask'](function(){if(_0x3531b5['icjlV'](_0x3531b5['gWako'],_0x3531b5['uqEfT'])){_0x6f7a98=_0x54d4ce++;}else{callCount+=0x1;}});JSTimers['queueReactNativeMicrotask'](function(){var _0x3926ec={'CEAgt':function(_0x5ac5d6,_0x1cf74b){return _0x5ac5d6(_0x1cf74b);},'ZzdgV':function(_0x4bc162,_0x508671){return _0x3531b5['MYKIV'](_0x4bc162,_0x508671);}};if(_0x3531b5['icjlV']('KRdol','BGjtx')){_0x75837e=_0x54d4ce++;}else{let _0x244ba8=![];let _0x590384=![];JSTimers['setTimeout'](function(){_0x244ba8=!![];});const _0x2e9d45=JSTimers['setTimeout'](function(){_0x590384=!![];});JSTimers['callTimers']([_0x2e9d45]);_0x3926ec['CEAgt'](expect,_0x244ba8)['toBe'](![]);_0x3926ec['ZzdgV'](expect,_0x590384)['toBe'](!![]);}});JSTimers['callReactNativeMicrotasks']();_0x2c2588['sjgAF'](expect,_0x6f7a98)['toBe'](0x0);_0x2c2588['HYDxo'](expect,_0x75837e)['toBe'](0x1);});_0x2c2588['fYZLW'](it,_0x2c2588['rhLQU'],function(){var _0x229a9f={'OWJsR':function(_0xd1598f,_0x1d2176){return _0x2c2588['DUlwJ'](_0xd1598f,_0x1d2176);},'xyRKr':function(_0x39ca0d,_0x44a5ac){return _0x2c2588['YiQIO'](_0x39ca0d,_0x44a5ac);},'fIlmL':_0x2c2588['EmrdF']};let _0x36be65=0x0;let _0x2bcc61=null;let _0x4efb49=null;let _0x56959c=null;JSTimers['queueReactNativeMicrotask'](function(){var _0x5493dd={'RbQHB':function(_0x3e4613,_0x5d98cb){return _0x229a9f['OWJsR'](_0x3e4613,_0x5d98cb);},'bwleU':'weEhh'};if(_0x229a9f['xyRKr']('ZxSPi',_0x229a9f['fIlmL'])){_0x2bcc61=_0x36be65++;JSTimers['queueReactNativeMicrotask'](function(){var _0x3c1707={'oOZXp':'error\x20within\x20setInterval'};if(_0x5493dd['RbQHB']('weEhh',_0x5493dd['bwleU'])){throw new Error(_0x3c1707['oOZXp']);}else{_0x56959c=_0x36be65++;}});_0x4efb49=_0x36be65++;}else{const _0x5c2903=JSTimers['setTimeout'](()=>{});JSTimers['clearTimeout'](_0x5c2903);NativeTiming['deleteTimer']=jest['fn']();JSTimers['clearTimeout'](null);expect(NativeTiming['deleteTimer']['mock']['calls']['length'])['toBe'](0x0);}});JSTimers['callReactNativeMicrotasks']();_0x2c2588['utqST'](expect,_0x2bcc61)['toBe'](0x0);_0x2c2588['utqST'](expect,_0x4efb49)['toBe'](0x1);_0x2c2588['utqST'](expect,_0x56959c)['toBe'](0x2);});_0x2c2588['fYZLW'](it,'should call nested queueReactNativeMicrotask',function(){if(_0x2c2588['xtJrX'](_0x2c2588['XmnWp'],_0x2c2588['XmnWp'])){let _0x110d54=![];let _0x3e8413=![];JSTimers['queueReactNativeMicrotask'](function(){if(_0x2c2588['xtJrX'](_0x2c2588['Lujjk'],_0x2c2588['NkkeL'])){_0x110d54=count++;JSTimers['queueReactNativeMicrotask'](function(){thirdCalled=count++;});_0x3e8413=count++;}else{_0x110d54=!![];JSTimers['queueReactNativeMicrotask'](function(){_0x3e8413=!![];});}});JSTimers['callReactNativeMicrotasks']();_0x2c2588['zxiaB'](expect,_0x110d54)['toBe'](!![]);_0x2c2588['zxiaB'](expect,_0x3e8413)['toBe'](!![]);}else{callCount+=0x1;}});_0x2c2588['fYZLW'](it,_0x2c2588['waZYX'],function(){if(_0x2c2588['VJhRJ']!==_0x2c2588['mEYCB']){const _0x4dc51=jest['fn']();const _0x4ba0e3=JSTimers['requestAnimationFrame'](_0x4dc51);JSTimers['callTimers']([_0x4ba0e3]);_0x2c2588['okZuA'](expect,_0x4dc51)['toBeCalledTimes'](0x1);}else{var _0x481360={'SFVGE':_0x2c2588['nKdbP']};const _0x3e27d1=JSTimers['setTimeout'](function(){throw new Error(_0x481360['SFVGE']);});_0x2c2588['okZuA'](expect,JSTimers['callTimers']['bind'](null,[_0x3e27d1]))['toThrowError']('error\x20within\x20setTimeout');}});_0x2c2588['fYZLW'](it,_0x2c2588['CEqIW'],function(){const _0x44082b=jest['fn']();JSTimers['setTimeout'](_0x44082b,0xa);_0x2c2588['okZuA'](expect,_0x44082b)['not']['toBeCalled']();JSTimers['setInterval'](_0x44082b,0xa);_0x2c2588['okZuA'](expect,_0x44082b)['not']['toBeCalled']();JSTimers['requestAnimationFrame'](_0x44082b);_0x2c2588['xTDMj'](expect,_0x44082b)['not']['toBeCalled']();});it(_0x2c2588['tUMzs'],function(){const _0x529dd2=jest['fn']();const _0x3cd0e2=JSTimers['setInterval'](_0x529dd2,0xa);JSTimers['callTimers']([_0x3cd0e2]);JSTimers['callTimers']([_0x3cd0e2]);JSTimers['callTimers']([_0x3cd0e2]);JSTimers['callTimers']([_0x3cd0e2]);_0x2c2588['xTDMj'](expect,_0x529dd2)['toBeCalledTimes'](0x4);});_0x2c2588['JQRKh'](it,'should only call the function who\'s id we pass in',function(){let _0x424427=![];let _0xbe4a15=![];JSTimers['setTimeout'](function(){var _0x905327={'Bfwzw':_0x2c2588['Ddnyr'],'kJTnX':_0x2c2588['vMOTQ'],'FoVnK':function(_0x3d2cc9,_0xd139b4){return _0x2c2588['MRThN'](_0x3d2cc9,_0xd139b4);}};if(_0x2c2588['HNjDC'](_0x2c2588['quGPz'],_0x2c2588['quGPz'])){var _0x221c47={'KynpA':_0x905327['Bfwzw'],'xtuBl':_0x905327['kJTnX']};const _0x14cd0f=JSTimers['setTimeout'](function(){throw new Error(_0x221c47['KynpA']);});const _0x31890=JSTimers['setTimeout'](function(){throw new Error(_0x221c47['xtuBl']);});_0x905327['FoVnK'](expect,JSTimers['callTimers']['bind'](null,[_0x14cd0f,_0x31890]))['toThrowError']('first error');}else{_0x424427=!![];}});const _0xcf38dd=JSTimers['setTimeout'](function(){_0xbe4a15=!![];});JSTimers['callTimers']([_0xcf38dd]);_0x2c2588['MRThN'](expect,_0x424427)['toBe'](![]);_0x2c2588['yJWJX'](expect,_0xbe4a15)['toBe'](!![]);});it(_0x2c2588['OoaKj'],function(){let _0x22ae15=![];let _0xa63349=![];const _0x5ecd00=JSTimers['setTimeout'](function(){_0x22ae15=!![];});const _0x1794f1=JSTimers['setTimeout'](function(){_0xa63349=!![];});JSTimers['callTimers']([_0x5ecd00,_0x1794f1]);expect(_0x22ae15)['toBe'](!![]);_0x2c2588['CgLEx'](expect,_0xa63349)['toBe'](!![]);});_0x2c2588['JQRKh'](it,_0x2c2588['jIBPz'],function(){const _0x35c6a9=JSTimers['setTimeout'](function(){throw new Error(_0x2c2588['hqDWn']);},0xa);let _0x46df5b=![];const _0x234d92=JSTimers['setTimeout'](function(){_0x46df5b=!![];},0xa);_0x2c2588['CgLEx'](expect,JSTimers['callTimers']['bind'](null,[_0x35c6a9,_0x234d92]))['toThrow']();_0x2c2588['CgLEx'](expect,_0x46df5b)['toBe'](!![]);});it(_0x2c2588['tlONF'],function(){var _0x1846fb={'Hkgen':_0x2c2588['vMOTQ'],'rfKSw':function(_0x562827,_0x83f992){return _0x2c2588['TDoKC'](_0x562827,_0x83f992);}};if(_0x2c2588['LAXUo']('BlGin',_0x2c2588['eYYkU'])){throw new Error(_0x1846fb['Hkgen']);}else{const _0x316f7a=JSTimers['setTimeout'](function(){if(_0x2c2588['zYGNm']===_0x2c2588['ClBNH']){const _0xd3dd16=jest['fn']();const _0x189572=JSTimers['setTimeout'](_0xd3dd16,0xa);JSTimers['clearTimeout'](_0x189572);JSTimers['callTimers']([_0x189572]);expect(_0xd3dd16)['not']['toBeCalled']();_0x1846fb['rfKSw'](expect,console['warn'])['not']['toBeCalled']();}else{throw new Error('error');}},0xa);_0x2c2588['TDoKC'](expect,JSTimers['callTimers']['bind'](null,[_0x316f7a]))['toThrow'](_0x2c2588['hqDWn']);JSTimers['callTimers']['bind'](null,[_0x316f7a]);}});_0x2c2588['JQRKh'](it,_0x2c2588['ScWhE'],function(){const _0x42610a=jest['fn']();const _0xd0c6f8=JSTimers['setTimeout'](_0x42610a,0xa);JSTimers['clearTimeout'](_0xd0c6f8);JSTimers['callTimers']([_0xd0c6f8]);_0x2c2588['Juhwr'](expect,_0x42610a)['not']['toBeCalled']();_0x2c2588['Juhwr'](expect,console['warn'])['not']['toBeCalled']();});_0x2c2588['lOUfF'](it,'should warn when callTimers is called with garbage timer id',function(){JSTimers['callTimers']([0x539]);_0x2c2588['Juhwr'](expect,console['warn'])['toBeCalled']();});it(_0x2c2588['qKjOX'],function(){const _0x382627=jest['fn']();const _0xd195bd=JSTimers['setTimeout'](_0x382627,0xa);JSTimers['callTimers']([_0xd195bd]);_0x2c2588['Juhwr'](expect,_0x382627)['toBeCalledTimes'](0x1);JSTimers['callTimers']([_0xd195bd]);_0x2c2588['qDoeW'](expect,_0x382627)['toBeCalledTimes'](0x1);expect(console['warn'])['not']['toBeCalled']();});it(_0x2c2588['fVNdp'],function(){const _0x38a67a=jest['fn']();const _0x518105=JSTimers['requestAnimationFrame'](_0x38a67a,0xa);JSTimers['callTimers']([_0x518105]);_0x2c2588['UsbhO'](expect,_0x38a67a)['toBeCalledTimes'](0x1);JSTimers['callTimers']([_0x518105]);expect(_0x38a67a)['toBeCalledTimes'](0x1);_0x2c2588['fYKNp'](expect,console['warn'])['not']['toBeCalled']();});_0x2c2588['lOUfF'](it,_0x2c2588['fneyu'],function(){const _0x4a475b=JSTimers['setTimeout'](function(){throw new Error(_0x2c2588['Ddnyr']);});const _0x3186c5=JSTimers['setTimeout'](function(){throw new Error('second error');});_0x2c2588['IKYtP'](expect,JSTimers['callTimers']['bind'](null,[_0x4a475b,_0x3186c5]))['toThrowError'](_0x2c2588['Ddnyr']);});_0x2c2588['vqYpK'](it,_0x2c2588['QRWyn'],function(){var _0x40b53f={'CLuJB':_0x2c2588['FvDnG']};JSTimers['queueReactNativeMicrotask'](function(){throw new Error(_0x40b53f['CLuJB']);});NativeTiming['createTimer']=jest['fn']();JSTimers['callReactNativeMicrotasks']();expect(NativeTiming['createTimer'])['toBeCalled']();const _0x236402=NativeTiming['createTimer']['mock']['calls'][0x0][0x0];_0x2c2588['IKYtP'](expect,JSTimers['callTimers']['bind'](null,[_0x236402]))['toThrowError']('error\x20within\x20queueReactNativeMicrotask');});_0x2c2588['vqYpK'](it,_0x2c2588['rocDS'],function(){JSTimers['queueReactNativeMicrotask'](function(){throw new Error(_0x2c2588['Ddnyr']);});JSTimers['queueReactNativeMicrotask'](function(){throw new Error('second error');});NativeTiming['createTimer']=jest['fn']();JSTimers['callReactNativeMicrotasks']();expect(NativeTiming['createTimer']['mock']['calls']['length'])['toBe'](0x2);const _0x114b8d=NativeTiming['createTimer']['mock']['calls'][0x0][0x0];_0x2c2588['IKYtP'](expect,JSTimers['callTimers']['bind'](null,[_0x114b8d]))['toThrowError'](_0x2c2588['Ddnyr']);const _0x2dc748=NativeTiming['createTimer']['mock']['calls'][0x1][0x0];_0x2c2588['IKYtP'](expect,JSTimers['callTimers']['bind'](null,[_0x2dc748]))['toThrowError'](_0x2c2588['vMOTQ']);});_0x2c2588['CEhsm'](it,'should pass along errors thrown from setTimeout',function(){const _0x5bf333=JSTimers['setTimeout'](function(){throw new Error(_0x2c2588['nKdbP']);});expect(JSTimers['callTimers']['bind'](null,[_0x5bf333]))['toThrowError']('error\x20within\x20setTimeout');});_0x2c2588['CEhsm'](it,_0x2c2588['XxhsR'],function(){const _0x43272f=JSTimers['setTimeout'](function(){throw new Error(_0x2c2588['Ddnyr']);});const _0x3e7951=JSTimers['setTimeout'](function(){throw new Error('second error');});NativeTiming['createTimer']=jest['fn']();expect(JSTimers['callTimers']['bind'](null,[_0x43272f,_0x3e7951]))['toThrowError'](_0x2c2588['Ddnyr']);_0x2c2588['cVgml'](expect,NativeTiming['createTimer']['mock']['calls']['length'])['toBe'](0x1);const _0x14ceff=NativeTiming['createTimer']['mock']['calls'][0x0][0x0];_0x2c2588['UYKZl'](expect,JSTimers['callTimers']['bind'](null,[_0x14ceff]))['toThrowError']('second error');});_0x2c2588['CEhsm'](it,'should\x20pass\x20along\x20errors\x20thrown\x20from\x20setInterval',function(){var _0x3f580a={'Mknmw':function(_0x4194cf,_0x12a438){return _0x2c2588['FLZln'](_0x4194cf,_0x12a438);},'lbBQZ':_0x2c2588['QiCFX'],'ljNLF':_0x2c2588['YvXFG'],'JWOOb':_0x2c2588['YTXCC']};const _0x43bbcc=JSTimers['setInterval'](function(){var _0x379304={'JeZrE':function(_0x1670ac,_0x28554f){return _0x1670ac(_0x28554f);}};if(_0x3f580a['Mknmw'](_0x3f580a['lbBQZ'],_0x3f580a['ljNLF'])){let _0x4314d1=0x0;let _0x4639a7=null;let _0x4a8690=null;JSTimers['queueReactNativeMicrotask'](function(){_0x4639a7=_0x4314d1++;});JSTimers['queueReactNativeMicrotask'](function(){_0x4a8690=_0x4314d1++;});JSTimers['callReactNativeMicrotasks']();_0x379304['JeZrE'](expect,_0x4639a7)['toBe'](0x0);expect(_0x4a8690)['toBe'](0x1);}else{throw new Error(_0x3f580a['JWOOb']);}});_0x2c2588['UYKZl'](expect,JSTimers['callTimers']['bind'](null,[_0x43bbcc]))['toThrowError'](_0x2c2588['YTXCC']);});_0x2c2588['AwUzg'](it,_0x2c2588['unacH'],function(){const _0x1d19de=JSTimers['setTimeout'](()=>{});JSTimers['clearTimeout'](_0x1d19de);NativeTiming['deleteTimer']=jest['fn']();JSTimers['clearTimeout'](null);expect(NativeTiming['deleteTimer']['mock']['calls']['length'])['toBe'](0x0);});});