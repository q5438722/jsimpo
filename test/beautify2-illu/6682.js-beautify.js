eval(function (p, a, c, k, e, d) {
  e = function (c) {
    return c.toString(36);
  };if (!''.replace(/^/, String)) {
    while (c--) {
      d[c.toString(a)] = k[c] || c.toString(a);
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
}('8 7 9\'c\';8{3}9\'./d\';6 5 b={1:\'\',};5 4=(a=b,0)=>7(a,2=>{k(0.j){e 3:2.1=0.1.i(/@/h,\'\');f}});6 g 4;', 21, 21, ['action', 'username', 'draft', 'CHANGE_USERNAME', 'homeReducer', 'const', 'export', 'produce', 'import', 'from', 'state', 'initialState', 'immer', 'constants', 'case', 'break', 'default', 'gi', 'replace', 'type', 'switch'], 0, {}));