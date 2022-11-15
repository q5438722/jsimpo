'use strict';
function removeComments(contents) {
  contents = contents.replace(/&forall;/g, "\u2200");
  contents = contents.replace(/&part;/g, "\u2202");
  contents = contents.replace(/&exist;/g, "\u2203");
  contents = contents.replace(/&empty;/g, "\u2205");
  contents = contents.replace(/&nabla;/g, "\u2207");
  contents = contents.replace(/&isin;/g, "\u2208");
  contents = contents.replace(/&notin;/g, "\u2209");
  contents = contents.replace(/&ni;/g, "\u220b");
  contents = contents.replace(/&prod;/g, "\u220f");
  contents = contents.replace(/&sum;/g, "\u2211");
  contents = contents.replace(/&minus;/g, "\u2212");
  contents = contents.replace(/&lowast;/g, "\u2217");
  contents = contents.replace(/&radic;/g, "\u221a");
  contents = contents.replace(/&prop;/g, "\u221d");
  contents = contents.replace(/&infin;/g, "\u221e");
  contents = contents.replace(/&ang;/g, "\u2220");
  contents = contents.replace(/&and;/g, "\u2227");
  contents = contents.replace(/&or;/g, "\u2228");
  contents = contents.replace(/&cap;/g, "\u2229");
  contents = contents.replace(/&cup;/g, "\u222a");
  contents = contents.replace(/&int;/g, "\u222b");
  contents = contents.replace(/&there4;/g, "\u2234");
  contents = contents.replace(/&sim;/g, "\u223c");
  contents = contents.replace(/&cong;/g, "\u2245");
  contents = contents.replace(/&asymp;/g, "\u2248");
  contents = contents.replace(/&ne;/g, "\u2260");
  contents = contents.replace(/&le;/g, "\u2264");
  contents = contents.replace(/&ge;/g, "\u2265");
  contents = contents.replace(/&sub;/g, "\u2282");
  contents = contents.replace(/&sup;/g, "\u2283");
  contents = contents.replace(/&nsub;/g, "\u2284");
  contents = contents.replace(/&sube;/g, "\u2286");
  contents = contents.replace(/&supe;/g, "\u2287");
  contents = contents.replace(/&oplus;/g, "\u2295");
  contents = contents.replace(/&otimes;/g, "\u2297");
  contents = contents.replace(/&perp;/g, "\u22a5");
  contents = contents.replace(/&sdot;/g, "\u22c5");
  return contents;
}
function filter(val) {
  val = val.replace(/&Alpha;/g, "\u0391");
  val = val.replace(/&Beta;/g, "\u0392");
  val = val.replace(/&Gamma;/g, "\u0393");
  val = val.replace(/&Delta;/g, "\u0394");
  val = val.replace(/&Epsilon;/g, "\u0395");
  val = val.replace(/&Zeta;/g, "\u0396");
  val = val.replace(/&Eta;/g, "\u0397");
  val = val.replace(/&Theta;/g, "\u0398");
  val = val.replace(/&Iota;/g, "\u0399");
  val = val.replace(/&Kappa;/g, "\u039a");
  val = val.replace(/&Lambda;/g, "\u039b");
  val = val.replace(/&Mu;/g, "\u039c");
  val = val.replace(/&Nu;/g, "\u039d");
  val = val.replace(/&Xi;/g, "\u039d");
  val = val.replace(/&Omicron;/g, "\u039f");
  val = val.replace(/&Pi;/g, "\u03a0");
  val = val.replace(/&Rho;/g, "\u03a1");
  val = val.replace(/&Sigma;/g, "\u03a3");
  val = val.replace(/&Tau;/g, "\u03a4");
  val = val.replace(/&Upsilon;/g, "\u03a5");
  val = val.replace(/&Phi;/g, "\u03a6");
  val = val.replace(/&Chi;/g, "\u03a7");
  val = val.replace(/&Psi;/g, "\u03a8");
  val = val.replace(/&Omega;/g, "\u03a9");
  val = val.replace(/&alpha;/g, "\u03b1");
  val = val.replace(/&beta;/g, "\u03b2");
  val = val.replace(/&gamma;/g, "\u03b3");
  val = val.replace(/&delta;/g, "\u03b4");
  val = val.replace(/&epsilon;/g, "\u03b5");
  val = val.replace(/&zeta;/g, "\u03b6");
  val = val.replace(/&eta;/g, "\u03b7");
  val = val.replace(/&theta;/g, "\u03b8");
  val = val.replace(/&iota;/g, "\u03b9");
  val = val.replace(/&kappa;/g, "\u03ba");
  val = val.replace(/&lambda;/g, "\u03bb");
  val = val.replace(/&mu;/g, "\u03bc");
  val = val.replace(/&nu;/g, "\u03bd");
  val = val.replace(/&xi;/g, "\u03be");
  val = val.replace(/&omicron;/g, "\u03bf");
  val = val.replace(/&pi;/g, "\u03c0");
  val = val.replace(/&rho;/g, "\u03c1");
  val = val.replace(/&sigmaf;/g, "\u03c2");
  val = val.replace(/&sigma;/g, "\u03c3");
  val = val.replace(/&tau;/g, "\u03c4");
  val = val.replace(/&upsilon;/g, "\u03c5");
  val = val.replace(/&phi;/g, "\u03c6");
  val = val.replace(/&chi;/g, "\u03c7");
  val = val.replace(/&psi;/g, "\u03c8");
  val = val.replace(/&omega;/g, "\u03c9");
  val = val.replace(/&thetasym;/g, "\u03d1");
  val = val.replace(/&upsih;/g, "\u03d2");
  val = val.replace(/&piv;/g, "\u03d6");
  val = val.replace(/&middot;/g, "\u00b7");
  return val;
}
function set(val) {
  val = val.replace(/&nbsp;/g, " ");
  val = val.replace(/&quot;/g, "'");
  val = val.replace(/&amp;/g, "&");
  val = val.replace(/&lt;/g, "<");
  val = val.replace(/&gt;/g, ">");
  val = val.replace(/&#8226;/g, "\u2022");
  return val;
}
function remove(val) {
  val = val.replace(/&OElig;/g, "\u0152");
  val = val.replace(/&oelig;/g, "\u0153");
  val = val.replace(/&Scaron;/g, "\u0160");
  val = val.replace(/&scaron;/g, "\u0161");
  val = val.replace(/&Yuml;/g, "\u0178");
  val = val.replace(/&fnof;/g, "\u0192");
  val = val.replace(/&circ;/g, "\u02c6");
  val = val.replace(/&tilde;/g, "\u02dc");
  val = val.replace(/&ensp;/g, "");
  val = val.replace(/&emsp;/g, "");
  val = val.replace(/&thinsp;/g, "");
  val = val.replace(/&zwnj;/g, "");
  val = val.replace(/&zwj;/g, "");
  val = val.replace(/&lrm;/g, "");
  val = val.replace(/&rlm;/g, "");
  val = val.replace(/&ndash;/g, "\u2013");
  val = val.replace(/&mdash;/g, "\u2014");
  val = val.replace(/&lsquo;/g, "\u2018");
  val = val.replace(/&rsquo;/g, "\u2019");
  val = val.replace(/&sbquo;/g, "\u201a");
  val = val.replace(/&ldquo;/g, "\u201c");
  val = val.replace(/&rdquo;/g, "\u201d");
  val = val.replace(/&bdquo;/g, "\u201e");
  val = val.replace(/&dagger;/g, "\u2020");
  val = val.replace(/&Dagger;/g, "\u2021");
  val = val.replace(/&bull;/g, "\u2022");
  val = val.replace(/&hellip;/g, "\u2026");
  val = val.replace(/&permil;/g, "\u2030");
  val = val.replace(/&prime;/g, "\u2032");
  val = val.replace(/&Prime;/g, "\u2033");
  val = val.replace(/&lsaquo;/g, "\u2039");
  val = val.replace(/&rsaquo;/g, "\u203a");
  val = val.replace(/&oline;/g, "\u203e");
  val = val.replace(/&euro;/g, "\u20ac");
  val = val.replace(/&trade;/g, "\u2122");
  val = val.replace(/&larr;/g, "\u2190");
  val = val.replace(/&uarr;/g, "\u2191");
  val = val.replace(/&rarr;/g, "\u2192");
  val = val.replace(/&darr;/g, "\u2193");
  val = val.replace(/&harr;/g, "\u2194");
  val = val.replace(/&crarr;/g, "\u21b5");
  val = val.replace(/&lceil;/g, "\u2308");
  val = val.replace(/&rceil;/g, "\u2309");
  val = val.replace(/&lfloor;/g, "\u230a");
  val = val.replace(/&rfloor;/g, "\u230b");
  val = val.replace(/&loz;/g, "\u25ca");
  val = val.replace(/&spades;/g, "\u2660");
  val = val.replace(/&clubs;/g, "\u2663");
  val = val.replace(/&hearts;/g, "\u2665");
  val = val.replace(/&diams;/g, "\u2666");
  val = val.replace(/&#39;/g, "'");
  return val;
}
function compile(lines) {
  lines = removeComments(lines);
  lines = filter(lines);
  lines = set(lines);
  lines = remove(lines);
  return lines;
}
function getSubstitutionRegExp(val, replacement) {
  const rNum = new RegExp("^//");
  const l = rNum.test(val);
  if (l) {
    val = `${replacement}:${val}`;
  }
  return val;
}
export default{
  strDiscode : compile,
  urlToHttpUrl : getSubstitutionRegExp
};

