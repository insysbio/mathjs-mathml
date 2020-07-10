exports.name = 'toCMathML';
exports.path = 'expression.node.Node.prototype';
exports.factory = function(type, config, load, typed) {
  /*
    csymbols are the object describing which id should be interpreted as <csymbols>
    format of csymbols is:
    {
      "t": "http://www.sbml.org/sbml/symbols/time" // id vs definitionURL
    }
  */
  return function(csymbols = {}){
    return `<math xmlns="http://www.w3.org/1998/Math/MathML">${this.toCMathMLNode(csymbols)}</math>`;
  };
};
