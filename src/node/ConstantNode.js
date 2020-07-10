exports.name = 'toCMathMLNode';
exports.path = 'expression.node.ConstantNode.prototype';
exports.factory =  function() {
  return function(csymbols = {}) {
    let check = String(this.value) // if it is exponential form
      .match(/^[\d]+[.]?[\d]*[e][+-][\d]+$/);
    if(check) {
      var value = String(this.value).match(/^([\d]+[.]?[\d]*)[e]([+-][\d]+)$/);
      return `<cn type="e-notation">${value[1]}<sep/>${value[2]}</cn>`;
    } else {
      return `<cn>${this.value}</cn>`;
    }
  };
};
