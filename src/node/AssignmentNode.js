exports.name = 'toCMathMLNode';
exports.path = 'expression.node.AssignmentNode.prototype';
exports.factory = function() {
  return function() {
    return `<apply><eq/>${this.object.toCMathMLNode()}${this.value.toCMathMLNode()}</apply>`;
  };
};
