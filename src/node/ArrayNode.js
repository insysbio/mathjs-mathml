exports.name = 'toCMathMLNode';
exports.path = 'expression.node.ArrayNode.prototype';
exports.factory = function() {
  return function(csymbols = {}) {
    let items = this.items
      .map((item) => item.toCMathMLNode(csymbols))
      .join('');

    return `<list>${items}</list>`;
  };
};
