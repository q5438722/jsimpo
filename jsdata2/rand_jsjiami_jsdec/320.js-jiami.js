import _0x460097 from'postcss';import _0x280965 from'path';import _0x2ab56f from'../../src/jit/index.js';function run(input,config={}){var ZEiYXq={'Dyrnd':function(callee,param1){return callee(param1);}};const {currentTestName}=expect['getState']();return ZEiYXq['Dyrnd'](_0x460097,_0x2ab56f(config))['process'](input,{'from':_0x280965['resolve'](__filename)+'?test='+currentTestName});}function css(templates){return templates['join']('');}test('basic utilities',async()=>{var ugLxfn={'YkDnC':function(callee,param1){return callee(param1);},'hvlTc':'jit','ixaNl':'<div class="scale-x-110 rotate-3 skew-y-6"></div>','KIdSr':'transform','Scazo':'scale','aTbgc':function(callee,param1,param2){return callee(param1,param2);}};let config={'mode':ugLxfn['hvlTc'],'purge':[{'raw':ugLxfn['ixaNl']}],'theme':{},'plugins':[],'corePlugins':[ugLxfn['KIdSr'],ugLxfn['Scazo'],'rotate','skew']};let input=css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `;return ugLxfn['aTbgc'](run,input,config)['then'](result=>{ugLxfn['YkDnC'](expect,result['css'])['toMatchFormattedCss'](css`
      *,
      ::before,
      ::after {
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
          scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }
      /* --- */
      .rotate-3 {
        --tw-rotate: 3deg;
        transform: var(--tw-transform);
      }
      .skew-y-6 {
        --tw-skew-y: 6deg;
        transform: var(--tw-transform);
      }
      .scale-x-110 {
        --tw-scale-x: 1.1;
        transform: var(--tw-transform);
      }
    `);});});test('with pseudo-class variants',async()=>{var SEDwSZ={'THbpq':'<div class="hover:scale-x-110 focus:rotate-3 hover:focus:skew-y-6"></div>','qQBUQ':'transform','ehfWH':'scale','wVDlR':'rotate','XPDdd':function(callee,param1,param2){return callee(param1,param2);}};let config={'mode':'jit','purge':[{'raw':SEDwSZ['THbpq']}],'theme':{},'plugins':[],'corePlugins':[SEDwSZ['qQBUQ'],SEDwSZ['ehfWH'],SEDwSZ['wVDlR'],'skew']};let input=css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `;return SEDwSZ['XPDdd'](run,input,config)['then'](result=>{expect(result['css'])['toMatchFormattedCss'](css`
      *,
      ::before,
      ::after {
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
          scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }
      /* --- */
      .hover\\:scale-x-110:hover {
        --tw-scale-x: 1.1;
        transform: var(--tw-transform);
      }
      .focus\\:rotate-3:focus {
        --tw-rotate: 3deg;
        transform: var(--tw-transform);
      }
      .hover\\:focus\\:skew-y-6:hover:focus {
        --tw-skew-y: 6deg;
        transform: var(--tw-transform);
      }
    `);});});test('with\x20pseudo-element\x20variants',async()=>{var hsbIYK={'BnLQR':function(callee,param1){return callee(param1);},'VwuDV':function(callee,param1){return callee(param1);},'jhRlT':'Cpmjj','DHOzH':'jit','ELPzt':'<div class="before:scale-x-110 after:rotate-3"></div>','VYEOA':'transform','zRcsJ':'scale','WDaLo':'rotate'};let config={'mode':hsbIYK['DHOzH'],'purge':[{'raw':hsbIYK['ELPzt']}],'theme':{},'plugins':[],'corePlugins':[hsbIYK['VYEOA'],hsbIYK['zRcsJ'],hsbIYK['WDaLo'],'skew']};let input=css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `;return run(input,config)['then'](result=>{if(hsbIYK['jhRlT']===hsbIYK['jhRlT']){expect(result['css'])['toMatchFormattedCss'](css`
      *,
      ::before,
      ::after {
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
          scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }
      /* --- */
      .before\\:scale-x-110::before {
        content: '';
        --tw-scale-x: 1.1;
        transform: var(--tw-transform);
      }
      .after\\:rotate-3::after {
        content: '';
        --tw-rotate: 3deg;
        transform: var(--tw-transform);
      }
    `);}else{const {currentTestName}=expect['getState']();return hsbIYK['BnLQR'](_0x460097,hsbIYK['VwuDV'](_0x2ab56f,config))['process'](input,{'from':_0x280965['resolve'](__filename)+'?test='+currentTestName});}});});test('with multi-class variants',async()=>{var slbeld={'PtYci':function(callee,param1){return callee(param1);},'apIuQ':'jit','IJtUb':'SkwDB','JppnW':'<div class="group-hover:scale-x-110 peer-focus:rotate-3"></div>','tvKNu':'transform','dpTIp':'scale','lxnVh':'rotate'};let config={'mode':slbeld['apIuQ'],'purge':[{'raw':slbeld['JppnW']}],'theme':{},'plugins':[],'corePlugins':[slbeld['tvKNu'],slbeld['dpTIp'],slbeld['lxnVh'],'skew']};let input=css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `;return run(input,config)['then'](result=>{var iDkWGL={'fPumn':function(callee,param1){return slbeld['PtYci'](callee,param1);},'VKovg':slbeld['apIuQ'],'qTDdz':'<div class="rotate-3"></div>','vKXYz':function(callee,param1,param2){return callee(param1,param2);}};if('HhljF'!==slbeld['IJtUb']){expect(result['css'])['toMatchFormattedCss'](css`
      *,
      ::before,
      ::after {
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
          scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }
      /* --- */
      .group:hover .group-hover\\:scale-x-110 {
        --tw-scale-x: 1.1;
        transform: var(--tw-transform);
      }
      .peer:focus ~ .peer-focus\\:rotate-3 {
        --tw-rotate: 3deg;
        transform: var(--tw-transform);
      }
    `);}else{let _0x355663={'mode':iDkWGL['VKovg'],'purge':[{'raw':iDkWGL['qTDdz']}],'theme':{},'plugins':[],'corePlugins':['rotate']};let _0x415716=css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `;return iDkWGL['vKXYz'](run,_0x415716,_0x355663)['then'](_0x5ab0eb=>{iDkWGL['fPumn'](expect,_0x5ab0eb['css'])['toMatchFormattedCss'](css`
      /* --- */
      .rotate-3 {
        --tw-rotate: 3deg;
        transform: var(--tw-transform);
      }
    `);});}});});test('with multi-class pseudo-element variants',async()=>{var AjOkdl={'PExhN':'<div class="group-hover:before:scale-x-110 peer-focus:after:rotate-3"></div>','xvhyB':'transform','Loqvb':'rotate','TKcqJ':'skew','wcXwg':function(callee,param1,param2){return callee(param1,param2);}};let config={'mode':'jit','purge':[{'raw':AjOkdl['PExhN']}],'theme':{},'plugins':[],'corePlugins':[AjOkdl['xvhyB'],'scale',AjOkdl['Loqvb'],AjOkdl['TKcqJ']]};let input=css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `;return AjOkdl['wcXwg'](run,input,config)['then'](result=>{expect(result['css'])['toMatchFormattedCss'](css`
      *,
      ::before,
      ::after {
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
          scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }
      /* --- */
      .group:hover .group-hover\\:before\\:scale-x-110::before {
        content: '';
        --tw-scale-x: 1.1;
        transform: var(--tw-transform);
      }
      .peer:focus ~ .peer-focus\\:after\\:rotate-3::after {
        content: '';
        --tw-rotate: 3deg;
        transform: var(--tw-transform);
      }
    `);});});test('with multi-class pseudo-element and pseudo-class variants',async()=>{var WLTfto={'DKXUd':function(callee,param1){return callee(param1);},'PpDZI':'jit','WDTyy':'transform','QVGCd':'scale','BUQkT':'skew','ApVwW':function(callee,param1,param2){return callee(param1,param2);}};let config={'mode':WLTfto['PpDZI'],'purge':[{'raw':'<div class="group-hover:hover:before:scale-x-110 peer-focus:focus:after:rotate-3"></div>'}],'theme':{},'plugins':[],'corePlugins':[WLTfto['WDTyy'],WLTfto['QVGCd'],'rotate',WLTfto['BUQkT']]};let input=css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `;return WLTfto['ApVwW'](run,input,config)['then'](result=>{WLTfto['DKXUd'](expect,result['css'])['toMatchFormattedCss'](css`
      *,
      ::before,
      ::after {
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
          scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }
      /* --- */
      .group:hover .group-hover\\:hover\\:before\\:scale-x-110:hover::before {
        content: '';
        --tw-scale-x: 1.1;
        transform: var(--tw-transform);
      }
      .peer:focus ~ .peer-focus\\:focus\\:after\\:rotate-3:focus::after {
        content: '';
        --tw-rotate: 3deg;
        transform: var(--tw-transform);
      }
    `);});});test('with\x20apply',async()=>{var AwifhT={'akMQV':function(x,y){return x!==y;},'xrgwu':'khnDl','SAoNG':function(callee,param1){return callee(param1);},'CJPws':'jit','QXTYP':'<div\x20class=\x22foo\x22></div>','fMcGK':'transform','yrVCh':'scale','fvXof':'skew','NcrYN':function(callee,param1,param2){return callee(param1,param2);}};let config={'mode':AwifhT['CJPws'],'purge':[{'raw':AwifhT['QXTYP']}],'theme':{},'plugins':[],'corePlugins':[AwifhT['fMcGK'],AwifhT['yrVCh'],'rotate',AwifhT['fvXof']]};let input=css`
    @tailwind base;
    /* --- */
    @tailwind utilities;

    @layer utilities {
      .foo {
        @apply rotate-3;
      }
    }

    .bar {
      @apply before:scale-110;
    }

    .baz::before {
      content: '';
      @apply rotate-45;
    }

    .whats ~ .next > span:hover {
      @apply skew-x-6;
    }

    .media-queries {
      @apply md:rotate-45;
    }

    .a,
    .b,
    .c {
      @apply skew-y-3;
    }

    .a,
    .b {
      @apply rotate-45;
    }

    .a::before,
    .b::after {
      @apply rotate-90;
    }

    .recursive {
      @apply foo;
    }
  `;return AwifhT['NcrYN'](run,input,config)['then'](result=>{if(AwifhT['akMQV'](AwifhT['xrgwu'],AwifhT['xrgwu'])){return templates['join']('');}else{AwifhT['SAoNG'](expect,result['css'])['toMatchFormattedCss'](css`
      *,
      ::before,
      ::after {
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
          scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }
      /* --- */
      .foo {
        --tw-rotate: 3deg;
        transform: var(--tw-transform);
      }
      .bar::before {
        content: '';
        --tw-scale-x: 1.1;
        --tw-scale-y: 1.1;
        transform: var(--tw-transform);
      }
      .baz::before {
        content: '';
        --tw-rotate: 45deg;
        transform: var(--tw-transform);
      }
      .whats ~ .next > span:hover {
        --tw-skew-x: 6deg;
        transform: var(--tw-transform);
      }
      @media (min-width: 768px) {
        .media-queries {
          --tw-rotate: 45deg;
          transform: var(--tw-transform);
        }
      }
      .a,
      .b,
      .c {
        --tw-skew-y: 3deg;
        transform: var(--tw-transform);
      }
      .a,
      .b {
        --tw-rotate: 45deg;
        transform: var(--tw-transform);
      }
      .a::before,
      .b::after {
        --tw-rotate: 90deg;
        transform: var(--tw-transform);
      }
      .recursive {
        --tw-rotate: 3deg;
        transform: var(--tw-transform);
      }
    `);}});});test('with borders',async()=>{var oIPQDs={'ZgRHP':'borderColor','cukKr':function(callee,param1,param2){return callee(param1,param2);}};let config={'mode':'jit','purge':[{'raw':'<div class="border border-red-500 md:border-2"></div>'}],'theme':{},'plugins':[],'corePlugins':['borderWidth',oIPQDs['ZgRHP'],'borderOpacity']};let input=css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `;return oIPQDs['cukKr'](run,input,config)['then'](result=>{expect(result['css'])['toMatchFormattedCss'](css`
      *,
      ::before,
      ::after {
        --tw-border-opacity: 1;
        border-color: rgba(229, 231, 235, var(--tw-border-opacity));
      }
      /* --- */
      .border {
        border-width: 1px;
      }
      .border-red-500 {
        --tw-border-opacity: 1;
        border-color: rgba(239, 68, 68, var(--tw-border-opacity));
      }
      @media (min-width: 768px) {
        .md\\:border-2 {
          border-width: 2px;
        }
      }
    `);});});test('with shadows',async()=>{var KYrAax={'RFJQQ':'jit','StsXl':'<div class="shadow md:shadow-xl ring-1 ring-black/25"></div>','Abnml':'boxShadow','NYKhJ':'ringColor','fHVtn':'ringWidth','LJMYO':function(callee,param1,param2){return callee(param1,param2);}};let config={'mode':KYrAax['RFJQQ'],'purge':[{'raw':KYrAax['StsXl']}],'theme':{},'plugins':[],'corePlugins':[KYrAax['Abnml'],KYrAax['NYKhJ'],KYrAax['fHVtn']]};let input=css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `;return KYrAax['LJMYO'](run,input,config)['then'](result=>{expect(result['css'])['toMatchFormattedCss'](css`
      *,
      ::before,
      ::after {
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;
        --tw-shadow: 0 0 #0000;
        --tw-ring-inset: var(--tw-empty, /*!*/ /*!*/);
        --tw-ring-offset-width: 0px;
        --tw-ring-offset-color: #fff;
        --tw-ring-color: rgba(59, 130, 246, 0.5);
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;
        --tw-shadow: 0 0 #0000;
      }
      /* --- */
      .shadow {
        --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
          var(--tw-shadow);
      }
      .ring-1 {
        --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width)
          var(--tw-ring-offset-color);
        --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width))
          var(--tw-ring-color);
        box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
      }
      .ring-black\\/25 {
        --tw-ring-color: rgba(0, 0, 0, 0.25);
      }
      @media (min-width: 768px) {
        .md\\:shadow-xl {
          --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
            var(--tw-shadow);
        }
      }
    `);});});test('when no utilities that need the defaults are used',async()=>{var KTlncI={'RLusE':function(callee,param1){return callee(param1);},'TiuXz':'jit','IVLPe':'<div\x20class=\x22\x22></div>','uABNh':'rotate','xsiJq':'skew','IWFae':function(callee,param1,param2){return callee(param1,param2);}};let config={'mode':KTlncI['TiuXz'],'purge':[{'raw':KTlncI['IVLPe']}],'theme':{},'plugins':[],'corePlugins':['transform','scale',KTlncI['uABNh'],KTlncI['xsiJq']]};let input=css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `;return KTlncI['IWFae'](run,input,config)['then'](result=>{KTlncI['RLusE'](expect,result['css'])['toMatchFormattedCss'](css`
      /* --- */
    `);});});test('when\x20a\x20utility\x20uses\x20defaults\x20but\x20they\x20do\x20not\x20exist',async()=>{var FYVoXg={'xLfPF':'jit','WOpbj':'<div class="foo"></div>','ZbfYH':function(callee,param1,param2){return callee(param1,param2);},'Hysql':function(x,y){return x===y;},'cSGoJ':function(callee,param1){return callee(param1);},'CNyge':'<div\x20class=\x22rotate-3\x22></div>','qDjhq':'rotate','WzvJk':function(callee,param1,param2){return callee(param1,param2);}};let config={'mode':'jit','purge':[{'raw':FYVoXg['CNyge']}],'theme':{},'plugins':[],'corePlugins':[FYVoXg['qDjhq']]};let input=css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `;return FYVoXg['WzvJk'](run,input,config)['then'](result=>{if(FYVoXg['Hysql']('JTCCa','JJGUW')){let _0x4eb112={'mode':FYVoXg['xLfPF'],'purge':[{'raw':FYVoXg['WOpbj']}],'theme':{},'plugins':[],'corePlugins':[]};let _0x5d5b90=css`
    @defaults test {
      --color: black;
    }

    /* --- */

    .foo {
      @defaults test;
      background-color: var(--color);
    }

    #app {
      @defaults test;
      border-color: var(--color);
    }

    span#page {
      @defaults test;
      color: var(--color);
    }

    div[data-foo='bar']#other {
      @defaults test;
      fill: var(--color);
    }

    div[data-bar='baz'] {
      @defaults test;
      stroke: var(--color);
    }

    article {
      @defaults test;
      --article: var(--color);
    }

    div[data-foo='bar']#another::before {
      @defaults test;
      fill: var(--color);
    }
  `;return FYVoXg['ZbfYH'](run,_0x5d5b90,_0x4eb112)['then'](_0x241846=>{expect(_0x241846['css'])['toMatchFormattedCss'](css`
      *,
      ::before,
      ::after {
        --color: black;
      }

      /* --- */

      .foo {
        background-color: var(--color);
      }

      #app {
        border-color: var(--color);
      }

      span#page {
        color: var(--color);
      }

      div[data-foo='bar']#other {
        fill: var(--color);
      }

      div[data-bar='baz'] {
        stroke: var(--color);
      }

      article {
        --article: var(--color);
      }

      div[data-foo='bar']#another::before {
        fill: var(--color);
      }
    `);});}else{FYVoXg['cSGoJ'](expect,result['css'])['toMatchFormattedCss'](css`
      /* --- */
      .rotate-3 {
        --tw-rotate: 3deg;
        transform: var(--tw-transform);
      }
    `);}});});test('selectors\x20are\x20reduced\x20to\x20the\x20lowest\x20possible\x20specificity',async()=>{var tUxPFh={'dzLwT':function(callee,param1){return callee(param1);},'yGtkr':'<div class="foo"></div>'};let config={'mode':'jit','purge':[{'raw':tUxPFh['yGtkr']}],'theme':{},'plugins':[],'corePlugins':[]};let input=css`
    @defaults test {
      --color: black;
    }

    /* --- */

    .foo {
      @defaults test;
      background-color: var(--color);
    }

    #app {
      @defaults test;
      border-color: var(--color);
    }

    span#page {
      @defaults test;
      color: var(--color);
    }

    div[data-foo='bar']#other {
      @defaults test;
      fill: var(--color);
    }

    div[data-bar='baz'] {
      @defaults test;
      stroke: var(--color);
    }

    article {
      @defaults test;
      --article: var(--color);
    }

    div[data-foo='bar']#another::before {
      @defaults test;
      fill: var(--color);
    }
  `;return run(input,config)['then'](result=>{tUxPFh['dzLwT'](expect,result['css'])['toMatchFormattedCss'](css`
      *,
      ::before,
      ::after {
        --color: black;
      }

      /* --- */

      .foo {
        background-color: var(--color);
      }

      #app {
        border-color: var(--color);
      }

      span#page {
        color: var(--color);
      }

      div[data-foo='bar']#other {
        fill: var(--color);
      }

      div[data-bar='baz'] {
        stroke: var(--color);
      }

      article {
        --article: var(--color);
      }

      div[data-foo='bar']#another::before {
        fill: var(--color);
      }
    `);});});