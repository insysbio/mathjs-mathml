exports.name = 'toCMathMLNode';
exports.path = 'expression.node.BlockNode.prototype';
exports.factory = function() {
  return function(csymbols = {}) {
   let blocks = this.blocks
    .map((block) => block.node.toCMathMLNode(csymbols))
    .join('');

    return `<list>${blocks}</list>`;
  };
};
