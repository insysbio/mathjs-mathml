const dictFunc = require('../dictionary');

exports.name = 'toCMathMLNode';
exports.path = 'expression.node.OperatorNode.prototype';
exports.factory = function() {
  return function() {
    let args = this.args
      .map((arg) => arg.toCMathMLNode())
      .join('');
    return `<apply><${dictFunc[this.fn] || this.fn.name}/>${args}</apply>`;
  };
};
