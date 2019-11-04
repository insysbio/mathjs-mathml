exports.name = 'toCMathMLNode';
exports.path = 'expression.node.ParenthesisNode.prototype';
exports.factory = function() {
  return function() {
    return this.content.toCMathMLNode();
  };
};
