'use strict';
exports["sourceNodes"] = ({
  actions : actions
}) => {
  const {
    createNode : andParamsAre
  } = actions;
  andParamsAre({
    "id" : "INDEPENDENT_NODE_1",
    "foo" : "baz",
    "internal" : {
      "type" : "IndependentChanging",
      "contentDigest" : "0"
    }
  });
};

