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
}('J e I\'../h/r.K\'4 j=5 m i p(g,3){4 x=3/v/v 4 w=g.M 4 y=w/8 4 u=g.G/D 4 f=x/y+u 4 l=f>j 4 A=(l?\'+\':\'-\')+F.O(f-j).U(2)+\'s\'6{f,l,A}}m i q(3){6 P.X(e).R((k,d)=>{k[d]={...p(e[d],3),...e[d]}6 k},{})}m i N(h,B){V 7=h.Q()n(7.S){4 t=7[0].3 7=7.C(c=>{4 3=c.3[B]6{o:c.o,3,E:3>H,L:3/t,9:/\\.C$/.T(c.o),r:q(3)}})7.W((a,b)=>{n(a.9===b.9){6 b.3-a.3}z n(a.9&&!b.9){6 1}z{6-1}})}6 7}', 60, 60, ['', '', '', 'size', 'const', '', 'return', 'list', '', 'secondary', '', '', 'asset', 'key', 'speedsData', 'totalDownloadTime', 'datapoint', 'assets', 'function', 'DOWNLOAD_TIME_THRESHOLD_SECONDS', 'obj', 'isDownloadTimeOverThreshold', 'export', 'if', 'name', 'getSpeedData', 'getSpeeds', 'speeds', '', 'max', 'rttInSeconds', '1024', 'bandwidthInMbps', 'assetsSizeInMB', 'bandwidthInMBps', 'else', 'timeDifferenceToThreshold', 'sizeField', 'map', '1000', 'big', 'Math', 'rtt', '250000', 'from', 'import', 'json', 'ratio', 'mbps', 'buildSortedAssets', 'abs', 'Object', 'slice', 'reduce', 'length', 'test', 'toFixed', 'let', 'sort', 'keys'], 0, {}));
