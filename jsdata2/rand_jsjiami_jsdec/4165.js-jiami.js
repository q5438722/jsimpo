define(['jquery','underscore','backbone','collections/todos','views/todos','text!templates/stats.html','common'],function(_0x2a4b35,_0x4c61f4,_0x3fdcb4,_0x2359c5,_0x10213f,_0x26ed12,_0xebb934){var _0x3a9076={'jjfqr':function(_0x1561c6,_0x147ec3){return _0x1561c6===_0x147ec3;},'QpspS':'XnvBy','VTxOQ':'ldnuB','yeGcZ':'.footer','uurMS':'.todo-list','xMLoT':'add','Wzyof':'reset','cGNJb':'change:completed','mWdgB':'selected','MEvFD':function(_0x2dd685,_0x5f4dd6){return _0x2dd685+_0x5f4dd6;},'pLltg':function(_0x263f38,_0x349b60){return _0x263f38!==_0x349b60;},'IlTPV':'epfHZ','vgyHY':'9|8|4|5|7|0|3|10|6|1|2','gSIGH':'all','WYEko':'.new-todo','QigXt':'iTNva','wVyxo':'CZLol','LtvrY':'Luiwz','HHdPv':'visible','jJNeq':'anvma','ngyzZ':'DwveV','sFUpH':'[href="#/','LHpwl':'Gmzzy','oUAPR':'cACCZ','cAJjn':'destroy','oXXpq':'LkdDr','crlkQ':'.todoapp','GcmIP':'clearCompleted'};'use strict';// Our overall **AppView** is the top-level piece of UI.
var _0x4577ad=_0x3fdcb4['View']['extend']({'el':_0x3a9076['crlkQ'],'template':_0x4c61f4['template'](_0x26ed12),'events':{'keypress .new-todo':'createOnEnter','click .clear-completed':_0x3a9076['GcmIP'],'click .toggle-all':'toggleAllComplete'},'initialize':function(){if(_0x3a9076['jjfqr'](_0x3a9076['QpspS'],_0x3a9076['VTxOQ'])){todo['save']({'completed':completed});}else{this['allCheckbox']=this['$']('.toggle-all')[0x0];this['$input']=this['$']('.new-todo');this['$footer']=this['$'](_0x3a9076['yeGcZ']);this['$main']=this['$']('.main');this['$todoList']=this['$'](_0x3a9076['uurMS']);this['listenTo'](_0x2359c5,_0x3a9076['xMLoT'],this['addOne']);this['listenTo'](_0x2359c5,_0x3a9076['Wzyof'],this['addAll']);this['listenTo'](_0x2359c5,_0x3a9076['cGNJb'],this['filterOne']);this['listenTo'](_0x2359c5,'filter',this['filterAll']);this['listenTo'](_0x2359c5,'all',_0x4c61f4['debounce'](this['render'],0x0));_0x2359c5['fetch']({'reset':!![]});}},'render':function(){var _0x330c2c=_0x2359c5['completed']()['length'];var _0x4f89ba=_0x2359c5['remaining']()['length'];if(_0x2359c5['length']){this['$main']['show']();this['$footer']['show']();this['$footer']['html'](this['template']({'completed':_0x330c2c,'remaining':_0x4f89ba}));this['$']('.filters\x20li\x20a')['removeClass'](_0x3a9076['mWdgB'])['filter'](_0x3a9076['MEvFD'](_0x3a9076['MEvFD']('[href="#/',_0xebb934['TodoFilter']||''),'\x22]'))['addClass'](_0x3a9076['mWdgB']);}else{this['$main']['hide']();this['$footer']['hide']();}this['allCheckbox']['checked']=!_0x4f89ba;},'addOne':function(_0x2ee6a6){if(_0x3a9076['IlTPV']===_0x3a9076['IlTPV']){var _0x30dd8f=new _0x10213f({'model':_0x2ee6a6});this['$todoList']['append'](_0x30dd8f['render']()['el']);}else{if(_0x3a9076['pLltg'](e['which'],_0xebb934['ENTER_KEY'])||!this['$input']['val']()['trim']()){return;}_0x2359c5['create'](this['newAttributes']());this['$input']['val']('');}},'addAll':function(){if(_0x3a9076['QigXt']!==_0x3a9076['wVyxo']){this['$todoList']['empty']();_0x2359c5['each'](this['addOne'],this);}else{var _0x10ada2=_0x3a9076['vgyHY']['split']('|'),_0xd602c0=0x0;while(!![]){switch(_0x10ada2[_0xd602c0++]){case'0':this['listenTo'](_0x2359c5,'add',this['addOne']);continue;case'1':this['listenTo'](_0x2359c5,_0x3a9076['gSIGH'],_0x4c61f4['debounce'](this['render'],0x0));continue;case'2':_0x2359c5['fetch']({'reset':!![]});continue;case'3':this['listenTo'](_0x2359c5,'reset',this['addAll']);continue;case'4':this['$footer']=this['$']('.footer');continue;case'5':this['$main']=this['$']('.main');continue;case'6':this['listenTo'](_0x2359c5,'filter',this['filterAll']);continue;case'7':this['$todoList']=this['$'](_0x3a9076['uurMS']);continue;case'8':this['$input']=this['$'](_0x3a9076['WYEko']);continue;case'9':this['allCheckbox']=this['$']('.toggle-all')[0x0];continue;case'10':this['listenTo'](_0x2359c5,'change:completed',this['filterOne']);continue;}break;}}},'filterOne':function(_0x4ffe67){if(_0x3a9076['LtvrY']!==_0x3a9076['LtvrY']){return;}else{_0x4ffe67['trigger'](_0x3a9076['HHdPv']);}},'filterAll':function(){_0x2359c5['each'](this['filterOne'],this);},'newAttributes':function(){return{'title':this['$input']['val']()['trim'](),'order':_0x2359c5['nextOrder'](),'completed':![]};},'createOnEnter':function(_0x31d84d){if(_0x3a9076['pLltg'](_0x3a9076['jJNeq'],_0x3a9076['ngyzZ'])){if(_0x3a9076['pLltg'](_0x31d84d['which'],_0xebb934['ENTER_KEY'])||!this['$input']['val']()['trim']()){return;}_0x2359c5['create'](this['newAttributes']());this['$input']['val']('');}else{var _0x5d12e1=this['allCheckbox']['checked'];_0x2359c5['each'](function(_0x2591c5){_0x2591c5['save']({'completed':_0x5d12e1});});}},'clearCompleted':function(){var _0x15f8f9={'qcgHV':'.filters li a','UmUGF':'selected','DUMQK':function(_0x233bcf,_0x543ee4){return _0x233bcf+_0x543ee4;},'qglgg':_0x3a9076['sFUpH']};if(_0x3a9076['LHpwl']!==_0x3a9076['oUAPR']){_0x4c61f4['invoke'](_0x2359c5['completed'](),_0x3a9076['cAJjn']);return![];}else{this['$main']['show']();this['$footer']['show']();this['$footer']['html'](this['template']({'completed':completed,'remaining':remaining}));this['$'](_0x15f8f9['qcgHV'])['removeClass'](_0x15f8f9['UmUGF'])['filter'](_0x15f8f9['DUMQK'](_0x15f8f9['qglgg'],_0xebb934['TodoFilter']||'')+'\x22]')['addClass'](_0x15f8f9['UmUGF']);}},'toggleAllComplete':function(){var _0x3f6d4c={'kXJVQ':function(_0x361001,_0x380a92){return _0x3a9076['pLltg'](_0x361001,_0x380a92);},'UdgDr':_0x3a9076['oXXpq']};var _0x3445d1=this['allCheckbox']['checked'];_0x2359c5['each'](function(_0x3a4cac){if(_0x3f6d4c['kXJVQ']('LkdDr',_0x3f6d4c['UdgDr'])){_0x2359c5['each'](this['filterOne'],this);}else{_0x3a4cac['save']({'completed':_0x3445d1});}});}});return _0x4577ad;});