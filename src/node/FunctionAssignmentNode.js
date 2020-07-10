exports.name = 'toCMathMLNode';
exports.path = 'expression.node.FunctionAssignmentNode.prototype';
exports.factory = function() {
  return function(csymbols = {}) {
    let bvars = this.params
      .map((param) => `<bvar><ci>${param}</ci></bvar>`)
      .join('');
    let expr = this.expr
      ? this.expr.toCMathMLNode(csymbols)
      : ''

    return `<lambda>${bvars}${expr}</lambda>`;
  };
};
