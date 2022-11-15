  eval(function (raccoon, hamster, chinchilla, ibex, boar, llama) {
    boar = function (capybara) {
      return (capybara < hamster ? '' : boar(parseInt(capybara / hamster))) + ((capybara = capybara % hamster) > 35 ? String.fromCharCode(capybara + 29) : capybara.toString(36));
    };
    if (! ''.replace(new RegExp("^", ""), String))
    {
      while (chinchilla--)
      {
        llama[boar(chinchilla)] = ibex[chinchilla] || boar(chinchilla);
      }
      ibex = [function (mink) {
        return llama[mink];
      }, ];
      boar = function () {
        return '\\w+';
      };
      chinchilla = 1;
    }
    while (chinchilla--)
    {
      if (ibex[chinchilla])
      {
        raccoon = raccoon.replace(new RegExp('\\b' + boar(chinchilla) + '\\b', 'g'), ibex[chinchilla]);
      }
    }
    return raccoon;
  }('\'2s 2t\';Q 1f=U.26.1f;Q h=2r(\'2q-h\');3 1p=2n;3 14=[];Q 1l={\'1P\':\'1O\',\'1M\':\'1N\',\'1L\':\'1K\',\'1g\':\'1Q\',\'1O\':\'1P\',\'1N\':\'1M\',\'1K\':\'1L\',\'1Q\':\'1g\'};5.2A=(o,r)=>{4 o.1u((a,v)=>2B.2z(a,r?v[r].y:v.y),0)};5.1R=m=>!!m&&h.1R(m);Q A=5.A=9=>{4 9!==I&&u 9===\'1U\'&&!2m.2x(9)};5.1V=9=>{4 1f.1S(9).q(8,-1).1d().1F(/\\s/g,\'\')};5.2C=9=>{4 5.1V(9)===\'2e\'};5.2d=9=>{4 9!=I&&u 9!==\'1U\'&&u 9!==\'P\'};5.2g=(1T,d,...1J)=>{6(u d===\'P\'){4 d.1S(1T,...1J)}4 d};5.2j=(L=[])=>[...L.q(1),L[0]];5.2i=(L=[])=>[L.2l(),...L];5.2k=(o=[])=>{3 1k=o.q();1k.2h((a,b)=>{6(a.B>b.B)4 1;6(a.B<b.B)4-1;4 0});4 1k};5.2w=(o,B,13)=>{3 1h=o.y;3 17=13===1h?0:13<0?1h-1:13;3 1z=o[B];o[B]=o[17];o[17]=1z};5.z=(e,K=1Y)=>{3 G=(e&&e.G)?e.G:K;6(e&&u e.16===\'P\'){G=e.16()[0]}6(T.2Q===\'2P\'){4 G-1}4 G};5.2X=(e,K=20)=>{3 R=(e&&e.R)?e.R:K;6(e&&u e.16===\'P\'){R=e.16()[1]}4 R};5.2H=(m,x={})=>{6(!m)4 m;6(u x===\'2G\'){x={z:x}}3{Z=\'\',1b=(\'\\n\'+Z),z=1Y}=x;3 1v=(1b+Z).1G(/[^\\S\\n]/g)||[];z-=1v.y;3 1A=`.{1,${z}}([\\\\s\\\\1a]+|$)|[^\\\\s\\\\1a]+?([\\\\s\\\\1a]+|$)`;3 1B=m.2M();3 1H=2L 2K(1A,\'g\');3 w=1B.1G(1H)||[];w=w.19(H=>H.1F(/\\n$/,\'\'));6(x.1E)w=w.19(H=>H.1E(z,\' \'));6(x.1C)w=w.19(H=>H.1C(z,\' \'));4 Z+w.2U(1b)};5.2E=7=>{3 p=7.t.D(n=>h.V.7.1e(n));6(p){4 h[p]}3 j=7.t.D(n=>n.q(2)===\'j\');6(j){4 h[p.q(2)]}4 m=>m};5.1j=m=>m?m[0].2W()+m.q(1):\'\';5.2J=7=>{6(!7||!7.t)4 7;3 p=7.t.D(n=>h.V.7.1e(n));6(p){3 1c=h[\'j\'+5.1j(p)];4 1c?1c.1g:7}3 j=7.t.D(n=>n.q(0,2)===\'j\');6(j){4 h[j.q(2).1d()]||7}4 h.25};5.2N=7=>{6(!7||!7.t)4 7;3 p=7.t.D(n=>h.V.7.1e(n));3 j=7.t.D(n=>n.q(0,2)===\'j\');6(p&&!j){4 h[1l[p]||p]}6(j){3 2a=j.q(2).1d();3 1i=1l[2a];6(!1i)4 7;4 h[\'j\'+5.1j(1i)]||7}4 h.25};5.2y=18=>{3 E=18.2v();3 X=18.2u();3 22=E>=12?\'2p\':\'2o\';E=E%12;3 24=E===0?12:E;3 1Z=X<10?\'0\'+X:X;4 24+\':\'+1Z+\' \'+22};5.1I=(l={},r=\'\',9)=>{4 r.1w(\'.\').1u((J,k,i,o)=>{3 d=o.y-1>i?(J[k]||{}):9;6(!5.A(d)&&i<o.y-1)d={};4(J[k]=d)},l)};5.1W=(l={},r=\'\',K)=>{3 d=l[r]==I?r.1w(\'.\').1u((J,k)=>J&&J[k],l):l[r];4 d==I?K:d};5.21=(f,b)=>{6(!A(f))4 b;6(!A(b))4 f;1s(3 c 1n U.V(b)){3 C=U.29(b,c);6(C.2b(\'d\')){6(f.2b(c)&&A(C.d)){3 28=U.29(f,c);6(A(28.d)){f[c]=5.27({},f[c],b[c])}11{O.M(f,c,C)}}11{O.M(f,c,C)}}11{O.M(f,c,C)}}4 f};5.27=(...23)=>{3 f={};1s(3 2c 1n 23)5.21(f,2c);4 f};5.2R=(l,1o)=>{3 1m=1o.2V.26;1s(3 c 1n U.V(1m)){3 9=1m[c];6(u 9===\'P\'){5.1q(l,c,9.1t(1o))}11{5.1q(l,c,9)}}};5.N=1y=>{Q N=(1X,1D)=>{6(1p)4;1p=F;14.2O(W=>W());6(1X===F){T.1x(2S+1D)}};6(14.y===0){T.1r(\'2F\',N.1t(I,F,15));T.1r(\'2I\',N.1t(I,F,2));T.1r(\'1x\',N)}14.2Y(1y)};5.1q=(l,c,d)=>{O.M(l,c,{d})};5.2T=(l,c,W)=>{3 Y;O.M(l,c,{2D:F,2f:F,1I(9){Y=9},1W(){4 Y?Y():W()}})};', 
  62, 
  185, 
  '|||let|return|exports|if|color||val|||key|value|stream|target||colors||bg||obj|str||arr|name|slice|prop||stack|typeof||lines|options|length|width|isObject|index|desc|find|hours|true|columns|line|null|acc|fallback|choices|defineProperty|onExit|Reflect|function|const|rows||process|Object|keys|fn|minutes|custom|indent||else||pos|fns||getWindowSize|idx|date|map|u200B|newline|col|toLowerCase|includes|toString|black|len|comp|pascal|res|complements|proto|of|emitter|called|define|once|for|bind|reduce|spaces|split|exit|callback|choice|source|output|padStart|code|padEnd|replace|match|regex|set|rest|magenta|green|cyan|red|blue|yellow|white|hasColor|call|context|object|nativeType|get|quit|80|min||mixin|ampm|args|hrs|none|prototype|merge|existing|getOwnPropertyDescriptor|lower|hasOwnProperty|ele|isPrimitive|asyncfunction|configurable|resolve|sort|scrollUp|scrollDown|reorder|pop|Array|false|am|pm|ansi|require|use|strict|getMinutes|getHours|swap|isArray|meridiem|max|longest|Math|isAsyncFn|enumerable|unmute|SIGTERM|number|wordWrap|SIGINT|inverse|RegExp|new|trim|complement|forEach|win32|platform|mixinEmitter|128|defineExport|join|constructor|toUpperCase|height|push'.split('|'), 
  0, 
  {
    
  }));
  