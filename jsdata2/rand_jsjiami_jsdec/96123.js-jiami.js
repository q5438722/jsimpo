'use strict';// Support: jsdom 13.2+
             // jsdom implements a throwing `window.scrollTo`.
QUnit['config']['scrolltop']=![];QUnit['isIE']=![];QUnit['testUnlessIE']=QUnit['test'];const FILEPATH='/test/data/testinit-jsdom.js';const activeScript=document['currentScript'];const parentUrl=activeScript&&activeScript['src']?activeScript['src']['replace'](/[?#].*/,'')+FILEPATH['replace'](/[^\/]+/g,'..')+'/':'../';const supportjQuery=this['jQuery'];const baseURL=parentUrl+'test/data/';supportjQuery['noConflict'](!![]);window['originaljQuery']=this['jQuery']=undefined;window['original$']=this['$']='replaced';function url(_0x403708){var _0x2a0878={'xbheu':function(_0x5454cc,_0x2291d7){return _0x5454cc+_0x2291d7;},'tceiz':function(_0x5c5c3f,_0x2f0110){return _0x5c5c3f+_0x2f0110;},'TEktj':function(_0x4540ad,_0x51f5c4,_0x62366f){return _0x4540ad(_0x51f5c4,_0x62366f);}};return _0x2a0878['xbheu'](_0x2a0878['xbheu'](_0x2a0878['tceiz'](baseURL,_0x403708),/\?/['test'](_0x403708)?'&':'?')+new Date()['getTime'](),'')+_0x2a0878['TEktj'](parseInt,Math['random']()*0x186a0,0xa);}this['loadTests']=function(){var _0x429293={'vdspc':'load'};window['addEventListener'](_0x429293['vdspc'],function(){window['__karma__']['start']();jQuery['noConflict']();QUnit['start']();});};