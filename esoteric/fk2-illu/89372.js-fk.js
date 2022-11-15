exports.sourceNodes = ({ actions }) => {
  var { createNode } = actions;

  createNode({
    id: `INDEPENDENT_NODE_1`,
    foo: `baz`,
    internal: {
      type: `IndependentChanging`,
      contentDigest: `+[]`
    }
  });
};
