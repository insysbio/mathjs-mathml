exports.name = 'toCMathMLNode';
exports.path = 'expression.node.SymbolNode.prototype';
exports.factory = function() {
  return function(csymbols = {}) {
    let definitionURL = csymbols[this.name];
    if (typeof definitionURL === 'undefined') {
      return `<ci>${this.name}</ci>`;
    } else {
      // use <csymbol here>
      return `<csymbol definitionURL="${definitionURL}">${this.name}</csymbol>`;
    }
  };
};
