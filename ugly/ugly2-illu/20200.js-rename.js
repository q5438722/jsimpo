import { createRegExpFeaturePlugin } from "@babel/helper-create-regexp-features-plugin";export default function (e, r) {
  var { runtime: t = true } = r;
  if (typeof t !== "boolean") {
    throw new Error("The 'runtime' option must be boolean");
  }return createRegExpFeaturePlugin({ name: "transform-named-capturing-groups-regex", feature: "namedCaptureGroups", options: { runtime: t } });
}