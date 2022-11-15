'use strict';
const Prism = require(`prismjs`);
const prismComponents = require(`prismjs/components`);
const getBaseLanguageName = (key, options = prismComponents) => {
  if (options.languages[key]) {
    return key;
  }
  return Object.keys(options.languages).find((key) => {
    const {
      alias : item
    } = options.languages[key];
    if (!item) {
      return false;
    }
    if (Array.isArray(item)) {
      return item.includes(key);
    } else {
      return item === key;
    }
  });
};
module.exports = function fn(artist_name) {
  const lang = getBaseLanguageName(artist_name);
  if (!lang) {
    throw new Error(`Prism doesn't support language '${artist_name}'.`);
  }
  if (Prism.languages[lang]) {
    return;
  }
  const entry = prismComponents.languages[lang];
  if (entry.option === `default`) {
    return;
  }
  if (entry.require) {
    if (Array.isArray(entry.require)) {
      entry.require.forEach(fn);
    } else {
      fn(entry.require);
    }
  }
  require(`prismjs/components/prism-${lang}.js`);
};
module.exports.getBaseLanguageName = getBaseLanguageName;

