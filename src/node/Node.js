exports.name = 'toCMathMLNode';
exports.path = 'expression.node.Node.prototype';
exports.factory = function() {
  return function() {
    throw new Error(`toCMathML is not implemented for "${this.type}"`);
  };
};
