import{parseComponent}from'sfc/parser';describe('Single File Component parser',()=>{var _0x27282b={'fmyMz':function(_0x3a9295,_0xe9c39c){return _0x3a9295(_0xe9c39c);},'xAumS':function(_0x2b369f,_0x7a7500){return _0x2b369f(_0x7a7500);},'Tvlyx':'<div>hi</div>','hVEfJ':'./test.css','VkbKp':function(_0xb20895,_0x36a623){return _0xb20895(_0x36a623);},'JuvoQ':'stylus','uwKGp':function(_0x20c502,_0x1249e0){return _0x20c502(_0x1249e0);},'cMrrq':'h1\x0a\x20\x20color\x20red\x0ah2\x0a\x20\x20color\x20green','HAOjW':'bool-attr','piNrO':function(_0xa0f1e6,_0x272d86){return _0xa0f1e6(_0x272d86);},'OEjlt':'val-attr','BqrhQ':'test','vABKl':function(_0x567d18,_0x4536c3){return _0x567d18(_0x4536c3);},'CfQBG':function(_0x5e4e60,_0x1ebf7d){return _0x5e4e60(_0x1ebf7d);},'QyvFc':'<input type="text"/>','FKUlf':function(_0xbd7958,_0xf40602){return _0xbd7958(_0xf40602);},'rqmFQ':'<div><template v-if="ok">hi</template></div>','UMDPO':function(_0xd80e7,_0x4601f2,_0x581a62){return _0xd80e7(_0x4601f2,_0x581a62);},'jrQIx':function(_0x182092,_0x3cf117,_0x1248be){return _0x182092(_0x3cf117,_0x1248be);},'ztqUi':'\nexport default {}\n','xAsEx':'\x0a<div></div>\x0a','NnuTG':function(_0x5b5cb9,_0x8983d1){return _0x5b5cb9(_0x8983d1);},'FjhCK':'\n        <div></div>\n      ','eSqfY':function(_0x47fb22,_0x50abc6){return _0x47fb22(_0x50abc6);},'dzlcT':'\x0a\x20\x20\x20\x20\x20\x20\x20\x20export\x20default\x20{}\x0a\x20\x20\x20\x20\x20\x20','cRDkf':function(_0xe370bc,_0x3097c6){return _0xe370bc(_0x3097c6);},'fFPHl':'\n        h1 { color: red }\n      ','zGkXr':function(_0x4cf835,_0x34f63d,_0x2d37cc){return _0x4cf835(_0x34f63d,_0x2d37cc);},'YtAVe':function(_0x555065,_0x37a11c){return _0x555065+_0x37a11c;},'xDQez':function(_0x4bbd9f,_0x4ddaaf){return _0x4bbd9f(_0x4ddaaf);},'kCxVJ':'//\n','APuMC':function(_0x5ecb05,_0x4ab574){return _0x5ecb05(_0x4ab574);},'fanuF':'\nh1 { color: red }\n','mYsOH':function(_0x80cf28,_0x10c654){return _0x80cf28(_0x10c654);},'LrxUQ':function(_0x446b7c,_0x27826){return _0x446b7c!==_0x27826;},'xELPE':'xXStG','YNITb':'example','bsbtA':function(_0xc237dc,_0xa7d70c){return _0xc237dc(_0xa7d70c);},'zfbCW':'<my-button\x20ref=\x22button\x22>Hello</my-button>','EHfsq':function(_0xd2a371,_0x10386c){return _0xd2a371(_0x10386c);},'acqRW':function(_0x529cce,_0x375d6f){return _0x529cce(_0x375d6f);},'AYPrY':'with\x20props','gkSsX':function(_0x323dd1,_0x555814){return _0x323dd1(_0x555814);},'JPfWN':function(_0x48dea1,_0x203d34){return _0x48dea1(_0x203d34);},'tJcME':function(_0x38a422,_0x2872b7){return _0x38a422!==_0x2872b7;},'sfMQy':'wLOdh','tjaAi':'PsCmB','SEWHr':function(_0x27ac0e,_0x1d56de){return _0x27ac0e(_0x1d56de);},'PCHvu':'<my-button color="red">Hello</my-button>','xkTTX':'simple','bkSyc':function(_0x4fe478,_0x14f323){return _0x4fe478(_0x14f323);},'ZeuAf':function(_0x3adf96,_0x247a01){return _0x3adf96===_0x247a01;},'AjNTA':'xDESU','VssGH':'UCgqJ','rehIL':function(_0x35144f,_0x5511f2){return _0x35144f(_0x5511f2);},'IPySV':function(_0x49d02d,_0x542c08,_0x248da6){return _0x49d02d(_0x542c08,_0x248da6);},'doQUP':function(_0x247be8,_0x3b4d38){return _0x247be8(_0x3b4d38);},'vgQKG':function(_0x50f81d,_0x4deb59){return _0x50f81d(_0x4deb59);},'luKce':function(_0x3f33fe,_0x1cb413,_0x105130){return _0x3f33fe(_0x1cb413,_0x105130);},'IeQoH':'should parse','GQmRG':function(_0x67d24d,_0x12725e,_0x3be0f9){return _0x67d24d(_0x12725e,_0x3be0f9);},'axbwq':'pad content','fqZtw':'should handle component contains "<" only','ripsR':'should handle custom blocks without parsing them','qlSMC':'accepts\x20nested\x20template\x20tag','uWvjr':'should\x20not\x20hang\x20on\x20trailing\x20text','wFauF':function(_0x50fc4f,_0x423d44,_0x43ca47){return _0x50fc4f(_0x423d44,_0x43ca47);},'BANxi':'should collect errors with source range'};_0x27282b['luKce'](it,_0x27282b['IeQoH'],()=>{const _0x183e1c=_0x27282b['fmyMz'](parseComponent,'\n      <template>\n        <div>hi</div>\n      </template>\n      <style src="./test.css"></style>\n      <style lang="stylus" scoped>\n        h1\n          color red\n        h2\n          color green\n      </style>\n      <style module>\n        h1 { font-weight: bold }\n      </style>\n      <style bool-attr val-attr="test"></style>\n      <script>\n        export default {}\n      </script>\n      <div>\n        <style>nested should be ignored</style>\n      </div>\n    ');_0x27282b['xAumS'](expect,_0x183e1c['template']['content']['trim']())['toBe'](_0x27282b['Tvlyx']);_0x27282b['xAumS'](expect,_0x183e1c['styles']['length'])['toBe'](0x4);_0x27282b['xAumS'](expect,_0x183e1c['styles'][0x0]['src'])['toBe'](_0x27282b['hVEfJ']);_0x27282b['VkbKp'](expect,_0x183e1c['styles'][0x1]['lang'])['toBe'](_0x27282b['JuvoQ']);_0x27282b['uwKGp'](expect,_0x183e1c['styles'][0x1]['scoped'])['toBe'](!![]);expect(_0x183e1c['styles'][0x1]['content']['trim']())['toBe'](_0x27282b['cMrrq']);_0x27282b['uwKGp'](expect,_0x183e1c['styles'][0x2]['module'])['toBe'](!![]);_0x27282b['uwKGp'](expect,_0x183e1c['styles'][0x3]['attrs'][_0x27282b['HAOjW']])['toBe'](!![]);_0x27282b['piNrO'](expect,_0x183e1c['styles'][0x3]['attrs'][_0x27282b['OEjlt']])['toBe'](_0x27282b['BqrhQ']);expect(_0x183e1c['script']['content']['trim']())['toBe']('export default {}');});_0x27282b['GQmRG'](it,'should parse template with closed input',()=>{const _0x317b06=_0x27282b['vABKl'](parseComponent,'\x0a\x20\x20\x20\x20\x20\x20<template>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22/>\x0a\x20\x20\x20\x20\x20\x20</template>\x0a\x20\x20\x20\x20');_0x27282b['CfQBG'](expect,_0x317b06['template']['content']['trim']())['toBe'](_0x27282b['QyvFc']);});it('should handle nested template',()=>{const _0xebbccc=_0x27282b['CfQBG'](parseComponent,'\n      <template>\n        <div><template v-if="ok">hi</template></div>\n      </template>\n    ');_0x27282b['FKUlf'](expect,_0xebbccc['template']['content']['trim']())['toBe'](_0x27282b['rqmFQ']);});_0x27282b['GQmRG'](it,'deindent\x20content',()=>{const _0x5ed773='\x0a\x20\x20\x20\x20\x20\x20<template>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div></div>\x0a\x20\x20\x20\x20\x20\x20</template>\x0a\x20\x20\x20\x20\x20\x20<script>\x0a\x20\x20\x20\x20\x20\x20\x20\x20export\x20default\x20{}\x0a\x20\x20\x20\x20\x20\x20</script>\x0a\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20h1\x20{\x20color:\x20red\x20}\x0a\x20\x20\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20';const _0x1fb58d=_0x27282b['UMDPO'](parseComponent,_0x5ed773['trim'](),{'pad':![]});const _0x5b0f39=parseComponent(_0x5ed773['trim'](),{'pad':![],'deindent':!![]});const _0x46bc14=_0x27282b['jrQIx'](parseComponent,_0x5ed773['trim'](),{'pad':![],'deindent':![]});_0x27282b['FKUlf'](expect,_0x1fb58d['template']['content'])['toBe']('\n<div></div>\n');expect(_0x1fb58d['script']['content'])['toBe'](_0x27282b['ztqUi']);_0x27282b['FKUlf'](expect,_0x1fb58d['styles'][0x0]['content'])['toBe']('\nh1 { color: red }\n');_0x27282b['FKUlf'](expect,_0x5b0f39['template']['content'])['toBe'](_0x27282b['xAsEx']);_0x27282b['NnuTG'](expect,_0x5b0f39['script']['content'])['toBe']('\nexport default {}\n');_0x27282b['NnuTG'](expect,_0x5b0f39['styles'][0x0]['content'])['toBe']('\nh1 { color: red }\n');expect(_0x46bc14['template']['content'])['toBe'](_0x27282b['FjhCK']);_0x27282b['eSqfY'](expect,_0x46bc14['script']['content'])['toBe'](_0x27282b['dzlcT']);_0x27282b['cRDkf'](expect,_0x46bc14['styles'][0x0]['content'])['toBe'](_0x27282b['fFPHl']);});_0x27282b['GQmRG'](it,_0x27282b['axbwq'],()=>{const _0x7c14b='\n      <template>\n        <div></div>\n      </template>\n      <script>\n        export default {}\n      </script>\n      <style>\n        h1 { color: red }\n      </style>\n';const _0x3a56f4=_0x27282b['jrQIx'](parseComponent,_0x7c14b['trim'](),{'pad':!![]});const _0x3d448e=parseComponent(_0x7c14b['trim'](),{'pad':'line'});const _0x19588b=_0x27282b['zGkXr'](parseComponent,_0x7c14b['trim'](),{'pad':'space'});expect(_0x3a56f4['script']['content'])['toBe'](_0x27282b['YtAVe'](_0x27282b['cRDkf'](Array,_0x27282b['YtAVe'](0x3,0x1))['join']('//\x0a'),'\nexport default {}\n'));_0x27282b['cRDkf'](expect,_0x3a56f4['styles'][0x0]['content'])['toBe'](_0x27282b['cRDkf'](Array,_0x27282b['YtAVe'](0x6,0x1))['join']('\x0a')+'\nh1 { color: red }\n');_0x27282b['cRDkf'](expect,_0x3d448e['script']['content'])['toBe'](_0x27282b['YtAVe'](_0x27282b['xDQez'](Array,0x3+0x1)['join'](_0x27282b['kCxVJ']),_0x27282b['ztqUi']));_0x27282b['APuMC'](expect,_0x3d448e['styles'][0x0]['content'])['toBe'](Array(_0x27282b['YtAVe'](0x6,0x1))['join']('\x0a')+_0x27282b['fanuF']);_0x27282b['mYsOH'](expect,_0x19588b['script']['content'])['toBe'](_0x27282b['YtAVe']('<template>\n        <div></div>\n      </template>\n      <script>'['replace'](/./g,'\x20'),_0x27282b['ztqUi']));_0x27282b['mYsOH'](expect,_0x19588b['styles'][0x0]['content'])['toBe'](_0x27282b['YtAVe']('<template>\n        <div></div>\n      </template>\n      <script>\n        export default {}\n      </script>\n      <style>'['replace'](/./g,'\x20'),_0x27282b['fanuF']));});_0x27282b['GQmRG'](it,'should handle template blocks with lang as special text',()=>{const _0x3c6b09=parseComponent('\n      <template lang="pug">\n        div\n          h1(v-if=\'1 < 2\') hello\n      </template>\n    ');expect(_0x3c6b09['template']['content']['trim']())['toBe']('div\x0a\x20\x20h1(v-if=\x271\x20<\x202\x27)\x20hello');});it(_0x27282b['fqZtw'],()=>{var _0x134f73={'cgaZD':function(_0x312eff,_0xe7f5fb){return _0x27282b['mYsOH'](_0x312eff,_0xe7f5fb);},'pzjea':_0x27282b['QyvFc']};if(_0x27282b['LrxUQ'](_0x27282b['xELPE'],_0x27282b['xELPE'])){const _0x38d2f4=_0x134f73['cgaZD'](parseComponent,'\n      <template>\n        <input type="text"/>\n      </template>\n    ');expect(_0x38d2f4['template']['content']['trim']())['toBe'](_0x134f73['pzjea']);}else{const _0x10895d=_0x27282b['mYsOH'](parseComponent,'\n      <template>\n        <span><</span>\n      </template>\n    ');_0x27282b['mYsOH'](expect,_0x10895d['template']['content']['trim']())['toBe']('<span><</span>');}});it(_0x27282b['ripsR'],()=>{const _0x58bd24=parseComponent('\n      <template>\n        <div></div>\n      </template>\n      <example name="simple">\n        <my-button ref="button">Hello</my-button>\n      </example>\n      <example name="with props">\n        <my-button color="red">Hello</my-button>\n      </example>\n      <test name="simple" foo="bar">\n      export default function simple (vm) {\n        describe(\'Hello\', () => {\n          it(\'should display Hello\', () => {\n            this.vm.$refs.button.$el.innerText.should.equal(\'Hello\')\n          }))\n        }))\n      }\n      </test>\n    ');_0x27282b['mYsOH'](expect,_0x58bd24['customBlocks']['length'])['toBe'](0x3);const _0x592d31=_0x58bd24['customBlocks'][0x0];_0x27282b['mYsOH'](expect,_0x592d31['type'])['toBe'](_0x27282b['YNITb']);_0x27282b['bsbtA'](expect,_0x592d31['content']['trim']())['toBe'](_0x27282b['zfbCW']);expect(_0x592d31['attrs']['name'])['toBe']('simple');const _0x1ce619=_0x58bd24['customBlocks'][0x1];_0x27282b['EHfsq'](expect,_0x1ce619['type'])['toBe']('example');expect(_0x1ce619['content']['trim']())['toBe']('<my-button\x20color=\x22red\x22>Hello</my-button>');_0x27282b['acqRW'](expect,_0x1ce619['attrs']['name'])['toBe'](_0x27282b['AYPrY']);const _0x1b89e7=_0x58bd24['customBlocks'][0x2];expect(_0x1b89e7['type'])['toBe'](_0x27282b['BqrhQ']);_0x27282b['acqRW'](expect,_0x1b89e7['content']['trim']())['toBe']('export default function simple (vm) {\n  describe(\'Hello\', () => {\n    it(\'should display Hello\', () => {\n      this.vm.$refs.button.$el.innerText.should.equal(\'Hello\')\n    }))\n  }))\n}');_0x27282b['acqRW'](expect,_0x1b89e7['attrs']['name'])['toBe']('simple');expect(_0x1b89e7['attrs']['foo'])['toBe']('bar');});_0x27282b['GQmRG'](it,_0x27282b['qlSMC'],()=>{if(_0x27282b['tJcME'](_0x27282b['sfMQy'],_0x27282b['tjaAi'])){const _0xdfe9b='<div>\n      <template v-if="true === true">\n        <section class="section">\n          <div class="container">\n            Should be shown\n          </div>\n        </section>\n      </template>\n      <template v-else>\n        <p>Should not be shown</p>\n      </template>\n    </div>';const _0x597993=_0x27282b['JPfWN'](parseComponent,'<template>'+_0xdfe9b+'</template>');_0x27282b['JPfWN'](expect,_0x597993['template']['content']['trim']())['toBe'](_0xdfe9b);}else{const _0x5c3c17=_0x27282b['gkSsX'](parseComponent,'\n      <template lang="pug">\n        div\n          h1(v-if=\'1 < 2\') hello\n      </template>\n    ');_0x27282b['JPfWN'](expect,_0x5c3c17['template']['content']['trim']())['toBe']('div\x0a\x20\x20h1(v-if=\x271\x20<\x202\x27)\x20hello');}});_0x27282b['GQmRG'](it,_0x27282b['uWvjr'],()=>{var _0x37802d={'mkXiM':function(_0x9668fd,_0x2485ff){return _0x27282b['SEWHr'](_0x9668fd,_0x2485ff);},'eLWlY':function(_0x310eab,_0x4fb1ff){return _0x27282b['SEWHr'](_0x310eab,_0x4fb1ff);},'SGKct':_0x27282b['YNITb'],'lYnCK':function(_0x3dff7a,_0xfe420e){return _0x3dff7a(_0xfe420e);},'igeuM':_0x27282b['PCHvu'],'IzNZM':function(_0x3c06de,_0x5eb5cb){return _0x27282b['SEWHr'](_0x3c06de,_0x5eb5cb);},'oFZTp':_0x27282b['BqrhQ'],'gaYpN':function(_0x341771,_0x10854b){return _0x27282b['SEWHr'](_0x341771,_0x10854b);},'FJByu':_0x27282b['xkTTX'],'KuESS':function(_0x365f7a,_0x451f7c){return _0x27282b['bkSyc'](_0x365f7a,_0x451f7c);},'gieGw':'bar'};if(_0x27282b['ZeuAf'](_0x27282b['AjNTA'],_0x27282b['VssGH'])){const _0x48818b=parseComponent('\x0a\x20\x20\x20\x20\x20\x20<template>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div></div>\x0a\x20\x20\x20\x20\x20\x20</template>\x0a\x20\x20\x20\x20\x20\x20<example\x20name=\x22simple\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<my-button\x20ref=\x22button\x22>Hello</my-button>\x0a\x20\x20\x20\x20\x20\x20</example>\x0a\x20\x20\x20\x20\x20\x20<example\x20name=\x22with\x20props\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<my-button\x20color=\x22red\x22>Hello</my-button>\x0a\x20\x20\x20\x20\x20\x20</example>\x0a\x20\x20\x20\x20\x20\x20<test\x20name=\x22simple\x22\x20foo=\x22bar\x22>\x0a\x20\x20\x20\x20\x20\x20export\x20default\x20function\x20simple\x20(vm)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20describe(\x27Hello\x27,\x20()\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20it(\x27should\x20display\x20Hello\x27,\x20()\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20this.vm.$refs.button.$el.innerText.should.equal(\x27Hello\x27)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}))\x0a\x20\x20\x20\x20\x20\x20\x20\x20}))\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20</test>\x0a\x20\x20\x20\x20');_0x37802d['mkXiM'](expect,_0x48818b['customBlocks']['length'])['toBe'](0x3);const _0x5a612c=_0x48818b['customBlocks'][0x0];_0x37802d['eLWlY'](expect,_0x5a612c['type'])['toBe'](_0x37802d['SGKct']);_0x37802d['eLWlY'](expect,_0x5a612c['content']['trim']())['toBe']('<my-button ref="button">Hello</my-button>');_0x37802d['lYnCK'](expect,_0x5a612c['attrs']['name'])['toBe']('simple');const _0x18b307=_0x48818b['customBlocks'][0x1];expect(_0x18b307['type'])['toBe']('example');expect(_0x18b307['content']['trim']())['toBe'](_0x37802d['igeuM']);_0x37802d['lYnCK'](expect,_0x18b307['attrs']['name'])['toBe']('with\x20props');const _0x24738f=_0x48818b['customBlocks'][0x2];_0x37802d['IzNZM'](expect,_0x24738f['type'])['toBe'](_0x37802d['oFZTp']);_0x37802d['gaYpN'](expect,_0x24738f['content']['trim']())['toBe']('export default function simple (vm) {\n  describe(\'Hello\', () => {\n    it(\'should display Hello\', () => {\n      this.vm.$refs.button.$el.innerText.should.equal(\'Hello\')\n    }))\n  }))\n}');_0x37802d['gaYpN'](expect,_0x24738f['attrs']['name'])['toBe'](_0x37802d['FJByu']);_0x37802d['KuESS'](expect,_0x24738f['attrs']['foo'])['toBe'](_0x37802d['gieGw']);}else{const _0x241222=parseComponent('<template>hi</');_0x27282b['rehIL'](expect,_0x241222['template']['content'])['toBe']('hi');}});_0x27282b['wFauF'](it,_0x27282b['BANxi'],()=>{const _0x7cefb0=_0x27282b['IPySV'](parseComponent,'<template>hi</',{'outputSourceRange':!![]});_0x27282b['doQUP'](expect,_0x7cefb0['errors']['length'])['toBe'](0x1);_0x27282b['vgQKG'](expect,_0x7cefb0['errors'][0x0]['start'])['toBe'](0x0);});});