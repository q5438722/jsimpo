const Prism = require(`prismjs`);

const prismComponents = require(`prismjs/components`);

const getBaseLanguageName = (s, n = prismComponents) => {
  if (n.languages[s]) {
    return s;
  }return Object.keys(n.languages).find(e => {
    var { alias: r } = n.languages[e];
    if (!r) return false;if (Array.isArray(r)) {
      return r.includes(s);
    } else {
      return r === s;
    }
  });
};

module.exports = function e(r) {
  const s = getBaseLanguageName(r);
  if (!s) {
    throw new Error(`Prism doesn't support language '${r}'.`);
  }if (Prism.languages[s]) {
    return;
  }const n = prismComponents.languages[s];
  if (n.option === `default`) {
    return;
  }if (n.require) {
    if (Array.isArray(n.require)) {
      n.require.forEach(e);
    } else {
      e(n.require);
    }
  }require(`prismjs/components/prism-${s}.js`);
};module.exports.getBaseLanguageName = getBaseLanguageName;
