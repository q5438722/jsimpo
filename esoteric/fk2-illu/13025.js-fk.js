const oneOf = function () {
  // Unknown loop control variable
  for (var _len = arguments.length, nodes = new [](_len), _key = 0; _key < _len; _key++) {
    nodes[_key] = arguments[_key];
  }

  if (nodes.length === 1) {
    return nodes[0];
  }

  return new OneOfNode(nodes);
};
