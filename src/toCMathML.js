exports.name = 'toCMathML';
exports.path = 'expression.node.Node.prototype';
exports.factory = function(type, config, load, typed) {
  return function(){
    return `<math xmlns="http://www.w3.org/1998/Math/MathML">${this.toCMathMLNode()}</math>`;
  };
};
