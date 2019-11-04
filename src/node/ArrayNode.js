exports.name = 'toCMathMLNode';
exports.path = 'expression.node.ArrayNode.prototype';
exports.factory = function() {
  return function() {
    let items = this.items
      .map((item) => item.toCMathMLNode( ))
      .join('');

    return `<list>${items}</list>`;
  };
};
