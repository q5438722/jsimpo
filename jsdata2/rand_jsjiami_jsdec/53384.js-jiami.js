/**
 * @fileoverview Rule to suggest using "Reflect" api over Function/Object methods
 * @author Keith Cirkel <http://keithcirkel.co.uk>
 * @deprecated in ESLint v3.9.0
 */
'use strict';//------------------------------------------------------------------------------
             // Rule Definition
             //------------------------------------------------------------------------------
module['exports']={'meta':{'type':'suggestion','docs':{'description':'require `Reflect` methods where applicable','category':'ECMAScript\x206','recommended':![],'url':'https://eslint.org/docs/rules/prefer-reflect'},'deprecated':!![],'replacedBy':[],'schema':[{'type':'object','properties':{'exceptions':{'type':'array','items':{'enum':['apply','call','delete','defineProperty','getOwnPropertyDescriptor','getPrototypeOf','setPrototypeOf','isExtensible','getOwnPropertyNames','preventExtensions']},'uniqueItems':!![]}},'additionalProperties':![]}],'messages':{'preferReflect':'Avoid using {{existing}}, instead use {{substitute}}.'}},'create'(_0x366a15){var _0x2fbb77={'MAeQt':function(_0x59931b,_0x48f64a){return _0x59931b&&_0x48f64a;},'GbWSw':function(_0x1c652f,_0xf0b0d1,_0x327e81,_0x390d5e){return _0x1c652f(_0xf0b0d1,_0x327e81,_0x390d5e);},'JuQVB':function(_0x153836,_0x4722d7){return _0x153836===_0x4722d7;},'bnlqr':'IAOhM','VPbnZ':'DICfF','UCATm':'preferReflect','RAKYu':function(_0x1a85a4,_0x1e6d8c){return _0x1a85a4===_0x1e6d8c;},'vknHF':'Identifier','LwTMr':function(_0x1b450f,_0x111bb5){return _0x1b450f!==_0x111bb5;},'xcwZN':'delete','UWHMH':function(_0x30c740,_0x326b24){return _0x30c740!==_0x326b24;},'FlVJF':'AAEyz','lPOnI':'the delete keyword','eLlFX':'Reflect.deleteProperty','bvuaM':function(_0x1bacce,_0x467b05){return _0x1bacce===_0x467b05;},'ZRugn':'hFVYv','odSzy':'Object.getOwnPropertyDescriptor','sYQuT':'Object.setPrototypeOf','JdpIe':'Reflect.apply','verSN':'Reflect.getOwnPropertyDescriptor','ESYQE':'Reflect.getPrototypeOf','leqzQ':'Reflect.setPrototypeOf','UmRgl':'Reflect.getOwnPropertyNames','lAahV':'Reflect.preventExtensions'};const _0x385d63={'apply':'Function.prototype.apply','call':'Function.prototype.call','defineProperty':'Object.defineProperty','getOwnPropertyDescriptor':_0x2fbb77['odSzy'],'getPrototypeOf':'Object.getPrototypeOf','setPrototypeOf':_0x2fbb77['sYQuT'],'isExtensible':'Object.isExtensible','getOwnPropertyNames':'Object.getOwnPropertyNames','preventExtensions':'Object.preventExtensions'};const _0x13d458={'apply':_0x2fbb77['JdpIe'],'call':'Reflect.apply','defineProperty':'Reflect.defineProperty','getOwnPropertyDescriptor':_0x2fbb77['verSN'],'getPrototypeOf':_0x2fbb77['ESYQE'],'setPrototypeOf':_0x2fbb77['leqzQ'],'isExtensible':'Reflect.isExtensible','getOwnPropertyNames':_0x2fbb77['UmRgl'],'preventExtensions':_0x2fbb77['lAahV']};const _0x29459e=(_0x366a15['options'][0x0]||{})['exceptions']||[];function _0x2f2c10(_0x505647,_0x4ed5a6,_0x12d128){if(_0x2fbb77['JuQVB'](_0x2fbb77['bnlqr'],_0x2fbb77['VPbnZ'])){const _0x557251=(_0x505647['callee']['property']||{})['name'];const _0x3522f6=(_0x505647['callee']['object']||{})['name']==='Reflect';const _0x57d8fd=Object['prototype']['hasOwnProperty']['call'](_0x13d458,_0x557251);const _0x4863f7=_0x29459e['indexOf'](_0x557251)!==-0x1;if(_0x2fbb77['MAeQt'](_0x57d8fd,!_0x3522f6)&&!_0x4863f7){_0x2fbb77['GbWSw'](_0x2f2c10,_0x505647,_0x385d63[_0x557251],_0x13d458[_0x557251]);}}else{_0x366a15['report']({'node':_0x505647,'messageId':_0x2fbb77['UCATm'],'data':{'existing':_0x4ed5a6,'substitute':_0x12d128}});}}return{'CallExpression'(_0x351a7e){const _0xdec192=(_0x351a7e['callee']['property']||{})['name'];const _0x5cfa8f=_0x2fbb77['RAKYu']((_0x351a7e['callee']['object']||{})['name'],'Reflect');const _0xbadb4e=Object['prototype']['hasOwnProperty']['call'](_0x13d458,_0xdec192);const _0x33e690=_0x2fbb77['UWHMH'](_0x29459e['indexOf'](_0xdec192),-0x1);if(_0x2fbb77['MAeQt'](_0xbadb4e,!_0x5cfa8f)&&!_0x33e690){if(_0x2fbb77['FlVJF']==='kDQvH'){const _0x1984bf=_0x2fbb77['RAKYu'](_0x351a7e['operator'],'delete');const _0x5c2df9=_0x351a7e['argument']['type']===_0x2fbb77['vknHF'];const _0x232ead=_0x2fbb77['LwTMr'](_0x29459e['indexOf'](_0x2fbb77['xcwZN']),-0x1);if(_0x1984bf&&!_0x5c2df9&&!_0x232ead){_0x2f2c10(_0x351a7e,'the delete keyword','Reflect.deleteProperty');}}else{_0x2f2c10(_0x351a7e,_0x385d63[_0xdec192],_0x13d458[_0xdec192]);}}},'UnaryExpression'(_0x3da9a4){var _0x10ac44={'qGNta':function(_0xc7aeab,_0x17502c,_0x27458d,_0x307c1d){return _0xc7aeab(_0x17502c,_0x27458d,_0x307c1d);},'mCPNJ':_0x2fbb77['lPOnI'],'VWadw':_0x2fbb77['eLlFX']};if(_0x2fbb77['bvuaM'](_0x2fbb77['ZRugn'],'DmjRI')){_0x10ac44['qGNta'](_0x2f2c10,_0x3da9a4,_0x10ac44['mCPNJ'],_0x10ac44['VWadw']);}else{const _0x50c59c=_0x3da9a4['operator']===_0x2fbb77['xcwZN'];const _0x474495=_0x3da9a4['argument']['type']===_0x2fbb77['vknHF'];const _0x57f161=_0x2fbb77['UWHMH'](_0x29459e['indexOf']('delete'),-0x1);if(_0x2fbb77['MAeQt'](_0x50c59c,!_0x474495)&&!_0x57f161){_0x2fbb77['GbWSw'](_0x2f2c10,_0x3da9a4,_0x2fbb77['lPOnI'],_0x2fbb77['eLlFX']);}}}};}};