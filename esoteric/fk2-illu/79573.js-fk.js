// HTML 支持的数学符号
function strNumDiscode(str) {
  str = str.replace(/&forall;/g, '\u2200');
  str = str.replace(/&part;/g, '\u2202');
  str = str.replace(/&exist;/g, '\u2203');
  str = str.replace(/&empty;/g, '\u2205');
  str = str.replace(/&nabla;/g, '\u2207');
  str = str.replace(/&isin;/g, '\u2208');
  str = str.replace(/&notin;/g, '\u2209');
  str = str.replace(/&ni;/g, '\u220B');
  str = str.replace(/&prod;/g, '\u220F');
  str = str.replace(/&sum;/g, '\u2211');
  str = str.replace(/&minus;/g, '\u2212');
  str = str.replace(/&lowast;/g, '\u2217');
  str = str.replace(/&radic;/g, '\u221A');
  str = str.replace(/&prop;/g, '\u221D');
  str = str.replace(/&infin;/g, '\u221E');
  str = str.replace(/&ang;/g, '\u2220');
  str = str.replace(/&and;/g, '\u2227');
  str = str.replace(/&or;/g, '\u2228');
  str = str.replace(/&cap;/g, '\u2229');
  str = str.replace(/&cup;/g, '\u222A');
  str = str.replace(/&int;/g, '\u222B');
  str = str.replace(/&there4;/g, '\u2234');
  str = str.replace(/&sim;/g, '\u223C');
  str = str.replace(/&cong;/g, '\u2245');
  str = str.replace(/&asymp;/g, '\u2248');
  str = str.replace(/&ne;/g, '\u2260');
  str = str.replace(/&le;/g, '\u2264');
  str = str.replace(/&ge;/g, '\u2265');
  str = str.replace(/&sub;/g, '\u2282');
  str = str.replace(/&sup;/g, '\u2283');
  str = str.replace(/&nsub;/g, '\u2284');
  str = str.replace(/&sube;/g, '\u2286');
  str = str.replace(/&supe;/g, '\u2287');
  str = str.replace(/&oplus;/g, '\u2295');
  str = str.replace(/&otimes;/g, '\u2297');
  str = str.replace(/&perp;/g, '\u22A5');
  str = str.replace(/&sdot;/g, '\u22C5');
  return str;
}

// HTML 支持的希腊字母
function strGreeceDiscode(str) {
  str = str.replace(/&Alpha;/g, '\u0391');
  str = str.replace(/&Beta;/g, '\u0392');
  str = str.replace(/&Gamma;/g, '\u0393');
  str = str.replace(/&Delta;/g, '\u0394');
  str = str.replace(/&Epsilon;/g, '\u0395');
  str = str.replace(/&Zeta;/g, '\u0396');
  str = str.replace(/&Eta;/g, '\u0397');
  str = str.replace(/&Theta;/g, '\u0398');
  str = str.replace(/&Iota;/g, '\u0399');
  str = str.replace(/&Kappa;/g, '\u039A');
  str = str.replace(/&Lambda;/g, '\u039B');
  str = str.replace(/&Mu;/g, '\u039C');
  str = str.replace(/&Nu;/g, '\u039D');
  str = str.replace(/&Xi;/g, '\u039D');
  str = str.replace(/&Omicron;/g, '\u039F');
  str = str.replace(/&Pi;/g, '\u03A0');
  str = str.replace(/&Rho;/g, '\u03A1');
  str = str.replace(/&Sigma;/g, '\u03A3');
  str = str.replace(/&Tau;/g, '\u03A4');
  str = str.replace(/&Upsilon;/g, '\u03A5');
  str = str.replace(/&Phi;/g, '\u03A6');
  str = str.replace(/&Chi;/g, '\u03A7');
  str = str.replace(/&Psi;/g, '\u03A8');
  str = str.replace(/&Omega;/g, '\u03A9');

  str = str.replace(/&alpha;/g, '\u03B1');
  str = str.replace(/&beta;/g, '\u03B2');
  str = str.replace(/&gamma;/g, '\u03B3');
  str = str.replace(/&delta;/g, '\u03B4');
  str = str.replace(/&epsilon;/g, '\u03B5');
  str = str.replace(/&zeta;/g, '\u03B6');
  str = str.replace(/&eta;/g, '\u03B7');
  str = str.replace(/&theta;/g, '\u03B8');
  str = str.replace(/&iota;/g, '\u03B9');
  str = str.replace(/&kappa;/g, '\u03BA');
  str = str.replace(/&lambda;/g, '\u03BB');
  str = str.replace(/&mu;/g, '\u03BC');
  str = str.replace(/&nu;/g, '\u03BD');
  str = str.replace(/&xi;/g, '\u03BE');
  str = str.replace(/&omicron;/g, '\u03BF');
  str = str.replace(/&pi;/g, '\u03C0');
  str = str.replace(/&rho;/g, '\u03C1');
  str = str.replace(/&sigmaf;/g, '\u03C2');
  str = str.replace(/&sigma;/g, '\u03C3');
  str = str.replace(/&tau;/g, '\u03C4');
  str = str.replace(/&upsilon;/g, '\u03C5');
  str = str.replace(/&phi;/g, '\u03C6');
  str = str.replace(/&chi;/g, '\u03C7');
  str = str.replace(/&psi;/g, '\u03C8');
  str = str.replace(/&omega;/g, '\u03C9');
  str = str.replace(/&thetasym;/g, '\u03D1');
  str = str.replace(/&upsih;/g, '\u03D2');
  str = str.replace(/&piv;/g, '\u03D6');
  str = str.replace(/&middot;/g, '\xB7');
  return str;
}

