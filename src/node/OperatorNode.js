const dictFunc = require('../dictionary');

exports.name = 'toCMathMLNode';
exports.path = 'expression.node.OperatorNode.prototype';
exports.factory = function() {
  return function(csymbols = {}) {
    let args = this.args
      .map((arg) => arg.toCMathMLNode(csymbols))
      .join('');
    return `<apply><${dictFunc[this.fn] || this.fn.name}/>${args}</apply>`;
  };
};
