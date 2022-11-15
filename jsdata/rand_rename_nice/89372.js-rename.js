'use strict';
exports.sourceNodes = ({
  actions : nodeActions
}) => {
  const {
    createNode : andParamsAre
  } = nodeActions;
  andParamsAre({
    id : `INDEPENDENT_NODE_1`,
    foo : `baz`,
    internal : {
      type : `IndependentChanging`,
      contentDigest : `0`
    }
  });
};

