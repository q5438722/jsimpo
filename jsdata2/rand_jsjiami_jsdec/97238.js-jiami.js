/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails react-core
 * @jest-environment node
 */
/* eslint-disable no-for-of-loops/no-for-of-loops */
'use strict';let Scheduler;let runtime;let performance;let cancelCallback;let scheduleCallback;let NormalPriority;let UserBlockingPriority;describe('SchedulerDOMSetImmediate',()=>{var _0x302a66={'dsEUT':'Task','LgWzm':function(_0x475496,_0x2e0ac8){return _0x475496!==_0x2e0ac8;},'yicsM':'mTIBW','RWKzx':'OVMLf','nGdJB':function(_0x3f9da9){return _0x3f9da9();},'lgfJx':'scheduler','JYqJM':function(_0x164119,_0x29b150){return _0x164119(_0x29b150);},'hURnQ':function(_0x3a3ace,_0x49b6ca){return _0x3a3ace(_0x49b6ca);},'pyXhg':'Test\x20exited\x20without\x20clearing\x20log.','Ypxku':'kZhDM','jXIhX':function(_0x42af8f,_0x539163){return _0x42af8f!==_0x539163;},'dEmOb':'cZORa','DxqMh':function(_0x3d9840,_0x2668ce){return _0x3d9840(_0x2668ce);},'WubRI':'Message\x20event\x20already\x20scheduled','bPFmo':'Set\x20Immediate','pJyEb':function(_0xe1f948,_0x5da4ca){return _0xe1f948!==_0x5da4ca;},'QmdlJ':'LBbZi','sXnyk':'hDvbQ','QsOUX':function(_0x3cd894,_0x42a84f){return _0x3cd894(_0x42a84f);},'LgEqz':'No\x20setImmediate\x20was\x20scheduled','pcjbU':function(_0x51d043,_0x205856){return _0x51d043(_0x205856);},'llPUR':function(_0x8ea58c){return _0x8ea58c();},'nWxLg':function(_0x19b8db,_0x3ed7d0){return _0x19b8db!==_0x3ed7d0;},'Zzfhp':'cVMlU','mphvt':'VCyhV','qdFwW':'Log\x20is\x20not\x20empty.\x20Call\x20assertLog\x20before\x20continuing.','EXGCz':'ionlf','MPsgt':'3|2|4|0|1|5|6','EjoQB':'setImmediate\x20Callback','hhAVf':function(_0x133009,_0xfbedac,_0x5e2db9){return _0x133009(_0xfbedac,_0x5e2db9);},'XfrzA':'Continuation','RWqRm':function(_0x145ce4,_0x1fa7c1){return _0x145ce4===_0x1fa7c1;},'zWpMo':function(_0x571747,_0x2f9f27){return _0x571747(_0x2f9f27);},'eSaPy':function(_0x47653c,_0x94f6c1){return _0x47653c(_0x94f6c1);},'GXzUk':'BFOqI','GRVYI':'ggZdc','vkISL':'2|3|4|0|1','PZrNK':function(_0x5bddc4,_0x2c4bf6){return _0x5bddc4(_0x2c4bf6);},'vjfEJ':'WOogB','ZpkPg':'ifsRn','szksi':function(_0x84a932,_0x4f1295,_0x34ab9b){return _0x84a932(_0x4f1295,_0x34ab9b);},'HrqHx':function(_0x3d464e,_0x4597f3){return _0x3d464e!==_0x4597f3;},'TXoSd':'ljGNY','njXRi':function(_0x3610e0,_0x3fb50e,_0x30570e){return _0x3610e0(_0x3fb50e,_0x30570e);},'bnHNl':function(_0x5523d4,_0x439045,_0x1f2bb4){return _0x5523d4(_0x439045,_0x1f2bb4);},'dNPxX':'vQeMf','siaMY':'6|5|3|8|4|7|2|1|0','qNNBQ':'kNGzH','ImuGk':'YOZSm','lUIDo':'VMnlv','DZQct':function(_0x3332d4,_0x3b1f76,_0x3c13e6){return _0x3332d4(_0x3b1f76,_0x3c13e6);},'cFAZN':'1|6|3|4|2|5|0|7','bbqkA':'Oops!','JOJSq':function(_0x5ac7c2,_0x583a96,_0x22bd80){return _0x5ac7c2(_0x583a96,_0x22bd80);},'qYMsT':'Yay','SiDST':'ANLqM','rbjNf':function(_0x5c8d3d,_0x2bbd6d,_0x2f263d){return _0x5c8d3d(_0x2bbd6d,_0x2f263d);},'BZHft':'ldZIB','DfUtQ':'4|6|0|5|2|3|1','PBHuS':function(_0x2578de,_0x4b8fde){return _0x2578de===_0x4b8fde;},'xejiS':'tACLf','AjHki':'UgJpn','NqVCS':'pzxxl','tbPbf':function(_0x40da5c,_0x1c9d0e,_0x1b4371){return _0x40da5c(_0x1c9d0e,_0x1b4371);},'yXLQK':'ZZqCF','deAcL':function(_0x3d1ecd,_0x13ea7d){return _0x3d1ecd(_0x13ea7d);},'imMnY':function(_0x56829f,_0x2969c3,_0x3446a4){return _0x56829f(_0x2969c3,_0x3446a4);},'PQwEo':function(_0x301d8e,_0x3c5eb0){return _0x301d8e(_0x3c5eb0);},'HesKe':function(_0x1bbeea,_0x15f2b8){return _0x1bbeea(_0x15f2b8);},'oaBPI':'does not use setImmediate override','qJUFG':function(_0x104aaa,_0x2c41b9,_0x4b963b){return _0x104aaa(_0x2c41b9,_0x4b963b);},'nlIcI':'task that finishes before deadline','HhefG':function(_0x32a2c5,_0x352a65,_0x40cb2c){return _0x32a2c5(_0x352a65,_0x40cb2c);},'VHKVJ':'task\x20with\x20continuation','cGkwF':function(_0xf87f2,_0x445423,_0x136bfb){return _0xf87f2(_0x445423,_0x136bfb);},'tscqR':'multiple tasks','vVrqV':function(_0xa1e8b7,_0x288a8,_0xa2df31){return _0xa1e8b7(_0x288a8,_0xa2df31);},'rNDtG':'multiple tasks at different priority','NDQas':function(_0x553220,_0x3829f1,_0x8444b4){return _0x553220(_0x3829f1,_0x8444b4);},'fMDAF':'throws when a task errors then continues in a new event','JLnUi':function(_0x1ba6ee,_0x5796f7,_0x2bd06f){return _0x1ba6ee(_0x5796f7,_0x2bd06f);}};_0x302a66['PQwEo'](beforeEach,()=>{if(_0x302a66['LgWzm'](_0x302a66['yicsM'],_0x302a66['RWKzx'])){jest['resetModules']();runtime=_0x302a66['nGdJB'](_0x3508da);jest['unmock'](_0x302a66['lgfJx']);performance=global['performance'];Scheduler=_0x302a66['JYqJM'](require,'scheduler');cancelCallback=Scheduler['unstable_cancelCallback'];scheduleCallback=Scheduler['unstable_scheduleCallback'];NormalPriority=Scheduler['unstable_NormalPriority'];UserBlockingPriority=Scheduler['unstable_UserBlockingPriority'];}else{runtime['log'](_0x302a66['dsEUT']);}});_0x302a66['HesKe'](afterEach,()=>{delete global['performance'];if(!runtime['isLogEmpty']()){throw _0x302a66['hURnQ'](Error,_0x302a66['pyXhg']);}});function _0x3508da(){var _0xe648f9={'RvAkO':_0x302a66['qdFwW'],'fmmUy':function(_0x3a53e3,_0x452bda){return _0x302a66['nWxLg'](_0x3a53e3,_0x452bda);},'eavdw':_0x302a66['EXGCz'],'DWAmU':'EcMPA','johfX':_0x302a66['MPsgt'],'NsLBP':_0x302a66['EjoQB'],'PZfvi':_0x302a66['dsEUT'],'vnRyv':'Yield at 5ms','WcVMk':_0x302a66['bPFmo'],'JbjfA':function(_0x3c7a3b,_0xd46ddc,_0x1ae4d4){return _0x302a66['hhAVf'](_0x3c7a3b,_0xd46ddc,_0x1ae4d4);},'tQDGH':_0x302a66['XfrzA'],'icLMr':function(_0x20513e,_0x9dbfe6){return _0x302a66['RWqRm'](_0x20513e,_0x9dbfe6);},'rRZce':function(_0x553585,_0x189c22){return _0x302a66['zWpMo'](_0x553585,_0x189c22);},'mGdhD':function(_0x2e355c,_0x24771d){return _0x302a66['eSaPy'](_0x2e355c,_0x24771d);},'ZbsTH':_0x302a66['GXzUk']};let _0x393547=0x0;let _0x3d6ce5=[];let _0x1e7b9f=0x0;global['performance']={'now'(){if(_0x302a66['LgWzm'](_0x302a66['Ypxku'],_0x302a66['Ypxku'])){throw Error(_0xe648f9['RvAkO']);}else{return _0x1e7b9f;}}};global['setTimeout']=(_0x1e4cd0,_0x19ef0f)=>{if(_0x302a66['jXIhX'](_0x302a66['dEmOb'],'aDlZw')){const _0x48f665=_0x393547++;_0x302a66['DxqMh'](_0x3818a4,'Set Timer');return _0x48f665;}else{runtime['log']('A');runtime['advanceTime'](0x1387);}};global['clearTimeout']=_0x1806d9=>{};global['MessageChannel']=function(){if(_0xe648f9['fmmUy'](_0xe648f9['eavdw'],_0xe648f9['DWAmU'])){return{'port1':{},'port2':{'postMessage'(){throw Error('Should be unused');}}};}else{_0x3d6ce5['push'](val);}};let _0x29d8d1=null;global['setImmediate']=function(_0xb75e6c){if(_0x302a66['jXIhX']('GSldY','UjALV')){if(_0x29d8d1){throw _0x302a66['DxqMh'](Error,_0x302a66['WubRI']);}_0x302a66['DxqMh'](_0x3818a4,_0x302a66['bPFmo']);_0x29d8d1=_0xb75e6c;}else{var _0x2f3d1f=_0xe648f9['johfX']['split']('|'),_0x5a04d1=0x0;while(!![]){switch(_0x2f3d1f[_0x5a04d1++]){case'0':runtime['fireSetImmediate']();continue;case'1':runtime['assertLog']([_0xe648f9['NsLBP'],_0xe648f9['PZfvi'],_0xe648f9['vnRyv'],_0xe648f9['WcVMk']]);continue;case'2':_0xe648f9['JbjfA'](scheduleCallback,NormalPriority,()=>{var _0x243da5={'vUVKo':_0x49bb24['WXKwg']};runtime['log'](_0x49bb24['fyUTr']);while(!Scheduler['unstable_shouldYield']()){runtime['advanceTime'](0x1);}runtime['log']('Yield at '+performance['now']()+'ms');return()=>{runtime['log'](_0x243da5['vUVKo']);};});continue;case'3':var _0x49bb24={'WXKwg':_0xe648f9['tQDGH'],'fyUTr':'Task'};continue;case'4':runtime['assertLog']([_0xe648f9['WcVMk']]);continue;case'5':runtime['fireSetImmediate']();continue;case'6':runtime['assertLog'](['setImmediate Callback','Continuation']);continue;}break;}}};function _0x18659a(){if(_0x3d6ce5['length']!==0x0){throw Error(_0xe648f9['RvAkO']);}}function _0x4ecc55(_0x5fac09){_0x1e7b9f+=_0x5fac09;}function _0x2b3dfc(){if(_0x302a66['pJyEb'](_0x302a66['QmdlJ'],_0x302a66['sXnyk'])){_0x302a66['nGdJB'](_0x18659a);if(!_0x29d8d1){throw _0x302a66['QsOUX'](Error,_0x302a66['LgEqz']);}const _0x95dfbb=_0x29d8d1;_0x29d8d1=null;_0x302a66['pcjbU'](_0x3818a4,'setImmediate\x20Callback');_0x302a66['llPUR'](_0x95dfbb);}else{return _0x3d6ce5['length']===0x0;}}function _0x3818a4(_0x30f4ac){if(_0x302a66['nWxLg'](_0x302a66['Zzfhp'],_0x302a66['mphvt'])){_0x3d6ce5['push'](_0x30f4ac);}else{runtime['log']('B');}}function _0x347d11(){return _0xe648f9['icLMr'](_0x3d6ce5['length'],0x0);}function _0x56e6e0(_0x2e9787){var _0x4044a5={'oXfUI':function(_0x1bee23,_0x1501df){return _0xe648f9['rRZce'](_0x1bee23,_0x1501df);},'AzHsA':'scheduler','YRniT':function(_0x3f698d,_0xce872c){return _0xe648f9['mGdhD'](_0x3f698d,_0xce872c);}};if(_0xe648f9['icLMr'](_0xe648f9['ZbsTH'],'BFOqI')){const _0x3ddcd7=_0x3d6ce5;_0x3d6ce5=[];expect(_0x3ddcd7)['toEqual'](_0x2e9787);}else{delete global['setImmediate'];jest['unmock'](_0x4044a5['AzHsA']);_0x4044a5['YRniT'](expect,()=>{_0x4044a5['oXfUI'](require,_0x4044a5['AzHsA']);})['not']['toThrow']();}}return{'advanceTime':_0x4ecc55,'fireSetImmediate':_0x2b3dfc,'log':_0x3818a4,'isLogEmpty':_0x347d11,'assertLog':_0x56e6e0};}_0x302a66['imMnY'](it,_0x302a66['oaBPI'],()=>{var _0x3b8587={'bzqtZ':_0x302a66['dsEUT'],'MSAST':function(_0x54c4e6,_0x86b46f,_0x3ad2bc){return _0x302a66['hhAVf'](_0x54c4e6,_0x86b46f,_0x3ad2bc);},'koUQc':'Set\x20Immediate'};if('ggZdc'===_0x302a66['GRVYI']){var _0x283c30='2|4|1|0|3'['split']('|'),_0x5d93cc=0x0;while(!![]){switch(_0x283c30[_0x5d93cc++]){case'0':runtime['fireSetImmediate']();continue;case'1':runtime['assertLog']([_0x302a66['bPFmo']]);continue;case'2':global['setImmediate']=()=>{throw new Error('Should\x20not\x20throw');};continue;case'3':runtime['assertLog'](['setImmediate Callback','Task']);continue;case'4':scheduleCallback(NormalPriority,()=>{runtime['log'](_0x3b8587['bzqtZ']);});continue;}break;}}else{_0x3b8587['MSAST'](scheduleCallback,NormalPriority,()=>{runtime['log']('A');});_0x3b8587['MSAST'](scheduleCallback,NormalPriority,()=>{runtime['log']('B');});runtime['assertLog']([_0x3b8587['koUQc']]);runtime['fireSetImmediate']();runtime['assertLog'](['setImmediate Callback','A','B']);}});_0x302a66['qJUFG'](it,_0x302a66['nlIcI'],()=>{var _0x7ea2dd={'WNuii':function(_0x5b9dcc,_0x5cff86){return _0x302a66['nWxLg'](_0x5b9dcc,_0x5cff86);},'YwlkW':'tGtGr','diRby':'Task'};scheduleCallback(NormalPriority,()=>{if(_0x7ea2dd['WNuii'](_0x7ea2dd['YwlkW'],_0x7ea2dd['YwlkW'])){runtime['log']('A');}else{runtime['log'](_0x7ea2dd['diRby']);}});runtime['assertLog'](['Set\x20Immediate']);runtime['fireSetImmediate']();runtime['assertLog']([_0x302a66['EjoQB'],_0x302a66['dsEUT']]);});_0x302a66['HhefG'](it,_0x302a66['VHKVJ'],()=>{var _0x5b0332={'nLgJP':_0x302a66['WubRI'],'rkXSV':function(_0x5bc924,_0x37ae0b){return _0x302a66['eSaPy'](_0x5bc924,_0x37ae0b);},'EZNGx':function(_0x2e207d,_0x3dcf2a){return _0x302a66['PZrNK'](_0x2e207d,_0x3dcf2a);},'ZfQGr':_0x302a66['XfrzA'],'SwhVG':function(_0x27e897,_0x6d2daa){return _0x27e897!==_0x6d2daa;},'SZWpE':_0x302a66['vjfEJ'],'EoVwL':function(_0x442bb1,_0x8b245f){return _0x302a66['RWqRm'](_0x442bb1,_0x8b245f);},'VBMix':'boqRQ','hCTpF':'WsKoL'};if(_0x302a66['ZpkPg']!==_0x302a66['ZpkPg']){var _0x2f94d4=_0x302a66['vkISL']['split']('|'),_0x4d3b98=0x0;while(!![]){switch(_0x2f94d4[_0x4d3b98++]){case'0':runtime['fireSetImmediate']();continue;case'1':runtime['assertLog']([_0x302a66['EjoQB'],'B','A']);continue;case'2':_0x302a66['hhAVf'](scheduleCallback,NormalPriority,()=>{runtime['log']('A');});continue;case'3':_0x302a66['hhAVf'](scheduleCallback,UserBlockingPriority,()=>{runtime['log']('B');});continue;case'4':runtime['assertLog'](['Set Immediate']);continue;}break;}}else{_0x302a66['szksi'](scheduleCallback,NormalPriority,()=>{if(_0x5b0332['SwhVG'](_0x5b0332['SZWpE'],_0x5b0332['SZWpE'])){throw Error(_0x5b0332['nLgJP']);}else{runtime['log']('Task');while(!Scheduler['unstable_shouldYield']()){if(_0x5b0332['EoVwL'](_0x5b0332['VBMix'],_0x5b0332['hCTpF'])){if(pendingSetImmediateCallback){throw _0x5b0332['rkXSV'](Error,_0x5b0332['nLgJP']);}_0x5b0332['EZNGx'](log,'Set Immediate');pendingSetImmediateCallback=cb;}else{runtime['advanceTime'](0x1);}}runtime['log']('Yield at '+performance['now']()+'ms');return()=>{runtime['log'](_0x5b0332['ZfQGr']);};}});runtime['assertLog'](['Set Immediate']);runtime['fireSetImmediate']();runtime['assertLog']([_0x302a66['EjoQB'],_0x302a66['dsEUT'],'Yield\x20at\x205ms',_0x302a66['bPFmo']]);runtime['fireSetImmediate']();runtime['assertLog'](['setImmediate Callback','Continuation']);}});_0x302a66['cGkwF'](it,_0x302a66['tscqR'],()=>{var _0x37b90d={'rSQQh':_0x302a66['XfrzA']};if(_0x302a66['HrqHx'](_0x302a66['TXoSd'],'jeSVA')){_0x302a66['njXRi'](scheduleCallback,NormalPriority,()=>{runtime['log']('A');});_0x302a66['bnHNl'](scheduleCallback,NormalPriority,()=>{runtime['log']('B');});runtime['assertLog'](['Set Immediate']);runtime['fireSetImmediate']();runtime['assertLog']([_0x302a66['EjoQB'],'A','B']);}else{runtime['log'](_0x37b90d['rSQQh']);}});_0x302a66['vVrqV'](it,_0x302a66['rNDtG'],()=>{var _0x4febd7={'brPQB':function(_0xf058f6,_0x1f6661){return _0xf058f6!==_0x1f6661;},'BlRGU':_0x302a66['dNPxX'],'hvDHJ':_0x302a66['siaMY'],'Ohatz':_0x302a66['lgfJx'],'ldFVR':function(_0x30c69f){return _0x30c69f();}};if(_0x302a66['qNNBQ']==='kNGzH'){_0x302a66['bnHNl'](scheduleCallback,NormalPriority,()=>{if(_0x4febd7['brPQB'](_0x4febd7['BlRGU'],_0x4febd7['BlRGU'])){runtime['log']('B');}else{runtime['log']('A');}});scheduleCallback(UserBlockingPriority,()=>{runtime['log']('B');});runtime['assertLog']([_0x302a66['bPFmo']]);runtime['fireSetImmediate']();runtime['assertLog']([_0x302a66['EjoQB'],'B','A']);}else{var _0x198eff=_0x4febd7['hvDHJ']['split']('|'),_0x11fb13=0x0;while(!![]){switch(_0x198eff[_0x11fb13++]){case'0':UserBlockingPriority=Scheduler['unstable_UserBlockingPriority'];continue;case'1':NormalPriority=Scheduler['unstable_NormalPriority'];continue;case'2':scheduleCallback=Scheduler['unstable_scheduleCallback'];continue;case'3':jest['unmock'](_0x4febd7['Ohatz']);continue;case'4':Scheduler=require(_0x4febd7['Ohatz']);continue;case'5':runtime=_0x4febd7['ldFVR'](_0x3508da);continue;case'6':jest['resetModules']();continue;case'7':cancelCallback=Scheduler['unstable_cancelCallback'];continue;case'8':performance=global['performance'];continue;}break;}}});_0x302a66['NDQas'](it,'multiple tasks with a yield in between',()=>{_0x302a66['DZQct'](scheduleCallback,NormalPriority,()=>{var _0x393dce={'CdYTo':'Task'};if(_0x302a66['ImuGk']===_0x302a66['lUIDo']){runtime['log'](_0x393dce['CdYTo']);}else{runtime['log']('A');runtime['advanceTime'](0x1387);}});scheduleCallback(NormalPriority,()=>{runtime['log']('B');});runtime['assertLog'](['Set Immediate']);runtime['fireSetImmediate']();runtime['assertLog']([_0x302a66['EjoQB'],'A','Set Immediate']);runtime['fireSetImmediate']();runtime['assertLog']([_0x302a66['EjoQB'],'B']);});_0x302a66['NDQas'](it,'cancels tasks',()=>{var _0xedbdce={'KJTyS':'Oops!','LlwzM':function(_0x191da3,_0xb4e072){return _0x191da3(_0xb4e072);}};if(_0x302a66['HrqHx']('ANLqM',_0x302a66['SiDST'])){var _0x2603c5=_0x302a66['cFAZN']['split']('|'),_0xd9a576=0x0;while(!![]){switch(_0x2603c5[_0xd9a576++]){case'0':runtime['fireSetImmediate']();continue;case'1':var _0x51a0b2={'lROyx':'Yay'};continue;case'2':_0x302a66['PZrNK'](expect,()=>runtime['fireSetImmediate']())['toThrow'](_0x302a66['bbqkA']);continue;case'3':scheduleCallback(NormalPriority,()=>{runtime['log'](_0x51a0b2['lROyx']);});continue;case'4':runtime['assertLog']([_0x302a66['bPFmo']]);continue;case'5':runtime['assertLog'](['setImmediate Callback','Oops!','Set\x20Immediate']);continue;case'6':_0x302a66['JOJSq'](scheduleCallback,NormalPriority,()=>{runtime['log'](_0xedbdce['KJTyS']);throw _0xedbdce['LlwzM'](Error,_0xedbdce['KJTyS']);});continue;case'7':runtime['assertLog']([_0x302a66['EjoQB'],_0x302a66['qYMsT']]);continue;}break;}}else{const _0x4ffca8=_0x302a66['rbjNf'](scheduleCallback,NormalPriority,()=>{runtime['log'](_0x302a66['dsEUT']);});runtime['assertLog']([_0x302a66['bPFmo']]);cancelCallback(_0x4ffca8);runtime['assertLog']([]);}});_0x302a66['NDQas'](it,_0x302a66['fMDAF'],()=>{var _0x5e8294={'kObEx':_0x302a66['bbqkA'],'lofxP':function(_0x104ad6,_0x43e31a){return _0x104ad6(_0x43e31a);},'yZPAO':_0x302a66['qYMsT']};if('ldZIB'===_0x302a66['BZHft']){var _0x1b556f=_0x302a66['DfUtQ']['split']('|'),_0x546626=0x0;while(!![]){switch(_0x1b556f[_0x546626++]){case'0':runtime['assertLog'](['Set\x20Immediate']);continue;case'1':runtime['assertLog']([_0x302a66['EjoQB'],'Yay']);continue;case'2':runtime['assertLog']([_0x302a66['EjoQB'],'Oops!','Set\x20Immediate']);continue;case'3':runtime['fireSetImmediate']();continue;case'4':scheduleCallback(NormalPriority,()=>{runtime['log'](_0x5e8294['kObEx']);throw _0x5e8294['lofxP'](Error,_0x5e8294['kObEx']);});continue;case'5':_0x302a66['PZrNK'](expect,()=>runtime['fireSetImmediate']())['toThrow'](_0x302a66['bbqkA']);continue;case'6':_0x302a66['rbjNf'](scheduleCallback,NormalPriority,()=>{runtime['log'](_0x5e8294['yZPAO']);});continue;}break;}}else{runtime['log']('A');}});_0x302a66['JLnUi'](it,'schedule\x20new\x20task\x20after\x20queue\x20has\x20emptied',()=>{var _0x28fd51={'bhpNC':'scheduler','GRZQq':function(_0x293ad2,_0x163b53){return _0x302a66['PZrNK'](_0x293ad2,_0x163b53);}};if(_0x302a66['NqVCS']!==_0x302a66['NqVCS']){return currentTime;}else{_0x302a66['rbjNf'](scheduleCallback,NormalPriority,()=>{if(_0x302a66['PBHuS'](_0x302a66['xejiS'],_0x302a66['AjHki'])){jest['resetModules']();const _0x2f4f0c=global['setImmediate'];try{delete global['setImmediate'];jest['unmock'](_0x28fd51['bhpNC']);_0x28fd51['GRZQq'](expect,()=>{require('scheduler');})['not']['toThrow']();}finally{global['setImmediate']=_0x2f4f0c;}}else{runtime['log']('A');}});runtime['assertLog']([_0x302a66['bPFmo']]);runtime['fireSetImmediate']();runtime['assertLog']([_0x302a66['EjoQB'],'A']);_0x302a66['tbPbf'](scheduleCallback,NormalPriority,()=>{runtime['log']('B');});runtime['assertLog']([_0x302a66['bPFmo']]);runtime['fireSetImmediate']();runtime['assertLog']([_0x302a66['EjoQB'],'B']);}});it('schedule new task after a cancellation',()=>{const _0x2cd795=scheduleCallback(NormalPriority,()=>{runtime['log']('A');});runtime['assertLog']([_0x302a66['bPFmo']]);_0x302a66['deAcL'](cancelCallback,_0x2cd795);runtime['fireSetImmediate']();runtime['assertLog']([_0x302a66['EjoQB']]);_0x302a66['imMnY'](scheduleCallback,NormalPriority,()=>{if('bmcMH'!==_0x302a66['yXLQK']){runtime['log']('B');}else{runtime['log']('B');}});runtime['assertLog'](['Set Immediate']);runtime['fireSetImmediate']();runtime['assertLog']([_0x302a66['EjoQB'],'B']);});});it('does\x20not\x20crash\x20if\x20setImmediate\x20is\x20undefined',()=>{var _0x1008d7={'JmoGb':'yWKRA','OxQtI':'PfWIA','RQOxX':function(_0x2c1820,_0x2912d2){return _0x2c1820(_0x2912d2);},'uOqUc':'scheduler','PAatM':function(_0x41bfd4,_0x1c74cc){return _0x41bfd4(_0x1c74cc);},'ccyvu':function(_0x53d3a0,_0x2aee83){return _0x53d3a0!==_0x2aee83;},'dnowx':'hEeun','RDHpU':'vaqbT','lwGNL':'YLFkb'};jest['resetModules']();const _0x288383=global['setImmediate'];try{if(_0x1008d7['ccyvu'](_0x1008d7['dnowx'],_0x1008d7['dnowx'])){runtime['log']('Task');}else{delete global['setImmediate'];jest['unmock'](_0x1008d7['uOqUc']);_0x1008d7['PAatM'](expect,()=>{if(_0x1008d7['JmoGb']===_0x1008d7['OxQtI']){throw Error('Test exited without clearing log.');}else{_0x1008d7['RQOxX'](require,_0x1008d7['uOqUc']);}})['not']['toThrow']();}}finally{if(_0x1008d7['RDHpU']!==_0x1008d7['lwGNL']){global['setImmediate']=_0x288383;}else{throw _0x1008d7['PAatM'](Error,'No\x20setImmediate\x20was\x20scheduled');}}});