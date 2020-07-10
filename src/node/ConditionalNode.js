exports.name = 'toCMathMLNode';
exports.path = 'expression.node.ConditionalNode.prototype';
exports.factory = function() {
  return function(csymbols = {}) {
    let trueExpr = this.trueExpr ? this.trueExpr.toCMathMLNode(csymbols) : '';
    let falseExpr = this.falseExpr ? this.falseExpr.toCMathMLNode(csymbols) : '';
    let condition = this.condition ? this.condition.toCMathMLNode(csymbols) : '';

    return `<piecewise><piece>${trueExpr}${condition}</piece><otherwise>${falseExpr}</otherwise></piecewise>`;
  };
};
