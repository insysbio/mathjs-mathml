exports.name = 'toCMathMLNode';
exports.path = 'expression.node.ConstantNode.prototype';
exports.factory =  function() {
  return function(csymbols = {}) {
    let isExponential = String(this.value) // if it is exponential form
      .match(/^[\d]+[.]?[\d]*[e][+-][\d]+$/);
    let isBoolean = typeof this.value === 'boolean';
    if (isExponential) {
      var value = String(this.value).match(/^([\d]+[.]?[\d]*)[e]([+-][\d]+)$/);
      return `<cn type="e-notation">${value[1]}<sep/>${value[2]}</cn>`;
    } else if (isBoolean) {
      return `<${this.value}/>`
    } else {
      return `<cn>${this.value}</cn>`;
    }
  };
};
