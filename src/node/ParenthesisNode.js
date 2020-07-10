exports.name = 'toCMathMLNode';
exports.path = 'expression.node.ParenthesisNode.prototype';
exports.factory = function() {
  return function(csymbols = {}) {
    return this.content.toCMathMLNode(csymbols);
  };
};
