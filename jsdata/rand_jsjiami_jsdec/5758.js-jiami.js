var mkdirp=require('../');var path=require('path');var fs=require('fs');var exists=fs['exists']||path['exists'];var test=require('tap')['test'];var _0777=parseInt('0777',0x8);var _0755=parseInt('0755',0x8);test('rel',function(_0x36fd57){var _0x43d39b={'EttBY':function(_0x376190,_0x461883){return _0x376190&_0x461883;},'bErzm':'target not a directory','CDwct':function(_0x371ecc,_0x31f2fa,_0xdc8861){return _0x371ecc(_0x31f2fa,_0xdc8861);},'TOmos':function(_0x1380b4,_0x2e01d5){return _0x1380b4*_0x2e01d5;},'yBofR':function(_0x3c372c,_0xee4fee){return _0x3c372c*_0xee4fee;},'zTjyv':'/tmp','szkKL':function(_0x5d1b07,_0x25b4e9,_0x5ce91f,_0x28517b){return _0x5d1b07(_0x25b4e9,_0x5ce91f,_0x28517b);}};_0x36fd57['plan'](0x5);var _0x3aeb1d=Math['floor'](_0x43d39b['TOmos'](Math['random'](),Math['pow'](0x10,0x4)))['toString'](0x10);var _0x11ffda=Math['floor'](_0x43d39b['TOmos'](Math['random'](),Math['pow'](0x10,0x4)))['toString'](0x10);var _0x21fded=Math['floor'](_0x43d39b['yBofR'](Math['random'](),Math['pow'](0x10,0x4)))['toString'](0x10);var _0x4b1bad=process['cwd']();process['chdir'](_0x43d39b['zTjyv']);var _0x2cdab8=[_0x3aeb1d,_0x11ffda,_0x21fded]['join']('/');_0x43d39b['szkKL'](mkdirp,_0x2cdab8,_0755,function(_0x3ba286){_0x36fd57['ifError'](_0x3ba286);_0x43d39b['CDwct'](exists,_0x2cdab8,function(_0x4ea221){var _0x3ec7bb={'YQULL':function(_0x3aeb1d,_0x11ffda){return _0x43d39b['EttBY'](_0x3aeb1d,_0x11ffda);},'VIsCq':_0x43d39b['bErzm']};_0x36fd57['ok'](_0x4ea221,'file created');fs['stat'](_0x2cdab8,function(_0x3ba286,_0x1b7dc6){_0x36fd57['ifError'](_0x3ba286);process['chdir'](_0x4b1bad);_0x36fd57['equal'](_0x3ec7bb['YQULL'](_0x1b7dc6['mode'],_0777),_0755);_0x36fd57['ok'](_0x1b7dc6['isDirectory'](),_0x3ec7bb['VIsCq']);});});});});