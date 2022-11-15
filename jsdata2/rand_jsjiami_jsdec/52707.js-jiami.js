/*:nodoc:*
 * class ActionAppend
 *
 * This action stores a list, and appends each argument value to the list.
 * This is useful to allow an option to be specified multiple times.
 * This class inherided from [[Action]]
 *
 **/
'use strict';var util=require('util');var Action=require('../action');var c=require('../const');var ActionAppend=module['exports']=function ActionAppend(_0x3608bd){var _0x2e2fb7={'RLDzj':function(_0x537884,_0x3b38e9){return _0x537884||_0x3b38e9;},'fNSkD':function(_0x306d30,_0x31dc51){return _0x306d30+_0x31dc51;},'TWSRb':function(_0x13afd6,_0x54e340){return _0x13afd6+_0x54e340;},'yeKrO':'nargs\x20for\x20append\x20actions\x20must\x20be\x20>\x200;\x20if\x20arg\x20','lgrUq':'strings are not supplying the value to append, ','ZlmVy':'the append const action may be more appropriate','CboAb':'nargs\x20must\x20be\x20OPTIONAL\x20to\x20supply\x20const'};_0x3608bd=_0x2e2fb7['RLDzj'](_0x3608bd,{});if(this['nargs']<=0x0){throw new Error(_0x2e2fb7['fNSkD'](_0x2e2fb7['TWSRb'](_0x2e2fb7['yeKrO'],_0x2e2fb7['lgrUq']),_0x2e2fb7['ZlmVy']));}if(!!this['constant']&&this['nargs']!==c['OPTIONAL']){throw new Error(_0x2e2fb7['CboAb']);}Action['call'](this,_0x3608bd);};util['inherits'](ActionAppend,Action);ActionAppend['prototype']['call']=function(_0x5004cd,_0x2c1e73,_0x1b7ab8){var _0x3b067a=(_0x2c1e73[this['dest']]||[])['slice']();_0x3b067a['push'](_0x1b7ab8);_0x2c1e73['set'](this['dest'],_0x3b067a);};