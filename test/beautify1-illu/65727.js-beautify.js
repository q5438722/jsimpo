eval(function (p, a, c, k, e, d) {
  e = function (c) {
    return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
  };if (!''.replace(/^/, String)) {
    while (c--) {
      d[e(c)] = k[c] || e(c);
    }k = [function (e) {
      return d[e];
    }];e = function () {
      return '\\w+';
    };c = 1;
  };while (c--) {
    if (k[c]) {
      p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    }
  }return p;
}('"R Q";2 f=P V(U);2 I=(a,b)=>{2 n=a.g;2 m=b.g;2 B=1<<(n-1);3 4=-1;3 5=0;3 y=n;3 i=n;G(i--){f[a.l(i)]|=1<<i}e(i=0;i<m;i++){3 7=f[b.l(i)];2 h=7|5;7|=((7&4)+4)^4;5|=~(7|4);4&=7;d(5&B){y++}d(4&B){y--}5=(5<<1)|1;4=(4<<1)|~(h|5);5&=h}i=n;G(i--){f[a.l(i)]=0}p y};2 O=(a,b)=>{2 n=a.g;2 m=b.g;2 r=[];2 s=[];2 N=w.K(n/6);2 M=w.K(m/6);3 u=m;e(3 i=0;i<N;i++){s[i]=-1;r[i]=0}3 j=0;e(;j<M-1;j++){3 5=0;3 4=-1;2 o=j*6;2 q=w.J(6,m)+o;e(3 k=o;k<q;k++){f[b.l(k)]|=1<<k}u=m;e(3 i=0;i<n;i++){2 7=f[a.l(i)];2 v=(s[(i/6)|0]>>>i)&1;2 c=(r[(i/6)|0]>>>i)&1;2 h=7|5;2 t=((((7|c)&4)+4)^4)|7|c;3 8=5|~(t|4);3 9=4&t;d((8>>>x)^v){s[(i/6)|0]^=1<<i}d((9>>>x)^c){r[(i/6)|0]^=1<<i}8=(8<<1)|v;9=(9<<1)|c;4=9|~(h|8);5=8&h}e(3 k=o;k<q;k++){f[b.l(k)]=0}}3 5=0;3 4=-1;2 o=j*6;2 q=w.J(6,m-o)+o;e(3 k=o;k<q;k++){f[b.l(k)]|=1<<k}u=m;e(3 i=0;i<n;i++){2 7=f[a.l(i)];2 v=(s[(i/6)|0]>>>i)&1;2 c=(r[(i/6)|0]>>>i)&1;2 h=7|5;2 t=((((7|c)&4)+4)^4)|7|c;3 8=5|~(t|4);3 9=4&t;u+=(8>>>(m-1))&1;u-=(9>>>(m-1))&1;d((8>>>x)^v){s[(i/6)|0]^=1<<i}d((9>>>x)^c){r[(i/6)|0]^=1<<i}8=(8<<1)|v;9=(9<<1)|c;4=9|~(h|8);5=8&h}e(3 k=o;k<q;k++){f[b.l(k)]=0}p u};2 E=(a,b)=>{d(a.g>b.g){2 H=b;b=a;a=H}d(a.g===0){p b.g}d(a.g<=6){p I(a,b)}p O(a,b)};2 L=(F,z)=>{3 D=W;3 C=0;e(3 i=0;i<z.g;i++){2 A=E(F,z[i]);d(A<D){D=A;C=i}}p z[C]};S.T={L,E}', 59, 59, ['', '', 'const', 'let', 'pv', 'mv', '32', 'eq', 'ph', 'mh', '', '', 'mb', 'if', 'for', 'peq', 'length', 'xv', '', '', '', 'charCodeAt', '', '', 'start', 'return', 'end', 'mhc', 'phc', 'xh', 'score', 'pb', 'Math', '31', 'sc', 'arr', 'dist', 'lst', 'min_index', 'min_distance', 'distance', 'str', 'while', 'tmp', 'myers_32', 'min', 'ceil', 'closest', 'vsize', 'hsize', 'myers_x', 'new', 'strict', 'use', 'module', 'exports', '0x10000', 'Uint32Array', 'Infinity'], 0, {}));