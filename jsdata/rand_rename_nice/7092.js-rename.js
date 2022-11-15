'use strict';
import{
  LANGUAGES as LANGUAGES
}from "./constants";
export default LANGUAGES.filter((t) => {
  return t.highlight;
}).map((opts) => {
  return opts.short || opts.mode;
}).map((canCreateDiscussions) => {
  return [canCreateDiscussions, require(`highlight.js/lib/languages/${canCreateDiscussions}`)];
});

