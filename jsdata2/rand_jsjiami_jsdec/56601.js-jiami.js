'use strict';const common=require('../common');const assert=require('assert');const async_hooks=require('async_hooks');const fnsToTest=[setTimeout,_0xe661d=>{var _0x1eaebe={'KxCia':function(_0x2edab5){return _0x2edab5();},'lyolb':function(_0x198eff,_0x9b7984){return _0x198eff(_0x9b7984);},'wwOeI':function(_0x4923c0,_0x3925f9){return _0x4923c0!==_0x3925f9;},'FdYtS':'FaJvL','bZXaB':'zamIo','ozCuK':function(_0x434c69,_0x30c42d){return _0x434c69(_0x30c42d);},'xANYB':function(_0x3e4619,_0x38f301){return _0x3e4619(_0x38f301);}};_0x1eaebe['xANYB'](setImmediate,()=>{var _0x358b7a={'puEpb':function(_0x1df6d5){return _0x1eaebe['KxCia'](_0x1df6d5);},'ZAwWO':function(_0x445219,_0x5f3f5c){return _0x1eaebe['lyolb'](_0x445219,_0x5f3f5c);}};if(_0x1eaebe['wwOeI'](_0x1eaebe['FdYtS'],_0x1eaebe['bZXaB'])){_0xe661d();_0x1eaebe['ozCuK'](setImmediate,()=>{hook['disable']();});}else{process['nextTick'](()=>{_0x358b7a['puEpb'](_0xe661d);_0x358b7a['ZAwWO'](setImmediate,()=>{hook['disable']();assert['strictEqual'](fnsToTest['length'],0x0);});});}});},_0x36f94e=>{var _0x533492={'OXHTt':function(_0x1b6bdd){return _0x1b6bdd();},'xfjKn':function(_0x17e939,_0x41b9cd){return _0x17e939(_0x41b9cd);},'YpnsP':function(_0x1510f5,_0x24f722){return _0x1510f5!==_0x24f722;},'mZNEU':'kOiGK','wDOri':'ibXEj','cOWKX':function(_0x708327,_0x337c9a){return _0x708327(_0x337c9a);}};_0x533492['cOWKX'](setImmediate,()=>{var _0x179777={'rLMyY':function(_0x5cd482){return _0x533492['OXHTt'](_0x5cd482);},'BOcxi':function(_0x16e7ca,_0x15b7ad){return _0x533492['xfjKn'](_0x16e7ca,_0x15b7ad);}};if(_0x533492['YpnsP'](_0x533492['mZNEU'],_0x533492['wDOri'])){process['nextTick'](()=>{_0x179777['rLMyY'](_0x36f94e);_0x179777['BOcxi'](setImmediate,()=>{hook['disable']();assert['strictEqual'](fnsToTest['length'],0x0);});});}else{hook['disable']();_0x533492['OXHTt'](nextTest);}});}];const hook=async_hooks['createHook']({'before':common['mustNotCall'](),'after':common['mustCall'](()=>{},0x3),'destroy':common['mustCall'](()=>{hook['disable']();nextTest();},0x3)});nextTest();function nextTest(){var _0xd6a304={'PvKfe':function(_0xd9f877,_0x145f30){return _0xd9f877>_0x145f30;},'LgWrp':function(_0x3c1e5a,_0x529c5a){return _0x3c1e5a===_0x529c5a;},'HtRsF':'lXbBk'};if(fnsToTest['length']>0x0){if(_0xd6a304['LgWrp']('lXbBk',_0xd6a304['HtRsF'])){fnsToTest['shift']()(common['mustCall'](()=>{hook['enable']();}));}else{if(_0xd6a304['PvKfe'](fnsToTest['length'],0x0)){fnsToTest['shift']()(common['mustCall'](()=>{hook['enable']();}));}}}}