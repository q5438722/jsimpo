const debug=require('debug')('@cypress/react');const getNextJsBaseWebpackConfig=require('next/dist/build/webpack-config')['default'];async function getNextWebpackConfig(_0x5daedd){var _0x4bc0d3={'BVMcF':function(_0x1615a6,_0x5aa8d8){return _0x1615a6===_0x5aa8d8;},'UHMTd':function(_0x101f3e,_0x5534f7){return _0x101f3e(_0x5534f7);},'sqLQC':'next/dist/next-server/server/config','HWDIQ':function(_0x43c7ad,_0x493435){return _0x43c7ad(_0x493435);},'Sadze':'next/dist/server/config','ZTJDB':function(_0x31b05d,_0x4b7668,_0x12bd25){return _0x31b05d(_0x4b7668,_0x12bd25);},'DWDSE':function(_0x19d27f,_0x365226,_0x498911){return _0x19d27f(_0x365226,_0x498911);}};let _0x164a12;try{if(_0x4bc0d3['BVMcF']('ElwDz','ElwDz')){_0x164a12=_0x4bc0d3['UHMTd'](require,_0x4bc0d3['sqLQC'])['default'];}else{return webpackConfigCache;}}catch(_0x534234){if(_0x534234['code']==='MODULE_NOT_FOUND'){_0x164a12=_0x4bc0d3['HWDIQ'](require,_0x4bc0d3['Sadze'])['default'];}else{throw _0x534234;}}const _0x4615f1=await _0x4bc0d3['ZTJDB'](_0x164a12,'development',_0x5daedd['projectRoot']);const _0x508c99=await _0x4bc0d3['ZTJDB'](getNextJsBaseWebpackConfig,_0x5daedd['projectRoot'],{'buildId':'@cypress/react-'+Math['random']()['toString'](),'config':_0x4615f1,'dev':!![],'isServer':![],'pagesDir':_0x5daedd['projectRoot'],'entrypoints':{},'rewrites':{'fallback':[],'afterFiles':[],'beforeFiles':[]}});_0x4bc0d3['DWDSE'](debug,'resolved\x20next.js\x20webpack\x20config\x20%o',_0x508c99);return _0x508c99;}let webpackConfigCache=null;module['exports']=async function findNextWebpackConfig(_0x9a7ea5){var _0x5cf676={'HdDfZ':function(_0x2a4ace,_0x367e69){return _0x2a4ace!==_0x367e69;}};if(_0x5cf676['HdDfZ'](webpackConfigCache,null)){return webpackConfigCache;}webpackConfigCache=await getNextWebpackConfig(_0x9a7ea5);debug('created\x20and\x20cached\x20webpack\x20preprocessor\x20based\x20on\x20next.config.js',webpackConfigCache);return webpackConfigCache;};