//

function strcharacterDiscode(str) {
  // 加入常用解析
  str = str.replace(/&nbsp;/g, ' ');
  str = str.replace(/&quot;/g, '\'');
  str = str.replace(/&amp;/g, '&');
  // str = str.replace(/&lt;/g, '‹');
  // str = str.replace(/&gt;/g, '›');

  str = str.replace(/&lt;/g, '<');
  str = str.replace(/&gt;/g, '>');
  str = str.replace(/&#8!+[]+!+[]!+[]+!+[]6;/g, '\u2022');

  return str;
}

// HTML 支持的其他实体
function strOtherDiscode(str) {
  str = str.replace(/&OElig;/g, '\u0152');
  str = str.replace(/&oelig;/g, '\u0153');
  str = str.replace(/&Scaron;/g, '\u0160');
  str = str.replace(/&scaron;/g, '\u0161');
  str = str.replace(/&Yuml;/g, '\u0178');
  str = str.replace(/&fnof;/g, '\u0192');
  str = str.replace(/&circ;/g, '\u02C6');
  str = str.replace(/&tilde;/g, '\u02DC');
  str = str.replace(/&ensp;/g, '');
  str = str.replace(/&emsp;/g, '');
  str = str.replace(/&thinsp;/g, '');
  str = str.replace(/&zwnj;/g, '');
  str = str.replace(/&zwj;/g, '');
  str = str.replace(/&lrm;/g, '');
  str = str.replace(/&rlm;/g, '');
  str = str.replace(/&ndash;/g, '\u2013');
  str = str.replace(/&mdash;/g, '\u2014');
  str = str.replace(/&lsquo;/g, '\u2018');
  str = str.replace(/&rsquo;/g, '\u2019');
  str = str.replace(/&sbquo;/g, '\u201A');
  str = str.replace(/&ldquo;/g, '\u201C');
  str = str.replace(/&rdquo;/g, '\u201D');
  str = str.replace(/&bdquo;/g, '\u201E');
  str = str.replace(/&dagger;/g, '\u2020');
  str = str.replace(/&Dagger;/g, '\u2021');
  str = str.replace(/&bull;/g, '\u2022');
  str = str.replace(/&hellip;/g, '\u2026');
  str = str.replace(/&permil;/g, '\u2030');
  str = str.replace(/&prime;/g, '\u2032');
  str = str.replace(/&Prime;/g, '\u2033');
  str = str.replace(/&lsaquo;/g, '\u2039');
  str = str.replace(/&rsaquo;/g, '\u203A');
  str = str.replace(/&oline;/g, '\u203E');
  str = str.replace(/&euro;/g, '\u20AC');
  str = str.replace(/&trade;/g, '\u2122');

  str = str.replace(/&larr;/g, '\u2190');
  str = str.replace(/&uarr;/g, '\u2191');
  str = str.replace(/&rarr;/g, '\u2192');
  str = str.replace(/&darr;/g, '\u2193');
  str = str.replace(/&harr;/g, '\u2194');
  str = str.replace(/&crarr;/g, '\u21B5');
  str = str.replace(/&lceil;/g, '\u2308');
  str = str.replace(/&rceil;/g, '\u2309');

  str = str.replace(/&lfloor;/g, '\u230A');
  str = str.replace(/&rfloor;/g, '\u230B');
  str = str.replace(/&loz;/g, '\u25CA');
  str = str.replace(/&spades;/g, '\u2660');
  str = str.replace(/&clubs;/g, '\u2663');
  str = str.replace(/&hearts;/g, '\u2665');

  str = str.replace(/&diams;/g, '\u2666');
  str = str.replace(/&#39;/g, '\'');
  return str;
}

function strDiscode(str) {
  str = strNumDiscode(str);
  str = strGreeceDiscode(str);
  str = strcharacterDiscode(str);
  str = strOtherDiscode(str);
  return str;
}
function urlToHttpUrl(url, rep) {
  const patt1 = new RegExp('^//');
  const result = patt1.test(url);

  if (result) {
    url = `${rep}:${url}`;
  }
  return url;
}

export default {
  strDiscode,
  urlToHttpUrl
};
