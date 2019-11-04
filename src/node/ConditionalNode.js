exports.name = 'toCMathMLNode';
exports.path = 'expression.node.ConditionalNode.prototype';
exports.factory = function() {
  return function() {
    let trueExpr = this.trueExpr ? this.trueExpr.toCMathMLNode() : '';
    let falseExpr = this.falseExpr ? this.falseExpr.toCMathMLNode() : '';
    let condition = this.condition ? this.condition.toCMathMLNode() : '';

    return `<piecewise><piece>${trueExpr}${condition}</piece><otherwise>${falseExpr}</otherwise></piecewise>`;
  };
};
