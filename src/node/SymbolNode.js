exports.name = 'toCMathMLNode';
exports.path = 'expression.node.SymbolNode.prototype';
exports.factory = function() {
  return function() {
    return `<ci>${this.name}</ci>`;
  };
};
