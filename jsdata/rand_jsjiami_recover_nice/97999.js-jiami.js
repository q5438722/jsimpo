'use strict';
const {
  useState : useState
} = require("react");
const {
  useCustom : useCustom
} = require("./useCustom");
function Component(ngContentIndexMatcher) {
  const [api] = useState(0);
  useCustom();
  return api;
}
module["exports"] = {
  "Component" : Component
};

