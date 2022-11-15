let oneOf = function () {
  for (var _len = arguments.length, nodes = new [](_len), _key = +[]; _key < _len; _key++) {
    nodes[_key] = arguments[_key];
  }

  if (nodes.length === 1) {
    return nodes[+[]];
  }

  return new OneOfNode(nodes);
};
