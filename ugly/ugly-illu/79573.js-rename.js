function strNumDiscode(e) {
  e = e.replace(/&forall;/g, "\u2200");e = e.replace(/&part;/g, "\u2202");e = e.replace(/&exist;/g, "\u2203");e = e.replace(/&empty;/g, "\u2205");e = e.replace(/&nabla;/g, "\u2207");e = e.replace(/&isin;/g, "\u2208");e = e.replace(/&notin;/g, "\u2209");e = e.replace(/&ni;/g, "\u220B");e = e.replace(/&prod;/g, "\u220F");e = e.replace(/&sum;/g, "\u2211");e = e.replace(/&minus;/g, "\u2212");e = e.replace(/&lowast;/g, "\u2217");e = e.replace(/&radic;/g, "\u221A");e = e.replace(/&prop;/g, "\u221D");e = e.replace(/&infin;/g, "\u221E");e = e.replace(/&ang;/g, "\u2220");e = e.replace(/&and;/g, "\u2227");e = e.replace(/&or;/g, "\u2228");e = e.replace(/&cap;/g, "\u2229");e = e.replace(/&cup;/g, "\u222A");e = e.replace(/&int;/g, "\u222B");e = e.replace(/&there4;/g, "\u2234");e = e.replace(/&sim;/g, "\u223C");e = e.replace(/&cong;/g, "\u2245");e = e.replace(/&asymp;/g, "\u2248");e = e.replace(/&ne;/g, "\u2260");e = e.replace(/&le;/g, "\u2264");e = e.replace(/&ge;/g, "\u2265");e = e.replace(/&sub;/g, "\u2282");e = e.replace(/&sup;/g, "\u2283");e = e.replace(/&nsub;/g, "\u2284");e = e.replace(/&sube;/g, "\u2286");e = e.replace(/&supe;/g, "\u2287");e = e.replace(/&oplus;/g, "\u2295");e = e.replace(/&otimes;/g, "\u2297");e = e.replace(/&perp;/g, "\u22A5");e = e.replace(/&sdot;/g, "\u22C5");return e;
}function strGreeceDiscode(e) {
  e = e.replace(/&Alpha;/g, "\u0391");e = e.replace(/&Beta;/g, "\u0392");e = e.replace(/&Gamma;/g, "\u0393");e = e.replace(/&Delta;/g, "\u0394");e = e.replace(/&Epsilon;/g, "\u0395");e = e.replace(/&Zeta;/g, "\u0396");e = e.replace(/&Eta;/g, "\u0397");e = e.replace(/&Theta;/g, "\u0398");e = e.replace(/&Iota;/g, "\u0399");e = e.replace(/&Kappa;/g, "\u039A");e = e.replace(/&Lambda;/g, "\u039B");e = e.replace(/&Mu;/g, "\u039C");e = e.replace(/&Nu;/g, "\u039D");e = e.replace(/&Xi;/g, "\u039D");e = e.replace(/&Omicron;/g, "\u039F");e = e.replace(/&Pi;/g, "\u03A0");e = e.replace(/&Rho;/g, "\u03A1");e = e.replace(/&Sigma;/g, "\u03A3");e = e.replace(/&Tau;/g, "\u03A4");e = e.replace(/&Upsilon;/g, "\u03A5");e = e.replace(/&Phi;/g, "\u03A6");e = e.replace(/&Chi;/g, "\u03A7");e = e.replace(/&Psi;/g, "\u03A8");e = e.replace(/&Omega;/g, "\u03A9");e = e.replace(/&alpha;/g, "\u03B1");e = e.replace(/&beta;/g, "\u03B2");e = e.replace(/&gamma;/g, "\u03B3");e = e.replace(/&delta;/g, "\u03B4");e = e.replace(/&epsilon;/g, "\u03B5");e = e.replace(/&zeta;/g, "\u03B6");e = e.replace(/&eta;/g, "\u03B7");e = e.replace(/&theta;/g, "\u03B8");e = e.replace(/&iota;/g, "\u03B9");e = e.replace(/&kappa;/g, "\u03BA");e = e.replace(/&lambda;/g, "\u03BB");e = e.replace(/&mu;/g, "\u03BC");e = e.replace(/&nu;/g, "\u03BD");e = e.replace(/&xi;/g, "\u03BE");e = e.replace(/&omicron;/g, "\u03BF");e = e.replace(/&pi;/g, "\u03C0");e = e.replace(/&rho;/g, "\u03C1");e = e.replace(/&sigmaf;/g, "\u03C2");e = e.replace(/&sigma;/g, "\u03C3");e = e.replace(/&tau;/g, "\u03C4");e = e.replace(/&upsilon;/g, "\u03C5");e = e.replace(/&phi;/g, "\u03C6");e = e.replace(/&chi;/g, "\u03C7");e = e.replace(/&psi;/g, "\u03C8");e = e.replace(/&omega;/g, "\u03C9");e = e.replace(/&thetasym;/g, "\u03D1");e = e.replace(/&upsih;/g, "\u03D2");e = e.replace(/&piv;/g, "\u03D6");e = e.replace(/&middot;/g, "\xB7");return e;
}function strcharacterDiscode(e) {
  e = e.replace(/&nbsp;/g, " ");e = e.replace(/&quot;/g, "'");e = e.replace(/&amp;/g, "&");e = e.replace(/&lt;/g, "<");e = e.replace(/&gt;/g, ">");e = e.replace(/&#8226;/g, "\u2022");return e;
}function strOtherDiscode(e) {
  e = e.replace(/&OElig;/g, "\u0152");e = e.replace(/&oelig;/g, "\u0153");e = e.replace(/&Scaron;/g, "\u0160");e = e.replace(/&scaron;/g, "\u0161");e = e.replace(/&Yuml;/g, "\u0178");e = e.replace(/&fnof;/g, "\u0192");e = e.replace(/&circ;/g, "\u02C6");e = e.replace(/&tilde;/g, "\u02DC");e = e.replace(/&ensp;/g, "");e = e.replace(/&emsp;/g, "");e = e.replace(/&thinsp;/g, "");e = e.replace(/&zwnj;/g, "");e = e.replace(/&zwj;/g, "");e = e.replace(/&lrm;/g, "");e = e.replace(/&rlm;/g, "");e = e.replace(/&ndash;/g, "\u2013");e = e.replace(/&mdash;/g, "\u2014");e = e.replace(/&lsquo;/g, "\u2018");e = e.replace(/&rsquo;/g, "\u2019");e = e.replace(/&sbquo;/g, "\u201A");e = e.replace(/&ldquo;/g, "\u201C");e = e.replace(/&rdquo;/g, "\u201D");e = e.replace(/&bdquo;/g, "\u201E");e = e.replace(/&dagger;/g, "\u2020");e = e.replace(/&Dagger;/g, "\u2021");e = e.replace(/&bull;/g, "\u2022");e = e.replace(/&hellip;/g, "\u2026");e = e.replace(/&permil;/g, "\u2030");e = e.replace(/&prime;/g, "\u2032");e = e.replace(/&Prime;/g, "\u2033");e = e.replace(/&lsaquo;/g, "\u2039");e = e.replace(/&rsaquo;/g, "\u203A");e = e.replace(/&oline;/g, "\u203E");e = e.replace(/&euro;/g, "\u20AC");e = e.replace(/&trade;/g, "\u2122");e = e.replace(/&larr;/g, "\u2190");e = e.replace(/&uarr;/g, "\u2191");e = e.replace(/&rarr;/g, "\u2192");e = e.replace(/&darr;/g, "\u2193");e = e.replace(/&harr;/g, "\u2194");e = e.replace(/&crarr;/g, "\u21B5");e = e.replace(/&lceil;/g, "\u2308");e = e.replace(/&rceil;/g, "\u2309");e = e.replace(/&lfloor;/g, "\u230A");e = e.replace(/&rfloor;/g, "\u230B");e = e.replace(/&loz;/g, "\u25CA");e = e.replace(/&spades;/g, "\u2660");e = e.replace(/&clubs;/g, "\u2663");e = e.replace(/&hearts;/g, "\u2665");e = e.replace(/&diams;/g, "\u2666");e = e.replace(/&#39;/g, "'");return e;
}function strDiscode(e) {
  e = strNumDiscode(e);e = strGreeceDiscode(e);e = strcharacterDiscode(e);e = strOtherDiscode(e);return e;
}function urlToHttpUrl(e, r) {
  const a = new RegExp("^//");
  const l = a.test(e);
  if (l) {
    e = `${r}:${e}`;
  }return e;
}export default { strDiscode: strDiscode, urlToHttpUrl: urlToHttpUrl };