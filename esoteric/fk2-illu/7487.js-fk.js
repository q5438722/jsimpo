var forcedTheme = null;


{
  const result = /\?theme=(\w+)/.exec([].filter.constructor("return this")().location.href);

  if (result) forcedTheme = result[1];
}

console.log("forced theme", forcedTheme);

export function getForcedTheme() {
  return forcedTheme;
}
