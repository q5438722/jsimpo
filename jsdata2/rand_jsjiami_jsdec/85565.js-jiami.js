/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var Class=require('../../../utils/Class');var Events=require('../events');var GetFastValue=require('../../../utils/object/GetFastValue');var ProcessKeyCombo=require('./ProcessKeyCombo');var ResetKeyCombo=require('./ResetKeyCombo');var KeyCombo=new Class({'initialize':function KeyCombo(_0x6094d5,_0x2bb82d,_0x1f2680){var _0x136199={'eSPrL':function(_0xf2d0df,_0x40ac9f){return _0xf2d0df===_0x40ac9f;},'AJQQd':function(_0x23b56c,_0x120990){return _0x23b56c===_0x120990;},'MlYZC':'number','ZbMrC':function(_0xb35247,_0x33614d){return _0xb35247!==_0x33614d;},'kGmXQ':'bJrEt','yPKEt':function(_0x30b399,_0x2ab4ac,_0x54d539){return _0x30b399(_0x2ab4ac,_0x54d539);},'IJvso':function(_0x108c61,_0x8afd83){return _0x108c61(_0x8afd83);},'IeYbQ':'Djeqa','UsAOA':function(_0x4178f7,_0x31f99f){return _0x4178f7<_0x31f99f;},'fsHqI':function(_0x1dec50,_0x49397c){return _0x1dec50===_0x49397c;},'qAdwj':'lZiIt','wEjaw':'string','wTtxU':function(_0x8ba734,_0x5479cb){return _0x8ba734===_0x5479cb;},'ZPffD':'resetOnWrongKey','VxkIl':function(_0x4bd2d1,_0x344b80,_0x1467e1,_0x360c92){return _0x4bd2d1(_0x344b80,_0x1467e1,_0x360c92);},'Tuexu':'resetOnMatch','AXBEq':'deleteOnMatch'};if(_0x1f2680===undefined){_0x1f2680={};}if(_0x136199['UsAOA'](_0x2bb82d['length'],0x2)){return![];}this['manager']=_0x6094d5;this['enabled']=!![];this['keyCodes']=[];for(var _0x5415aa=0x0;_0x136199['UsAOA'](_0x5415aa,_0x2bb82d['length']);_0x5415aa++){if(_0x136199['fsHqI']('MUJUk',_0x136199['qAdwj'])){return;}else{var _0x238f3f=_0x2bb82d[_0x5415aa];if(_0x136199['fsHqI'](typeof _0x238f3f,_0x136199['wEjaw'])){this['keyCodes']['push'](_0x238f3f['toUpperCase']()['charCodeAt'](0x0));}else if(_0x136199['wTtxU'](typeof _0x238f3f,_0x136199['MlYZC'])){this['keyCodes']['push'](_0x238f3f);}else if(_0x238f3f['hasOwnProperty']('keyCode')){this['keyCodes']['push'](_0x238f3f['keyCode']);}}}this['current']=this['keyCodes'][0x0];this['index']=0x0;this['size']=this['keyCodes']['length'];this['timeLastMatched']=0x0;this['matched']=![];this['timeMatched']=0x0;this['resetOnWrongKey']=GetFastValue(_0x1f2680,_0x136199['ZPffD'],!![]);this['maxKeyDelay']=GetFastValue(_0x1f2680,'maxKeyDelay',0x0);this['resetOnMatch']=_0x136199['VxkIl'](GetFastValue,_0x1f2680,_0x136199['Tuexu'],![]);this['deleteOnMatch']=GetFastValue(_0x1f2680,_0x136199['AXBEq'],![]);var _0x4936ec=this;var _0x3c5518=function(_0x3587fb){if(_0x136199['ZbMrC'](_0x136199['kGmXQ'],'bJrEt')){var _0xd2ef1f=_0x2bb82d[_0x5415aa];if(_0x136199['eSPrL'](typeof _0xd2ef1f,'string')){this['keyCodes']['push'](_0xd2ef1f['toUpperCase']()['charCodeAt'](0x0));}else if(_0x136199['AJQQd'](typeof _0xd2ef1f,_0x136199['MlYZC'])){this['keyCodes']['push'](_0xd2ef1f);}else if(_0xd2ef1f['hasOwnProperty']('keyCode')){this['keyCodes']['push'](_0xd2ef1f['keyCode']);}}else{if(_0x4936ec['matched']||!_0x4936ec['enabled']){return;}var _0x4c38ff=_0x136199['yPKEt'](ProcessKeyCombo,_0x3587fb,_0x4936ec);if(_0x4c38ff){_0x4936ec['manager']['emit'](Events['COMBO_MATCH'],_0x4936ec,_0x3587fb);if(_0x4936ec['resetOnMatch']){_0x136199['IJvso'](ResetKeyCombo,_0x4936ec);}else if(_0x4936ec['deleteOnMatch']){if(_0x136199['AJQQd'](_0x136199['IeYbQ'],_0x136199['IeYbQ'])){_0x4936ec['destroy']();}else{this['keyCodes']['push'](_0x238f3f);}}}}};this['onKeyDown']=_0x3c5518;this['manager']['on'](Events['ANY_KEY_DOWN'],this['onKeyDown']);},'progress':{'get':function(){return this['index']/this['size'];}},'destroy':function(){this['enabled']=![];this['keyCodes']=[];this['manager']['off'](Events['ANY_KEY_DOWN'],this['onKeyDown']);this['manager']=null;}});module['exports']=KeyCombo;