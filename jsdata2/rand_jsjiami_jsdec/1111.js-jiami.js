const has=require('has');const allRules={'manipulate-jsx-as-array':require('./manipulate-jsx-as-array'),'no-spread-in-props':require('./no-spread-in-props'),'reserve-class-properties':require('./reserve-class-properties'),'class-naming':require('./class-naming'),'props-reserve-keyword':require('./props-reserve-keyword'),'this-props-function':require('./this-props-function'),'render-props':require('./render-props'),'duplicate-name-of-state-and-props':require('./duplicate-name-of-state-and-props')};const transformerDisableRules=new Set(['this-props-function','props-reserve-keyword']);function configureAsError(_0x111d0f,_0x4ba501){var _0x45d080={'EShUb':function(_0x2f0e45,_0x227884,_0x4cdde1){return _0x2f0e45(_0x227884,_0x4cdde1);}};const _0x493528={};for(const _0x293c4c in _0x111d0f){if(!_0x45d080['EShUb'](has,_0x111d0f,_0x293c4c)){continue;}if(_0x4ba501&&transformerDisableRules['has'](_0x293c4c)){continue;}_0x493528['taro/'+_0x293c4c]=0x2;}return _0x493528;}const transformerRules=configureAsError(allRules,!![]);const activeRules=configureAsError(allRules);module['exports']={'activeRules':activeRules,'allRules':allRules,'transformerRules':transformerRules};