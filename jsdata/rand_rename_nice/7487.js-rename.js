'use strict';
let value = null;
{
  const debugBuildConfig = /\?theme=(\w+)/.exec(window.location.href);
  if (debugBuildConfig) {
    value = debugBuildConfig[1];
  }
}
console.log("forced theme", value);
function jsonFixer() {
  return value;
}
export{
  jsonFixer as getForcedTheme
};

