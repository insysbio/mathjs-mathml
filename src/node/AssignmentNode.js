exports.name = 'toCMathMLNode';
exports.path = 'expression.node.AssignmentNode.prototype';
exports.factory = function() {
  return function(csymbols = {}) {
    return `<apply><eq/>${this.object.toCMathMLNode(csymbols)}${this.value.toCMathMLNode(csymbols)}</apply>`;
  };
};
