exports.sourceNodes = ({ actions: e }) => {
  var { createNode: n } = e;
  n({ id: `INDEPENDENT_NODE_1`, foo: `baz`, internal: { type: `IndependentChanging`, contentDigest: `0` } });
};
