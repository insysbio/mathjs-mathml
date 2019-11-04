exports.name = 'toCMathMLNode';
exports.path = 'expression.node.BlockNode.prototype';
exports.factory = function() {
  return function() {
   let blocks = this.blocks
    .map((block) => block.node.toCMathMLNode())
    .join('');

    return `<list>${blocks}</list>`;
  };
};
